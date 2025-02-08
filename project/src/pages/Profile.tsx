export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Profile</h1>
      <p className="text-sm text-gray-500 mb-6">Pollachi Branch</p>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6">
          <h2 className="text-white text-lg font-semibold">Your Profile</h2>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Admin Id:</p>
                <p className="font-medium">110A</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Name:</p>
                <p className="font-medium">Adela Parkson</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Address:</p>
                <p className="font-medium">Pollachi</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Contact No:</p>
                <p className="font-medium">8844239XXX</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Email:</p>
                <p className="font-medium">abc123@gmail.com</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Password:</p>
                <p className="font-medium">•••••••</p>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}