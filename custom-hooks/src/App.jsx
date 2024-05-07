import { useIsOnline } from '../hooks/isOnline';
import { useTodos } from "../hooks/useTodos";

function App() {
  const {todos, loading} = useTodos(10);
  const onlineStatus = useIsOnline();

  if(onlineStatus){
  if (loading) {
    return <div> loading... </div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )}else{
    return<div>Connect to an internet please</div>
  }
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App