---
title: Individual Post Designs
layout: post
type: basic
time: T22:18:05Z
description: 
topics: 
 - design
 - jekyll
 - web
---
I've decided to start giving certain, very occasional posts little make-overs.

I've wanted to try this out since I saw Jason Santa Maria's wonderful [typewritten enconium][2] to his Royal typewriter, and was reminded of the idea by Russell Davies' recent, <abbr>RSI</abbr>-inspired bout of [hand-written blogging][3].

My first attempt, a short note about a book, designed to look a wee bit like the book in question, [is here][1]. (It looks nice in Safari, and okay in Firefox 3.5/6, and no doubt quite rubbish in other browsers.)

I _could_ have done this when this weblog was [WordPress][4]-powered, but it would've been a right faff. With [jekyll][5], all I had to do--not counting the actual designing bit--was add a couple of words to the text file for the post--`css: beckett`--and a line to my default template:
{% highlight html %}
[% if page.css %]<link rel="stylesheet" href="/c/[[ page.css ]].css"
	type="text/css" media="screen" />[% endif %]
{% endhighlight %}
If I want to get much more fancy in future, it would be easy enough to create a custom template, just for one post, or a group of posts.

This is the nice thing about [jekyll][5]. It doesn't do a great deal, compared to your average full-blown database-powered weblogging application souped up with half a dozen plugins--in fact it's lacking a few key features--but it _does_ remove the barriers between you and your website. Want to make a post? Write a text file, issue a command! Want to do a fun little design experiment? Go right ahead!

[1]:/2009/11/19/the-letters-of-samuel-beckett/ "The letters of Samuel Beckett"
[2]:http://jasonsantamaria.com/articles/royal/ "Beautiful!"
[3]:http://russelldavies.typepad.com/planning/2009/10/rsi.html
[4]:http://wordpress.org/ "Don\'t get me wrong, WP is great, it just stopped suiting me."
[5]:http://wiki.github.com/mojombo/jekyll/ "It's a static site generator."