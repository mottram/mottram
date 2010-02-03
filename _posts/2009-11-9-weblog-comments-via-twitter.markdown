---
title: Weblog Comments via Twitter
layout: post
type: basic
short: tw
time: T14:56:45Z
loc: CH48,UK
locname: Wirral
description: How to add comments from Twitter to your jekyll blog using jQuery and the Juitter plugin.
tags:
 - jekyll
 - juitter
 - twitter
---
This weblog is powered by [jekyll][1], a static website generator--it's a great way to publish a site with minimal effort, but it can't handle comments.
A lot of folk with static sites opt to use [Disqus][2] or [Intense Debate][3] to add commenting to their sites, but, like jekyll user [Benjamin Thomas](http://benjaminthomas.org/2009-01-27/why-im-not-using-disqus.html), I find both services a wee bit over the top. 

One [Disqus][2] feature I _do_ like, though, is the ability to track conversations about a weblog post taking place on [Twitter][4]. So I decided to copy it.

Thanks to the [Juitter][5] plugin for [jQuery][9], it turned out to be a piece of cake.

First, you'll need to add some [YAML Front Matter][10] to your posts that can be used to generate a hashtag, like so:
{% highlight yaml%}
---
title: Weblog Comments via Twitter
layout: post
type: basic
short: tw
description: Add comments from Twitter to your jekyll blog.
tags:
 - jekyll
 - juitter
 - twitter
---
{% endhighlight %}
(Since I'm already generating short <abbr>URL</abbr>s for posts to my site, I'm reusing the 'short' chunk of YAML Front Matter, but you can call it whatever you like.)

Then, add a `div` somewhere in your post template where you'd like your comments to display, and a note to inform readers that they can tweet comments to your weblog. The relevant part of my [jekyll][1] post template looks like this (only without those backslashes):
{% highlight html %}
<section>
<header><h1>Comments</h1></header>
<p>Add a comment by tweeting with the hashtag #mot_\{\{ page.short \}\}</p>
<div id="tweets"></div>
</section>
{% endhighlight %}
As you can see, I've decided my hashtag will always begin #mot_, followed by the letters I've chosen in the YAML Front Matter--this results in a pretty odd string of letters, which should hopefully avoid the problem of displaying any irrelevant tweets that happen to have the same hashtag). 

Next, download [Juitter][5], stick it in your scripts directory, and add it in the `<head>` of your site template.
	
Finally, add something like the following snippet of JavaScript--again, without those pesky backslashes--on pages where you want the Twitter comments feature to work:
{% highlight js %}
$(document).ready(function() {
$.Juitter.start({
	searchType:"searchWord",
	searchObject:"%23mot_\{\{ page.short \}\}",
	placeHolder:"tweets",
	loadMSG: "<em>There are no comments on this post, yet...</em>",
	});
	});
{% endhighlight %}

Replace `page.short` with the Liquid template tag that matches your YAML Front Matter, and note that you'll need to [URL encode][11] the `#` to `%23`. You could also add, say, a post's tags to Juitter's `searchObject`, if you wanted to include general discussion on Twitter around the topic of your post.

Of course, though the instructions above apply to [jekyll][1], this will work with pretty much any weblogging system, as long as you can generate a unique string for your hashtag (WordPress users, for example, could make use of the [`<?php the_ID(); ?>`][8] tag.)

It's no match for a full-fledged commenting system--for one thing, comments are limited to 140 characters, and potential commenters to Twitter users--but I thought it'd be a fun way to let visitors have their say.

Good idea? Bad idea? Fire up your Twitter client and let me know!

[1]:http://wiki.github.com/mojombo/jekyll
[2]:http://disqus.com/
[3]:http://www.intensedebate.com/
[4]:http://twitter.com
[5]:http://juitter.com/
[6]:http://www.ubervu.com
[7]:http://www.backtype.com/
[8]:http://codex.wordpress.org/Template_Tags/the_ID
[9]:http://jquery.com/
[10]:http://wiki.github.com/mojombo/jekyll/yaml-front-matter
[11]:http://en.wikipedia.org/wiki/URL_encoding#Percent-encoding_reserved_characters "It would be nice if Juitter mentioned this on their site!"