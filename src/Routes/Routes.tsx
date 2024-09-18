import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home";
import TaskPage from "../Pages/Task";
import AddTaskPage from "../Pages/AddTask";
import EditPage from "../Pages/Update";

function RoutesComp(): any {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/add" element={<AddTaskPage />} />
        <Route path="/update/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesComp;
