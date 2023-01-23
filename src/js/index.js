const viewTrailer = document.querySelector('.view-trailer')
const modal = document.querySelector('.modal')
const fecharModal2 = document.querySelector('.modal')
const video = document.getElementById('video')

function alterModal() {
    modal.classList.toggle('abrir-modal')
}

viewTrailer.addEventListener('click', () => {
    alterModal()
    video.setAttribute('src', 'https://www.youtube.com/embed/51mpmIFnXWw')
})

fecharModal2.addEventListener('click', () => {
    alterModal()
    video.setAttribute('src', '')
})