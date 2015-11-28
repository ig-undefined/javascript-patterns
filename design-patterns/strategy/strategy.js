/**
 * Created by undefined on 28.11.15.
 */

// Validator

var validator = {
    types: {},
    messages: [],
    config: {},

    validate: function (data) {
        var i
            , msg
            , type
            , checker
            , result_ok;

        this.messages = [];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];

                if (!type) {
                    continue;
                }
                if (!checker) {
                    throw {
                        name: "ValidationError",
                        message: "No handler to validation type " + type
                    }
                }

                result_ok = checker.validate(data[i]);
                if (!result_ok) {
                    msg = "Invalid value for *" + i + "*, " + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },
    hasErrors: function () {
        return this.messages.length !== 0
    }
};
validator.types.isNotEmpty = {
    validate: function (value) {
        return value !== "";
    },
    instructions: "the value cannot be empty"
};
validator.types.isNumber = {
    validate: function (value) {
        return !isNaN(value);
    },
    instructions: "the value can only be a valid number, eg. 1, 3.14 or 2010"
};
validator.types.isAlphaNum = {
    validate: function (value) {
        return !/[^a-z0-9]/i.test(value);
    },
    instructions: "the value can only contain characters and numbers, no special symbols"
};

// Form
var data = {
    first_name: "Super",
    last_name: "Man",
    age: "unknown",
    username: "o_0"
};

// Validator config
validator.config = {
    first_name: 'isNotEmpty',
    age: 'isNumber',
    username: 'isAlphaNum'
};

// Usage
validator.validate(data);
if (validator.hasErrors()) {
    console.log(validator.messages.join("\n"));
    /*
     * Invalid value for *age*, the value can only be a valid number, e.g. 1, 3.14 or 2010
     * Invalid value for *username*, the value can only contain characters and numbers, no special symbols
     */
}