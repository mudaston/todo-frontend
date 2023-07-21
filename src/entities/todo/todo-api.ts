import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { CreateTodo, Todo, UpdateTodo } from './model'

export const todoApi = createApi({
    reducerPath: 'todos-api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    tagTypes: ['get-todo'],
    endpoints: (build) => ({
        getTodos: build.query<Todo[], void>({
            query: () => ({ url: 'todos' }),
            providesTags: ['get-todo'],
        }),
        deleteTodo: build.mutation<Todo, number>({
            query: (todoId) => ({ url: `todo/${todoId}`, method: 'DELETE' }),
            invalidatesTags: ['get-todo'],
        }),
        createTodo: build.mutation<Todo, { authorId: number } & CreateTodo>({
            query: (todo) => ({ url: 'todo', method: 'POST', body: todo }),
            invalidatesTags: ['get-todo'],
        }),
        updateTodo: build.mutation<Todo, { id: number } & UpdateTodo>({
            query: (todo) => ({ url: 'todo', method: 'PUT', body: todo }),
            invalidatesTags: ['get-todo'],
        }),
    }),
})
