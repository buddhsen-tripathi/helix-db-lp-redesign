"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = [
  {
    id: "install",
    label: "Install",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    preview: { title: "Terminal", line: '$ curl -sSL "http...', line2: "$ helix install" },
  },
  {
    id: "build",
    label: "Build",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V18a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 18v-3.5" />
      </svg>
    ),
    preview: { title: "queries.hx", line: "$ helix init --pa..." },
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    preview: { title: "POST localhost:6969", line: "curl -X POST http..." },
  },
]

function TerminalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
      <div className="border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="text-sm text-zinc-400">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function CodeLine({ prompt, children }: { prompt?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      {prompt && <span className="select-none text-zinc-600">&gt;</span>}
      <span className="text-green-400">{children}</span>
    </div>
  )
}

function CodeBlock({ title, lines, caption }: { title: string; lines: { num: number; text: string; color?: string }[]; caption?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
      <div className="border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="text-sm text-zinc-400">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">
        {lines.map((line) => (
          <div key={line.num} className="flex gap-4">
            <span className="w-5 select-none text-right text-zinc-600">{line.num}</span>
            <span className={line.color || "text-zinc-300"}>{line.text}</span>
          </div>
        ))}
      </div>
      {caption && (
        <div className="border-t border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="text-sm text-zinc-500">{caption}</span>
        </div>
      )}
    </div>
  )
}

function InstallContent() {
  return (
    <div className="grid gap-12 lg:gap-16">
      {/* Install HelixDB */}
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <svg className="mb-4 h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <h3 className="text-2xl font-bold text-white">Install HelixDB</h3>
          <p className="mt-3 text-zinc-400">
            Get started with HelixDB in minutes, install the CLI and then initialize a project.
          </p>
        </div>
        <TerminalBlock title="Terminal">
          <CodeLine prompt>{'curl -sSL "https://install.helix-db.com" | bash'}</CodeLine>
          <div className="mt-3 text-zinc-500">This will install the Helix CLI to your machine.</div>
        </TerminalBlock>
      </div>

      {/* Initialize Project */}
      <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
        <TerminalBlock title="Terminal">
          <CodeLine prompt>mkdir helix-project &amp;&amp; cd helix-project</CodeLine>
          <div className="my-3 border-t border-white/5 pt-3 text-zinc-500">Initialize the project</div>
          <CodeLine prompt>helix init</CodeLine>
        </TerminalBlock>
        <div>
          <svg className="mb-4 h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <h3 className="text-2xl font-bold text-white">Initialize Project</h3>
          <p className="mt-3 text-zinc-400">
            Now that the Helix CLI is installed on your machine, initialize a project.
          </p>
        </div>
      </div>
    </div>
  )
}

function BuildContent() {
  return (
    <div className="grid gap-12 lg:gap-16">
      {/* Define Schema */}
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr_1fr]">
        <div>
          <svg className="mb-4 h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V18a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 18v-3.5" />
          </svg>
          <h3 className="text-2xl font-bold text-white">Define Schema</h3>
          <p className="mt-3 text-zinc-400">
            Once you have initialized a project, you can start defining your database schema. Define your nodes and vectors, and then the relationship edges between them.
          </p>
        </div>
        <CodeBlock
          title="schema.hx"
          lines={[
            { num: 1, text: "N::User {", color: "text-[#E8652D]" },
            { num: 2, text: "    name: String", color: "text-green-400" },
            { num: 3, text: "    email: String", color: "text-green-400" },
            { num: 4, text: "}", color: "text-zinc-300" },
            { num: 5, text: "", color: "text-zinc-300" },
            { num: 6, text: "V::Post {", color: "text-[#E8652D]" },
            { num: 7, text: "    title: String", color: "text-green-400" },
            { num: 8, text: "    content: String", color: "text-green-400" },
            { num: 9, text: "}", color: "text-zinc-300" },
          ]}
          caption="Here you can define your node, vector, and edge types."
        />
        <CodeBlock
          title="schema.hx"
          lines={[
            { num: 10, text: "E::Follows {", color: "text-[#E8652D]" },
            { num: 12, text: "    From: User", color: "text-green-400" },
            { num: 13, text: "    To: User", color: "text-green-400" },
            { num: 14, text: "    Properties: { date: String }", color: "text-green-400" },
            { num: 15, text: "}", color: "text-zinc-300" },
            { num: 16, text: "", color: "text-zinc-300" },
            { num: 17, text: "E::Posted {", color: "text-[#E8652D]" },
            { num: 18, text: "    From: User", color: "text-green-400" },
            { num: 19, text: "    ...", color: "text-zinc-500" },
          ]}
          caption="Here you can define your node, vector, and edge types."
        />
      </div>

      {/* Write Queries */}
      <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
        <CodeBlock
          title="queries.hx"
          lines={[
            { num: 1, text: "QUERY similarity(vector: [F64]) =>", color: "text-[#E8652D]" },
            { num: 2, text: "    res <- SearchV(vector, 5)", color: "text-green-400" },
            { num: 3, text: "    RETURN res", color: "text-cyan-400" },
            { num: 4, text: "", color: "text-zinc-300" },
            { num: 5, text: "QUERY getPostsUser(postId: String) =>", color: "text-[#E8652D]" },
            { num: 6, text: "    posts <- N<User>::Out<Posted>", color: "text-green-400" },
            { num: 7, text: "    RETURN posts", color: "text-cyan-400" },
          ]}
          caption="This is where you define how your database can be queried."
        />
        <div>
          <svg className="mb-4 h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          <h3 className="text-2xl font-bold text-white">Write Queries</h3>
          <p className="mt-3 text-zinc-400">
            Once you have initialized a project, you can start defining your database schema and writing queries.
          </p>
        </div>
      </div>
    </div>
  )
}

