import { EnvironmentVariablesError } from "@/oliverperzyk/lib/models/builders/process-errors/environment/EnvironmentVariablesError"

/**
 * @summary Manager for reading & validating environment variable values.
 * @description Handles required values & converts URL strings, throwing EnvironmentVariablesError when validation fails.
 */
class EnvironmentVariablesDataManager {
    /**
     * @summary Private constructor.
     * @description Prevents instantiation & inheritance.
     */
    private constructor() {}

    /**
     * @summary Reads an environment variable as a string.
     * @description Optional values are returned unchanged, including undefined.
     * @throws {EnvironmentVariablesError} If a required value is missing or empty.
     */
    public static getString<T extends boolean>(
        variableName: string,
        rawVariableValue: string | undefined,
        required: T,
    ): T extends true ? string : string | undefined {
        if (!rawVariableValue && required) {
            throw EnvironmentVariablesError.fromMissingRequiredVariable(variableName, rawVariableValue)
        }

        return rawVariableValue as T extends true ? string : string | undefined
    }

    /**
     * @summary Reads an environment variable as a URL.
     * @description Returns undefined for missing or empty optional values.
     * @throws {EnvironmentVariablesError} If a required value is missing or not a valid URL.
     */
    public static getURL<T extends boolean>(
        variableName: string,
        rawVariableValue: string | undefined,
        required: T,
    ): T extends true ? URL : URL | undefined {
        if (!rawVariableValue) {
            if (required) throw EnvironmentVariablesError.fromMissingRequiredVariable(variableName, rawVariableValue)
            return undefined as T extends true ? URL : URL | undefined
        }

        try {
            return new URL(rawVariableValue)
        } catch {
            throw EnvironmentVariablesError.fromInvalidURLValue(variableName, rawVariableValue)
        }
    }
}

export { EnvironmentVariablesDataManager }
