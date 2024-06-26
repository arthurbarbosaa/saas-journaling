import React, { useState, useEffect } from "react";
import api from "../api";
import NavbarComponent from "../components/NavbarComponent";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import MonthComponent from "../components/MonthComponent"

function Months() {
    const [months, setMonths] = useState([]);
    const [name, setName] = useState("");
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        getMonths();
    }, []);

    const getMonths = () => {
        api
            .get("/api/months/")
            .then((res) => res.data)
            .then((data) => {
                setMonths(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteMonth = (id) => {
        api
            .delete(`/api/months/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Month deleted!");
                else alert("Failed to delete month.");
                getMonths();
            })
            .catch((error) => alert(error));
    };

    const createMonth = (e) => {
        e.preventDefault();
        api
            .post("/api/months/", { name })
            .then((res) => {
                if (res.status === 201) alert("Month created!");
                else alert("Failed to create month.");
                getMonths();
                setShowForm(false);
            })
            .catch((err) => alert(err), console.log(err));
    };

    return (
        <div className="">
            <NavbarComponent />
            <div className="m-6">
                {months.map(month => (
                    <MonthComponent key={month.id} month={month} deleteMonth={deleteMonth} />
                ))}
            </div>
            <div className="flex justify-center mt-4 mb-6">
                <Button className="bg-primary text-white" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cancel" : "Add New Month +"}
                </Button>
            </div>
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <Button
                                    color="danger"
                                    onClick={() => setShowForm(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </Button>
                            </div>
                            <h2>Create a Month</h2>
                            <form onSubmit={createMonth} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label htmlFor="name">Name:</label>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="lg"
                                        placeholder=""
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-2 flex justify-center mt-4">
                                    <Button color="primary" type="submit">
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Months;
