/**
 * main.js — Home page content rendering.
 * Shell (nav/footer/ticker) is handled by shell.js.
 */

(function () {
  'use strict';

  function set(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function stars(n) {
    var s = '';
    for (var i = 0; i < n; i++) s += '<span class="star">★</span>';
    return s;
  }

  function renderHero() {
    var h = SITE.hero;
    set('heroEyebrow', h.eyebrow);
    set('heroHeadline', h.headline);
    set('heroSub', h.sub);
    var btns = h.ctas.map(function (c) {
      return '<a href="' + c.href + '" class="btn ' + c.style + '">' + c.label + '</a>';
    }).join('');
    set('heroBtns', btns);
    var stats = h.stats.map(function (s) {
      return '<div><div class="stat-n">' + s.n + '</div><div class="stat-l">' + s.l + '</div></div>';
    }).join('');
    set('heroStats', stats);
    var svcItems = h.card.services.map(function (s) { return '<li>' + s + '</li>'; }).join('');
    set('heroCardLabel', h.card.label);
    set('heroCardServices', svcItems);
    set('heroMetricLabel', h.card.metric.heading);
    set('heroMetricValue', h.card.metric.value);
    set('heroMetricSub',   h.card.metric.label);
  }

  function renderAbout() {
    var a = SITE.about;
    set('aboutEyebrow', a.eyebrow);
    set('aboutHeading', a.heading);
    var body = a.body.map(function (p) { return '<p>' + p + '</p>'; }).join('');
    set('aboutBody', body);
    set('aboutCta', '<a href="about.html" class="btn btn-gold">' + a.cta.label + '</a>');
    var feats = a.features.map(function (f) {
      return '<div class="feat"><div class="feat-ico">' + f.icon + '</div><div class="feat-txt"><h4>' + f.title + '</h4><p>' + f.body + '</p></div></div>';
    }).join('');
    set('aboutFeatures', feats);
  }

  function renderServices() {
    var s = SITE.services;
    set('svcEyebrow', s.eyebrow);
    set('svcHeading', s.heading);
    set('svcSub', s.sub);
    var cards = s.items.slice(0, 6).map(function (item) {
      return '<div class="svc-card"><div class="svc-ico">' + item.icon + '</div><h3>' + item.title + '</h3><p>' + item.body + '</p><span class="svc-lnk">Learn More →</span></div>';
    }).join('');
    set('svcGrid', cards);
    set('svcCta', '<a href="services.html" class="btn btn-gold">' + s.cta.label + '</a>');
  }

  function renderWhy() {
    var w = SITE.why;
    set('whyEyebrow', w.eyebrow);
    set('whyHeading', w.heading);
    var reasons = w.reasons.map(function (r) {
      return '<li class="why-item"><div class="why-n">' + r.n + '</div><div class="why-txt"><h4>' + r.title + '</h4><p>' + r.body + '</p></div></li>';
    }).join('');
    set('whyList', reasons);
    var cards = w.stats.map(function (s) {
      var spanStyle = s.span === 2 ? ' style="grid-column:span 2"' : '';
      var nStyle    = s.small ? ' style="font-size:28px"' : '';
      return '<div class="why-card"' + spanStyle + '><div class="why-card-n"' + nStyle + '>' + s.n + '</div><div class="why-card-l">' + s.l + '</div></div>';
    }).join('');
    set('whyCards', cards);
  }

  function renderProcess() {
    var p = SITE.process;
    set('procEyebrow', p.eyebrow);
    set('procHeading', p.heading);
    set('procSub', p.sub);
    var steps = p.steps.map(function (s) {
      return '<div class="proc-step"><div class="proc-num">' + s.n + '</div><h4>' + s.title + '</h4><p>' + s.body + '</p></div>';
    }).join('');
    set('procSteps', steps);
  }

  function renderTestimonials() {
    var t = SITE.testimonials;
    set('testiEyebrow', t.eyebrow);
    set('testiHeading', t.heading);
    set('testiSub', t.sub);
    var cards = t.items.map(function (item) {
      return '<div class="testi-card"><div class="testi-stars">' + stars(5) + '</div><p class="testi-txt">' + item.quote + '</p><div class="testi-author"><div class="t-avatar">' + item.initials + '</div><div><div class="t-name">' + item.name + '</div><div class="t-role">' + item.role + '</div></div></div></div>';
    }).join('');
    set('testiGrid', cards);
  }

  function renderBlog() {
    var b = SITE.blog;
    set('blogEyebrow', b.eyebrow);
    set('blogHeading', b.heading);
    set('blogSub', b.sub);
    set('blogCta', '<a href="blog.html" class="btn btn-outline-dark">' + b.cta.label + '</a>');
    var cards = b.posts.slice(0, 3).map(function (post) {
      var bgStyle = post.bg ? ' style="' + post.bg + '"' : '';
      return '<div class="blog-card"><div class="blog-thumb"' + bgStyle + '><div class="blog-patt"></div><span class="blog-tag">' + post.tag + '</span></div><div class="blog-body"><div class="blog-meta"><span>📅 ' + post.date + '</span><span>· ' + post.read + '</span></div><h3>' + post.title + '</h3><p>' + post.excerpt + '</p><span class="blog-more">Read More →</span></div></div>';
    }).join('');
    set('blogGrid', cards);
  }

  function renderCtaBanner() {
    var c = SITE.ctaBanner;
    set('ctaHeading', c.heading);
    set('ctaSub', c.sub);
    var btns = c.ctas.map(function (b) {
      return '<a href="' + b.href + '" class="btn ' + b.style + '">' + b.label + '</a>';
    }).join('');
    set('ctaBtns', btns);
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderHero();
    renderAbout();
    renderServices();
    renderWhy();
    renderProcess();
    renderTestimonials();
    renderBlog();
    renderCtaBanner();
  });

})();
