import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; import { FC } from "react";
import { HOC } from './composeHOCS';

export const withReactQuery: HOC<{}> = (WrappedComponent) => {
	const client = new QueryClient()

	return (props) => (
		<QueryClientProvider client={client}>
			<WrappedComponent {...props} />
		</QueryClientProvider>
	);
};