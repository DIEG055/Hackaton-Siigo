import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/user';
import RoutesCustomer from './CustomerRoutes';
import RoutesTenant from './TentantRoutes';
import CommonRoutes from './CommonRoutes';

function Routes(){
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch(fetchUsers());
        },[]
    )

    const customer = useSelector(state=>state.user.user);
    const tenant = null;

    if(customer){
        return <RoutesCustomer/>
    }else if(tenant){
        return <RoutesTenant/>
    }else{
        return <CommonRoutes/>
    }
}

export default Routes;