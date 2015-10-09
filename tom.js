$(document).ready(function(){
  $('.template, .json').change(function() {
    var e, html, json, template;
    try {
      template = $('.template').val();
      json = $.parseJSON($('.json').val());
      html = Mustache.to_html(template, json).replace(/^\s*/mg, '');
    } catch (_error) {
      e = _error;
      html = e.toString();
    }
    return $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  });
});
