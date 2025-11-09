import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/Authprovider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, setuser, signInWithGoogle } = use(AuthContext)
    const [passworderror, setpassworderror] = useState("");


    // navigation add 
    const navigation = useNavigate()
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/



    // google 
    const handleGoogleSignUp = () => {

        signInWithGoogle()
            .then((result) => {
                const user = result.user;

                setuser(user);

                navigation("/");
            })
            .catch((error) => {
                error(error.message);
            });
    };

    // email 
    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;


        console.log(name, email, photo, password)

        if (!pattern.test(password)) {
            setpassworderror(
                " Password must contain at least 6 characters, one uppercase & one lowercase letter."
            );
            return;
        } else {
            setpassworderror("");
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                // console.log( user)
                setuser(user)
                navigation("/");
            })
            .catch((error) => {
                const errorMessage = error.message
                toast(errorMessage)
            })

    }
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
                    <form onSubmit={handelRegister} className="card-body">
                        <fieldset className="fieldset">
                            {/* name  */}
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" required />

                            {/* photo url  */}
                            <label className="label">photo url </label>
                            <input type="text" name="photo" className="input" placeholder="Photo URL" required />


                            {/* email  */}

                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" required />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" required />
                            {passworderror && (
                                <p className="text-red-500 text-sm font-medium mt-2">{passworderror}</p>
                            )}

                            <button type="submit" className="btn btn-neutral mt-4">
                                register
                            </button>

                            {/* Google */}
                            <button onClick={handleGoogleSignUp} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg
                                    aria-label="Google logo"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <g>
                                        <path d="m0 0H512V512H0" fill="#fff"></path>
                                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                    </g>
                                </svg>
                                SignUp with Google
                            </button>

                            <p className='font-semibold text-center pt-5'>Allrady Have An Account ? {''} <Link className='text-red-700' to="/auth/login" > login</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;