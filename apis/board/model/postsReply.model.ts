import { mysqlUtil } from '../../../packages/utils/mysql.util';

const pool = mysqlUtil.pool;

export class PostsReplyModel {

	createPostsReply(postsData: any): Promise<void> {
		return new Promise(async (resolve, reject) => {
			await pool.getConnection(async (err, connection) => {
				await connection.query(`INSERT INTO postsReply SET ?`, [postsData], (err) => {
					connection.release();
					if (err) {
						reject(err);
					} else {
						resolve(postsData);
					}
				})
			})
		})
	}

	/**
	 * model : postsIndex 댓글 리스트 조회
	 * @param {number} postsIndex
	 * @returns {Promise<void>}
	 */
	listPostsReply(postsIndex: number): Promise<void> {
		return new Promise(async (resolve, reject) => {
			await pool.getConnection(async (err, connection) => {
				await connection.query(`SELECT 
				t1.postsReplyIndex, 
				t1.content, 
				t1.createdAt, 
				t2.userNickName
				FROM postsReply AS t1
        INNER JOIN user AS t2 ON t1.userIndex = t2.userIndex
        WHERE t1.postsIndex = ?
        ORDER BY t1.createdAt ASC`, [postsIndex], (err, data) => {
					connection.release();
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
			});
		});
	}

	/**
	 * model : postsReply 댓글 page 리스트 조회
	 * @param {number} postsIndex
	 * @param {number} page
	 * @param {number} count
	 * @returns {Promise<void>}
	 */
	pageListPostsReply(postsIndex: number, page: number, count: number): Promise<void> {
		return new Promise(async (resolve, reject) => {
			await pool.getConnection(async (err, connection) => {
				let start = (page - 1) * count;
				if (start < 0) {
					start = 0;
				}
				await connection.query(`SELECT 
				t1.postsReplyIndex,
				t1.content,
				t1.createdAt,
				t2.userNickName
        FROM postsReply AS t1
        INNER JOIN user AS t2 ON t1.userIndex = t2.userIndex                 
        WHERE t1.postsIndex = ?
        ORDER BY t1.createdAt ASC LIMIT ${start}, ${count}`, [postsIndex], (err, data) => {
					connection.release();
					if (err) {
						reject(err)
					} else {
						resolve(data);
					}
				});
			});
		});
	}

	/**
	 * model : postsReply 업데이트
	 * @param {number} postsReplyIndex
	 * @param postsReplyData
	 * @returns {Promise<void>}
	 */
	updatePostsReply(postsReplyIndex: number, postsReplyData: any): Promise<void> {
		return new Promise(async (resolve, reject) => {
			await pool.getConnection(async (err, connection) => {
				await connection.query(`UPDATE postsReply SET ? WHERE postsReplyIndex = ?`,
					[postsReplyData, postsReplyIndex], (err) => {
					connection.release();
					if (err) {
						reject(err);
					} else {
						resolve(postsReplyData);
					}
				});
			});
		});
	}

	/**
	 * model : postsReply 삭제
	 * @param {number} postsReplyIndex
	 * @returns {Promise<void>}
	 */
	deletePostsReply(postsReplyIndex: number): Promise<void> {
		return new Promise(async (resolve, reject) => {
			await pool.getConnection(async (err, connection) => {
				await connection.query(`DELETE FROM postsReply WHERE postsReplyIndex = ?`, [postsReplyIndex], (err, data) => {
					connection.release();
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
			});
		});
	}

}

export const postsReply: PostsReplyModel = new PostsReplyModel();