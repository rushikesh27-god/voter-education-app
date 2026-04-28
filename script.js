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
  let msgInput = document.getElementById("msg");
  let msg = msgInput.value.toLowerCase();
  let chatBox = document.getElementById("chatBox");

  if (msg.trim() === "") return;

  // User message
  chatBox.innerHTML += `<p><b>You:</b> ${msg}</p>`;

  let response = "";

  if (msg.includes("vote")) {
    response = "🗳️ To vote: Register → Check voter list → Visit booth → Cast your vote.";
  } 
  else if (msg.includes("age")) {
    response = "✅ Minimum voting age in India is 18 years.";
  } 
  else if (msg.includes("id") || msg.includes("card")) {
    response = "🪪 You need a Voter ID (EPIC) to vote.";
  } 
  else if (msg.includes("where") || msg.includes("polling")) {
    response = "📍 Check your polling booth at https://eci.gov.in";
  } 
  else {
    response = "💡 Try: age, voter id, polling booth, how to vote.";
  }

  // Bot reply
  chatBox.innerHTML += `<p><b>Bot:</b> ${response}</p>`;

  // Clear input
  msgInput.value = "";
}
