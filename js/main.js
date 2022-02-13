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
