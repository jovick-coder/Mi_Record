const desktopMenuBtn = document.querySelector('#desktop-menu-btn')
const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
const mainDashboardPage = document.querySelector('.main-dashboard-page')
const sideNav = document.querySelector('.side-nav')
let navLinks = sideNav.querySelectorAll('.nav-link-name')
let navIcons = sideNav.querySelectorAll('i')
let openNav = 1

// check if page is loaded on a mobile and close the side nav
if (screen.width <= 768) {
  console.log('Mobile screen')
  mainDashboardPage.style.marginLeft = '55px'
  sideNav.style.width = '55px'
  desktopMenuBtn.className = 'fas fa-ellipsis-v'

  openNav = 0
  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i]
    navLink.style.display = 'none'
  }
}
// -------------------------------------------------------------
desktopMenuBtn.addEventListener('click', () => {
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
    mobileMenuBtn.className = 'fas fa-align-left mobile-menu-btn'
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i]
      navLink.style.display = 'none'
    }
    sideNav.style.width = '55px'
    // mainDashboardPage.style.marginLeft = '55px'
    openNav = 0
  } else {
    mobileMenuBtn.className = 'fas  fa-align-justify mobile-menu-btn'
    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i]
      navLink.style.display = 'flex'
    }
    sideNav.style.width = '200px'
    // mainDashboardPage.style.marginLeft = '160px'
    openNav = 1
  }
})

// ====== Notification pop up ======
let notificationDiv = document.getElementsByClassName('notification-div')
setTimeout(() => {
  notificationDiv[0].style.width = '80%'

  // add indecator color to notification icon
  document.documentElement.style.setProperty(
    '--notification-indecator-color',
    'var(--main-color)',
  )
  // -----------------------------------------
  setTimeout(() => {
    notificationDiv[0].style.width = '0px'
  }, 5000)
}, 2000)

let closeNotification = document.getElementsByClassName('close-notification')
closeNotification[0].addEventListener('click', () => {
  notificationDiv[0].style.width = '0px'
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
    ['budget', 5000],
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
// ===== ToDo =====
;(function ($) {
  'use strict'
  $(function () {
    var todoListItem = $('#todo-list')
    var todoListInput = $('#todo-list-input')
    $('#todo-list-add-btn').on('click', function (event) {
      event.preventDefault()

      var item = $(this).prevAll('#todo-list-input').val()

      if (item) {
        var htmlTmp = ` <li>
                            <span class="form-check form-check-flat">
                                <label class="done-check">${item}
                                    <input class='checkbox' type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </span>
                                <i class="fas fa-trash remove"></i>
                        </li>`
        todoListItem.append(htmlTmp)
        todoListInput.val('')
      }
    })

    todoListItem.on('change', '.checkbox', function () {
      $(this).closest('li').toggleClass('completed')
    })
    todoListItem.on('click', '.remove', function () {
      console.log('hi')
      $(this).parent().remove()
    })
  })
})(jQuery)


//====== time ======

function updateTime() {
  var dateInfo = new Date();

  /* time */
  var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() == 0) {
      hr = 12;
  } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
  } else {
      hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min + ":" + sec;
  // print time
  document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;
  document.getElementsByClassName("hms")[1].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[1].innerHTML = ampm;

  /* date */
  var dow = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
  ],
      month = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ],
      day = dateInfo.getDate();

  // store date
  var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

// print time and date once, then update them every second
updateTime();
setInterval(function () {
  updateTime()
}, 1000);


