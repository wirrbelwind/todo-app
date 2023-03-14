import { QueryClient } from '@tanstack/react-query'
import LoginPage from 'pages/LoginPage';
import TasksPage from 'pages/TasksPage';
import { Route, Routes } from 'react-router';
import { withProviders } from './providers';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path="/tasks" element={<TasksPage />} />
		</Routes>
	);
};

export default withProviders(App);