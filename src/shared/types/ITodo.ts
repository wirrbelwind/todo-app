import { Dayjs } from "dayjs"

export interface ITask {
	id: number
	text: string
	completed: boolean
	datetime: number
}