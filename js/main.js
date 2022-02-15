const desktopMenuBtn = document.querySelector('#desktop-menu-btn')
const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
const mainDashboardPage = document.querySelector('.main-dashboard-page')
let openNav = 1

desktopMenuBtn.addEventListener('click', () => {
  const sideNav = document.querySelector('.side-nav')
  let navLinks = sideNav.querySelectorAll('.nav-link-name')
  let navIcons = sideNav.querySelectorAll('i')
  if (openNav) {
    desktopMenuBtn.className = 'fas fa-ellipsis-v'
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i]
      navLink.style.display = 'none'
    }
    sideNav.style.width = '55px'
    mainDashboardPage.style.marginLeft = '55px'
    openNav = 0
  } else {
    desktopMenuBtn.className = 'fas fa-ellipsis-h'
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i]
      navLink.style.display = 'flex'
    }
    sideNav.style.width = '200px'
    mainDashboardPage.style.marginLeft = '200px'
    openNav = 1
  }
})

mobileMenuBtn.addEventListener('click', () => {
  const sideNav = document.querySelector('.side-nav')
  let navLinks = sideNav.querySelectorAll('.nav-link-name')
  let navIcons = sideNav.querySelectorAll('i')
  if (openNav) {
    mobileMenuBtn.className = 'fas fa-align-justify mobile-menu-btn'
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i]
      navLink.style.display = 'none'
    }
    sideNav.style.width = '55px'
    // mainDashboardPage.style.marginLeft = '55px'
    openNav = 0
  } else {
    mobileMenuBtn.className = 'fas fa-align-left mobile-menu-btn'
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i]
      navLink.style.display = 'flex'
    }
    sideNav.style.width = '200px'
    // mainDashboardPage.style.marginLeft = '160px'
    openNav = 1
  }
})

// ====== Chat ======

anychart.onDocumentLoad(function () {
  // create an instance of a pie chart
  var chart = anychart.bar()
  // set chart title
  chart.title('Project Report')
  // data array
  const projectData = [
    ['pending', 5],
    ['In Progress', 2],
    ['Complected', 10],
  ]
  // set the data
  chart.data(projectData)

  // set the container element
  chart.container('container-project')
  // initiate chart display
  chart.draw()
})
anychart.onDocumentLoad(function () {
  // create an instance of a pie chart
  var chart = anychart.pie3d()
  // set chart title
  chart
    .title('Finance Report')
    // set chart radius
    .radius('43%')
  // data array
  const projectData = [
    ['buget', 5000],
    ['Income', 10000],
    ['Expensise', 4000],
  ]
  // set the data
  chart.data(projectData)

  // set the container element
  chart.container('container-finance')
  // initiate chart display
  chart.draw()
})
