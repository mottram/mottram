---
title: Pinboard in Conkeror
layout: post
type: basic
short: pc
description: 
topics:
 - pinboard
 - conkeror
---
If you use the [Pinboard](http://pinboard.in "A del.icio.us clone, without all the gubbins that's made del.icio.us crap") bookmarking service and the [Conkeror](http://conkeror.org "Effectively Firefox with no chrome, controlled entirely from the keyboard") web browser (not to be confused with the [Konqueror](http://www.konqueror.org/ "Some sort of file and web browser combo for KDE") web browser) this 'webjump' might come in handy:

{% highlight javascript %}
define_webjump("pinboard", function (url) {
    if (url) {
        return "http://pinboard.in/add?next=same&url=" + url;
    } else {
        return "javascript:document.location.href='http://pinboard.in/add?next=same&url='+encodeURIComponent(document.location.href)+'&description='+encodeURIComponent(document.getSelection())+'&title='+encodeURIComponent(document.title);";
   }
}, $argument = "optional");
{% endhighlight %}

To use it, add the above to your `.conkerorrc` file, restart Conkeror, then, while browsing, hit `g` and start typing `pinboard`. At this point, you can feed it an URL and hit return--in which case the pinboard form will appear for you to fill in--or just hit return, in which case the pinboard form will appear already filled with the URL and title of the  page you were browsing, as well as any highlighted text.

<a href='/u/2009/08/conkerorrc.txt'>Download webjump (4KB .txt file)</a>