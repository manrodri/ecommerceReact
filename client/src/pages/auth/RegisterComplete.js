import React, {useEffect, useState} from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=> {
        setEmail(window.localStorage.getItem('emailForRegistration'))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // validation
        if(!email || !password){
            toast.error("Email and password are required")
            return
        }
        if(password.length < 6){
            toast.error("Password must be at least 6 characters long")
            return
        }

        try{
            const result = await auth.signInWithEmailLink(email, window.location.href)
            if (result.user.emailVerified){
                // remove email from local Storage
                window.localStorage.removeItem('emailForRegistration')
                // get userId token
                let user = auth.currentUser
                await user.updatePassword(password)
                const idTokenResult = await user.getIdTokenResult()
                // populate redux store
                console.log('user', user, 'token', idTokenResult)
                // redirect
                history.push('/')
            }
        } catch (error){
            console.log(error)
            toast.error(error.message)
        }

    }

    const completeRegistrationForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className={`form-control`}
                    value={email}
                    disabled

                />
                <br/>
                <input type="password"
                       className={`form-control`}
                       onChange={event => setPassword(event.target.value)}
                       placeholder={'Enter your password'}
                       autoFocus

                />
                 <br/>
                <button className={`btn btn-raised`}>Complete Registration</button>

            </form>
        )
    }
  return (
    <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Complete registration</h4>
              {completeRegistrationForm()}
          </div>
        </div>
    </div>
  );
};

export default RegisterComplete;
