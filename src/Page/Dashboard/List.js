import React from 'react'

function List({ faculty }){
    return (
    <div className='contain-table'>
        <table className='striped-table'>
            <thead>
                <tr>
                <th>No.</th>
                <th>Notesheet</th>
                <th>Sender's name</th>
                <th>Date</th>
                <th colSpan={2} className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {faculty.length > 0 ? (
                    faculty.map((faculty, i) => (
                        <tr key={faculty.id}>
                            <td>{i + 1}</td>
                            <td>{faculty.name}</td>
                            <td>{faculty.sender}</td>
                            <td>{faculty.date}</td>
                            <td className='text-right'>
                                <button className='button muted-button'>Approve</button>
                            </td>
                            <td className='text-center'>
                                <button className='button muted-button'>Reject</button>
                            </td>
                            <td className='text-center'>
                                <button className='button muted-button'>Review</button>
                            </td>
                            <td className='text-left'>
                                <button className='button muted-button'>Forward</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} > No faculty</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )
}

export default List