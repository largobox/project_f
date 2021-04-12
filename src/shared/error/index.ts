export class UnhandledVariantError extends Error {
    constructor(componentName: string, method: string, unhandledVariantValue: string | object) {
        super(`Component: ${componentName}. Method "${method}". Unprocessed case: ${unhandledVariantValue}`);
        this.name = "UnhandledVariantError";
    }
}
