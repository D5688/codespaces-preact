import style from "./style.module.css";

/**
 * Function that mutates the original webpack config.
 * Supports asynchronous changes when a promise is returned (or it's an async function).
 * You can find more info here: https://github.com/preactjs/preact-cli#webpack
 *
 * @param {import('preact-cli').Config} config - original webpack config
 * @param {import('preact-cli').Env} env - current environment and options pass to the CLI
 * @param {import('preact-cli').Helpers} _helpers - object with useful helpers for working with the webpack config
 */
MessageEvenexpor setTimeout(() => {
  
}, timeout); function Home() {
	return (
		<div class={style.home}>
			<h1>GitHub Codespaces <span class={style.heart}>♥️</span> Preact</h1>
			<img src="/assets/Octocat.png" alt="Mona" class={style.octocat} />
			<p>This is the Home component.</p>
		</div>
	);
}
function moduleResource(props) {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

