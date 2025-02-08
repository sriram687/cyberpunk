export default function Report() {
  const payments = [
    { name: 'Ajay', location: 'Tripur', date: '21 Jun 2024', amount: 4000 },
    { name: 'Divya', location: 'Chennai', date: '14 Aug 2024', amount: 800 },
    { name: 'Shyam', location: 'Tirunelveli', date: '24 Aug 2024', amount: 1600 },
    { name: 'Jeevan', location: 'Karur', date: '14 Sep 2024', amount: 4500 },
    { name: 'Sanjeev', location: 'Coimbatore', date: '23 Sep 2024', amount: 2655 },
    { name: 'Vijay', location: 'Pollachi', date: '15 Oct 2024', amount: 1800 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Report</h1>
      <p className="text-sm text-gray-500 mb-6">Pollachi Branch</p>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Location</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-right py-3 px-4">Amount</th>
                  <th className="text-center py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{payment.name}</td>
                    <td className="py-3 px-4">{payment.location}</td>
                    <td className="py-3 px-4">{payment.date}</td>
                    <td className="py-3 px-4 text-right">$. {payment.amount}</td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-blue-600 hover:text-blue-800">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}