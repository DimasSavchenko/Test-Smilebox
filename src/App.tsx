import React from 'react';
import { configure } from 'mobx';
import { HashRouter as Router } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';

import { Routes } from './containers/Routes/Routes';
import { ErrorBoundary } from './containers/ErrorBoundary/ErrorBoundary';
import { StoreProvider } from './stores/StoreProvider';
import { default as AppModuleCss } from './App.module.css';

bemCssModules.setSettings({
	modifierDelimiter: '--',
	throwOnError: true,
});

configure({ enforceActions: 'observed' });

const block = bemCssModules(AppModuleCss);

export const App: React.FC = () => (
	<ErrorBoundary>
		<div className={block()}>
			<StoreProvider>
				<Router>
					<Routes />
				</Router>
			</StoreProvider>
		</div>
	</ErrorBoundary>
);
