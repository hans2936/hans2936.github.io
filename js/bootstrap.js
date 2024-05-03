$(document).ready(function () {

    $(document).trigger('bootstrap:before');

    $(document).on('keyup', function (event) {
      var shouldDismissSearchPopup = event.which === 27 &&
        $('.search-popup').is(':visible');
      if (shouldDismissSearchPopup) {
        $('.search-popup').hide();
        $('.search-popup-overlay').remove();
        $('body').css('overflow', '');
       }
      });

    $(document).trigger('bootstrap:after');
});
