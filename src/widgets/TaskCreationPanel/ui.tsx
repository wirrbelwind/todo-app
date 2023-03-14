import { Box, Button, Grid, IconButton, Popover, TextField, Typography } from "@mui/material"
import { tasksModel } from "entities/task";
import { EmojiPicker } from "features/emoji-picker";
import { TaskAdd } from "features/task/add/ui";
import { useState } from "react";
import useInput from "shared/libs/hooks/useInput";
import { ArrowButton } from "shared/ui/ArrowButton";

export const TaskCreationPanel = () => {
	const input = useInput<string>('')
	const createTask = tasksModel.useCreateTask().mutate

	const onSubmit = () => {
		if (input.value) createTask(input.value)
	}
	return (
		<Box sx={{flex: '0 1'}}>
			<form onSubmit={onSubmit}>
				<Box sx={{
					borderTop: 1,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'stretch'
				}}>

					<EmojiPicker input={input} />
					<TaskAdd input={input} withButton={true} />
				</Box>
			</form>
		</Box >

	)
}