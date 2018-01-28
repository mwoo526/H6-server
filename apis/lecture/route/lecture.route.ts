import {LectureResource} from "../../../resource/lecture.resource";
import {lecture} from "../model/lecture.model";
import * as express from 'express';

export class LectureRoutes{
    public lectureRouter: express.Router = express.Router();

    constructor(){
        this.router();
    }

    public router() {
        this.lectureRouter.post('/lectures', createLecture);
        this.lectureRouter.get('/lectures', listLecture);
        this.lectureRouter.get('/lectures/:lectureIndex', getLecture);
        this.lectureRouter.get('/lectures/:professorName/professorName', getLectureProfessorName);
        this.lectureRouter.get('/lectures/:lectureName/lectureName', getLectureName);
        this.lectureRouter.get('/lectures/:track/track', getLectureTrack);
        this.lectureRouter.put('/lectures/:lectureIndex', updateLecture);
        this.lectureRouter.delete('/lectures/:lectureIndex', deleteLecture);
    }
}

/**
 * route: lecture 생성
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function createLecture(req, res): Promise<void> {
    let lectureData: any = new LectureResource(req.body);
    try {
        const result: any = await lecture.createLecture(lectureData.getLecture());
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
}


/**
 * route: lecture 리스트 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function listLecture(req, res): Promise<void> {
    try{
        const result = await lecture.listLecture();
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
}

/**
 * route: lecture index 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function getLecture(req, res): Promise<void> {
    try{
        let lectureIndex: number = req.params.lectureIndex;
        const result = await lecture.getLecture(lectureIndex);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
}

/**
 * route: lecture professorName 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function getLectureProfessorName(req, res): Promise<void> {
    try{
        let professorName: string = req.params.professorName;
        const result = await lecture.getLectureProfessorName(professorName);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
}

/**
 * route: lecture lectureName 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function getLectureName(req, res): Promise<void> {
    try{
        let lectureName: string = req.params.lectureName;
        const result = await lecture.getLectureName(lectureName);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
}

/**
 * route: lecture track 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function getLectureTrack(req, res): Promise<void> {
    try{
        let track: string = req.params.track;
        const result = await lecture.getLectureTrack(track);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
}

/**
 * route: lecture 업데이트
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function updateLecture(req, res): Promise<void> {
    try{
        let lectureIndex: number = req.params.lectureIndex;
        let lectureData: any = new LectureResource(req.body);
        const result = await lecture.updateLecture(lectureIndex, lectureData.getLecture());
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
}

/**
 * route: lecture 삭제
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function deleteLecture(req, res): Promise<void> {
    try{
        let lectureIndex: number = req.params.lectureIndex;
        const result = await lecture.deleteLecture(lectureIndex);
        res.send(result);
    }catch(err){
        res.send(err.message);
    }
}



export const lectureRoutes: LectureRoutes = new LectureRoutes();