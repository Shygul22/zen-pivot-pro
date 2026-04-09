import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WorkPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Work Policy & Quick Reference
              </h1>
              <p className="text-muted-foreground text-sm">
                Last Updated: April 9, 2026
              </p>
            </div>

            <div className="grid gap-6">
              <section className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  WORKING HOURS
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Full Time — Slot A</span>
                    <span className="text-foreground font-medium">9:00 AM – 4:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Full Time — Slot B</span>
                    <span className="text-foreground font-medium">5:30 PM – 7:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Part Time</span>
                    <span className="text-foreground font-medium">Minimum 4 hours per day</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Business Days</span>
                    <span className="text-foreground font-medium">Monday – Friday</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>The Platform</span>
                    <span className="text-primary font-bold">24/7 Accessible</span>
                  </div>
                </div>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  LEAVE POLICY
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Advance Notice Required</span>
                    <span className="text-foreground font-medium">48 hours minimum</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Approval Process</span>
                    <span className="text-foreground font-medium">Quick approval</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-foreground mb-1">Tier 3 Attendance Rule:</p>
                    <p className="text-sm">Continuous 180 days — no leave break required for eligibility.</p>
                  </div>
                </div>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  INTERNSHIP CERTIFICATE POLICY
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Minimum Performance Required</span>
                    <span className="text-foreground font-medium">60%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Issued By</span>
                    <span className="text-foreground font-medium">ZENJOURNEY PRIVATE LIMITED HR / Director</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Format</span>
                    <span className="text-foreground font-medium">Signed certificate with performance grade</span>
                  </div>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-6">
                <section className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                  <h2 className="text-lg font-bold text-primary mb-3">BENEFIT VERIFICATION</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Before any benefit is consumed or claimed, the Employee must complete mandatory verification through the company's internal process. Unverified claims will not be processed. This policy applies to all benefit tiers without exception.
                  </p>
                </section>

                <section className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                  <h2 className="text-lg font-bold text-foreground mb-3">LETTER OF RECOMMENDATION</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ZENJOURNEY PRIVATE LIMITED issues Letters of Recommendation based solely on demonstrated performance. Content, grade, and endorsement level are determined by the Director's assessment. This is a discretionary document and is not guaranteed to all employees.
                  </p>
                </section>
              </div>

              <section className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  LEARNING & DEVELOPMENT CERTIFICATE STIPEND
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-sm leading-relaxed">
                    Stipends are issued per approved certificate only. The same certificate cannot be submitted more than once.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-3 rounded-lg text-center">
                      <p className="text-xs uppercase tracking-wider mb-1">Minimum Stipend</p>
                      <p className="text-xl font-bold text-foreground">INR 500</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg text-center">
                      <p className="text-xs uppercase tracking-wider mb-1">Maximum Stipend</p>
                      <p className="text-sm font-medium text-foreground">Based on Market Value</p>
                    </div>
                  </div>
                  <p className="text-xs italic">
                    * The approved list is maintained by ZENJOURNEY PRIVATE LIMITED HR and updated periodically.
                  </p>
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

export default WorkPolicy;
