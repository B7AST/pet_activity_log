import { useState } from "react";

function NewActivity({ onAdd }) {
    const [enteredActivity, setEnteredActivity] = useState('');

    function changeHandler(event) {
        setEnteredActivity(event.target.value)
    }

    function clickHandler() {
        if (enteredActivity.trim() === '') {
            return;
        }
        onAdd(enteredActivity);
        setEnteredActivity('');
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text"  className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={changeHandler} value={enteredActivity}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={clickHandler}>Add Activity</button>
        </div>
    )
}


export default NewActivity;