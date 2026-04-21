import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase/config"; 
import BlogEditor from "../../blogEditor"; 

const EditBlog = ({ blogData, handleUpdateBlog }) => {
  const [editorContent, setEditorContent] = useState(blogData.content);
  const [coverImage, setCoverImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [updatedBlog, setUpdatedBlog] = useState(blogData);

  useEffect(() => {
    setUpdatedBlog(blogData);
    setCoverImage(null);
    setEditorContent(blogData.content);
  }, [blogData]);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverImage(file);
    }
  };

  const uploadImageToFirebase = async () => {
    if (!coverImage) return;

    setIsUploading(true);
    const storageRef = ref(storage, `blog_covers/${coverImage.name}`);
    const snapshot = await uploadBytes(storageRef, coverImage);
    const downloadURL = await getDownloadURL(snapshot.ref);

    if (downloadURL) {
      setUpdatedBlog((prev) => ({ ...prev, coverImage: downloadURL }));
    } else {
      console.error("Failed to get download URL.");
    }

    setIsUploading(false);
    return downloadURL;
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
    setUpdatedBlog((prev) => ({ ...prev, content }));
  };

  const handleSubmit = async () => {
    if (!updatedBlog.title || !updatedBlog.author || !editorContent) {
      alert("All fields are required.");
      return;
    }

    let newCoverImageURL = updatedBlog.coverImage || "";

    if (coverImage) {
      newCoverImageURL = (await uploadImageToFirebase()) || "";
    }

    handleUpdateBlog({
      ...updatedBlog,
      coverImage: newCoverImageURL,
    });
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setUpdatedBlog({ ...updatedBlog, title: value });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title (max 50 characters)"
        value={updatedBlog.title}
        onChange={handleTitleChange}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
      />

      <p className="text-sm text-gray-500">
        {updatedBlog.title.length}/50 characters
      </p>

      <input
        type="text"
        placeholder="Author"
        value={updatedBlog.author}
        onChange={(e) =>
          setUpdatedBlog({ ...updatedBlog, author: e.target.value })
        }
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
      />

      {/* Cover Image Upload */}
      <div className="mb-4">
        <label className="block mb-2">Upload Cover Image:</label>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="coverImageInput"
          onChange={handleImageUpload}
        />

        <div
          onClick={() => document.getElementById("coverImageInput")?.click()}
          className="cursor-pointer border border-gray-300 rounded p-2 mb-2 w-[50%]"
        >
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt="Cover Preview"
              className="w-full h-auto rounded"
            />
          ) : updatedBlog.coverImage ? (
            <img
              src={updatedBlog.coverImage}
              alt="Current Cover"
              className="w-full h-auto rounded"
            />
          ) : (
            <p className="text-gray-500">Click to upload an image</p>
          )}
        </div>
      </div>

      {/* Rich Text Editor */}
      <div className="mb-20 md:mb-12">
        <BlogEditor value={editorContent} onChange={handleEditorChange} />
      </div>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Update"}
      </button>
    </div>
  );
};

export default EditBlog;
