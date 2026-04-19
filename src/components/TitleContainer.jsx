const TitleContainer = () => {
    return (
        <div className="title-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 'fit-content',
            gap: '0',
            paddingTop: '2rem',
            paddingBotton: '2rem'
        }}>
            <div className="tag" style={{
                border: '1px solid #CFA6FF',
                borderRadius: '50px',
                backgroundColor: '#a5a4a761',
                color: '#CFA6FF',
                width: 'fit-content',
                height: 'fit-content',
                fontSize: '0.9rem',
                margin: '0',
                marginBottom: '1rem',
                padding: '0',
                paddingRight: '1rem',
                paddingLeft: '1rem'
            }}>
                <p style={{
                    margin: '0',
                    padding: '0.2rem'
                }}>Decode any job 💼</p>
            </div>
            <div className="title" style={{
                fontSize: '1.4rem',
                padding: '0.2rem',
                margin: '0',
                textShadow: '0 0 20px #A970FF, 0 0 40px #8B5CFF'
            }}>
                <h4 style={{
                    margin: '0',
                    padding: '0',
                    color: 'white'
                }}>Kill Your Imposter Syndrome</h4>
            </div>
            <div className="description">
                <p style={{ color: '#E6D6FF', fontSize: '0.9rem' }}>Paste job description. We'll decode corporate speak and surface what actually matters.</p>
            </div>
        </div >
    )
}

export default TitleContainer; 