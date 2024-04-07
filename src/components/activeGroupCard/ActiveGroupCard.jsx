import "./style.css";

function ActiveGroupCard() {
  return (
    <>
      <div className="card">
        <div>
          <a href="">
            <img className="object-cover w-full h-full rounded-3xl" src="\src\assets\Group.png" alt="" />
          </a>
        </div>

        <p className="GroupTitle">Novels Group</p>
        <div className="line"></div>
        <p className="content">
          This is the group we know you ve all waiting for. We present the top 1
        </p>
      </div>
    </>
  );
}

export default ActiveGroupCard;
