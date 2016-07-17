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
    }
    else if (entry === "CE") {
      expression = expression.slice (0, -1);
      $display.text(expression);
    }
    else if (entry == "=") {
      evaluateAnswer();
    }
    else {
      expression += entry;
      $display.text (expression);
    }
  });

  $(document).on('keydown', function (e) {
    if (e.which == 13) {
        evaluateAnswer();
     }
});

  function evaluateAnswer() {
      answer = eval (expression);
      $display.text (answer);
      expression = answer;
  }


}) (jQuery);







