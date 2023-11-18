import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'






const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password}= credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            
            props.showAlert("Logged in successful", "success");
            navigate('/login')

        }
        else{
            // alert();
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className='container'>
            <h2 className='text-center'>Signup </h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control border border-success my-3" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control border border-success my-3" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control border border-success my-3" value={credentials.password} onChange={onChange} name="password" id="password" minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control border border-success my-3" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" minLength={5} required/>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-success">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup