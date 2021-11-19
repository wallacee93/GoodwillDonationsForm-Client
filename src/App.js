import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" /> {"   "}
          Donation Form
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Donor Information">
              <NavDropdown.Item href="#donor/name">Name</NavDropdown.Item>

              <NavDropdown.Item href="#donor/address">Address</NavDropdown.Item>
              <NavDropdown.Item href="#donor/phone">
                Phone Number
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#donor/email">
                Email address
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Donation Type">
              <NavDropdown.Item href="#clothes">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#furniture">Furniture</NavDropdown.Item>
              <NavDropdown.Item href="#household">
                Household Items
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div class="form-container">
        <form class="register-form">
          {/* Uncomment the next line to show the success message */}
          {/* <div class="success-message">Success! Thank you for registering</div> */}
          <input
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="first-name-error">Please enter a first name</span> */}
          <input
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="last-name-error">Please enter a last name</span> */}
          <input
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="email-error">Please enter an email address</span> */}
          <input
            id="Address"
            class="form-field"
            type="text"
            placeholder="Address"
            name="address"
          />
          <input
            id="donation-type"
            class="form-field"
            type="text"
            placeholder="Donation Type"
            name="donation-type"
          />
          <input
            id="quantity"
            class="form-field"
            type="text"
            placeholder="Quantity"
            name="quantity"
          />
          <button class="form-field" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;