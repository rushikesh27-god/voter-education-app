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
    reply.innerText = "🗳 To vote: Register → Check voter list → Visit booth → Cast vote.";
  } 
  else if (msg.includes("age")) {
    reply.innerText = "📅 Minimum voting age in India is 18 years.";
  } 
  else if (msg.includes("id") || msg.includes("card")) {
    reply.innerText = "🪪 You need a Voter ID (EPIC) to vote.";
  } 
  else if (msg.includes("where") || msg.includes("polling")) {
    reply.innerText = "📍 Check your polling booth on https://eci.gov.in";
  } 
  else {
    reply.innerText = "💡 Try asking: age, voter id, polling booth, how to vote.";
  }
}
