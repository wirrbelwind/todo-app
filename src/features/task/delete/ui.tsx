import { IconButton } from "@mui/material"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { ITask } from "shared/types/ITodo";
import { FC } from "react";
import { tasksModel } from "entities/task";

interface DeleteTaskProps {
	todo: ITask
}

export const DeleteTask: FC<DeleteTaskProps> = ({ todo }) => {
	const mutation = tasksModel.useDeleteTasks()
	const handleClick = () => {
		mutation.mutate(todo.id)
	}

	return (
		<IconButton onClick={handleClick}>
			<DeleteRoundedIcon />
		</IconButton>
	)
}