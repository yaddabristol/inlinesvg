(function($) {

  // Modernizr 2.7.2
  supportsInlineSVG = function() {
    var div = document.createElement('div');
    div.innerHTML = '<svg/>';
    return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
  };

  // Modernizr 2.7.2
  supportsSVG = function () {
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
  };

  $.fn.inlinesvg = function (options) {

    if (supportsInlineSVG()) {
      this.each(function(index){
        
        var $img = $(this),
            imgID = $img.attr('id'),
            imgClass = $img.attr('class'),
            imgURL = $img.attr('src');
        
        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Copy properties from IMG tag to SVG tag
            $.each($img.prop('attributes'), function() {
              $svg.attr(this.name, this.value);
            });
            
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
        });
      });

      return;
    }
    
    // No SVG Support? Replace with PNGs.
    if (!supportsSVG()) {
      this.attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
      }).removeClass('svg');
    }
  }

}(jQuery));
