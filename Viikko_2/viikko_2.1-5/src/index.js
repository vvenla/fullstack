
import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {
    const [osa1, osa2, osa3] = props.kurssi.osat
    return (
        <div>
            <Osa osa={osa1.nimi} tehtavia={osa1.tehtavia} />
            <Osa osa={osa2.nimi} tehtavia={osa2.tehtavia} />
            <Osa osa={osa3.nimi} tehtavia={osa3.tehtavia} />
        </div>
    )
}
const Yhteensa = (props) => {
    const [osa1, osa2, osa3] = props.kurssi.osat

    return (
        <p>yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} tehtävää</p>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <h1>{kurssi.nimi}</h1>
            <ul>
                {kurssi.osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)}
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