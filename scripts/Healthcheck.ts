/**
 * @summary Checks the production HTTP server's health.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Healthcheck {
    /**
     * @summary Private constructor.
     * @description Prevents instanization & inheritance.
     */
    private constructor() {}

    /**
     * @summary Initializes healthcheck.
     */
    static {
        void this.init()
    }

    /**
     * @summary Returns the validated application port.
     * @description Requires APP_PORT to be a decimal integer from 1 to 65535; trims surrounding whitespace.
     * @throws Error When APP_PORT is missing, blank or invalid.
     */
    private static get APP_PORT(): number {
        const value: string | undefined = process.env.APP_PORT?.trim()
        if (!value) throw new Error("Environment variable APP_PORT is missing.")

        const port: number = Number(value)
        if (!/^\d+$/.test(value) || !Number.isInteger(port) || port < 1 || port > 65535) {
            throw new Error("Environment variable APP_PORT must be a decimal integer from 1 to 65535.")
        }
        return port
    }

    /**
     * @summary Checks whether the application responds successfully.
     * @description Validates required APP_PORT and requests the homepage with a five-second timeout.
     * Throws when the request fails or returns an unsuccessful HTTP status.
     */
    public static async checkHealth(): Promise<void> {
        const response: Response = await fetch(`http://127.0.0.1:${this.APP_PORT}/`, {
            signal: AbortSignal.timeout(5000),
        })
        if (!response.ok) {
            throw new Error(`Healthcheck failed: HTTP ${response.status}`)
        }
    }

    /**
     * @summary Runs the healthcheck as a command-line script.
     * @description Logs failures and exits with status 1 when the application is unhealthy.
     */
    public static async init(): Promise<void> {
        try {
            await this.checkHealth()
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
    }
}
