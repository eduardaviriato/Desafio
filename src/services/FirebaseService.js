export default class FirebaseService {
    static DIA = 0
    static MES = 1
    static ANO = 2

    static query_venda = (filtro, parametro, firestore, callback) => {
        let ref = firestore.collection('estud')
        ref.onSnapshot(
            (query) => {
                let dados = []
                query.forEach(
                    (doc) => {
                        const {cpfcli, data, valor, canalcompra, metodoent, metodopag} = doc.data()
                        if(filtro === this.DIA){
                            console.log(cpfcli, data, valor, canalcompra, metodoent, metodopag)

                            let dia = data.split('/')[this.DIA] 
                            let mes = data.split('/')[this.MES]
                            let ano = data.split('/')[this.ANO]

                            console.log(dia, mes, ano)

                            if(mes+'/'+ano === parametro){
                                let dado = dados.find(dado => dado.name === dia)
                                if(dado){
                                    dado.value = dado.value + valor
                                } else {
                                    dados.push({name:dia, value:valor})
                                }
                            }
                        }
                    }
                )
                callback(dados.sort((a, b) => (a.name > b.name) ? 1 : -1))
            }
        )
    }

    static list = (mes, firestore, callback) => {

        let ref = firestore.collection('compras')
        ref.onSnapshot(
            (query) => {
                let compras = []
                //let soma_valor = 0
                query.forEach(
                    (doc) => {
                        
                        const { cpfcli, data, valor, canalcompra, metodoent, metodopag } = doc.data()
                        //if (data.split("/")[this.MES] === mes){
                            //soma_valor = soma_valor + parseFloat(valor)
                            compras.push({_id: doc.id, cpfcli, data, valor, canalcompra, metodoent, metodopag})//push
                        //}
                        //console.log(soma_valor)
                    }//doc
                )//forEach

                //callback
                callback(compras)
            }//query

        )//onSnapshot

    }

    static delete = (firestore, callback, id) => {
        
        firestore.collection('compras').doc(id).delete()
        .then(
            () => callback('ok')
        )
        .catch(
            error => callback('nok')
        )
        
    }

    static create = (firestore, callback, compras) => {
        firestore.collection('compras').add(
            {
                cpfcli:compras.cpfcli,
                data:compras.data, 
                valor:compras.valor,
                canalcompra:compras.canalcompra,
                metodoent:compras.metodoent,
                metodopag:compras.metodopag
            }
        )
            .then(() => callback('ok'))
            .catch(error => callback('nok'))
    }

    static retrieve = (firestore, callback, id) => {
        firestore.collection('compras').doc(id).get()
            .then(
                (doc) => {
                    callback(
                        {
                            cpfcli:doc.data().cpfcli,
                            data:doc.data().data, 
                            valor:doc.data().valor,
                            canalcompra:doc.data().canalcompra,
                            metodoent:doc.data().metodoent,
                            metodopag:doc.data().metodopag
                          
                        }
                    )
                }
            )
            .catch(error => callback(null))
    }

    static edit = (firestore, callback, compras, id) => {
        firestore.collection('compras').doc(id).set(
            {
                cpfcli:compras.cpfcli,
                data:compras.data, 
                valor:compras.valor,
                canalcompra:compras.canalcompra,
                metodoent:compras.metodoent,
                metodopag:compras.metodopag
            }
        )
        .then(() => callback('ok'))
        .catch((error) => callback('nok'))

    }

}