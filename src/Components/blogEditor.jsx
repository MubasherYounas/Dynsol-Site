import React, { useRef } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Quill } from "react-quill-new";

// Firebase
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase/config";

// Quill 2 compatible image resize
import ImageResize from "quill-image-resize";
Quill.register("modules/imageResize", ImageResize);

// Image uploader
import ImageUploader from "quill-image-uploader";
Quill.register("modules/imageUploader", ImageUploader);

const BlogEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);
  const storage = getStorage(app);

  // Firebase image upload
  const imageUploadFn = (file) =>
    new Promise((resolve, reject) => {
      const fileRef = ref(storage, `blogImages/${Date.now()}-${file.name}`);
      uploadBytes(fileRef, file)
        .then(() => getDownloadURL(fileRef))
        .then(resolve)
        .catch(reject);
    });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
    imageUploader: {
      upload: imageUploadFn,
    },
    imageResize: {
      // smooth resize options
      modules: ["Resize", "DisplaySize", "Toolbar"],
      parchment: Quill.import("parchment"),
      handleStyles: {
        backgroundColor: "#fff",
        border: "1px solid #666",
        color: "#666",
      },
    
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={onChange}
        theme="snow"
        modules={modules}
        placeholder="Write your blog here..."
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default BlogEditor;
