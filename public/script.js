setInterval(() => {

    let currentTime = moment().format("dddd MMMM Do YYYY");

    document.getElementById("date").innerText = currentTime;
}, 1);