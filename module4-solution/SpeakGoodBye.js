
// Wrap the entire script in an IIFE to avoid polluting the global namespace
(function (window) {
    // Create a speakGoodbye object to hold our methods and properties
    var speakGoodbye = {};
  
    // Define a greeting variable within the speakGoodbye object's scope
    var greeting = "Goodbye";
  
    // Define the sayGoodbye function that logs a greeting with the provided name
    speakGoodbye.sayGoodbye = function (name) {
      console.log(greeting + " " + name);
    }
  
    // Expose the speakGoodbye object to the global scope (window)
    window.speakGoodbye = speakGoodbye;
  })(window);
  