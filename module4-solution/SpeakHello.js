
// Wrap the entire script in an IIFE to avoid polluting the global namespace
(function (window) {
    // Create a speakHello object to hold our methods and properties
    var speakHello = {};
  
    // Define a greeting variable within the speakHello object's scope
    var greeting = "Hello";
  
    // Define the sayHello function that logs a greeting with the provided name
    speakHello.sayHello = function (name) {
      console.log(greeting + " " + name);
    }
  
    // Expose the speakHello object to the global scope (window)
    window.speakHello = speakHello;
  })(window);
  