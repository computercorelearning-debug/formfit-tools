import React from "react";

export default function Contact() {
  return (
    <div className="legal-page">
      <div className="container legal-container">

        <a href="/formfit-tools/" className="legal-back">
          ← Back to FormFit Tools
        </a>

        <div className="legal-header">
          <div className="brand-mark">F</div>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>

        <section className="legal-section">
          <h2>Get in Touch</h2>
          <p>
            If you have a question, suggestion, feedback, or notice a problem
            with FormFit Tools, feel free to contact us.
          </p>
        </section>

        <section className="legal-section">
          <h2>Email Support</h2>
          <p>
            For general questions, feedback, or technical issues, contact us
            by email:
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:computercorelearning@gmail.com">
              computercorelearning@gmail.com
            </a>
          </p>
        </section>

        <section className="legal-section">
          <h2>Suggestions & Feedback</h2>
          <p>
            Your feedback helps us improve FormFit Tools. You can contact us
            with suggestions for new image tools, presets, features, or
            improvements to the website.
          </p>
        </section>

        <section className="legal-section">
          <h2>Report a Problem</h2>
          <p>
            If a tool is not working correctly, please include a short
            description of the problem and, if possible, the browser and
            device you are using.
          </p>
        </section>

        <section className="legal-section">
          <h2>Before Contacting Us</h2>
          <p>
            For questions about photograph or signature requirements for a
            particular application, please also check the latest official
            notification or website of the organization accepting your
            application.
          </p>
        </section>

        <div className="legal-footer">
          © 2026 FormFit Tools. All rights reserved.
        </div>

      </div>
    </div>
  );
}