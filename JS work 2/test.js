const but = document.querySelector('button')

but.addEventListener('click', _alert)

function _alert() {
    let text = `Ширина экрана: ${screen.width}\nВысота экрана: ${screen.height}
Ширина области просмотра с полосой прокрутки: ${innerWidth}
Высота области просмотра с полосой прокрутки: ${innerHeight}
Ширина области просмотра без полосы прокрутки: ${document.documentElement.clientWidth}
Высота области просмотра без полосы прокрутки: ${document.documentElement.clientHeight}`
    alert(text)
}