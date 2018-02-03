
import React from 'react'
import ReactDOM from 'react-dom'

const Osa = ({osa}) => <p>{osa.nimi} {osa.tehtavia}</p>
const Otsikko = ({kurssi}) => <h1>{kurssi.nimi}</h1>

const Yhteensa = ({osat}) => {
    const yht = osat.map(osa => osa.tehtavia)
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    return (
        <p>{yht.reduce(reducer)}</p>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <ul>
                {kurssi.osat.map(osa => <Osa key={osa.id} osa={osa}/>)}
                <Yhteensa osat={kurssi.osat}/>
            </ul>
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
            <Kurssi kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)