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
const mysql_resource_1 = require("../../../resource/mysql.resource");
const conn = mysql_resource_1.mysqlResource.conn;
class Professor {
    constructor() {
    }
    /**
     * model: professor 생성
     * @param professorData
     * @returns {Promise<any>}
     */
    createProfessor(professorData) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`INSERT INTO professors SET ?`, [professorData], function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(professorData);
                }
            });
        }));
    }
    /**
     * model: professor 리스트 조회
     * @returns {Promise<any>}
     */
    listProfessor() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`SELECT * FROM professors`, function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: professor professorIndex 조회
     * @param {number} professorIndex
     * @returns {Promise<any>}
     */
    getProfessorIndex(professorIndex) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`SELECT * FROM professors WHERE professorIndex=?`, [professorIndex], function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: professor professorName 조회
     * @param {string} professorName
     * @returns {Promise<any>}
     */
    getProfessorName(professorName) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`SELECT * FROM professors WHERE professorName LIKE '%${professorName}%'`, function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: professor 업데이트
     * @param {number} professorIndex
     * @param professorData
     * @returns {Promise<any>}
     */
    updateProfessor(professorIndex, professorData) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`UPDATE professors SET ? WHERE professorIndex=?`, [professorData, professorIndex], function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: professor 삭제
     * @param {number} professorIndex
     * @returns {Promise<any>}
     */
    deleteProfessor(professorIndex) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`DELETE FROM professors WHERE professorIndex=?`, professorIndex, function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
}
exports.Professor = Professor;
exports.professor = new Professor();
//# sourceMappingURL=professor.model.js.map