import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () => (

    <FirebaseContext.Consumer>
        {contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props)
        this._isMounted = false
        this.state = { estud: [], loading: false }
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({ loading: true })
        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (estud) => {
                if (estud) {
                    if (this._isMounted) {
                        this.setState({ estud: estud, loading: false })
                    }
                }
            }
        )
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    montarTabela() {
        if (!this.state.estud) return
        return this.state.estud.map(
            (est, i) => {
                return <TableRow estud={est}
                    key={i}
                    firebase={this.props.firebase}
                />
            }
        )
    }

    gerarConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td colSpan='6' style={{ textAlign: "center" }}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>
            )
        } else return this.montarTabela()
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar</h3>

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CPF</th>
                            <th>Data</th>
                            <th>Valor</th>
                            <th>Canal de Compra</th>
                            <th> Metodo de Entrega</th>
                            <th>Metodo de Pagamento</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gerarConteudo()}
                    </tbody>

                </table>


            </div>
        )
    }
}

export default ListPage