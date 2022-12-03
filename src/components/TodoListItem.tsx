import React from "react";

interface ITodoListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo: Deletefn;
}

const TodoListItem: React.FC<ITodoListItem> = ({
  item,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      {item.isDone ? (
        <p className="checked" onClick={() => toggleTodo(item)}>
          {item.task}{" "}
        </p>
      ) : (
        <p onClick={() => toggleTodo(item)}> {item.task} </p>
      )}
      <span className="task-icons" onClick={() => deleteTodo(item)}>
        ✖️
      </span>
    </li>
  );
};

export default TodoListItem;
