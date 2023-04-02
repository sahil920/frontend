import React from 'react'
import AdminMenu from './AdminMenu'

const User = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminMenu />
            </div>
            <div className="col-md-9">
                <h1>User</h1>
            </div>
        </div>
    )
}

export default User