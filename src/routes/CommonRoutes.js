import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/user';
import { Route } from 'react-router';

function CommonRoutes(){
    return(
        <Route path="/" ></Route>
    )
}

export default CommonRoutes;