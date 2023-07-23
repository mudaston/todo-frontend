import debounce from 'lodash.debounce'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useSuccessMessage } from '@shared/hooks'

import { todoApi } from '@entities/todo'

import { TodoNameStyles } from './styles'

interface TodoNameProps {
    id: number
    todoName: string
}

const TodoName: React.FC<TodoNameProps> = ({ id, todoName }) => {
    const [updateTodo] = todoApi.useUpdateTodoMutation()
    const { enqueueMessage } = useSuccessMessage()

    const todoNameRef = useRef<HTMLInputElement>(null)
    const [disabled, setDisabled] = useState(true)
    const [text, setText] = useState(todoName)

    const debouncedRequest = useCallback(
        (id: number, name: string) =>
            debounce(async () => {
                try {
                    await updateTodo({ id, name }).unwrap()

                    enqueueMessage('Name successfully changed!')
                } catch {
                    setText(todoName)
                }
            }, 0),
        []
    )

    const sendRequest = useMemo(() => debouncedRequest(id, text), [text])

    const changeName = async () => {
        if (text === todoName) {
            setDisabled(true)

            return
        }

        setDisabled(true)
        sendRequest()
    }

    useEffect(() => {
        if (disabled || !todoNameRef.current) {
            return
        }

        todoNameRef.current.select()
    }, [disabled])

    return (
        <TodoNameStyles
            inputRef={todoNameRef}
            disabled={disabled}
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            onDoubleClick={() => {
                setDisabled(false)
            }}
            onBlur={changeName}
            onKeyUp={(e) => e.key === 'Enter' && changeName()}
        />
    )
}

export default TodoName
