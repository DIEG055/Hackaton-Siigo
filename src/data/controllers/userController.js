import fire from "../config/firebase";


export default class UserController {
    getCurrentUser(){
        return fire.auth().currentUser;
    }
}