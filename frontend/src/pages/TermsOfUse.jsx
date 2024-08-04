import React from 'react';
import { Link } from 'react-router-dom';

import arrowBack from "../assets/icons/arrow_back.png"

const TermsOfUse = () => {
  return (
    <div className="container max-w-xl mx-auto py-12 px-4">
      <Link to="/" className="inline-flex items-center">
        <img src={arrowBack} alt="Icon" className="h-4 w-4 mr-2" />
        Back
      </Link>

      <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p>
          Welcome to Journaling. These terms of use ("Terms") govern your use of our website and services. By using our services, you agree to these Terms. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. We will notify you of any changes by updating the date at the top of these Terms. It is your responsibility to review these Terms regularly. Your continued use of our services following any changes indicates your acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Use of Service</h2>
        <p>
          You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in a way that violates any laws or regulations, or infringes on the rights of others.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, and images, is the property of Journaling or its content suppliers and is protected by international copyright laws. You may not use, reproduce, or distribute any of our content without our prior written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Journaling shall not be liable for any damages resulting from your use of our services, including direct, indirect, incidental, consequential, or punitive damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the country where Journaling is based, without regard to its conflict of law provisions.
        </p>
        
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at support@journaling.com.
        </p>
      </section>

      <p className="mb-4">Last updated: August 1, 2024</p>
    </div>
  );
};

export default TermsOfUse;
