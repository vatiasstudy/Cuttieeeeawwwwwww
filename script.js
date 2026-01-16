let currentPage = 1;
const effects = document.getElementById("effects");

const symbols = ["✨","😄","🎉","💖","🌸","🦋","💫","CUTIE"];

function nextPage(){
  document.getElementById("p"+currentPage).classList.remove("active");
  currentPage++;
  document.getElementById("p"+currentPage).classList.add("active");
  sprinkleHappy();
}

function sprinkleHappy(){
  for(let i=0;i<40;i++){
    const s=document.createElement("span");
    s.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
    s.style.left = Math.random()*100+"vw";
    s.style.top = "100vh";
    s.style.fontSize = (Math.random()*24+14)+"px";
    s.style.animation = `floatUp ${Math.random()*5+6}s linear`;
    effects.appendChild(s);
    setTimeout(()=>s.remove(),10000);
  }
}

window.onload=()=>{
  sprinkleHappy();
};

function yes(){
  document.getElementById("result").innerHTML =
  "You genuinely made my heart smile 💖🥹<br><br>" +
  "Thank you for trusting me and choosing this moment. " +
  "I promise respect, honesty and positive vibes always ✨";
  sprinkleHappy();
}

function no(){
  document.getElementById("result").innerHTML =
  "I won’t lie, this makes me a little sad 😔<br><br>" +
  "But I respect your decision completely. " +
  "Thank you for being honest — you’re still amazing 💙";
  sprinkleHappy();
}

/* FLOAT ANIMATION */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp{
  from{transform:translateY(0);opacity:1;}
  to{transform:translateY(-120vh);opacity:0;}
}`;
document.head.appendChild(style);
