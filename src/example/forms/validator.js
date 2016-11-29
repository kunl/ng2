export var MyValidator = (function () {
    function MyValidator() {
    }
    MyValidator.asyncTemeout = function (f) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (f.value == 'kunl') {
                    resolve(null);
                }
                {
                    resolve({
                        asyncErr: true
                    });
                }
            }, 1000);
        });
    };
    MyValidator.checkName = function (f) {
        return (f.value == 'kunl' ? null : { 'nameerror': true });
    };
    return MyValidator;
}());
//# sourceMappingURL=validator.js.map