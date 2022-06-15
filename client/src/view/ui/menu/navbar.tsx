import { FunctionComponent } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from "react-bootstrap";



export const NavigationBar: FunctionComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src="assets/logotype.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{''}Miak</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/second">Projects</Nav.Link>
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/third">English</NavDropdown.Item>
                            <NavDropdown.Item href="/third_two">French</NavDropdown.Item>
                            <NavDropdown.Item href="/third_three">Swedish</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/third_four">Lingala</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/fourth">About</Nav.Link>
                        <Nav.Link href="/fifth">Log in</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};