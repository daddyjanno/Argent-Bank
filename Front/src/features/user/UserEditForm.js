import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfos, setUser } from '../../store/authSlice'
import { useEditUserInfosMutation } from '../../store/apiSlice'

function UserEditForm({ setEditToggle }) {
    const dispatch = useDispatch()
    const user = useSelector(getUserInfos)
    const [userNames, setUserNames] = useState({
        firstName: '',
        lastName: '',
    })

    // getting function from custom hook created by RTK Query
    const [editUserInfos] = useEditUserInfosMutation()

    const canSave = Boolean(userNames.firstName) && Boolean(userNames.lastName)

    const handleCancel = () => {
        setEditToggle(false)
    }
    const handleChange = (event) => {
        setUserNames({
            ...userNames,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            user.firstName !== userNames.firstName ||
            user.lastName !== userNames.lastName
        ) {
            editUserInfos(userNames)
            dispatch(setUser(userNames))
            handleCancel()
        }
    }

    return (
        <div>
            <div className="edit-wrapper">
                <input
                    type="text"
                    name="firstName"
                    placeholder={user.firstName}
                    value={userNames.firstName}
                    autoFocus
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder={user.lastName}
                    value={userNames.lastName}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="edit-wrapper">
                <button
                    className="edit-content-button"
                    disabled={!canSave}
                    onClick={(e) => handleSubmit(e)}
                >
                    Save
                </button>
                <button
                    className="edit-content-button"
                    onClick={() => handleCancel()}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default UserEditForm
