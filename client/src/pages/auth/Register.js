import React, {useState} from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Register = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        console.log(`env --->  ${process.env.REACT_APP_REGISTER_REDIRECT_URL}`)
        e.preventDefault()
        const config = {
            url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
           handleCodeInApp: true,
        }
        await auth.sendSignInLinkToEmail(email, config)
        toast.success(`Email is sent to ${email}. Click the link to complete your registration.`)

        // save user email to local storage
        window.localStorage.setItem('emailForRegistration', email)
        // clear state
        setEmail('')

    }

    const registerForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className={`form-control`}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoFocus
                />
                <br/>
                <button className={`btn btn-raised`}>Register</button>
            </form>
        )
    }
  return (
    <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Register</h4>
              {registerForm()}
          </div>
        </div>
    </div>
  );
};

export default Register;
