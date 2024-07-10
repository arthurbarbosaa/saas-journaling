import React, { useState, useEffect } from "react";
import api from "../api";
import { Tooltip, Checkbox } from "@nextui-org/react";
import { EditIcon } from "../assets/EditIcon";
import { DeleteIcon } from "../assets/DeleteIcon";

const JournalComponent = ({ journal, deleteJournal }) => {
    const [dailyHabits, setDailyHabits] = useState([]);

    useEffect(() => {
        getDailyHabits(journal.id);
    }, [journal]);

    const getDailyHabits = (journalId) => {
        api
            .get(`/api/dailyhabits/?journal=${journalId}`)
            .then((res) => res.data)
            .then((data) => {
                setDailyHabits(data.filter(dailyHabit => dailyHabit.journal === journalId));
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
                                        isSelected={dailyHabit.is_practiced}
                                    >
                                    </Checkbox>
                                </div>
                            ))}
                            
                            <p>Weight: {journal.weight}</p>

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
