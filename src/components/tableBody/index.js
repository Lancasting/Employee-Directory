import React from "react";

export const TableBody = (props) => {

    return (
        <tbody>
            {props.people.map(user => (
                <tr key={user.cell}>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td><img src={user.picture.thumbnail} /></td>
                </tr>
            ))}
        </tbody>
    );
}