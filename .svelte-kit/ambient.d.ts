
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MANPATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const ANDROID_HOME: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const VSCODE_CRASH_REPORTER_SANDBOXED_HINT: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_config_metrics_registry: string;
	export const NVM_PATH: string;
	export const npm_config_global_prefix: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const ZSH: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const LS_COLORS: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const FORCE_COLORS: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const VSCODE_AMD_ENTRYPOINT: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const PW_TS_ESM_ON: string;
	export const LaunchInstanceID: string;
	export const npm_package_json: string;
	export const __CFBundleIdentifier: string;
	export const NVM_NODEJS_ORG_MIRROR: string;
	export const npm_config_init_module: string;
	export const npm_config_userconfig: string;
	export const PWD: string;
	export const npm_command: string;
	export const PW_TEST_REPORTER: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const npm_package_name: string;
	export const NODE_PATH: string;
	export const XPC_FLAGS: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const SHLVL: string;
	export const HOME: string;
	export const APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
	export const VSCODE_NLS_CONFIG: string;
	export const HOMEBREW_PREFIX: string;
	export const PW_TEST_REPORTER_WS_ENDPOINT: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const npm_config_cache: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const NVM_BIN: string;
	export const VSCODE_PID: string;
	export const NVM_IOJS_ORG_MIRROR: string;
	export const BROWSER: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const PW_TEST_HTML_REPORT_OPEN: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const VSCODE_CWD: string;
	export const SECURITYSESSIONID: string;
	export const npm_config_prefix: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MANPATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		ANDROID_HOME: string;
		INIT_CWD: string;
		SHELL: string;
		VSCODE_CRASH_REPORTER_SANDBOXED_HINT: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_config_metrics_registry: string;
		NVM_PATH: string;
		npm_config_global_prefix: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		COLOR: string;
		npm_config_noproxy: string;
		ZSH: string;
		npm_config_local_prefix: string;
		USER: string;
		NVM_DIR: string;
		LS_COLORS: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		FORCE_COLORS: string;
		npm_execpath: string;
		PAGER: string;
		VSCODE_AMD_ENTRYPOINT: string;
		LSCOLORS: string;
		PATH: string;
		PW_TS_ESM_ON: string;
		LaunchInstanceID: string;
		npm_package_json: string;
		__CFBundleIdentifier: string;
		NVM_NODEJS_ORG_MIRROR: string;
		npm_config_init_module: string;
		npm_config_userconfig: string;
		PWD: string;
		npm_command: string;
		PW_TEST_REPORTER: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		npm_package_name: string;
		NODE_PATH: string;
		XPC_FLAGS: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		SHLVL: string;
		HOME: string;
		APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
		VSCODE_NLS_CONFIG: string;
		HOMEBREW_PREFIX: string;
		PW_TEST_REPORTER_WS_ENDPOINT: string;
		LOGNAME: string;
		LESS: string;
		npm_config_cache: string;
		npm_lifecycle_script: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_CODE_CACHE_PATH: string;
		NVM_BIN: string;
		VSCODE_PID: string;
		NVM_IOJS_ORG_MIRROR: string;
		BROWSER: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		PW_TEST_HTML_REPORT_OPEN: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		VSCODE_CWD: string;
		SECURITYSESSIONID: string;
		npm_config_prefix: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
