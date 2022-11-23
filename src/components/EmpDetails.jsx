import { useParams, Link } from "react-router-dom"
import { useState,useEffect } from 'react';

const EmpDetails = () => {

    const {id} = useParams();

    const [empData, setEmpData] = useState({});

 useEffect(() => {
    fetch(`http://localhost:3000/employees/${id}`).then(res => {
       return res.json();
    }).then( resp => {
        setEmpData(resp)
    }).catch(err => console.log(err.message))

 }, [])

  return (
    <div className="container pt-5">
   {
    empData && 
   <div>
     <h1>The employee Name is : {empData.name} - ID: ({empData.id}) </h1>
    <h3>Contact: {empData.email} - Phone: ({empData.phone}) </h3>
    <Link className="btn btn-success" to="/">Go Back</Link>
   </div>
   }
</div>
  )
}

export default EmpDetails