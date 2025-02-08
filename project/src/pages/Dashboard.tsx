import { LineChart, Line, PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Wifi, AlertTriangle, BarChart } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const data = [
  { name: 'Jan', value: 150000 },
  { name: 'Feb', value: 180000 },
  { name: 'Mar', value: 160000 },
  { name: 'Apr', value: 200000 },
  { name: 'May', value: 190000 },
  { name: 'Jun', value: 200000 },
];

const pieData = [
  { name: 'Completed', value: 63 },
  { name: 'Pending', value: 37 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Main Dashboard</h1>
      <p className="text-sm text-gray-500 mb-6">Pollachi Branch</p>
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Wifi className="text-blue-600" />
            </div>
            <div>
              <button className="text-sm text-gray-600">SCAN WIFI</button>
              {/* <p className="text-2xl font-bold">45</p> */}
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-full">
              <AlertTriangle className="text-green-600" />
            </div>
            <div>
              <button className="text-sm text-gray-600">SCAN ROGUE</button>
              {/* <p className="text-2xl font-bold">Rs. 200,000</p> */}
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <BarChart className="text-purple-600" />
            </div>
            <div>
            <button onClick={() => navigate("/graph")} className="text-sm text-gray-600">VISUALIZE</button>
              {/* <p className="text-2xl font-bold">22</p> */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Scanning WIFI networks:</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Signal Strength</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#4F46E5"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}