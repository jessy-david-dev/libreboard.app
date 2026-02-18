"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:justify-center md:py-20">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a40_1px,transparent_1px),linear-gradient(to_bottom,#27272a40_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem]" />
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-transparent to-zinc-950" />

      <div className="relative mx-auto w-full max-w-3xl text-center pt-6">
        {/* Logo */}
        <div className="mb-10 flex items-center justify-center gap-3 sm:mb-14">
          <Image
            src="/libreboard.svg"
            alt="Libreboard logo"
            width={36}
            height={36}
            className="h-8 w-8 sm:h-9 sm:w-9"
          />
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Libreboard
          </span>
        </div>

        {/* Badge */}
        <div className="group mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-emerald-600 hover:shadow-md sm:mb-8 sm:px-4 sm:py-1.5 sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="bg-linear-to-r from-zinc-300 via-emerald-400 to-zinc-300 bg-clip-text bg-[size:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] group-hover:text-transparent">
            Open source &amp; free
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Project management,{" "}
          <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            simple and powerful
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-400 sm:mt-6 sm:max-w-lg sm:text-base sm:leading-7 md:text-lg">
          Libreboard is the open source alternative for teams who want a fast,
          intuitive, and free project management tool. No limits, no hidden
          fees.
        </p>

        {/* Coming soon notice */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 backdrop-blur-sm sm:mt-10 sm:gap-3 sm:px-6 sm:py-4">
          <div className="hidden h-px w-8 bg-linear-to-r from-transparent to-emerald-500 sm:block" />
          <span className="text-xs font-medium tracking-wide text-zinc-300 sm:text-sm">
            Coming soon — Stay tuned for the launch
          </span>
          <div className="hidden h-px w-8 bg-linear-to-l from-transparent to-emerald-500 sm:block" />
        </div>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
          <a
            href="https://github.com/jessy-david-dev/libreboard.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800 sm:w-auto"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Kanban Mockup */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 rounded-2xl bg-linear-to-r from-emerald-900/30 via-cyan-900/30 to-emerald-900/30 opacity-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
              {/* Window controls */}
              <div className="flex items-center gap-1.5 border-b border-zinc-800 px-3 py-2 sm:gap-2 sm:px-4 sm:py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
                <span className="ml-2 text-xs text-zinc-500 sm:ml-4 sm:text-sm">
                  Libreboard &middot; My Project
                </span>
              </div>

              {/* Kanban columns — stack on mobile, 2 cols on sm, 3 cols on md+ */}
              <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 md:grid-cols-3">
                {/* To Do */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-zinc-400 sm:h-2.5 sm:w-2.5" />
                      <span className="text-xs font-medium text-zinc-300 sm:text-sm">
                        To Do
                      </span>
                    </div>
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400 sm:px-2 sm:text-xs">
                      3
                    </span>
                  </div>
                  <MockCard
                    id="LB-12"
                    title="Setup CI/CD pipeline"
                    priority="P2"
                    priorityColor="text-amber-400 bg-amber-950"
                    avatar="bg-violet-500"
                  />
                  <MockCard
                    id="LB-15"
                    title="Add dark mode support"
                    priority="P3"
                    priorityColor="text-blue-400 bg-blue-950"
                    avatar="bg-emerald-500"
                  />
                  <div className="hidden sm:block">
                    <MockCard
                      id="LB-18"
                      title="Write API documentation"
                      priority="P3"
                      priorityColor="text-blue-400 bg-blue-950"
                    />
                  </div>
                </div>

                {/* In Progress */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500 sm:h-2.5 sm:w-2.5" />
                      <span className="text-xs font-medium text-zinc-300 sm:text-sm">
                        In Progress
                      </span>
                    </div>
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400 sm:px-2 sm:text-xs">
                      2
                    </span>
                  </div>
                  <MockCard
                    id="LB-09"
                    title="Implement user auth"
                    priority="P1"
                    priorityColor="text-red-400 bg-red-950"
                    avatar="bg-cyan-500"
                  />
                  <MockCard
                    id="LB-11"
                    title="Design landing page"
                    priority="P2"
                    priorityColor="text-amber-400 bg-amber-950"
                    avatar="bg-violet-500"
                  />
                </div>

                {/* Done — hidden on mobile, visible from sm (spans full on sm, normal on md+) */}
                <div className="hidden space-y-2 sm:block sm:col-span-2 sm:space-y-3 md:col-span-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 sm:h-2.5 sm:w-2.5" />
                      <span className="text-xs font-medium text-zinc-300 sm:text-sm">
                        Done
                      </span>
                    </div>
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400 sm:px-2 sm:text-xs">
                      2
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-1">
                    <MockCard
                      id="LB-03"
                      title="Project setup & config"
                      done
                      avatar="bg-emerald-500"
                    />
                    <MockCard
                      id="LB-05"
                      title="Database schema design"
                      done
                      avatar="bg-cyan-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-12 pb-4 text-center text-[10px] text-zinc-500 sm:mt-16 sm:pb-6 sm:text-xs">
        &copy; {new Date().getFullYear()} Libreboard. All rights reserved.
        <span className="mx-1.5 sm:mx-2">&middot;</span>
        Open source project under MIT license
      </footer>
    </main>
  );
}

function MockCard({
  id,
  title,
  priority,
  priorityColor,
  avatar,
  done,
}: {
  id: string;
  title: string;
  priority?: string;
  priorityColor?: string;
  avatar?: string;
  done?: boolean;
}) {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-2.5 sm:p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] text-zinc-400 sm:text-xs">{id}</p>
          <p
            className={`mt-0.5 text-xs font-medium sm:mt-1 sm:text-sm ${done ? "text-zinc-500 line-through" : "text-zinc-200"}`}
          >
            {title}
          </p>
        </div>
        {avatar && (
          <div
            className={`h-5 w-5 shrink-0 rounded-full sm:h-6 sm:w-6 ${avatar}`}
          />
        )}
      </div>
      {priority && priorityColor && (
        <div className="mt-1.5 sm:mt-2">
          <span
            className={`inline-flex rounded px-1 py-0.5 text-[10px] font-medium sm:px-1.5 sm:text-xs ${priorityColor}`}
          >
            {priority}
          </span>
        </div>
      )}
    </div>
  );
}
