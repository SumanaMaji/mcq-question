const [todos, setTodos] = useState([]);
const [todos, setTodos] = useState({});

const handleAdd = (todo) => {
    const newTodos = todos.slice();
    newTodos.push(todo);
    setTodos(newTodos);
  }
  const handleAdd = (todo) => {
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  }

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  }
  //Remove from array
  const handleRemove = (todo) => {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  }
  //Update array
  const handleUpdate = (index, todo) => {
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
  }

  ///////////////////////

  const handleAdd = (todo) => {
    const newTodos = Object.assign({}, todos);
    newTodos[todo.id] = todo;
    setTodos(newTodos);
  }
  //We can use spread operator to create shallow copy as well.
  const handleAdd = (todo) => {
    const newTodos = {...todos};
    newTodos[todo.id] = todo;
    setTodos(newTodos);
  }
  //Similar to arrays, there's a shortcut for doing this in one line:
  const handleAdd = (todo) => {
    setTodos({...todos, [todo.id]: todo});
  }
  //Remove from object
  const handleRemove = (todo) => {
    const newTodos = {...todos}
    delete newTodos[todo.id]
    setTodos(newTodos);
  }
  //Update object
  Same as adding, it will overwrite the value if the key already exists.
  const handleUpdate = (todo) => {
    setTodos({...todos, [todo.id]: todo});
  }
  