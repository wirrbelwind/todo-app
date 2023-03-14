import { CircularProgress, IconButton, TextField, TextFieldClassKey } from "@mui/material"
import { FC, useRef, useState } from "react"
import { ITask } from "shared/types/ITodo"
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { tasksModel } from "entities/task";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import useInput from "shared/libs/hooks/useInput";

interface EditTask {
	task: ITask
}

export const EditTask: FC<EditTask> = ({ task }) => {
	const mutation = tasksModel.useUpdateTask()
	const [editable, setEditable] = useState(false)

	const textInput = useInput<string>(task.text)

	const handleClick = () => {
		if (editable && textInput.value !== task.text) {
			mutation.mutate({ ...task, text: textInput.value })
		}

		setEditable(prev => !prev)
	}
	return (
		<>
			<IconButton onClick={handleClick}>
				{
					mutation.isLoading ? <CircularProgress /> :
						!editable ? <ModeEditOutlinedIcon /> : <CheckOutlinedIcon />
				}
			</IconButton>

			<TextField
				value={textInput.value}
				onChange={textInput.onChange}
				disabled={!editable}
				focused={editable}
			/>
		</>
	)
}