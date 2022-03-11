let imageSrc = ''
const file = document.querySelector('#project-image')
let dropbox = document.getElementById('dropbox')
file.addEventListener('change', (e) => {
  const imgSrc = URL.createObjectURL(e.target.files[0])
  dropbox.innerHTML = ''
  dropbox.innerHTML = `
<img alt="Project-image-from-javascript" src='${imgSrc}'>
    `
  imageSrc = imgSrc
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
  imageSrc = imgSrc
}
dropbox.addEventListener('dragenter', dragenter, false)
dropbox.addEventListener('dragover', dragover, false)
dropbox.addEventListener('drop', drop, false)

// === project show ===
// project array
let projects = []

mapProject()
function mapProject() {
  const projectShow = document.querySelector('.project-show')
  projectShow.innerHTML = ''
  // validate project length
  if (projects.length === 0) {
    const htmlTmp = ` <div class="main-card mb-3">
    <h3 class="text-center">
      No project found !!! <br>
      Add one :)
    </h3>
  </div>`
    projectShow.innerHTML = htmlTmp
    return
  }
  projects.map((project) => {
    // Destructure project object
    const {
      Image,
      Name,
      Discribtion,
      Time,
      Progress,
      GitHub_Link,
      Live_Link,
    } = project
    // create a template for mapping
    const htmlTmp = `
    <div class="main-card">
    <div class="img-div">

        <img src="${Image}">
    </div>
    <div class="text-div">
        <b>Name:</b> ${Name} <br>
        <b>Discribtion:</b>${Discribtion} <br>
        <b>Time:</b> ${Time} <br>
        <b>Progress:</b> ${Progress} <br>
        ${
          // check if git link is empty
          GitHub_Link !== ''
            ? `
          <div class="d-flex justify-content-between">
          <b>GitHub_Link:</b><div class="d-flex justify-content-around w-100">
          <a href="${GitHub_Link}">
          <i class="fas fa-globe"> Open</i>
          </a>
          <a href="">
          <i class="fas fa-clipboard"> Copy link</i>
          </a>
          </div>
          </div>`
            : `
          <div class="d-flex">
          <b>GitHub_Link:</b><div class='d-flex justify-content-between w-100'> <span class='mx-1'> Empty</span><i class="fas fa-folder-plus mx-3"></i></div>
          </div>`
        }
        ${
          // check if git link is empty
          Live_Link !== ''
            ? ` 
        <div class="d-flex justify-content-between">
        <b>Live_Link:</b> <div class="d-flex justify-content-around w-100">
            <a href="${Live_Link}">
              <i class="fas fa-globe"> Open</i>
            </a>
            <a href="">
              <i class="fas fa-clipboard"> Copy link</i>
            </a>
            </div>
          </div>`
            : `
            <div class="d-flex">
            <b>Live_Link:</b><div class='d-flex justify-content-between w-100'> <span class='mx-1'> Empty</span><i class="fas fa-folder-plus mx-3"></i></div>
            </div> `
        }
       
</div>`
    // insect template to Dom
    projectShow.innerHTML += htmlTmp
  })
}
// progress variable
let progress = ''
// get the selected progress
const checkboxs = document.querySelectorAll('.progress-checkbox')
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const p = e.target.value
    progress = p
  })
})
// get project form
const projectForm = document.querySelector('#project-form')
// add event listener on submite
projectForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputs = e.target
  let projectProgress = ''

  // validate inpusts
  if (inputs[0].value === '') return console.log('Name is requried')
  if (inputs[1].value === '') return console.log('Discribtion is requried')
  if (inputs[2].value === '') console.log('Date not selected')

  if (inputs[3].checked === true) {
    projectProgress = 'Pending'
  }
  if (inputs[4].checked === true) {
    projectProgress = 'InProgress'
  }
  if (inputs[5].checked === true) {
    projectProgress = 'Completed'
  }

  if (projectProgress === '') return console.log('Progress is not selected')

  if (inputs[6].value === '') console.log('Git link not given')
  if (inputs[7].value === '') console.log('Live link not given')

  // validation end

  // create new object
  const newObj = {
    Image: imageSrc,
    Name: inputs[0].value,
    Discribtion: inputs[1].value,
    Time: inputs[2].value,
    Progress: projectProgress,
    GitHub_Link: inputs[6].value,
    Live_Link: inputs[7].value,
  }

  // add new object to the project array
  projects.push(newObj)
  // remap the array of objects
  mapProject()

  dropbox.innerHTML = `
<label for="project-image">
  <i class="fas fa-image">
    <p>Click to Upload picture
      <br>
      OR
      <br>
      Drag & Drop
    </p>
  </i>
</label>
<input type="file" id="project-image" placeholder="project-image">
`
})
