import '../Services.css'

import React,{useState} from 'react';

function Services(){

    const [opened,setOpened]=useState('ui');

    const findcardhead = () => {
        switch(opened){
            case 'ui':
                return(<>UI/UX Designing</>);
            case 'web':
                return(<>Web Development</>);
            case 'mob':
                return(<>Mobile Development</>);
            case 'bran':
                return(<>Branding</>);
            default:
                return(<>Cloud Technology</>)
            
        }
    }

    return(
        <div id='services' className='service'>
            <div style={{display:'flex'}}>
                <div className='group35624service' />
                <div className='ourservices'>
                    OUR SERVICES
                </div>
            </div>
            <div className='headservices'>
                Transforming your ideas into Reality
            </div>
            <div style={{marginLeft:'280px'}}>
                <div style={{display:'flex'}}>
                    <div className={opened!=='web'?'closedbox':'openedbox'} onClick={(event) => {event.preventDefault();setOpened('web')}}>
                        Web Development
                    </div>
                    <div style={{marginLeft:'35px'}} className={opened!=='mob'?'closedbox':'openedbox'} onClick={(event) => {event.preventDefault();setOpened('mob')}}>
                        Mobile Development
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div className={opened!=='ui'?'closedbox':'openedbox'} onClick={(event) => {event.preventDefault();setOpened('ui')}}>
                        UI/UX designing
                    </div>
                    <div style={{marginLeft:'29px'}} className={opened!=='bran'?'closedbox':'openedbox'} onClick={(event) => {event.preventDefault();setOpened('bran')}}>
                        Branding
                    </div>
                </div>
                <div className={opened!=='clou'?'closedbox':'openedbox'} onClick={(event) => {event.preventDefault();setOpened('clou')}}>
                    Cloud Technology
                </div>
                
            </div>
            <div className='rectangle12344'>
                <div className='rectangle12348'>
                    <div style={{display:'flex'}}>
                        <div className='group35621' />
                        <div className='cardhead'>
                            {findcardhead()}
                        </div>
                    </div>
                    <div className='cardtext'>
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                    </div>
                    <ul style={{marginLeft:'58px'}}>
                        <li style={{display:'flex'}}>
                            <div className='group35604' />
                            <div style={{marginLeft:'14px',font:'normal normal normal 16px/25px Poppins',marginTop:'9px'}}>
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                            </div>
                        </li>
                        <li style={{display:'flex',marginTop:'14px'}}>
                            <div className='group35604' />
                            <div style={{marginLeft:'14px',font:'normal normal normal 16px/25px Poppins',marginTop:'9px'}}>
                            Lorem ipsum dolor sit amet,
                            </div>
                        </li>
                        <li style={{display:'flex',marginTop:'14px'}}>
                            <div className='group35604' />
                            <div style={{marginLeft:'14px',font:'normal normal normal 16px/25px Poppins',marginTop:'9px'}}>
                            conse ctetur adipi scing elit.
                            </div>
                        </li>
                        <li style={{display:'flex',marginTop:'14px'}}>
                            <div className='group35604' />
                            <div style={{marginLeft:'14px',font:'normal normal normal 16px/25px Poppins',marginTop:'9px'}}>
                            Lorem ipsum dolor sit amet, conse ctetur
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Services;