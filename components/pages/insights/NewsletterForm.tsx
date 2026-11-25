"use client";

import { useState, type FormEvent } from "react";

/** Newsletter signup (no backend): on submit hide the form and show the success block. */
export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };
  return (
    <div className="letter-form w-form" data-reveal="4">
      {!done && (
        <form className="letter-field" name="Insights Newsletter" aria-label="Insights newsletter" onSubmit={onSubmit}>
          <input className="letter-input w-input" name="Email" placeholder="Your email address" type="email" required aria-label="Email address" maxLength={256} />
          <input type="submit" className="button-primary is-submit w-button" value="Subscribe" />
        </form>
      )}
      <div className="letter-success w-form-done" role="status" style={done ? { display: "block" } : undefined}>
        <p className="letter-note">You&apos;re on the list. Your first plain-English legal guide lands in your inbox this week.</p>
      </div>
      <div className="letter-error w-form-fail">
        <p className="letter-note">We couldn&apos;t add you just now. Check your email address and try again.</p>
      </div>
    </div>
  );
}
