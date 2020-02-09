import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/user';
import RoutesCustomer from './CustomerRoutes';
import RoutesTenant from './TentantRoutes';
import CommonRoutes from './CommonRoutes';
import fire from '../data/config/firebase';

function Routes(){
    const dispatch = useDispatch();
    /* useEffect(
        ()=>{
            dispatch(fetchUsers());
        },[]
    ) */

    useEffect(
      ()=>{
        fire.auth().onAuthStateChanged(
            user => dispatch(fetchUsers())
          )
      },[]
    )
    
    const user = useSelector(state  => state.user.user);
    const tenant = useSelector(state=>state.user.user);
    const customer = null;

    if(customer){
        return <RoutesCustomer/>
    }else if(tenant){
        return <RoutesTenant/>
    }else{
        return <CommonRoutes/>
    }
}

export default Routes;