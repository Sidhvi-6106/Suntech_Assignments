import { useLocation } from "react-router";
import React from "react";
function User() {
  let { state } = useLocation();

  console.log(state.user);
  return (
    <div>
      <p>{state?.user?.name}</p>
      <p>{state?.user?.email}</p>
      <p>{state?.user?.dateOfBirth}</p>
      <p>{state?.user?.mobileNumber}</p>
    </div>
  );
}

export default User;