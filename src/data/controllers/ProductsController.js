import fire from "../config/firebase"

export default class ProductsController {

    //Funcion para crear Products
    createProducts = (productsId,userInfo) => {
        let direction = '/products/'+productsId;
        return fire.firestore().doc(direction).set(userInfo);
    }

    //Funcion para actualizar Products
    updateProducts = (productsId,info) =>{
        let direction = '/products/'+productsId;
        return fire.firestore().doc(direction).update(info)
    }

    //Funcion para obtener Products
    readProducts = async (productsId) =>{
        let direction = '/products/'+productsId;
        return await fire.firestore().doc(direction).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    //Funcion apra eliminar Products
    deleteProducts = (productsId) =>{
        let direction = '/products/'+productsId;
        return fire.firestore().doc(direction).delete();
    }

}