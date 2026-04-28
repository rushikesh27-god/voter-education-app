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

  if (msg.includes("how to vote")) {
    reply.innerText = "Step 1: Register as voter\nStep 2: Check voter list\nStep 3: Visit polling booth\nStep 4: Cast your vote";
  } 
  else if (msg.includes("eligibility") || msg.includes("age")) {
    reply.innerText = "You must be 18+ years old and an Indian citizen to vote.";
  } 
  else if (msg.includes("id")) {
    reply.innerText = "You need a valid Voter ID or approved identity proof.";
  }
  else if (msg.includes("where")) {
    reply.innerText = "You can vote at your assigned polling booth.";
  }
  else {
    reply.innerText = "I can help with voting steps, eligibility, and voter ID info.";
  }
}
