import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, LineChart, Settings,LoaderCircle, FileText, ShoppingBag, Layout, ChevronDown, ChevronUp, Box, DollarSign, TrendingUp,BadgeHelp } from "lucide-react";
import { useSidebar } from "./sidebar_context.jsx";

function UserDashboardSideBar() {
    const [ordersOpen, setOrdersOpen] = useState(false);
    const [listingsOpen, setListingsOpen] = useState(false);
    const [inventoryOpen, setInventoryOpen] = useState(false);
    const [paymentsOpen, setPaymentsOpen] = useState(false);
    const [growthOpen, setGrowthOpen] = useState(false);
    const { sidebarOpen, setSidebarOpen } = useSidebar()
    return (
        <aside className={`${sidebarOpen ? "w-72" : "w-20 "} min-h-screen bg-white text-black border-r-2 p-5 transition-all duration-300`}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="mb-4 inline-flex w-full items-center justify-between transition-all duration-400">
                <Menu />
                {sidebarOpen && <span>Dashboard</span>}

            </button>
            <nav className={`${!sidebarOpen && "flex flex-col items-center transition-all duration-300" }`}>
                <div className={`flex mt-2 mb-4  items-center gap-2 ${sidebarOpen ? "border-2  py-4 px-2 rounded-lg " : "border-none"}  transition-all duration-300 cursor-pointer hover:text-gray-400`}>
                    <img className={`${sidebarOpen ? "w-8 h-8" : "w-6 h-6"} rounded-full`} src="https://picsum.photos/200/300" alt="Rounded avatar" />
                    <div>
                        <Link to="profile" className="hover:text-gray-400">{sidebarOpen && <div><h1>Priyanshu Chandra</h1>
                            <p className="text-xs ">Chandrapriyanshu10@gmail.com</p></div>}</Link>
                    </div>
                </div>
                <hr className={`${sidebarOpen ? "h-[2px] bg-gray-200 mb-4" : "h-0 w-0"}`} />
                <ul className="space-y-2 flex flex-col  ">
                    <li className="cursor-pointer hover:text-gray-400">
                        <Link to="/profile/user/settings" className="hover:text-gray-400 inline-flex gap-2"> <span><BadgeHelp size={20} /></span> <span>{sidebarOpen && "Help"}  </span></Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-400">
                        <Link to="/profile/user/settings" className="hover:text-gray-400 inline-flex gap-2"> <span><Settings size={20} /></span> <span>{sidebarOpen && "Settings"}  </span></Link>
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
                        <LoaderCircle size={20} />
                        <Link to="/profile/user/writeblog" className="hover:text-gray-400">{sidebarOpen && "Blog status"}</Link>
                    </li>
                    {/* <li>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400" onClick={() => setOrdersOpen(!ordersOpen)}>
                            <LineChart /> {sidebarOpen && "Orders"}
                            {sidebarOpen && (ordersOpen ? <ChevronUp /> : <ChevronDown />)}
                        </div>
                        {ordersOpen && sidebarOpen && (
                            <ul className="ml-6 mt-2 space-y-2">
                                <li><Link to="/orders/active" className="hover:text-gray-400">Active Orders</Link></li>
                                <li><Link to="/orders/returns" className="hover:text-gray-400">Returns</Link></li>
                                <li><Link to="/orders/cancellation" className="hover:text-gray-400">Cancellation</Link></li>
                            </ul>
                        )}
                    </li> */}
                    {/* <li>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400" onClick={() => setListingsOpen(!listingsOpen)}>
                            <FileText /> {sidebarOpen && "Listings"}
                            {sidebarOpen && (listingsOpen ? <ChevronUp /> : <ChevronDown />)}
                        </div>
                        {listingsOpen && sidebarOpen && (
                            <ul className="ml-6 mt-2 space-y-2">
                                <li><Link to="/listings/my" className="hover:text-gray-400">My Listings</Link></li>
                                <li><Link to="/listings/add" className="hover:text-gray-400">Add Listing</Link></li>
                            </ul>
                        )}
                    </li> */}
                    {/* <li>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400" onClick={() => setInventoryOpen(!inventoryOpen)}>
                            <Box /> {sidebarOpen && "Inventory"}
                            {sidebarOpen && (inventoryOpen ? <ChevronUp /> : <ChevronDown />)}
                        </div>
                        {inventoryOpen && sidebarOpen && (
                            <ul className="ml-6 mt-2 space-y-2">
                                <li><Link to="/inventory/stock" className="hover:text-gray-400">Stock Levels</Link></li> */}
                    {/* <li><Link to="/inventory/add" className="hover:text-gray-400">Add New Stock</Link></li> */}
                    {/* <li><Link to="/inventory/reports" className="hover:text-gray-400">Inventory Reports</Link></li>
                            </ul>
                        )}
                    </li> */}
                    {/* <li>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400" onClick={() => setPaymentsOpen(!paymentsOpen)}>
                            <DollarSign /> {sidebarOpen && "Payments"}
                            {sidebarOpen && (paymentsOpen ? <ChevronUp /> : <ChevronDown />)}
                        </div>
                        {paymentsOpen && sidebarOpen && (
                            <ul className="ml-6 mt-2 space-y-2">
                                <li><Link to="/payments/history" className="hover:text-gray-400">Transaction History</Link></li>
                                <li><Link to="/payments/payouts" className="hover:text-gray-400">Payouts</Link></li>
                                <li><Link to="/payments/methods" className="hover:text-gray-400">Payment Methods</Link></li>
                            </ul>
                        )}
                    </li> */}
                    {/* <li>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400" onClick={() => setGrowthOpen(!growthOpen)}>
                            <TrendingUp /> {sidebarOpen && "Growth"}
                            {sidebarOpen && (growthOpen ? <ChevronUp /> : <ChevronDown />)}
                        </div>
                        {growthOpen && sidebarOpen && (
                            <ul className="ml-6 mt-2 space-y-2">
                                <li><Link to="/growth/monthly" className="hover:text-gray-400">Monthly Growth</Link></li>
                                <li><Link to="/growth/annual" className="hover:text-gray-400">Annual Growth</Link></li>
                                <li><Link to="/growth/reports" className="hover:text-gray-400">Growth Reports</Link></li>
                            </ul>
                        )}
                    </li> */}
                </ul>
            </nav>
        </aside>
    );
}

export { UserDashboardSideBar };