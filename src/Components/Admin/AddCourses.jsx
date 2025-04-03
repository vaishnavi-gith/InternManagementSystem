import React, { useState } from "react";

const AddCourses = () => {
  const [courseDomain, setCourseDomain] = useState("");
  const [courseUrl, setCourseUrl] = useState("");
  const [courses, setCourses] = useState([]);

  const handleAddCourse = async () => {
    if (!courseDomain || !courseUrl.trim()) {
      alert("Please select a domain and enter the course URL.");
      return;
    }

    const metadata = await fetchMetaData(courseUrl);
    const newCourse = {
      domain: courseDomain,
      url: courseUrl,
      title: metadata.title || "Unknown Course",
      image: metadata.image || "https://via.placeholder.com/150",
    };

    setCourses([...courses, newCourse]);
    setCourseDomain("");
    setCourseUrl("");
  };

  const handleDeleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const fetchMetaData = async (url) => {
    try {
      const response = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();

      return {
        title: data?.data?.title || "Unknown Course",
        image: data?.data?.image?.url || "https://via.placeholder.com/150",
      };
    } catch (error) {
      console.error("Error fetching metadata:", error);
      return {
        title: "Unknown Course",
        image: "https://via.placeholder.com/150",
      };
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">Add Course</h2>

      {/* Domain Selection */}
      <div className="mb-4 w-full max-w-md">
        <label className="block text-gray-700">Select Course Domain:</label>
        <select
          className="w-full p-2 border rounded-md mt-1"
          value={courseDomain}
          onChange={(e) => setCourseDomain(e.target.value)}
        >
          <option value="">Select Domain</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>

      {/* Course URL Input */}
      <div className="mb-4 w-full max-w-md">
        <label className="block text-gray-700">Course URL:</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md mt-1"
          value={courseUrl}
          onChange={(e) => setCourseUrl(e.target.value)}
          placeholder="Enter course link..."
        />
      </div>

      {/* Add Course Button */}
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
        onClick={handleAddCourse}
      >
        Add Course
      </button>

      {/* Display Added Courses */}
      <div className="mt-6 w-full max-w-lg">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-24 h-20 rounded-md mr-4 object-cover"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-700 font-semibold">
                Domain: {course.domain}
              </p>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline block"
              >
                {course.title}
              </a>
            </div>
            <button
              className="text-red-500 hover:text-red-700 text-xl"
              onClick={() => handleDeleteCourse(index)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCourses;
