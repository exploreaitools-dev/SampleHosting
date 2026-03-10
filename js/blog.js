/**
 * blog.js — Blog page renderer with category filter.
 */
(function () {
  'use strict';

  var activeTag = 'All';

  function set(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function renderFilterTags() {
    var tags = ['All'];
    SITE.blog.posts.forEach(function (p) {
      if (tags.indexOf(p.tag) === -1) tags.push(p.tag);
    });
    var html = tags.map(function (tag) {
      return '<button class="filter-tag' + (tag === activeTag ? ' active' : '') + '" data-tag="' + tag + '">' + tag + '</button>';
    }).join('');
    set('filterTags', html);

    document.getElementById('filterTags').addEventListener('click', function (e) {
      if (e.target.classList.contains('filter-tag')) {
        activeTag = e.target.dataset.tag;
        document.querySelectorAll('.filter-tag').forEach(function (b) {
          b.classList.toggle('active', b.dataset.tag === activeTag);
        });
        renderBlogGrid();
      }
    });
  }

  function renderBlogGrid() {
    var posts = activeTag === 'All'
      ? SITE.blog.posts
      : SITE.blog.posts.filter(function (p) { return p.tag === activeTag; });

    if (posts.length === 0) {
      set('blogGrid', '<div class="blog-empty">No articles found in this category.</div>');
      return;
    }

    var cards = posts.map(function (post) {
      var bgStyle = post.bg ? ' style="' + post.bg + '"' : '';
      return '<div class="blog-card">'
        + '<div class="blog-thumb"' + bgStyle + '><div class="blog-patt"></div><span class="blog-tag">' + post.tag + '</span></div>'
        + '<div class="blog-body">'
        + '<div class="blog-meta"><span>📅 ' + post.date + '</span><span>· ' + post.read + '</span></div>'
        + '<h3>' + post.title + '</h3>'
        + '<p>' + post.excerpt + '</p>'
        + '<span class="blog-more">Read More →</span>'
        + '</div>'
        + '</div>';
    }).join('');
    set('blogGrid', cards);
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderFilterTags();
    renderBlogGrid();
  });
})();
