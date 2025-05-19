import React from 'react';
import { Outlet, NavLink, Link, Navigate } from 'react-router-dom';
import {
    HomeIcon,
    CubeIcon,
    UserGroupIcon,
    ArrowLeftIcon,
} from '@heroicons/react/24/outline';

const navItems = [
    { to: '/admin/dashboard', label: 'Dashboard', Icon: HomeIcon },
    { to: '/admin/products', label: 'Products', Icon: CubeIcon },
    { to: '/admin/users', label: 'Users', Icon: UserGroupIcon },
];

export default function AdminLayout() {
    const token = localStorage.getItem("ecom-token");

    // If not admin token, redirect to login or home
    if (token !== "admin") {
        return (<>You are not admin</>);
        // or use: <Navigate to="/" replace /> if you want to redirect home
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
            {/* Sidebar - visible on lg+ */}
            <aside className="hidden lg:flex w-64 bg-gray-900 text-white flex-col py-6 px-4 shadow-lg">
                {/* Go Back Button (to Home) */}
                <Link
                    to="/"
                    className="flex items-center space-x-2 mb-6 text-gray-300 hover:text-white focus:outline-none"
                >
                    <ArrowLeftIcon className="h-5 w-5" />
                    <span className="font-semibold">Go Home</span>
                </Link>

                <h2 className="text-3xl font-bold mb-8 tracking-tight">Admin Panel</h2>
                <nav className="flex flex-col space-y-3">
                    {navItems.map(({ to, label, Icon }) => (
                        <NavItem key={to} to={to} label={label} Icon={Icon} />
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8 overflow-y-auto pb-20 lg:pb-8">
                <Outlet />
            </main>

            {/* Bottom nav - visible on small & medium devices */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around items-center h-16 lg:hidden shadow-inner">
                {/* Go Back to Home button in bottom nav */}
                <Link
                    to="/"
                    className="flex flex-col items-center justify-center text-xs text-gray-500 px-4 transition-colors duration-200 hover:text-blue-500"
                    aria-label="Go Home"
                >
                    <ArrowLeftIcon className="h-6 w-6 mb-1" />
                    <span>Home</span>
                </Link>

                {navItems.map(({ to, label, Icon }) => (
                    <BottomNavItem key={to} to={to} label={label} Icon={Icon} />
                ))}
            </nav>
        </div>
    );
}

function NavItem({ to, label, Icon }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive
                        ? 'bg-gray-800 text-white font-semibold'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
            }
        >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
        </NavLink>
    );
}

function BottomNavItem({ to, label, Icon }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex flex-col items-center justify-center text-xs text-gray-500 px-4 transition-colors duration-200 ${
                    isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
                }`
            }
        >
            <Icon className="h-6 w-6 mb-1" />
            <span>{label}</span>
        </NavLink>
    );
}
