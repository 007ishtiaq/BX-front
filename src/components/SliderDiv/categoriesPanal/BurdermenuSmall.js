import React, { useState, Suspense, lazy } from "react";
import "./BurdermenuSmall.css";
import Burdermenu from "../../Burgermenu/Burdermeun";
// import NavItemes from "../../navItems/NavItemes";
import { useDispatch, useSelector } from "react-redux";

//small size left drawer - all components here
const BurdermenuSmall = () => {
  // const [SideDrawervisible, setSideDrawervisible] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch({
      type: "SET_SIDENAV_VISIBLE",
      payload: true,
    });
    // setSideDrawervisible(!SideDrawervisible);
  };
  // const close = () => {
  //   setSideDrawervisible(false);
  // };

  // const SideDrawer = lazy(() => import("../../SideDrawer/SideDrawer"));

  return (
    <>
      <div className="SmallDevices">
        <Burdermenu click={toggle} />
        {/* <Suspense fallback={" "}>
          <SideDrawer Open={SideDrawervisible} close={close}>
            <div>items here</div>
          </SideDrawer>
        </Suspense> */}
      </div>
    </>
  );
};

export default React.memo(BurdermenuSmall);
