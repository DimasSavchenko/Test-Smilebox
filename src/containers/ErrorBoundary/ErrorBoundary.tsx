import React from 'react';

interface IErrorBoundaryProps {
	children: React.ReactNode;
}

interface IErrorBoundaryState {
	error?: Error;
}

export class ErrorBoundary extends React.Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	state: IErrorBoundaryState = {};

	static getDerivedStateFromError(error: Error): IErrorBoundaryState {
		return { error };
	}

	render() {
		const { error }: IErrorBoundaryState = this.state;

		if (error) {
			return (
				<div>
					<h1>Ooops... error found :(</h1>
					<pre>{error.message}</pre>
				</div>
			);
		}

		const { children }: IErrorBoundaryProps = this.props;

		return children;
	}
}
