var UI = document.createElement("div");
UI.innerHTML = `
	<div id="LoL" class="Lol" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:150px; width:150px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
		<h1 style="font-size: 25px;"><center>Quick GUI</center></h1>
<head>
<style>
html, body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #000000;
}
.LoL {
  --borderWidth: 3px;
  background: #000000;
  position: relative;
  border-radius: var(--borderWidth);
}
.LoL:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #36393e, #1e2124, #282b30);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}
@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.button {
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  color: black; 
  background-color:#6d80c4;
}
.button:hover {
  background-color:#abb4ff;
}
.button:active {
  box-shadow: 0 2px #666;
  transform: translateY(2px);
  background-color: #7d8bfa;
}
</style>
</head>
          <button onclick="bc()" class="button">Background Changer</button>
          <br>
          <br>
          <button onclick="tc()" class="button">Title Changer</button>
          <br>
          <br>
          <button onclick="nc()" class="button">Name Changer</button>
          <br>
          <br>
          <button onclick="mc()" class="button">Minuite Changer</button><br>
          <br>
          <br>
          <button onclick="fc()" class="button">Icon Changer</button>
          <br>
          <br>
          <button onclick="dark()" class="button">Dark Mode (auto on)</button>
          <br>
          <br>
          <button onclick="white()" class="button">Light Mode</button>
          <br>
          <br>
          <button onclick="credit()" class="button">Credit</button
	</div>`
dragElement(UI.firstElementChild);
document.body.appendChild(UI);
//drag shit
function dragElement(e) {
    let t = 0,
        n = 0,
        o = 0,
        s = 0;
    function i(e) {
        (e = e || window.event)
        .preventDefault(), o = e.clientX, s = e.clientY, document.onmouseup = c, document.onmousemove = r
    }
    function r(i) {
        (i = i || window.event)
        .preventDefault(), t = o - i.clientX, n = s - i.clientY, o = i.clientX, s = i.clientY, e.style.top = e.offsetTop - n + "px", e.style.left = e.offsetLeft - t + "px"
    }
    function c() {
        document.onmouseup = null, document.onmousemove = null
    }
    document.getElementById(e.id + "header") ? document.getElementById(e.id + "header")
        .onmousedown = i : e.onmousedown = i
}

//CREDIT AREA DO NOT DELETE OR YOUR BREAKING MY LICENCE


function credit(){
  var currentNode = document.querySelector('#LoL');

  var newNode = document.createElement('div');

  newNode.id = 'html2';
  newNode.innerHTML = `<div id="LoL" class="Lol" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:150px; width:150px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
<h1 style="font-size: 50px">Credit</h1><br><p style="font-size: 10px">Head Dev</p>
<a href="https://github.com/HypnoticLOL?tab=repositories" style="font-size: 10px">HypnoticLOL</a>
<br>
<br>
<p style="font-size: 10px">Made The Icon & helped with alot of the functions</p>
<a href="https://github.com/sharkiarthur" style="font-size: 10px">SharkiArthur</a>
<br>
<br>
<p style="font-size: 10px">Helped With Cookie, Put up with our shit, reason the menu works</p><a style="font-size: 10px" href="https://github.com/cupiditys">Cupidity</a>
<br>
<br>
<p style="font-size: 10px">made this cool ass GUI</p><a style="font-size: 10px" href="https://github.com/Wang-sus">Wang</a>
<br>
<br>
<h2>im to lazy to make a go back feature to go back refresh and open menu again</h2>
</div>`

  currentNode.parentNode.replaceChild(newNode, currentNode);
}
function back(){
  var currentNode = document.querySelector('#html2');

  var newNode = document.createElement('div');

  newNode.id = 'html2';
  newNode.innerHTML = `
	<div class="Lol" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:150px; width:150px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
		<h1 style="font-size: 25px;"><center>Quick GUI</center></h1>
<head>
<style>
html, body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #000000;
}
.LoL {
  --borderWidth: 3px;
  background: #000000;
  position: relative;
  border-radius: var(--borderWidth);
}
.LoL:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #36393e, #1e2124, #282b30);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}
@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.button {
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  color: black; 
  background-color:#6d80c4;
}
.button:hover {
  background-color:#abb4ff;
}
.button:active {
  box-shadow: 0 2px #666;
  transform: translateY(2px);
  background-color: #7d8bfa;
}
</style>
</head>
          <button onclick="bc()" class="button">Background Changer</button>
          <br>
          <br>
          <button onclick="tc()" class="button">Title Changer</button>
          <br>
          <br>
          <button onclick="nc()" class="button">Name Changer</button>
          <br>
          <br>
          <button onclick="mc()" class="button">Minuite Changer</button><br>
          <br>
          <br>
          <button onclick="fc()" class="button">Icon Changer</button>
          <br>
          <br>
          <button onclick="dark()" class="button">Dark Mode (auto on)</button>
          <br>
          <br>
          <button onclick="white()" class="button">Light Mode</button>
	</div>`;

  currentNode.parentNode.replaceChild(newNode, currentNode);
}



