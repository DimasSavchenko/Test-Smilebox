import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route } from 'react-router-dom';

import { LandingPage } from '../LandingPage/LandingPage';
import MoviePage from '../MoviePage/MoviePage';

export const Routes: React.FC = observer(() => (
		<Switch>
			<Route exact={true} path="/" component={LandingPage} />
			<Route path="/:movieId" component={MoviePage} />
		</Switch>
	),
);
