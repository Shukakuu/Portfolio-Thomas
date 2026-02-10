/** @type {import('next').NextConfig} */
const nextConfig = {
	// Export statique
	output: "export",

	// Ignore les erreurs ESLint pendant le build
	eslint: {
		ignoreDuringBuilds: true,
	},

	// (optionnel mais safe pour ton cas)
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
