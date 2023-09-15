const form = document.forms.auth;
const loginBtn = form.loginBtn;
loginBtn.addEventListener("click", login);

// callback
function login(e) {
  e.preventDefault();
  sendRequest(form);
}

function preparePayload(form) {
  const formData = new FormData(form);
  return {
    email: formData.get("email"),
    password: formData.get("password"),
  };
}

function sendRequest(form) {
  const payload = preparePayload(form);
  const url = new URL("http://localhost:3001/login");
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }
  fetch(url.href, fetchOptions)
    .then(handleResponse)
    .catch(handleResponseError);
}
function handleResponseError(error){
      alert("Login failed");
      console.error({ message: error.message, stack: error.stack });
    }
function handleResponse(res) {
  if (res.status === 200)
    res.json().then(({ token }) => {
      localStorage.setItem("token", token);
      window.location.assign("/profile.html");
    });
  else throw Error("Fetch Failed");
}
