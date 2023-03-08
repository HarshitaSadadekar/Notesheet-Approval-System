import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Create({ faculty, setFaculty, setIsCreating }){

    const [date, setDate] = useState('');
    const [sub, setSubject] = useState('');
    const [desc, setDescription] = useState('');
    const [obj, setObjective] = useState('');
    const [details, setDetails] = useState('');

    const handleCreate = f => {
        f.preventDefault();
        if(!date || !sub || !desc || !obj || !details){
            return Swal.fire({
                icon:'error',
                title: 'Error!',
                text: 'All fields are required',
                showConfirmButton: true
            });
        }

        const id = faculty.length + 1;
        const newFaculty = {
            id,
            sub,
            sub, //name of the sender
            date
        }
        faculty.push(newFaculty);
        setFaculty(faculty);
        setIsCreating(false);

        Swal.fire({
            icon: 'success',
            title: 'Created',
            text: `Notesheet has been Created`,
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className='container'>
            <h1>Create Notesheet</h1>
            <form onSubmit={handleCreate}>
                <div className='input-box'>
                    <label htmlFor='date'>Date</label>
                    <input id='date' placeholder='Enter Date' type='date' name='date' value={date} onChange={f => setDate(f.target.value)} />
                </div>
                <div className='column'>
                <div className='input-box'>
                    <label htmlFor='school'>School</label>
                    <div className='select-box'>
                        <select required>
                            <option hidden>Choose an option</option>
                            <option>CSE</option>
                            <option>IT</option>
                            <option>CCE</option>
                        </select>
                    </div>
                </div>
                <div className='input-box'>
                    <label htmlFor='dept'>Department</label>
                    <div className='column'>
                    <div className='select-box'>
                        <select required>
                            <option hidden>Choose an option</option>
                            <option>CSE</option>
                            <option>CSE AI/ML</option>
                            <option>IT</option>
                            <option>DSE</option>
                            <option>CCE</option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>
                <div class="input-box">
                    <label htmlFor='subject'>Subject</label>
                    <input id='sub' name='sub' value={sub} onChange={f => setSubject(f.target.value)} type="text" placeholder="Enter subject of the note sheet"/>
                </div>
                <div class="input-box">
                    <label htmlFor='desc'>Description</label>
                    <input id='desc' name='desc' value={desc} onChange={f => setDescription(f.target.value)} type="text" placeholder="Enter subject of the note sheet" />
                </div>
                <div class="input-box">
                    <label htmlFor='obj'>Objective</label>
                    <input id='obj' name='obj' value={obj} onChange={f => setObjective(f.target.value)} type="text" placeholder="Enter subject of the note sheet" />
                </div>
                <div class="input-box">
                    <label htmlFor='details'>Details</label>
                    <input id='details' name='details' value={details} onChange={f => setDetails(f.target.value)} type="text" placeholder="Enter subject of the note sheet" />
                </div>
                <div className='column'>
                    <div className='input-box'>
                        <label> Proposal Submitted By</label>
                        <input id='convener' name='convener' type='text' placeholder='Convener 1' />
                    </div>
                    <div className='input-box'>
                        <label> Proposal Submitted By</label>
                        <input id='convener' name='convener' type='text' placeholder='Convener 2' />
                    </div>
                </div>
                <div className='gender-box'>
                    <h3>Select Authorities for Approval</h3>
                    <div class="gender-option">
                    <input type="checkbox" name="hod" id="hod" value="hod" />
                    <label htmlFor="hod">HoD</label>
                    <input type="checkbox" name="director" id="director" value="director" />
                    <label htmlFor="director">Director</label>
                    <input type="checkbox" name="others" id="others" value="others" />
                    <label htmlFor="others">Others</label>
                </div>
            </div>
            <div>
                <input type="submit" value="Create" />
                <input className="muted-button" type="button" value="Cancel" onClick={() => setIsCreating(false)} />
            </div>
        </form>
        </div>
    );
}

export default Create