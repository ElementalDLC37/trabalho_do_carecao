// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

const scrollPercent = () => {
  const bodyST = document.body.scrollTop;
  const docST = document.documentElement.scrollTop;
  const docSH = document.documentElement.scrollHeight;
  const docCH = document.documentElement.clientHeight;
  
  return (docST + bodyST) / (docSH - docCH) * 100
}

function redirect() {
  window.location.replace("https://youtu.be/Ou83DD8CkUQ?si=RvDtMsI_EHD6VcC8&t=4")
}

window.onscroll = () => {
  var change = document.querySelector('#change');
  change.textContent = Math.round(scrollPercent())
  console.log()
};

function keydownFunction() {
  document.getElementById("demo").style.backgroundColor = "red";
}

function keyupFunction() {
  document.getElementById("demo").style.backgroundColor = "green";
}

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 20],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    fontStyle: ["normal"],
    duration: 2000,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.line',
    easing: "easeOutExpo",
    opacity: [1,0],
    duration: 1000,
    offset: '-=2000',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .letter',
    easing: "easeOutExpo",
    fontWeight: [600],
    duration: 2000,
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .letter',
    easing: "easeOutExpo",
    fontStyle: ["normal", "italic"],
    duration: 2000,
    offset: '-=2000',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .letter',
    easing: "easeOutExpo",
    fontWeight: [400],
    duration: 2000,
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .letter',
    easing: "easeOutExpo",
    fontStyle: ["italic", "normal"],
    duration: 2000,
    offset: '-=2000',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .letter',
    easing: "easeOutExpo",
    fontWeight: [700],
    duration: 2000,
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });