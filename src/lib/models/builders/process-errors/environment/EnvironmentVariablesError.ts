/**
 * @summary Error raised when an environment variable fails validation.
 * @description Stores the variable name & original value alongside the error message.
 */
class EnvironmentVariablesError extends Error {
    /**
     * @summary Creates an environment variable validation error.
     * @description Sets the error name & prototype, retaining the variable details for inspection.
     */
    public constructor(
        message: string,
        /**
         * @summary Name of the environment variable that failed validation.
         */
        public readonly variableName: string,
        /**
         * @summary Original value of the environment variable that failed validation.
         */
        public readonly variableValue: unknown,
    ) {
        super(message)
        this.name = "EnvironmentVariablesError"
        Object.setPrototypeOf(this, EnvironmentVariablesError.prototype)
    }

    /**
     * @summary Creates an error for a missing required environment variable.
     * @description Includes the variable name in the message & retains its original value.
     * @param variableName - Name of a variable.
     * @param variableValue - Raw value of the variable from `.env` file.
     */
    public static fromMissingRequiredVariable(variableName: string, variableValue: unknown): EnvironmentVariablesError {
        return new this(`Environment variable "${variableName}" is required and missing.`, variableName, variableValue)
    }

    /**
     * @summary Creates an error for an invalid environment variable URL.
     * @description Includes the variable name in the message & retains the value that could not be parsed.
     * @param variableName - Name of a variable.
     * @param variableValue - Raw value of the variable from `.env` file.
     */
    public static fromInvalidURLValue(variableName: string, variableValue: unknown): EnvironmentVariablesError {
        return new this(`Environment variable "${variableName}" is not a valid URL.`, variableName, variableValue)
    }
}

export { EnvironmentVariablesError }
