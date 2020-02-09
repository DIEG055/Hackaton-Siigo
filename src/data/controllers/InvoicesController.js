import fire from "../config/firebase"

export default class InvoicesController {

    //Funcion para crear un Invoice
    createInvoice = (invoiceId,tenantId,invoiceInfo) => {
        let direction = '/invoice/'+invoiceId+"/empresas/"+tenantId+"/facturas/";
        return fire.firestore().doc(direction).add(invoiceInfo);
    }

    //Funcion para actualizar un Invoice
    updateInvoice = (invoiceId,info) =>{
        let direction = '/invoice/'+invoiceId;
        return fire.firestore().doc(direction).update(info)
    }

    //Funcion para obtener un Invoice
    readInvoice = async (invoiceId,tenantId) =>{
        let direction = '/invoice/'+invoiceId+"/empresas/"+tenantId;
        return await fire.firestore().doc(direction).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    //Funcion para eliminar un Invoice
    deleteInvoice = (invoiceId) =>{
        let direction = '/invoice/'+invoiceId;
        return fire.firestore().doc(direction).delete();
    }

    //Funcion encargada de entregar todas las facturas de ese usuario
    getInvoices = (idCustomer) =>{
        /* let direction = '/invoice/'+invoiceId+"/empresas/"+tenantId+"/facturas/"; */
    }

}