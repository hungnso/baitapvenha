import { useEffect, useState } from "react";
import commentApi from "../api/commentApi";
import postApi from "../api/postApi";

function usePostDetail(postId) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const postData = await postApi.get(postId);
        const commentData = await commentApi.get(postId);
        setPost(postData.data);
        setComments(commentData.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [postId]);

  return { post, loading, comments };
}

export default usePostDetail;
