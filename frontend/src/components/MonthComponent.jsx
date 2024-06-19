import React from "react";
import { Tooltip } from "@nextui-org/react";
import { EditIcon } from "../assets/EditIcon";
import { DeleteIcon } from "../assets/DeleteIcon";
import CalendarIcon from "../assets/calendar-icon.svg";
import { useNavigate } from "react-router-dom";

const MonthComponent = ({ month, deleteMonth }) => {
    const navigate = useNavigate();

    const handleMonthClick = () => {
        navigate(`/months/${month.id}/journals`);
    };

    return (
        <div className="card bg-base-100 shadow-xl w-full sm:w-96 mx-auto">
            <div className="card-body p-6">
                <div className="flex items-center mb-4">
                    <img src={CalendarIcon} alt="calendar-icon" className="w-10 h-10 mr-4" />
                    <h3 className="text-2xl font-bold cursor-pointer" onClick={handleMonthClick}>
                        {month.name}
                    </h3>
                </div>
                <div className="flex justify-center">
                    <Tooltip color="primary" content="Edit">
                        <span className="text-lg text-primary cursor-pointer active:opacity-50">
                            <EditIcon />
                        </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete">
                        <span
                            className="text-lg text-danger cursor-pointer active:opacity-50"
                            onClick={() => deleteMonth(month.id)}
                        >
                            <DeleteIcon />
                        </span>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default MonthComponent;
