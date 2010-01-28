---
title: Nodebox Doodle
layout: post
type: video
video_link: http://www.youtube.com/watch/v/L5Q3G9GRuOo
description: A little animation experiment.
short: n
tags:
 - nodebox
 - python
---
A little animation experiment.

It's _much_ higher quality if you run it in [Nodebox][1]. Here's the code:
{% highlight python %}
size(400, 400)
speed(200)
def setup():
    global frame
    frame = 2
def draw():
    fill(0.7, 0.7, 0.7)
    rect(0, 0, WIDTH, HEIGHT)
    stroke(1, 1, 1)
    strokewidth(random(1, 4))
    transform(CORNER)
    translate(random(0, 10), random(0, 2000))
    nofill()
    oval(-20, -1000, 0, 0)
    for i in range(random(4, 12)):
        from math import sin, radians
        ease = sin(radians(200)) * 100
        rotate(FRAME+i*random(20, 120))
        rect (-10, 0, 120, 1000, roundness=random(-10, -100))
        translate(-220, 200)
        rect (random(-20), 10, 0, 0, roundness=random(-10, -100))
        rotate(FRAME+i*random(10, 100))
        rect (-30, -30, 200, 20, roundness=random(-10, -100))
        rotate(FRAME+i+random(10, 100))
        rect (-300, -10, 200, 20, roundness=random(-10, -100))
{% endhighlight %}

[1]:http://nodebox.net