const rootEl = document.getElementById('search-movies-root');

__webpack_public_path__ = rootEl?.dataset.appUrl ?? ''; // eslint-disable-line no-undef

const init = async (): Promise<void> => {
	const appRender = await import(/* webpackChunkName: "app" */ './AppRender');

	appRender.render();
};

init().catch((error) => {
	throw error;
});

export {}; // needed so the TS treats this file as a module
