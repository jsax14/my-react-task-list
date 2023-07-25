import { Header } from './components/Header'
import {Imput} from './components/Input/Imput'
import './app.css'
import { TodoList } from './components/TodoList/TodoList'
import { Todo } from './components/Todo/Todo'
import { Button } from './components/Button/Button'

function App() {

  return (
    <div className=" bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-40 " >
      <div className=" container flex flex-col max-w-xl">
        <Header/>
        <Imput/>
        <TodoList>
          <Todo></Todo>
          <Todo></Todo>
        </TodoList>
        <Button/>
      </div>
      
 </div>
  )
}

export default App
