import request from "./request";

const commentApi = {
  get(id) {
    const url = `/posts/${id}/comments`;
    return request.get(url);
  },
};
export default commentApi;
