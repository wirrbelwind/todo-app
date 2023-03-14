import { Alert, Box, CircularProgress } from "@mui/material"
import { tasksModel } from "entities/task"

export const TaskStats = () => {
	const tasks = tasksModel.useTasks()

	const doneTasks = tasks.data?.filter(task => task.completed)
	const inProgressTasks = tasks.data?.filter(task => !task.completed)
	return (
		<Box>
			{tasks.isLoading &&
				<CircularProgress />
			}
			{tasks.isError &&
				<Alert>Error</Alert>
			}
			{tasks.isSuccess &&
				`Done tasks: ${doneTasks?.length};\n In progress: ${inProgressTasks?.length}`
			}
		</Box>
	)
}