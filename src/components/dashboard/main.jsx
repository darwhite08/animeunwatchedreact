import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserDashboardSideBar } from './dashboard_sidebar/side_bar';
import { useSidebar, SidebarProvider } from './dashboard_sidebar/sidebar_context.jsx';
import UserProfile from './dashboard_view/profile/main.jsx';
import { ProfileUserNavigation } from './dashboard_view/profile/profile_comp/profile_navigation.jsx';
import ProfileSettings from './dashboard_view/settings/main.jsx';

// Lazy loading components
const PersonalInformation = lazy(() => import("./dashboard_view/profile/profile_comp/me/main"));
const NothingToSeeHere = lazy(() => import("./no_contents.jsx"));

function UserDashboard() {
    return (
        <SidebarProvider>
            <DashboardContent />
        </SidebarProvider>
    );
}

function DashboardContent() {
    const { sidebarOpen } = useSidebar(); // Now inside the SidebarProvider

    return (
        <div className="">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 min-h-screen ${sidebarOpen ? "block" : "hidden"} md:block`}>
                <UserDashboardSideBar />
            </div>
            {/* Main Content */}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<div className={`bg-gray-200 py-10 ${sidebarOpen ? "ml-72 " : " ml-20"} transition-all duration-300`}>
                        <div className='flex flex-col'>
                            <div>
                                <UserProfile />
                            </div>
                            <div className='px-10 pt-4'>
                                <ProfileUserNavigation />
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Routes>
                                        <Route path="me" element={<PersonalInformation />} />
                                        <Route path="posts" element={<NothingToSeeHere />} />
                                        <Route path="watchlist" element={<NothingToSeeHere />} />
                                        <Route path="read-later" element={<NothingToSeeHere />} />
                                        <Route path="trophies" element={<NothingToSeeHere />} />
                                        <Route path="events" element={<NothingToSeeHere />} />
                                        <Route path="/" element={<div>No section selected</div>} />
                                    </Routes>
                                </Suspense>

                            </div>
                        </div>

                    </div>} />
                    <Route path="/settings" element={<div className={` ${sidebarOpen ? "ml-72 " : " ml-20"} transition-all duration-300 px-10`}><ProfileSettings /></div>} />
                </Routes>
            </Suspense>

        </div>
    );
}

export { UserDashboard };
