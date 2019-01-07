import * as express from 'express';
import { s3Util } from '../../../packages/utils/s3.util';
import { notice } from '../model/notice.model';

const upload = s3Util.upload.single('notice');

export class NoticeRoutes {
	public noticeRouter: express.Router = express.Router();

	constructor() {
		this.router();
	}

	public router() {
		this.noticeRouter.post('/notice', createNotice);
		this.noticeRouter.get('/notice/img', listNoticeImg);
	}
}

const createNotice = (req, res) => {
	upload(req, res, async (err) => {
		if (err) {
			if (err.message === 'The AWS Access Key Id you provided does not exist in our records.') {
				res.send({
					success: false,
					statusCode: 403,
					message: 'createNotice: 40301'
				});
			}
			if (err.message === 'The request signature we calculated does not match the signature you provided. Check your key and signing method.') {
				res.send({
					success: false,
					statusCode: 403,
					message: 'createNotice: 40302'
				});
			}
		}
		try {
			const file = req.file;
			const result = await notice.createNotice({
				noticeImg: file.location
			});

			res.send({
				success: true,
				statusCode: 200,
				result: result,
				message: 'createNotice: 200'
			})
		} catch (err) {
			switch (err) {
				default:
					res.send({
						success: false,
						statusCode: 500,
						message: 'createNotice: 50000'
					});
					break;
			}
		}

	})
};

const listNoticeImg = async (req, res) => {
	try {
		const result = await notice.listNoticeImg();
		res.send({
			success: true,
			statusCode: 200,
			result: result,
			message: 'listNoticeImg: 200'
		})
	} catch (err) {
		switch (err) {
			default:
				res.send({
					success: false,
					statusCode: 500,
					message: 'listNoticeImg: 50000'
				});
				break;
		}
	}
};

export const noticeRoutes: NoticeRoutes = new NoticeRoutes();
