import { Blog } from '../schema.js';

export function getAllBlogs() {
    return Blog.findAll();
}

export function getBlogById(idInput) {
    return Blog.findByPk(idInput);
}

export function getBlogByMemberId(memberIdInput) {
    return Blog.findAll({ where: { memberId: memberIdInput } });
}

export function createBlog(memberIdInput, titleInput, bodyInput) {
    return Blog.create({
        memberId: memberIdInput,
        title: titleInput,
        body: bodyInput,
    });
}
export function updateBlogById(idInput, memberIdInput, titleInput, bodyInput) {
    return Blog.update(
        {
            memberId: memberIdInput,
            title: titleInput,
            body: bodyInput,
        },
        { where: { id: idInput } }
    );
}

export function deleteBlogById(idInput) {
    return Blog.destroy({ where: { id: idInput } });
}
