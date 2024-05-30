import React from "react";
import { Checkbox, Input, Button } from "@nextui-org/react";

const Journal = ({ journal, deleteJournal }) => {
    return (
        <div>
            <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <h3>{journal.highlight}</h3>
                    <p>Gym Done: {journal.is_gym_done ? 'Yes' : 'No'}</p>
                    <p>Read Done: {journal.is_read_done ? 'Yes' : 'No'}</p>
                    <p>Weight: {journal.weight}</p>
                    <Button color="danger" 
                        onClick={() => deleteJournal(journal.id)}
                    >
                    Delete
                    </Button>
                </div>
            </div>
            </div>
            
        </div>

        
    );
};

export default Journal;
