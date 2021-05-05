// test that the js is linked
console.log("Testing1");

// Nash Vail's responsive dot background
const colors = ["#FF6D40", "#7DAFFF", "#A9D800", "#FFCE31", "#A100FF", "#FF85C2"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 75)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

// test that the code is working
console.log("Testing2");

// pair mood with recipe
let happy = document.getElementById('happy');
happy.addEventListener('click', function(){
	document.getElementById("moods").classList.toggle("active");
	document.getElementById("recipe1").classList.toggle("active");
});

let sad = document.getElementById('sad');
sad.addEventListener('click', function(){
	document.getElementById("moods").classList.toggle("active");
	document.getElementById("recipe2").classList.toggle("active");
});

let disgusted = document.getElementById('disgusted');
disgusted.addEventListener('click', function(){
	document.getElementById("moods").classList.toggle("active");
	document.getElementById("recipe3").classList.toggle("active");
});

let scared = document.getElementById('scared');
scared.addEventListener('click', function(){
	document.getElementById("moods").classList.toggle("active");
	document.getElementById("recipe4").classList.toggle("active");
});

let angry = document.getElementById('angry');
angry.addEventListener('click', function(){
	document.getElementById("moods").classList.toggle("active");
	document.getElementById("recipe5").classList.toggle("active");
});

let surprised = document.getElementById('surprised');
surprised.addEventListener('click', function(){
	document.getElementById("moods").classList.toggle("active");
	document.getElementById("recipe6").classList.toggle("active");
});

// test that the code is working
console.log("Testing3");