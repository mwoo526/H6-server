"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const bodyParser = require("body-parser");
const express = require("express");
const lecture_route_1 = require("./apis/lecture/route/lecture.route");
const lectureInfo_route_1 = require("./apis/lectureInfo/route/lectureInfo.route");
const professor_route_1 = require("./apis/professor/route/professor.route");
const signIn_route_1 = require("./apis/sign/route/signIn.route");
const signUp_route_1 = require("./apis/sign/route/signUp.route");
const test_route_1 = require("./apis/test/route/test.route");
const user_route_1 = require("./apis/user/route/user.route");
const userValidation_route_1 = require("./apis/userValidation/route/userValidation.route");

class Server {
  constructor() {
    /** express 설정을 위한 express 선언 */
    this.app = express();
    /** bodyParser 선언 */
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(bodyParser.json());
    /** 라우터 추가 */
    this.app.use(test_route_1.testRoutes.testRouter);
    this.app.use(user_route_1.userRoutes.userRouter);
    this.app.use(signUp_route_1.signUpRoutes.signUpRouter);
    this.app.use(signIn_route_1.signInRoutes.signInRouter);
    this.app.use(professor_route_1.professorRoutes.professorRouter);
    this.app.use(lecture_route_1.lectureRoutes.lectureRouter);
    this.app.use(lectureInfo_route_1.lectureInfoRoutes.lectureInfoRouter);
    this.app.use(userValidation_route_1.userValidationRoutes.userValidationRouter);
    /** Not Found */
    this.app.use((req, res, next) => {
      /**
       *  Error 이라는 정의가 있지만 Error 에는 status 라는 정의가 없어서 any 설정
       */
      const err = new Error('not_found');
      err.status = 404;
      next(err);
    });
    /** 에러 처리 */
    this.app.use((err, req, res) => {
      err.status = err.status || 500;
      console.error(`error on request ${req.method} | ${req.url} | ${err.status}`);
      console.error(err.stack || `${err.message}`);
      err.message = err.status == 500 ? 'Something bad happened.' : err.message;
      res.status(err.status).send(err.message);
    });
  }
}

exports.Server = Server;
//# sourceMappingURL=app.js.map