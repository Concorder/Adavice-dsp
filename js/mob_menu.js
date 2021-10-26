$(document).ready(function() {
  console.log('menu')
  //Define Defaults - Elements to be targets by user interaction/events
  var $defaults = {
    navigation: $("nav#navigation"),
    overlayDiv: $("#overlay"),
    menuIcon: $(".menu-icon"),
    menuTextIcons: $(".menu-text-icons"),
    menuText: $(".menu-text"),
    menuItemsContainer: $(".menu-items-container"),
    closeButton: $(".menu-close")
  };

  $defaults.menuIcon.on("click", function(e) {
    $defaults.menuItemsContainer.add($defaults.overlayDiv).fadeIn("slow");
    $defaults.menuTextIcons.addClass("effect-menu-text-icons");
    $defaults.menuText.addClass("effect-menu-text");
    $defaults.closeButton.fadeIn();
    e.stopPropagation();
  });

  $("body").on("click", function(e) {
    if (
      !$defaults.menuItemsContainer.is(e.target) &&
      $defaults.menuItemsContainer.has(e.target).length === 0
    ) {
      $defaults.menuTextIcons.removeClass("effect-menu-text-icons");
      $defaults.menuText.removeClass("effect-menu-text");
      $defaults.menuItemsContainer.fadeOut();
      $defaults.closeButton.fadeOut();
    }
  });
  let hidden = 1;
  $('#service_m').on('click', function(){
    if (hidden == 1)  {
      $('#submenu_mb').slideDown(500);
      hidden = 0;
    } else {
      $('#submenu_mb').slideUp(100);
      hidden = 1
    }

  });


});
