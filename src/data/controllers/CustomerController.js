import fire from "../config/firebase"


export default class CustomerController {

    constructor(){
        this.firebaseInstance = fire;
    }

    //Funcion para crear un cliente
    createCustomer = (userId,userInfo) => {
        let direction = '/customer/'+userId;
        return this.firebaseInstance.firestore().doc(direction).set(userInfo);
    }

    //Funcion para actualizar un cliente
    updateCustomer = (userId,info) =>{
        let direction = '/customer/'+userId;
        return this.firebaseInstance.firestore().doc(direction).update(info)
    }

    //Funcion para obtener un cliente
    readCustomer = async (userId) =>{
        let direction = '/customer/'+userId;
        return await this.firebaseInstance.firestore().doc(direction).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }



}