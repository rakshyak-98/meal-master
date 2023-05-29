const form = document.forms.auth;
const registerBtn = form.registerBtn;

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const payload = {
    email: formData.get("email"),
    username: formData.get("username"),
    role: formData.get("role"),
    password: formData.get("password"),
  };
  fetch("http://localhost:3001/login", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then(({token}) => {
      localStorage.setItem("token", token);
      window.location.replace('/user-profile.html')
    })
    .catch((_) => {
      alert("failed to fetch resource");
    });
});
