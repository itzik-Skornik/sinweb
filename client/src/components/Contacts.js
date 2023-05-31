import React from 'react'
import Table from 'react-bootstrap/Table';

function Contacts({ data }) {
    console.log(data);
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>שם פרטי</th>
                    <th> שם משפחה</th>
                    <th>מספר פלאפון</th>
                 
                  
                </tr>
            </thead>
            <tbody>
                {data && data.map(item =>
                    <tr>
                        <td>{item.firstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.number}</td>
                        
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Contacts