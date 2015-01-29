# Code highlighter
codeHighlighter = ->
	if $('pre code').length
		$('pre code').each (i, e) ->
			hljs.highlightBlock e

codeHighlighter()

# Section selector
sectionSelector = ->
	if $('#mdDocHeader').length
		$('#mdDocHeader [class^="g-"]:first-of-type').append '<select />'
		$s = $('#mdDocHeader select')
		$h = $('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')

		$h.each (e) ->
			$i = $(this).attr 'id'
			$n = $(this).text()
			$s.append '<option value="#' + $i + '">' + $n + '</option>'

		$s.change (e) ->
			$o = $(this).find(':selected').val()
			$($o).toggleClass 'active'
			$($o).siblings().removeClass 'active'
			window.location.hash = $o

sectionSelector()