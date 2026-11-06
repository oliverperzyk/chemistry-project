import { constants, copyFileSync } from "node:fs"

/**
 * @summary Test environment class.
 * @description This class is used to initialize the test environment.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TestEnvironment {
    /**
     * @summary Private constructor.
     * @description Prevents instantiation & inheritance.
     */
    private constructor() {}

    /**
     * @summary Static initialization block.
     * @description Initializes the test environment.
     */
    static {
        this.init()
    }

    /**
     * @summary Private static method.
     * @description Creates a sample environment file when missing, preserving existing configuration.
     */
    private static init(): void {
        try {
            copyFileSync(
                new URL("../.env.example", import.meta.url),
                new URL("../.env", import.meta.url),
                constants.COPYFILE_EXCL,
            )
        } catch (error) {
            if (!(error instanceof Error && "code" in error && error.code === "EEXIST")) {
                throw error
            }
        }
    }
}
