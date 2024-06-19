import React, { useState, useEffect } from "react";
import api from "../api";
import Journal from "../components/Journal";
import NavbarComponent from "../components/NavbarComponent";
import { Checkbox, Input, Button, Select, SelectItem } from "@nextui-org/react";

function Home() {
    const [journals, setJournals] = useState([]);
    const [months, setMonths] = useState([]);
    const [monthId, setMonthId] = useState('');
    const [highlight, setHighlight] = useState("");
    const [isGymDone, setIsGymDone] = useState(false);
    const [isReadDone, setIsReadDone] = useState(false);
    const [weight, setWeight] = useState("");
    
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        getJournals();
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

    const getJournals = () => {
        api
            .get("/api/journals/")
            .then((res) => res.data)
            .then((data) => {
                setJournals(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteJournal = (id) => {
        api
            .delete(`/api/journals/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Journal deleted!");
                else alert("Failed to delete Journal.");
                getJournals();
            })
            .catch((error) => alert(error));
    };

    const createJournal = (e) => {
        e.preventDefault();
        api
            .post("/api/journals/", { highlight, is_gym_done: isGymDone, is_read_done: isReadDone, weight, month_id: monthId })
            .then((res) => {
                if (res.status === 201) alert("Journal created!");
                else alert("Failed to make Journal.");
                getJournals();
                setShowForm(false);
            })
            .catch((err) => alert(err), console.log(err));
    };

    return (
        <div className="">
            <NavbarComponent />
            <div className="m-6">
                {journals.map(journal => (
                    <Journal key={journal.id} journal={journal} deleteJournal={deleteJournal} />
                ))}
            </div>
            <div className="flex justify-center mt-4 mb-6">
                <Button className="bg-primary text-white" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cancel" : "Add New Journal +"}
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
                            <h2>Create a Register</h2>
                            <form onSubmit={createJournal} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="highlight">Highlight:</label>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="lg"
                                        placeholder=""
                                        value={highlight}
                                        onChange={(e) => setHighlight(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="weight">Weight:</label>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="lg"
                                        placeholder=""
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="is_gym_done">Gym Done:</label>
                                    <Checkbox
                                        checked={isGymDone}
                                        onChange={(e) => setIsGymDone(e.target.checked)}
                                    >
                                        Is Gym Done
                                    </Checkbox>
                                </div>
                                <div>
                                    <label htmlFor="is_read_done">Read Done: </label>
                                    <Checkbox
                                        checked={isReadDone}
                                        onChange={(e) => setIsReadDone(e.target.checked)}
                                    >
                                        Is Read Done
                                    </Checkbox>
                                </div>
                                <div>
                                    <label htmlFor="month">Month:</label>
                                    <Select
                                        label="Select a Month"
                                        placeholder=""
                                        value={monthId}
                                        onChange={(value) => setMonthId(value)}
                                        className="max-w-xs"
                                        required
                                    >
                                        {months.map(month => (
                                            <SelectItem key={month.id} value={month.id}>
                                                {month.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                                <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
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

export default Home;
