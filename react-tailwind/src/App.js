import React, { useState, useEffect } from "react";
import data from "../src/data.json";
import JobBoard from './components/JobBoard';

import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="App">
      {jobs.map((job) => {
        return <JobBoard key={job.id} job={job}/>
      })}
    </div>
  );
}

export default App;
