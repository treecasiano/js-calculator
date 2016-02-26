// calculator.js

(function ($) {
  var answer;
  var expression = "";
  var $display = $ ('#display');

// assign event handler to buttons
  $ (".button").click (function () {
    var entry = $ (this).attr ("value");

    if (entry === "AC") {
      expression = "";
      $display.text(expression);
      return;
    }

    if (entry === "CE") {
      expression = expression.slice (0, -1);
      $display.text(expression);
      return;
    }

    if (entry == "=") {
      answer = eval (expression);
      $display.text (answer);
      expression = answer;
      return;
    }

    if (entry !== "=") {
      expression += entry;
      $display.text (expression);
    }

  });
}) (jQuery);







