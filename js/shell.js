/**
 * shell.js — Behaviour only. Nav/footer are hardcoded in HTML.
 * Handles: ticker, nav scroll, mobile menu, scroll reveal, active nav.
 */
(function () {
  'use strict';

  /* ── Active nav link ── */
  function setActiveNav() {
    var file = window.location.pathname.split('/').pop() || 'index.html';
    var map = {
      'index.html':    'navHome',
      'about.html':    'navAbout',
      'services.html': 'navServices',
      'blog.html':     'navBlog',
      'contact.html':  'navContact'
    };
    var id = map[file];
    if (id) {
      var el = document.getElementById(id);
      if (el) el.classList.add('nav-active');
    }
  }

  /* ── Ticker ── */
  function fmtTime(tz) {
    return new Date().toLocaleTimeString('en-GB', {
      timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }

  function buildTicker() {
    var track = document.getElementById('tickerTrack');
    if (!track || !SITE) return;
    var html = '';
    for (var pass = 0; pass < 2; pass++) {
      SITE.ticker.forEach(function (z) {
        html += '<div class="t-item">'
          + '<span class="flag">' + z.flag + '</span>'
          + '<span class="cname">' + z.name + '</span>'
          + '<span class="ctime">' + fmtTime(z.tz) + '</span>'
          + '</div>';
      });
    }
    track.innerHTML = html;
  }

  function updateTicker() {
    var items = document.querySelectorAll('.t-item .ctime');
    if (!SITE) return;
    SITE.ticker.forEach(function (z, i) {
      var t = fmtTime(z.tz);
      if (items[i]) items[i].textContent = t;
      if (items[i + SITE.ticker.length]) items[i + SITE.ticker.length].textContent = t;
    });
  }

  /* ── Nav scroll ── */
  function initNavScroll() {
    var nav    = document.getElementById('mainNav');
    var ticker = document.getElementById('tickerBar');
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY > 40;
      if (nav)    nav.classList.toggle('scrolled', scrolled);
      if (ticker) ticker.classList.toggle('hidden', scrolled);
    });
  }

  /* ── Scroll reveal ── */
  function initReveal() {
    var els = document.querySelectorAll(
      '.svc-card,.why-card,.testi-card,.blog-card,.feat,.proc-step,.reveal,.value-card,.faq-item,.office-card,.stat-block'
    );
    els.forEach(function (el) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(20px)';
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity   = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    buildTicker();
    setInterval(updateTicker, 1000);
    initNavScroll();
    setTimeout(initReveal, 80);
  });

  /* ── Mobile menu (global) ── */
  window.openMenu = function () {
    document.getElementById('mmenu').classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeMenu = function () {
    document.getElementById('mmenu').classList.remove('open');
    document.body.style.overflow = '';
  };

})();
