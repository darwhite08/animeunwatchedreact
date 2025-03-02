import { createContext, useContext, useState } from "react";

// Create Context
const SidebarContext = createContext();

// Sidebar Provider Component
export function SidebarProvider({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open

    return (
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}

// Custom Hook for Using Sidebar Context
export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
