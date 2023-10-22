import path from "path";

import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import { resolveAlias, serverOnlyModules } from "payload-plugin-resolve-alias";
import Users from "./collections/Users";

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler()
	},
	editor: slateEditor({}),
	collections: [Users],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts")
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql")
	},
	plugins: [
		payloadCloud(),
		resolveAlias(serverOnlyModules, [
			"url",
			"querystring",
			"passport-openidconnect"
		])
	],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI
	})
});
