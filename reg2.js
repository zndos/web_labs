var form = document.querySelector('.formWithValidation')
var validateBtn = form.querySelector('.validateBtn')
var password = form.querySelector('.password')
var passwordConfirmation = form.querySelector('.passwordConfirmation')
var passwordConfirmation = form.querySelector('.passwordConfirmation')



var fields = form.querySelectorAll('.field')
var name1 = fields[0]

let regexp1 = /^[А-Я]+[а-яА-Я]*$/;


form.addEventListener('submit', function (event) {
  event.preventDefault()

  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('blank', fields[i])
      var error = document.createElement('div')
      error.className = 'error'
      error.style.color = 'red'
      error.innerHTML = 'поле не должно быть пустым'
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }

  if (name1.value.length < 3) {
    console.log('too short')
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = 'Слишком короткое имя'
    name1.parentElement.insertBefore(error, name1)
    
    
  }

  if (name1.value.length > 20) {
    console.log('too liong')
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = 'Слишком длинное имя'
    name1.parentElement.insertBefore(error, name1)
    
  }

  if (!regexp1.test(name1.value)) {
    console.log('no letters')
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = 'Имя состоит только из букв и начинается с  заглавной '
    name1.parentElement.insertBefore(error, name1)
    
  }

   if (password.value.length < 6) {
    console.log('too short')
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = 'Пароль слишком короткий'
    password.parentElement.insertBefore(error, password)
  }




  if (password.value !== passwordConfirmation.value) {
    console.log('not equals')
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = 'Пароли не совпадают'
    password.parentElement.insertBefore(error, password)
  }
})