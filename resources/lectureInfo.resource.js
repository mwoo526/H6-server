"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LectureInfoResource {
    constructor(lectureInfoData) {
        this.setLectureIndex(lectureInfoData.lectureIndex);
        this.setProfessorIndex(lectureInfoData.professorIndex);
        this.setTextbookIndex(lectureInfoData.textbookIndex);
        this.setAverage(lectureInfoData.average);
    }
    getLectureIndex() {
        return this.lectureIndex;
    }
    setLectureIndex(lectureIndex) {
        this.lectureIndex = lectureIndex;
    }
    getProfessorIndex() {
        return this.professorIndex;
    }
    setProfessorIndex(professorIndex) {
        this.professorIndex = professorIndex;
    }
    getTextbookIndex() {
        return this.textbookIndex;
    }
    setTextbookIndex(textbookIndex) {
        this.textbookIndex = textbookIndex;
    }
    getAverage() {
        return this.average;
    }
    setAverage(average) {
        this.average = average;
    }
    getLectureInfo() {
        let lectureInfoResource = {
            lectureIndex: this.getLectureIndex(),
            professorIndex: this.getProfessorIndex(),
            textbookIndex: this.getTextbookIndex(),
            average: this.getAverage()
        };
        return lectureInfoResource;
    }
}
exports.LectureInfoResource = LectureInfoResource;
//# sourceMappingURL=lectureInfo.resource.js.map