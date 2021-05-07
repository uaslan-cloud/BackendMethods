import React from 'react'

export default function RentList(props) {
    const l=props.rentMovie
    return (
<tr>
    <td>{l.movieId}</td>
    <td>{l.duration}</td>
    <td>{l.person}</td>
</tr>
    )
}
