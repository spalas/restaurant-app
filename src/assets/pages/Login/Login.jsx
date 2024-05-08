import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../../compoments/SocialLogin/SocialLogin';


const Login = () => {

  const CaptchaRef = useRef(null)
  const [disabled, setDisabled] = useState(true)
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();

  // const from = location.state?.from?.pathname || "/";
  // console.log("state in the location  login page", location.state)
  





    useEffect(() => {
        loadCaptchaEnginge(6)
},[])

    const handleLogin = e => { 
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      // console.log(email, password);
      signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate("/")   
      })
    }

    const habdleValiateCatcha = () => {
        const user_captcha_value = CaptchaRef.current.value
        if (validateCaptcha(user_captcha_value)) {
         setDisabled(false)
        } else {
            setDisabled(true)
 }

       
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    <p className="py-6">Try to login in the floowing disscounting system Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sequi.
                    </p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>            
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input ref={CaptchaRef} type="text" name="captcha" placeholder="Type here above captcha" className="input input-bordered" required />
          <button onClick={habdleValiateCatcha} className="btn btn-outline btn-xs mt-2">valite</button>
        </div>
        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Login</button> */}
        <input disabled={disabled } className="btn btn-primary" type="submit"  value="Login"/>        
        </div>
            </form>
            
            <p className='p-6 '><small>New here? <Link to="/signup">Create an account</Link></small></p>
            <SocialLogin ></SocialLogin>
          </div>

          
  </div>
</div>
    );
};

export default Login;