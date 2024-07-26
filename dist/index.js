const currentDate = document.querySelector("#currentdate");
const userDate = document.querySelector("#userDate");
const inputForm = document.querySelector("#inputForm");
const result = document.querySelector("#result");
const wlcm = document.querySelector("#wlcmMsg");
const hide = document.querySelector("#toHide");
function getCurrentDate()
{
    let today = new Date();
    return today.toDateString();
}
function calculateAge(userDate)
{
    let currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    // year month day
    let dateArray = userDate.split('-');
    const userYear = parseInt(dateArray[0]);
    const userMonth = parseInt(dateArray[1]);
    const userDay = parseInt(dateArray[2]);

    if(userYear>=currentYear){return -1};
    let age = currentYear - userYear;
    if((currentMonth<userMonth)||(currentMonth===userMonth && currentDay<userDay))
    {
        age-=1;
    }
    return age;
}
document.addEventListener('DOMContentLoaded',()=>
{
    currentDate.textContent = getCurrentDate();
})
inputForm.addEventListener("submit",(Event)=>
{
    Event.preventDefault();
    let userInput = userDate.value;
    const Age = calculateAge(userInput);
    let agePara = document.createElement('p');
    agePara.innerHTML = Age;
    wlcm.innerHTML = "Your Age is";
    result.appendChild(agePara);
    result.classList.remove("hidden");
    hide.classList.add("hidden");
    setTimeout(window.location.reload(),10000);
})