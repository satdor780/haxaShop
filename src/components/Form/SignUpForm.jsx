import { useState } from "react"

import './login.css'
import { useDispatch } from "react-redux"
import { signUp, toggleModalType } from "../redux/userSlice"

export const SignUpForm = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [dublicate, setDublicate] = useState('')

    const [emailErr, setEmailErr] = useState(false)
    const [nameErr, setNameErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const [dublicateErr, setDublicateErr] = useState(false)

    const emailHandler = (e) => {
        setEmail(e.target.value)
        e.target.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) ? setEmailErr(false): setEmailErr('err')
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        e.target.value.length < 3 ? setNameErr('err'): setNameErr(false)
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

    const dublicateHandler = (e) => {
        setDublicate(e.target.value)
        e.target.value === password ? setDublicateErr(false): setDublicateErr('err')
    }


    const formSubmit = (e) => {
        e.preventDefault()
        const user = {
            "name": name,
            "email": email,
            "password": password,
            "avatar": "https://picsum.photos/800",
        }
        dispatch(signUp(user))
    }

    return(
        <div className="contact-us" onSubmit={formSubmit}>
            <form id="contact">
                <h2>Sign up</h2>
                <div className="row">
                    <div className="input__container">
                        <fieldset>
                            <input type="text"  placeholder="Your name" value={name} onChange={e => nameHandler(e)} />
                            {nameErr && <span>{nameErr}</span>}
                        </fieldset>
                    </div>
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
                    <div className="input__container">
                        <fieldset>
                            <input type="text" placeholder="dublicate password" value={dublicate}  onChange={e => dublicateHandler(e)} />
                            {dublicateErr && <span>{dublicateErr}</span>}
                        </fieldset>
                    </div>

                    <div className="input__container toggle-form">
                        <p>уже есть аккунт ? <pre onClick={() => dispatch(toggleModalType('signIn'))}>войти</pre></p>
                    </div>

                    <div className="input__container">
                        <fieldset/>
                        <button type="submit" id="form-submit" className="main-dark-button">send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}