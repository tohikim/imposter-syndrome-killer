import ActionPlan from "./columns/ActionPlan";
import HonestDecoder from "./columns/HonestDecoder";
import SkillAssessment from "./columns/SkillAssessment";

const ColumnOutput = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div style={styles.container}>
        <h4 style={styles.title}>{props.llmResult.decoder.roleTitle}</h4>
        <button onClick={handleClick} style={styles.shareButton}>
          Share
        </button>
        <HonestDecoder llmResult={props.llmResult} />
        <SkillAssessment llmResult={props.llmResult} />
        <ActionPlan llmResult={props.llmResult} />
      </div>
    </>
  );
};

const styles = {
  shareButton: {
    border: 0,
    borderRadius: "30px",
    background: "var(--color-primary",
    color: "var(--color-bg-white",
    padding: "0.5rem 1rem 0.5rem 1rem",
    fontSize: "1rem",
  },
  container: {
    margin: 0,
    padding: 0,
  },
  title: { fontSize: "1.4rem", fontWeight: "400" },
};

export default ColumnOutput;
