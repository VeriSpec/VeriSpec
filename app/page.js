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
      <header className="border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <span className="text-lg font-semibold tracking-tight">
            VeriSpec Technology Inc.
          </span>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="mailto:contact@verispec.net"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              EMAIL
            </a>
            <a
              href="tel:+12508014100"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
            >
              CALL
            </a>
          </div>
        </div>
     