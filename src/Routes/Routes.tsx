import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../Pages/Home"));
const TaskPage = lazy(() => import("../Pages/Task"));
const AddTaskPage = lazy(() => import("../Pages/AddTask"));
const EditPage = lazy(() => import("../Pages/Update"));

function RoutesComp(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/update/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default RoutesComp;
