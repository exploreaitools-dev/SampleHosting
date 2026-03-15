/**
 * contact.js — Contact page renderer + form validation.
 */
(function () {
  'use strict';

  /* ── Helpers ── */
  function el(id)          { return document.getElementById(id); }
  function val(id)         { var e = el(id); return e ? e.value.trim() : ''; }
  function set(id, html)   { var e = el(id); if (e) e.innerHTML = html; }

  function showErr(errId, msg) {
    var e = el(errId);
    if (!e) return;
    e.textContent = msg;
    e.classList.add('visible');
  }
  function clearErr(errId) {
    var e = el(errId);
    if (!e) return;
    e.textContent = '';
    e.classList.remove('visible');
  }
  function markInvalid(input) {
    if (!input) return;
    input.classList.add('field-invalid');
    input.classList.remove('field-valid');
  }
  function markValid(input) {
    if (!input) return;
    input.classList.remove('field-invalid');
    input.classList.add('field-valid');
  }

  /* ── Regex patterns ── */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /* ── Render contact info from data.js ── */
  function renderContact() {
    var c = SITE.contact;
    set('contactInfoHead', c.infoHeading);
    set('contactInfoBody', c.infoBody);

    var details = c.details.map(function (d) {
      return '<div class="cdet"><div class="cdet-ico">' + d.icon + '</div><span>' + d.text + '</span></div>';
    }).join('');
    set('contactDetails', details);

    var select = el('serviceSelect');
    if (select) {
      c.serviceOptions.forEach(function (o) {
        var opt = document.createElement('option');
        opt.textContent = o;
        opt.value = o;
        select.appendChild(opt);
      });
    }
  }

  /* ── Full Name auto-populate ── */
  function initFullNameAutoFill() {
    var firstInput = el('fieldFirstName');
    var lastInput  = el('fieldLastName');
    var fullInput  = el('fieldFullName');
    if (!firstInput || !lastInput || !fullInput) return;

    function update() {
      var first = firstInput.value.trim();
      var last  = lastInput.value.trim();
      fullInput.value = [first, last].filter(Boolean).join(' ');
    }

    firstInput.addEventListener('input', update);
    lastInput.addEventListener('input',  update);
  }

  /* ── Individual field validators ── */
  function validateFirstName() {
    var input = el('fieldFirstName');
    var v = val('fieldFirstName');
    if (!v)          { showErr('errFirstName', 'First name is required.');           markInvalid(input); return false; }
    if (v.length < 2){ showErr('errFirstName', 'Please enter a valid first name.');  markInvalid(input); return false; }
    clearErr('errFirstName'); markValid(input); return true;
  }
  function validateLastName() {
    var input = el('fieldLastName');
    var v = val('fieldLastName');
    if (!v)          { showErr('errLastName', 'Last name is required.');            markInvalid(input); return false; }
    if (v.length < 2){ showErr('errLastName', 'Please enter a valid last name.');   markInvalid(input); return false; }
    clearErr('errLastName'); markValid(input); return true;
  }
  function validateEmail() {
    var input = el('fieldEmail');
    var v = val('fieldEmail');
    if (!v)                    { showErr('errEmail', 'Email address is required.');                                     markInvalid(input); return false; }
    if (!EMAIL_RE.test(v))     { showErr('errEmail', 'Please enter a valid email (e.g. name@company.com).');            markInvalid(input); return false; }
    clearErr('errEmail'); markValid(input); return true;
  }
  function validatePhone() {
    var input  = el('fieldPhone');
    var v      = val('fieldPhone');
    var digits = v.replace(/\D/g, '');
    if (!v)                              { showErr('errPhone', 'Phone number is required.');                         markInvalid(input); return false; }
    if (digits.length < 7 || digits.length > 15) { showErr('errPhone', 'Please enter a valid phone number (7–15 digits).'); markInvalid(input); return false; }
    clearErr('errPhone'); markValid(input); return true;
  }
  function validateMessage() {
    var input = el('fieldMessage');
    var v = val('fieldMessage');
    if (!v)           { showErr('errMessage', 'A message is required.');                                          markInvalid(input); return false; }
    if (v.length < 10){ showErr('errMessage', 'Please provide more detail (at least 10 characters).');            markInvalid(input); return false; }
    clearErr('errMessage'); markValid(input); return true;
  }

  /* ── Full form validation — runs all so every error shows at once ── */
  function validateAll() {
    var r1 = validateFirstName();
    var r2 = validateLastName();
    var r3 = validateEmail();
    var r4 = validatePhone();
    var r5 = validateMessage();
    return r1 && r2 && r3 && r4 && r5;
  }

  /* ── Live validation on blur / correction ── */
  function initLiveValidation() {
    var map = [
      { id: 'fieldFirstName', fn: validateFirstName },
      { id: 'fieldLastName',  fn: validateLastName  },
      { id: 'fieldEmail',     fn: validateEmail     },
      { id: 'fieldPhone',     fn: validatePhone     },
      { id: 'fieldMessage',   fn: validateMessage   },
    ];
    map.forEach(function (item) {
      var input = el(item.id);
      if (!input) return;
      input.addEventListener('blur', item.fn);
      input.addEventListener('input', function () {
        if (input.classList.contains('field-invalid')) item.fn();
      });
    });
  }

  /* ── Form submit ── */
  function initFormSubmit() {
    var form = el('contactForm');
    var btn  = el('submitBtn');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateAll()) {
        var first = form.querySelector('.field-invalid');
        if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      btn.disabled    = true;
      btn.textContent = 'Sending…';

      setTimeout(function () {
        btn.disabled    = false;
        btn.innerHTML   = 'Send Message &#8594;';
        showSuccess();
      }, 1500);
    });
  }

  function showSuccess() {
    var formEl    = el('contactForm');
    var successEl = el('formSuccess');
    if (formEl)    formEl.style.display    = 'none';
    if (successEl) successEl.style.display = 'flex';
  }

  window.resetContactForm = function () {
    var formEl    = el('contactForm');
    var successEl = el('formSuccess');
    if (!formEl) return;
    formEl.reset();
    formEl.style.display = '';
    if (successEl) successEl.style.display = 'none';
    formEl.querySelectorAll('.field-invalid, .field-valid').forEach(function (inp) {
      inp.classList.remove('field-invalid', 'field-valid');
    });
    formEl.querySelectorAll('.field-error.visible').forEach(function (e) {
      e.textContent = ''; e.classList.remove('visible');
    });
  };

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', function () {
    renderContact();
    initFullNameAutoFill();
    initLiveValidation();
    initFormSubmit();
  });

})();
