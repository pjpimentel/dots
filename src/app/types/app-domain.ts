export interface IAppDomainSpec {
    /**
     * The hostname for the domain
     * string <hostname> [ 4 .. 253 ] characters ^((xn--)?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}\.?$
     */
    domain: string;

    /**
     * Default: "UNSPECIFIED"
     * Enum: "UNSPECIFIED" "DEFAULT" "PRIMARY" "ALIAS"
     *   - DEFAULT: The default .ondigitalocean.app domain assigned to this app
     *   - PRIMARY: The primary domain for this app that is displayed as the default in the control panel, used in bindable environment variables, and any other places that reference an app's live URL. Only one domain may be set as primary.
     *   - ALIAS: A non-primary domain
     */
    type?: 'UNSPECIFIED' | 'DEFAULT' | 'PRIMARY' | 'ALIAS';

    /**
     * Indicates whether the domain includes all sub-domains, in addition to the given domain
     */
    wildcard?: boolean;

    /**
     * Optional. If the domain uses DigitalOcean DNS and you would like App Platform to automatically manage it for you, set this to the name of the domain on your account.
     *
     * For example, If the domain you are adding is app.domain.com, the zone could be domain.com.
     */
    zone?: string;
}