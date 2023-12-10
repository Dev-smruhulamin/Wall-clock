
const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function SetDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const SecondsDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${SecondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)* 360)+90;
    minsHand.style.transform =`rotate(${minsDegrees}deg)`;

    const hours = now.getMinutes();
    const hoursDegrees = ((mins/12)* 360)+90;
    hoursHand.style.transform =`rotate(${hoursDegrees}deg)`;
}
setInterval(SetDate, 1000);