import React from 'react';
import { Link } from 'react-router-dom';

import arrowBack from "../assets/icons/arrow_back.png"

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-xl mx-auto py-12 px-4">
      <Link to="/" className="inline-flex items-center">
        <img src={arrowBack} alt="Icon" className="h-4 w-4 mr-2" />
        Back
      </Link>

      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p>
          Welcome to Journaling. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. By using our services, you agree to the collection and use of your information in accordance with this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the site includes:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Personal Data: Such as your name, email address, and demographic information.</li>
          <li>Usage Data: Information about how you use our services, including your IP address, browser type, and access times.</li>
          <li>Cookies: We may use cookies and similar tracking technologies to track the activity on our service and store certain information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
        <p>
          We use the information we collect in various ways, including to:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Provide, operate, and maintain our services.</li>
          <li>Improve, personalize, and expand our services.</li>
          <li>Understand and analyze how you use our services.</li>
          <li>Communicate with you, either directly or through one of our partners.</li>
          <li>Process your transactions and manage your orders.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Sharing Your Information</h2>
        <p>
          We may share your information in the following situations:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>With third-party service providers to assist in providing and improving our services.</li>
          <li>If required by law or in response to legal processes.</li>
          <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to protect your personal information. While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the internet, or method of electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have the following data protection rights:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at support@journaling.com.
        </p>
      </section>

      <p className="mb-4">Last updated: August 1, 2024</p>
    </div>
  );
};

export default PrivacyPolicy;

