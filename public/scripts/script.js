const profileViewContainer = document.getElementById("profile-view");
profileViewContainer.appendChild(createFeed());
function createFeed() {
  const feed = document.createElement("div");
  feed.setAttribute("class", "feed");
  const span = document.createElement("span");
  span.setAttribute("class", "icon");
  span.setAttribute("id", "brain");
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-brain");
  span.appendChild(icon);
  feed.appendChild(span);
  const heading = document.createElement("h2");
  heading.textContent = "Hypertension medication";
  heading.setAttribute("class", "mb--1");
  const symptom = document.createElement("div");
  symptom.setAttribute("class", "symptom");
  symptom.appendChild(heading);
  feed.appendChild(symptom);
  const para = document.createElement("p");
  para.setAttribute("class", "mb--2");
  para.textContent = "this is description";
  symptom.appendChild(para);
  const footer = document.createElement("din");
  footer.setAttribute("class", "footer");
  const views = document.createElement("span");
  views.textContent = "16 views";
  footer.appendChild(views);
  const time = document.createElement("span");
  time.textContent = "6:00pm";
  footer.appendChild(time);
  symptom.appendChild(footer);
  return feed;
}
const loginBtn = document.getElementById("form");
loginBtn.addEventListener("submit", login);
function login(e) {
  e.preventDefault();
  location.replace("/profile");
}