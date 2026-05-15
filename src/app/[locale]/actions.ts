"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form fields.",
    };
  }

  const { name, email, company, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "JJDoria <hello@devjjdoria.com>",
      to: "hello@devjjdoria.com",
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}
      `,
    });

    return {
      success: true,
      message: "Message sent successfully.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}