"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
        this.sendMail = function (_a) {
            var to = _a.to, message = _a.message;
            console.log("email enviado para " + to.name + ": " + message.subject);
        };
    }
    return EmailService;
}());
exports.default = EmailService;
