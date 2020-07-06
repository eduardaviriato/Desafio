import React, { Component } from 'react'
import Chart from './Chart'

import Card from './RestrictedCard'

export default class Content extends Component {
    render() {
        return (
            <Card history={this.props.history}>
                Comparação de vendas por ano
                <Chart /><br /><br />
            </Card>
        )
    }
}



