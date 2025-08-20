export const getConvert = () => {
  const apiKeys = 'a462fcebea62a6e5761caecaf026fb24'
  const fromValue = document.querySelector('#from-value')
  const fromCountry = document.querySelector('#from-country')
  const toCountry = document.querySelector('#to-country')
  const fromResult = document.querySelector('#from')
  const toResult = document.querySelector('#to')

  let amount = fromValue.value
  let fromCurrency = fromCountry.value
  let toCurrency = toCountry.value

  fetch(
    `https://api.exchangerate.host/convert?access_key=${apiKeys}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`,
  )
    .then((responce) => responce.json())
    .then((data) => {
      if (data.success) {
        fromResult.innerHTML = `
    Валюта <span style="color:  #02f802;">${fromCurrency}</span> 
    сумма <span style="color:  #02f802;">${amount}</span> 
    в валюте <span style="color:  #02f802;">${toCurrency}</span> 
    будет <span style="color:  #02f802;">${data.result.toFixed(2)}</span>
`
      } else {
        fromResult.textContent = 'Ошибка!'
        toResult.textContent = data.error?.info || 'Нет данных'
      }
    })
    .catch((err) => {
      fromResult.textContent = `Ошибка: ${err.message}`
    })
}