//cookie shit/custom background

function bc() {
  let lol = getCookie("urllol");
navigator.clipboard.writeText=lol;
    lol = prompt("Custom Background! Please put the image link into the box below!");
    if (lol != "" && lol != null) {
      setCookie("urllol", lol, 365);
    }
setInterval(function() {
document.getElementById("background-image").src=lol;
}, 1);
}

//title changer
function tc() {
var o = prompt("Custom Title! Please put the title into the box below!")
document.title =o;
}
//favicon changer
//beta
function fc() {
var ffc = prompt('Custom Icon! Please put the image link in the box below!')
document.querySelector("link[rel*='icon']").href =ffc;
}
//name changer
function nc(){
        var name = prompt("Custom Name! Please put your custom name in the box below")
        document.getElementsByClassName('css-1ii68kw e15psnz1')[0].innerHTML =name;
}

//min changer
function mc(){
        var min = prompt("Custom Minute! Please put how many minuites you want in the box below (do this in the my progress tab of iready)")
        document.getElementsByClassName('css-7ltzax e16nsggm5')[0].innerHTML =min;
}
//darkmode 
        function dark(){
        var refreshIntervalId = setInterval(dark, 1);

        document.body.style.background ='black';

        document.getElementsByClassName('eedqomz3 embu0a00 css-1gosn7i btn btn-transparent')[0].style.background='black';

        document.getElementsByClassName('eedqomz3 embu0a00 css-1gosn7i btn btn-transparent')[1].style.background='black';

        document.getElementsByClassName('eedqomz3 embu0a00 css-1gosn7i btn btn-transparent')[2].style.background='black';

        document.getElementsByClassName('eedqomz3 embu0a00 css-1gosn7i btn btn-transparent')[3].style.background='black';

        document.getElementsByClassName('css-lhg3sd eedqomz1')[0].style.background='black';

        document.getElementsByClassName('css-lhg3sd eedqomz1')[1].style.background='black';

        document.getElementsByClassName('css-lhg3sd eedqomz1')[2].style.background='black';

        document.getElementsByClassName('css-lhg3sd eedqomz1')[3].style.background='black';

        document.getElementsByClassName('wf-roboto-n4-active wf-roboto-i4-active wf-roboto-n7-active wf-active')[3].style.background='black';

        document.getElementsByClassName('e1nmn77d0-card-body embu0a00 css-1qpxpir node_modules--cainc-cauliflower-src-components-card-___Card__card-body')[0].style.background ='black';
}
function white(){
/* later */
clearInterval(refreshIntervalId);
          
document.body.style.background ='white';

document.getElementsByClassName('eedqomz3 embu0a00 css-1gosn7i btn btn-transparent')[0].style.background='white';

document.getElementsByClassName('eedqomz3 embu0a00 css-1gosn7i btn btn-transparent')[1].style.background='white';

document.getElementsByClassName('eedqomz3 embu0a00 css-1gosn7i btn btn-transparent')[2].style.background='white';

document.getElementsByClassName('eedqomz3 embu0a00 css-1gosn7i btn btn-transparent')[3].style.background='white';

document.getElementsByClassName('css-lhg3sd eedqomz1')[0].style.background='white';

document.getElementsByClassName('css-lhg3sd eedqomz1')[1].style.background='white';

document.getElementsByClassName('css-lhg3sd eedqomz1')[2].style.background='white';

document.getElementsByClassName('css-lhg3sd eedqomz1')[3].style.background='white';

document.getElementsByClassName('wf-roboto-n4-active wf-roboto-i4-active wf-roboto-n7-active wf-active')[3].style.background='white';

          document.getElementsByClassName('e1nmn77d0-card-body embu0a00 css-1qpxpir node_modules--cainc-cauliflower-src-components-card-___Card__card-body')[0].style.background ='white';
}
document.body.appendChild(UI)
document.addEventListener("keydown", function(e) {
        e.ctrlKey && "x" == e.key && ("block" == LoL.style.display ? LoL.style.display = "none" : LoL.style.display = "block")
})
