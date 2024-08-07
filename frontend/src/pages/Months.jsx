import React, { useState, useEffect } from "react";
import api from "../api";
import { Input, Button, Card, CardBody, Tooltip} from "@nextui-org/react";
import { DeleteIcon } from "../assets/DeleteIcon";
import NavbarComponent from "../components/NavbarComponent";
import MonthComponent from "../components/MonthComponent";

import doneOneWhite from "../assets/done_one_white.png";
import closeWhite from "../assets/close_white.png";
import warningWhite from "../assets/warning_white.png";

import '../styles/animations.css';

function Months() {
    const [months, setMonths] = useState([]);
    const [name, setName] = useState("");
    const [habits, setHabits] = useState([{ name: "" }]);
    const [measureName, setMeasureName] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        getMonths();
    }, []);

    const getMonths = () => {
        api
            .get("/api/months/")
            .then((res) => res.data)
            .then((data) => {
                setMonths(data);
            })
            .catch((err) => showErrorAlert(err.message));
    };

    const deleteMonth = (id) => {
        api
            .delete(`/api/months/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) showSuccessAlert("Month deleted");
                else showWarningAlert("Failed to delete month");
                getMonths();
            })
            .catch((error) => showErrorAlert(error.message));
    };

    const createMonth = (e) => {
        e.preventDefault();

        api
            .post("/api/months/", { name })
            .then((res) => {
                if (res.status === 201) {
                    const monthId = res.data.id;
                    createHabits(monthId);
                    createMeasure(monthId, measureName);
                    showSuccessAlert("Month created");
                } else {
                    showWarningAlert("Failed to create month");
                }
                getMonths();
                setShowForm(false);
            })
            .catch((err) => showErrorAlert(err.message));
    };

    const createHabits = (monthId) => {
        habits.forEach(habit => {
            api
                .post("/api/habits/", { name: habit.name, month_id: monthId })
                .catch((err) => showErrorAlert(err.message));
        });
    };

    const createMeasure = (monthId, measureName) => {
        api
            .post("/api/measures/", { name: measureName, month_id: monthId })
            .catch((err) => showErrorAlert(err.message));
    };

    const handleHabitChange = (index, event) => {
        const newHabits = [...habits];
        newHabits[index].name = event.target.value;
        setHabits(newHabits);
    };

    const addHabitField = () => {
        setHabits([...habits, { name: "" }]);
    };

    const removeHabitField = (index) => {
        const newHabits = habits.filter((habit, i) => i !== index);
        setHabits(newHabits);
    };

    const showSuccessAlert = (message) => {
        setAlert(
            <div className="slide-in-fade-out">
                <Card className="bg-primary text-white">
                    <CardBody className="flex-row">
                        <span>{message}</span>
                        <img className="w-5 ml-2" src={doneOneWhite} alt="Icon" />
                    </CardBody>
                </Card>
            </div>
        );
        clearAlert();
    };

    const showWarningAlert = (message) => {
        setAlert(
            <div className="slide-in-fade-out">
                <Card className="bg-warning text-white">
                    <CardBody className="flex-row">
                        <span>{message}</span>
                        <img className="w-5 ml-2" src={warningWhite} alt="Icon" />
                    </CardBody>
                </Card>
            </div>
        );
        clearAlert();
    };

    const showErrorAlert = (message) => {
        setAlert(
            <div className="slide-in-fade-out">
                <Card className="bg-danger text-white">
                    <CardBody className="flex-row">
                        <span>{message}</span>
                        <img className="w-5 ml-2" src={closeWhite} alt="Icon" />
                    </CardBody>
                </Card>
            </div>
        );
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => setAlert(null), 3000); // Clear alert after 3 seconds
    };

    return (
        <div className="">
            <NavbarComponent />
            <div className="max-w-7xl mx-auto px-8 py-8 flex flex-wrap justify-center gap-6">
                {months.map(month => (
                    <MonthComponent key={month.id} month={month} deleteMonth={deleteMonth} />
                ))}
            </div>
            {alert && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
                    {alert}
                </div>
            )}
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
                                    radius="full"
                                    size="sm"
                                    color="danger"
                                    onClick={() => setShowForm(false)}
                                >
                                    <img className="w-5" src={closeWhite} alt="Icon" />
                                </Button>
                            </div>
                            <h2 className="text-xl my-4 font-bold text-center">Create a Month</h2>
                            <form onSubmit={createMonth} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label htmlFor="name" color="primary">Month:</label>
                                    <Input
                                        isRequired
                                        clearable
                                        bordered
                                        fullWidth
                                        color=""
                                        size="lg"
                                        placeholder=""
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="measureName">Measure:</label>
                                    <Input
                                        isRequired
                                        clearable
                                        bordered
                                        fullWidth
                                        color=""
                                        size="lg"
                                        placeholder=""
                                        value={measureName}
                                        onChange={(e) => setMeasureName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="habits">Habits:</label>
                                    {habits.map((habit, index) => (
                                        <div key={index} className="flex items-center mb-2">
                                            <Input
                                                clearable
                                                bordered
                                                fullWidth
                                                color=""
                                                size="lg"
                                                value={habit.name}
                                                onChange={(e) => handleHabitChange(index, e)}
                                                required
                                            />
                                            {index > 0 && (
                                                <Tooltip color="danger" content="Delete">
                                                    <span
                                                        className="text-lg text-danger cursor-pointer active:opacity-50"
                                                        onClick={() => removeHabitField(index)}
                                                    >
                                                        <DeleteIcon />
                                                    </span>
                                                </Tooltip>
                                            )}
                                        </div>
                                    ))}
                                    <Button color="primary" variant="light" onClick={addHabitField}>
                                        Add Habit +
                                    </Button>
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
