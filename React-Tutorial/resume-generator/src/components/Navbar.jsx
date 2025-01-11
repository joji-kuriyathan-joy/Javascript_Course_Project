import '../app.css'
export default function Navbar(props) {

    return (
        <>
            <nav className='nav-container'>
                <h1>Resume Builder</h1>
                <h4>{props.navtitle}</h4>
            </nav>
        </>
    );

}
