'use strict';

var renderTemplate = function() {
  var e, html, json, template;
  try {
    template = $('.template').val();
    json = $.parseJSON($('.json').val());
    html = Mustache.to_html(template, json).replace(/^\s*/mg, '');
  } catch (_error) {
    e = _error;
    html = e.toString();
  }

  $('.html').text(html);
  return $('pre.html').each(function(i, block) {
    hljs.highlightBlock(block);
  });
}

$(function(){
  hljs.initHighlightingOnLoad();
  renderTemplate();
  $('.template, .json').keyup(renderTemplate);
});
