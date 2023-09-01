
const scriptURL = 'https://script.google.com/macros/s/AKfycbyNq9G5mzLMIhDX12dVPs42tIJTzKX6c35zhOYEqILGLrmdAnkMhhWmX7yY4AvhxmXTxQ/exec'
const form = document.forms['submit-to-google-sheet']

const input = document.querySelector("input");

form.addEventListener('submit', e => {
e.preventDefault()
input.style.opacity="50%";
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    alert("Registred")
    console.log('Success!', response)
})
.catch(error => console.error('Error!', error.message))
})