const Skillcard = (props) => {
    // const [toggle, setToggle] = useState('No clue');


    // const handleClick = () => {
    //     setToggle();
    // };

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 'rem',
            }}>
                <p style={{
                    fontSize: '0.9rem',
                    paddingBottom: "0.7rem",
                    paddingRight: '0.7rem',
                    marginBottom: '0',
                    textAlign: 'left',
                    padding: 0,
                    margin: 0,
                    fontWeight: '400',
                }}>{props.value}</p>
                <div style={{
                    margin: '0',
                    padding: '0',
                    marginBottom: '1rem'
                }}>
                    <div class="row" style={{
                        margin: '0',
                        padding: '0',
                    }}>
                        <div class="col-xs-12">
                            <div class="switch" style={{
                                height: '3vh',
                                width: 'fit-content',
                                margin: '0',
                                padding: 0,
                                background: '#F2F2F2',
                                borderRadius: '32px',
                            }}>
                                <input id="switch-y" name="tripple" type="radio" value="Y" class="switch-input" />
                                <label for="switch-y" class="switch-label switch-label-y">Don't know</label>
                                <input id="switch-i" name="tripple" type="radio" value="I" class="switch-input" checked />
                                <label for="switch-i" class="switch-label switch-label-i">Learning</label>
                                <input id="switch-n" name="tripple" type="radio" value="N" class="switch-input" />
                                <label for="switch-n" class="switch-label switch-label-n">I know</label>
                                <span class="switch-selector"></span>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Skillcard;