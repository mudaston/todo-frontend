import { zodResolver } from '@hookform/resolvers/zod'
import { Button, TextField, Box, FormHelperText } from '@mui/material'
import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { useSuccessMessage } from '@shared/hooks'
import { removeRedunantSpaces } from '@shared/lib/helpers'

import { createTodoSchema, CreateTodo, todoApi } from '@entities/todo'

import { InputFieldWrapper, BadgeStyled } from './styles'

const CreateTodoForm = () => {
    const [createTodo] = todoApi.useCreateTodoMutation()
    const { enqueueMessage } = useSuccessMessage()

    const { handleSubmit, control, resetField, reset } = useForm<CreateTodo>({
        resolver: zodResolver(createTodoSchema),
        mode: 'onSubmit',
        defaultValues: { name: '' },
    })

    const submitHandler: SubmitHandler<CreateTodo> = async (data) => {
        await createTodo({ authorId: 1, ...data }).unwrap()

        enqueueMessage('Todo created successfully!')

        resetField('name')
        reset({ name: '' })
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Controller
                name='name'
                control={control}
                render={({
                    field: { onChange, value, ...field },
                    fieldState: { error },
                }) => (
                    <Box>
                        <InputFieldWrapper>
                            <BadgeStyled
                                badgeContent={value.length}
                                color='primary'
                            >
                                <TextField
                                    {...field}
                                    fullWidth
                                    placeholder='Todo name'
                                    size='small'
                                    value={value}
                                    onChange={(e) => {
                                        const transformedValue =
                                            removeRedunantSpaces(
                                                e.currentTarget.value
                                            ).substring(0, 50)
                                        onChange(transformedValue)
                                    }}
                                />
                            </BadgeStyled>
                            <Button variant='contained' type='submit'>
                                Add
                            </Button>
                        </InputFieldWrapper>
                        {error && (
                            <FormHelperText error sx={{ display: 'flex' }}>
                                {error.message}
                            </FormHelperText>
                        )}
                    </Box>
                )}
            />
        </form>
    )
}

export default CreateTodoForm
