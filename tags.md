---
layout: default
title: Tags
---
## Tags

<ul class="site-ul ul-tags">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    <li>
        <h3 class="title"><a href="{{ tag.url }}">{{ tag.short_name }}</a></h3>
        <p>{{ author.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>