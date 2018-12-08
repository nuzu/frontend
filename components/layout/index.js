import NavBar from './navbar'

const Layout = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

export default Layout