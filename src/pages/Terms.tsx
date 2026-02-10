import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground">
                Last Updated: January 25, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using ZenJourney's services, you agree to be bound by these Terms and Conditions.
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ZenJourney provides backup support for business and professional life, including real-time collaboration
                  and project development services. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt the services</li>
                  <li>Not attempt to gain unauthorized access to any systems</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Provide accurate and complete information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of ZenJourney services are owned by ZenJourney and are
                  protected by international copyright, trademark, and other intellectual property laws. You may not
                  reproduce, distribute, or create derivative works without express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When creating an account with us, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information as necessary</li>
                  <li>Maintain the security and confidentiality of your password</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payments are processed through PhonePe for B2C transactions. All fees are in Indian Rupees (INR)
                  unless otherwise specified. You agree to pay all charges at the prices in effect when the charges
                  are incurred. We reserve the right to change our prices at any time with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, ZenJourney shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not limited to loss of profits, data, or
                  business opportunities arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Service Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time with
                  or without notice. We will not be liable to you or any third party for any modification, suspension,
                  or discontinuation of the services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any
                  reason whatsoever, including without limitation if you breach these Terms. Upon termination, your
                  right to use the services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                  arising from these terms shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> hello@zenjourney.in</p>
                  <p><strong className="text-foreground">Phone:</strong> +91 9092406569</p>
                  <p><strong className="text-foreground">Website & App:</strong> ZenJourney.in</p>
                  <p><strong className="text-foreground">UDYAM Registration:</strong> UDYAM-TN-04-0104781</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
