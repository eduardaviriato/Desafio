import React, {Component} from 'react'
import {LineChart, Area,CartesianGrid, XAxis, YAxis, Tooltip, Label, AreaChart} from 'recharts'

class Chart extends Component{
    constructor(props){
        super(props)
        this.state = {
            dados: [
                {name: '0h', 2020: 120, 2019: 130},
                {name: '8h', 2020: 252, 2019: 121},
                {name: '16', 2020: 234, 2019: 532},
                {name: '0h', 2020: 120, 2019: 130},
                {name: '8h', 2020: 252, 2019: 121},
                {name: '16', 2020: 234, 2019: 532},
                {name: '0h', 2020: 120, 2019: 130},
                {name: '8h', 2020: 252, 2019: 121},
                {name: '16', 2020: 234, 2019: 532},
                {name: '0h', 2020: 120, 2019: 130},
                {name: '8h', 2020: 252, 2019: 121},
                {name: '16', 2020: 234, 2019: 532},
                {name: '0h', 2020: 120, 2019: 130},
                {name: '8h', 2020: 252, 2019: 121},
                {name: '16', 2020: 234, 2019: 532},
                {name: '0h', 2020: 120, 2019: 130},
                {name: '8h', 2020: 252, 2019: 121},
                {name: '16', 2020: 234, 2019: 532},
                {name: '0h', 2020: 120, 2019: 130},
                {name: '8h', 2020: 252, 2019: 121},
                {name: '16', 2020: 234, 2019: 532},
                {name: '0h', 2020: 120, 2019: 130},
                {name: '8h', 2020: 252, 2019: 121},
                {name: '16', 2020: 234, 2019: 532}
            ]
        }
        this.addData = this.addData.bind(this)
    }
    
    addData(e){
        console.log('atualizando dados')
        // this.setState(state => {
        //     const dados = [...state.dados, {name: '04h', 
        //                                     2020: Math.floor(Math.random() * (500 - 10) ) + 10,
        //                                     2019: Math.floor(Math.random() * (500 - 10) ) + 10}]
        //     return{
        //         dados
        //     }
        // })
        this.setState({dados: [ {name: '0h', 2020: 234, 2019: 156},
                                {name: '8h', 2020: 534, 2019: 605},
                                {name: '16', 2020: 564, 2019: 124},
                                {name: '0h', 2020: 405, 2019: 534}]
        })
    }

    render(){
        return(<div>
            <button className="TinyRedButton" onClick={this.addData}>Adicionar dado</button>
            <AreaChart width={700} height={400} data={this.state.dados}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#569adc" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#569adc" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff79b0" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ff79b0" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    
                    <Tooltip />
                    <Area type="monotone" dataKey="2020" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />     
                    <Area type="monotone" dataKey="2019" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />     
                </AreaChart>
        </div>
        )
    }

}
export default Chart