$(function() {

  // animate on scroll
  new WOW().init();
});

$(function() {
  $("#work").magnificPopup ({
     delegate: 'a', // child items selector, by clicking on it popup will open
     type: 'image',
     gallery: {
       enabled: true
     }
  });
});