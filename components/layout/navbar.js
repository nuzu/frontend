import Link from 'next/link'

const NavBar = () => {

    return (<div> 
        <ul>
            <li>
                <Link href='/'><a>Home</a></Link>
            </li>
            <li>
                <Link href='/redux'><a>Redux</a></Link>
            </li>
            <li>
                <Link href='/apollo'><a>GraphQL</a></Link>
            </li>
        </ul>
    </div>)
}

export default NavBar