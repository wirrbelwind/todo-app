import { Alert, Box, Checkbox, Grid, IconButton, ListItem, Typography } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { TaskRow, tasksModel } from 'entities/task';
import { TaskList } from 'widgets/TaskList';
import { TaskCreationPanel } from 'widgets/TaskCreationPanel';
import { TaskStats } from 'widgets/TaskStats';

const TasksPage = () => {
	return (
		<Grid>
			<TaskList />
			<TaskStats />
			<TaskCreationPanel />
		</Grid>
	)
};

export default TasksPage;