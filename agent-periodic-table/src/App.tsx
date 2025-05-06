// React and ReactDOM are available globally (from the CDN scripts)

function AgentSystemPeriodicTable() {
  const categories = [
    { id: 'arch', name: 'Architecture', color: '#4285F4' },
    { id: 'patt', name: 'Pattern', color: '#34A853' },
    { id: 'comp', name: 'Component', color: '#FBBC05' },
    { id: 'infra', name: 'Infrastructure', color: '#EA4335' },
    { id: 'mem', name: 'Memory', color: '#9C27B0' },
    { id: 'comm', name: 'Communication', color: '#00ACC1' },
    { id: 'scale', name: 'Scale', color: '#FF6D00' },
  ];

  const elements = [
    { symbol: 'Sa', name: 'Single Agent', category: 'arch', atomic: 1, description: 'Simplest form with one agent handling all tasks' },
    { symbol: 'Ma', name: 'Multi-Agent', category: 'arch', atomic: 2, description: 'Multiple specialized agents coordinated by meta-agent' },
    { symbol: 'Sq', name: 'Sequential', category: 'patt', atomic: 3, description: 'Linear chain of agents passing results forward' },
    { symbol: 'Rt', name: 'Router', category: 'patt', atomic: 4, description: 'Central agent routes tasks to specialized agents' },
    { symbol: 'Pl', name: 'Parallel', category: 'patt', atomic: 5, description: 'Multiple agents work simultaneously on subtasks' },
    { symbol: 'Gn', name: 'Generator', category: 'patt', atomic: 6, description: 'Complex workflow with specialized processing stages' },
    { symbol: 'Nw', name: 'Network', category: 'patt', atomic: 7, description: 'Bidirectional connections between specialized agents' },
    { symbol: 'Au', name: 'Autonomous', category: 'patt', atomic: 8, description: 'Independent agents with minimal supervision' },
    { symbol: 'Ma', name: 'Meta-Agent', category: 'comp', atomic: 9, description: 'Orchestrates and coordinates other agents' },
    { symbol: 'Da', name: 'Data Agent', category: 'comp', atomic: 10, description: 'Specialized for data retrieval and processing' },
    { symbol: 'Sa', name: 'Search Agent', category: 'comp', atomic: 11, description: 'Performs search operations across sources' },
    { symbol: 'Dv', name: 'Divisor', category: 'comp', atomic: 12, description: 'Breaks tasks into subtasks for distribution' },
    { symbol: 'Cd', name: 'Coding Agent', category: 'comp', atomic: 13, description: 'Specialized for code generation and analysis' },
    { symbol: 'Db', name: 'Debugging Agent', category: 'comp', atomic: 14, description: 'Identifies and fixes issues in processes' },
    { symbol: 'Mc', name: 'MCP Server', category: 'infra', atomic: 15, description: 'Model Control Plane for agent operations' },
    { symbol: 'Qd', name: 'Quadrant', category: 'infra', atomic: 16, description: 'Integration for enhanced capabilities' },
    { symbol: 'Kg', name: 'Kagi', category: 'infra', atomic: 17, description: 'Search and knowledge integration' },
    { symbol: 'Sm', name: 'Short-term', category: 'mem', atomic: 18, description: 'Temporary storage for active tasks' },
    { symbol: 'Lm', name: 'Long-term', category: 'mem', atomic: 19, description: 'Persistent storage for knowledge retention' },
    { symbol: 'Dm', name: 'Distributed', category: 'mem', atomic: 20, description: 'Memory shared across multiple agents' },
    { symbol: 'Sp', name: 'Simple Passing', category: 'comm', atomic: 21, description: 'Direct message passing between agents' },
    { symbol: 'Bd', name: 'Bidirectional', category: 'comm', atomic: 22, description: 'Two-way communication channels' },
    { symbol: 'Fb', name: 'Feedback Loop', category: 'comm', atomic: 23, description: 'Iterative communication with corrections' },
    { symbol: 'Br', name: 'Broadcast', category: 'comm', atomic: 24, description: 'One-to-many communication' },
    { symbol: 'Si', name: 'Simple Task', category: 'scale', atomic: 25, description: 'Single-purpose applications' },
    { symbol: 'Md', name: 'Medium Complexity', category: 'scale', atomic: 26, description: 'Multi-step processes with clear definitions' },
    { symbol: 'Cx', name: 'Complex System', category: 'scale', atomic: 27, description: 'Enterprise-level applications with many components' },
    { symbol: 'Sg', name: 'Self-governing', category: 'scale', atomic: 28, description: 'Autonomous systems with minimal supervision' }
  ];

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h1 className="text-2xl font-bold mb-6">AI Agent System Periodic Table</h1>
      {/* Legend */}
      <div className="flex flex-wrap justify-center mb-6 gap-2">
        {categories.map(c => (
          <div key={c.id} className="flex items-center px-3 py-1 rounded-md" style={{ backgroundColor: `${c.color}30`, border: `1px solid ${c.color}` }}>
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: c.color }}></div>
            <span className="text-sm font-medium">{c.name}</span>
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 w-full max-w-6xl">
        {elements.map(el => {
          const cat = categories.find(x => x.id === el.category)!;
          return (
            <div key={el.atomic} className="flex flex-col p-3 rounded-lg shadow-md transition-transform hover:scale-105" style={{ backgroundColor: `${cat.color}15`, border: `1px solid ${cat.color}` }}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">{el.atomic}</span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }}></div>
              </div>
              <div className="text-3xl font-bold text-center mb-1">{el.symbol}</div>
              <div className="text-sm font-medium text-center mb-2">{el.name}</div>
              <div className="text-xs text-gray-600 mt-auto">{el.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// mount into root
ReactDOM.render(<AgentSystemPeriodicTable />, document.getElementById('root'));
