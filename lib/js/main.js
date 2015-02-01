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
    if ($('#mdDocContainer > aside').length) {
      $('#mdDocContainer > aside').append('<ul/>');
      $s = $('#mdDocContainer > aside ul');
      $h = $('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
      $h.each(function(e) {
        var $i, $n;
        $i = $(this).attr('id');
        $n = $(this).text();
        return $s.append('<li><a href="#' + $i + '">' + $n + '</a></li>');
      });
      return $s.find('a').on('click', function(e) {
        var $o;
        e.preventDefault();
        $o = $(this).attr('href');
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $($o).toggleClass('active');
        $($o).siblings().removeClass('active');
        return window.location.hash = $o;
      });
    }
  };

  sectionSelector();

}).call(this);
