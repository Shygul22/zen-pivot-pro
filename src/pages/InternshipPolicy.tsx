import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InternshipPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Digital Innovation Internship Program
              </h1>
              <p className="text-muted-foreground">
                Last Updated: March 14, 2026
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Company Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Zenjourney is a forward-thinking technology and business services company dedicated to transforming ideas into digital reality. We collaborate with startups, SMEs, and enterprises to build scalable digital products and business strategies.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We operate as a hybrid team, combining remote flexibility with structured collaboration. Our core areas include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Android App Development</li>
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Business Strategy & Digital Growth</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Internship Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <p><strong className="text-foreground">Position:</strong> Digital Innovation Intern</p>
                    <p><strong className="text-foreground">Mode:</strong> Hybrid (Remote + Office Collaboration)</p>
                  </div>
                  <div>
                    <p><strong className="text-foreground">Duration:</strong> 3 Months or 6 Months</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This is a performance-based internship where interns contribute to real client projects under guided supervision.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Stipend & Fee Structure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <p><strong className="text-foreground">Internship Fee (6 Months):</strong> ₹2999 (One-Time Payment)</p>
                    <p><strong className="text-foreground">Payment Type:</strong> Single Payment</p>
                    <p><strong className="text-foreground">Refund Policy:</strong> Non-Refundable</p>
                  </div>
                  <p><strong className="text-foreground">Compensation:</strong> ₹1000 Stipend + Project Share (Performance-Based Incentive)</p>
                  <p className="text-sm italic">
                    The stipend and project share are subject to performance evaluation and successful participation in assigned projects.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>For the 3-month internship: No stipend during the first month.</li>
                    <li>For the 6-month internship: No stipend during the first two months.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Roles & Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a Digital Innovation Intern, you will:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Collaborate with development and strategy teams</li>
                  <li>Contribute to real client projects</li>
                  <li>Assist in all project lifecycle stages (Concept to Post-Launch)</li>
                  <li>Conduct research and suggest improvements</li>
                  <li>Deliver assigned tasks within deadlines</li>
                </ul>
                <p className="text-primary font-semibold mt-4">
                  This is an active contribution-based internship, not an observational training program.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Eligibility Criteria</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Applicants must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Be currently pursuing or have recently completed a degree in Computer Science, IT, Business Administration, or a related field OR be a self-taught candidate with a strong portfolio</li>
                  <li>Have basic familiarity with relevant tools and technologies</li>
                  <li>Be available for the full internship duration</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. General Rules & Guidelines</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground">Professional Conduct</h3>
                    <p className="text-sm text-muted-foreground">Maintain respectful and professional communication at all times.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground">Deadline Compliance</h3>
                    <p className="text-sm text-muted-foreground">All assigned tasks must be submitted on time.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground">Original Work</h3>
                    <p className="text-sm text-muted-foreground">Plagiarism or unauthorized use of third-party code/content will result in immediate termination.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground">Communication</h3>
                    <p className="text-sm text-muted-foreground">Interns must remain responsive during agreed working hours.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground">Confidentiality</h3>
                    <p className="text-sm text-muted-foreground">Interns may be required to sign a Non-Disclosure Agreement (NDA).</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Certification Criteria</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  An Internship Completion Certificate will be issued only if the intern:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Completes the full internship duration</li>
                  <li>Successfully submits the final project</li>
                  <li>Meets performance and professionalism standards</li>
                  <li>Complies with company policies</li>
                </ul>
                <p className="text-sm italic mt-4 text-muted-foreground">
                  Certificates are issued after internal evaluation approval.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Legal Terms & Policies</h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Fee Policy</h3>
                    <p className="text-sm">The internship fee of ₹2999 is strictly non-refundable under any circumstances, including voluntary withdrawal, termination due to misconduct, or failure to complete the internship.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Employment Guarantee</h3>
                    <p className="text-sm">This internship does not guarantee employment or full-time placement. Any future opportunity with Zenjourney will be strictly performance-based.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Stipend Conditions</h3>
                    <p className="text-sm">The ₹1000 stipend and project share are performance-based and subject to internal evaluation. Zenjourney reserves the right to withhold the stipend in cases of non-performance, policy violations, or incomplete participation.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Intellectual Property Ownership</h3>
                    <p className="text-sm">All work created during the internship shall remain the sole intellectual property of Zenjourney. Interns may not reuse, distribute, or claim ownership without written permission.</p>
                  </div>
                </div>
              </section>

              <section className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Declaration</h2>
                <p className="text-muted-foreground leading-relaxed text-center">
                  By submitting the application, you confirm that you have read and understood all internship details, agree to all terms and policies, and ensure all information provided is accurate and truthful.
                </p>
              </section>

              <section className="text-center pt-8 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> info@zenjourney.io</p>
                  <p><strong className="text-foreground">Phone:</strong> +91 9092406569</p>
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

export default InternshipPolicy;
