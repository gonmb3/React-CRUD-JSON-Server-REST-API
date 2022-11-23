import { useParams, Link , useNavigate} from "react-router-dom"
import { useState,useEffect } from 'react';


const EmpEdit = () => {

    const {id} = useParams();

    const [userID, setUserID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [active, setActive] = useState(true);

    const [validation, setValidation] = useState(false);


    const navigate = useNavigate();


    const handleSubmit = e =>{
        e.preventDefault();
        const empData = {id,name, email, phone, active}

        fetch(`http://localhost:3000/employees/${id}`,{
            method:"PUT",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(empData)
        }).then(res => {
           alert("Saved successfully")
           navigate("/")

        }).catch(err => console.log(err.message))

    }


 useEffect(() => {
    fetch(`http://localhost:3000/employees/${id}`).then(res => {
       return res.json();
    }).then( resp => {
        setUserID(resp.id)
        setName(resp.name)
        setEmail(resp.email)
        setPhone(resp.phone)
        setActive(resp.active)

      
    }).catch(err => console.log(err.message))

 }, [])



  return (
    <div>
    <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form 
            onSubmit={handleSubmit}
            className="container">

                <div className="card">
                    <div className="card-title text-center">
                        <h2 className='mt-4'>Edit Employee</h2>
                    </div>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="" className='font-bold py-2'>ID</label>
                                    <input
                                    disabled="disabled"
                                    value={userID}
                                     type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="" className='font-bold py-2'>NAME</label>
                                    <input
                                    required
                                    value={name}
                                    onChange= {e => setName(e.target.value)}                                           
                                    type="text" className="form-control" 
                                    onMouseDown={e => setValidation(true)}/>
                                     {name.length == 0 &&  validation && <span className="text-danger">Enter Name</span> }
                                </div>
                               
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="" className='font-bold py-2'>EMAIL</label>
                                    <input
                                    required
                                    value={email}
                                    onChange= {e => setEmail(e.target.value)}
                                     type="text" className="form-control" 
                                     onMouseDown={e => setValidation(true)}/>
                                     {email.length == 0 &&  validation && <span className="text-danger">Enter Email</span> }
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="" className='font-bold py-2'>PHONE</label>
                                    <input 
                                    required
                                    value={phone}
                                    onChange= {e => setPhone(e.target.value)}
                                    type="text" className="form-control" />
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="form-check py-2">
                                    <input
                                    checked={active}
                                    onChange= {e => setActive(e.target.checked)}
                                     type={"checkbox"} className="form-check-input " />
                                    <label className='form-check-label '>Is Active</label>

                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button                                            
                                     className='btn btn-success' type='submit'>Save</button>
                                    <Link to="/" className="btn btn-primary mx-2">BACK</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
</div>
  )

}
export default EmpEdit