import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, X, ImageIcon } from 'lucide-react';

export default function Feed() {
  let [PostData, setPostData] = useState([]);
  let [FormDisplay, setFormDisplay] = useState(false);
  let [Res, setRes] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5500/api/post")
      .then((result) => {
        setPostData(result.data)
      }).catch((err) => {
        console.log(err.message)
        alert(err.message);
      });
  }, [Res]);

  function SendData(e) {
    e.preventDefault();
    let PostData = {
      userId: "676a74eb22e5d041adabb5e4",
      title: e.target[0].value,
      poster: e.target[1].value,
      content: e.target[2].value
    }
    let ResData =  axios.post("http://localhost:5500/api/post", PostData);
    setRes(ResData.data);
    setFormDisplay(false);
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Feed</h1>
          <button
            onClick={() => setFormDisplay(!FormDisplay)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>New Post</span>
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="space-y-6">
        {/* Post Form */}
        <div id="PostForm">
          {FormDisplay && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Create New Post</h2>
                <button
                  onClick={() => setFormDisplay(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={SendData} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="Enter post title..."
                    name="title"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <div className="flex items-center space-x-2">
                    <ImageIcon className="h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter image URL..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <textarea
                    rows="4"
                    placeholder="What's on your mind?"
                    name="content"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
                <div className="flex space-x-3 pt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Post
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormDisplay(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Posts */}
        {PostData.map((P, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{P.title}</h2>
            </div>
            {P.poster && (
              <div className="w-full aspect-video relative overflow-hidden bg-gray-100">
                <img 
                  src={P.poster} 
                  alt={P.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <p className="text-gray-600 mb-4 whitespace-pre-wrap">{P.content}</p>
              <p className="text-sm text-gray-500">
                {new Date(P.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}