(function () {
  'use strict';
  angular.module('ionic.ion.headerShrink', [])
    .directive('headerShrink', ['$document', headerShrink]);


  function headerShrink($document) {
    var fadeAmt;
    var shrink = function (header, content, amt, max) {
      amt = Math.min(max, amt);
      fadeAmt = 1 - amt / max;
      ionic.requestAnimationFrame(function () {
        header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + amt + 'px, 0)';
        for (var i = 0, j = header.children.length; i < j; i++) {
          header.children[i].style.opacity = fadeAmt;
        }
      });
    };

    return {
      restrict: 'A',
      link: function ($scope, $element, $attr) {
        var starty = parseInt($attr.headerShrink) || 0,
          shrinkAmt,
          amt,
          y = 0,
          prevY = 0,
          scrollDelay = 0.4,
          fadeAmt,
          headers = $document[0].body.querySelectorAll('.bar-header'),
          headerHeight = headers[0].offsetHeight;

        function onScroll(e) {
          var scrollTop = e.detail.scrollTop;

          if (scrollTop >= starty) {
            y = Math.min(headerHeight / scrollDelay, Math.max(0, y + scrollTop - prevY));
          } else {
            y = 0;
          }

          ionic.requestAnimationFrame(function () {
            fadeAmt = 1 - (y / headerHeight);
            for (var k = 0, l = headers.length; k < l; k++) {
              headers[k].style[ionic.CSS.TRANSFORM] = 'translate3d(0, ' + -y + 'px, 0)';
              headers[k].style.opacity = fadeAmt;
            }
          });

          prevY = scrollTop;
        }

        $element.bind('scroll', onScroll);
      }
    }
  }
})();
