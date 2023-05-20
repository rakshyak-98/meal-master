const submitButton = document.forms.authentication.querySelector("button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formdata = new FormData(document.forms.authentication);
  fetch("http://localhost:3001/user", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: formdata.get('username'),
      password: formdata.get('password'),
    }),
  })
    .then((res) => console.log(res))  
    .catch((error) => console.log(error.message));
});
