// Create the scope with defaults.
(function(window) {
  "use strict";

  // DOM elements.
  var demo = document.querySelector(".demo");

  // Create a livelist of command elements.
  var commands = demo.getElementsByClassName("command");

  var handleClick = function(evt) {
    var command = lastCommand();
    command.focus();

    var range = document.createRange();
    range.selectNodeContents(command);
    range.collapse(false);

    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  var handleKeyPress = function(evt) {
    if (evt.keyCode !== 13) {
      return false;
    }

    // Remove the current command's editable ability.
    lastCommand().removeAttribute("contenteditable");

    // Parse and handle the command.
    parseCommand();
  };

  var parseCommand = function() {
    var command = lastCommand().innerText;

    if (command.indexOf("git") === -1) {
      addCommand("command error", command + " is not a valid command.", false);
    }

    addCommand("command", "", true);
  };

  var addCommand = function(type, message, editable) {
    // Create the new command line.
    var command = document.createElement("div");
    command.className = type;

    // Add the new command.
    demo.appendChild(command);

    // Set message.
    command.innerText = message;

    if (editable) {
      command.setAttribute("contenteditable", true);

      // Set focus.
      setTimeout(function() {
        command.innerText = command.innerText;
        command.focus();
      }, 100);
    }
  };

  var lastCommand = function() {
    return commands[commands.length - 1];
  };

  demo.addEventListener("click", handleClick, true);
  demo.addEventListener("keypress", handleKeyPress, true);
})(this);
