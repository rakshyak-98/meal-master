optionList = document.querySelector(".profile__bar ul")
myQuery = optionList.querySelector('#myQuery')
newQuery = optionList.querySelector('#newQuery')
savedPlans = optionList.querySelector('#savedPlans')

profileView = document.querySelector('#profile-view')

symptomSelection = profileView.querySelector("#symptom-selection")

symptomSelection.onchange = (e) => {
    if(e.target.value == "none") profileView.querySelector('.enter-info').style.display = "block"
    else profileView.querySelector('.enter-info').style.display = "none"
}


window.onload = () => {
    profileView.querySelector('.enter-info').style.display = 'none'
}




// html templates
{/* <div data-query="none" class="enter-info">
    <input type="text" placeholder="Enter disesess name" />
    <div>
        <p>Recomended by doctor</p>
        <label for="recomendation"
        ><input type="radio" name="response" id="1" />yes</label
        >
        <label for="recomendation"
        ><input type="radio" name="response" id="0" />no</label
        >
    </div>
    <input type="text" placeholder="Enter doctor name" />
</div> */}