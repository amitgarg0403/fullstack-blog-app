import { useState } from "react";
import axios from "axios";


const Login = () =>{
    const [message, setMessage]= useState("");
    const [message1, setMessage1]= useState("");
    const [loginData, setLoginData] = useState({ email:"", password:""})
    const [newUser, setNewUser] = useState({ name:"", email:"", password:""})

    const getLogin = async()=>{
        let url = "http://localhost:5000/login";
        await axios.post(url, loginData)
        .then(response=>{
            let user = response.data;
            console.log(user);
            if(user)
            {
                setMessage("Login Successfull");
                localStorage.setItem("name", user.name)
                localStorage.setItem("email", user.email)
                localStorage.setItem("id", user._id)
                setLoginData({ email:"", password:""})
                window.location.href="/"
            }
            else{
                setMessage("User not Found!")
            }
        })
        .catch(err=>console.log(err))
    }

    const getRegister = async() =>{
        console.log(newUser);
        let url = "http://localhost:5000/newuser";
        await axios.post(url,newUser)
        .then(response=>{
            setMessage1("User Registered Successfully");
            setNewUser({ name:"", email:"", password:""})

        })
        .catch(err=>console.log(err))
    }

    const loginHandler = (e) =>{
        let {name, value} = e.target;        
        setLoginData(prev=>{return({...prev, [name]:value})})
    }

    const registerHandler = (e)=>{
        let {name, value} = e.target;
        setNewUser(prev=>{return({...prev, [name]:value})})
    }


    return(
        <div className="container-fluid mb-5 p-5">
            <div className="row">
                <h1 className="text-danger text-center"> Welcome to Blog App</h1>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 border m-2">
                    <p className="text-center text-success">{message1}</p>
                    <h2 className="text-primary text-center mb-3"> New User </h2>
                    <div className="mb-3">
                        <label>Enter Full Name</label>
                        <input type="text" className="form-control" name="name" onChange={registerHandler} value={newUser.name}/>
                    </div>
                    <div className="mb-3">
                        <label>Enter Email Address</label>
                        <input type="text" className="form-control" name="email" onChange={registerHandler} value={newUser.email}/>
                    </div>
                    <div className="mb-3">
                        <label>Enter Password</label>
                        <input type="password" className="form-control" name="password" onChange={registerHandler} value={newUser.password}/>
                    </div>
                    <div className="mb-3 text-center">
                        <button className="btn btn-sm btn-primary p-2" onClick={getRegister}> Register </button>
                    </div>
                </div>

                <div className="col-lg-2"></div>

                <div className="col-lg-5">
                    <p className="text-center text-success">{message}</p>
                    <h2 className="text-warning text-center"> Login </h2>
                    <div className="row mb-3">
                        <div className="col-lg-3 pt-2">
                            <h5>Email :</h5>
                        </div>
                        <div className="col-lg-9">
                            <input type="text" className="form-control" name="email" onChange={loginHandler}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-3 pt-2">
                            <h5>Password :</h5>
                        </div>
                        <div className="col-lg-9">
                            <input type="password" className="form-control" name="password" onChange={loginHandler} />
                        </div>
                    </div>
                            
                    <div className="text-center">
                        <button className="btn ps-4 pe-4 btn-warning" onClick={getLogin}> Login </button>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-9 p-3">
                    <div>
                        <h6 className="text-center">Dummy Account</h6>
                        <p className="text-center"> email - test@gmail.com, password - 123</p>
                        <p></p>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <h6 className="mt-1">2024 &copy; Amit Garg</h6>
                </div>
            </div>
        </div>
    )
}

export default Login;