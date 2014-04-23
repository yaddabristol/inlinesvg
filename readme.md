
Inline SVG
==========

If inline SVGs are supported, img tags such as `<img src="foo.svg">` are replaced with the inline contents of foo.svg.

If inline SVGs are *NOT* supported but SVGs *ARE*, then the img tag will be left as it is.

If neither SVGs *NOR* inline SVGs are supported, a PNG will be loaded in its place.

[Read more in this blog post](http://deviouschimp.co.uk/site/blog/replacing-imgs-with-svgs)


Restrictions
------------
The SVGs and PNG equivalents must have the same path and name (except for the file extension).

Due to the [same-origin policy](http://en.wikipedia.org/wiki/Same-origin_policy) you may have problems using this with local 


Usage
-----
See `example.html` for usage. There's not a lot to it.


License
-------
[MIT License](http://opensource.org/licenses/MIT)

Includes SVG and InlineSVG checks from [Modernizr](http://modernizr.com/).