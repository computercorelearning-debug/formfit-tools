import React from "react";

export default function About() {
  return (
    <div className="legal-page">
      <div className="container legal-container">

        <a href="/formfit-tools/" className="legal-back">
          ← Back to FormFit Tools
        </a>

        <div className="legal-header">
          <div className="brand-mark">F</div>
          <h1>About FormFit Tools</h1>
          <p>Simple image tools for online applications</p>
        </div>

        <section className="legal-section">
          <h2>What is FormFit Tools?</h2>
          <p>
            FormFit Tools is a simple online image utility designed to help
            users prepare photos and signatures for online application forms.
          </p>

          <p>
            The platform allows users to resize and compress images according
            to required file size, dimensions, format, and image quality.
          </p>
        </section>

        <section className="legal-section">
          <h2>What Can You Do With FormFit Tools?</h2>

          <ul>
            <li>Resize photos to specific pixel dimensions.</li>
            <li>Reduce image file size in KB.</li>
            <li>Prepare signatures for online applications.</li>
            <li>Choose JPG, JPEG, or PNG output formats.</li>
            <li>Adjust image quality.</li>
            <li>Download the processed image instantly.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Designed for Online Forms</h2>
          <p>
            Many online applications require photographs and signatures to
            follow specific file-size and dimension requirements.
            FormFit Tools is designed to make this preparation easier.
          </p>

          <p>
            Users can enter their required dimensions and target file size
            instead of relying on complicated image-editing software.
          </p>
        </section>

        <section className="legal-section">
          <h2>Privacy-Focused Processing</h2>
          <p>
            FormFit Tools is designed to process images directly inside the
            user's web browser. No account is required to use the basic image
            resizing functionality.
          </p>

          <p>
            This browser-based approach helps users prepare their images
            without needing to upload them to a separate image-processing
            service.
          </p>
        </section>

        <section className="legal-section">
          <h2>Our Goal</h2>
          <p>
            Our goal is to provide simple, fast, and easy-to-use image tools
            that help students, job applicants, exam candidates, and other
            users prepare files for online applications.
          </p>
        </section>

        <section className="legal-section">
          <h2>Important Note</h2>
          <p>
            Image size and dimension requirements can vary between applications
            and may change over time. Users should always check the latest
            official notification or application instructions before submitting
            a photo or signature.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            If you have a question, suggestion, or notice an issue with
            FormFit Tools, you can contact us at:
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:computercorelearning@gmail.com">
              computercorelearning@gmail.com
            </a>
          </p>
        </section>

        <div className="legal-footer">
          © 2026 FormFit Tools. All rights reserved.
        </div>

      </div>
    </div>
  );
}