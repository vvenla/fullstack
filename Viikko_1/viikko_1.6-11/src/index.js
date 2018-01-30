import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    lisaaPalaute = (arvio) => () => this.setState({
        [arvio]: this.state[arvio] + 1
    })


    render() {
        return (

            <div>
                <h1>Anna palautetta</h1>
                <div>
                    <Button
                        handleClick={this.lisaaPalaute('hyva')}
                        text="hyvä"
                    />
                    <Button
                        handleClick={this.lisaaPalaute('neutraali')}
                        text="neutraali"
                    />
                    <Button
                        handleClick={this.lisaaPalaute('huono')}
                        text="huono"
                    />
                </div>
                <h1>Statistiikka</h1>
                <div>
                    <Statistics statistics={this.state} />
                </div>
            </div>
        )
    }
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({ statistic, value }) => (
    <p>{statistic} {value}</p>
)

class Statistics extends React.Component {
    render() {
        const { statistics } = this.props

        const maara = (
            statistics.hyva
            + statistics.neutraali
            + statistics.huono)
        const ka = ((statistics.hyva - statistics.huono) / maara)
        const positiivisia = ((statistics.hyva / maara) * 100) + " %"

        return (
            <div>
                <Statistic statistic="hyvä" value={statistics.hyva} />
                <Statistic statistic="neutraali" value={statistics.neutraali} />
                <Statistic statistic="huono" value={statistics.huono} />
                <Statistic statistic="keskiarvo" value={ka} />
                <Statistic statistic="positiivisia" value={positiivisia} />
            </div>
        )

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)