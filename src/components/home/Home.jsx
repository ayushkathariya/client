import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../../redux/slices/appConfigSlice";

function Home() {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Home;
