export default class FirebaseService {

    static list = (firestore, callback) => {

        let ref = firestore.collection('estud')
        ref.onSnapshot(
            (query) => {
                let estud = []
                query.forEach(
                    (doc) => {
                        const { cpfcli, data, valor, canalcompra,metodoent, metodopag } = doc.data()
                        estud.push(
                            {
                                _id: doc.id,
                                cpfcli, 
                                data, 
                                valor,
                                canalcompra,
                                metodoent,
                                metodopag
                            }
                        )//push
                    }//doc
                )//forEach

                //callback
                callback(estud)
            }//query

        )//onSnapshot

    }

    static delete = (firestore, callback, id) => {
        
        firestore.collection('estud').doc(id).delete()
        .then(
            () => callback('ok')
        )
        .catch(
            error => callback('nok')
        )
        
    }

    static create = (firestore, callback, estud) => {
        firestore.collection('estud').add(
            {
                cpfcli:estud.cpfcli,
                 data:estud.data, 
                 valor:estud.valor,
                 canalcompra:estud.canalcompra,
                 metodoent:estud.metodoent,
                 metodopag:estud.metodopag
               
            }
        )
            .then(() => callback('ok'))
            .catch(error => callback('nok'))

    }

    static retrieve = (firestore, callback, id) => {
        firestore.collection('estud').doc(id).get()
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

    static edit = (firestore, callback, estud, id) => {

        firestore.collection('estud').doc(id).set(
            {
                cpfcli:estud.cpfcli,
                 data:estud.data, 
                 valor:estud.valor,
                 canalcompra:estud.canalcompra,
                 metodoent:estud.metodoent,
                 metodopag:estud.metodopag
            }
        )
            .then(() => callback('ok'))
            .catch((error) => callback('nok'))

    }

}