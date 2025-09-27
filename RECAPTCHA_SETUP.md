# reCAPTCHA Setup Instructions

## Getting Your reCAPTCHA Site Key

1. **Visit Google reCAPTCHA Admin Console**

   - Go to: https://www.google.com/recaptcha/admin

2. **Create a New Site**

   - Click "Create" button
   - Fill in the form:
     - **Label**: FitLink Contact Form
     - **reCAPTCHA type**: Select "reCAPTCHA v2" → "I'm not a robot" Checkbox
     - **Domains**: Add your domain(s):
       - `localhost` (for development)
       - `yourdomain.com` (for production)
     - Accept terms and click "Submit"

3. **Get Your Keys**
   - Copy the **Site Key** (public key)
   - Copy the **Secret Key** (private key - keep this secure!)

## Updating the Application

### 1. Update ContactForm Component

Replace the test site key in `src/components/ContactForm.tsx`:

```typescript
<ReCaptcha
  siteKey="YOUR_ACTUAL_SITE_KEY_HERE" // Replace with your site key
  onVerify={(token) => setRecaptchaToken(token)}
  onExpire={() => setRecaptchaToken(null)}
  onError={() => setRecaptchaToken(null)}
/>
```

### 2. Backend Implementation

For production, you'll need to verify the reCAPTCHA token on your backend:

```javascript
// Example Node.js/Express implementation
const axios = require("axios");

async function verifyRecaptcha(token, secretKey) {
  const response = await axios.post(
    "https://www.google.com/recaptcha/api/siteverify",
    null,
    {
      params: {
        secret: secretKey,
        response: token,
      },
    }
  );

  return response.data.success;
}

// In your contact form handler
app.post("/api/contact", async (req, res) => {
  const { recaptchaToken, ...formData } = req.body;

  const isValid = await verifyRecaptcha(
    recaptchaToken,
    process.env.RECAPTCHA_SECRET_KEY
  );

  if (!isValid) {
    return res
      .status(400)
      .json({ success: false, message: "reCAPTCHA verification failed" });
  }

  // Process the contact form...
});
```

### 3. Environment Variables

Add to your `.env` file:

```
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

## Testing

- The current implementation uses a test site key that always returns valid
- For production, replace with your actual keys
- Test both successful and failed reCAPTCHA scenarios

## Security Notes

- Never expose your secret key in client-side code
- Always verify reCAPTCHA tokens on the server side
- Consider implementing rate limiting for contact form submissions
- Log and monitor suspicious activity
