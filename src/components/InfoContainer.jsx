import infomark from '../assets/info-mark.png';

const InfoContainer = () => {
  return (
    <div
      style={{
        display:'flex',
        flexDirection:'row',
        width: "73vw",
        marginTop: "2rem",
        marginBottom:'3rem',
        color: "var(--color-secondary)",
        backgroundColor: "var(--color-background)",
        borderRadius: "15px",
        padding:'1rem',
        paddingRight:'1.5rem',
        paddingLeft:'1.5rem',
        gap:'10px',
        alignSelf:'center',
      }}
    >
      <img alt="info mark" src={infomark} style={{
        height:'21px',
        width:'21px',
        paddingTop:'5px'
      }}/>
      <p style={{
          padding: "0",
          margin: "0",
          fontSize: "14px",
          fontWeight: "100",
          textAlign: "left",
          lineHeight:'1.4rem'
        }} >
        We rephrase your job description and break down the actual skillsets needed for each job as well as your job readiness. No more applying blindly and feeling like an imposter.
      </p>
    </div>
  );
};

export default InfoContainer;
