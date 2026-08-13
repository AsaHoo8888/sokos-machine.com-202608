import { SiteFooter, SiteHeader } from "@/components/site-shell";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDmhv8ZVbqrUaAwuT9Y4XDMyypRadTBOmRVKI0s1yStERBLg6LgPITGf1KUbdTknuwQfUTNNHwEFWytTRVN29Ic_gbHl_peWSXLXkz9_S-vrlKb93rzawnaueNHqwn--Q9vtQm8amUphg5EdLARYrMRRZMnqOy3uxsPGcvcdFrIvT0zziVRqFmtIE8vTFEQ3n9uUG3jbJ-VRA0Ts5O5LSy7oIN8ZUtf5qIZ5JRmCyCEXx-nCDCJ7sjQ";

const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBID777IK_jhJcTbR70DoKM0d-OcuB9LCOZHaAtEMU6B3BULTtkLxQhvrwthrqySTUte7R3TTPM1Xkmfkzrq1UfwPvEkw9uejkGL-0HQpa70eSgoy2TRq2SGxCM93GsHRDKKkEc7-Oej6c7lCVCRvAm9Q5dXWaGVVMXod3hJSTPf5Fd-4SlcMVpOos3pfvLTnQ1nVIvH2XN94mVwVpgTybIsesd4plNOQXib_NVCFbY1q2GiMRXCxJu";

const serviceRows = [
  {
    title: "Customer Service",
    text: "Dedicated inquiry handling and project consulting to align our engineering solutions with your specific production goals.",
    bullets: ["Project Feasibility", "Custom Configuration"],
    image: "/images/services/customer-service-team.jpg",
  },
  {
    title: "After-sales Service",
    text: "24/7 technical assistance and rapid emergency response teams deployed globally to resolve critical operational issues.",
    bullets: ["24/7 Hotline", "Remote Diagnostics"],
    image: "/images/services/after-sales-engineers.jpg",
  },
  {
    title: "Spare Parts",
    text: "Global supply chain logistics for original precision components, ensuring perfect fit and prolonged equipment integrity.",
    bullets: ["OEM Certified Parts", "Express Logistics"],
    image: "/images/services/spare-parts.jpg",
    reverse: true,
  },
  {
    title: "Installation",
    text: "On-site engineering teams managing turnkey line setup, from initial foundation placement to final commissioning.",
    bullets: ["Turnkey Setup", "FAT/SAT Validation"],
    image: "/images/services/installation-engineers.jpg",
  },
  {
    title: "Training",
    text: "Comprehensive programs for operator and maintenance staff to ensure safe and efficient machinery handling.",
    bullets: ["On-site Workshops", "Digital Manuals"],
    image: "/images/services/training-service.jpg",
    reverse: true,
  },
  {
    title: "Maintenance",
    text: "Scheduled preventive maintenance and performance optimization to prevent degradation and unplanned shutdowns.",
    bullets: ["Preventive Cycles", "Performance Audits"],
    image: "/images/services/maintenance-service.jpg",
    reverse: true,
  },
];

const workflow = [
  ["01", "Request", "Initial support ticket submitted via portal or 24/7 hotline service."],
  ["02", "Diagnosis", "Remote analysis by senior engineers to identify root cause and requirements."],
  ["03", "Action", "Deployment of spare parts or specialized on-site engineering team."],
  ["04", "Verify", "Operational testing and formal sign-off on restored performance metrics."],
];

const stats = [
  ["24h", "Response Time Target"],
  ["500+", "Certified Engineers"],
  ["12", "Logistics Hubs"],
  ["98%", "Uptime Guarantee"],
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="SERVICES" />

        <section className="relative flex h-[520px] items-center overflow-hidden border-b border-[#e2e8f0] pt-24">
          <div className="absolute inset-0">
            <img alt="" className="size-full object-cover opacity-95" src={heroImage} />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
          </div>
          <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Engineering Excellence
            </span>
            <h1 className="mb-6 text-5xl font-bold uppercase md:text-7xl">
              Global Service &
              <br />
              Technical Support
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Ensuring long-term reliability and peak performance through our worldwide network
              of certified engineers and precision component logistics.
            </p>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-4xl font-bold">Comprehensive Support Ecosystem</h2>
              <p className="mx-auto max-w-2xl leading-7 text-slate-600">
                Our specialized support ecosystem is designed to minimize downtime and maximize
                your machinery&apos;s lifecycle value.
              </p>
            </div>

            <div className="space-y-16">
              {serviceRows.map((service) => (
                <article
                  className={`flex flex-col items-center gap-12 ${
                    service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                  key={service.title}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="overflow-hidden border border-[#e2e8f0] shadow-xl">
                      <img
                        alt={service.title}
                        className="aspect-video w-full object-cover transition-all duration-500"
                        src={service.image}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="mb-4 text-3xl font-bold">{service.title}</h3>
                    <p className="mb-6 leading-7 text-slate-600">{service.text}</p>
                    <ul className="space-y-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
                      {service.bullets.map((bullet) => (
                        <li className="flex items-center gap-3" key={bullet}>
                          <span className="size-1.5 bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-y border-[#e2e8f0] bg-[#f8fafc] py-24 lg:py-[120px]"
          id="workflow"
        >
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-20 text-center">
              <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Operational Workflow
              </span>
              <h2 className="text-4xl font-bold">The Technical Support Journey</h2>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-[#ced4da] lg:block" />
              <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {workflow.map(([number, title, text], index) => (
                  <article
                    className={`border border-[#e2e8f0] bg-white p-8 text-center shadow-sm ${
                      index % 2 === 1 ? "lg:mt-12" : ""
                    }`}
                    key={number}
                  >
                    <div className="mx-auto mb-6 flex size-12 items-center justify-center bg-primary font-bold text-white">
                      {number}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{title}</h3>
                    <p className="leading-7 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-24 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-20 px-5 md:px-16 lg:grid-cols-2">
            <div>
              <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Global Reach
              </span>
              <h2 className="mb-6 text-4xl font-bold">
                A Support Network Spanning 80+ Countries
              </h2>
              <p className="mb-10 text-lg leading-8 text-slate-600">
                Our strategic distribution of service centers ensures that technical expertise
                is never more than a few hours away from your production site.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map(([value, label]) => (
                  <div key={label}>
                    <div className="mb-1 text-4xl font-bold text-primary">{value}</div>
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.14em]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="industrial-grid absolute -inset-10 opacity-20" />
              <div className="relative z-10 border border-[#e2e8f0] shadow-xl">
                <img alt="Global support network map" className="aspect-square w-full object-cover" src={mapImage} />
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
