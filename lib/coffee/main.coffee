# Code highlighter
codeHighlighter = ->
	if $('pre code').length
		$('pre code').each (i, e) ->
			hljs.highlightBlock e

codeHighlighter()

# Section selector
sectionSelector = ->
	if $('#mdDocContainer > aside').length
		# Setup the ToC list
		$('#mdDocContainer > aside').append '<ul/>'
		$s = $('#mdDocContainer > aside ul')
		$h = $('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')

		# Build the ToC links
		$h.each (e) ->
			$i = $(@).attr 'id'
			$n = $(@).text()
			$s.append '<li><a href="#' + $i + '">' + $n + '</a></li>'

		# Trigger the ToC links
		$s.find('a').on 'click', (e) ->
			e.preventDefault()
			$o = $(@).attr 'href'
			$(@).toggleClass 'active'
			$(@).siblings().removeClass 'active'
			$($o).toggleClass 'active'
			$($o).siblings().removeClass 'active'
			window.location.hash = $o

sectionSelector()