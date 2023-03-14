import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "shared/api/api";
import { ITask } from "shared/types/ITodo";

export const useTasks = () => useQuery({
	queryKey: ['tasks'],
	queryFn: (): Promise<ITask[]> => {
		return api.get('/tasks')
			.then(response => response.data)
			.catch(error => {
				throw new Error(error.response.data.message);
			})
	},
})
export const useDeleteTasks = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (ID: number) => {
			return api.delete(`/tasks/${ID}`)
				.then(res => res.data)
				.catch(err => { throw new Error(err.response.data.message) })
		},
		mutationKey: ['tasks', 'delete'],
		onSuccess: () => {
			queryClient.invalidateQueries(['tasks'])
		}
	})
}

export const useUpdateTask = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (task: ITask) => api.patch(`/tasks/${task.id}`, task)
			.then(res => res.data)
			.catch(error => console.log(error))
		,
		mutationKey: ['tasks', 'update'],
		onSuccess: () => {
			queryClient.invalidateQueries(['tasks'])
		}
	})
}

export const useCreateTask = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (taskText: string) => {
			return api.post('/tasks', {
				completed: false,
				datetime: Date.now() / 1000,
				text: taskText
			})
				.then(res => res.data)
				.catch(err => { throw new Error(err.response.data.message) })
		},
		mutationKey: ['tasks', 'create'],
		onSuccess: () => {
			queryClient.invalidateQueries(['tasks'])
		}
	})
}