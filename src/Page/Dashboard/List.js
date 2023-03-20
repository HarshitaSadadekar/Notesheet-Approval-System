import React from 'react'

class List extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/notesheet/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)
        });
    }

    componentDidMount(){
        this.fetchData();
    }


   
    render(){

        const noteSheet=this.state.data;
        const rows=noteSheet.map((note)=>

        <tr key={note.f_id}>
        <td>{note.id}</td>
        <td>{note.subject}</td>  {/* !should be updated */}
        <td>{note.sender}</td>    {/* !should be updated */}
        <td>{note.date}</td>
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
            // <tr key={emp.id}>
            //     <td>{emp.full_name}</td>
            //     <td>{emp.email}</td>
            //     <td>{emp.contact}</td>
            //     <td>{emp.address}</td>
            //     <td>
            //         <Link to={'update/'+emp.id} className="btn btn-info mr-2">Update</Link>
            //         <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
            //     </td>
            // </tr>
        );
        
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
                      {rows}
                    </tbody>
                </table>
            </div>
        );
    }
  
    
}

export default List


// {faculty.length > 0 ? (
//     faculty.map((faculty, i) => (
//         <tr key={faculty.id}>  // faculty id (notesheet foreig key)
//             <td>{i + 1}</td>
//             <td>{faculty.name}</td>  // subject of notesheet
//             <td>{faculty.sender}</td> // id name (foreign key id)
//             <td>{faculty.date}</td>   // date of notesheet
//             <td className='text-right'>
//                 <button className='button muted-button'>Approve</button>
//             </td>
//             <td className='text-center'>
//                 <button className='button muted-button'>Reject</button>
//             </td>
//             <td className='text-center'>
//                 <button className='button muted-button'>Review</button>
//             </td>
//             <td className='text-left'>
//                 <button className='button muted-button'>Forward</button>
//             </td>
//         </tr>
//     ))
// ) : (
//     <tr>
//         <td colSpan={5} > No faculty</td>
//     </tr>
// )}