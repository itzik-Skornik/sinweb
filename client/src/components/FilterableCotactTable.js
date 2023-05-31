import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
export default function FilterableCotactTable({ countacts }) {
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
        <form>
            <input
                type="text"
                value={filterText} placeholder="חיפוש אנשים ..."
                onChange={(e) => setFilterText(e.target.value)} />
        </form>
    );
}

function ContactsTable({ countacts, filterText }) {



    return (<Table striped bordered hover variant="dark" >

        <thead>
            <tr>
                <th>firstName</th>
                <th>LastName</th>
                <th>number</th>
            </tr>
        </thead>
        <tbody>{countacts && countacts.length &&
            countacts.filter((c) => c.firstName.includes(filterText) || c.LastName.includes(filterText))
                .map(c => <ContactRow contact={c} />)}
        </tbody>
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
