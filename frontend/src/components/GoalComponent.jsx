import React from "react";
import { Tooltip, Checkbox } from "@nextui-org/react";
import { DeleteIcon } from "../assets/DeleteIcon";

const GoalComponent = ({ goal, deleteGoal, updateGoalCompletion}) => {
    return (
        <div className="flex items-center justify-between mb-2">
            <Checkbox checked={goal.is_completed} onChange={() => updateGoalCompletion(goal.id, goal.is_completed)}>
                {goal.name}
            </Checkbox>
            <Tooltip color="danger" content="Delete">
            <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => deleteGoal(goal.id)}
            >
            <DeleteIcon />
            </span>
            </Tooltip>
        </div>
    )
}

export default GoalComponent