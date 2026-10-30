import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/seo";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || "Not provided",
          company: form.company.trim() || "Not provided",
          message: form.message.trim(),
          _subject: `New contact from gvstudio.live — ${form.name.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.message || "Could not send your message.");
      }

      toast.success("Message sent. We'll get back to you soon.");
      setForm(initialState);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/50 border-2 border-amber-500/70 focus:outline-none focus:border-amber-400 transition-colors duration-300";

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm text-white/80 mb-2">
            Full name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={onChange("name")}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm text-white/80 mb-2">
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={onChange("email")}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-sm text-white/80 mb-2">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={onChange("phone")}
            placeholder="+92 300 0000000"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm text-white/80 mb-2">
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={onChange("company")}
            placeholder="Company name"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm text-white/80 mb-2">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={onChange("message")}
          placeholder="Tell us about your project or what you need help with..."
          className={`${fieldClass} resize-y min-h-[140px]`}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 btn-interactive"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-white/50">
        Messages are delivered to {CONTACT_EMAIL}. We typically reply within 1 business day.
      </p>
    </form>
  );
}
