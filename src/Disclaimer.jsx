import React from "react";

export default function Disclaimer() {
  return (
    <div className="legal-page">
      <div className="container legal-container">

        <a href="/formfit-tools/" className="legal-back">
          ← Back to FormFit Tools
        </a>

        <div className="legal-header">
          <div className="brand-mark">F</div>
          <h1>Disclaimer</h1>
          <p>Last updated: October 6, 2026</p>
        </div>

        <section className="legal-section">
          <h2>1. General Information</h2>
          <p>
            The information and tools provided by FormFit Tools are intended
            for general informational and utility purposes only.
          </p>

          <p>
            FormFit Tools provides image resizing, compression, and formatting
            tools to help users prepare photographs and signatures for online
            applications.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. No Guarantee of Application Acceptance</h2>
          <p>
            FormFit Tools does not guarantee that a resized or compressed image
            will be accepted by any particular government department,
            examination authority, employer, educational institution, website,
            or online application portal.
          </p>

          <p>
            Users are responsible for checking the latest official requirements
            before submitting their photographs, signatures, or other files.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. File Size and Dimensions</h2>
          <p>
            The final file size of an image may vary depending on the original
            image, dimensions, file format, compression settings, and image
            content.
          </p>

          <p>
            Entering a target file size does not guarantee that every image can
            be produced at exactly that size while maintaining the desired
            quality.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Accuracy of Information</h2>
          <p>
            Online application requirements can change without notice.
            FormFit Tools does not guarantee that information about particular
            application requirements is complete, current, or error-free.
          </p>

          <p>
            Always refer to the official website or official notification of
            the relevant organization for the latest requirements.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. User Responsibility</h2>
          <p>
            Users are responsible for selecting appropriate images and
            verifying the final file before submitting it to any third-party
            application or service.
          </p>

          <p>
            Users should keep an original copy of important photographs and
            signatures before processing them.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Third-Party Websites</h2>
          <p>
            FormFit Tools may contain links to third-party websites or
            application portals. We do not control and are not responsible for
            the content, availability, accuracy, or policies of those websites.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Advertising</h2>
          <p>
            FormFit Tools may display advertisements provided by third-party
            advertising services. The appearance of an advertisement does not
            constitute an endorsement or recommendation of the advertised
            product or service.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Service Availability</h2>
          <p>
            We aim to keep FormFit Tools available and functional, but we do
            not guarantee uninterrupted or error-free operation of the website.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Limitation of Liability</h2>
          <p>
            To the extent permitted by applicable law, FormFit Tools and its
            operators shall not be liable for any loss, damage, rejection,
            delay, or other consequence resulting from the use of the website
            or the files processed through the service.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Changes to This Disclaimer</h2>
          <p>
            We may update this Disclaimer from time to time. Any changes will
            be published on this page with an updated revision date.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Contact</h2>
          <p>
            If you have questions about this Disclaimer, contact us at:
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