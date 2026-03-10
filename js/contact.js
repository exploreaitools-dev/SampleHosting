/**
 * contact.js — Contact page renderer.
 */
(function () {
  'use strict';

  function set(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function renderContact() {
    var c = SITE.contact;
    set('contactInfoHead', c.infoHeading);
    set('contactInfoBody', c.infoBody);

    var details = c.details.map(function (d) {
      return '<div class="cdet"><div class="cdet-ico">' + d.icon + '</div><span>' + d.text + '</span></div>';
    }).join('');
    set('contactDetails', details);

    var select = document.getElementById('serviceSelect');
    if (select) {
      c.serviceOptions.forEach(function (o) {
        var opt = document.createElement('option');
        opt.textContent = o;
        select.appendChild(opt);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderContact();
  });
})();
