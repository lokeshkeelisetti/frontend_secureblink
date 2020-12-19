import '../Workflow.css'

function Workflow(){
    return(
        <div>
            <div className='workhead'>
                Workflow
            </div>
            <div className='workdescrip'>
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
            </div>
            <div style={{display:'flex',marginTop:'156px'}}>
                <div style={{marginLeft:'280px'}}>
                    <div className='stepwork'>
                        STEP 1
                    </div>
                    <div style={{marginTop:'27px',font:'normal normal 600 36px/50px Poppins',color:'#292929'}}>
                        Send Your Brief
                    </div>
                    <div style={{width:'168px',height:'6px',backgroundColor:'#0E77FF',marginTop:'13px'}} />
                    <div style={{width:'379px',height:'170px',marginTop:'17px'}}>
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                    <br /><br />
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu
                    </div>
                </div>
                <div style={{paddingLeft:'71px',marginLeft:'41px',boxShadow: '0px 30px 60px #0E77FF26',width:'519px',height:'417px'}}>
                <div style={{backgroundColor:'#0E77FF',color:'white'}} className='stepwork'>
                        STEP 2
                    </div>
                    <div style={{marginTop:'27px',font:'normal normal 600 36px/50px Poppins',color:'#292929'}}>
                        Wait for delivery
                    </div>
                    <div style={{width:'168px',height:'6px',backgroundColor:'#0E77FF',marginTop:'13px'}} />
                    <div style={{width:'379px',height:'170px',marginTop:'17px'}}>
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                    <br /><br />
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu
                    </div>
                </div>
                <div style={{marginLeft:'80px'}}>
                    <div className='stepwork'>
                        STEP 3
                    </div>
                    <div style={{marginTop:'27px',font:'normal normal 600 36px/50px Poppins',color:'#292929'}}>
                        Get your files!
                    </div>
                    <div style={{width:'168px',height:'6px',backgroundColor:'#0E77FF',marginTop:'13px'}} />
                    <div style={{width:'379px',height:'170px',marginTop:'17px'}}>
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                    <br /><br />
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workflow;