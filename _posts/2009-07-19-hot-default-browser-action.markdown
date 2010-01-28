---
title: Hot Default Browser Action
layout: post
type: basic
description: How to set the default web browser on Ubuntu.
tags:
 - ubuntu
---
Much as I enjoy running Xubuntu on my Eee PC 701, it can sometimes take me bloody _ages_ to work out how to do something simple. Just so I don't forget, here's one of many ways  to set a default web browser:
{% highlight bash %}sudo update-alternatives --config x-www-browser{% endhighlight %}
The fact that I needed to do this in order to open URLs in Firefox with [urlview](http://linuxcommand.org/man_pages/urlview1.html) from inside [mutt](http://www.mutt.org/) is worrying--I think I might be going native.