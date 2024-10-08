import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Reducer.js";
import { useNavigate } from "react-router-dom";

function AddTaskPage() {
  const [taskName, setTaskName] = useState<string>("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const taskAutoId = Math.random();

  const handleAddTask = (event: FormEvent) => {
    event?.preventDefault();
    if (!taskName) return alert("Pleae add task first!");

    dispatch(
      addTodo({
        id: Number(taskAutoId),
        taskName,
      })
    );
    alert("Added Successfully!");
    navigate("/tasks");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleAddTask}>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Type task name..."
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-neutral" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskPage;
