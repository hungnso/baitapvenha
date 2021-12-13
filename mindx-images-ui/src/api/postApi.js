import request from "./request";

const postApi = {
  get(id) {
    const url = `/posts/${id}`;
    return request.get(url);
  },
};
export default postApi;
