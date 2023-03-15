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
    const [isApproving, setIsApproving] = useState(false);
    const [isRejecting, setIsRejecting] = useState(false);
    const [isReviewing, setIsReviewing] = useState(false);
    const [isForwarding, setIsForwarding] = useState(false);

    const handleApprove = (id) => {
        Swal.fire({
            icon: 'question',
            title: 'Approve',
            text: "Are you sure?",
            showCancelButton: true,
            confirmButtonText: 'Yes, Approve it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if(result.value){
                // Enter Code
                Swal.fire({
                    icon: 'success',
                    title: 'Approved',
                    // Enter Code for text
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Enter Code
            }
        });
    }
    const handleReject = (id) => {
        Swal.fire({
            icon: 'question',
            title: 'Reject',
            text: "Are you sure?",
            showCancelButton: true,
            confirmButtonText: 'Yes, Reject it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if(result.value){
                // Enter Code
                Swal.fire({
                    icon: 'success',
                    title: 'Rejected',
                    // Enter Code for text
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Enter Code
            }
        });
    }
    const handleReview = (id) => {
        Swal.fire({
            icon: 'question',
            title: 'Review',
            text: "Are you sure?",
            showCancelButton: true,
            confirmButtonText: 'Yes, Review it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if(result.value){
                // Enter Code
                Swal.fire({
                    icon: 'success',
                    title: 'Reviewed',
                    // Enter Code for text
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Enter Code
            }
        });
    }
    const handleForward = (id) => {
        Swal.fire({
            icon: 'question',
            title: 'Forward',
            text: "Are you sure?",
            showCancelButton: true,
            confirmButtonText: 'Yes, Forward it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if(result.value){
                // Enter Code
                Swal.fire({
                    icon: 'success',
                    title: 'Forwarded',
                    // Enter Code for text
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Enter Code
            }
        });
    }


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