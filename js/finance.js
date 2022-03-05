const titheCheckbox = document.querySelector('#tithe-checkbox')
const financeSaving = document.querySelector('#finance-saving')
const defaultNameElement = document.querySelector('#defaultRecordName')
const financeMessage = document.querySelector('#finance-message')
const financeName = document.querySelector('#finance-name')
const financeAmount = document.querySelector('#finance-amount')
const noteMessageElement = document.querySelector('#note-message')
const submitFinance = document.querySelector('#submit-finance')
let selectedCategory = ''
let defaultRecordName = ''
let defaultRecordNameCheck =
  defaultRecordName === '' ? 'select Category' : defaultRecordName
defaultNameElement.innerHTML = defaultRecordNameCheck

// Know the Category that is selected
function categoryCheck(Category) {
  document.querySelector('#default-finance-name').checked = false
  financeName.removeAttribute('disabled', '')

  // disable input if the Category is not Income
  if (Category !== 'Income') {
    // disable the checkbox if category is not income
    titheCheckbox.checked = false
    titheCheckbox.setAttribute('disabled', '')
    // disable the input if category is not income
    financeSaving.setAttribute('disabled', '')
    financeSaving.placeholder = `No savings in ${Category}`
  } else {
    // enable the checkbox if category is not income
    titheCheckbox.checked = true
    titheCheckbox.removeAttribute('disabled', '')
    // enable the input if category is not income
    financeSaving.removeAttribute('disabled', '')
    financeSaving.placeholder = `Input ${Category} Savings`
  }

  financeName.value = ''
  defaultRecordName = `New ${Category}`
  defaultNameElement.innerHTML = defaultRecordName
  selectedCategory = Category
}

// On check disable the name financeName and give it a defulat name from the Category selected
document
  .querySelector('#default-finance-name')
  .addEventListener('click', function () {
    let defaultRecordNameCheck =
      defaultRecordName === '' ? 'select Category' : defaultRecordName
    const check = this.checked
    check
      ? financeName.setAttribute('disabled', '')
      : financeName.removeAttribute('disabled', '')
    check
      ? (financeName.value = defaultRecordNameCheck)
      : (financeName.value = '')
  })
// calculate tithe
function calculateTithe(amount) {
  return amount * 0.1
}
// calculates savings
function calculatesSavings(amount) {
  return amount - financeSaving.value
}
// calculate finance
function calculateFinance(c, n, a) {
  let tithe = ''
  let noteMessage = ''
  let savings = ''
  titheCheckbox.checked
    ? (tithe = calculateTithe(a))
    : console.log(' tithe not enabled ')
  if (!financeSaving.value) {
    noteMessage +=
      ' <i class="fas fa-info"></i> savings is not calculated because no figure was given'
    if (c !== 'Income') noteMessage = ''
  }
  if (!titheCheckbox.checked) {
    noteMessage +=
      ' <i class="fas fa-info"></i> Tithe is not calculated because the tithe checkbox is not checked <br>'
    if (c !== 'Income') noteMessage = ''
  }
  if (financeSaving.value) {
    if (c === 'Income') {
      savings = financeSaving.value
    } else {
      savings = ''
      tithe = ''
    }
  }

  const record = calculatesSavings(a)

  if (noteMessage !== '') {
    noteMessageElement.innerHTML = ` ${noteMessage}`
  } else {
    noteMessageElement.innerHTML = ``
  }

  const financeObject = {
    category: c,
    name: n,
    amount: a,
    tithe: Math.ceil(tithe),
    saving: savings,
    record: record,
  }
  submitFinance.disabled = false
  mapCalculationOut(financeObject)

  console.log('Object->', financeObject)
}

function mapCalculationOut(obj) {
  const { category, name, amount, tithe, saving, record } = obj
  category !== 'Income'
    ? (noteMessageElement.innerHTML = `<i class="fas fa-info"></i> Tithe and savinges are disabled in ${category}`)
    : ''
  const htmlList = `
        <li><B>Category:</B> ${category}</li>
        <li><B>Name:</B> ${name}</li>
        <li><B>Amount:</B> ${amount}</li>
       ${tithe ? `<li><B>Tithe:</B> ${tithe}</li>` : ''}
       ${saving ? `<li><B>Savings:</B> ${saving}</li>` : ''}
    ${
      category === 'Income' && saving ? `<li><B>Record:</B> ${record}</li>` : ''
    }
        `
  document.querySelector('#list-ul').innerHTML = htmlList
}
// finance calculator
document.querySelector('#finance-calculator').addEventListener('click', (e) => {
  e.preventDefault()
  if (selectedCategory === '')
    return (financeMessage.innerHTML =
      '<div class="alert alert-danger" >Selecte a Category </div>')
  if (financeName.value === '')
    return (financeMessage.innerHTML =
      '<div class="alert alert-danger" >Input a Name <i>or</i> <sub>Check the Default checkbox</sub> </div>')
  if (financeAmount.value === '')
    return (financeMessage.innerHTML =
      '<div class="alert alert-danger" >Input an Amount </div>')
  financeMessage.innerHTML = ''
  calculateFinance(selectedCategory, financeName.value, financeAmount.value)
})

// history List Record
const historyListRecord = document.querySelectorAll('.history-list>.record')
historyListRecord.forEach((hs) =>
  hs.addEventListener('click', function (e) {
    const element = e.target
    let show = element.getAttribute('show')
    if (show === null) {
      element.setAttribute('show', 'true')
      element.style.height = 'auto'
      element.style.overflow = 'null'
    } else {
      element.removeAttribute('show')
      element.style.height = '50px'
      element.style.overflow = 'hidden'
    }
  }),
)
