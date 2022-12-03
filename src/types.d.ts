interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}
interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToggleFn;
  deleteTodo: Deletefn;
}

type Addfn = (text: string) => void;

type ToggleFn = (item: TodoType) => void;

type Deletefn = (item: TodoType) => void;
