let day = document.getElementById('days');
let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');

const counter = () => {
    const birthDate = new Date('June 19, 2021 24:00:00');
    const today = new Date();
    const totalDays = birthDate - today;

    const totalSecond = Math.floor(totalDays / 1000);
    const totalMinute = Math.floor(totalSecond / 60);
    const totalHour = Math.floor(totalMinute / 60);
    const totalDay = Math.floor(totalHour / 24);

    const remainSecond = totalSecond % 60;
    const remainMinute = totalMinute % 60;
    const remainHour = totalHour % 24;

    day.innerText = totalDay;
    hour.innerText = remainHour;
    minute.innerText = remainMinute;
    second.innerText = remainSecond;
    // console.log(remainMinute);


}
counter();

setInterval(() => {
    counter();
}, 1000);