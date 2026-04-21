import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  getDocs,
  where,
  limit,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// Lazy import for ReactQuill
const ReactQuill = lazy(() => import("react-quill-new"));
import "react-quill-new/dist/quill.bubble.css";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faArrowLeft,
  faShare,
  faBookmark,
  faClock,
  faPaperPlane,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function BlogDetails() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);

  // COMMENTS STATE
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch Blog
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const blogRef = doc(db, "blogs", id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          const blogData = { id: blogSnap.id, ...blogSnap.data() };

          // Calculate reading time
          const wordCount =
            blogData.content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0;
          const readTime = Math.ceil(wordCount / 200);

          setBlog({
            ...blogData,
            readTime: `${readTime} min read`,
          });
        } else {
          console.error("No such blog found!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  // Fetch Related Blogs
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setRelatedLoading(true);
        const blogsRef = collection(db, "blogs");

        // Get all blogs excluding current blog
        const q = query(blogsRef, where("__name__", "!=", id), limit(3));

        const querySnapshot = await getDocs(q);
        const blogs = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const wordCount =
            data.content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0;
          const readTime = Math.ceil(wordCount / 200);

          blogs.push({
            ...data,
            id: doc.id,
            readTime: `${readTime} min read`,
          });
        });

        if (blogs.length < 3) {
          const allBlogsQuery = query(
            blogsRef,
            orderBy("date", "desc"),
            limit(6)
          );

          const allBlogsSnapshot = await getDocs(allBlogsQuery);
          const allBlogs = [];

          allBlogsSnapshot.forEach((doc) => {
            if (doc.id !== id && !blogs.find((b) => b.id === doc.id)) {
              const data = doc.data();
              const wordCount =
                data.content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0;
              const readTime = Math.ceil(wordCount / 200);

              allBlogs.push({
                ...data,
                id: doc.id,
                readTime: `${readTime} min read`,
              });
            }
          });

          allBlogs.forEach((blogItem) => {
            if (blogs.length < 3 && !blogs.find((b) => b.id === blogItem.id)) {
              blogs.push(blogItem);
            }
          });
        }

        setRelatedBlogs(blogs.slice(0, 3));
      } catch (error) {
        console.error("Error fetching related blogs:", error);

        try {
          const blogsRef = collection(db, "blogs");
          const q = query(blogsRef, limit(3));
          const querySnapshot = await getDocs(q);
          const blogs = [];

          querySnapshot.forEach((doc) => {
            if (doc.id !== id) {
              const data = doc.data();
              const wordCount =
                data.content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0;
              const readTime = Math.ceil(wordCount / 200);

              blogs.push({
                ...data,
                id: doc.id,
                readTime: `${readTime} min read`,
              });
            }
          });
          setRelatedBlogs(blogs);
        } catch (fallbackError) {
          console.error("Fallback also failed:", fallbackError);
        }
      } finally {
        setRelatedLoading(false);
      }
    };

    if (id) {
      fetchRelatedBlogs();
    }
  }, [id]);

  useEffect(() => {
    const commentsRef = collection(db, "comments");
    const q = query(commentsRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.blogId === id) {
          fetched.push({
            id: doc.id,
            name: data.name,
            comment: data.comment,
            createdAt: data.createdAt,
          });
        }
      });
      setComments(fetched);
    });

    return () => unsubscribe();
  }, [id]);

  const submitComment = async () => {
    if (!name.trim() || !comment.trim()) {
      alert("Please fill all fields!");
      return;
    }

    try {
      setSending(true);
      await addDoc(collection(db, "comments"), {
        blogId: id,
        name,
        comment,
        createdAt: new Date().toLocaleString(),
      });

      setName("");
      setComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Error posting comment. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "N/A";

    try {
      let date;

      if (dateValue instanceof Date) {
        date = dateValue;
      } else if (dateValue.toDate && typeof dateValue.toDate === "function") {
        date = dateValue.toDate();
      } else if (typeof dateValue === "string") {
        date = new Date(dateValue);

        if (isNaN(date.getTime())) {
          const parts = dateValue.split("/");
          if (parts.length === 3) {
            date = new Date(parts[2], parts[1] - 1, parts[0]);
          }

          if (isNaN(date.getTime())) {
            return dateValue;
          }
        }
      } else if (dateValue.seconds) {
        date = new Date(dateValue.seconds * 1000);
      } else {
        return "Invalid Date";
      }

      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }

      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
    } catch (error) {
      console.error("Date formatting error:", error, dateValue);
      return "Invalid Date";
    }
  };

  if (loading || !blog) {
    return (
      <>
        <Header />
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
          <div className="flex flex-col items-center justify-center">
            {/* Spinner */}
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-customBlue1"></div>
            </div>

            {/* Loading text */}
            <p className="text-gray-600 font-medium mt-4">
              {loading ? "Loading blog post..." : "Blog Not Found"}
            </p>

            {/* Go back button if blog not found */}
            {!loading && (
              <button
                onClick={() => navigate(-1)}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Go Back
              </button>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
        {/* HERO IMAGE */}
        <div className="relative w-full h-screen overflow-hidden bg-gray-200">
          {/* Fullscreen Image */}
          <img
            src={blog.coverImage}
            alt={blog.title}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400' fill='none'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Cpath d='M400 200L300 150L400 100L500 150L400 200Z' fill='%23d1d5db'/%3E%3Ccircle cx='400' cy='200' r='60' fill='%239ca3af'/%3E%3C/svg%3E";
              setImageLoaded(true);
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Loading spinner until image loads */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Title */}
          {imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl">
                <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl drop-shadow-2xl">
                  {blog.title}
                </h1>
              </div>
            </div>
          )}
        </div>

        {/* BLOG CONTENT & ALL SECTIONS TOGETHER */}
        <article className="mt-0 sm:-mt-16 py-4 sm:py-8">
          <div className="w-full bg-white lg:p-12 mb-8">
            <div
              className="text-gray-800 leading-relaxed text-[16px] md:text-[17px] lg:text-[18px] font-serif 
            [&_.ql-editor]:text-[16px]
            [&_.ql-editor]:md:text-[17px]
            [&_.ql-editor]:lg:text-[18px]
            [&_.ql-editor]:leading-normal
            [&_.ql-editor]:tracking-normal
            [&_.ql-editor]:space-y-2"
            >
              <Suspense
                fallback={
                  <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-customBlue1"></div>
                  </div>
                }
              >
                <ReactQuill
                  value={blog.content}
                  readOnly
                  theme="bubble"
                  modules={{ toolbar: false }}
                />
              </Suspense>
            </div>

            {/* AUTHOR SECTION */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm hover:shadow-md transition-all duration-300">
              {/* Accent Line */}
              <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mb-5"></div>

              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-semibold shadow-md">
                  {blog.author?.charAt(0).toUpperCase()}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {blog.author}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-blue-500"
                      />
                      <span>{formatDate(blog.date)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-purple-500"
                      />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-8xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Comments ({comments.length})
              </h2>

              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Write your comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  onClick={submitComment}
                  disabled={sending}
                  className="w-full sm:w-auto flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {sending ? "Posting..." : "Post Comment"}
                </button>
              </div>

              <div className="space-y-6">
                {comments.length > 0 ? (
                  comments.map((c) => (
                    <div
                      key={c.id}
                      className="p-5 border border-gray-200 rounded-xl bg-gray-50 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-800">
                          {c.name}
                        </h3>
                        <p className="text-xs text-gray-400">{c.createdAt}</p>
                      </div>
                      <p className="text-gray-700 mt-2">{c.comment}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No comments yet. Be the first to comment!
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Related Blogs
                </h2>
                <Link
                  to="/ourblog"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-sm md:text-base font-medium">
                    View All
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </Link>
              </div>

              {relatedLoading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
                  <span className="ml-3 text-gray-600">
                    Loading related blogs...
                  </span>
                </div>
              ) : relatedBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link
                      to={`/blogdetails/${relatedBlog.id}`}
                      key={relatedBlog.id}
                      className="group block"
                    >
                      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                        {/* Blog Image */}
                        <div className="relative h-48 md:h-52 overflow-hidden">
                          <img
                            src={relatedBlog.coverImage}
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200' fill='none'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Cpath d='M200 100L150 75L200 50L250 75L200 100Z' fill='%23d1d5db'/%3E%3Ccircle cx='200' cy='100' r='30' fill='%239ca3af'/%3E%3C/svg%3E";
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>

                        {/* Blog Content */}
                        <div className="p-5 md:p-6 flex-1 flex flex-col">
                          <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                            {relatedBlog.title}
                          </h3>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                            {relatedBlog.content
                              ?.replace(/<[^>]*>/g, "")
                              .substring(0, 100)}
                            ...
                          </p>

                          {/* Meta Information */}
                          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <FontAwesomeIcon
                                  icon={faUser}
                                  className="text-xs"
                                />
                                <span className="text-xs">
                                  {relatedBlog.author}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  className="text-xs"
                                />
                                <span className="text-xs">
                                  {relatedBlog.readTime}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-blue-600 group-hover:text-blue-700">
                              <span className="text-xs font-medium">
                                Read More
                              </span>
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="text-xs transform group-hover:translate-x-1 transition-transform duration-200"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No related blogs found
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Check back later for more content
                  </p>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </>
  );
}

export default BlogDetails;
