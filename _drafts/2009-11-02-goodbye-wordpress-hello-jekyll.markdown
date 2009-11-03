---
layout: post
title: Goodbye WordPress, Hello Jekyll
type: basic
short: j
loc: Wirral, Merseyside CH48 2JN
UK
loc_name: Wirral
keywords: test, meta, design
description: Why I decided to switch from Wordpress to the static site generator jekyll.
topics:
 - jekyll
 - wordpress
---
The number one reason: no more updating WordPress. Sure, it's easy enough to click through the Automatic Upgrade process for WordPress itself, or any plugins you have installed, but it's time-consuming, and lately every time I logged into my WP installation, I had to update some plugin or other.

It wasn't a painless process, by any means:

I was using a lot of custom fields in WordPress, which made exporting posts from the database more fiddly than it could've been, and meant manually editing about a third of the entries (so there's no chance of [Submit Response](http://submitresponse.co.uk) getting the jekyll treatment anytime soon).

I'd been spoiled by WordPress plugins: valid video embedding, audio playing, image resizing, short URLs, &c. were all handled automatically, without my having to think about it. The new incarnation of the site is fairly well automated, thanks to the flexibility of `jekyll`'s [YAML Front Matter](http://wiki.github.com/mojombo/jekyll/yaml-front-matter) and the simplicity of the [Liquid templating language](http://www.liquidmarkup.org/).

For example, the text file for [this video post]() begins with:

{% highlight yaml %}
---
title: Cassetteboy Does Griffin
layout: post
type: video
video_url: http://www.youtube.com/v/_QAvkFS_cgk
description: Cassetteboy edits the truth into Nick Griffin
topics:
 - bnp
 - cassetteboy
---
{% endhighlight %}

And the relevant part of my [post layout](http://github.com/mottram/mottram/blob/master/_layouts/post.html) looks like this (only without the backslashes):

{% highlight html %}
<object type="application/x-shockwave-flash"
style="width:600px;height:492px;" data="\{\{ page.video_url \}\}">
<param name="movie" value="\{\{ page.video_url \}\}" />
</object>
{% endhighlight %}

Not everything is working properly:

* Tags are purely cosmetic. For the time being, I'm happy enough having the metadata in place, ready for any future solution that I (or, more likely, someone else) might think up.
* I'm not really sure if all my (X)HTML 5 is completely kosher--I should probably be using the `<header>` tag inside my `<article>`s, for example.
* As far as I can tell, it's currently impossible to have a document that is both valid HTML 5 and conforms to the hAtom and hcard specs, because HTML 5 drops the `profile` attribute from the `<head>` tag. I've chosen to go with valid HTML 5, and my hAtom still works with tools like 

Further reading:

* [Getting Semantic With Microformats, Part 5: hAtom](http://www.ablognotlimited.com/articles/getting-semantic-with-microformats-part-5-hatom/)
* [Designing a blog with html5](http://html5doctor.com/designing-a-blog-with-html5/)