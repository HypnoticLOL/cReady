let UI = document.createElement("div");
UI.innerHTML = '<div id="LoL" style="height:420px; width:200px; left: 1px; top: 1px; background-color: #282828; color: white; outline: purple solid 1px; position:absolute; z-index: 99999;"><h1 style="font-size: 50px;">cReady </h1><img src="https://images.hypnoticlol.repl.co/icon.png" height="35px" width="35px" onclick="credit()"><br><br><button onclick="bc()">Background Changer</button><br><br><button onclick="tc()">Title Changer</button><br><br><button onclick="nc()">Name Changer</button><br><br><button onclick="mc()">Minuite Changer</button><br><br><button onclick="fc()">Icon Changer</button><br><br><button onclick="dark()">Dark Mode</button><br><br><button onclick="white()">Light Mode</button></div><body id=html2></body>';
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
  newNode.innerHTML =
  '<div id="LoL" style="height:200px; width:200px; left: 1px; top: 1px; background-color: #282828; color: white; outline: purple solid 1px; position:absolute; z-index: 99999;"><h1 style="font-size: 50px">Credit</h1><br><p style="font-size: 10px">Head Dev</p><a href="https://github.com/HypnoticLOL?tab=repositories" style="font-size: 10px">HypnoticLOL</a><br><br><p style="font-size: 10px">Made The Icon & helped with alot of the functions</p><a href="https://github.com/sharkiarthur" style="font-size: 10px">SharkiArthur</a><br><br><p style="font-size: 10px">Helped With Cookie, Put up with our shit, reason the menu works</p><a style="font-size: 10px" href="https://github.com/cupiditys">Cupidity</a><button>go back</button</div>';

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
        document.getElementsByClassName('css-7ltzax e16nsggma')[0].innerHTML =min;
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
    }), document.getElementById("skip")
    .addEventListener("click", function() {
        skipLesson(document.getElementById("skip"))
    }), document.getElementById("farm")
    .addEventListener("click", function() {
        farmMinutes(document.getElementById("farm"))
    }), document.getElementById("diagnostic")
    .addEventListener("click", function() {
        diagnosticHack(document.getElementById("diagnostic"))
    }), dragElement(UI.firstElementChild);
