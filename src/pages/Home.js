import Nav from '../components/Nav'


const Home = () => {

    // placeholder, an authtoken is used to verify that the user is logged in.
    const authToken = true

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div className="overlay">
        <Nav minimal={false} authToken={authToken}/>
        <div className="Home">
            <h1>Swipe Right</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}
            </button>
        </div>
        </div>
    )
}

export default Home