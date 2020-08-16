export class ValidationError extends Error {
    constructor(message, data = '') {
        super(message, 210, 'BusinessLogicFail', data);
    }
}