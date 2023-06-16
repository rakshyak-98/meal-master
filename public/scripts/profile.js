const optionList = document.querySelector(".profile__bar ul");
const myQuery = optionList.querySelector("#myQuery");
const newQuery = optionList.querySelector("#newQuery");
const savedPlans = optionList.querySelector("#savedPlans");
const profileView = document.querySelector("#profile-view");
const symptomBlock = document.querySelector(".symptoms");
const postButton = document.querySelector("#post-symptom");
const profileInfo = document.querySelector(".profile__info");

window.onhashchange = () => {
  profileView.dataset.view = location.hash.replace("#", "");
};

window.onload = () => {
  token = localStorage.getItem("token");
  authString = `Bearer ${token}`;
  fetch("http://localhost:3001/user", {
    method: "GET",
    headers: { Authorization: authString },
  })
    .then((res) =>
      res.json().then((data) => {
        const { user: {username}} = data;
        const usernameEl = document.createElement('h2')
        const roleEl = document.createElement('p')
        usernameEl.textContent = username
        roleEl.textContent = 'Expert'
        profileInfo.appendChild(usernameEl)
        profileInfo.appendChild(roleEl)
      })
    )
    .catch((error) => console.error(error.message));
};

postButton.onclick = (e) => {
  formdata = new FormData(document.forms.newQuery);
  postTitle = formdata.get("title");
  postDescription = formdata.get("description");

  if (postTitle && postDescription) {
    fetch("http://localhost:3001/post", {
      method: "post",
      body: JSON.stringify({ title: postTitle, description: postDescription }),
    }).catch((error) => console.error(error));
  }
};
