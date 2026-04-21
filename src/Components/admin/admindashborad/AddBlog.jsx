import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase/config"; 
import BlogEditor from "../../blogEditor"; 

const AddBlog = ({ newBlog, setNewBlog, handleAddBlog }) => {
  const [editorContent, setEditorContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverImage(file);
    }
  };

  const uploadImageToFirebase = async () => {
    if (!coverImage) return "";

    const storageRef = ref(storage, `blog_covers/${coverImage.name}`);
    const snapshot = await uploadBytes(storageRef, coverImage);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
    setNewBlog((prev) => ({ ...prev, content }));
  };

  const handleSubmit = async () => {
    if (!newBlog.title || !newBlog.author || !editorContent || !coverImage) {
      alert("All fields are required.");
      return;
    }

    setIsUploading(true);

    const coverImageUrl = await uploadImageToFirebase();

    if (coverImageUrl) {
      await handleAddBlog(coverImageUrl);
    }

    setIsUploading(false);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 100) {
      setNewBlog({ ...newBlog, title: value });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title (max 100 characters)"
        value={newBlog.title}
        onChange={handleTitleChange}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <p className="text-sm text-gray-500">{newBlog.title.length}/100 characters</p>

      <input
        type="text"
        placeholder="Author"
        value={newBlog.author}
        onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
      />

      <div className="mb-4">
        <label className="block mb-2">Upload Cover Image: </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full p-2 border border-gray-300 rounded"
        />

        {coverImage && (
          <p className="mt-2 text-sm text-gray-600">
            Selected image: {coverImage.name}
          </p>
        )}
      </div>

      <div className="mb-20 md:mb-12">
        <BlogEditor value={editorContent} onChange={handleEditorChange} />
      </div>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Submit"}
      </button>
    </div>
  );
};

export default AddBlog;
