import ToggleEdit from './ToggleEdit.jsx';
import ColumnOutput from './ColumnOutput.jsx';
import ExportFile from './ExportFile.jsx';

const ResultBody = (props) => {
    return (
        <>
            <div style = {{
                display:'flex',
                flexDirection:'column',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <ToggleEdit jobDescription={props.jobDescription} setJobDescription={props.setJobDescription} />
                <ColumnOutput />
                <ExportFile />
            </div>
        </>
    )
}

export default ResultBody;