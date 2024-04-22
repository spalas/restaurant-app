import { useForm } from "react-hook-form"
import { Helmet  } from 'react-helmet-async';
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2';
import {  Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../../compoments/SocialLogin/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic();
    const {
        register,
      handleSubmit,
      reset,
      formState: { errors },
  } = useForm()
  
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate();




  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password).then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      updateUserProfile(data.name, data.photoUR)
        .then(() => {

          const userInfo = {
            name: data.name,
            email: data.email,
             }
          axiosPublic.post("/users", userInfo)
            .then(res => {
              if (res.data.insertedId) {
                // console.log("user updated")
                reset();
         
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate ("/")
            }
          })
          
  }).catch(error=>console.log(error))
      
    })
    }
    

    return (
      <>
        <Helmet>
           <title>Blackpepper | Sign Up</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  </div>
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input  {...register("name", { required: true })}type="text" name= "name" placeholder="name" className="input input-bordered"  />
                        {errors.name && <span className="text-red-600"> Name is requried</span>}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input  {...register("photoURL", { required: true })}type="text" placeholder="photo URL" className="input input-bordered"  />
                        {errors.PhotoURL && <span className="text-red-600"> Photo URL is requried</span>}
                      </div>
                                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered"  />
                        {errors.email && <span className="text-red-600"> Email is requried</span>}
                                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                              <input type="password"  {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 16,
                                pattern: /^(?=.*[A-Za-z]+$)/
                              })} name="password" placeholder="password" className="input input-bordered" />
                              {errors.password?.type === "required" && <span className="text-red-600"> Password is required</span>}
                              {errors.password?.type === "minLength" && <span className="text-red-600"> Password must be 8 characters</span>}
                              {errors.password?.type === "maxLength" && <p className="text-red-600"> Password less than 16 characters</p>}
                              {errors.password?.type === "pattern" && <p className="text-red-600"> Password must be special characters desire </p>}
                              
                              <label className="label">
                            
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                      </div>
                            <div className="form-control mt-6">
                              <input className="btn btn-primary" type="submit" value="Sign Up"/>

                            
            
                </div>
                <p className='p-6 '><small><Link to = "/login">Already have an Account? </Link></small></p>
              </form>
              <SocialLogin></SocialLogin>
            </div>
            
                </div>
   </div>
      </>
    );
};

export default SignUp;