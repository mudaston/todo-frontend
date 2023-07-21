import { z } from 'zod'

export const todoSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    completed: z.boolean(),
    authorId: z.number(),
})

export const createTodoSchema = z.object({
    name: z.string().trim().min(1, 'Todo must have a name'),
    description: z.string().optional(),
    completed: z.boolean().optional(),
})

export const updateTodoSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    completed: z.boolean().optional(),
})

export type Todo = z.infer<typeof todoSchema>

export type CreateTodo = z.infer<typeof createTodoSchema>

export type UpdateTodo = z.infer<typeof updateTodoSchema>
