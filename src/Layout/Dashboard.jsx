import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-full bg-[#262626] text-white text-lg font-semibold">
            {/* Sidebar content here */}
           <Link to='/dashboard/category' className=''>Category</Link>
           <Link to='/dashboard/addProduct' className=''>Add Product</Link>
           <Link to='/dashboard/addCategory' className=''>Add Category</Link>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;