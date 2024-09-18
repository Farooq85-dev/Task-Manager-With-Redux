import { IoIosArrowBack, IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../Redux/Reducer";
import { useState, useEffect } from "react";

type TaskType = {
  id: number;
  taskName: string;
};

function TaskPage() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setError(tasks.length === 0);
  }, [tasks]);

  const goBack = (): void => {
    history.back();
  };

  const handleTodoDelete = (taskId: number) => {
    dispatch(deleteTodo({ id: taskId }));
    alert("Deleted Successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-start gap-5 shadow-md rounded-2xl p-6 bg-[#e7e7e7]">
        <div className="flex justify-center items-center gap-10">
          <IoIosArrowBack
            onClick={goBack}
            size={50}
            className="cursor-pointer bg-[#fef5ed] rounded-md"
          />
          <h2 className="text-center text-3xl font-semibold">Your tasks</h2>
          <Link to="/add">
            <IoIosAdd
              size={50}
              className="cursor-pointer bg-[#fef5ed] rounded-md"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-5">
          {tasks.map((task: TaskType) => (
            <div
              key={task.id}
              className="flex justify-between items-center gap-5 w-full"
            >
              <h3 className="text-3xl text-center">{task.taskName}</h3>
              <div className="flex justify-center items-center gap-2">
                <Link to={`/update/${task.id}`}>
                  <button className="btn btn-neutral">Update</button>
                </Link>
                <button
                  onClick={() => handleTodoDelete(task.id)}
                  className="btn btn-warning"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {error && (
            <p className="text-xl text-center font-semibold">No tasks found!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
