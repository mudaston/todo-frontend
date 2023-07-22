import { Box, Container } from '@mui/material'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { CreateTodoForm } from '@feature/create-todo-form'
import { TodoList } from '@feature/todo-list'

import { todoApi } from '@entities/todo'

import { wrapper } from '@app/store'

export default function Home() {
    const { data } = todoApi.useGetTodosQuery()

    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main>
                <Container sx={{ marginTop: '100px' }}>
                    <Box display='flex' gap='20px'>
                        <CreateTodoForm />
                    </Box>
                    <TodoList todos={data || []} />
                </Container>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps =
    wrapper.getServerSideProps(({ dispatch }) => async () => {
        dispatch(todoApi.endpoints.getTodos.initiate())

        await Promise.all(dispatch(todoApi.util.getRunningQueriesThunk()))

        return {
            props: {},
        }
    })
