import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/user";
import { Route, Switch } from "react-router";

import SignIn from "../Views/common/signIn/signIn";
import TenantController from "../data/controllers/TenantController";

function CommonRoutes() {
  return (
    <Switch>
      <Route path="/signin" > <SignIn /> </Route>
      <Route path="/signup" > <SignIn /> </Route>
      <Route path="/" > <button onClick={() => {
        const teantController = new TenantController();
        teantController.readAllTenant();
      }} >okkk</button> <SignIn /> </Route>
    </Switch>
  );
}

export default CommonRoutes;
