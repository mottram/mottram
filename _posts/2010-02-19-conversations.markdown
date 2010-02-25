---
title: Conversations in HTML5
layout: post
category: link
time: T14:42:27Z
linkto: http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#conversations
description: HTML5 lacks a sensible way of marking up conversations
tags:
 - html5 
---

So, I needed to know how to mark up a dialogue in HTML5. Turns out each side of a conversation should be wrapped in plain old `p` tags, and the names of the speakers, stage directions, &amp;c. should live inside `span`, `b` or `i` tags. Hmmmn. You could be forgiven for thinking that the `cite` tag would be a more meaningful way to mark up a speaker's name, but this is considered poor form. Even though it makes sense, and has been common practice for years, possibly due to the fact that the HTML 4 spec [recommends](http://www.w3.org/TR/html401/struct/text.html#h-9.2) this very use of `cite` (by mistake, apparently). There was a `dialog` element in HTML5 for a while, which could've come in handy for marking up dialogue. Some people didn't like this new element one bit. Some other people liked it, and wanted to invent even more elements to go inside it. This argument was settled by throwing the `dialog` element away, and never speaking of it again. The moral of this tale?  Buggered if I know.
