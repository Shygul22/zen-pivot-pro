import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EmploymentAgreement = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Employment Agreement
              </h1>
              <p className="text-muted-foreground text-sm">
                Effective Date: April 9, 2026
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. POSITION & DUTIES</h2>
                <p className="leading-relaxed">
                  The Employee agrees to serve in the role of <span className="text-foreground font-medium">[Designation]</span> under the <span className="text-foreground font-medium">[Department]</span> and perform all associated responsibilities with due diligence, professionalism, and commitment to ZENJOURNEY PRIVATE LIMITED's standards.
                </p>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. WORK HOURS & SCHEDULE</h2>
                <p className="leading-relaxed">
                  The Employee agrees to work as per the agreed schedule: Full Time (9:00 AM–4:30 PM or 5:30 PM–7:30 PM) or Part Time (minimum 4 hours/day), Monday to Friday. The company platform is accessible 24/7.
                </p>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. PERFORMANCE & ATTENDANCE</h2>
                <p className="leading-relaxed">
                  Benefits and rewards are performance-linked. The Employee acknowledges that benefit tiers are earned based on minimum performance scores and attendance milestones as documented in the ZENJOURNEY PRIVATE LIMITED Benefits Guide. Mandatory verification is required prior to consuming any benefit.
                </p>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. CONFIDENTIALITY</h2>
                <p className="leading-relaxed">
                  The Employee agrees to maintain strict confidentiality of all proprietary information, client data, internal processes, and business strategies of ZENJOURNEY PRIVATE LIMITED during and after the term of employment.
                </p>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. INTELLECTUAL PROPERTY</h2>
                <p className="leading-relaxed">
                  All work product created by the Employee within the scope of their role shall remain the sole intellectual property of ZENJOURNEY PRIVATE LIMITED.
                </p>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. BENEFITS & DISBURSEMENTS</h2>
                <p className="leading-relaxed">
                  ZENJOURNEY PRIVATE LIMITED will disburse eligible benefits in INR within 1–4 working days of approval. Food and travel allowances require bill submission and are subject to instant approval. Learning stipends are per approved certificate as per the published list.
                </p>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. LEAVE POLICY</h2>
                <p className="leading-relaxed">
                  Leave requests must be submitted a minimum of 48 hours in advance for quick approval. Tier 3 benefit eligibility requires 180 consecutive working days without a leave break.
                </p>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. TERMINATION</h2>
                <p className="leading-relaxed">
                  Either party may terminate this agreement with reasonable notice. ZENJOURNEY PRIVATE LIMITED reserves the right to withhold unapproved benefits upon violation of company policy. Upon separation, the Employee must return the Company ID.
                </p>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. GOVERNING LAW</h2>
                <p className="leading-relaxed">
                  This Agreement shall be governed by the laws of India. Any disputes shall be resolved under Indian jurisdiction.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmploymentAgreement;
