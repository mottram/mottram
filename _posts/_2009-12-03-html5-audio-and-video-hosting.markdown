---
title: HTML5-friendly Audio and Video Conversion &amp; Hosting
layout: post
type: basic
short: va
time: 
loc: CH48,UK
loc_name: Wirral
description: It would be nice if someone would invent an HTML5-friendly hosting service for audio and video.
topics: 
 - html5
 - hosting
---
HTML5's `<audio>` and `<video>` tags show a lot of promise, but at present both are a little bit fiddly to use.
	
When it comes to `<audio>`, you have to provide an `.ogg` file for Firefox 3.5 and above to play natively, an `.mp3` for Safari and Chrome/Chromium to play natively, and a Flash-based MP3 player for all other browsers (and, if you're feeling completist, a `.wav` file for Opera).
	
The `<video>` tag requires even more faffing about, and again needs multiple files--`.mp4` and `.ogv` for native playback, plus a Flash player--if you want your video to work in the majority of browsers.
	
Implementing `<audio>` and `<video>` isn't hard--for the former, you just have to serve the files in the correct order, for the latter, [Kroc Camen][1] has done all the hard work, as detailed in his excellent [Video for Everybody!][2] tutorial.
	
The tricky, time-consuming bit, for a weblogger with limited bandwidth and server space, who wants to include the occasional song or snippet of video at least, is the file conversion and hosting.

The [Internet Archive]() will handily [convert uploaded video to Ogg Theora and H.264](http://internetarchive.wordpress.com/2008/11/25/rederiving-our-movies-to-ogg-theora-and-more/), and, since they allow embedding via more traditional methods, I doubt they'd mind folk serving video files from their servers. The only free, unlimited-bandwidth hosting platform I could find that explicitly accepts both Ogg and MP3 files, and allows hotlinking, is [MySpaceFileHosting](http://myspacefilehosting.com/). 
	
	


[1]:http://camendesign.com/
[]:
[3]:http://bandcamp.com/
[4]:http://soundcloud.com/