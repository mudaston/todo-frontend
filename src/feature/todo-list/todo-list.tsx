import { DeleteForever } from '@mui/icons-material'
import { List, Checkbox, IconButton } from '@mui/material'
import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'

import { useSuccessMessage } from '@shared/hooks'

import { todoApi, Todo } from '@entities/todo'

import { TodoItem, TodoName } from './styles'

interface TodoListProps {
    todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    const { enqueueMessage } = useSuccessMessage()
    const [deleteTodo] = todoApi.useDeleteTodoMutation()
    const [updateTodo] = todoApi.useUpdateTodoMutation()

    const [todosModified, setTodosModified] = useState(
        todos.map((todo) => ({ ...todo, disabled: true }))
    )

    const updateTodoCompleteStatus = debounce(
        async (state: boolean, id: number) => {
            updateTodo({
                id,
                completed: state,
            })
        },
        300
    )

    const deleteTodoHandler = debounce(async (id) => {
        await deleteTodo(id).unwrap()

        enqueueMessage('Todo deleted successfully!')
    }, 300)

    const editTodoName = (id: number) => {
        const todo = todosModified.findIndex((todo) => todo.id === id)
        todosModified[todo].disabled = false

        setTodosModified([...todosModified])
    }

    useEffect(() => {
        setTodosModified(todos.map((todo) => ({ ...todo, disabled: true })))
    }, [todos])

    return (
        <List>
            {todosModified?.map(({ id, name, completed, disabled }) => (
                <TodoItem key={id} completed={completed}>
                    <Checkbox
                        checked={completed}
                        onChange={(e) =>
                            updateTodoCompleteStatus(e.target.checked, id)
                        }
                    />
                    <TodoName
                        disabled={disabled}
                        value={name}
                        onDoubleClick={() => editTodoName(id)}
                    />
                    <IconButton onClick={() => deleteTodoHandler(id)}>
                        <DeleteForever color='error' />
                    </IconButton>
                </TodoItem>
            ))}
        </List>
    )
}

export default TodoList
