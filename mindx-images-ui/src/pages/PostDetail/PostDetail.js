import React from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../components/Layout";
import usePostDetail from "../../hooks/usePostDetail";

export default function PostDetail() {
  let { id } = useParams();

  const { comments, post } = usePostDetail(id);
  console.log("post", post);
  console.log(comments);

  return (
    <MainLayout>
      <div className="pb-4 container">
        <div className="image-container">
          <div className="justify-content-center row">
            <div className="col-md-8 col-12">
              <div className="detail-card-wrapper">
                <div className="mt-4 row no-gutters">
                  <div className="col-md-6 col-12">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={post.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="comment-wrapper p-3 d-flex flex-column">
                      <div className="comment-content flex-grow-1">
                        <div className="comment-card">
                          {comments.map((comment) => (
                            <div key={comment._id}>
                              <span className="comment-username">
                                {comment.createdBy.username}
                              </span>
                              <span className="text-muted">
                                {" "}
                                {comment.content}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="comment-footer">
                        <form className="">
                          <div className="form-group">
                            <input
                              name="comment"
                              placeholder="Enter your comment..."
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
