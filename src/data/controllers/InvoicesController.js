import fire from "../config/firebase"

export default class InvoicesController {

    //Funcion para crear un Invoice
    createInvoice = (invoiceId,userInfo) => {
        let direction = '/invoice/'+invoiceId;
        return fire.firestore().doc(direction).set(userInfo);
    }

    //Funcion para actualizar un Invoice
    updateInvoice = (invoiceId,info) =>{
        let direction = '/invoice/'+invoiceId;
        return fire.firestore().doc(direction).update(info)
    }

    //Funcion para obtener un Invoice
    readInvoice = async (invoiceId) =>{
        let direction = '/invoice/'+invoiceId;
        return await fire.firestore().doc(direction).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    //Funcion apra eliminar un Invoice
    deleteInvoice = (invoiceId) =>{
        let direction = '/invoice/'+invoiceId;
        return fire.firestore().doc(direction).delete();
    }

}