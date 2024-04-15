type ValidationRules = {
    [key: string]: string[];
};

export interface ValidationResult {
    success: boolean;
    error?: any;
}

export function ValidationCheck(body: any, rules: ValidationRules): ValidationResult {
    for (let field in rules) {
        if (rules.hasOwnProperty(field)) {
            const fieldRules = rules[field];

            // Check if the validation rules for the field is an array
            if (!Array.isArray(fieldRules)) {
                return {
                    success: false,
                    error: {
                        message: `Validation rules for ${field} must be an array`,
                        target: field
                    }
                };
            }

            // Check if the field is required
            if (fieldRules.includes('required') && !body[field]) {
                return {
                    success: false,
                    error: {
                        message: `${field} is required`,
                        target: field
                    }
                };
            }

            // Check email format if 'email' validation rule is present
            if (fieldRules.includes('email') && body[field]) {
                const emailRegex = /\S+@\S+\.\S+/;
                if (!emailRegex.test(body[field])) {
                    return {
                        success: false,
                        error: {
                            message: `${field} must be a valid email`,
                            target: field
                        }
                    };
                }
            }
        }
    }
    // If all validations pass, return success
    return { success: true };
}
