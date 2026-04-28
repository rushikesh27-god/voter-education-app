function checkEligibility() {
  let age = document.getElementById("age").value;
  let result = document.getElementById("result");

  if (age >= 18) {
    result.innerText = "Eligible to vote ✅";
  } else {
    result.innerText = "Not eligible ❌";
  }
}

// Quiz Function
function answer(a) {
  let quiz = document.getElementById("quiz");

  if (a === 18) {
    quiz.innerText = "Correct! 🎉";
  } else {
    quiz.innerText = "Wrong! ❌";
  }
}


// Chat Function
function chat() {
  let msgInput = document.getElementById("msg");
  let msg = msgInput.value.trim();
  let chatBox = document.getElementById("chatBox");

  if (msg === "") return;

  // Show user message
  chatBox.innerHTML += `
    <div class="msg user">${msg}</div>
  `;

  let response = "";
  let text = msg.toLowerCase();

  if (text.includes("vote")) {
    response = "🗳️ To vote: Register → Check voter list → Visit booth → Cast your vote.";
  } 
  else if (text.includes("age")) {
    response = "✅ Minimum voting age in India is 18 years.";
  } 
  else if (text.includes("id") || text.includes("card")) {
    response = "🪪 You need a Voter ID (EPIC) to vote.";
  } 
  else if (text.includes("where") || text.includes("polling")) {
    response = "📍 Check your polling booth at https://eci.gov.in";
  } 
  else {
    response = "💡 Try asking: age, voter id, where to vote, how to vote.";
  }

  // Show bot response
  chatBox.innerHTML += `
    <div class="msg bot">${response}</div>
  `;

  // Clear input
  msgInput.value = "";

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;
}
