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
  var tickerRowIndex = 0;
  var tickerInterval = null;

  function buildTickerRow(row, withPause) {
    var track = document.getElementById('tickerTrack');
    var badge = document.querySelector('.ticker-badge');
    if (!track || !badge || !row) return;

    badge.textContent = row.label;

    // Build items twice for seamless loop
    var html = '';
    for (var pass = 0; pass < 2; pass++) {
      row.items.forEach(function (item) {
        html += '<div class="t-item"><span class="t-text">' + item + '</span></div>';
      });
    }

    // Set content, hold still initially
    track.style.animation = 'none';
    track.style.transform = 'translateX(0)';
    track.innerHTML = html;

    var totalItems = row.items.length;
    var duration = Math.max(18, totalItems * 4) + 's';

    if (withPause) {
      // Hold static for 1.8s so user can read from the start, then begin scrolling
      setTimeout(function () {
        track.style.animation = 'scroll-ticker ' + duration + ' linear infinite';
      }, 1800);
    } else {
      setTimeout(function () {
        track.style.animation = 'scroll-ticker ' + duration + ' linear infinite';
      }, 20);
    }
  }

  function buildTicker() {
    if (!SITE || !SITE.ticker || !SITE.ticker.length) return;
    buildTickerRow(SITE.ticker[0], false);

    // Rotate rows every 12 seconds
    tickerInterval = setInterval(function () {
      tickerRowIndex = (tickerRowIndex + 1) % SITE.ticker.length;
      var track = document.getElementById('tickerTrack');
      var badge = document.querySelector('.ticker-badge');
      if (track && badge) {
        // Fade out current row
        track.style.opacity = '0';
        badge.style.opacity = '0';
        track.style.transition = 'opacity 0.35s ease';
        badge.style.transition = 'opacity 0.35s ease';
        setTimeout(function () {
          buildTickerRow(SITE.ticker[tickerRowIndex], true);
          track.style.opacity = '1';
          badge.style.opacity = '1';
        }, 380);
      }
    }, 12000);
  }

  function updateTicker() { /* no-op — no live clock updates needed */ }

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
