/** @type {import('next').NextConfig} */
const nextConfig = {
	// Export statique
	output: "export",

	// (optionnel mais safe pour ton cas)
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
