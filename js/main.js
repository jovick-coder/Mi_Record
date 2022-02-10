const minNav = document.querySelector('#min-nav')
const mainDashboardPage = document.querySelector('.main-dashboard-page')
let openNav = 1
minNav.addEventListener('click', () => {
  const sideNav = document.querySelector('.side-nav')
  let navLinks = sideNav.querySelectorAll('a')
  let navIcons = sideNav.querySelectorAll('i')
  if (openNav) {
    minNav.className = 'fas fa-align-justify'
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i]
      navLink.style.display = 'none'
    }
    sideNav.style.width = '55px'
    // mainDashboardPage.style.marginLeft = '55px'
    openNav = 0
  } else {
    minNav.className = 'fas fa-align-left'
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i]
      navLink.style.display = 'flex'
    }
    sideNav.style.width = 'auto'
    // mainDashboardPage.style.marginLeft = '160px'
    openNav = 1
  }
})
