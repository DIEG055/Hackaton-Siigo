import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/user";
import { Route, Switch } from "react-router";

import SignIn from "../Views/common/signIn/signIn";

function CommonRoutes() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignIn} />
      <Route path="/" component={SignIn} />
    </Switch>
  );
}

export default CommonRoutes;
