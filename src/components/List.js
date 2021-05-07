import React from 'react'

export default function List(props) {
    const p=props.movieList
    return (
        <table>
        
            <tr>
                <td>{p.name}</td>
                <td>{p.year}</td>
                <td>{p.genre}</td>
                <td>{p.income}</td>
            </tr>
           
        </table>
    )
}
