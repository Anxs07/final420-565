import React from 'react'

const ClientsTab = (clients) => {
    return (
        <div>
            <table>
                <tbody>
                    {clients.map((client) => (
                        <tr>
                            <td>{client.firstName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ClientsTab
