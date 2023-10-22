import { CollectionConfig } from "payload/types";
import { openIdConnect } from "../services/auth";

const Users: CollectionConfig = {
	slug: "users",
	auth: {
		disableLocalStrategy: true,
		strategies: [{ name: "openidconnect", strategy: openIdConnect }]
	},
	admin: { useAsTitle: "email" },
	fields: []
};

export default Users;
