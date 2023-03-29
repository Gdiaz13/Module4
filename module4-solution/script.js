
// Wrap the entire script in an IIFE, passing the speakHello and speakGoodbye objects as arguments
(function (speakHello, speakGoodbye) {
    // Define an array of names to iterate over
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // Loop through the names array
    for (var i = 0; i < names.length; i++) {
      // Get the first letter of the current name and convert it to lowercase
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      // If the first letter is 'j', call the sayGoodbye method on the speakGoodbye object
      if (firstLetter === 'j') {
        speakGoodbye.sayGoodbye(names[i]);
      } else {
        // Otherwise, call the sayHello method on the speakHello object
        speakHello.sayHello(names[i]);
      }
    }
  })(window.speakHello, window.speakGoodbye); // Pass the speakHello and speakGoodbye objects from the global scope (window)
  