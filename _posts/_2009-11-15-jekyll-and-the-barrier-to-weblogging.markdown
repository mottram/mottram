---
title: jekyll Removes the Blogging Barrier
layout: post
type: basic
short: jb
loc: CH48,UK
loc_name: Wirral
time: T18:20:00Z
description: With a static site generator like jekyll, there's nothing between you and your weblog.
topics:
 - jekyll
 - weblogging
---
In nigh on a decade of keeping a weblog, I've tried and used a lot of weblogging software.

My first foray was a collection of <abbr>HTML</abbr> files, hand-edited in (I think) BBEdit, and uploaded to a tilde domain with (I think) Transmit<sup id="r1"><a href="#f1">1</a></sup>. Next came Blogger, followed by Movable Type, which was in turn replaced by Wordpress.

Along the way, I've also maintained and built sites powered by blosxom, Chyrp, Expression Engine, Typepad and Vox; and made a hamfisted attempt to write my own weblog engine in django.

All these options have their merits, and their problems, and all--with the notable exception of blosxom--raise a barrier between the weblogger and her weblog.

With Blogger, way back when I was using it, the barrier was the way it constantly bloody broke, swallowing posts whole before they were published. With Wordpress, the barrier was maintaining the software--every time I logged in, I had to upgrade a plugin, or prune a few spam comments; little things, but big enough that, by the time they were done, the impetus to write a post had evaporated. Moveable Type? [The horror](http://submitresponse.co.uk/weblog/2005/09/06/yes-i-know-it-looks-fucked/)... [the horror](http://submitresponse.co.uk/weblog/2004/08/29/broken/). 

Enter jekyll.

Now, if I want to write a post on my weblog, all I have to do is write it, save it and issue a command<sup id="r2"><a href="#f2">2</a></sup>. There's nothing standing between the thought 'Ooh, I should post about that!' crossing my mind and the post appearing on this site, save for my shoddy typing skills. There are other benefits, too--see my post on static website generators at Sur.ly for more.

Admittedly, jekyll isn't perfect--proper tagging would be nice, for one thing--but it is **easy**, and, as far as I'm concerned, that's the most important feature in a weblogging application.

<aside><ol><li id="f1">See <a href="http://submitresponse.co.uk/sr/">here</a>, I swear it looked cool at the time! <a href="#r1">&#8617;</a></li><li id="f2">I have <code>cd ~/mottram &amp;&amp; git add . &amp;&amp; git commit -a -m "Added a post" &amp;&amp; git push &amp;&amp; jekyll &amp;&amp; rsync -avz _site jack@mottr.am:web/public</code> aliased to <code>wblg</code>. The <code>cd</code> is there because I'm too dim to notice which directory I'm in; the <code>git add .</code> makes sure both my computers always have the same stuff. I'm probably doing it wrong.<a href="#r2">&#8617;</a></li></ol></aside>
