import React, { useState} from 'react'

const Clients = () => {
    const [listClients, setListClients] = useState([])

    const fetchClients = async () => {
        const res = await fetch("http://localhost:8080/listClients")
        const data = await res.json()
        setListClients(data)
    }

    const fetchHommes = async () => {
        const res = await fetch("http://localhost:8080/listHommes")
        const data = await res.json()
        setListClients(data)
    }

    const fetchOntarien = async () => {
        const res = await fetch("http://localhost:8080/listOntariens")
        const data = await res.json()
        setListClients(data)
    }

    return (
        <div>
            <button onClick={fetchClients}>Fetch Client</button>
            <button onClick={fetchHommes}>Fetch Hommes</button>
            <button onClick={fetchOntarien}>Fetcho Ontariens</button>

            <table>
                <tbody  >
                    {listClients.map((client) => (
                        <tr>
                            <td>{client.id}</td>
                            <td>{client.firstName}</td>
                            <td>{client.lastName}</td>
                            <td>{client.gender}</td>
                            <td>{client.birthDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Clients
