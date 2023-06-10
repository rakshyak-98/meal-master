optionList = document.querySelector(".profile__bar ul");
myQuery = optionList.querySelector("#myQuery");
newQuery = optionList.querySelector("#newQuery");
savedPlans = optionList.querySelector("#savedPlans");
profileView = document.querySelector("#profile-view");
symptomBlock = document.querySelector(".symptoms");
postButton = document.querySelector("#post-symptom");

window.onhashchange = () => {
  profileView.dataset.view = location.hash.replace("#", "");
};

window.onload = () => {
  token = localStorage.getItem("token");
};

postButton.onclick = (e) => {
  formdata = new FormData(document.forms.newQuery);
  postTitle = formdata.get("title");
  postDescription = formdata.get("description");

  if (postTitle && postDescription) {
    fetch("http://localhost:3001/post", {
      method: "post",
      body: JSON.stringify({ title: postTitle, description: postDescription }),
    });
  }
};
