import fire from "../config/firebase"

export default class TenantController {

    //Funcion para crear un Tenant
    createTenant = (tenantId,userInfo) => {
        let direction = '/tenant/'+tenantId;
        return fire.firestore().doc(direction).set(userInfo);
    }

    //Funcion para actualizar un Tenant
    updateTenant = (tenantId,info) =>{
        let direction = '/tenant/'+tenantId;
        return fire.firestore().doc(direction).update(info)
    }

    //Funcion para obtener un Tenant
    readTenant = async (tenantId) =>{
        let direction = '/tenant/'+tenantId;
        return await fire.firestore().doc(direction).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    //Funcion apra eliminar un Tenant
    deleteTenant = (tenantId) =>{
        let direction = '/tenant/'+tenantId;
        return fire.firestore().doc(direction).delete();
    }

}