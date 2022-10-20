let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

$(function() {
    // copy content to clipboard
    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }
  
    // copy coupone code to clipboard
    $(".share__link__2").on("click", function() {
      copyToClipboard("#copy-link");
      $(".copy__alert").fadeIn("slow");
    });
  });

  VANTA.CELLS({
    el: "#bod",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    color1: 0xf5f5f5,
    color2: 0xff0000,
    size: 0.30,
    speed: 1.50
  })