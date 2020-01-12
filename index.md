---
layout: default
---

Here you will see an image or something else 

## Latest posts



<div>
  {% for post in site.posts %}
    <div>
      <h3 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>
