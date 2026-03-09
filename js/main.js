/**
 * main.js — All site behaviour and DOM rendering.
 * Reads from SITE (data.js) and populates the page on DOMContentLoaded.
 */

(function () {
  'use strict';

  /* ════════════════════════════════════════════
     RENDER HELPERS
  ════════════════════════════════════════════ */

  function set(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function stars(n) {
    var s = '';
    for (var i = 0; i < n; i++) s += '<span class="star">★</span>';
    return s;
  }


  /* ════════════════════════════════════════════
     RENDER: NAV
  ════════════════════════════════════════════ */

  function renderNav() {
    var links = SITE.nav.map(function (item) {
      return '<li><a href="' + item.href + '">' + item.label + '</a></li>';
    }).join('');
    links += '<li><a href="' + SITE.navCta.href + '" class="nav-cta">' + SITE.navCta.label + '</a></li>';
    set('navLinks', links);

    var mobile = SITE.nav.map(function (item) {
      return '<a href="' + item.href + '" onclick="closeMenu()">' + item.label + '</a>';
    }).join('');
    mobile += '<a href="' + SITE.navCta.href + '" class="btn btn-gold" onclick="closeMenu()">' + SITE.navCta.label + ' →</a>';
    set('mobileLinks', mobile);

    var b = SITE.brand;
    set('logoName',  b.name + '<span>' + b.suffix.replace('Consulting','') + '</span>');
    set('logoSub',   b.sub);
    set('mobileLogo', b.name + '<span>' + b.suffix.replace('Consulting','') + '</span>');
    set('footBrandName', b.name + '<span>' + b.suffix.replace('Consulting','') + '</span> ' + b.suffix.split(' ').slice(1).join(' ') || b.suffix);
  }


  /* ════════════════════════════════════════════
     RENDER: HERO
  ════════════════════════════════════════════ */

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

    var svcItems = h.card.services.map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');
    set('heroCardLabel', h.card.label);
    set('heroCardServices', svcItems);
    set('heroMetricLabel',   h.card.metric.heading);
    set('heroMetricValue',   h.card.metric.value);
    set('heroMetricSub',     h.card.metric.label);
  }


  /* ════════════════════════════════════════════
     RENDER: ABOUT
  ════════════════════════════════════════════ */

  function renderAbout() {
    var a = SITE.about;
    set('aboutEyebrow', a.eyebrow);
    set('aboutHeading', a.heading);

    var body = a.body.map(function (p) { return '<p>' + p + '</p>'; }).join('');
    set('aboutBody', body);
    set('aboutCta', '<a href="' + a.cta.href + '" class="btn btn-gold">' + a.cta.label + '</a>');

    var feats = a.features.map(function (f) {
      return '<div class="feat">'
        + '<div class="feat-ico">' + f.icon + '</div>'
        + '<div class="feat-txt"><h4>' + f.title + '</h4><p>' + f.body + '</p></div>'
        + '</div>';
    }).join('');
    set('aboutFeatures', feats);
  }


  /* ════════════════════════════════════════════
     RENDER: SERVICES
  ════════════════════════════════════════════ */

  function renderServices() {
    var s = SITE.services;
    set('svcEyebrow', s.eyebrow);
    set('svcHeading', s.heading);
    set('svcSub', s.sub);

    var cards = s.items.map(function (item) {
      return '<div class="svc-card">'
        + '<div class="svc-ico">' + item.icon + '</div>'
        + '<h3>' + item.title + '</h3>'
        + '<p>' + item.body + '</p>'
        + '<span class="svc-lnk">Learn More →</span>'
        + '</div>';
    }).join('');
    set('svcGrid', cards);
    set('svcCta', '<a href="' + s.cta.href + '" class="btn btn-gold">' + s.cta.label + '</a>');
  }


  /* ════════════════════════════════════════════
     RENDER: WHY US
  ════════════════════════════════════════════ */

  function renderWhy() {
    var w = SITE.why;
    set('whyEyebrow', w.eyebrow);
    set('whyHeading', w.heading);

    var reasons = w.reasons.map(function (r) {
      return '<li class="why-item">'
        + '<div class="why-n">' + r.n + '</div>'
        + '<div class="why-txt"><h4>' + r.title + '</h4><p>' + r.body + '</p></div>'
        + '</li>';
    }).join('');
    set('whyList', reasons);

    var cards = w.stats.map(function (s) {
      var spanStyle = s.span === 2 ? ' style="grid-column:span 2"' : '';
      var nStyle    = s.small     ? ' style="font-size:28px"'       : '';
      return '<div class="why-card"' + spanStyle + '>'
        + '<div class="why-card-n"' + nStyle + '>' + s.n + '</div>'
        + '<div class="why-card-l">' + s.l + '</div>'
        + '</div>';
    }).join('');
    set('whyCards', cards);
  }


  /* ════════════════════════════════════════════
     RENDER: PROCESS
  ════════════════════════════════════════════ */

  function renderProcess() {
    var p = SITE.process;
    set('procEyebrow', p.eyebrow);
    set('procHeading', p.heading);
    set('procSub', p.sub);

    var steps = p.steps.map(function (s) {
      return '<div class="proc-step">'
        + '<div class="proc-num">' + s.n + '</div>'
        + '<h4>' + s.title + '</h4>'
        + '<p>' + s.body + '</p>'
        + '</div>';
    }).join('');
    set('procSteps', steps);
  }


  /* ════════════════════════════════════════════
     RENDER: TESTIMONIALS
  ════════════════════════════════════════════ */

  function renderTestimonials() {
    var t = SITE.testimonials;
    set('testiEyebrow', t.eyebrow);
    set('testiHeading', t.heading);
    set('testiSub', t.sub);

    var cards = t.items.map(function (item) {
      return '<div class="testi-card">'
        + '<div class="testi-stars">' + stars(5) + '</div>'
        + '<p class="testi-txt">' + item.quote + '</p>'
        + '<div class="testi-author">'
        + '<div class="t-avatar">' + item.initials + '</div>'
        + '<div><div class="t-name">' + item.name + '</div><div class="t-role">' + item.role + '</div></div>'
        + '</div>'
        + '</div>';
    }).join('');
    set('testiGrid', cards);
  }


  /* ════════════════════════════════════════════
     RENDER: BLOG
  ════════════════════════════════════════════ */

  function renderBlog() {
    var b = SITE.blog;
    set('blogEyebrow', b.eyebrow);
    set('blogHeading', b.heading);
    set('blogSub', b.sub);
    set('blogCta', '<a href="' + b.cta.href + '" class="btn btn-outline-dark">' + b.cta.label + '</a>');

    var cards = b.posts.map(function (post) {
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


  /* ════════════════════════════════════════════
     RENDER: CTA BANNER
  ════════════════════════════════════════════ */

  function renderCtaBanner() {
    var c = SITE.ctaBanner;
    set('ctaHeading', c.heading);
    set('ctaSub', c.sub);

    var btns = c.ctas.map(function (b) {
      return '<a href="' + b.href + '" class="btn ' + b.style + '">' + b.label + '</a>';
    }).join('');
    set('ctaBtns', btns);
  }


  /* ════════════════════════════════════════════
     RENDER: CONTACT
  ════════════════════════════════════════════ */

  function renderContact() {
    var c = SITE.contact;
    set('contactEyebrow',    c.eyebrow);
    set('contactHeading',    c.heading);
    set('contactSub',        c.sub);
    set('contactInfoHead',   c.infoHeading);
    set('contactInfoBody',   c.infoBody);

    var details = c.details.map(function (d) {
      return '<div class="cdet"><div class="cdet-ico">' + d.icon + '</div><span>' + d.text + '</span></div>';
    }).join('');
    set('contactDetails', details);

    var options = c.serviceOptions.map(function (o) {
      return '<option>' + o + '</option>';
    }).join('');
    set('serviceOptions', options);
  }


  /* ════════════════════════════════════════════
     RENDER: FOOTER
  ════════════════════════════════════════════ */

  function renderFooter() {
    var f   = SITE.footer;
    var b   = SITE.brand;

    set('footDesc', f.desc);
    set('footYear', b.year);

    var socials = f.socials.map(function (s) {
      return '<a href="#" class="soc" aria-label="' + s.label + '">' + s.symbol + '</a>';
    }).join('');
    set('footSocials', socials);

    var cols = f.cols.map(function (col) {
      var links = col.links.map(function (l) {
        return '<li><a href="' + l.href + '">' + l.label + '</a></li>';
      }).join('');
      var sub = '';
      if (col.subHeading) {
        var subLinks = col.subLinks.map(function (l) {
          return '<li><a href="' + l.href + '">' + l.label + '</a></li>';
        }).join('');
        sub = '<div style="margin-top:18px"><h5>' + col.subHeading + '</h5><ul class="foot-links">' + subLinks + '</ul></div>';
      }
      return '<div class="foot-col"><h5>' + col.heading + '</h5><ul class="foot-links">' + links + '</ul>' + sub + '</div>';
    }).join('');
    set('footCols', cols);

    var legal = f.legal.map(function (l) {
      return '<a href="' + l.href + '">' + l.label + '</a>';
    }).join('');
    set('footLegal', legal);
  }


  /* ════════════════════════════════════════════
     TICKER
  ════════════════════════════════════════════ */

  function fmtTime(tz) {
    return new Date().toLocaleTimeString('en-GB', {
      timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }

  function buildTicker() {
    var track = document.getElementById('tickerTrack');
    if (!track) return;
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
    SITE.ticker.forEach(function (z, i) {
      var t = fmtTime(z.tz);
      if (items[i])                       items[i].textContent = t;
      if (items[i + SITE.ticker.length])  items[i + SITE.ticker.length].textContent = t;
    });
  }


  /* ════════════════════════════════════════════
     NAV SCROLL BEHAVIOUR
  ════════════════════════════════════════════ */

  function initNav() {
    var nav    = document.getElementById('mainNav');
    var ticker = document.querySelector('.ticker-bar');
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY > 40;
      nav.classList.toggle('scrolled', scrolled);
      if (ticker) ticker.classList.toggle('hidden', scrolled);
    });
  }


  /* ════════════════════════════════════════════
     SCROLL REVEAL
  ════════════════════════════════════════════ */

  function initReveal() {
    var els = document.querySelectorAll('.svc-card, .why-card, .testi-card, .blog-card, .feat, .proc-step');
    els.forEach(function (el) {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(20px)';
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


  /* ════════════════════════════════════════════
     BOOT
  ════════════════════════════════════════════ */

  document.addEventListener('DOMContentLoaded', function () {
    renderNav();
    renderHero();
    renderAbout();
    renderServices();
    renderWhy();
    renderProcess();
    renderTestimonials();
    renderBlog();
    renderCtaBanner();
    renderContact();
    renderFooter();

    buildTicker();
    setInterval(updateTicker, 1000);

    initNav();
    initReveal();
  });

})(); // end IIFE


/* ════════════════════════════════════════════
   MOBILE MENU  (global — called from HTML onclick)
════════════════════════════════════════════ */

function openMenu() {
  document.getElementById('mmenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('mmenu').classList.remove('open');
  document.body.style.overflow = '';
}
