import * as aws from 'aws-sdk';
import * as fs from 'fs';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import * as path from 'path';

export module s3Util {
	aws.config.loadFromPath(__dirname + '/config/env.json');
	const file = './packages/utils/config/env.json';
	let awsconfig: any = fs.readFileSync(file, 'utf8');
	awsconfig = JSON.parse(awsconfig);
	let s3 = new aws.S3();

	export const upload = (folder) => multer({
		storage: multerS3({
			s3: s3,
			bucket: `${awsconfig.bucket}/${folder}`,
			key: function(req, file, cb) {
				let extension = path.extname(file.originalname);
				cb(null, Date.now().toString() + extension)
			},
			acl: awsconfig.acl,
		})
	});
}