import React from "react";

export const TableBody = (props) => {
    if (props.search=== "") {

        return (
            <tbody>
                {props.people.map(user => (
                    <tr key={user.cell}>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><img src={user.picture.thumbnail} alt={user.name.first} /></td>
                    </tr>
                ))}
            </tbody>
        );
    }

    else if (typeof props.search=== 'string') {
        let matches = props.people.filter(function (result) {
            return (result.name.first + " " + result.name.last).substring(0, props.search.length).toLowerCase() === props.search.toLowerCase()
        })
        return (
            <tbody>
                {matches.map(user => (
                    <tr key={user.cell}>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><img src={user.picture.thumbnail} alt={user.name.first} /></td>
                    </tr>
                ))}
            </tbody>
        );
    }
}