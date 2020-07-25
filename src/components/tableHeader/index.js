import React from "react";

export const TableHeader = (props) => {
  const { sortByFirstName, sortByLastName } = props
return (
  <thead>
    <tr>
      <th scope="col"><a href="#SortFirst" onClick={() => sortByFirstName()}>First</a></th>
      <th scope="col"><a href="#SortLast" onClick={() => sortByLastName()}>Last</a></th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Picture</th>
    </tr>
    </thead>
);
}