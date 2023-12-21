import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    

    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch("http://localhost:5000/api/auth/login", {
        const response = await fetch("https://cloud-notebook-vn7o.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            
            props.showAlert("Logged in Successful", "success");
            navigate('/')

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

            <h2 className='text-center'> Login </h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control  border border-success my-3" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label ">Password</label>
                    <input type="password" className="form-control border border-success my-3" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-success my-3">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login