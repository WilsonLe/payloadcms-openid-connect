import OpenIDConnectStrategy, {
	Profile,
	VerifyCallback
} from "passport-openidconnect";
import { Payload } from "payload";

export const openIdConnect = (payload: Payload) => {
	return new OpenIDConnectStrategy(
		{
			issuer: "https://keycloak.paas.seamlesstech.io/realms/test-realm",
			authorizationURL:
				"https://keycloak.paas.seamlesstech.io/realms/test-realm/protocol/openid-connect/auth",
			tokenURL:
				"https://keycloak.paas.seamlesstech.io/realms/test-realm/protocol/openid-connect/token",
			userInfoURL:
				"https://keycloak.paas.seamlesstech.io/realms/test-realm/protocol/openid-connect/userinfo",
			clientID: "test-client",
			clientSecret: "LK2j7GLK7iNHf30nRvnQcIMMXBwvtHZb",
			callbackURL: "http://localhost:3000/"
		},
		(issuer: string, profile: Profile, done: VerifyCallback) => {
			done(null, profile);
		}
	);
};
