---
title: How to Fix the IE8 noscript Bug
layout: post
type: basic
short: ien
time: T08:00:00Z
loc: CH48,UK
loc_name: Wirral
description: Internet Explorer 8 won't let you style the noscript tag, here's how to fix it.
topics: 
 - ie8
 - noscript
---
IE8, which is mostly a huge improvement over its predecessors, introduces a new bug.

If you style the `noscript` tag with a background colour and a border, like so:

{% highlight css %}
noscript {
	background:#ffffe0;
	border:1px solid #ff0000;
	}
{% endhighlight %}

Then IE8 will, if JavaScript is **switched on**, display a funny little box with an off-white background and a red border. It won't render the contents of the `noscript` tag, just its background and border.

<img alt="A screenshot of this site showing the IE8 noscript bug in action" src="/u/2009/11/ie8.jpg" width="590" height="72" />

In other words, if you've followed best practice by warning users with JavaScript switched off that your site uses it, IE8 will punish you by mucking up the layout for users with JavaScript switched on, the very users who should never, ever see the `noscript` tag in action. Nice one. (For those of us using HTML5 to make websites, this is especially galling--no version of IE can render HTML5 without [a bit of JS][2], so a warning is [absolutely necessary][3].)

How to fix it? Stick your warning message in a `div` inside the `noscript`, and style that instead:

{% highlight css %}
noscript div {
	background:#ffffe0;
	border:1px solid #ff0000;
	}
{% endhighlight %}

You could also make the little box disappear by styling `noscript` with `display: inline`, and adding a `meta` tag to force IE8 into [compatability view][4]:

{% highlight html %}
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
{% endhighlight %}

But that would be silly.

[1]:http://remysharp.com/2009/01/07/html5-enabling-script/
[2]:http://ejohn.org/blog/html5-shiv/ "HTML5 Shiv"
[3]:/2009/11/05/html-5-and-ie-a-warning/ "My earlier post on warning IE users encountering an HTML5 website with JS switched off"
[4]:http://blogs.msdn.com/ie/archive/2008/08/27/introducing-compatibility-view.aspx "Also known as compatability mode"

*[JS]: JavaScript
*[HTML]: Hyper Text Markup Language
*[IE]: Internet Explorer