let score = 0;

function checkEligibility() {
  let age = document.getElementById("age").value;
  let result = document.getElementById("result");

  if (age >= 18) {
    result.innerText = "Eligible to vote ✅";
  } else {
    result.innerText = "Not eligible ❌";
  }
}

function answer(ans) {
  let quiz = document.getElementById("quiz");

  if (ans === 18) {
    score = 1;
    quiz.innerText = "Correct! Score: 1";
  } else {
    quiz.innerText = "Wrong! Score: 0";
  }
}

function chat() {
  let msg = document.getElementById("msg").value.toLowerCase();
  let reply = document.getElementById("reply");

  if (msg.includes("vote")) {
    reply.innerText = "Go to polling booth and cast your vote.";
  } else if (msg.includes("age")) {
    reply.innerText = "Minimum age is 18.";
  } else {
    reply.innerText = "Ask about voting or eligibility.";
  }
}
