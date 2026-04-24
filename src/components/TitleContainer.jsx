const TitleContainer = () => {
  return (
    <div
      className="title-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent:'center',
        alignSelf: "center",
        alignItems: "center",
        gap: "20px",
        paddingTop: "2rem",
        paddingBotton: "2rem",
        height:'30vh',
      }}
    >
      <h4
        style={{
          fontSize: "1.4rem",
          fontWeight: "500",
          margin: "0",
          padding: "0",
          color: "var(--color-bg-black)",
        }}
      >
        Kill your imposter syndrome
      </h4>
      <div
        className="tag"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          margin: 0,
          padding: 0,
        }}
      >
        <p
          style={{
            border: "1px solid var(--color-third)",
            borderRadius: "50px",
            color: "var(--color-secondary)",
            width: "fit-content",
            height: "fit-content",
            fontSize: "16px",
            margin: "0",
            padding: "0.5rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          Honest job decoder
        </p>
        <p
          style={{
            border: "1px solid var(--color-third)",
            borderRadius: "50px",
            color: "var(--color-secondary)",
            width: "fit-content",
            height: "fit-content",
            fontSize: "16px",
            margin: "0",
            padding: "0.5rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          Skill assessment
        </p>
        {/* <p
          style={{
            border: "1px solid var(--color-third)",
            borderRadius: "50px",
            color: "var(--color-secondary)",
            width: "fit-content",
            height: "fit-content",
            fontSize: "16px",
            margin: "0",
            padding: "0.5rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          Action plan
        </p> */}
      </div>
    </div>
  );
};

export default TitleContainer;
