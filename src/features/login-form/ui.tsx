import { Box, Button, TextField } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router"
import useInput from "shared/libs/hooks/useInput"

export const LoginForm = () => {
	const loginInput = useInput<string>('')
	const inputPwd = useInput<string>('')

	const navigate = useNavigate()
	const onSubmit = () => {
		navigate('/tasks')
		console.log('nice');

	}

	return (
		<form onSubmit={onSubmit}>
			<Box sx={{
				gap: '15px',
				display: 'flex',
				flexDirection: 'column',
				maxWidth: '400px'
			}}>
				<TextField
					type='text'
					label='Login'
					value={loginInput.value}
					onChange={loginInput.onChange}
					fullWidth
					autoFocus

				/>
				<TextField
					type='password'
					label='Password'
					value={inputPwd.value}
					onChange={inputPwd.onChange}
					fullWidth
				/>

				<Button variant="contained" type='submit'>Sign In</Button>
			</Box>
		</form>
	)
}