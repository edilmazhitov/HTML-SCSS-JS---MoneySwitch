const apiKeys = 'a462fcebea62a6e5761caecaf026fb24'
const fromValue = document.querySelector('#from-value')
const fromCountry = document.querySelector('#from-country')
const toCountry = document.querySelector('#to-country')
const fromResult = document.querySelector('.from')
const toResult = document.querySelector('.to')

const btn = document.querySelector('#btn')

const getConvert = () => {
  let amount = fromValue.value
  let fromCurrency = fromCountry.value
  let toCurrency = toCountry.value

  fetch(
    `https://api.exchangerate.host/convert?access_key=${apiKeys}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`,
  )
    .then((responce) => responce.json())
    .then((data) => {
      if (data.success) {
        fromResult.textContent = `Валюта ${amount}  сумма ${fromCurrency}`
        toResult.textContent = `На валюту ${data.result.toFixed(2)} будет ${toCurrency}`
      } else {
        fromResult.textContent = 'Ошибка!'
        toResult.textContent = data.error?.info || 'Нет данных'
      }
    })
    .catch((err) => {
      fromResult.textContent = `Ошибка: ${err.message}`
    })
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  getConvert()
})
