const file = document.querySelector('#project-image')
let dropbox = document.getElementById('dropbox')
file.addEventListener('change', (e) => {
  const imgSrc = URL.createObjectURL(e.target.files[0])
  dropbox.innerHTML = ''
  dropbox.innerHTML = `
<img alt="Project-image-from-javascript" src='${imgSrc}'>
    `
})
const dragenter = (e) => {
  e.stopPropagation()
  e.preventDefault()
}
const dragover = (e) => {
  e.stopPropagation()
  e.preventDefault()
}
const drop = (e) => {
  e.stopPropagation()
  e.preventDefault()
  const dt = e.dataTransfer
  const files = [...dt.files]
  const imgSrc = URL.createObjectURL(files[0])
  dropbox.innerHTML = ''
  dropbox.innerHTML = `
    <img alt="Project-image-from-javascript" src='${imgSrc}'>
        `
}
dropbox.addEventListener('dragenter', dragenter, false)
dropbox.addEventListener('dragover', dragover, false)
dropbox.addEventListener('drop', drop, false)
