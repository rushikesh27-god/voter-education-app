function checkEligibility() {
  let age = document.getElementById("age").value;
  let result = document.getElementById("result");

  if (age >= 18) {
    result.innerText = "Eligible to vote ✅";
  } else {
    result.innerText = "Not eligible ❌";
  }
}

function answer(a) {
  let quiz = document.getElementById("quiz");

  if (a === 18) {
    quiz.innerText = "Correct! 🎉";
  } else {
    quiz.innerText = "Wrong! ❌";
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
