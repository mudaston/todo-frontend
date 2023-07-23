import { DeleteForever } from '@mui/icons-material'
import { List, Checkbox, IconButton } from '@mui/material'
import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'

import { useSuccessMessage } from '@shared/hooks'

import { todoApi, Todo } from '@entities/todo'

import { TodoItem } from './styles'
import TodoName from './todo-name'

interface TodoListProps {
    todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    const { enqueueMessage } = useSuccessMessage()
    const [deleteTodo] = todoApi.useDeleteTodoMutation()
    const [updateTodo] = todoApi.useUpdateTodoMutation()

    const updateTodoCompleteStatus = debounce(
        async (state: boolean, id: number) => {
            updateTodo({
                id,
                completed: state,
            })
        },
        200
    )

    const deleteTodoHandler = debounce(async (id) => {
        await deleteTodo(id).unwrap()

        enqueueMessage('Todo deleted successfully!')
    }, 300)

    return (
        <List>
            {todos?.map(({ id, name, completed }) => (
                <TodoItem key={id} completed={completed}>
                    <Checkbox
                        checked={completed}
                        onChange={(e) =>
                            updateTodoCompleteStatus(e.target.checked, id)
                        }
                    />
                    <TodoName key={id} id={id} todoName={name} />
                    <IconButton onClick={() => deleteTodoHandler(id)}>
                        <DeleteForever color='error' />
                    </IconButton>
                </TodoItem>
            ))}
        </List>
    )
}

export default TodoList
