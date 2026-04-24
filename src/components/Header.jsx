import logo from "../assets/logo.jpeg";
import shareicon from "../assets/share.png";

const Header = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setRoute("home");
    props.setJobDescription("");
  };
  return (
    <>
      <div className="header-container" style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "fit-content",
          verticalAlign: "top",
          padding: "1rem",
        }}
      >
        <div
          className="logo-container"
          style={{
            alignItems: "left",
            margin: "0",
            padding: "0",
          }}
        >
          <img
            className="logo"
            src={logo}
            style={{
              height: 30,
              width: 30,
              padding: '1.2rem',
              margin: 0,
            }}
          />
        </div>
        <div style={{
          color:'var(--color-secondary)',
        }}>
          <p style={{
            fontSize:'1rem',
            padding:'0.5rem 0 0 1rem',
          }}>ISK 1.0</p>
        </div>
        <div
          className="icon-container"
          style={{
            alignItems: "right",
            margin: "0",
            padding: "0",
          }}
        >
          <button
            onClick={handleClick}
            style={{
              backgroundColor: "transparent",
              borderWidth: "0",
              alignItems: "right",
            }}
          >
            <img
              className="shareicon"
              src={shareicon}
              style={{
                height: 70,
                width: 70,
                margin: 0,
                padding:0
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
