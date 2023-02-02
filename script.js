function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let mid = "AM";
    mid = hour >= 12 ? "PM" : "AM";
    hour = hour == 0 ? 12 :hour > 12 ? hour -12 : hour;
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.querySelector('#time').innerHTML = `${hour}:${min}`;
    document.querySelector('#sec').innerHTML = `${sec}`;
    document.querySelector('#mid').innerHTML = `${mid}`;
    let curr_date = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let month_name = ["January" , "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let showDay = document.querySelectorAll(".day_wrapper span");
    document.querySelector("#showDate").innerHTML = `${month_name[month]} ${curr_date} ${year}`;
    showDay[day].style.opacity = "1";
}

function updateTime(e) {
    if(e < 10)
        return "0" + e;
    else 
        return e;
}
setInterval(currentTime, 1000);