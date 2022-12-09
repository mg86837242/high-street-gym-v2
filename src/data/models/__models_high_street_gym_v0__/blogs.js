import { db_conn } from '../database.js';

// Create Blog
export function createBlog(blog_title, blog_author, blog_date, blog_body) {
	return db_conn.query(
		`
		INSERT INTO hsg_blogs (blog_title, blog_author, blog_date, blog_body)
		VALUES (?, ?, ?)
		`,
		[blog_title, blog_author, blog_date, blog_body]
	);
}

// Read Blog
export function getAllBlogs() {
	return db_conn.query('SELECT * FROM hsg_blogs');
}

export function getBlogById(blog_id) {
	return db_conn.query('SELECT * FROM hsg_blogs WHERE blog_id = ?', [blog_id]);
}

// Update Blog
export function updateBlogById(blog_id, blog_title, blog_author, blog_date, blog_body) {
	return db_conn.query(
		`
		UPDATE hsg_blogs
		blog_title = ?, blog_author = ?, blog_date = ?, blog_body =?
		WHERE blog_id = ?
		`,
		[blog_title, blog_author, blog_date, blog_body, blog_id]
	);
}

// Delete Blog
export function deleteBlogById(blog_id) {
	return db_conn.query('DELETE FROM hsg_blogs WHERE blog_id = ?', [blog_id]);
}
