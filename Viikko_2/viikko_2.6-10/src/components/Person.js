import React from 'react'

const Person = ({ person, delFunc }) => {
    return (
        <p>
            {person.name} {person.number} <button onClick={() => delFunc(person.id)}>poista</button>
        </p>


    )
}

export default Person