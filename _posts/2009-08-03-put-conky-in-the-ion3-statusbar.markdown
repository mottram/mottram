---
title: Put Conky in the Ion3 Statusbar
layout: post
type: basic
short: ci
tags:
 - conky
 - ion3
---
Just in case anyone was wondering--you never know!--here's how to get [conky](http://conky.sourceforge.net/) to run in an [Ion3](http://modeemi.fi/~tuomov/ion/) statusbar.

Download `statusd_exec.lua` from [the Ion3 scripts page](http://modeemi.fi/~tuomov/repos/ion-scripts-3/#statusbar), and pop it in `~/.ion3/`.

Add the following to your `cfg_statusbar.lua` file, somewhere after the line that begins `mod_statusbar.launch_statusd{`:
{% highlight lua %}
-- Conky    
    exec={

    conky={
        program = 'conky',
    },
    
    },
{% endhighlight %}

Then put `%exec_conky` in your statusbar template, wherever you'd like to see conky's output.

Finally, to stop conky trying to do its usual window-ish business, you'll need to add a couple of lines to `.conkyrc`, anywhere above the `TEXT` line:
<pre lang="conky">out_to_console yes
out_to_x no</pre>
That's it.
