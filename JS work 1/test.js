const but = document.querySelector('button')
const img = document.querySelectorAll('.twin-icon img')

but.addEventListener('click', swap)

function swap() {
    for (let i of img) {
        if (getComputedStyle(i).opacity === '1') i.style.opacity = '0'
        else i.style.opacity = '1'
    }
}