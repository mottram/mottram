---
title: Fluid Images
layout: post
category: basic
short: fluid 
time:  T13:12:19Z
loc: CH48,UK 
locname: Wirral 
description: 
tags: 
 - css
 - images
 - tumblr
---
I rejigged the <abbr>CSS</abbr> for [One Thing Well](http://onethingwell.org) last night, making it semi-fluid, responsive to changes in browser window width and better suited to viewing on iPhones and iPads.

I ran into one problem: how to resize wide images for smaller browser windows without affecting small images?

Handily, when Tumblr resizes large images, it appends the width of an image to its filename--eg.,`tumblr_guagfduyfa_500.png`--so I could use CSS [attribute selectors](http://forabeautifulweb.com/blog/about/css_a_tribute_to_selectors "A piece on attribute selectors by Andy Clarke"):

{% highlight pygments %}
img[src$="_500"] {
width:100%;
max-width:500px;
}

img[src$="_400"] {
width:100%;
max-width:400px;
}
{% endhighlight %}

Now, if the width of the containing `<article>` tag drops below 400px or 500px, the image will shrink to fit in [all modern browsers](http://kimblim.dk/css-tests/selectors/).