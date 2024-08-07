import React, { useState, useEffect } from "react";
import api from "../api";
import { Tooltip, Checkbox, Card, CardBody} from "@nextui-org/react";
import { EditIcon } from "../assets/EditIcon";
import { DeleteIcon } from "../assets/DeleteIcon";

import doneOneWhite from "../assets/done_one_white.png";
import closeWhite from "../assets/close_white.png";
import warningWhite from "../assets/warning_white.png";

import '../styles/animations.css';

const JournalComponent = ({ journal, deleteJournal }) => {
    const [dailyHabits, setDailyHabits] = useState([]);
    const [dailyMeasure, setDailyMeasure] = useState([]);
    const [myAlert, setMyAlert] = useState(null);


    useEffect(() => {
        getDailyHabits(journal.id);
        getDailyMeasure(journal.id)
    }, [journal]);

    const getDailyMeasure = (journalId) => {
        api
            .get(`/api/dailymeasures/?journal=${journalId}`)
            .then((res) => res.data)
            .then((data) => {
                setDailyMeasure(data.filter(dailyMeasure => dailyMeasure.journal === journalId))
            })
            .catch((err) => alert(err));
    };
    

    const getDailyHabits = (journalId) => {
        api
            .get(`/api/dailyhabits/?journal=${journalId}`)
            .then((res) => res.data)
            .then((data) => {
                setDailyHabits(data.filter(dailyHabit => dailyHabit.journal === journalId));
            })
            .catch((err) => alert(err));
    };

    const updateDailyHabitPractition = (dailyHabitId, isPracticed) => {
        api
            .patch(`/api/dailyhabits/${dailyHabitId}/`, { is_practiced: isPracticed })
            .then((res) => {
                if (res.status === 200) showSuccessAlert("Habit updated");
                else showWarningAlert("Failed to update Habit");
                getDailyHabits(journal.id);
            })
            .catch((err) => showErrorAlert(err));
    };


    const showSuccessAlert = (message) => {
        setMyAlert(
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
        setMyAlert(
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
        setMyAlert(
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
        setTimeout(() => setMyAlert(null), 3000); // Clear alert after 3 seconds
    };

    

    return (
        <div className="flex justify-center items-center mb-8">
            {myAlert && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
                    {myAlert}
                </div>
            )}
            <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
                <div className="card-body p-4">
                    <div>
                        <p>{journal.created_at}</p>
                        
                        <h3 className="text-xl font-bold ">{journal.highlight}</h3>

                        <div className="flex flex-row text-lg">
                            {dailyHabits.map(dailyHabit => (
                                <div key={dailyHabit.id} className="mr-2">
                                    <span>{dailyHabit.habit.name}: </span>
                                    <Checkbox
                                        isSelected={dailyHabit.is_practiced} onChange={() => updateDailyHabitPractition(dailyHabit.id, !dailyHabit.is_practiced)}
                                    >
                                    </Checkbox>
                                </div>
                            ))}
                            
                            {dailyMeasure.map(dailyMeasure => (
                                <div key={dailyMeasure.id} className="mr-2">
                                    <p>{dailyMeasure.measure.name}: {dailyMeasure.metric}</p>
                                </div>
                            ))}
                            
                            <p></p>

                            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                                <Tooltip color="primary" content="Edit">
                                    <span className="text-lg text-primary cursor-pointer active:opacity-50">
                                        <EditIcon />
                                    </span>
                                </Tooltip>
                                <Tooltip color="danger" content="Delete">
                                    <span
                                        className="text-lg text-danger cursor-pointer active:opacity-50"
                                        onClick={() => deleteJournal(journal.id)}
                                    >
                                        <DeleteIcon />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default JournalComponent;
