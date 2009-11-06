---
title: New Look
layout: post
type: basic
short: nl
description: I redesigned this website, using HTML 5 and some CSS 3
topics:
 - css
 - html5
---
While reformatting the templates behind mottr.am to suit [jekyll](), I decided to experiment with <abbr>HTML</abbr> 5. For a simple site like this, it's a pleasure to use--blog entries are wrapped in `<article>` tags, headings are wrapped in `<header>` tags, times go inside `<time>` tags, and, well, you get the idea.
	
There are problems with this newly-semantic approach to markup. The spec is still in flux, and is sometimes very precise, sometimes open to interpretation--I'm not entirely sure I'm using the `<section>` tag correctly, for example, and it feels a little funny to be using a  `<footer>` to house the metadata for each post. I probably ought to be using `<figure>`, `<legend>` and `<details>` to display images, videos, and their associated information, but my eyes started glazing over 
	
Persuading browsers that don't recognise the new tags--which includes everything bar the latest versions of Firefox, Opera and Safari--is a bit fiddly, too, but thanks to Remy Sharp's [<abbr>HTML</abbr> 5 enabling script](http://remysharp.com/2009/01/07/html5-enabling-script/) and clever [fix for Firefox 2](http://remysharp.com/2009/04/14/html5-and-firefox2/) and Camino, the site looks just fine in 



All this is gloriously pointless, of course--as far as I know, no browser does anything useful with any of the new-to-<abbr>HTML</abbr> 5 tags--but it was _fun_. Combing through other people's source code, reading dry-as-dust specs, following debates across weblogs and mailing lists, making mistakes, correcting them--this is how I learned how to make websites in the first place. There's a real pleasure to be found in _not quite knowing what you're doing_.



(http://www.brucelawson.co.uk/2009/redesigning-with-html-5-wai-aria/)
(http://www.brucelawson.co.uk/2009/marking-up-a-blog-with-html-5-part-2/)
