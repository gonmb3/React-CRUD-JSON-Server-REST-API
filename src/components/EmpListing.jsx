import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";


const EmpListing = () => {
    const [empData , setEmpData] = useState(null);

    const navigate = useNavigate();


    const loadDetails = (id) => {
        navigate(`/employee/detail/${id}`)
    }

    const loadEdit = (id) => {
        navigate(`/employee/edit/${id}`)
    }

    const deleteEmp = (id) => {
        if(window.confirm("Do you want to delete employee?")){         
        fetch(`http://localhost:3000/employees/${id}`,{
            method:"DELETE",
        }).then(res => {
           alert("Deleted successfully")
           window.location.reload()

        }).catch(err => console.log(err.message))
        }
    }



    useEffect(() => {
        fetch("http://localhost:3000/employees").then( res => {
            return res.json();
        }).then(data => {

            setEmpData(data)

        }).catch(err => console.log(err))
    }, []);




  return (
    <div className='container text-center'>
        <div className="card">
            <div className="card-title">
                    <h2 >Employees List</h2>
            </div>
            <div className="card-body">
                <div className="float-start my-2">
                    <Link className="btn btn-success" to ="/employee/create">Add New (+)</Link>
                </div>
                  <table className="table table-bordered">
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    empData?.map(emp => (
                                        <tr key={emp.id}>
                                        <td>{emp.id} </td>   
                                        <td>{emp.name} </td>    
                                        <td>{emp.email} </td> 
                                        <td>{emp.phone} </td> 
                                        <td>
                                            <a 
                                             onClick={() => loadEdit(emp.id)}
                                            className="btn btn-primary">
                                                Edit
                                            </a>
                                            <a 
                                             onClick={() => deleteEmp(emp.id)}
                                            className="btn btn-danger mx-2">
                                                Delete
                                            </a>
                                            <a 
                                            onClick={() => loadDetails(emp.id)}
                                            className="btn btn-success">
                                                Details
                                                </a>
                                            
                                        </td>
                                       </tr>
                                    ))
                                }
                        </tbody>
                </table>  
            </div>
        </div>
    </div>
  )
}

export default EmpListing