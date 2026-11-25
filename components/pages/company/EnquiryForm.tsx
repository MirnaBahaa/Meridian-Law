"use client";

import { useState, type FormEvent } from "react";
import { OFFICE_OPTIONS, PRACTICE_CHOICES } from "@/lib/content/company";

/** Contact enquiry form. No backend: submitting swaps in the success block. */
export default function EnquiryForm() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    window.setTimeout(() => setState("done"), 600);
  };

  return (
    <div className="w-form">
      <form
        id="contact-enquiry"
        name="wf-form-Contact-Enquiry"
        aria-label="Contact Enquiry"
        className="enquiry-form"
        onSubmit={onSubmit}
        style={state === "done" ? { display: "none" } : undefined}
      >
        <div className="field-pair">
          <div className="field-group">
            <label htmlFor="full-name" className="field-label">Full name</label>
            <input className="field-input w-input" name="Full-Name" placeholder="Your full name" type="text" id="full-name" autoComplete="name" required />
          </div>
          <div className="field-group">
            <label htmlFor="phone" className="field-label">Phone</label>
            <input className="field-input w-input" name="Phone" placeholder="Your phone number" type="tel" id="phone" autoComplete="tel" />
          </div>
        </div>
        <div className="field-pair">
          <div className="field-group">
            <label htmlFor="email" className="field-label">Email</label>
            <input className="field-input w-input" name="Email" placeholder="Your email address" type="email" id="email" autoComplete="email" required />
          </div>
          <div className="field-group">
            <label htmlFor="preferred-office" className="field-label">Preferred office</label>
            <select id="preferred-office" name="Preferred-Office" className="field-input w-select" defaultValue="">
              {OFFICE_OPTIONS.map((o) => (
                <option value={o.value} key={o.label}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field-group" role="radiogroup" aria-labelledby="area-label">
          <div className="field-label" id="area-label">Practice area</div>
          <div className="area-choices">
            {PRACTICE_CHOICES.map((c) => (
              <label className="area-choice w-radio" key={c.id}>
                <input type="radio" id={c.id} name="Practice-Area" value={c.value} className="w-form-formradioinput choice-dot w-radio-input" />
                <span className="w-form-label">{c.value}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="field-group">
          <label htmlFor="message" className="field-label">How can we help?</label>
          <textarea placeholder="Tell us briefly about your situation" id="message" name="Message" className="field-input is-message w-input" />
        </div>
        <div className="enquiry-foot">
          <label className="w-checkbox consent-line">
            <input type="checkbox" id="privacy-consent" name="Privacy-Consent" className="w-checkbox-input choice-dot" required />
            <span className="w-form-label">
              I agree to the privacy policy. Contacting us does not create an attorney-client relationship.
            </span>
          </label>
          <input type="submit" className="submit-button w-button" value={state === "sending" ? "Please wait..." : "Send my message"} disabled={state === "sending"} />
        </div>
      </form>
      <div className="w-form-done" role="status" style={state === "done" ? { display: "block" } : undefined}>
        <div>Thank you. A senior attorney will reply shortly, usually within the hour.</div>
      </div>
      <div className="w-form-fail">
        <div>That didn’t go through. Please try again or call (212) 555-0148.</div>
      </div>
    </div>
  );
}
