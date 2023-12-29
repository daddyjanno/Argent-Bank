import React, { useEffect, useState } from 'react'
import UserEditForm from '../features/user/UserEditForm'
import Account from '../features/Account/Account'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthConnected, getUserInfos, setUser } from '../store/authSlice'
import { useGetUserInfosQuery } from '../store/apiSlice'

function Profile() {
    const dispatch = useDispatch()
    const [editToggle, setEditToggle] = useState(false)
    const connected = useSelector(getAuthConnected)
    const user = useSelector(getUserInfos)
    const userInfos = useGetUserInfosQuery(null, {
        skip: !connected && !Object.keys(user).length,
    })

    useEffect(() => {
        if (!Object.keys(user).length && userInfos.data) {
            dispatch(setUser(userInfos.data))
        }
    }, [dispatch, user, userInfos.data])

    const handleClick = (e) => {
        e.preventDefault()
        setEditToggle(!editToggle)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {!editToggle && `${user.firstName} ${user.lastName}`}
                </h1>
                {editToggle ? (
                    <UserEditForm
                        editToggle={editToggle}
                        setEditToggle={setEditToggle}
                    />
                ) : (
                    <button
                        className="edit-button"
                        onClick={(e) => handleClick(e)}
                    >
                        Edit Name
                    </button>
                )}
            </div>
            <Account />
        </main>
    )
}

export default Profile
