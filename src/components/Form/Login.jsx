import { useState } from "react"

import './login.css'
import { useDispatch } from "react-redux"
import { signIn, toggleModalType } from "../redux/userSlice"

export const Login = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)

    const emailHandler = (e) => {
        setEmail(e.target.value)
        e.target.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) ? setEmailErr(false): setEmailErr('err')
    }

    const passwordHandler = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    
        if (passwordValue.length < 6) {
            setPasswordErr('err 1');
        } else if (passwordValue.length > 14) {
            setPasswordErr('err 2');
        } else {
            setPasswordErr(false);
        }
    }



    const formSubmit = (e) => {
        e.preventDefault()
        const user = {
            "email": email,
            "password": password,
        }
        dispatch(signIn(user))
    }

    return(
        <div className="contact-us" onSubmit={formSubmit}>
            <form id="contact">
                <h2>Sign in</h2>
                <div className="row">

                    <div className="input__container">
                        <fieldset>
                            <input type="text"  placeholder="Your email" value={email} onChange={e => emailHandler(e)} />
                            {emailErr && <span>{emailErr}</span>}
                        </fieldset>
                    </div>
                    <div className="input__container">
                        <fieldset>
                            <input type="text" placeholder="Your password" value={password}  onChange={e => passwordHandler(e)} />
                            {passwordErr && <span>{passwordErr}</span>}
                        </fieldset>
                    </div>


                    <div className="input__container toggle-form">
                        <p>нету аккунта ? <pre onClick={() => dispatch(toggleModalType('signUp'))}>зарегистрировайся</pre></p>
                    </div>

                    <div className="input__container">
                        <fieldset/>
                        <button type="submit" id="form-submit" className="main-dark-button">войти</button>
                    </div>
                </div>
            </form>
        </div>
    )
}