import { getConvert } from './converet.js'

const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  getConvert()
})
