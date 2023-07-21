import { DeleteForever } from '@mui/icons-material'
import { List, Checkbox, IconButton } from '@mui/material'
import { ChangeEvent } from 'react'

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

    const updateTodoCompleteStatus = async (
        e: ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        const state = e.target.checked

        updateTodo({
            id,
            completed: state,
        })
    }

    const deleteTodoHandler = async (id: number) => {
        await deleteTodo(id).unwrap()

        enqueueMessage('Todo deleted successfully!')
    }

    return (
        <List>
            {todos?.map(({ id, name, completed }) => (
                <TodoItem key={id} completed={completed}>
                    <Checkbox
                        checked={completed}
                        onChange={(e) => updateTodoCompleteStatus(e, id)}
                    />
                    <TodoName>{name}</TodoName>
                    <IconButton onClick={() => deleteTodoHandler(id)}>
                        <DeleteForever />
                    </IconButton>
                </TodoItem>
            ))}
        </List>
    )
}

export default TodoList
