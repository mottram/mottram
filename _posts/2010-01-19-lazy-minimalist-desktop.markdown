---
title: Lazy Minimalist Desktop
layout: post
type: basic
time: T10:30:00Z
description: Want to unclutter your desktop, but can’t be arsed?
tags: 
 - osx
 - minimalism
---

Want to unclutter your desktop, but can’t be arsed?

1. `defaults write com.apple.finder CreateDesktop -bool false`
2. `killall Finder`

Voila: no files visible *on* your desktop, but still available *in* your `~/Desktop`.