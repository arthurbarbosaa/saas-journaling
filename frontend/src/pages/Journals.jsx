import React, { useState, useEffect } from "react";
import api from "../api";
import NavbarComponent from "../components/NavbarComponent";
import JournalComponent from "../components/JournalComponent";
import GoalComponent from "../components/GoalComponent";
import { Checkbox, Input, Button, Card, CardBody} from "@nextui-org/react";
import { useParams } from "react-router-dom";

import doneOneWhite from "../assets/done_one_white.png";
import closeWhite from "../assets/close_white.png";
import warningWhite from "../assets/warning_white.png";

import '../styles/animations.css';

function Journals() {
    const [journals, setJournals] = useState([]);
    const [goals, setGoals] = useState([]);
    const [habits, setHabits] = useState([]);
    const [measure, setMeasure] = useState();
    const [selectedMonthId, setSelectedMonthId] = useState(null);
    const [selectedMonthName, setSelectedMonthName] = useState("");
    const [highlight, setHighlight] = useState("");
    const [goalName, setGoalName] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [showGoalForm, setShowGoalForm] = useState(false);
    const [habitStatus, setHabitStatus] = useState({});
    const [measureValue, setMeasureValue] = useState("");
    const { monthId } = useParams();
    const [myAlert, setMyAlert] = useState(null);

    useEffect(() => {
        if (monthId) {
            setSelectedMonthId(monthId);
            getJournals(monthId);
            getGoals(monthId);
            getMonth(monthId);
            getHabits(monthId);
            getMeasure(monthId);
        }
    }, [monthId]);

    const getMeasure = (monthId) => {
        api
            .get(`/api/measures/?month=${monthId}`)
            .then((res) => res.data)
            .then((data) => {
                setMeasure(data);
            })
            .catch((err) => alert(err));
    };

    const createDailyMeasure = async (journalId, measure) => {
        try {
            await api.post("/api/dailymeasures/", { journal_id: journalId, measure_id: measure[0].id, metric: measureValue });
        } catch (error) {
            console.error('Error creating daily measure:', error);
        }
    };

    const getJournals = (monthId) => {
        api
            .get(`/api/journals/?month=${monthId}`)
            .then((res) => res.data)
            .then((data) => {
                setJournals(data);
            })
            .catch((err) => showErrorAlert(err));
    };

    const getGoals = (monthId) => {
        api
            .get(`/api/goals/?month=${monthId}`)
            .then((res) => res.data)
            .then((data) => {
                setGoals(data);
            })
            .catch((err) => showErrorAlert(err));
    };

    const getHabits = (monthId) => {
        api
            .get(`/api/habits/?month=${monthId}`)
            .then((res) => res.data)
            .then((data) => {
                setHabits(data);
                const initialHabitStatus = {};
                data.forEach(habit => {
                    initialHabitStatus[habit.id] = false;
                });
                setHabitStatus(initialHabitStatus);
            })
            .catch((err) => showErrorAlert(err));
    };

    const getMonth = (monthId) => {
        api
            .get(`/api/months/${monthId}/`)
            .then((res) => res.data)
            .then((data) => {
                setSelectedMonthName(data.name);
            })
            .catch((err) => showErrorAlert(err));
    };

    const deleteJournal = (id) => {
        api
            .delete(`/api/journals/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) showSuccessAlert("Journal deleted");
                else showWarningAlert("Failed to delete Journal.");
                getJournals(selectedMonthId);
            })
            .catch((error) => showErrorAlert(error));
    };

    const deleteGoal = (id) => {
        api
            .delete(`/api/goals/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) showSuccessAlert("Goal deleted");
                else showWarningAlert("Failed to delete Goal.");
                getGoals(selectedMonthId);
            })
            .catch((error) => showErrorAlert(error));
    };

    const createDailyHabits = async (journalId, habits) => {
        try {
            for (const habit of habits) {
                await api.post("/api/dailyhabits/", { journal_id: journalId, habit_id: habit.id, is_practiced: habitStatus[habit.id] });
            }
        } catch (error) {
            showErrorAlert('Error creating daily habits:', error);
        }
    };

    const createJournal = (e) => {
        e.preventDefault();
        if (!selectedMonthId) {
            showWarningAlert("Month not selected");
            return;
        }

        api
            .post("/api/journals/", { highlight, month_id: selectedMonthId })
            .then(async (res) => {
                if (res.status === 201) {
                    showSuccessAlert("Journal created");
                    const journalId = res.data.id;
                    await createDailyMeasure(journalId, measure);
                    await createDailyHabits(journalId, habits);
                } else showWarningAlert("Failed to make Journal");
                getJournals(selectedMonthId);
                setHabitStatus([])
                setShowForm(false);
            })
            .catch((err) => showErrorAlert(err));
    };

    const createGoal = (e) => {
        e.preventDefault();
        if (!selectedMonthId) {
            showWarningAlert("Month not selected");
            return;
        }

        api
            .post("/api/goals/", { name: goalName, month_id: selectedMonthId })
            .then((res) => {
                if (res.status === 201) showSuccessAlert("Goal created");
                else showWarningAlert("Failed to create Goal");
                getGoals(selectedMonthId);
                setShowGoalForm(false);
            })
            .catch((err) => showErrorAlert(err));
    };

    const updateGoalCompletion = (goalId, isCompleted) => {
        api
            .patch(`/api/goals/${goalId}/`, { is_completed: isCompleted })
            .then((res) => {
                if (res.status === 200) showSuccessAlert("Goal updated");
                else showWarningAlert("Failed to update Goal");
                getGoals(selectedMonthId);
            })
            .catch((err) => showErrorAlert(err));
    };

    const handleHabitChange = (habitId) => {
        setHabitStatus({
            ...habitStatus,
            [habitId]: !habitStatus[habitId]
        });
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
        <div className="">
            <NavbarComponent />
            {selectedMonthName && (
                <div className="text-center mt-4 mb-2">
                <h1 className="text-2xl font-bold">{selectedMonthName}</h1>
                </div>
            )}
            {myAlert && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
                    {myAlert}
                </div>
            )}

            <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Journals Section */}
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4 text-center">Registers</h2>
                    {journals.map(journal => (
                    <JournalComponent key={journal.id} journal={journal} deleteJournal={deleteJournal} />
                    ))}
                    <div className="flex justify-center mt-4">
                    <Button className="bg-primary text-white" onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Cancel" : "Add New Journal +"}
                    </Button>
                    </div>
                </div>

                {/* Goals Section */}
                <div className="flex-1 mt-6  md:mt-0">
                            <h2 className="text-xl font-bold mb-4 text-center">Goals</h2>
                            {goals.length > 0 && (
                                <div className="card w-full bg-base-100 shadow-xl mb-8">
                                    <div className="card-body">
                                    {goals.map(goal => (
                                    <GoalComponent key={goal.id} goal={goal} deleteGoal={deleteGoal} updateGoalCompletion={updateGoalCompletion} />
                                    ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-center mt-4">
                            <Button className="bg-primary text-white" onClick={() => setShowGoalForm(!showGoalForm)}>
                                {showGoalForm ? "Cancel" : "Add New Goal +"}
                            </Button>
                            </div>
                </div>
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
                    <h2 className="text-xl my-4 font-bold text-center" >Create a Register</h2>
                    <form onSubmit={createJournal} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-2">
                        <label htmlFor="highlight">Highlight:</label>
                        <Input
                            isRequired
                            clearable
                            bordered
                            fullWidth
                            color=""
                            size="lg"
                            placeholder=""
                            value={highlight}
                            onChange={(e) => setHighlight(e.target.value)}
                            required
                        />
                        </div>
                        <div className="col-span-2">
                        <label htmlFor="measure">{measure[0].name}:</label>
                        <Input
                            type="number"
                            isRequired
                            clearable
                            bordered
                            fullWidth
                            color=""
                            size="lg"
                            placeholder=""
                            value={measureValue}
                            onChange={(e) => setMeasureValue(e.target.value)}
                            required
                        />
                        </div>
                        <div className="col-span-2">
                        <label>Habits:</label>
                        {habits.map(habit => (
                            <div key={habit.id}>
                            <Checkbox
                                checked={habitStatus[habit.id]}
                                onChange={() => handleHabitChange(habit.id)}
                            >
                                {habit.name}
                            </Checkbox>
                            </div>
                        ))}
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

            {showGoalForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <Button
                                radius="full"
                                size="sm"
                                color="danger"
                                onClick={() => setShowGoalForm(false)}
                                >
                                    <img className="w-5" src={closeWhite} alt="Icon" />
                                </Button>
                            </div>
                            <h2 className="text-xl my-4 font-bold text-center">Create a Goal</h2>
                            <form onSubmit={createGoal} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label htmlFor="goalName">Goal Name:</label>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color=""
                                        size="lg"
                                        placeholder=""
                                        value={goalName}
                                        onChange={(e) => setGoalName(e.target.value)}
                                        required
                                    />
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

export default Journals;

