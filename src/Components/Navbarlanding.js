import '../App.css'

import {Navbar,NavbarBrand,NavItem,NavLink,Nav} from 'reactstrap'

function Navbarlanding(){

    return(
        <Navbar className='navbarland' expand={true}>
            <NavbarBrand style={{color:'white'}} href='#'>Logo</NavbarBrand>
            <Nav style={{paddingLeft:'513px'}}className='mr-auto' navbar>
                <NavItem>
                    <NavLink style={{color:'white',marginLeft:'40px'}}href='#aboutus'>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{color:'white',marginLeft:'40px'}} href='#services'>Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{color:'white',marginLeft:'40px'}} href='#casestudy'>Case Studies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{color:'white',marginLeft:'40px'}} href='#testimonial'>Testimonials</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{color:'white',marginLeft:'40px'}} href='#'>Contact</NavLink>
                </NavItem>
                <NavItem className='loginbutton'>
                        <NavLink style={{color:'black',marginLeft:'56px',marginTop:'13px',font:'normal normal normal 18px/27px Poppins'}}>Login</NavLink>
                </NavItem>
            </Nav>
       </Navbar>
    )
}

export default Navbarlanding