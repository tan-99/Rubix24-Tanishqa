import React, { useState } from 'react'
import axios from 'axios';

const SearchBg = () => {

    {
        /* Adding transition to the loading of images to make it smoother */
    }

    const [backgroundUrl,setBackgroundUrl] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);

    const defaultBg = "../assets/default.jpg"

    const chooseBg = () => {

        if (!searchInput) {
            setBackgroundUrl(defaultBg)
        }
        setLoading(true)
        axios
            .get("https://api.unsplash.com/search/photos", {
                params: {
                client_id: "nZ0ajAe48wFcQs-ZGS2kGnxOMRPm1N2Tod31F0VCg0g",
                query: searchInput
                }
            })
            .then((res) => {
                const results = res?.data?.results;
                const randomBackground =
                results[Math.floor(Math.random() * results.length)];
                setBackgroundUrl(randomBackground.links.download);
            })
            .catch((err) => {
                console.log(err);
            })
            .then(() => setLoading(false));
    }

  return (
    <div className='fixed inset-0 flex items-center justify-center h-screen' style={{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'opacity 0.5s ease-in-out' }}>
        <div className="w-3/5 p-8 bg-white bg-opacity-85 border-2 rounded-lg">
        <h1 className='text-4xl mb-4 text-center'>Enter the place you want to explore:</h1>
        <div className="flex items-center">
            <input
                className='border-2 rounded-full px-4 py-2 mr-2 w-full'
                type='text'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={chooseBg}>Search</button>
        </div>
        </div>
    </div>
  )
}

export default SearchBg