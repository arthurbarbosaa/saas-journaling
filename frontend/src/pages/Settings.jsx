import React, { useState, useEffect } from "react";
import api from "../api";

import NavbarComponent from "../components/NavbarComponent";

function Settings() {
    return (
        <div>
            <NavbarComponent/>
            <p>settings page</p>
        </div>
    )
}

export default Settings