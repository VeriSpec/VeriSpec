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
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="VeriSpec Technology Inc."
              className="h-7 w-auto object-contain"
            />
            <span className="text-lg font-semibold tracking-tight">
              VeriSpec Technology Inc.
            </span>
          </div>

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
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top, rgba(255,255,255,0.14), transparent 34%)",
          }}
        />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70">
                Controlled execution for regulated and procedure-driven operations
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                VeriSpec
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-white/72 md:text-2xl md:leading-9">
                Controlled execution for high consequence work.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/58 md:text-lg">
                VeriSpec embeds compliance, verification, and accountability directly
                into operations across construction, infrastructure, municipalities,
                and any environment where work must follow defined procedures.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/58 md:text-lg">
                A fully configurable operational control layer designed to adapt to
                any workflow where requirements, approvals, and traceability matter.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
                VeriSpec sits between planning and execution, ensuring work only
                proceeds when required conditions are met.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:contact@verispec.net"
                  className="rounded-2xl bg-white px-6 py-4 text-center text-sm font-medium text-black transition hover:opacity-90"
                >
                  EMAIL
                </a>
                <a
                  href="tel:+12508014100"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-center text-sm font-medium text-white transition hover:bg-white/10"
                >
                  CALL
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/50">Operational view</div>
                      <div className="mt-1 text-lg font-medium">
                        Controlled workflow overview
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      Live status
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                        Controls
                      </div>
                      <div className="mt-2 text-2xl font-semibold">12</div>
                      <div className="mt-1 text-sm text-white/58">
                        configured requirements
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                        Approvals
                      </div>
                      <div className="mt-2 text-2xl font-semibold">4</div>
                      <div className="mt-1 text-sm text-white/58">
                        required decision points
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                        Status
                      </div>
                      <div className="mt-2 text-2xl font-semibold">Active</div>
                      <div className="mt-1 text-sm text-white/58">
                        workflow under control
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                        Audit Trail
                      </div>
                      <div className="mt-2 text-2xl font-semibold">Complete</div>
                      <div className="mt-1 text-sm text-white/58">
                        every transition recorded
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm text-white/55">Platform summary</div>
                    <p className="mt-2 text-sm leading-6 text-white/58">
                      VeriSpec gives teams a clear operational view of requirements,
                      approvals, workflow status, and traceability without relying on
                      disconnected systems.
                    </p>
                    <div className="mt-3 text-sm font-medium tracking-wide text-white/75">
                      Configure - Verify - Authorize - Execute - Record
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm leading-7 text-white/52">
              VeriSpec is an operational control layer that sits between planning and
              execution, ensuring work only proceeds when required conditions are met.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.22em] text-white/45">
              Why VeriSpec
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              High consequence work breaks down when control lives in disconnected
              systems.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">
                What it delivers
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                From field uncertainty to controlled execution.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                VeriSpec is not another passive recordkeeping layer. It is an
                operational system built to influence what happens before work
                proceeds.
              </p>
            </div>

            <div className="grid gap-4">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-5 text-base leading-7 text-white/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.22em] text-white/45">
              Platform flow
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Built for the way controlled work actually happens.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/58">
            Define operational logic once, enforce it consistently, and preserve the
            entire chain of execution.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm text-white/40">{item.step}</div>
              <h3 className="mt-3 text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">
                Where it fits
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Built for organizations that cannot afford ambiguity.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-6"
                >
                  <div className="text-lg font-medium">{industry}</div>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Deploy structured control, verification, and accountability across
                    critical operational workflows.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">
                Founder perspective
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Created from field reality, not software theory.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                VeriSpec was conceived around a simple problem: critical work across
                construction, municipal infrastructure, and regulated operations is
                still managed through fragmented communication, inconsistent
                verification, and systems that document failure after the fact instead
                of preventing it in real time.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/66">
                The platform is being built to give owners, municipalities,
                operators, contractors, inspectors, and authorities a more controlled
                way to execute work where compliance, safety, quality, cost, schedule,
                and operational continuity all matter at once.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/66">
                Built from real-world field experience in high consequence
                construction and infrastructure environments.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
              <div className="text-sm text-white/50">Core thesis</div>
              <div className="mt-3 text-2xl font-semibold leading-tight">
                The future of compliance is not retrospective documentation.
              </div>
              <div className="mt-2 text-2xl font-semibold leading-tight text-white/80">
                It is controlled execution.
              </div>
              <div className="mt-6 h-px bg-white/10" />
              <div className="mt-6 text-sm leading-7 text-white/62">
                VeriSpec positions compliance, authorization, and operational logic as
                an active system layer rather than a disconnected administrative burden.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 pt-20 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 px-8 py-12 md:px-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">
                Contact
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Start structuring your operations.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                For contractors, owners, municipalities, operators, and teams working
                within regulated or procedure-driven environments.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@verispec.net"
                className="rounded-2xl bg-white px-6 py-4 text-center text-sm font-medium text-black"
              >
                EMAIL
              </a>
              <a
                href="tel:+12508014100"
                className="rounded-2xl border border-white/20 px-6 py-4 text-center text-sm font-medium text-white"
              >
                CALL
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-12 md:px-10">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-6 text-xs leading-6 text-white/45">
          <p>
            Disclaimer: Information presented on this website is provided for
            general informational purposes only and does not constitute legal,
            engineering, regulatory, safety, compliance, or professional advice.
            Any workflows, controls, approvals, or procedures referenced on this
            site are illustrative only and must be independently configured,
            verified, and validated by each organization to suit its own legal,
            operational, contractual, and regulatory requirements.
          </p>
          <p className="mt-4">
            VeriSpec Technology Inc. makes no representation that any particular
            configuration, use case, or implementation will satisfy all laws,
            codes, standards, permits, internal policies, or project-specific
            obligations. Use of any platform, software, or information described
            on this site remains the sole responsibility of the user organization
            and its authorized personnel.
          </p>
        </div>
      </footer>
    </div>
  );
}