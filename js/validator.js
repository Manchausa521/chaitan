function Validator(options) {

    let selectorRules = {};

    //Ham thuc hien validate
    function validate(inputElement, rule) {
        let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        let errorMessage;

        //Lấy ra các rule của selector
        let rules = selectorRules[rule.selector];
        //Lặp qua từng rule & kiểm tra
        for (let i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');

        }
    }
    //lay element cua form can validate
    let formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            //Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                let inputElement = formElement.querySelector(rule.selector);
                validate(inputElement, rule);
            });
        }

        //Lặp qua mỗi rule và xử lý(lắng nghe blur, input)
        options.rules.forEach(function (rule) {

            //Lưu  lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);

            } else {
                selectorRules[rule.selector] = [rule.test];

            }
            let inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                //Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    // console.log('blur' + rule.selector)
                    validate(inputElement, rule);

                }

                //Xử lý trường hợp khi người dùng nhập vào input
                inputElement.oninput = function () {
                    let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'This field must be email !';
        }
    };
}
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : 'Please enter this field !';
        }
    };

}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Please enter at least ${min} characters !`;
        }
    };

}