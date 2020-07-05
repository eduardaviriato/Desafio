import React, { Component } from 'react'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const EditPage = (props) => (
    <FirebaseContext.Consumer>
        {contexto => <Edit firebase={contexto} id={props.match.params.id} />}
    </FirebaseContext.Consumer>
)

class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = { cpfcli:'', data:'', valor:'', canalcompra:'',metodoent:'', metodopag: '' }

        this.setCpfcli = this.setCpfcli.bind(this)
        this.setData = this.setData.bind(this)
        this.setValor = this.setValor.bind(this)
        this.setCanalcompra = this.setCanalcompra.bind(this)
        this.setMetodoent = this.setMetodoent.bind(this)
        this.setMetodopag = this.setMetodopag.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        FirebaseService.retrieve(
            this.props.firebase.getFirestore(),
            (estud) => {
                if (estud)
                    this.setState({
                        cpfcli:estud.cpfcli,
                        data:estud.data, 
                        valor:estud.valor,
                        canalcompra:estud.canalcompra,
                        metodoent:estud.metodoent,
                        metodopag:estud.metodopag
                    })

            },
            this.props.id
        )
    }

    setCpfcli(e) {
        this.setState({ cpfcli: e.target.value })
    }
    
    setData(e) {
        this.setState({ data: e.target.value })
    }

    setValor(e) {
        this.setState({ valor: e.target.value })
    }
    setCanalcompra(e) {
        this.setState({ canalcompra: e.target.value })
    }
    setMetodoent(e) {
        this.setState({ metodoent: e.target.value })
    }
    setMetodopag(e) {
        this.setState({ metodopag: e.target.value })
    }   

    onSubmit(e){
        e.preventDefault()

        const estud = {
            cpfcli:this.state.cpfcli,
            data:this.state.data, 
            valor:this.state.valor,
            canalcompra:this.state.canalcompra,
            metodoent:this.state.metodoent,
            metodopag:this.state.metodopag
        }
        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                if(mensagem==='ok') console.log(`Produto atualizado com sucesso.`)
            },
            estud,
            this.props.id
        )

        this.setState({  cpfcli:'', data:'', valor:'', canalcompra:'',metodoent:'', metodopag: ''  })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar </h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Cpf: </label>
                        <input type="text" className="form-control" 
                        value={this.state.cpfcli} onChange={this.setCpfcli}/>
                    </div>
                    <div className="form-group">
                        <label>Data: </label>
                        <input type="text" className="form-control" 
                        value={this.state.data} onChange={this.setData}/>
                    </div>
                    <div className="form-group">
                        <label>Valor: </label>
                        <input type="text" className="form-control" 
                        value={this.state.valor} onChange={this.setValor}/>
                    </div>
                    <div className="form-group">
                        <label>Canal de compra: </label>
                        <input type="text" className="form-control" 
                        value={this.state.canalcompra} onChange={this.setCanalcompra}/>
                    </div>
                    <div className="form-group">
                        <label>Metodo  de Entrada: </label>
                        <input type="text" className="form-control" 
                        value={this.state.metodoent} onChange={this.setMetodoent}/>
                    </div>
                    <div className="form-group">
                        <label>Metodo de Pagamento: </label>
                        <input type="text" className="form-control" 
                        value={this.state.metodopag} onChange={this.setMetodopag}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Editar " className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}

export default EditPage