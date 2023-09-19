const butText   = document.querySelector(".button-text");
const butGeo    = document.querySelector(".button-geo" );
const inp       = document.querySelector("input"       );
const mesWindow = document.querySelector(".mes-window" );

const websocket = new WebSocket("wss://echo-ws-service.herokuapp.com");

websocket.onopen = () => console.log("Connected");
websocket.onmessage = (e) => displayMes(e.data, false);
websocket.onclose = () => console.log("Disconnected");

butText.addEventListener("click", sendText);
butGeo.addEventListener("click", sendGeo);

function sendText() {
  if (inp.value) {
    displayMes(inp.value);
    websocket.send(inp.value);
    inp.value = "";
  } else alert("Please enter a message");
}

function sendGeo() {
  navigator.geolocation.getCurrentPosition((position) => {
    const coords = position.coords.latitude + "/" + position.coords.longitude
    websocket.send(coords);
    websocket.onmessage = () => websocket.onmessage = (e) => displayMes(e.data, false);
    displayMes(coords, true, true);
  });
}

function displayMes(text, displayRight = true, geo = false) {
  const mes = document.createElement("div");
  mes.classList.add("mes");
  if (geo) {
    const uri = `https://www.openstreetmap.org/#map=17/${text}`;
    mes.innerHTML = `<a href=${uri}>Гео-позиция</a>`;
  } else mes.innerHTML = text;
  if (displayRight) mes.style.alignSelf = "end";
  mesWindow.appendChild(mes);
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  websocket.send(lat + "," + lon);
}
