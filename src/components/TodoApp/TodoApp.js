import { useState } from "react";

import { TodoHeader } from "../TodoHeader/TodoHeader";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { TodoList } from "../TodoList/TodoList";

export function TodoApp() {
    return (
        <div className="todo-app">
            <TodoHeader />
            <ControlPanel />
            <TodoList />
        </div>
    )
}