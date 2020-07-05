import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService'

export default class TableRow extends Component {

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this) 
    }

    apagar(id,cpfcli){

        let res = window.confirm(`Deseja apagar ${cpfcli}, id: ${id}?`)
        if(res){
            FirebaseService.delete(
                this.props.firebase.getFirestore(),
                (mensagem)=>{
                    if(mensagem==='ok')
                        console.log(`${cpfcli} apagado.`)
                },
                id
            )
        }
        
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.estud._id}
                </td>
                <td>
                    {this.props.estud.cpfcli}
                </td>
                <td>
                    {this.props.estud.data}
                </td>
                <td>
                    {this.props.estud.valor}
                </td>
                <td>
                    {this.props.estud.canalcompra}
                </td>
                <td>
                    {this.props.estud.metodoent}
                </td>
                <td>
                    {this.props.estud.metodopag}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/"+this.props.estud._id} className="btn btn-primary">
                        Editar
                    </Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={()=> this.apagar(this.props.estud._id,
                                                      this.props.estud.cpfcli)} 
                    className="btn btn-danger">
                        Apagar
                    </button>
                </td>
            </tr>
        )
    }
}