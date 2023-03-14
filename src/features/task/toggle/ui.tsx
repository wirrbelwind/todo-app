import { Checkbox } from "@mui/material"
import { tasksModel } from "entities/task"
import { FC } from "react"
import { ITask } from "shared/types/ITodo"

interface ToggleTaskProps {
	task: ITask
}
export const ToggleTask: FC<ToggleTaskProps> = ({ task }) => {
	const mutation = tasksModel.useUpdateTask()
	const handleClick = () => {
		// tasksModel.updateTask().mutate({ ...task, completed: task.completed })
		mutation.mutate({ ...task, completed: !task.completed })
	}
	return (
		<Checkbox
			onClick={handleClick}
			checked={task.completed}
			sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
		/>
	)
}