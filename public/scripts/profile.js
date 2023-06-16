const optionList = document.querySelector(".profile__bar ul");
const myQuery = optionList.querySelector("#myQuery");
const newQuery = optionList.querySelector("#newQuery");
const savedPlans = optionList.querySelector("#savedPlans");
const profileView = document.querySelector("#profile-view");
const symptomBlock = document.querySelector(".symptoms");
const postButton = document.querySelector("#post-symptom");
const profileInfo = document.querySelector(".profile__info");
const profileBar = document.querySelector(".profile__bar");

const newQueryView = `<form name="newQuery">
<input
  class="mb--2"
  type="text"
  placeholder="Enter title"
  name="title"
/>
<textarea
  class="mb--2"
  name="description"
  id="description"
  cols="30"
  rows="10"
  placeholder="Can type description for your query..."
></textarea>
</form>`

const myQueryView = `<div class="feed">
<span class="icon" id="brain">
  <i class="fa-solid fa-brain"></i>
</span>
<div class="symptom">
  <h2 class="mb--1">Hypertension medication</h2>
  <p class="mb--2">
    I am having stress type headache since one month for which my
    pshychiatrist prescribe me propanol 40 mg he wants me to change
    to propanol from nebivelol 5mg which control pressure,tension
    headache and anxiety I am already taking nebicard 5 once in
    morning for hypertension pressure well control 130/80 Pls advice
    can a pshychiatrist change your pressure medicine
  </p>
  <div class="footer">
    <span class="view"><em id="count">16</em> Views</span>
    <span class="time">6:00pm</span>
  </div>
</div>
</div>`

const savedPlansView = '<h1> No saved plans </h1>'

window.onhashchange = () => {
  profileView.dataset.view = location.hash.replace("#", "");
  
  switch(profileView.dataset.view){
    case "create-new-query":
      profileView.innerHTML = newQueryView
      break;
    case "my-query":
      profileView.innerHTML = myQueryView
      break;
    case 'saved-plans':
      profileView.innerHTML = savedPlansView
      break;
    default:
      profileView.innerHTML = newQueryView
  }

  tabList = profileBar.querySelectorAll("a");
  tabList.forEach((a) => {
    location.hash == a.getAttribute("href")
      ? (a.dataset.active = "true")
      : (a.dataset.active = "false");

    a.getAttribute("data-active") == "true"
      ? a.classList.add("active")
      : a.classList.remove("active");
  });
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
        const {
          user: { username },
        } = data;
        const usernameEl = document.createElement("h2");
        const roleEl = document.createElement("p");
        usernameEl.textContent = username;
        roleEl.textContent = "Expert";
        profileInfo.appendChild(usernameEl);
        profileInfo.appendChild(roleEl);
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
