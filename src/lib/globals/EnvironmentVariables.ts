import { EnvironmentVariablesDataManager } from "./managers/security/EnvironmentVariablesDataManager"

/**
 * @summary Variables that change between environments.
 * @description These environment variables are configurable via `.env` file & validated by EnvironmentVariablesDataManager.
 */
class EnvironmentVariables {
    /**
     * @summary Private constructor.
     * @description Prevents instanization & inheritance.
     */
    private constructor() {}

    /**
     * @summary URL endpoint to the website.
     * @description Required URL from NEXT_PUBLIC_WEBSITE_ENDPOINT_URL, used to define metadata & manifest information.
     */
    public static readonly WEBSITE_ENDPOINT_URL: URL = EnvironmentVariablesDataManager.getURL(
        "WEBSITE_ENDPOINT_URL",
        process.env.NEXT_PUBLIC_WEBSITE_ENDPOINT_URL,
        true,
    )
}

export { EnvironmentVariables }
