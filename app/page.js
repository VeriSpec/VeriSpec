export default function Page() {
  const pillars = [
    {
      title: "Execution Control",
      body: "Turn critical workflows into controlled field actions with live gates, approvals, and traceable decision points.",
    },
    {
      title: "Compliance Embedded",
      body: "Bring permits, QA/QC, environmental controls, and hold points into one operating layer.",
    },
    {
      title: "Real-Time Visibility",
      body: "Give leadership, inspectors, contractors, and authorities a shared source of truth without adding friction to the field.",
    },
  ];

  const outcomes = [
    "Reduce preventable field errors before they become incidents, delays, or rework.",
    "Create defensible records of who authorized what, when, and under which conditions.",
    "Standardize complex workflows across projects, sites, contractors, and authorities.",
    "Improve readiness for audits, investigations, closeout, and executive reporting.",
  ];

  const industries = [
    "General construction and capital projects",
    "Energy, industrial, and utility operations",
    "Municipal infrastructure and public works",
    "Any regulated or procedure-driven operational environment",
  ];

  const workflow = [
    {
      step: "01",
      title: "Configure the logic",
      body: "Define required controls, prerequisites, approvals, and escalation paths for your workflow.",
    },
    {
      step: "02",
      title: "Execute in the field",
      body: "Supervisors, inspectors, contractors, and authorities interact through role-based workflows built for actual operations.",
    },
    {
      step: "03",
      title: "Verify every transition",
      body: "Work cannot proceed unless the required conditions are met, documented, and authorized.",
    },
    {
      step: "04",
      title: "Retain a defensible record",
      body: "Every gate, instruction, acknowledgment, hold, release, and closeout action is preserved in a structured audit trail.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <span className="text-lg font-semibold tracking-tight">
            VeriSpec Technology Inc.
          </span>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="mailto:contact@verispec.net"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white"
            >
              EMAIL
            </a>
            <a
              href="tel:+12508014100"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black"
            >
              CALL
            </a>
          </div>
        </div>
      </header>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.24em] text-white/70">
                Controlled execution for regulated and procedure-driven operations
              </div>

              <h1 className="text-5xl font-semibold md:text-7xl">
                VeriSpec
              </h1>

              <p className="mt-6 text-xl text-white/70">
                Controlled execution for high consequence work.
              </p>

              <p className="mt-6 text-white/60">
                VeriSpec embeds compliance, verification, and accountability directly into operations across construction, infrastructure, municipalities, and any environment where work must follow defined procedures.
              </p>

              <p className="mt-4 text-white/60">
                A fully configurable operational control layer ensuring work only proceeds when required conditions are met.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="mailto:contact@verispec.net"
                  className="bg-white text-black px-6 py-3 rounded-xl"
                >
                  EMAIL
                </a>
                <a
                  href="tel:+12508014100"
                  className="border border-white/20 px-6 py-3 rounded-xl"
                >
                  CALL
                </a>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <div className="text-white/50 text-sm">Operational overview</div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="border border-white/10 p-4 rounded-xl">
                  <div className="text-white/40 text-xs">Controls</div>
                  <div className="text-2xl mt-1">12</div>
                </div>

                <div className="border border-white/10 p-4 rounded-xl">
                  <div className="text-white/40 text-xs">Approvals</div>
                  <div className="text-2xl mt-1">4</div>
                </div>

                <div className="border border-white/10 p-4 rounded-xl">
                  <div className="text-white/40 text-xs">Status</div>
                  <div className="text-2xl mt-1">Active</div>
                </div>

                <div className="border border-white/10 p-4 rounded-xl">
                  <div className="text-white/40 text-xs">Audit</div>
                  <div className="text-2xl mt-1">Complete</div>
                </div>
              </div>

              <div className="mt-6 text-sm text-white/60">
                Configure - Verify - Authorize - Execute - Record
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-10">
          Why VeriSpec
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((item) => (
            <div key={item.title} className="border border-white/10 p-6 rounded-xl">
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-3 text-white/60">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-10">
          What it delivers
        </h2>

        <div className="grid gap-4">
          {outcomes.map((item) => (
            <div key={item} className="border border-white/10 p-4 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-10">
          Where it fits
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((item) => (
            <div key={item} className="border border-white/10 p-6 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-6">
          Start structuring your operations.
        </h2>

        <div className="flex gap-4">
          <a href="mailto:contact@verispec.net" className="bg-white text-black px-6 py-3 rounded-xl">
            EMAIL
          </a>
          <a href="tel:+12508014100" className="border border-white/20 px-6 py-3 rounded-xl">
            CALL
          </a>
        </div>
      </section>
    </div>
  );
}