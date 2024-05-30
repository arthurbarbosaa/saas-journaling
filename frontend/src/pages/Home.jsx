import React, { useState, useEffect } from "react";
import api from "../api";
import Journal from "../components/Journal";
import NavbarComponent from "../components/NavbarComponent";
import { Checkbox, Input, Button  } from "@nextui-org/react";

function Home() {
    const [journals, setJournals] = useState([]);
    const [highlight, setHighlight] = useState("");
    const [isGymDone, setIsGymDone] = useState(false);
    const [isReadDone, setIsReadDone] = useState(false);
    const [weight, setWeight] = useState("");

    useEffect(() => {
        getJournals();
    }, []);

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
            .post("/api/journals/", { highlight, is_gym_done: isGymDone, is_read_done: isReadDone, weight })
            .then((res) => {
                if (res.status === 201) alert("Journal created!");
                else alert("Failed to make Journal.");
                getJournals();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <NavbarComponent>

            </NavbarComponent>


            <div className="flex justify-center">
                {journals.map(journal => (
                    <Journal key={journal.id} journal={journal} deleteJournal={deleteJournal} />
                ))}
            </div>
            <br />

            <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <div className="card-actions justify-end">
                        <button className="btn btn-square btn-sm bg-closeRed hover:bg-closeRedHover">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
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
                        <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                            <Button color="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Home;
