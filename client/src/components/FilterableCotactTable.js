import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
export default function FilterableCotactTable({ countacts }) {
    console.log(countacts);
    const [filterText, setFilterText] = useState([]);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                setFilterText={setFilterText}
            />
            <ContactsTable
                countacts={countacts}
                filterText={filterText}
            />
        </div>
    );
}
function SearchBar({ filterText, setFilterText, }) {
    return (
        <input
            type="text"
            value={filterText} placeholder="חיפוש אנשים ..."
            onChange={(e) => setFilterText(e.target.value)} />
    );
}

function ContactsTable({ countacts, filterText }) {
    let filtered = countacts.filter((c) => c.firstName.includes(filterText) || c.LastName.includes(filterText))

    return (<Table striped bordered hover variant="dark" >
        <thead>
            <tr>
                <th>שם פרטי</th>
                <th>שם משפחה</th>
                <th>פלאפון</th>
            </tr>
        </thead>
        <tbody>{filtered.map(c => <ContactRow contact={c} />)} </tbody>
    </Table>


    );
}

function ContactRow({ contact }) {
    const { firstName, LastName, number } = contact;

    return (
        <tr>
            <td>{firstName}</td>
            <td>{LastName}</td>
            <td>{number}</td>
        </tr>
    );
}
