import { Checkbox, IconButton, ListItem, TextField, Typography } from '@mui/material';
import { ITask } from 'shared/types/ITodo';
import React, { FC, ReactNode } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import dayjs from 'dayjs';
import { formatDate } from 'entities/task/lib/formatDate';

interface TodoProps {
	todo: ITask
	before?: ReactNode
	after?: ReactNode
	children?: ReactNode
}

export const TaskRow: FC<TodoProps> = ({
	todo,
	before,
	after,
	children
}) => (
	<ListItem key={todo.id}>

		{before}

		{children ||
			<TextField
				value={todo.text}
				style={{
					textDecoration: todo.completed ? 'line-through' : 'none',
					flexGrow: 1,
				}}
			>
				{todo.text}
			</TextField>}


		<Typography>
			{formatDate(todo.datetime)}
		</Typography>

		{after}

	</ListItem>
)