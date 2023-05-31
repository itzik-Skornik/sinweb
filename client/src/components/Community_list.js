import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'

function Community_list({ user }) {
    console.log(user);
    const [names, setNames] = useState([])


    let requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email })
    };

    useEffect(() => {
        fetch("http://localhost:5000/auth/Community_list", requestOptions)
            .then(response => { return response.json() })
            .then(result => {
                console.log(result);
                if (result.msg) {
                    alert(result.msg)
                    return;
                }
                let arr;
                if (result.body) {
                    arr = Object.values(result.body);
                }
                setNames(arr)
                if (arr) console.log(arr);
            })


            .catch(error => alert(error));
    }, []);



    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>שם פרטי</th>
                    <th> שם משפחה</th>
                    <th>מספר פלאפון</th>
                    <th> כתובת מגורים</th>
                    <th> כתובת מייל</th>

                </tr>
            </thead>
            <tbody>
                {names && names.map(item =>
                    <tr>
                        <td>{item.firstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.number}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )

}

export default Community_list