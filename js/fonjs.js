$(function () {
  var $write = $("#write"),
    shift = false,
    capslock = false;

  // https://www.w3schools.com/charsets/ref_utf_arrows.asp

  $("#keyboard li").click(function () {
    var $this = $(this),
      character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

    // Shift keys
    if ($this.hasClass("left-shift") || $this.hasClass("right-shift")) {
      $(".letter").toggleClass("uppercase");
      $(".diacritics").toggleClass("uppercase");
      $(".symbol span").toggle();

      shift = shift === true ? false : true;
      capslock = false;
      return false;
    }

    // Caps lock
    if ($this.hasClass("capslock")) {
      $(".letter").toggleClass("uppercase");
      $(".diacritics").toggleClass("uppercase");
      capslock = true;
      return false;
    }

    // Delete
    if ($this.hasClass("delete")) {
      var html1 = document.getElementById("write").value;
      $write.html(html1.substr(0, html1.length - 1));
      return false;
    }

    // Special characters
    if ($this.hasClass("symbol")) character = $("span:visible", $this).html();
    if ($this.hasClass("space")) character = " ";
    if ($this.hasClass("tab")) character = "\t";
    if ($this.hasClass("return")) character = "\n";

    // Uppercase letter
    if ($this.hasClass("uppercase")) character = character.toUpperCase();

    // Remove shift once a key is clicked.
    if (shift === true) {
      $(".symbol span").toggle();
      if (capslock === false) {
        $(".letter").toggleClass("uppercase");
        $(".diacritics").toggleClass("uppercase");
      }
      shift = false;
    }

    // Add the character
    $write.html($write.html() + character);
  });
});
