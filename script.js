function processName() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;
    var firstLetter = name.charAt(0).toLowerCase();
  
    if (firstLetter === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  
    nameInput.value = "";
  }
  
  var greetingContainer = document.getElementById("greeting");
  
  function speakGreeting(greeting) {
    var greetingElement = document.createElement("p");
    greetingElement.textContent = greeting;
    greetingContainer.appendChild(greetingElement);
  }
  