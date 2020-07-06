import React, { Component } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import firebase from '../utils/firebase'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'
import Text, { Subtitle } from './Text'

const ChartPage = (props) => (
    <FirebaseContext.Consumer>
        {contexto => <Chart classification={props.classification} firebase={contexto}/>}
    </FirebaseContext.Consumer>
)

class Chart extends Component{
    constructor(props)    {
        super(props)
        this.state = {
            data: [
                {name: '10', value: 108, amt: 342},
                {name: '11', value: 312, amt: 634},
                {name: '12', value: 350, amt: 1256},
                {name: '13', value: 102, amt: 235},                
            ],
            classification: this.props.classification,
            filter: this.props.filter
        }
        this.setFilter = this.setFilter.bind(this)
    }

    setFilter(e){
        console.log(e)
        FirebaseService.query_venda(0, '12/2020', firebase.firestore(),
        (dados) => {
            console.log(dados)
            this.setState({
                data: dados
            })
        })
        
    }
    
    render(){
        const secondLineYears = <Area type="monotone" dataKey="amt" stroke="#ff79b0" fillOpacity={1} fill="url(#colorB)" />
        const secondLineChannels = <Area type="monotone" dataKey="amt" stroke="#ff79b0" fillOpacity={1} fill="url(#colorB)" />
        const thirdLineChannels = <Area type="monotone" dataKey="amt" stroke="#ff79b0" fillOpacity={1} fill="url(#colorB)" />
        return(
            <div>
                <div className="chart_title">
                    <Subtitle>Volume financeiro {this.state.classification}</Subtitle>
                </div>
                <div className="FilterContainer">
                    <h4>Filtrar Por:</h4>
                    <div className="FilterButton Transition" onClick={this.setFilter}>Canal</div>
                    <div className="FilterButton Transition">Pagamento</div>
                    <div className="FilterButton Transition">Entrega</div>
                </div>
                <div className="body_chart_container">
                    <div className="section_chart">
                        <div className="section_chart_container">
                            <AreaChart width={700} height={400} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <defs>
                                    <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#569adc" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#569adc" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff79b0" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#ff79b0" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="value" stroke="#569adc" fillOpacity={1} fill="url(#colorA)"/>
                                {this.state.classification === 'comparando anos' ? secondLineYears : null}
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </AreaChart>
                        </div>
                    </div>
                    <div className="section_hint">
                        
                    </div>
                </div>
            </div>
            )
    }    
}

export default ChartPage