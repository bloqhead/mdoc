#
# Code highlighter
#
# Simple code highlighting.
# https://highlightjs.org/
#

codeHighlighter = ->
	if $('pre code').length
		$('pre code').each (i, e) ->
			hljs.highlightBlock e

codeHighlighter()

#
# Section selector
#
# Build the list of sidebar links automatically based
# on the headers in the documents themselves. Since
# md2html gives each heading an ID, this was easy
# to accomplish.
#

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
			$p = $(@).parent('li')
			$p.toggleClass 'active'
			$p.siblings().removeClass 'active'
			$($o).toggleClass 'active'
			$($o).siblings().removeClass 'active'
			window.location.hash = $o

sectionSelector()

#
# Section hash highlighter
#
# Highlights the current items on page load so that
# you can send a user a link to a section and it's
# automatically highlighted for them.
#

sectionHighlighter = ->
	$h = window.location.hash
	$($h).addClass 'active'
	$('#mdDocContainer > aside a[href="' + $h + '"]').parent('li').addClass 'active'

sectionHighlighter()