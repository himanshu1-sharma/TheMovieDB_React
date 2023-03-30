import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Navigation from '../includes/Navigation';

const Users = () => {

    const [data, setData] = useState()
    const [isOffline, setIsOffline] = useState(false)

    const fetchData = async () => {
        try {
            await Axios("https://www.groonli.online/api/crm/admin/get-all-demo-users")
                .then(data => {
                    setData(data.data.data)
                    localStorage.setItem("all users", JSON.stringify(data.data.data))
                })
        } catch (error) {
            console.log(error)
            setIsOffline(true)
            let collection = localStorage.getItem("all users")
            setData(JSON.parse(collection))
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    return (
        <>
            <Navigation />
            {isOffline &&
                <Alert variant="danger">
                    Your Connection is offline!
                </Alert>
            }
            <div className='container mt-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((curElt, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{curElt.name}</td>
                                        <td>{curElt.title}</td>
                                        <td>{curElt.username}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Users