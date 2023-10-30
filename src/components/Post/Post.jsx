import { styled } from "styled-components";

const PostLayout = styled.ul`
  .content-list {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }
  .profile-img {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border-radius: 42px;
    border: 0.5px solid var(--DBDBDB, #dbdbdb);
  }
  .content-title {
    display: flex;
    justify-content: space-between;
  }
  .content-id {
    h3 {
      margin-top: 2px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 600;
    }
    p {
      margin-top: 6px;
      margin-bottom: 16px;
      font-size: 12px;
      font-weight: 400;
      color: var(--767676, #767676);
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .content-inner {
    font-size: 14px;
    font-weight: 400;
    p {
      margin-bottom: 16px;
    }
  }
  .like-comment {
    display: flex;
    margin-top: 12px;
    button {
      display: flex;
      align-items: center;
      span {
        margin-left: 4px;
        margin-right: 4px;
        color: #767676;
      }
    }
  }
  .date {
    margin-top: 20px;
    color: #767676;
    font-size: 10px;
    font-weight: 400;
  }

  img {
    border-radius: 10px;
  }
`;

export default function Post({ post }) {
  //날짜포멧 맞추기 (YYYY년 MM월 DD일)
  let postDate = post.updatedAt;
  postDate = `${postDate.substring(0, 4)}년 ${postDate.substring(
    5,
    7
  )}월 ${postDate.substring(8, 10)}일`;

  return (
    <PostLayout>
      <li className="content-list">
        <img
          src={post.author.image ?? "/images/basic-profile.svg"}
          alt=""
          className="profile-img"
        />
        <div className="content">
          <div className="content-title">
            <div className="content-id">
              <h3>{post.author.username}</h3>
              <p>@ {post.author.accountname}</p>
            </div>
            <div>
              <button>
                <img src="images/s-icon-more-vertical.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="content-inner">
            <p>{post.content}</p>
            <img src={post.image === "" ? null : post.image} alt="" />
          </div>
          <div className="like-comment">
            <button>
              <img src="/images/icon-heart.svg" alt="" />{" "}
              <span>{post.heartCount}</span>
            </button>
            <button>
              <img src="/images/icon-message-circle.svg" alt="" />{" "}
              <span>{post.commentCount}</span>
            </button>
          </div>
          <span className="date">{postDate}</span>
        </div>
      </li>
    </PostLayout>
  );
}
