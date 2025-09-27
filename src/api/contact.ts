// Mock API endpoint for contact form
// In a real application, this would be handled by your backend server

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  recaptchaToken: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock validation
  if (!data.name || !data.email || !data.message || !data.recaptchaToken) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  // Mock reCAPTCHA verification (in real app, verify with Google's API)
  if (data.recaptchaToken === "invalid") {
    return {
      success: false,
      message: "reCAPTCHA verification failed",
    };
  }

  // Mock successful submission
  console.log("Contact form submission:", data);

  // In a real application
  // 1. Verify the reCAPTCHA token with Google
  // 2. Save the contact form data to your database
  // 3. Send an email notification
  // 4. Send an auto-reply to the user

  return {
    success: true,
    message: "Thank you for your message! We'll get back to you soon.",
  };
}
