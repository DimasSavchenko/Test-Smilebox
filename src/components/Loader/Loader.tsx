import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { default as bemCssModules } from 'bem-css-modules';
import { default as LoaderModuleCss } from './Loader.module.css';

const loaderStyle = bemCssModules(LoaderModuleCss);

export const Loader = React.memo(() => (
	<div className={loaderStyle()}>
		<div className={loaderStyle('progress')}>
			<CircularProgress />
		</div>
	</div>
));

Loader.displayName = 'Loader';
