import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BenefitsGuide = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in space-y-8">
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground border-b-2 border-primary/20 pb-4">
                Employee Benefits Guide
              </h1>
              <p className="text-muted-foreground text-sm">
                All amounts in Indian Rupees (INR). Mandatory verification is required before consuming any benefit.
              </p>
            </div>

            {/* Tier 1 */}
            <div className="rounded-xl overflow-hidden border border-amber-600/30 shadow-lg">
              <div className="bg-amber-700 p-4">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider">Tier 1 — Silver Benefits</h2>
              </div>
              <div className="bg-amber-50/50 dark:bg-amber-950/20 p-6 space-y-6">
                <div className="bg-white dark:bg-card p-4 rounded-lg flex flex-col md:flex-row justify-between gap-4 border border-amber-200/50">
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Min Performance</p>
                    <p className="text-lg font-bold text-foreground">Minimum 25%</p>
                  </div>
                  <div className="w-px h-8 bg-amber-200 hidden md:block" />
                  <div className="flex-1 text-center md:text-right">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Min Attendance</p>
                    <p className="text-lg font-bold text-foreground">Minimum 28 days</p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-amber-600 pt-1">◆</span>
                    <p><strong className="text-foreground">Performance Rewards:</strong> Silver coin award + performance-linked incentives.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 pt-1">◆</span>
                    <p><strong className="text-foreground">Learning & Development Stipend:</strong> Via company collaboration with partner companies. Minimum INR 500 per certificate; maximum based on certificate market value. Same certificate not counted twice. Approved certificate list published separately.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 pt-1">◆</span>
                    <p><strong className="text-foreground">Flexible Work Scheduling:</strong> Full Time (9:00 AM–4:30 PM or 5:30 PM–7:30 PM) or Part Time (minimum 4 hours/day). Business days Monday–Friday. The platform is accessible 24/7.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="rounded-xl overflow-hidden border border-emerald-600/30 shadow-lg">
              <div className="bg-emerald-600 p-4">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider">Tier 2 — Growth Benefits</h2>
              </div>
              <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-6 space-y-6">
                <div className="bg-white dark:bg-card p-4 rounded-lg flex flex-col md:flex-row justify-between gap-4 border border-emerald-200/50">
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Min Performance</p>
                    <p className="text-lg font-bold text-foreground">Minimum 50%</p>
                  </div>
                  <div className="w-px h-8 bg-emerald-200 hidden md:block" />
                  <div className="flex-1 text-center md:text-right">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Min Attendance</p>
                    <p className="text-lg font-bold text-foreground">Minimum 60 working days</p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 pt-1">◆</span>
                    <p><strong className="text-foreground">Food & Travel Allowance</strong> (personal and business-related activity):</p>
                  </li>
                  <li className="pl-6 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span>Urban Area:</span>
                      <span className="font-semibold text-foreground">INR 2,500 per month (max limit)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Rural Area:</span>
                      <span className="font-semibold text-foreground">INR 1,250 per month (max limit)</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 pt-1">◆</span>
                    <p>Bill submission required. Instant approval process applies.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="rounded-xl overflow-hidden border border-indigo-600/30 shadow-lg">
              <div className="bg-indigo-600 p-4">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider">Tier 3 — Elite Benefits</h2>
              </div>
              <div className="bg-indigo-50/50 dark:bg-indigo-950/20 p-6 space-y-6">
                <div className="bg-white dark:bg-card p-4 rounded-lg flex flex-col md:flex-row justify-between gap-4 border border-indigo-200/50">
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Min Performance</p>
                    <p className="text-lg font-bold text-foreground">Minimum 80%</p>
                  </div>
                  <div className="w-px h-8 bg-indigo-200 hidden md:block" />
                  <div className="flex-1 text-center md:text-right">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Min Attendance</p>
                    <p className="text-lg font-bold text-foreground text-right">180 consecutive days<br/><span className="text-xs font-normal">(no leave break, company working days)</span></p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 pt-1">◆</span>
                    <p><strong className="text-foreground">Food & Travel Allowance:</strong> Continued and enhanced from Tier 2 (personal & business-related activity).</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 pt-1">◆</span>
                    <p><strong className="text-foreground">Student Loan Repayment Support:</strong> ZENJOURNEY PRIVATE LIMITED contributes up to 50% of loan repayment amount.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 pt-1">◆</span>
                    <p>Company amount is not included in CTC calculation.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 pt-1">◆</span>
                    <p>Credit processed within 1–4 working days after approval.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BenefitsGuide;
