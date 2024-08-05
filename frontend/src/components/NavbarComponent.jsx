import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import api from "../api";

const NavbarComponent = () => {
    const [activeNav, setActiveNav] = useState("");
    const location = useLocation();

    useEffect(() => {
        // Define a propriedade isActive com base na URL atual
        const currentPath = location.pathname;
        if (currentPath.startsWith("/months") && currentPath.includes("/journals")) {
            setActiveNav("/months/latest/journals");
        } else if (currentPath === "/months") {
            setActiveNav("/months");
        } else if (currentPath === "/settings") {
            setActiveNav("/settings");
        } else {
            setActiveNav(""); // Caso padrão
        }
    }, [location.pathname]);

    const handleNavigateToJournals = async () => {
        try {
            const response = await api.get("/api/months/");
            if (response.status === 200 && response.data.length > 0) {
                const months = response.data;
                const latestMonth = months[months.length - 1];
                if (latestMonth) {
                    window.location.href = `/months/${latestMonth.id}/journals`;
                } else {
                    console.error("No months available.");
                    window.location.href = "/months"; // Redireciona para uma página padrão
                }
            } else {
                console.error("Failed to fetch months or no months found.");
                window.location.href = "/months"; // Redireciona para uma página padrão
            }
        } catch (error) {
            console.error("Error fetching months:", error);
            window.location.href = "/months"; // Redireciona para uma página padrão
        }
    };

    return (
        <Navbar
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
            }}
        >
            <NavbarBrand>
                <p className="font-bold text-inherit">Journaling</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={activeNav === "/months/latest/journals"}>
                    <Link color={activeNav === "/months/latest/journals" ? "primary" : "foreground"} onClick={handleNavigateToJournals} style={{ cursor: 'pointer' }}>
                        Journals
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeNav === "/months"}>
                    <Link color={activeNav === "/months" ? "primary" : "foreground"} href="/months">
                        Months
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeNav === "/settings"}>
                    <Link color={activeNav === "/settings" ? "primary" : "foreground"} href="/settings">
                        Settings
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="danger" href="/logout">
                        Logout
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavbarComponent;
