import React from "react";
import { Tooltip, Checkbox, DateInput } from "@nextui-org/react";
import { EditIcon } from "../assets/EditIcon";
import { DeleteIcon } from "../assets/DeleteIcon";

import { parseDate } from "@internationalized/date";

const Journal = ({ journal, deleteJournal }) => {

    return (
        <div className="flex justify-center items-center mb-8">
            <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
                <div className="card-body p-4">
                    <div>
                        
                        <h3 className="text-xl font-bold ">{journal.highlight}</h3>

                        
                        
                        <div className="flex flex-row text-lg">
                            <div className="mr-2">Gym:</div>
                                <Checkbox className="mr-2"
                                    isSelected={journal.is_gym_done}
                                />

                            <div className="mr-2">Read:</div>
                                <Checkbox className="mr-2"
                                    isSelected={journal.is_read_done}   
                                />
                                
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

export default Journal;
