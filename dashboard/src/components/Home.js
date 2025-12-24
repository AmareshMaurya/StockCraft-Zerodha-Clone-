// import React from "react";

// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home; 


import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    // ❌ If token missing → go back to FRONTEND
    if (!token) {
      window.location.href = "http://localhost:3000"; // frontend
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
