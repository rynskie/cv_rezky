import {Navbar} from "flowbite-react"

export function Header () {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="http://localhost:5174/" >
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">My-cv</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="localhost:5174" active>
                    nqt
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>   
    )
}

export default Header