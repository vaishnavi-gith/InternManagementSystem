import React, { useState } from "react";
import * as XLSX from "xlsx";

const RegisterInterns = () => {
  const [intern, setIntern] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "Intern@123", // Default password
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setIntern({ ...intern, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Intern ${intern.username} registered successfully!`);
    setIntern({ firstName: "", lastName: "", username: "", password: "Intern@123" });
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleBulkUpload = () => {
    if (!file) {
      alert("Please upload an Excel file first!");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      console.log("Bulk Intern Data:", parsedData);
      alert("Interns registered successfully from Excel!");
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 w-[600px] shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-red-600 text-2xl font-bold text-center mb-6">Register Intern</h2>
        
        {/* Single Intern Registration */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={intern.firstName} 
            onChange={handleChange} 
            required 
            className="p-3 border-2 border-gray-400 rounded-md focus:border-red-500"
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={intern.lastName} 
            onChange={handleChange} 
            required 
            className="p-3 border-2 border-gray-400 rounded-md focus:border-red-500"
          />
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={intern.username} 
            onChange={handleChange} 
            required 
            className="p-3 border-2 border-gray-400 rounded-md focus:border-red-500"
          />
          <input 
            type="password" 
            name="password" 
            value={intern.password} 
            disabled 
            className="p-3 border-2 border-gray-400 rounded-md bg-gray-200 text-gray-600"
          />
          <button type="submit" className="bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">Register Intern</button>
        </form>

        {/* Bulk Intern Registration via Excel */}
        {/* <div className="mt-6">
          <h2 className="text-xl font-semibold text-center mb-3">Bulk Upload</h2>
          <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="block w-full border p-2 rounded-md" />
          <button onClick={handleBulkUpload} className="mt-3 bg-yellow-500 text-black py-3 rounded-md hover:bg-yellow-600 transition w-full">Upload & Register</button>
        </div> */}
      </div>
    </div>
  );
};

export default RegisterInterns;
