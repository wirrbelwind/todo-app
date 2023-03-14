import { Alert, Box, CircularProgress, Grid, LinearProgress } from "@mui/material"
import { TaskRow, tasksModel } from "entities/task"
import { DeleteTask } from "features/task/delete";
import { EditTask } from "features/task/edit";
import { ToggleTask } from "features/task/toggle";

export const TaskList = () => {
	const tasks = tasksModel.useTasks()

	return (
		<Box sx={{
			flex: '1 0',
			maxHeight: '80vh',
			overflow: 'auto'
		}}>
			{
				tasks.isLoading &&
				<CircularProgress />
			}
			{
				tasks.isFetching &&
				<LinearProgress />
			}
			{
				tasks.error &&
				<Alert severity="error" > Произошла ошибка.Попробуйте повторить попытку или обновить страницу.</Alert>
			}

			{
				tasks.isSuccess &&
				tasks.data.map(item =>
					<TaskRow
						todo={item}
						key={item.id}
						before={<ToggleTask task={item} />}
						after={<DeleteTask todo={item} />}
					>
						<EditTask task={item} />
					</TaskRow>
				)
			}
		</Box>
	);
}