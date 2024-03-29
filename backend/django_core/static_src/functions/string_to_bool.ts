import * as _ from "lodash-es";

export function string_to_boolean(variable: string | boolean | null | undefined): boolean {
    if (_.isUndefined(variable)) {
        return false;
    }

    if (_.isBoolean(variable)) {
        return variable;
    }
    if (_.isUndefined(variable)) {
        return false;
    }
    if (_.isNull(variable)) {
        return false;
    }

    if (_.isString(variable)) {
        switch (variable.toLowerCase()) {
            case "true": {
                return true;
            }
            case "false": {
                return false;
            }
            default: {
                throw new Error(`${`variable`} is string but not convertable to boolean | The variable in question : ${variable}`);
            }
        }
    }
    throw new Error(`${`variable`} is neither string nor boolean and is not convertable to boolean | The variable : ${variable}`);
}
