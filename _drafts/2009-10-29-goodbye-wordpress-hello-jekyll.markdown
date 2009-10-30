---
layout: post
title: Goodbye WordPress, Hello Jekyll
type: basic
keywords: test, meta, design
description: Why I decided to switch from Wordpress to the static site generator jekyll.
topics:
 - meta
 - jekyll
 - wordpress
---

The number one reason: no more updating WordPress. Sure, it's easy enough to click through the Automatic Upgrade process for WordPress itself, and any plugings you have installed, but it's time-consuming.

It wasn't a painless process, by any means:

I was using a lot of custom fields in WordPress, which made exporting posts from the database more fiddly than it could've been, and meant manually editing about a third of the entries (so there's no chance of [Submit Response][1] getting the jekyll treatment anytime soon).

I'd been spoiled by WordPress plugins: valid video embedding, audio playing, image resizing, short URLs, &c. were all handled automatically, without my having to think about it. The new incarnation of the site is fairly well automated, thanks to the flexibility of `jekyll`'s [YAML Front Matter](http://wiki.github.com/mojombo/jekyll/yaml-front-matter) and the simplicity of the [Liquid templating language](http://www.liquidmarkup.org/).

For example, the text file for [this video post][] begins with:

{% highlight yaml %}
---
title: Cassetteboy Does Griffin
layout: post
type: video
video_url: http://www.youtube.com/v/_QAvkFS_cgk
keywords: cassetteboy, nick griffin, bnp
description: Cassetteboy edits the truth into Nick Griffin
topics:
 - bnp
 - cassetteboy
---
{% endhighlight %}

And the relevant part of my [post layout][] looks like this (only without the backslashes):

{% highlight html %}
<object type="application/x-shockwave-flash"
style="width:600px;height:492px;" data="\{\{ page.video_url \}\}">
<param name="movie" value="\{\{ page.video_url \}\}" />
</object>
{% endhighlight %}


There's one big problem I've yet to solve: tags are purely cosmetic for the time being