function DeployContent() {
  return (
    <div className="grid gap-12 lg:gap-16">
      {/* Deploy Project */}
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <svg className="mb-4 h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
          </svg>
          <h3 className="text-2xl font-bold text-white">Deploy Project</h3>
          <p className="mt-3 text-zinc-400">
            Once you have built your project, you can deploy it locally.
          </p>
        </div>
        <TerminalBlock title="Terminal">
          <CodeLine prompt>helix push dev</CodeLine>
          <div className="mt-3 text-zinc-500">
            {"This will deploy the `dev` project in your helix.toml file locally."}
          </div>
        </TerminalBlock>
      </div>

      {/* Call API */}
      <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
          <div className="border-b border-white/10 bg-white/5 px-4 py-2.5">
            <span className="text-sm text-zinc-400">POST localhost:6969/get_posts</span>
          </div>
          <div className="p-4 font-mono text-sm leading-relaxed">
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">1</span><span className="text-zinc-300">{"{"}</span></div>
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">2</span><span className="text-cyan-400">{"    \"id\": \"550e8400-e29b-41d4-a716-446655440000\""}</span></div>
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">3</span><span className="text-zinc-300">{"}"}</span></div>
          </div>
          <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5">
            <span className="text-sm text-zinc-500">Returns:</span>
          </div>
          <div className="p-4 font-mono text-sm leading-relaxed">
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">1</span><span className="text-zinc-300">{"{"}</span></div>
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">2</span><span className="text-cyan-400">{"    \"posts\": ["}</span></div>
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">3</span><span className="text-[#E8652D]">{"        {\"id\": \"123\", \"content\": \"Hello world!\", \"author\": \"alice\"},"}</span></div>
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">4</span><span className="text-[#E8652D]">{"        {\"id\": \"456\", \"content\": \"Another post\", \"author\": \"bob\"}"}</span></div>
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">5</span><span className="text-cyan-400">{"    ]"}</span></div>
            <div className="flex gap-4"><span className="w-5 select-none text-right text-zinc-600">6</span><span className="text-zinc-300">{"}"}</span></div>
          </div>
        </div>
        <div>
          <svg className="mb-4 h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-3L16.5 18m0 0L12 13.5m4.5 4.5V6" />
          </svg>
          <h3 className="text-2xl font-bold text-white">Call API</h3>
          <p className="mt-3 text-zinc-400">
            Once you have deployed your project, you can query your database by calling the corresponding API endpoints.
          </p>
        </div>
      </div>
    </div>
  )
}

const tabContent: Record<string, React.ReactNode> = {
  install: <InstallContent />,
  build: <BuildContent />,
  deploy: <DeployContent />,
}

export default function GettingStarted() {
  const [activeTab, setActiveTab] = useState("install")

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Getting Started</h2>
        <a
          href="#"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 md:inline-flex"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Install Now
        </a>
      </div>

      {/* Tab bar */}
      <div className="mt-10 grid grid-cols-3 gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
                isActive
                  ? "border-white/20 bg-white/[0.08]"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={cn("mb-3 text-zinc-400 transition-colors", isActive && "text-white")}>
                    {tab.icon}
                  </div>
                  <span className={cn(
                    "text-lg font-semibold transition-colors",
                    isActive ? "text-white" : "text-zinc-500"
                  )}>
                    {tab.label}
                  </span>
                </div>

                {/* Mini preview */}
                <div className={cn(
                  "hidden flex-shrink-0 overflow-hidden rounded-lg border bg-black/80 text-xs md:block",
                  isActive ? "border-white/15" : "border-white/5"
                )}>
                  <div className="border-b border-white/10 bg-white/5 px-3 py-1">
                    <span className="text-zinc-500">{tab.preview.title}</span>
                  </div>
                  <div className="px-3 py-2 font-mono">
                    <div className="flex gap-2 text-zinc-600">
                      <span>&gt;</span>
                      <span className={cn("truncate", isActive ? "text-green-400/70" : "text-zinc-600")}>
                        {tab.preview.line}
                      </span>
                    </div>
                    {tab.preview.line2 && (
                      <div className="flex gap-2 text-zinc-600">
                        <span>&gt;</span>
                        <span className={cn("truncate", isActive ? "text-green-400/70" : "text-zinc-600")}>
                          {tab.preview.line2}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Content area */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        {tabContent[activeTab]}
      </div>
    </section>
  )
}
