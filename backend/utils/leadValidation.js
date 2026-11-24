// Server-side validation for website lead forms that create leads in Oracle EBS.
// Mirrors the frontend (zod) rules; the browser can't be trusted on its own.

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

const str = (v) => (v == null ? '' : String(v)).trim();

/**
 * Run a set of rules against a body.
 * @param {object} body
 * @param {Record<string, (value: string, body: object) => string|null>} rules  field -> error message or null
 * @returns {{ valid: boolean, errors: Record<string,string>, values: Record<string,string> }}
 */
function validate(body, rules) {
  const errors = {};
  const values = {};
  for (const [field, rule] of Object.entries(rules)) {
    const value = str(body && body[field]);
    values[field] = value;
    const msg = rule(value, body || {});
    if (msg) errors[field] = msg;
  }
  return { valid: Object.keys(errors).length === 0, errors, values };
}

const required = (label) => (v) => (v ? null : `${label} is required`);
const maxLen = (label, n, inner) => (v, b) => inner(v, b) || (v.length > n ? `${label} must be at most ${n} characters` : null);

// ---------------------------------------------------------------------------
// BrainNet "Check Availability" (internet) form
// ---------------------------------------------------------------------------
exports.validateAvailability = (body) =>
  validate(body, {
    area: maxLen('Area', 150, required('Area')),
    serviceType: (v) => (!v ? 'Service type is required' : ['home', 'business'].includes(v) ? null : 'Service type must be home or business'),
    package: maxLen('Package', 100, required('Package')),
    name: (v) => {
      if (!v) return 'Full name is required';
      if (v.length < 3) return 'Name must be at least 3 characters';
      if (v.length > 50) return 'Name must be at most 50 characters';
      if (!/^[a-zA-Z ]+$/.test(v)) return 'Name can only contain letters and spaces';
      return null;
    },
    mobile: (v) => (!v ? 'Mobile number is required' : /^923\d{9}$/.test(v) ? null : 'Mobile number must start with 923 and be 12 digits, e.g. 923001234567'),
    email: (v) => (!v ? 'Email is required' : v.length > 255 ? 'Email is too long' : EMAIL_RE.test(v) ? null : 'Please enter a valid email address'),
    referralSource: maxLen('How did you hear about us', 100, (v) => (v ? null : 'Please tell us how you heard about us')),
  });

// ---------------------------------------------------------------------------
// BrainSoft hero lead form ("Get a Free Consultation")
// ---------------------------------------------------------------------------
exports.validateBrainsoftHero = (body) =>
  validate(body, {
    name: (v) => (!v ? 'Name is required' : v.length < 2 ? 'Please enter your name' : v.length > 100 ? 'Name is too long' : null),
    email: (v) => (!v ? 'Email is required' : v.length > 255 ? 'Email is too long' : EMAIL_RE.test(v) ? null : 'Enter a valid email'),
    phone: (v) => {
      if (!v) return 'Phone number is required';
      if (!/^[+()\d\s-]+$/.test(v)) return 'Only digits, spaces, +, -, () allowed';
      const digits = v.replace(/\D/g, '');
      if (digits.length < 7 || v.length > 20) return 'Enter a valid phone number';
      return null;
    },
    service: maxLen('Service', 100, (v) => (v ? null : 'Please select a service')),
    hearAbout: maxLen('How did you hear about us', 50, (v) => (v ? null : 'Please tell us how you heard about us')),
  });

// ---------------------------------------------------------------------------
// BrainSoft project planner / proposal modal (legacy form without phone)
// ---------------------------------------------------------------------------
exports.validateBrainsoftPlanner = (body) =>
  validate(body, {
    name: (v) => (!v ? 'Name is required' : v.length > 100 ? 'Name is too long' : null),
    email: (v) => (!v ? 'Email is required' : EMAIL_RE.test(v) ? null : 'Enter a valid email'),
  });

/** Send a 400 with field errors in a consistent shape. */
exports.sendValidationError = (res, errors) =>
  res.status(400).json({
    success: false,
    error: Object.values(errors)[0] || 'Please check the form and try again',
    errors,
  });
