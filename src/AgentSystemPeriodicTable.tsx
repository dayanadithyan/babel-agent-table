import React from 'react';

const AgentSystemPeriodicTable = () => {
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
    // Architecture Row
    { symbol: 'Sa', name: 'Single Agent', category: 'arch', atomic: 1, description: 'Simplest form with one agent handling all tasks' },
    { symbol: 'Ma', name: 'Multi-Agent', category: 'arch', atomic: 2, description: 'Multiple specialized agents coordinated by meta-agent' },
    
    // Pattern Row
    { symbol: 'Sq', name: 'Sequential', category: 'patt', atomic: 3, description: 'Linear chain of agents passing results forward' },
    { symbol: 'Rt', name: 'Router', category: 'patt', atomic: 4, description: 'Central agent routes tasks to specialized agents' },
    { symbol: 'Pl', name: 'Parallel', category: 'patt', atomic: 5, description: 'Multiple agents work simultaneously on subtasks' },
    { symbol: 'Gn', name: 'Generator', category: 'patt', atomic: 6, description: 'Complex workflow with specialized processing stages' },
    { symbol: 'Nw', name: 'Network', category: 'patt', atomic: 7, description: 'Bidirectional connections between specialized agents' },
    { symbol: 'Au', name: 'Autonomous', category: 'patt', atomic: 8, description: 'Independent agents with minimal supervision' },
    
    // Component Row
    { symbol: 'Ma', name: 'Meta-Agent', category: 'comp', atomic: 9, description: 'Orchestrates and coordinates other agents' },
    { symbol: 'Da', name: 'Data Agent', category: 'comp', atomic: 10, description: 'Specialized for data retrieval and processing' },
    { symbol: 'Sa', name: 'Search Agent', category: 'comp', atomic: 11, description: 'Performs search operations across sources' },
    { symbol: 'Dv', name: 'Divisor', category: 'comp', atomic: 12, description: 'Breaks tasks into subtasks for distribution' },
    { symbol: 'Cd', name: 'Coding Agent', category: 'comp', atomic: 13, description: 'Specialized for code generation and analysis' },
    { symbol: 'Db', name: 'Debugging Agent', category: 'comp', atomic: 14, description: 'Identifies and fixes issues in processes' },
    
    // Infrastructure Row
    { symbol: 'Mc', name: 'MCP Server', category: 'infra', atomic: 15, description: 'Model Control Plane for agent operations' },
    { symbol: 'Qd', name: 'Quadrant', category: 'infra', atomic: 16, description: 'Integration for enhanced capabilities' },
    { symbol: 'Kg', name: 'Kagi', category: 'infra', atomic: 17, description: 'Search and knowledge integration' },
    
    // Memory Row
    { symbol: 'Sm', name: 'Short-term', category: 'mem', atomic: 18, description: 'Temporary storage for active tasks' },
    { symbol: 'Lm', name: 'Long-term', category: 'mem', atomic: 19, description: 'Persistent storage for knowledge retention' },
    { symbol: 'Dm', name: 'Distributed', category: 'mem', atomic: 20, description: 'Memory shared across multiple agents' },
    
    // Communication Row
    { symbol: 'Sp', name: 'Simple Passing', category: 'comm', atomic: 21, description: 'Direct message passing between agents' },
    { symbol: 'Bd', name: 'Bidirectional', category: 'comm', atomic: 22, description: 'Two-way communication channels' },
    { symbol: 'Fb', name: 'Feedback Loop', category: 'comm', atomic: 23, description: 'Iterative communication with corrections' },
    { symbol: 'Br', name: 'Broadcast', category: 'comm', atomic: 24, description: 'One-to-many communication' },
    
    // Scale Row
    { symbol: 'Si', name: 'Simple Task', category: 'scale', atomic: 25, description: 'Single-purpose applications' },
    { symbol: 'Md', name: 'Medium Complexity', category: 'scale', atomic: 26, description: 'Multi-step processes with clear definitions' },
    { symbol: 'Cx', name: 'Complex System', category: 'scale', atomic: 27, description: 'Enterprise-level applications with many components' },
    { symbol: 'Sg', name: 'Self-governing', category: 'scale', atomic: 28, description: 'Autonomous systems with minimal supervision' }
  ];

  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">AI Agent System Periodic Table</h1>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center mb-6 gap-2">
        {categories.map(category => (
          <div 
            key={category.id} 
            className="flex items-center px-3 py-1 rounded-md" 
            style={{ backgroundColor: category.color + '30', border: `1px solid ${category.color}` }}
          >
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }}></div>
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
      
      {/* Table */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 w-full max-w-6xl">
        {elements.map(element => {
          const category = categories.find(c => c.id === element.category);
          return (
            <div 
              key={element.atomic}
              className="flex flex-col p-3 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: category.color + '15', border: `1px solid ${category.color}` }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">{element.atomic}</span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }}></div>
              </div>
              <div className="text-3xl font-bold text-center mb-1">{element.symbol}</div>
              <div className="text-sm font-medium text-center mb-2">{element.name}</div>
              <div className="text-xs text-gray-600 mt-auto">{element.description}</div>
            </div>
          );
        })}
      </div>
      
      {/* Comparison Matrix */}
      <div className="mt-10 w-full max-w-6xl overflow-auto">
        <h2 className="text-xl font-bold mb-4">Comparison Matrix</h2>
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-center">Complexity</th>
              <th className="p-3 text-center">Scalability</th>
              <th className="p-3 text-center">Communication</th>
              <th className="p-3 text-center">Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Single Agent</td>
              <td className="p-3 text-center">Low</td>
              <td className="p-3 text-center">Limited</td>
              <td className="p-3 text-center">Simple</td>
              <td className="p-3 text-center">Focused tasks with clear inputs/outputs</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Sequential</td>
              <td className="p-3 text-center">Medium</td>
              <td className="p-3 text-center">Good</td>
              <td className="p-3 text-center">Linear</td>
              <td className="p-3 text-center">Multi-step processes</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Router</td>
              <td className="p-3 text-center">Medium</td>
              <td className="p-3 text-center">Very Good</td>
              <td className="p-3 text-center">Hub-spoke</td>
              <td className="p-3 text-center">Domain-specific applications</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Parallel</td>
              <td className="p-3 text-center">High</td>
              <td className="p-3 text-center">Excellent</td>
              <td className="p-3 text-center">Multi-channel</td>
              <td className="p-3 text-center">Tasks requiring concurrent processing</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Generator</td>
              <td className="p-3 text-center">Very High</td>
              <td className="p-3 text-center">Good</td>
              <td className="p-3 text-center">Complex</td>
              <td className="p-3 text-center">Creation workflows</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Network</td>
              <td className="p-3 text-center">High</td>
              <td className="p-3 text-center">Very Good</td>
              <td className="p-3 text-center">Bidirectional</td>
              <td className="p-3 text-center">Collaborative specialized functions</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">Autonomous</td>
              <td className="p-3 text-center">Very High</td>
              <td className="p-3 text-center">Excellent</td>
              <td className="p-3 text-center">Peer-to-peer</td>
              <td className="p-3 text-center">Self-organizing systems</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Decision Tree */}
      <div className="mt-10 w-full max-w-6xl">
        <h2 className="text-xl font-bold mb-4">Selection Guide</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-medium">Simple task with clear requirements?</p>
              <div className="ml-4 mt-2">→ Use <span className="font-bold">Single Agent</span> system</div>
            </div>
            
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="font-medium">Multi-step process with well-defined stages?</p>
              <div className="ml-4 mt-2">→ Consider <span className="font-bold">Sequential</span> pattern</div>
            </div>
            
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="font-medium">Domain-specific application requiring specialized knowledge?</p>
              <div className="ml-4 mt-2">→ Implement <span className="font-bold">Router</span> pattern</div>
            </div>
            
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="font-medium">Need for concurrent processing of independent subtasks?</p>
              <div className="ml-4 mt-2">→ Deploy <span className="font-bold">Parallel</span> pattern</div>
            </div>
            
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-medium">Creative or development workflow with feedback loops?</p>
              <div className="ml-4 mt-2">→ Use <span className="font-bold">Generator</span> pattern</div>
            </div>
            
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="font-medium">Complex system requiring bidirectional collaboration?</p>
              <div className="ml-4 mt-2">→ Implement <span className="font-bold">Network</span> pattern</div>
            </div>
            
            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="font-medium">Self-organizing system with minimal supervision?</p>
              <div className="ml-4 mt-2">→ Deploy <span className="font-bold">Autonomous Agents</span> pattern</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSystemPeriodicTable;
