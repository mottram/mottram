---
title: Why the HTML5 'Video' Element Is Effectively Unusable, Even in the Browsers Which Support It
layout: post
category: link
time: T20:50:44Z
linkto: http://daringfireball.net/2009/12/html5_video_unusable
description: John Gruber on the failure of the modern browsers to respect the autobuffer attribute of HTML5's video tag.
tags:
 - html5
 - video
---

John Gruber on the failure of <del>the</del> <ins>some of the</ins> good browsers<sup id="r1"><a href="#f1">1</a></sup> to respect the `autobuffer` attribute of HTML5's `<video>` tag. (The same bug/feature applies to the `<audio>` tag, too, which is why I haven't yet applied the markup on my [HTML5 audio test page][1] to the ocassional audio posts here.)
	
**Update**: Christopher Blizzard of Mozilla shows that [Firefox respects the spec][2], and a comment on his post touches on the Boolean confusion I noted on my [test page][1]--for `<video>` and `<audio>`, attributes like `autobuffer` and `controls` are true if present, and false if absent. But you can also write markup like `<audio autobuffer="autobuffer">` (which is the XHTML5 way, as opposed to the HTML5 way, I suppose) or any old gubbins like `<audio autobuffer="raspberryberet">` which some browsers will, _on the basis of the attribute's presence alone_, take to mean that you want your media should autobuffer away.
	
<aside id="f1"><ol><li>By which I mean 'the latest versions of Chrome, Safari and Firefox', a group that need a catchy catch-all term, as do the <a href="http://www.brucelawson.co.uk/2009/a-sexy-new-name-for-the-open-web-stack/" title="A Sexy New Name for the Open Web Stack?">various technologies they support</a>, to varying degrees.<a href="#r1">&#8617;</a></li></ol></aside>
	
*[HTML]:
*[XHTML]:

[1]:/audio-test/ "HTML5 audio test page"
[2]:http://hacks.mozilla.org/2009/12/autobuffering-video-in-firefox/ "autobuffering video in Firefox"