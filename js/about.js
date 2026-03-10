/**
 * about.js — About page renderer.
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

  function renderFeatures() {
    var feats = SITE.about.features.map(function (f) {
      return '<div class="feat reveal"><div class="feat-ico">' + f.icon + '</div><div class="feat-txt"><h4>' + f.title + '</h4><p>' + f.body + '</p></div></div>';
    }).join('');
    set('aboutFeatures', feats);
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
    renderFeatures();
    renderProcess();
    renderTestimonials();
  });
})();
