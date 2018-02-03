import React from 'react'

const Osa = ({ osa }) => <p>{osa.nimi} {osa.tehtavia}</p>
const Otsikko = ({ kurssi }) => <h1>{kurssi.nimi}</h1>

const Yhteensa = ({ osat }) => {
    const yht = osat.map(osa => osa.tehtavia)
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    return (
        <p>yhteensä {yht.reduce(reducer)} tehtävää</p>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <ul>
                {kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
                <Yhteensa osat={kurssi.osat} />
            </ul>
        </div>
    )
}

export default Kurssi