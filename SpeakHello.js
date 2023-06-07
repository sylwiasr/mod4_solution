(function (window) {
    var helloSpeaker = {};
  
    var speakWord = "Hello";
  
    helloSpeaker.speak = function (name) {
      var greeting = speakWord + " " + name;
      console.log(greeting);
      speakGreeting(greeting);
    };
  
    window.helloSpeaker = helloSpeaker;
  })(window);
  