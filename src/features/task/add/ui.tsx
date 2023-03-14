import { TextField } from "@mui/material"
import { tasksModel } from "entities/task"
import { FC } from "react"
import { UseInputReturnType } from "shared/libs/hooks/useInput"
import { ArrowButton } from "shared/ui/ArrowButton"

interface TaskAddProps {
	input: UseInputReturnType<string>
	withButton: boolean
}

export const TaskAdd: FC<TaskAddProps> = ({ input, withButton }) => {

	return (
		<>
			<TextField
				value={input.value}
				onChange={input.onChange}
				fullWidth
				placeholder="Write your new task..."
			/>

			{withButton &&
				<ArrowButton
					direction="right"
					type="submit"
					disabled={!input.value}
					size='large'
				/>
			}
		</>
	)
}