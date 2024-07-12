import React, { useState, useEffect } from "react";
import api from "../api";
import { Tooltip, Checkbox } from "@nextui-org/react";
import { EditIcon } from "../assets/EditIcon";
import { DeleteIcon } from "../assets/DeleteIcon";

const JournalComponent = ({ journal, deleteJournal }) => {
    const [dailyHabits, setDailyHabits] = useState([]);
    const [dailyMeasure, setDailyMeasure] = useState([]);


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
                if (res.status === 200) alert("Habit updated!");
                else alert("Failed to update Habit.");
                getDailyHabits(journal.id);
            })
            .catch((err) => alert(err));
    };

    

    return (
        <div className="flex justify-center items-center mb-8">
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
