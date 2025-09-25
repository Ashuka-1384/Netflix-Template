// تعاملات ساده و خوانا

// اعتبارسنجی فرم‌های ایمیل
document.querySelectorAll('.email-form').forEach(form => {
  const input = form.querySelector('input[type="email"]');
  const error = form.querySelector('.form-error');

  const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

  const showError = (msg) => {
    error.textContent = msg;
    input.setAttribute('aria-invalid', 'true');
  };
  const clearError = () => {
    error.textContent = '';
    input.removeAttribute('aria-invalid');
  };

  input.addEventListener('input', () => {
    if (input.value.length === 0) clearError();
    else if (isValidEmail(input.value)) clearError();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!isValidEmail(input.value)) {
      showError('لطفاً یک ایمیل معتبر وارد کنید.');
      input.focus();
      return;
    }
    clearError();
    // در اینجا می‌توانید درخواست واقعی ارسال کنید (fetch/axios)
    alert('ثبت شد! به زودی راهنمای شروع برای شما ایمیل می‌شود.');
    form.reset();
  });
});

// FAQ: باز بودن تنها یک مورد در آنِ واحد (اختیاری)
const faqDetails = document.querySelectorAll('.faq details');
faqDetails.forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      faqDetails.forEach(o => { if (o !== d) o.removeAttribute('open'); });
    }
  });
});

// سوییچ زبان (نمونه‌ی ظاهری)
document.querySelectorAll('.lang-select').forEach(select => {
  select.addEventListener('change', (e) => {
    const lang = e.target.value;
    // این بخش صرفاً نمایشی است. می‌توانید سیستم i18n اضافه کنید.
    if (lang === 'en') {
      alert('Language switching demo. Implement your i18n here.');
    }
  });
});