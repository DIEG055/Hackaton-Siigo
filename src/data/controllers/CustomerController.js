import fire from "../config/firebase"

export default class CustomerController {

    //Funcion para crear un customer
    createCustomer = (userId,userInfo) => {
        let direction = '/customer/'+userId;
        return fire.firestore().doc(direction).set(userInfo);
    }

    //Funcion para actualizar un customer
    updateCustomer = (userId,info) =>{
        let direction = '/customer/'+userId;
        return fire.firestore().doc(direction).update(info)
    }

    //Funcion para obtener un customer
    readCustomer = async (userId) =>{
        let direction = '/customer/'+userId;
        return await fire.firestore().doc(direction).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    //Funcion para eliminar los customer
    deleteCustomer = (userId) =>{
        let direction = '/customer/'+userId;
        return fire.firestore().doc(direction).delete();
    }

}