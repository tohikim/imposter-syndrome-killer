import ActionPlan from "./columns/ActionPlan";
import HonestDecoder from "./columns/HonestDecoder";
import SkillAssessment from "./columns/SkillAssessment";
import Skillcard from "./columns/Skillcard";

/** @todo replace columns with components in the columns folder */
const ColumnOutput = (props) => {
  return (
    <>
      <div>
        <HonestDecoder llmResult={props.llmResult}/>
        <SkillAssessment llmResult={props.llmResult}/>
        <ActionPlan llmResult={props.llmResult}/>
      </div>
    </>
  );
};

export default ColumnOutput;
