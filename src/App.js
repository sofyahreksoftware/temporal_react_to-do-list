import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, content: "spędzic wieczór ze znajomymi", done: true },
    { id: 2, content: "stworzyć projekt w Reakcie", done: false },
    { id: 3, content: "zjeść kolację", done: true },
  ]);

  const areAllTasksDone = tasks.every((task) => task.done);
  console.log(areAllTasksDone);
  const areAnyDone = tasks.some((task) => task.done);

  const [tasksHidden, setTasksHidden] = useState(false);
  const toggleTaskHidden = () => {
    setTasksHidden(areAnyDone ? (tasksHidden) => !tasksHidden : null);
  };

  const completeAllTasks = () =>
    setTasks(tasks.map((task) => ({ ...task, done: true })));
  return (
    <main>
      <Header headerName="Lista zadań" />

      <Section sectionBody={<Form />} sectionTitle="Dodaj nowe zadanie" />

      <Section
        headerAdditionalContent={
          <Buttons
            toggleTaskHidden={toggleTaskHidden}
            tasks={tasks}
            tasksHidden={tasksHidden}
            areAllTasksDone={areAllTasksDone}
            completeAllTasks={completeAllTasks}
          />
        }
        sectionTitle="Lista zadań"
        sectionBody={<Tasks tasks={tasks} tasksHidden={tasksHidden} />}
      />
    </main>
  );
}

export default App;
