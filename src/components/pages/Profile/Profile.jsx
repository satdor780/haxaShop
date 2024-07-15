import { useSelector } from "react-redux"

import './profile.css'
import GoBackButton from "../../goBackBtn/GoBackButton"

export const Profile = () => {
    const user = useSelector(state => state.user.user)
    console.log(user)
    return(
        <>
            <GoBackButton />
            <div className="profile container">
                <div className="user">
                    <div className="avatar"><img src={user.avatar} alt="avatar" /></div>
                    <div className="info">
                        <span>{user.name}</span>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}