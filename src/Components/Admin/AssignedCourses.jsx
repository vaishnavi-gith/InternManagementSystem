import React, { useEffect, useState } from "react";
import coursesData from "./AssignedCourses.json"; // Adjust path if needed

const AssignedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData); // Load courses from JSON
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 ml-[15%]">
      <h2 className="text-center text-red-500 text-2xl font-bold mb-6">
        Assigned Courses
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {courses.length === 0 ? (
          <p className="text-gray-400">No courses assigned yet.</p>
        ) : (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 border-2 border-red-500 p-5 rounded-lg w-64 h-44 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
            >
              <h3 className="text-red-500 font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-300">{course.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AssignedCourses;
