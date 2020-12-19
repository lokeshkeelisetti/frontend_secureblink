import '../Feedback.css'
import {  Form, FormGroup, Label, Input } from 'reactstrap';

function Feedback(){
    return(
        <div style={{height:'1933px',paddingTop:'316px'}}>
            <div className='back'>
                <div style={{display:'flex'}}>
                    <div className='callcentre' />
                    <div className='formcard'>
                        <h3>Send Us Message</h3>
                        <Form style={{marginTop:'44px'}}>
                            <FormGroup>
                                <Input style={{borderTop:'none',borderLeft:'none',borderRight:'none',borderBottom:'1px solid black',width:'560px'}}
                                type='email' name='email' id='email' placeholder='Your Email*' />
                            </FormGroup>
                            <FormGroup>
                                <Input style={{borderTop:'none',borderLeft:'none',borderRight:'none',borderBottom:'1px solid black',width:'560px',marginTop:'50px'}}
                                type='text' name='name' id='name' placeholder='Your Name*' />
                            </FormGroup>
                            <FormGroup>
                                <Input style={{borderTop:'none',borderLeft:'none',borderRight:'none',borderBottom:'1px solid black',width:'560px',marginTop:'50px'}}
                                type='tel' name='tel' id='tel' placeholder='Phone Number*' />
                            </FormGroup>
                            <FormGroup>
                                <Input style={{borderTop:'none',borderLeft:'none',borderRight:'none',borderBottom:'1px solid black',width:'560px',marginTop:'50px'}}
                                type='text' name='subject' id='subject' placeholder='Subject' />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{marginTop:'50px'}}for='message'>Message</Label>
                                <Input style={{borderTop:'none',borderLeft:'none',borderRight:'none',borderBottom:'1px solid black',width:'560px',marginTop:'25px'}}
                                type='text' name='message' id='message' />
                            </FormGroup>
                            <FormGroup style={{marginTop:'20px',width:'350px'}} check>
                                <Label check>
                                    <Input type='checkbox' />
                                    By sending this message, you confirm that you have read and agreed to our privacy-policy.
                                </Label>
                            </FormGroup>
                            <div className='rectangle1029feed'>
                                <a style={{textDecoration:'none',display:'flex'}}href='#'>
                                    <div className='getstartedfeed'>
                                        Get Started
                                    </div>
                                    <div className='arrowfeed' />
                                    <div className='arrowfeed' />
                                </a>
                            </div>
                        </Form>
                    </div>
                </div>
                <div style={{display:'flex',paddingTop:'124px',paddingLeft:'140px'}}>
                    <div>
                    <div style={{color:'white',width:'456px'}}>
                    Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.
                    </div>
                    <div style={{display:'flex',opacity:1}}>
                        <div style={{width:'37px',height:'37px'}}className='facebook' />
                        <div style={{width:'37px',height:'37px',marginLeft:'11px'}}className='twitter' />
                        <div style={{width:'37px',height:'37px',marginLeft:'11px',marginTop:'9px'}}className='insta' />
                    </div>
                    </div>
                    <div style={{color:'white',marginLeft:'200px',marginTop:'-130px'}}>
                        <h4>Our services</h4>
                        <div style={{width:'50px',height:'4px',marginTop:'17px',backgroundColor:'blue'}}/>
                        <p style={{ marginTop:'15px'}}>Web Development</p>
                        <p style={{ marginTop:'15px'}}>Mobile Development</p>
                        <p style={{ marginTop:'15px'}}>Cloud Technologies</p>
                        <p style={{ marginTop:'15px'}}>UI/UX Design</p>
                    </div>
                    <div style={{color:'white',marginLeft:'100px',marginTop:'-130px'}}>
                        <h4>Our Links</h4>
                        <div style={{width:'50px',height:'4px',marginTop:'17px',backgroundColor:'blue'}}/>
                        <p style={{ marginTop:'15px'}}>Terms & Condition</p>
                        <p style={{ marginTop:'15px'}}>Privacy Policy</p>
                        <p style={{ marginTop:'15px'}}>Imprint</p>
                        <p style={{ marginTop:'15px'}}>Legal</p>
                    </div>
                    <div style={{color:'white',marginLeft:'100px',marginTop:'-130px'}}>
                        <h4>Contact Us</h4>
                        <div style={{width:'50px',height:'4px',marginTop:'17px',backgroundColor:'blue'}}/>
                        <div style={{marginTop:'15px',display:'flex'}}>
                            <div className='location'/>
                            <p style={{ marginLeft:'12px',width:'253px'}}>Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</p>
                        </div>
                        <div style={{marginTop:'15px',display:'flex'}}>
                            <div className='phoneicon'/>
                            <p style={{ marginLeft:'12px',width:'253px'}}>00 1800 245 453</p>
                        </div>
                        <div style={{marginTop:'15px',display:'flex'}}>
                            <div className='mail'/>
                            <p style={{ marginLeft:'12px',width:'253px'}}>hello@inkyy.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;