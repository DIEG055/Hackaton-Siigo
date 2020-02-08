import fire from "../config/firebase"

export default class InvoiceItemsController {

    //Funcion para crear InvoiceItems
    createInvoiceItems = (invoiceItemsId,userInfo) => {
        let direction = '/invoiceItems/'+invoiceItemsId;
        return fire.firestore().doc(direction).set(userInfo);
    }

    //Funcion para actualizar InvoiceItems
    updateInvoiceItems = (invoiceItemsId,info) =>{
        let direction = '/invoiceItems/'+invoiceItemsId;
        return fire.firestore().doc(direction).update(info)
    }

    //Funcion para obtener InvoiceItems
    readInvoiceItems = async (invoiceItemsId) =>{
        let direction = '/invoiceItems/'+invoiceItemsId;
        return await fire.firestore().doc(direction).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    //Funcion apra eliminar InvoiceItems
    deleteInvoiceItems = (invoiceItemsId) =>{
        let direction = '/invoiceItems/'+invoiceItemsId;
        return fire.firestore().doc(direction).delete();
    }

}