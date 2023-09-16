createProfileElement()
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
window.addEventListener("load", (event) => {
  if(event.target.URL.includes("feed")){

}else if(event.target.URL.includes("profile")){
  workWithProfile();  
}
});
function workWithProfile(){
window.addEventListener("hashchange", (event) => {
  if(event.newURL.includes("general")) createProfileElement();
  if(event.newURL.includes("my-query")) createQuery();
  })
}
function createQuery(){
  const profileView = document.getElementById("profile-view")
  profileView.innerHTML = ""
  profileView.appendChild(createFeed())
}
function createProfileElement(){
  const profileView = document.getElementById("profile-view")
  profileView.innerHTML = ""
  const profileForm = createProfileForm()
  profileView.appendChild(profileForm)
}
function createProfileForm(){
  const form = document.createElement("form")
  const button = document.createElement("button")
  const nameInput = document.createElement("input")
  const emailInput = document.createElement("input")
  nameInput.setAttribute("name", "username")
  emailInput.setAttribute("name", "email")
  emailInput.setAttribute("type", "email")
  form.appendChild(nameInput)
  form.appendChild(emailInput)
  button.textContent = "update"
  form.appendChild(button)
  button.setAttribute("class", "button")
  return form
}