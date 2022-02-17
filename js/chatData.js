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
