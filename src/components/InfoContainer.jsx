const InfoContainer = () => {
    return (
        <div style={{
            width: '80vw',
            color: '#E6D6FF', 
            marginTop: '2rem',
            border: '1px solid #CFA6FF',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: '15px',
            paddingBottom: '1rem',
            gap:'1rem',
            padding: '1.5rem'
        }}>
            <h5 style={{
                fontSize: '1rem',
                paddingBottom: "0.7rem",
                marginBottom: '0',
                textAlign:'left',
                padding:0,
                margin:0,
                fontWeight: '400',
            }}>Why this exsits</h5>
            <p style={{
                fontSize: '0.9rem',
                textAlign: 'justify',
                padding:'0',
                margin:'0',
                fontWeight: '100',
            }}>Job descriptions are almost always written in "Corporate-Speak" — a jargon-heavy language designed to attract large talent pools, not accurately describe the actual role. This language is scientifically excellent at triggering imposter syndrome, especially in underrepresented groups.</p>
        </div>
    )
}

export default InfoContainer;