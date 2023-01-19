const rating = document.querySelector(".rating");
const punctuations = document.querySelectorAll(".circle");
let score;


document.addEventListener( "click", (e) => {
  punctuations.forEach( punctuation => {

    punctuation.style.background = "hsl(216, 12%, 8%)";
    punctuation.style.color = "hsl(216, 12%, 54%)";
    if( punctuation.innerText === e.target.innerText ) {

      punctuation.style.background = "hsl(25, 97%, 53%)";
      punctuation.style.color = "#fff";
      score = punctuation.innerText;
      localStorage.setItem('score', score);
    }
  })
})


if( localStorage.getItem("score") == null) rating.textContent = `You don't selected`;
else rating.textContent = `You selected ${localStorage.getItem("score")} out of 5`;

localStorage.clear();

