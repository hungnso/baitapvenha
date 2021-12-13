import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard({
  imageUrl,
  title,
  description,
  createdBy,
  _id,
}) {
  let navigate = useNavigate();
  const handleDetailPage = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="card" onClick={() => handleDetailPage(_id)}>
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <div className="card-title h5">{title}</div>
        <p className="card-text">{description}</p>
        <p className="text-muted card-text">{createdBy}</p>
      </div>
    </div>
  );
}
