import React from 'react'
import Job from './Job';

const JobBoard = ({job}) => {
    return (
        <div className="flex justify-center rounded-lg">
            <Job job={job}/>
        </div>
    )
}

export default JobBoard;
