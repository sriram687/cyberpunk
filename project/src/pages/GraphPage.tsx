import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";

export default function GraphPage() {
  const [data, setData] = useState<{ time: string; strength: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = {
        time: new Date().toLocaleTimeString().split(" ")[0],
        strength: Math.floor(Math.random() * (100 - 20) + 20), // Random Wi-Fi strength (20-100)
      };
      setData((prevData) => [...prevData.slice(-20), newDataPoint]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Wi-Fi Signal Strength</h1>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Area type="monotone" dataKey="strength" stroke="#8a2be2" fill="rgba(138, 43, 226, 0.5)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-4">
        <Link to="/" className="text-blue-600 underline">⬅️ Back to Dashboard</Link>
      </div>
    </div>
  );
}
