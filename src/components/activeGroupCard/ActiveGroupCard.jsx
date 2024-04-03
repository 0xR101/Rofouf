import "./style.css";

function ActiveGroupCard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          height: "100px",
        }}
      >
        <div style={{}}>
          <img
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "40px",
            }}
            src="\src\assets\Group.png"
            alt=""
          />
        </div>

        <h2 className="text-container">Nover Group</h2>
        <p>
          This is the group we know you've all waiting for. We present the top 1
        </p>
      </div>
    </>
  );
}

export default ActiveGroupCard;
