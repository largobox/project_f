export class UnhandledVariantError extends Error {
    constructor(componentName: string, method: string, unhandledVariantValue: string | object) {
        super(`Component: ${componentName}. Method "${method}". Unprocessed case: ${unhandledVariantValue}`);
        this.name = "UnhandledVariantError";
    }
}

export class IndexDBError extends Error {
    constructor(method: string, error: Error) {
        super(`Method "${method}". Message: ${error.message}`);
        this.name = "IndexDBError";
    }
}
