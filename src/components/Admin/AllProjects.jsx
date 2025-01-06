import React, { useState, useEffect } from "react";
import Adminnavbar from "./Adminnavbar";
import axios from "axios";
  import Swal from "sweetalert2";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    status: "",
    team: "",
    deadline: "",
  });

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:9092/api/project/getallprojects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle adding a new project
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9092/api/project/addproject", newProject);
      setIsAdding(false);
      setNewProject({ title: "", description: "", status: "", team: "", deadline: "" });
      fetchProjects(); // Refresh project list
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  // Handle editing a project
  const handleEdit = (project) => {
    setIsEditing(true);
    setEditProject(project);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9092/api/project/editproject/${editProject.id}`, editProject);
      setIsEditing(false);
      fetchProjects(); // Refresh project list
    } catch (error) {
      console.error("Error editing project:", error);
    }
  };

  // Handle deleting a project


  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:9092/api/project/deleteproject/${id}`);
          fetchProjects(); // Refresh project list
          Swal.fire("Deleted!", "The project has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting project:", error);
          Swal.fire("Error!", "There was an error deleting the project.", "error");
        }
      }
    });
  };
  

  return (
    <>
      <Adminnavbar />

      {/* Main Content */}
      <div className="main-content">
        <div className="card-container">
          {/* Top Card */}
          <div className="top-card">
            <h2>Hello Admin</h2>
            <div className="top-actions">
              <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <i className="fas fa-search"></i>
              </div>
              <div className="bell-icon">
                <i className="fas fa-bell"></i>
              </div>
            </div>
          </div>

          {/* Main Dashboard Card */}
          <div className="main-card p-6">
            <div className="container mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">All Projects</h2>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => setIsAdding(true)}
                >
                  Add Project
                </button>
              </div>

              {/* Projects Table */}
              <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="px-4 py-2 border">Title</th>
                    <th className="px-4 py-2 border">Description</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Team</th>
                    <th className="px-4 py-2 border">Deadline</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-4 py-2 border">{project.title}</td>
                      <td className="px-4 py-2 border">{project.description}</td>
                      <td className="px-4 py-2 border">{project.status}</td>
                      <td className="px-4 py-2 border">{project.team}</td>
                      <td className="px-4 py-2 border">{project.deadline}</td>
                      <td className="px-4 py-2 border flex gap-2">
                        <button
                          className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                          onClick={() => handleEdit(project)}
                        >
                          Edit
                        </button>
                        <button
                          className="px-4 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                          onClick={() => handleDelete(project.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Project Form */}
            {isAdding && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <form
                  className="bg-white p-6 rounded shadow-md w-1/3"
                  onSubmit={handleAddSubmit}
                >
                  <h2 className="text-lg font-bold mb-4">Add Project</h2>
                  <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                      type="text"
                      value={newProject.title}
                      onChange={(e) =>
                        setNewProject({ ...newProject, title: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                      value={newProject.description}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border rounded"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Status</label>
                    <input
                      type="text"
                      value={newProject.status}
                      onChange={(e) =>
                        setNewProject({ ...newProject, status: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Team</label>
                    <input
                      type="text"
                      value={newProject.team}
                      onChange={(e) =>
                        setNewProject({ ...newProject, team: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Deadline</label>
                    <input
                      type="date"
                      value={newProject.deadline}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          deadline: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                      onClick={() => setIsAdding(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Add Project
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Edit Form */}
           {/* Edit Form */}
        {isEditing && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <form
              className="bg-white p-6 rounded shadow-md w-1/3"
              onSubmit={handleEditSubmit}
            >
              <h2 className="text-lg font-bold mb-4">Edit Project</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  value={editProject.title}
                  onChange={(e) =>
                    setEditProject({ ...editProject, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  value={editProject.description}
                  onChange={(e) =>
                    setEditProject({ ...editProject, description: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Status</label>
                <input
                  type="text"
                  value={editProject.status}
                  onChange={(e) =>
                    setEditProject({ ...editProject, status: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Team</label>
                <input
                  type="text"
                  value={editProject.team}
                  onChange={(e) =>
                    setEditProject({ ...editProject, team: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Deadline</label>
                <input
                  type="date"
                  value={editProject.deadline}
                  onChange={(e) =>
                    setEditProject({ ...editProject, deadline: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

        </div>
      </div>
    </>
  );
};

export default AllProjects;
