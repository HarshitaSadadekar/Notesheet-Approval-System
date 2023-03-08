import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Create from './Create';
import Approve from './Approve';

import { facultyData } from '../../data';

function Dashboard(){

    const [faculty, setFaculty] = useState(facultyData);
    const [isCreating, setIsCreating] = useState(false);

    return (
        <div className='container'>
        {/* List */}
           {!isCreating && (
            <>
                <Header setIsCreating={setIsCreating} />
                <List faculty={faculty} />
            </>
           )}

        {/* Create */}
           {isCreating && (
            <Create faculty={faculty} setFaculty={setFaculty} setIsCreating={setIsCreating} />
           )} 
        </div>
    )
}

export default Dashboard;