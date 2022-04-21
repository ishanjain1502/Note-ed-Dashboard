import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';
import { TextField } from '@mui/material';
export default function InfoDisplay(props) {

  
    const [expanded, setExpanded] = React.useState(false);
    const onclose=()=>{
      handleChange(false);
    }
  
    const handleChange = (panel) => (event, isExpanded) => {
        console.log(setExpanded==='close')
        if(isExpanded==='close'){
          setExpanded(false);
        }
        else if(isExpanded!=='panel1'){
          setExpanded('panel1');
        }
        
        
        
    };
    useEffect(()=>{
      console.log(expanded);
    },[expanded])
  return (

    <Accordion expanded={expanded === 'panel1'}>
        <AccordionSummary
          expandIcon={<CreateIcon onClick={()=>{handleChange('panel1')}} style={{"display":expanded?"none":null}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {expanded?null:<div className=' mb-4'>

<h2>{props.title}</h2>
<p>{props.info}</p>
</div>}
          
        </AccordionSummary>
        <AccordionDetails>
          <div>
        <TextField id="standard-basic" label="Username" value={props.text} variant="standard" />
        <div className='flex mt-8'>

          <button className='bg-indigo-700'>Save</button>
          <button onClick={()=>{handleChange('panel1')}}>Cancel</button>
        </div>

          </div>
        </AccordionDetails>
      </Accordion>
    
  )
}
