import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const NavbarComponent = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">Journaling</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href="#">
                        Jounals
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="#">
                        Month
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Configurations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                <Button color="danger" >
                    Logout
                </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavbarComponent;
