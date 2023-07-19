let images = null;
let maxX = document.body.scrollWidth;
let curVal = 3;

function moveHead(event) {
    if(images==null){
        return;
    }
    let x = event.clientX;
    let val = Math.round(map(x, 0, maxX, 0, 6));

    if(val!=curVal){
        images[curVal].style.visibility='hidden';
        curVal=val;
        images[curVal].style.visibility='visible';
    }

}

function map(input, input_start, input_end, output_start, output_end){
    return output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start);
}

function resized() {
    maxX = document.body.scrollWidth;
    console.log(maxX);
}

function hovered(st) {
    document.getElementById(st).classList.add("hovering");
}
function unhovered(st) {
    document.getElementById(st).classList.remove("hovering");
}
function clicked(i){
    document.getElementById('transELM').style.backgroundColor=((i==1)?'#FE4773':(i==2)?'#F6D68D':'#46B3A5');
}

function transLoaded(){
    document.getElementById('transELM').style.backgroundColor=localStorage.getItem("prevColor");
    console.log("aaaaaaaaaaaaaaaa")
}

window.onload = () => {
    const transitionELM = document.querySelector('.transition');
    let pathName = window.location.pathname;

    localStorage.setItem("prevColor", (pathName.includes("contact"))?"#46B3A5":(pathName.includes("projects"))?"#FE4773":(pathName.includes("about"))?"#F6D68D":localStorage.getItem("prevColor"))
    if(pathName.includes("projects.html")){
        addProjects();
    }
    transitionELM.classList.remove('is-active');
    images = [document.getElementById("head1"),document.getElementById("head2"),document.getElementById("head3"),document.getElementById("head4"),document.getElementById("head5"),document.getElementById("head6"),document.getElementById("head7")];
    const anchors = document.querySelectorAll('a');
    for(let i = 0; i<anchors.length; i++) {
        let anchor = anchors[i];
        if(!(anchor.href.includes("index") || anchor.href.includes("projects") || anchor.href.includes("about") || anchor.href.includes("contact"))){
            continue;
        }
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = anchor.href;
            transitionELM.classList.add('is-active');
            setTimeout(() => {
              window.location.href = target;
            }, 400);
          })
    }

}
