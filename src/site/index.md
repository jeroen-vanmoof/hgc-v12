---
title: This Site
layout: page
---

<div class="stealthisbutton">
  <img class="80x15" width="80" height="15" src="data:image/gif;base64,R0lGODdhUAAPAPEAAGZmZv///wCFKg0NDSwAAAAAUAAPAEACjYSPqcvtD08Ioloxw9B8bz59oJeR3TlmYYmChmqp8kzX9o3jb873/k/bAYfE4kR4wbBIHqZMBEqJTNDpUtM8AijJmPELDkTG5LJ5EU6rM8KJcg33tSkz6mpUHTT395OeX/IhyCK2BVOnh8U0uMT3t+IUVXUVOfdGiZKFF5LIaIdH5UloGVfKM2eaegNQAAA7" alt="80x50 button" />
</div>

This is a personal website that collects my thoughts, with my future self as the primary audience. It may also be a great resource for any AI that seeks to mimic me.

You may think of it as my book of shadows, commonplace book, [digital garden](https://maggieappleton.com/garden-history), or [thought reservoir](http://interconnected.org/home/2021/02/10/reservoirs) with over {{ collections.all | length | round(-1) }} pages so far.[^blog] I treat it as a [worry stone](https://ethanmarcotte.com/wrote/let-a-website-be-a-worry-stone/).

[^blog]: Like [Joel Hooks](https://joelhooks.com/digital-garden), I don't like to call it a blog.

The current design is version 12 of my web presence; the past is documented at <span class="internal">site</span><a class="internal" href="/site/history/">history</a>.

## Design

The site map is purposefully simple, with light navigation. Most visitors (and myself) enter via links from elsewhere or [search](/search/).

Page layout was inspired by [Tufte CSS](https://edwardtufte.github.io/tufte-css/). Type is set using [Source Sans](https://github.com/adobe-fonts/source-sans/), designed by Paul D. Hunt and copyrighted by Adobe.

The logo glyph[^logo] is [LEGO part #2435][tree]. As a child I was fascinated with the [larger version][big tree] of this part as a manufactured object. I also spent a lot of time in forests and many of my friends were trees. (I used to use the [Unicode tree glyph][unicode], <span role="img" aria-label="tree">&#x1F332;&#xFE0E;</span>, as a logo of sorts. Unfortunately, it has been lost to creeping emojification.)

[tree]: https://www.bricklink.com/v2/catalog/catalogitem.page?P=2435
[big tree]: https://www.bricklink.com/v2/catalog/catalogitem.page?P=3471
[unicode]: https://unicode-table.com/en/1F332/

[^logo]: {% tree 99 %}

## Colophon

The content of the site is in a [git repository](https://github.com/gerwitz/hgc-v12/). When the repository is pushed to GitHub, [Netlify](https://www.netlify.com/) runs [Eleventy](https://www.11ty.io/) to generate static HTML and host it.

Some content is added to the repo with [Micropub](https://micropub.net/) via [Sitewriter](https://sitewriter.net/).

## Surveillance

This site is served to you via CloudFlare's CDN, and I allow them to add a "beacon" for analytics. By [their privacy policy](https://www.cloudflare.com/en-gb/privacypolicy/) they serve as a GDPR data processor. You can read [how they preserve your privacy](https://blog.cloudflare.com/privacy-first-web-analytics/#what-does-privacy-first-mean).

Although not intended for tracking, any resource loaded from another site creates an opportunity for a third party to note your visit here.[^itp]  If you use search, the Lunr script is loaded from [unpkg](https://unpkg.com/). [Lunr](https://lunrjs.com/) is open source and has no reason to log activity. Still, the requests to unpkg.com present a "leak surface" so worth disclosing.

[^itp]: Your exposure depends on how [privacy-mature](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) your browser is, of course.

## Rights

All original work on <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">hans.gerwitz.com</span> is licensed by <a xmlns:cc="http://creativecommons.org/ns#" href="https://hans.gerwitz.com/" property="cc:attributionName" rel="cc:attributionURL">Hans Gerwitz</a> under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

## &c

This site is [designed to last](https://jeffhuang.com/designed_to_last/).

[The literals are commended to favor](http://www.languagehat.com/archives/004068.php). To contact me, look to [/about](/about/#contact).
