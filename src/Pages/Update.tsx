import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../Redux/Reducer";

function EditPage() {
  const [taskName, setTaskName] = useState<string>("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateTask = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      updateTodo({
        id: Number(id),
        taskName,
      })
    );
    alert("Updated Successfully!");
    navigate("/tasks");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleUpdateTask}>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            value={taskName}
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

export default EditPage;
