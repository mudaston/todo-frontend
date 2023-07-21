import { styled, ListItem, Typography } from '@mui/material'

export const TodoItem = styled(ListItem, {
    shouldForwardProp: (prop) => prop !== 'completed',
})<{ completed: boolean }>(
    ({ completed }) => `
    display: flex;
    gap: 20px;

    padding-left: 0;
    padding-right: 0;

    text-decoration-line: ${completed ? 'line-through' : 'none'};
`
)

export const TodoName = styled(Typography)`
    flex: 1;
`
