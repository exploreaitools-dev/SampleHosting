/**
 * services.js — Services page renderer.
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

  function renderServices() {
    var cards = SITE.services.items.map(function (item) {
      return '<div class="svc-card"><div class="svc-ico">' + item.icon + '</div><h3>' + item.title + '</h3><p>' + item.body + '</p><a href="contact.html" class="svc-lnk">Get a Quote →</a></div>';
    }).join('');
    set('svcGrid', cards);
  }

  function renderWhy() {
    var w = SITE.why;
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
    var steps = SITE.process.steps.map(function (s) {
      return '<div class="proc-step"><div class="proc-num">' + s.n + '</div><h4>' + s.title + '</h4><p>' + s.body + '</p></div>';
    }).join('');
    set('procSteps', steps);
  }

  function renderTestimonials() {
    var cards = SITE.testimonials.items.map(function (item) {
      return '<div class="testi-card"><div class="testi-stars">' + stars(5) + '</div><p class="testi-txt">' + item.quote + '</p><div class="testi-author"><div class="t-avatar">' + item.initials + '</div><div><div class="t-name">' + item.name + '</div><div class="t-role">' + item.role + '</div></div></div></div>';
    }).join('');
    set('testiGrid', cards);
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderServices();
    renderWhy();
    renderProcess();
    renderTestimonials();
  });
})();
