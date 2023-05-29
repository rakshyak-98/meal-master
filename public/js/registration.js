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
  fetch("http://localhost:3001/reqister", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200)
        res.json().then(({ token }) => {
          localStorage.setItem("token", token);
          window.location.replace("/profile.html");
        });
      else throw Error("Fetch Failed");
    })
    .catch((_) => {
      alert("failed to fetch resource");
    });
});
