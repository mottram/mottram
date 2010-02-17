---
title: Automatically switch to normal mode in vim
layout: post
category: link
time: T18:39:39Z
linkto: http://vim.wikia.com/wiki/To_switch_back_to_normal_mode_automatically_after_inaction
description: Force yourself to use vim properly by automatically entering normal mode after a few seconds of inactivity.
tags:
 - vim 
---

When learning vim, it's really hard to resist the temptation to stay in insert mode and use it like a normal text editor. Add the following to your `.vimrc`, and vim will enter normal mode after a few seconds of inactivity, effectively forcing you to use it properly: `au CursorHoldI * stopinsert`.
