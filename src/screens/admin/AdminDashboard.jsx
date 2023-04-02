import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import AdminMenu from './AdminMenu'
const AdminDashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const Product = useSelector(state => state.productList)
    console.log(Product)
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    return (
        <>
            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <h3> Admin Name : {userInfo.name}</h3>
                            <h3> Admin Email : {userInfo.email}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard