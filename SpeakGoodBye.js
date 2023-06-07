(function (window) {
    var byeSpeaker = {};
  
    var speakWord = "Good Bye";
  
    byeSpeaker.speak = function (name) {
      var greeting = speakWord + " " + name;
      console.log(greeting);
      speakGreeting(greeting);
    };
  
    window.byeSpeaker = byeSpeaker;
  })(window);
  