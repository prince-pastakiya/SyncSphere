module.exports = {
	apps: [
		{
			name: "SyncSphere",
			script: "npm",
			args: "run dev",
			env: {
				NODE_ENV: "development",
			},
		},
	],
};
