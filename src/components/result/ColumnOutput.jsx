import ActionPlan from "./columns/ActionPlan";
import HonestDecoder from "./columns/HonestDecoder";
import SkillAssessment from "./columns/SkillAssessment";

/** @todo replace columns with components in the columns folder */
const ColumnOutput = (props) => {
  const handleClick = (e)=> {
    e.preventDefault();
  }
  return (
    <>
      <div style={{
        margin:0,
        padding:0,
      }}>
        <h4 style={{
          fontSize:'1.4rem',
          fontWeight:'400'
        }}>{props.llmResult.decoder.roleTitle}</h4>
        <button onClick={handleClick} style={{
          border:0,
          borderRadius:'30px',
          background:'var(--color-primary',
          color:'var(--color-bg-white',
          padding:'0.5rem 1rem 0.5rem 1rem',
          fontSize:'1rem'
        }}>
        Share
        </button>
        <HonestDecoder llmResult={props.llmResult}/>
        <SkillAssessment llmResult={props.llmResult}/>
        <ActionPlan llmResult={props.llmResult}/>
      </div>
    </>
  );
};

export default ColumnOutput;
