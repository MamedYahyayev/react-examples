import React from "react";

const Job = (props) => {
  return (
    <div className="flex justify-between items-center bg-white font-mono shadow-lg m-2 p-3 w-11/12 rounded-lg">
      <div className="flex">
        <div>
          <img
            src={props.job.logoUrl}
            className="rounded-full h-20 w-20 flex items-center justify-center "
          />
        </div>
        <div className="ml-3">
          <h2 className="text-sm text-green-500">{props.job.companyName}</h2>
          <h3 className="text-2xl font-bold">{props.job.work}</h3>
          <p className="text-gray-500">
            {props.job.publishTime} - {props.job.country}
          </p>
        </div>
      </div>
      <div className="flex ml-2">
        {props.job.languages.map((language , index) => (
          <label key={index} className="mr-2 bg-green-200 p-1 rounded-lg">{language}</label>
        ))}
        {props.job.tools.map((tool , index) => (
          <label key={index} className="mr-2 bg-green-200 p-1 rounded-lg">{tool}</label>
        ))}
      </div>
    </div>
  );
};

export default Job;
