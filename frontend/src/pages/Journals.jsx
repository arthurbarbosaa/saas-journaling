import React, { useState, useEffect } from "react";
import api from "../api";
import NavbarComponent from "../components/NavbarComponent";
import JournalComponent from "../components/JournalComponent";
import GoalComponent from "../components/GoalComponent";
import { Checkbox, Input, Button } from "@nextui-org/react";
import { useParams } from "react-router-dom";

function Journals() {
    const [journals, setJournals] = useState([]);
    const [goals, setGoals] = useState([]);
    const [habits, setHabits] = useState([])
    const [selectedMonthId, setSelectedMonthId] = useState(null);
    const [selectedMonthName, setSelectedMonthName] = useState("");
    const [highlight, setHighlight] = useState("");
    const [isGymDone, setIsGymDone] = useState(false);
    const [isReadDone, setIsReadDone] = useState(false);
    const [weight, setWeight] = useState("");
    const [goalName, setGoalName] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [showGoalForm, setShowGoalForm] = useState(false);
    const { monthId } = useParams(); // Assume que monthId é passado como parâmetro de URL

    useEffect(() => {
        if (monthId) {
            setSelectedMonthId(monthId);
            getJournals(monthId);
            getGoals(monthId);
            getMonth(monthId);
            getHabits(monthId);
        }
    }, [monthId]);

    const getJournals = (monthId) => {
        api
            .get(`/api/journals/?month=${monthId}`)
            .then((res) => res.data)
            .then((data) => {
                setJournals(data);
            })
            .catch((err) => alert(err));
    };

    const getGoals = (monthId) => {
        api
            .get(`/api/goals/?month=${monthId}`)
            .then((res) => res.data)
            .then((data) => {
                setGoals(data);
            })
            .catch((err) => alert(err));
    };

    const getHabits = (monthId) => {
        api
            .get(`/api/habits/?month=${monthId}`)
            .then((res) => res.data)
            .then((data) => {
                console.log(data)
                setHabits(data);
            })
            .catch((err) => alert(err));
    };

    const getMonth = (monthId) => {
        api
            .get(`/api/months/${monthId}/`)
            .then((res) => res.data)
            .then((data) => {
                setSelectedMonthName(data.name);
            })
            .catch((err) => alert(err));
    };

    const deleteJournal = (id) => {
        api
            .delete(`/api/journals/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Journal deleted!");
                else alert("Failed to delete Journal.");
                getJournals(selectedMonthId);
            })
            .catch((error) => alert(error));
    };

    const deleteGoal = (id) => {
        api
            .delete(`/api/goals/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Goal deleted!");
                else alert("Failed to delete Goal.");
                getGoals(selectedMonthId);
            })
            .catch((error) => alert(error));
    };

    const createDailyHabits = async (journalId, habits) => {
        try {
            for (const habit of habits) {
                await api.post("/api/dailyhabits/", { journal_id: journalId, habit_id: habit.id });
            }
        } catch (error) {
            console.error('Error creating daily habits:', error);
        }
    };

    const createJournal = (e) => {
        e.preventDefault();
        if (!selectedMonthId) {
            alert("Month not selected!");
            return;
        }

        api
            .post("/api/journals/", { highlight, is_gym_done: isGymDone, is_read_done: isReadDone, weight, month_id: selectedMonthId })
            .then(async (res) => {
                if (res.status === 201) {
                    alert("Journal created!");
                    const journalId = res.data.id;
                    await createDailyHabits(journalId, habits);
                } 
                else alert("Failed to make Journal.");
                getJournals(selectedMonthId);
                setShowForm(false);
            })
            .catch((err) => alert(err));
    };

    const createGoal = (e) => {
        e.preventDefault();
        if (!selectedMonthId) {
            alert("Month not selected!");
            return;
        }

        api
            .post("/api/goals/", { name: goalName, month_id: selectedMonthId })
            .then((res) => {
                if (res.status === 201) alert("Goal created!");
                else alert("Failed to create Goal.");
                getGoals(selectedMonthId);
                setShowGoalForm(false);
            })
            .catch((err) => alert(err));
    };

    const updateGoalCompletion = (goalId, isCompleted) => {
        api
            .patch(`/api/goals/${goalId}/`, { is_completed: isCompleted })
            .then((res) => {
                if (res.status === 200) alert("Goal updated!");
                else alert("Failed to update Goal.");
                getGoals(selectedMonthId);  // Atualize a lista de metas após a alteração
            })
            .catch((err) => alert(err));
    };
    

    return (
        <div className="">
            <NavbarComponent />
            <div>{selectedMonthName && <h1 className="text-center mt-4 mb-2 text-2xl font-bold">{selectedMonthName}</h1>}</div>
                <div className="m-6">
                {journals.map(journal => (
                    <JournalComponent key={journal.id} journal={journal} deleteJournal={deleteJournal} habits={habits} />
                ))}
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Goals</h2>
                    {goals.map(goal => (
                        <GoalComponent key={goal.id} goal={goal} deleteGoal={deleteGoal} updateGoalCompletion={updateGoalCompletion}/>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4 mb-6">
                <Button className="bg-primary text-white" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cancel" : "Add New Journal +"}
                </Button>
                <Button className="bg-primary text-white ml-4" onClick={() => setShowGoalForm(!showGoalForm)}>
                    {showGoalForm ? "Cancel" : "Add New Goal +"}
                </Button>
            </div>
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <Button color="danger" onClick={() => setShowForm(false)}>
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
                                <Button color="danger" onClick={() => setShowGoalForm(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </Button>
                            </div>
                            <h2>Create a Goal</h2>
                            <form onSubmit={createGoal} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="goalName">Goal Name:</label>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
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
