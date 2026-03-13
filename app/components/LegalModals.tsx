"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function LegalModals() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div>
        <h4 className="uppercase tracking-widest text-xs md:text-sm mb-3 text-center text-[#B28A2E]">
          Legal
        </h4>

        <ul className="flex flex-row justify-center space-x-2 space-y-2  text-xs md:text-sm">
          <li>
            <button
              onClick={() => setActive("privacy")}
              className="md:text-left text-center cursor-pointer hover:underline"
            >
              Privacy and Data Protection
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive("terms")}
              className="md:text-left text-center cursor-pointer hover:underline"
            >
              Terms of Use
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive("copyright")}
              className="md:text-left text-center cursor-pointer hover:underline"
            >
              Copyright and Usage Rights
            </button>
          </li>
        </ul>
      </div>

      {/* ================= PRIVACY ================= */}
      <Modal
        isOpen={active === "privacy"}
        onClose={() => setActive(null)}
        title="Privacy & Data Protection Policy"
      >
        <p>
          <strong>Effective Date:</strong> March 1 2026
        </p>

        <p>
          We are committed to protecting the privacy of all visitors to this website. This
          policy outlines how we collect, use, and safeguard personal information in
          connection with the All Star Alumni Winter Classic and related content.
        </p>

        <h3 className="font-semibold mt-6">1. Information We Collect</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Basic usage data (e.g. browser type, pages visited, time spent)</li>
          <li>
            Contact information if voluntarily submitted (e.g. newsletter sign-up,
            inquiries)
          </li>
          <li>
            Cookies and analytics data to improve site performance and user experience
          </li>
        </ul>

        <p>
          We do <b>not</b> collect sensitive personal information or share data with third
          parties for advertising purposes.
        </p>

        <h3 className="font-semibold mt-6">2. How We Use Your Information</h3>
        <p>Collected data may be used to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Improve website functionality and design</li>
          <li>Respond to inquiries or feedback</li>
          <li>Monitor site traffic and engagement</li>
        </ul>

        <h3 className="font-semibold mt-6">3. Cookies & Analytics</h3>
        <p>
          This site may use cookies and third-party analytics tools (e.g. Google
          Analytics) to understand visitor behavior. You can disable cookies in your
          browser settings.
        </p>

        <h3 className="font-semibold mt-6">4. Data Protection</h3>
        <p>
          We implement reasonable security measures to protect your information from
          unauthorized access, alteration, or disclosure.
        </p>

        <h3 className="font-semibold mt-6">5. Your Rights</h3>
        <p>
          You may request access to, correction of, or deletion of your personal data by
          contacting us at{" "}
          <a
            href="mailto:queries@dggsports.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400 transition"
          >
            queries@dggsports.com
          </a>{" "}
          .
        </p>

        <h3 className="font-semibold mt-6">6. Changes to This Policy</h3>
        <p>
          We may update this policy from time to time. Any changes will be posted on this
          page with an updated effective date.
        </p>
      </Modal>

      {/* ================= TERMS ================= */}
      <Modal
        isOpen={active === "terms"}
        onClose={() => setActive(null)}
        title="Terms of Use"
      >
        <p>
          <strong>Effective Date:</strong> March 1 2026
        </p>

        <p>
          These Terms of Use govern access to and use of this website, including all
          content, images, media, and materials related to the All Star Alumni Winter
          Classic and the history of hockey on Great Bear Lake. By visiting or using this
          site, you agree to these terms.
        </p>

        <h3 className="font-semibold mt-6">1. Acceptance of Terms</h3>
        <p>
          By accessing this website, you acknowledge that you have read, understood, and
          agree to be bound by these Terms of Use. If you do not agree, please discontinue
          use of the site.
        </p>

        <h3 className="font-semibold mt-6">2. Ownership of Content</h3>
        <p>
          All content on this website — including text, images, artwork, graphics, logos,
          and design elements — is protected by copyright and other applicable laws.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Content may not be copied, reproduced, distributed, or modified without prior
            written permission.
          </li>
          <li>
            Historical references, cultural narratives, and depictions of Dene heritage
            are presented with respect and should not be reused out of context.
          </li>
        </ul>

        <h3 className="font-semibold mt-6">3. Permitted Use</h3>
        <p>
          You may browse the site, share links, and view content for personal,
          non-commercial purposes. You may not:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Use the site for unlawful or harmful activities</li>
          <li>Attempt to disrupt site functionality</li>
          <li>Use automated tools (scrapers, bots) to extract content</li>
          <li>Misrepresent the site’s content or purpose</li>
        </ul>

        <h3 className="font-semibold mt-6">4. Accuracy of Information</h3>
        <p>
          While we strive to ensure accuracy, some historical information, archival
          references, or event details may evolve over time.
        </p>
        <p>
          We do not guarantee that all content is error-free, and we reserve the right to
          update or correct information without notice.
        </p>

        <h3 className="font-semibold mt-6">5. Third-Party Links</h3>
        <p>
          This site may contain links to external websites for additional context or
          resources. We are not responsible for the content, privacy practices, or
          accuracy of third-party sites.
        </p>

        <h3 className="font-semibold mt-6">6. Limitation of Liability</h3>
        <p>Use of this website is at your own risk. We are not liable for:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Any damages arising from use or inability to use the site</li>
          <li>Technical issues, interruptions, or data loss</li>
          <li>Reliance on historical or interpretive content</li>
        </ul>

        <h3 className="font-semibold mt-6">7. Privacy</h3>
        <p>
          Your use of this site is also governed by our Privacy Policy, which explains how
          we collect and protect visitor information.
        </p>

        <h3 className="font-semibold mt-6">8. Changes to These Terms</h3>
        <p>
          We may update these Terms of Use periodically. Continued use of the site after
          changes are posted constitutes acceptance of the revised terms.
        </p>

        <h3 className="font-semibold mt-6">9. Contact</h3>
        <p>
          For questions about these terms or requests for permissions, please contact:{" "}
          <a
            href="mailto:queries@dggsports.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400 transition"
          >
            queries@dggsports.com
          </a>{" "}
        </p>
      </Modal>

      {/* ================= COPYRIGHT ================= */}
      <Modal
        isOpen={active === "copyright"}
        onClose={() => setActive(null)}
        title="Copyright & Usage Rights"
      >
        <p>
          <strong>Effective Date:</strong> March 1 2026
        </p>

        <p>
          This website and all materials presented on it — including text, artwork,
          historical interpretations, photographs, graphics, branding elements, and
          digital media — are protected by applicable copyright, intellectual property,
          and cultural heritage laws.
        </p>

        <h3 className="font-semibold mt-6">Ownership of Materials</h3>
        <p>
          All original content on this site is owned by the organization responsible for
          the All Star Alumni Winter Classic, unless otherwise noted. This includes:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Written narratives and historical summaries</li>
          <li>Custom artwork and digital recreations</li>
          <li>Event branding, logos, and design elements</li>
          <li>Photographs, videos, and promotional materials</li>
        </ul>

        <p>
          Some historical references, archival imagery, and cultural content remain the
          property of their respective rights holders.
        </p>

        <h3 className="font-semibold mt-6">Cultural and Historical Respect</h3>
        <p>
          Content relating to the Dene people, Sahtú region, and Indigenous cultural
          heritage is shared with care and respect. Such material may be subject to
          additional cultural protocols and should not be reproduced, adapted, or used out
          of context without explicit permission from the appropriate community
          representatives.
        </p>

        <h3 className="font-semibold mt-6">Permitted Personal Use</h3>
        <p>Visitors may:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>View and share links to pages on this site</li>
          <li>
            Use content for personal, educational, or non-commercial purposes, provided it
            is not altered and proper credit is maintained
          </li>
        </ul>

        <p>
          Any use beyond this — including reproduction, redistribution, modification, or
          commercial use — requires written permission.
        </p>

        <h3 className="font-semibold mt-6">Prohibited Uses</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Copy or republish images, artwork, or text for commercial purposes</li>
          <li>Remove branding, watermarks, or attribution</li>
          <li>
            Use site content in a misleading, defamatory, or culturally inappropriate
            manner
          </li>
          <li>
            Train AI models or automated systems using this site’s content without
            explicit permission
          </li>
        </ul>

        <h3 className="font-semibold mt-6">Requests for Permission</h3>
        <p>
          For inquiries regarding the use of images, artwork, historical content, or
          branding materials, please contact:{" "}
          <a
            href="mailto:queries@dggsports.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400 transition"
          >
            queries@dggsports.com
          </a>{" "}
        </p>

        <h3 className="font-semibold mt-6">Third-Party Rights</h3>
        <p>
          Some content may be licensed from third-party creators or archives. Any use of
          such material must comply with the terms set by those rights holders.
        </p>

        <h3 className="font-semibold mt-6">Updates to This Policy</h3>
        <p>
          We may revise this policy periodically. Updated versions will be posted on this
          page with a new effective date.
        </p>
      </Modal>
    </>
  );
}
