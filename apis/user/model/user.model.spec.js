"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const user_model_1 = require("./user.model");
describe('user 모델', () => {
    let userId;
    before(() => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield user_model_1.user.createUser({
                userId: 'testUserId',
                userPw: 'testUserPw',
                userNickName: 'testUserNickName',
                major: 'testMajor',
                admissionYear: '2018'
            });
            // console.log(result);
            userId = result.userId;
            chai_1.expect(result).to.be.eqls({
                userId: 'testUserId',
                userPw: 'testUserPw',
                userNickName: 'testUserNickName',
                major: 'testMajor',
                admissionYear: '2018'
            });
        }
        catch (err) {
            console.error('err', err);
        }
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        const result = yield user_model_1.user.deleteUser(userId);
        // console.log(result);
        chai_1.expect(result).to.instanceof(Object);
    }));
    it('getUser', () => __awaiter(this, void 0, void 0, function* () {
        const result = yield user_model_1.user.getUser(userId);
        // console.log(result);
        delete result[0].userIndex;
        delete result[0].createdAt;
        delete result[0].updatedAt;
        chai_1.expect(result).to.be.eqls([{
                userId: 'testUserId',
                userPw: 'testUserPw',
                userNickName: 'testUserNickName',
                major: 'testMajor',
                minor: null,
                doubleMajor: null,
                connectedMajor: null,
                admissionYear: 2018,
                isValidation: 0
            }]);
    }));
});
//# sourceMappingURL=user.model.spec.js.map