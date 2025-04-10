import { useState, useRef } from 'react'
import './App.css'

function App() {
  // State to store profile data
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  // Reference for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first file if available
    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Create a URL for the image and store it in state
    }
  };

  // Trigger file input when profile image is clicked
  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-black-100">
      <div className="profile-card w-96 bg-cyan-100 shadow-lg rounded-lg p-12">
        {/* Profile image input */}
        <div className="profile-image m-12 flex justify-center items-center hover:bg-stone-200 rounded-full transition duration-300 ease-in-out cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
        
          <div 
            onClick={handleProfileImageClick}
            className="profile-info"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full text-gray-400">
                <span className="text-2xl">+</span>
              </div>
            )}
          </div>
        </div>
          {/* Name input */}
          <div className="mb-6 text-black border-black width-full p-2">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name-input sm:w-24 md:w-48 lg:w-64 focus:outline-none focus:border-blue-500 border-2 border-gray-500 rounded-lg p-2 w-full"
            />
          </div>
          {/* Bio textarea */}
          <div className="mb-6 text-black border-black width-full p-2">
            <textarea
              rows={3}
              placeholder="Write a short bio about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bio-textarea sm:w-24 md:w-48 lg:w-64 focus:outline-none focus:border-blue-500 border-2 border-gray-500 rounded-lg p-2 w-full"
            ></textarea>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="save-button">
          <button className="bg-blue-500 text-black-100 font-bold px-4 py-2 rounded-lg m-8 hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    
    </>
  )
}

export default App
