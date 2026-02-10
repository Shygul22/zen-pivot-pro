import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Refund Policy
              </h1>
              <p className="text-muted-foreground">
                Last Updated: January 25, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At ZenJourney, we strive to ensure your satisfaction with our services. This Refund Policy outlines
                  the circumstances under which refunds may be issued and the process for requesting them. By using our
                  services, you agree to this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility for Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Refunds may be considered under the following specific billing circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Technical issues prevented access to strategic resources</li>
                  <li>Duplicate charges were made to your account</li>
                  <li>Billing errors or unauthorized charges</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Non-Refundable Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are generally not eligible for refunds:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Security Advance:</strong> As stated in our Hybrid Model, the one-time Security Advance is non-refundable.</li>
                  <li>Services already rendered or consumed</li>
                  <li>Subscription fees after the current billing cycle starts</li>
                  <li>Consultation and strategy session fees</li>
                  <li>Third-party integration or hosting costs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Refund Request Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To request a refund, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Contact Us:</strong> Send an email to hello@zenjourney.in with
                    "Refund Request" in the subject line
                  </li>
                  <li>
                    <strong className="text-foreground">Provide Details:</strong> Include your account information,
                    transaction ID, date of purchase, and reason for the refund request
                  </li>
                  <li>
                    <strong className="text-foreground">Wait for Review:</strong> Our team will review your request
                    within 5-7 business days
                  </li>
                  <li>
                    <strong className="text-foreground">Receive Decision:</strong> You will be notified via email
                    about the status of your refund request
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Refund Timeline</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If your refund is approved:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Processing time: 5-7 business days from approval</li>
                  <li>PhonePe refunds: 3-5 business days to reflect in your account</li>
                  <li>Bank refunds: 7-10 business days depending on your bank</li>
                  <li>You will receive a confirmation email once the refund is processed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Partial Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In certain cases, partial refunds may be issued:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Services that were partially delivered</li>
                  <li>Subscription cancellations mid-cycle (prorated amount)</li>
                  <li>Downgrade from premium to basic services</li>
                  <li>Resolution of specific technical issues affecting only part of the service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Subscription Cancellations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For subscription-based services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Cancel anytime before the next billing cycle</li>
                  <li>No refunds for the current billing period unless service was not delivered</li>
                  <li>Access continues until the end of the paid period</li>
                  <li>Cancellation must be done at least 24 hours before renewal</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Disputes and Chargebacks</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to contact us directly before initiating a chargeback with your payment provider.
                  Chargebacks can result in account suspension and may prevent future purchases. We are committed to
                  resolving any issues fairly and promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Service Credits</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As an alternative to monetary refunds, we may offer service credits that can be used toward future
                  purchases or extended service periods. Service credits are non-transferable and expire 12 months
                  from the date of issue.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately
                  upon posting to our website. Your continued use of our services after any such changes constitutes
                  acceptance of the new policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For refund requests or questions about this policy, please contact:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> hello@zenjourney.in</p>
                  <p><strong className="text-foreground">Phone:</strong> +91 9092406569</p>
                  <p><strong className="text-foreground">Website & App:</strong> ZenJourney.in</p>
                  <p><strong className="text-foreground">Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST</p>
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

export default Refund;
