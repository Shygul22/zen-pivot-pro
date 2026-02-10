import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last Updated: January 25, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ZenJourney ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you use our services.
                  Please read this policy carefully.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Business information (company name, role, industry)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Payment information (processed securely through PhonePe)</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Location data (general geographic location)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and manage your account</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new features and services</li>
                  <li>Protect against fraudulent or illegal activity</li>
                  <li>Comply with legal obligations</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong className="text-foreground">With Your Consent:</strong> When you explicitly agree to share information</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                  over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer
                  need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights and Choices</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Access:</strong> Request access to your personal information</li>
                  <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-foreground">Objection:</strong> Object to processing of your information</li>
                  <li><strong className="text-foreground">Portability:</strong> Request transfer of your information</li>
                  <li><strong className="text-foreground">Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our services and hold certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                  information from children. If you are a parent or guardian and believe your child has provided us with
                  personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy, please contact us:
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

export default Privacy;
