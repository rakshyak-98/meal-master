const form = document.forms.auth
const loginBtn = form.loginBtn

loginBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const payload = {
    email: formData.get('email'),
    password: formData.get('password')
  }
  fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then((res) => {
      if (res.status === 200) {
        res.json().then(({ token }) => {
          localStorage.setItem('token', token)
          window.location.assign('/profile.html')
        })
      } else throw Error('Fetch Failed')
    })
    .catch((error) => alert('Login failed'))
})
