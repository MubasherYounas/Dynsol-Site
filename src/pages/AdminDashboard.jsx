import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

import { db } from "../../firebase/config";
import AddBlog from "./../Components/admin/admindashborad/AddBlog";
import EditBlog from "./../Components/admin/admindashborad/EditBlog";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faClose,
  faPlus,
  faBlog,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import Footer from "../Components/layout/Footer";
import Header from "../Components/layout/Header";

export default function AdminDashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const [loading, setLoading] = useState(true);

  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    date: "",
    coverImage: "",
    content: "",
  });

  const [editingBlog, setEditingBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  // Safe date formatting function
  const formatDate = (dateValue) => {
    if (!dateValue) return "N/A";

    try {
      // Handle different date formats
      let date;

      if (dateValue instanceof Date) {
        date = dateValue;
      } else if (dateValue.toDate && typeof dateValue.toDate === "function") {
        // Firestore timestamp
        date = dateValue.toDate();
      } else if (typeof dateValue === "string") {
        // String date - try multiple formats
        date = new Date(dateValue);

        // If the date is invalid, try parsing different formats
        if (isNaN(date.getTime())) {
          // Try DD/MM/YYYY format (common in en-GB)
          const parts = dateValue.split("/");
          if (parts.length === 3) {
            date = new Date(parts[2], parts[1] - 1, parts[0]);
          }

          // If still invalid, return original value
          if (isNaN(date.getTime())) {
            return dateValue;
          }
        }
      } else if (dateValue.seconds) {
        // Firestore timestamp with seconds
        date = new Date(dateValue.seconds * 1000);
      } else {
        return "Invalid Date";
      }

      // Final validation
      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }

      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date);
    } catch (error) {
      console.error("Date formatting error:", error, dateValue);
      return "Invalid Date";
    }
  };

  // Fetch Blogs
  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const arr = [];
      snapshot.forEach((d) => arr.push({ id: d.id, ...d.data() }));

      // Safe sorting with date validation
      arr.sort((a, b) => {
        try {
          const dateA = a.createdAt?.toDate?.() || new Date(a.date);
          const dateB = b.createdAt?.toDate?.() || new Date(b.date);
          return dateB - dateA;
        } catch (error) {
          console.error("Sorting error:", error);
          return 0;
        }
      });

      setBlogs(arr);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // BLOG TABLE COLUMNS
  const blogColumnHelper = createColumnHelper();

  const blogColumns = [
    blogColumnHelper.accessor("coverImage", {
      header: "Cover Image",
      cell: (info) => (
        <div className="flex justify-center">
          <img
            src={info.getValue()}
            alt="cover"
            className="w-12 h-12 rounded-lg object-cover border border-gray-200"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21,15 16,10 5,21'%3E%3C/polyline%3E%3C/svg%3E";
            }}
          />
        </div>
      ),
    }),
    blogColumnHelper.accessor("title", {
      header: "Title",
      cell: (info) => (
        <div className="max-w-[200px]">
          <p className="font-medium text-gray-900 line-clamp-2">
            {info.getValue() || "No Title"}
          </p>
        </div>
      ),
    }),
    blogColumnHelper.accessor("author", {
      header: "Author",
      cell: (info) => (
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="text-gray-400 text-sm" />
          <span>{info.getValue() || "Unknown Author"}</span>
        </div>
      ),
    }),
    blogColumnHelper.accessor("date", {
      header: "Publish Date",
      cell: (info) => (
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCalendar}
            className="text-gray-400 text-sm"
          />
          <span>{formatDate(info.getValue())}</span>
        </div>
      ),
    }),

    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex justify-center gap-3">
          <button
            onClick={() => handleEditBlog(row.original)}
            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            title="Edit Blog"
          >
            <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleDeleteBlog(row.original)}
            className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
            title="Delete Blog"
          >
            <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  // TABLE INSTANCE
  const tableBlog = useReactTable({
    data: blogs,
    columns: blogColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // HANDLERS
  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setDialogType("editBlog");
    setIsDialogOpen(true);
  };

  const handleDeleteBlog = async (blog) => {
    if (window.confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      await deleteDoc(doc(db, "blogs", blog.id));
    }
  };

  const handleUpdateBlog = async (updated) => {
    await updateDoc(doc(db, "blogs", editingBlog.id), updated);
    setIsDialogOpen(false);
  };

  const openDialog = (type) => {
    setDialogType(type);
    setIsDialogOpen(true);

    if (type === "blog") {
      setNewBlog({
        title: "",
        author: "",
        date: "",
        coverImage: "",
        content: "",
      });
    }
  };

  const handleAddBlog = async (coverURL) => {
    const { title, author, content } = newBlog;

    const date = new Date().toLocaleDateString("en-GB");

    await addDoc(collection(db, "blogs"), {
      title,
      author,
      date,
      coverImage: coverURL,
      content,
      createdAt: serverTimestamp(),
    });

    setIsDialogOpen(false);
  };

  return (
    <>
      <Header />

      {/* Main Dashboard Container */}
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="mt-2 text-gray-600">
                  Manage your blog posts and content
                </p>
              </div>

              {/* Stats Card */}
              <div className="mt-4 sm:mt-0">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FontAwesomeIcon
                        icon={faBlog}
                        className="text-blue-600 w-5 h-5"
                      />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {blogs.length}
                      </p>
                      <p className="text-sm text-gray-500">Total Blog Posts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Blog Posts
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Manage and create new blog content
                  </p>
                </div>

                <button
                  className="mt-4 sm:mt-0 bg-green-400 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                  onClick={() => openDialog("blog")}
                >
                  <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                  Add New Blog
                </button>
              </div>

              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-customBlue1"></div>
                </div>
              ) : blogs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
                    <FontAwesomeIcon
                      icon={faBlog}
                      className="text-gray-400 w-12 h-12 mb-4"
                    />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No blog posts yet
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Get started by creating your first blog post
                    </p>
                    <button
                      onClick={() => openDialog("blog")}
                      className="bg-customBlue1 text-white py-2 px-6 rounded-lg font-medium hover:bg-customBlue1/90 transition-colors"
                    >
                      Create First Blog
                    </button>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      {tableBlog.getHeaderGroups().map((hg) => (
                        <tr key={hg.id}>
                          {hg.headers.map((header) => (
                            <th
                              key={header.id}
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                      {tableBlog.getRowModel().rows.map((row) => (
                        <tr
                          key={row.id}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DIALOG */}
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-gray-50 to-white">
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  {dialogType === "blog" && "Add New Blog Post"}
                  {dialogType === "editBlog" && "Edit Blog Post"}
                </DialogTitle>

                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    className="w-5 h-5 text-gray-500"
                  />
                </button>
              </div>

              <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
                {dialogType === "editBlog" && editingBlog && (
                  <EditBlog
                    blogData={editingBlog}
                    handleUpdateBlog={handleUpdateBlog}
                  />
                )}

                {dialogType === "blog" && (
                  <AddBlog
                    newBlog={newBlog}
                    setNewBlog={setNewBlog}
                    handleAddBlog={handleAddBlog}
                  />
                )}
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>

      <Footer />
    </>
  );
}
