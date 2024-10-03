"use client";

import React, { useState } from "react";

type Task = {
  id: number;
  text: string;
  dueDate: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTask = () => {
    if (!newTask || !dueDate) return;

    

    const newTaskItem: Task = {
      id: Date.now(),
      text: newTask,
      dueDate: dueDate,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask("");
    setDueDate("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-100">Lista de Tarefas</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Descrição da tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-700 text-gray-300"
          />
          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-700 text-gray-300"
          />
          <button
            onClick={addTask}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Adicionar Tarefa
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 bg-gray-700 rounded"
            >
              <div>
                <p className="text-gray-200">{task.text}</p>
                <p className="text-sm text-gray-500">{task.dueDate}</p>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}