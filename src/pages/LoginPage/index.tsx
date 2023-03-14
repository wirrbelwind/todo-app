import { Box } from "@mui/material"
import { LoginForm } from "features/login-form"

const LoginPage = () => {
	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh'

		}}>
			<LoginForm />
		</Box>
	)
}
export default LoginPage