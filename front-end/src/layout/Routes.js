import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import ReservationCreate from "../reservation/ReservationCreate"
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import useQuery from "../utils/useQuery";
import TableCreate from "../table/TableCreate"
import TableSeat from "../table/TableSeat"
import Search from "../search/Search"
import ReservationEdit from "../reservation/ReservationEdit"

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {

  const query = useQuery();
  const date = query.get("date");

  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations">
      <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/tables/new">
        <TableCreate />
      </Route>  
      <Route path="/search">
        <Search />
      </Route>        
      <Route path="/reservations/:reservationId/seat">
        <TableSeat />
      </Route>      
      <Route path="/reservations/:reservationId/edit">
        <ReservationEdit />
      </Route>                
      <Route path="/reservations/new">
        <ReservationCreate />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={date ? date : today()} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
