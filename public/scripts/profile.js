optionList = document.querySelector(".profile__bar ul");
myQuery = optionList.querySelector("#myQuery");
newQuery = optionList.querySelector("#newQuery");
savedPlans = optionList.querySelector("#savedPlans");
profileView = document.querySelector("#profile-view");
symptomBlock = document.querySelector(".symptoms");

symptomSelectionList = profileView.querySelector(".symptom-selection");

symptomSelectionList.onchange = (e) => {
  if (e.target.value == "none") {
    profileView.querySelector(".enter-info").style.display = "flex";
    profileView.querySelector(".symptom-list").style.display = "none";
  } else {
    profileView.querySelector(".enter-info").style.display = "none";
    profileView.querySelector(".symptom-list").style.display = "flex";
  }
};

window.onhashchange = () => {
  profileView.dataset.view = location.hash.replace("#", "")
};

window.onload = () => {
  profileView.querySelector(".enter-info").style.display = "none";
  token = localStorage.getItem("token");
};
