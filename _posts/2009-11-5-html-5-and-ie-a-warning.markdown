---
title: HTML 5 &amp; Internet Explorer - Fair Warning
layout: post
type: basic
time: T14:32:51Z
short: ie5
loc: CH48,UK
locname: Wirral
description: Using HTML 5? You should probably tell Internet Explorer users why your site looks rubbish if they have JavaScript turned off.
tags:
 - HTML5
 - IE
---
Most articles and weblog posts on using HTML 5 recommended [Remy Sharp's handy script](http://remysharp.com/2009/01/07/html5-enabling-script/) to make Internet Explorer recognise HTML 5's new tags. But few offer a solution to the problem of folk browsing an HTML5 site in IE with JavaScript turned off.

Rather than treat JS-averse IE visitors to a hideous mess of a site, I've decided to treat them to a hideous mess of a site plus a polite suggestion to switch JavaScript on:
{% highlight html %}
<!--[if IE]>
<noscript>
<div>
<p>Are you using Internet Explorer with JavaScript turned off?</p>
<p>This site probably looks a bit of a mess.</p>
<p>If you can, turn JavaScript on, and reload the page - that
should fix the problem.</p>
<p>If you can't do that, my apologies. For fun,
I made the site using new code that Explorer doesn't
understand just yet.</p>
<p>Comments? Complaints? Email me at j@ck.mottr.am</p>
</div>
</noscript>
<![endif]-->
{% endhighlight %}
Since I'm already serving all versions of IE a special stylesheet, I've added a bit of CSS to make `<noscript>` look all warningy:
{% highlight css %}
noscript div {
	margin:60px;
	padding:10px;
	color:#ff0000;
	background:#ffffe0;
	border:1px solid #ff0000;
}
{% endhighlight %}
I wonder if it's worth adding instructions on _how_ to switch JavaScript on?

**Update**: The apparently extraneous `div` inside the `noscript` is included to [fix a bug in IE8](/2009/11/30/ie8-noscript-bug-fix/).

*[JS]: JavaScript
*[HTML]: Hyper Text Markup Language
*[IE]: Internet Explorer
*[CSS]: Cascading Style Sheets