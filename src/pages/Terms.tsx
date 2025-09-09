import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-poppins text-5xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 1, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none"
        >
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Head2Heart's services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2>2. Coaching Services</h2>
          <p>
            Head2Heart provides life coaching services designed to support personal and professional development. Our services include:
          </p>
          <ul>
            <li>Individual coaching sessions</li>
            <li>Group workshops</li>
            <li>Speaking engagements</li>
            <li>Comprehensive transformation programs</li>
          </ul>

          <h2>3. Client Responsibilities</h2>
          <p>
            As a client, you agree to:
          </p>
          <ul>
            <li>Attend scheduled sessions on time</li>
            <li>Be open and honest during coaching sessions</li>
            <li>Complete any agreed-upon exercises or assignments</li>
            <li>Take responsibility for your own decisions and actions</li>
            <li>Provide at least 24 hours notice for cancellations</li>
          </ul>

          <h2>4. Confidentiality</h2>
          <p>
            We maintain strict confidentiality regarding all information shared during coaching sessions. Information will only be disclosed with your written consent or as required by law.
          </p>

          <h2>5. Payment Terms</h2>
          <ul>
            <li>Payment is due at the time of service unless other arrangements have been made</li>
            <li>Cancellations with less than 24 hours notice may be charged the full session fee</li>
            <li>Refunds are considered on a case-by-case basis</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            Coaching is not therapy or medical treatment. If you are experiencing serious mental health issues, we recommend consulting with a licensed mental health professional.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All materials provided by Head2Heart, including but not limited to worksheets, assessments, and recordings, are proprietary and may not be reproduced without written permission.
          </p>

          <h2>8. Modifications</h2>
          <p>
            Head2Heart reserves the right to modify these terms at any time. Changes will be communicated to clients and posted on our website.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p>
            Email: legal@head2heart.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Wellness Ave, New York, NY 10001
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;