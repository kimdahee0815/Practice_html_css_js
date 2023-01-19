const body = document.body;
body.style.minHeight = "100vh";
body.style.display="flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const container = document.createElement("div");
container.classList.add("container");
container.style.maxWidth="960px";

const img = document.createElement("img");
img.setAttribute("src","http://newsteacher.chosun.com/site/data/img_dir/2019/06/10/2019061000109_0.jpg");
img.style.width = "100%";
img.style.padding="0"
container.append(img);

const h3 = document.createElement("h3");
h3.innerText = "Ping Pong Score Keeper";
h3.style.border="1px solid black";
h3.style.borderTop = "none";
h3.style.margin="0"
h3.style.padding="0"
container.append(h3);

const scoreboard = document.createElement("div")
scoreboard.classList.add("scoreboard");
scoreboard.style.border = "3px dashed red"
scoreboard.style.padding="15px"
scoreboard.style.boxSizing="border-box"

const h1 = document.createElement("h1");
let p1Score = 0;
let p2Score = 0;
const span1 = document.createElement("span");
span1.classList.add("score1");
span1.innerText=`${p1Score}`;
const span2 = document.createElement("span");
span2.classList.add("score2");
span2.innerText=`${p2Score}`;
h1.append(span1," to ",span2)
h1.style.fontSize = "4em"
h1.style.margin="0"

const h2 = document.createElement("h2");
h2.innerText = "Use the buttons below to keep score";
h2.style.fontWeight = "400"
h2.style.margin="0"
h2.style.marginBottom = "15px"

const label = document.createElement("label")
label.innerText = "Playing To  "
label.style.fontSize = "30px";
label.style.fontWeight = "bold";
label.setAttribute("for","scoreSelect")

const select = document.createElement("select")
select.setAttribute("id","scoreSelect")
select.setAttribute("name","scoreSelect")
for(let i =3 ; i <=11; i++){
    const option = document.createElement("option")
    option.setAttribute("value",i)
    option.innerText = `${i}`;
    select.appendChild(option)
}

let val=3;
select.addEventListener("change", function(value){
    val=parseInt(this.value);
    resetfunc();

})



const playerbox = document.createElement("div")
playerbox.classList.add("playerbox")
playerbox.style.display = "flex"

playerbox.style.height="60px"

const playerbtn1 = document.createElement("button")
playerbtn1.innerText ="+1 Player One"
playerbtn1.style.backgroundColor = "green"
playerbtn1.style.flex="1"
playerbtn1.style.color="white"
playerbtn1.style.fontSize = "1.5em"
playerbtn1.setAttribute("type","button")

const playerbtn2 = document.createElement("button")
playerbtn2.innerText ="+1 Player Two"
playerbtn2.style.backgroundColor = "blue"
playerbtn2.style.flex="1"
playerbtn2.style.color="white"
playerbtn2.style.fontSize = "1.5em"
playerbtn2.setAttribute("type","button")

const reset = document.createElement("button")
reset.innerText ="Reset"
reset.style.backgroundColor = "red"
reset.style.flex="1"
reset.style.color="white"
reset.style.fontSize = "1.5em"
reset.setAttribute("type","button")



playerbox.append(playerbtn1,playerbtn2,reset)

scoreboard.append(h1,h2, label, select)
container.append(scoreboard,playerbox)

body.appendChild(container);

playerbtn1.addEventListener("click",()=>{
    if(p1Score < val){
        p1Score +=1;
        span1.innerText=`${p1Score}`;
    }
    if(p1Score === val){
        const score1 = document.querySelector(".score1")
        score1.classList.add("p1score")
        span2.classList.add("lost")
        playerbtn1.disabled =true;
        playerbtn2.disabled =true;
        playerbtn1.style.opacity="0.7"
        playerbtn2.style.opacity="0.7"
    }
    
})

playerbtn2.addEventListener("click",()=>{
    if(p2Score < val){
        p2Score +=1;
        span2.innerText=`${p2Score}`;
    }
    if(p2Score === val){
        const score2 = document.querySelector(".score2")
        score2.classList.add("p2score")
        span1.classList.add("lost")
        playerbtn1.disabled =true;
        playerbtn2.disabled =true;
        playerbtn1.style.opacity="0.7"
        playerbtn2.style.opacity="0.7"
    }
    
})

reset.addEventListener("click",()=>{
    resetfunc();
})

function resetfunc(){
    p1Score=0;
    p2Score=0;
    span1.innerText=`${p1Score}`;
    span2.innerText=`${p2Score}`;
    span1.classList.remove("p1score")
    span2.classList.remove("p2score")
    span1.classList.remove("lost")
    span2.classList.remove("lost")
    playerbtn1.disabled =false;
    playerbtn2.disabled =false;
    playerbtn1.style.opacity="1"
    playerbtn2.style.opacity="1"
}

const btns = document.getElementsByTagName("button")
for(let btn of btns){
    btn.addEventListener("mouseover",(e)=>{
        e.target.classList.add("hover")
    })
}
for(let btn of btns){
    btn.addEventListener("focusout",(e)=>{
        e.target.classList.remove("hover")
    })
}

for(let btn of btns){
    btn.addEventListener("mouseout",(e)=>{
        e.target.classList.remove("hover")
    })
}