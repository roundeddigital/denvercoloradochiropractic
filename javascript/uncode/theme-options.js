<script>
/* Footer Date Selection */
jQuery(document).ready(function($) {
  jQuery('li.day').eq(new Date().getDay()).addClass('today');
});

/* Drop Down Menu */
jQuery('.closeall').click(function(){
  jQuery('.panel-collapse.in')
    .collapse('hide');
});

jQuery('.arrow-right').hide();
jQuery('.arrow-down').hide();
jQuery('a.accordion-toggle').hover(function() {
    if (!jQuery(this).find('.arrow-down').is(':visible')) {
      jQuery(this).find('.arrow-right').show();
    }
  }, function() {
    jQuery(this).find('.arrow-right').hide();
  }
);

jQuery('a').click(function(){
  jQuery(this).find('.arrow-right').hide()
  if (jQuery(this).find('.arrow-down').is(':visible')) {
      jQuery(this).find('.arrow-down').hide();
  } else {
    jQuery('.arrow-down').hide();
      jQuery(this).find('.arrow-down').show();
  }
});

</script>
