/*
 * equalize.js 
 * Equalize the heights of children elements
 * Copyright 2013 @hos
 * $('.equalize').equalize();
 * $('.equalize').equalize({child:'p'});
*/
!function(a){a.fn.eqHeights=function(b){var c={child:!1},b=a.extend(c,b),d=a(this);if(d.length>0&&!d.data('eqHeights')&&d.data('eqHeights',!0),b.child&&b.child.length>0)var e=a(b.child,this);else var e=a(this).children();var f=0,g=0,h=[];e.height('auto').each(function(){var b=a(this).offset().top;f>0&&f!=b&&(a(h).height(g),g=a(this).height(),h=[]),g=Math.max(g,a(this).height()),f=a(this).offset().top,h.push(this)}),a(h).height(g)}}(jQuery);
