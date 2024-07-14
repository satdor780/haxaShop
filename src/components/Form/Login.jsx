import { useEffect, useState } from "react"

import './login.css'
import { useDispatch, useSelector } from "react-redux"
import { signIn, toggleModalType } from "../redux/userSlice"
import { useLocalStorage } from "../utils/useLocalStorage.jsx"

export const Login = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)

    // const [userLogined, setUserLogined] = useLocalStorage('user')
    

    const emailHandler = (e) => {
        setEmail(e.target.value)
        e.target.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) ? setEmailErr(false): setEmailErr('Некорректный email')
    }

    const passwordHandler = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    
        if (passwordValue.length < 6) {
            setPasswordErr('Пароль слишком короткий');
        } else if (passwordValue.length > 14) {
            setPasswordErr('Пароль слишком длинный');
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
        
        // setUserLogined(() => {
        //     return user
        // })

        dispatch(signIn(user))
       
    }

    useEffect(() => {
        // console.log(userLogined)
        // userLogined ? 
    }, [])

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