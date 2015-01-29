(function() {
  var codeHighlighter, sectionSelector;

  codeHighlighter = function() {
    if ($('pre code').length) {
      return $('pre code').each(function(i, e) {
        return hljs.highlightBlock(e);
      });
    }
  };

  codeHighlighter();

  sectionSelector = function() {
    var $h, $s;
    if ($('#mdDocHeader').length) {
      $('#mdDocHeader [class^="g-"]:first-of-type').append('<select />');
      $s = $('#mdDocHeader select');
      $h = $('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
      $h.each(function(e) {
        var $i, $n;
        $i = $(this).attr('id');
        $n = $(this).text();
        return $s.append('<option value="#' + $i + '">' + $n + '</option>');
      });
      return $s.change(function(e) {
        var $o;
        $o = $(this).find(':selected').val();
        $($o).toggleClass('active');
        $($o).siblings().removeClass('active');
        return window.location.hash = $o;
      });
    }
  };

  sectionSelector();

}).call(this);
