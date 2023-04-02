import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoryCreate, listCategory } from '../../actions/categoryAction';
import AdminMenu from './AdminMenu'
import CategoryForm from './CategoryForm';

const CretaeCategory = () => {
    const dispatch = useDispatch();
    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;
    const [name, setName] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(categoryCreate(name));
        dispatch(listCategory())
    }
    useEffect(() => {
        dispatch(listCategory())
    }, [dispatch])
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h1>Manage Category</h1>
                    <div className="p-3">
                        <CategoryForm
                            handleSubmit={handleSubmit}
                            value={name}
                            setValue={setName}
                        />
                    </div>
                    <div className='w-75'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((c) =>
                                    <>
                                        <tr>
                                            <td key={c._id}>{c.name}</td>
                                            <td>
                                                <button className='btn btn-primary ms-2' >Edit</button>
                                                <button className='btn btn-danger ms-2' >Edit</button>
                                            </td>
                                        </tr>
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CretaeCategory