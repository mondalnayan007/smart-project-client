import React, { use } from 'react';
import { data, Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';


const Register = () => {

    const {googleSignIn,signInUser, user,
        loading} = use(AuthContext);


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.url.value;
        const password = e.target.password.value;
        console.log(name, email, url, password);

        signInUser(email,password)
        .then(res => {console.log(res);})
        .catch(err=>{console.log(err);})


    }

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(res => {


            const newUser = {
                name:res.user.displayName,
                email:res.user.email,
                image:res.user.photoURL
            }

            
            fetch('http://localhost:3000/users',{
                  method:"POST",
                  headers:{
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })

            console.log(res);})
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                        <p className="py-6">
                            Already have an account <Link to={'/login'} className='text-blue-600'>Login</Link>
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">

                            <fieldset className="fieldset">
                                <form onSubmit={handleRegister}>
                                    <label className="label">Name</label>
                                    <input type="text" className="input" name='name' placeholder="Enter your name" />
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Image URL</label>
                                    <input type="text" className="input" name='url' placeholder="Enter your profile url" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />

                                    <button className="btn btn-neutral mt-4 w-full">Register</button>
                                </form>
                                <div className='text-center'>or</div>
                                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </fieldset>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;