import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import '../Assets/css/header.css'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link  } from "react-router-dom";
const Header = () => {
    return ( 
        <div>
          <Row className="drop-row">
            <Col className="drop">
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   UseState
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item><Link to="/classStateExample">Class State Example</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/HookStateExample">Hook Example</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/ClassPrevStateExample">Class PrevSate Example</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/HookPrevStateExample">Hook PrevState Example</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/HookObjectExample">Hook with Array</Link></Dropdown.Item>
    <Dropdown.Item ><Link to="/HookArrayExample">Hook with Object</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Col>
            <Col>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   UseEffect
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item><Link to="/classCounterExample">Example 1</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/HookCounterExample">Example 2</Link></Dropdown.Item>
    <Dropdown.Item><Link to="ClassMouse">Example 3</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/HookMouse">Example 4</Link></Dropdown.Item>
    <Dropdown.Item><Link to="MouseContainer">Example 5</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/IntervalClassCounter">Example 6</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/IntervalHookCounter">Example 7</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/DataFetching">Example 8</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Col>
            <Col>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  UseContext
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item><Link to="ComponentC">Example 1</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Col>
            <Col>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    UseReducer
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item><Link to="/Components">Example with context </Link></Dropdown.Item>
    <Dropdown.Item><Link to="/CounterOne">Example 1</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/CounterTwo">Example 2</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/CounterThree">Example 3</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/DataFetchingOne">Data Fetching Example 1</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/DataFetchingTwo">Data Fetching Example 2</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Col>
            <Col>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   UseCallBack
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item><Link to="/ParentComponent">Example 1</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Col>
            <Col>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   UseMemo
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item><Link to="/Counter">Example 1</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Col>
            <Col>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   UseRef
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item><Link to="/FocusInput">Example 1 </Link></Dropdown.Item>
    <Dropdown.Item><Link to="/ClassTimer">Example 2 </Link></Dropdown.Item>
    <Dropdown.Item><Link to="/HookTimer">Example 3</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Col>
          </Row>
       
        </div>
     );
}
 
export default Header;