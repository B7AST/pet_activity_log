import NewActivity from "./NewActivity.jsx";

function Activities({ activities, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Activities</h2>
      <NewActivity onAdd={onAdd} />
      {activities.length === 0 && (
        <p className="text-stone-800 my-4">
          This page does not have any activity yes.
        </p>
      )}
      {activities.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {activities.map((activity) => (
            <li key={activity.activityId} className="flex justify-between my-4">
              <span>{activity.text}</span>
              <span>{activity.activityId}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(activity.activityId)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Activities;
