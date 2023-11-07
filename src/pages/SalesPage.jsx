import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import DashboardHeader from "../components/DashboardHeader";
import { showErrorMessage } from "../utils/toast";
import SalesList from "../components/sales/Sales";
import getUserInfo from "../utils/getUserInfo";

const SalesPage = () => {
  const [user, setUser] = useState();
  const info = getUserInfo();

  useEffect(() => {
    setUser(info);
  }, []);
  return (
    <div className='flex'>
      <div className='flex flex-col bg-[#F8F7FC] flex-grow mb-8'>
        <div>
          {/* {user?.data?.role === "seller" && ( */}
          <div className='flex justify-center'>
            <SalesList />
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
