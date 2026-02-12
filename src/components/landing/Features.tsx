function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
      {children}
    </div>
  )
}

function CodeSnippet() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black font-mono text-[13px] leading-loose">
      <div className="p-4">
        <div>
          <span className="text-[#E8652D]">QUERY</span>{" "}
          <span className="text-green-400">findSimilarFriends</span>
          <span className="text-zinc-400">(userID: String, query</span>
        </div>
        <div className="mt-1">
          <span className="text-zinc-400">similar &lt;- </span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-400">SearchV</span>
          <span className="text-zinc-400"> (queryVec, topK: 5)</span>
        </div>
        <div>
          <span className="text-zinc-400">friends &lt;- </span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-400">similar::Out&lt;Friends&gt;</span>
        </div>
        <div className="mt-1">
          <span className="text-[#E8652D]">RETURN</span>{" "}
          <span className="text-zinc-400">{"friends::{ ID, name, similarityScore }"}</span>
        </div>
      </div>
    </div>
  )
}

function GraphVisualization() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="260" height="220" viewBox="0 0 260 220" fill="none" className="opacity-50">
        {/* Background network grid */}
        <line x1="30" y1="30" x2="230" y2="30" stroke="#333" strokeWidth="0.5" />
        <line x1="30" y1="70" x2="230" y2="70" stroke="#333" strokeWidth="0.5" />
        <line x1="30" y1="110" x2="230" y2="110" stroke="#333" strokeWidth="0.5" />
        <line x1="30" y1="150" x2="230" y2="150" stroke="#333" strokeWidth="0.5" />
        <line x1="30" y1="190" x2="230" y2="190" stroke="#333" strokeWidth="0.5" />
        <line x1="30" y1="30" x2="30" y2="190" stroke="#333" strokeWidth="0.5" />
        <line x1="80" y1="30" x2="80" y2="190" stroke="#333" strokeWidth="0.5" />
        <line x1="130" y1="30" x2="130" y2="190" stroke="#333" strokeWidth="0.5" />
        <line x1="180" y1="30" x2="180" y2="190" stroke="#333" strokeWidth="0.5" />
        <line x1="230" y1="30" x2="230" y2="190" stroke="#333" strokeWidth="0.5" />
        {/* Diagonal connections */}
        <line x1="130" y1="110" x2="80" y2="70" stroke="#555" strokeWidth="1" />
        <line x1="130" y1="110" x2="180" y2="70" stroke="#555" strokeWidth="1" />
        <line x1="130" y1="110" x2="80" y2="150" stroke="#555" strokeWidth="1" />
        <line x1="130" y1="110" x2="180" y2="150" stroke="#555" strokeWidth="1" />
        <line x1="80" y1="70" x2="180" y2="70" stroke="#555" strokeWidth="1" strokeDasharray="4" />
        <line x1="80" y1="150" x2="180" y2="150" stroke="#555" strokeWidth="1" strokeDasharray="4" />
        {/* Highlighted connection */}
        <line x1="130" y1="110" x2="180" y2="70" stroke="#E8652D" strokeWidth="2" opacity="0.7" />
        {/* Background small nodes */}
        <rect x="27" y="27" width="6" height="6" rx="1" fill="#555" opacity="0.5" />
        <rect x="77" y="27" width="6" height="6" rx="1" fill="#555" opacity="0.5" />
        <rect x="177" y="27" width="6" height="6" rx="1" fill="#555" opacity="0.5" />
        <rect x="227" y="27" width="6" height="6" rx="1" fill="#555" opacity="0.5" />
        <rect x="27" y="187" width="6" height="6" rx="1" fill="#555" opacity="0.4" />
        <rect x="227" y="187" width="6" height="6" rx="1" fill="#555" opacity="0.4" />
        <rect x="27" y="107" width="6" height="6" rx="1" fill="#555" opacity="0.4" />
        <rect x="227" y="107" width="6" height="6" rx="1" fill="#555" opacity="0.4" />
        {/* Center vector entry (square, larger) */}
        <rect x="118" y="98" width="24" height="24" rx="4" fill="#E8652D" opacity="0.9" stroke="#E8652D" strokeWidth="2" />
        {/* Connected nodes (circles) */}
        <circle cx="80" cy="70" r="10" fill="#E8652D" opacity="0.85" />
        <circle cx="180" cy="70" r="10" fill="#E8652D" opacity="0.85" />
        <circle cx="80" cy="150" r="8" fill="#E8652D" opacity="0.5" />
        <circle cx="180" cy="150" r="8" fill="#E8652D" opacity="0.5" />
      </svg>
      <div className="flex items-center gap-5 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded-sm bg-[#E8652D]" />
          Vector Entry
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded-full bg-[#E8652D]" />
          Connected Node
        </div>
      </div>
    </div>
  )
}

function TypeCheckerTerminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black font-mono text-xs">
      <div className="border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="text-zinc-400">Type Checker</span>
      </div>
      <div className="p-4 leading-loose">
        <div className="flex gap-3">
          <span className="text-zinc-600">&gt;</span>
          <span className="text-green-400">helix check</span>
        </div>
        <div className="mt-1">
          <span className="text-red-400">&#10005; Checking Helix queries</span>
        </div>
        <div className="whitespace-nowrap text-red-400/80">
          {"error: 'Know' is not a valid edge ty..."}
        </div>
        <div className="whitespace-nowrap text-zinc-500">
          {"        |--queries.hx: 16:38"}
        </div>
        <div className="whitespace-nowrap text-zinc-500">
          {"16      |   user_nodes <- N<User> (nod..."}
        </div>
        <div className="whitespace-nowrap text-cyan-400">
          {"  ---> help: check the schema for vali..."}
        </div>
        <div className="mt-1 text-zinc-600">...</div>
      </div>
    </div>
  )
}

function BuildTerminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black font-mono text-xs">
      <div className="border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="text-zinc-400">&nbsp;</span>
      </div>
      <div className="p-4 leading-loose text-green-400/80">
        <div className="whitespace-nowrap">--local --path helixdb-cfg</div>
        <div className="whitespace-nowrap">helix queriesNodes(Some(&quot;User&quot;))</div>
        <div>compiled 2 query files</div>
        <div>transpiled queries</div>
        <div>wrote queries file</div>
        <div>built Helix</div>
        <div>started Helix instance</div>
        <div className="whitespace-nowrap text-cyan-400">ID: aafd3dc7-21cb-4073-b330-aec71e48b623</div>
        <div className="text-zinc-500">)</div>
        <div className="mt-1 text-zinc-400">endpoints:</div>
        <div className="text-zinc-400">  user</div>
      </div>
    </div>
  )
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
      <span className="text-xl font-bold text-[#E8652D]">{value}</span>
      <span className="mt-1 text-xs text-zinc-500">{label}</span>
    </div>
  )
}

function PerfBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
      <span className="text-xl font-bold text-cyan-400">{value}</span>
      <span className="mt-1 text-center text-xs text-zinc-500">{label}</span>
    </div>
  )
}

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
      {/* Top row: 2 large cards */}
      <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
        {/* Hybrid Query Traversals */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-4">
            <IconBadge>
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
            </IconBadge>
            <h3 className="text-2xl font-bold text-white">Hybrid Query Traversals</h3>
          </div>
          <p className="mt-6 max-w-md text-zinc-400">
            Seamlessly combine vector similarity search with graph traversals in a single, powerful query. No more complex joins or multiple database calls.
          </p>
          <div className="mt-8 grid items-end gap-6 md:grid-cols-[1fr_1fr]">
            <CodeSnippet />
            <GraphVisualization />
          </div>
        </div>

        {/* Type-Safety – clips terminals on right */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-4">
            <IconBadge>
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </IconBadge>
            <h3 className="text-2xl font-bold text-white">Type-Safety</h3>
          </div>
          <p className="mt-6 text-zinc-400">
            Advanced static analysis provides real-time feedback, autocomplete, and error detection. Write queries with confidence.
          </p>
          <div className="mt-8 space-y-4">
            <TypeCheckerTerminal />
            <BuildTerminal />
          </div>
        </div>
      </div>

      {/* Bottom row: 2 smaller cards */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {/* Lower Costs */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-4">
            <IconBadge>
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </IconBadge>
            <h3 className="text-2xl font-bold text-white">Lower Costs</h3>
          </div>
          <p className="mt-6 text-zinc-400">
            Eliminate the complexity and cost of maintaining separate vector and graph databases. One unified solution.
          </p>
          <div className="mt-8 flex gap-3">
            <StatBadge value="1" label="Database" />
            <StatBadge value="1" label="Cloud" />
            <StatBadge value="50%" label="Less Data" />
          </div>
        </div>

        {/* High Speeds */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-4">
            <IconBadge>
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </IconBadge>
            <h3 className="text-2xl font-bold text-white">High Speeds</h3>
          </div>
          <p className="mt-6 text-zinc-400">
            Optimized for both vector similarity and graph traversal workloads with industry-leading performance metrics.
          </p>
          <div className="mt-8 flex gap-3">
            <PerfBadge value="~2ms" label="Vector Similarity Search" />
            <PerfBadge value="Sub 1ms" label="Graph Traversals" />
          </div>
        </div>
      </div>
    </section>
  )
}
