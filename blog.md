---
layout: default
title: Blog
---

<a href="/feed.xml">RSS</a>

<ul class="site-ul">
  {% for post in site.posts %}
    <li>
      <h3 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>