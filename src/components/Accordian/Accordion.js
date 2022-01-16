import React, { useState } from 'react';
import classes from './Accordian.module.css';
import Feature from '../../components/Feature/Feature'
const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  const onHeaderToggleHandler = (e) => {
      setIsActive(e.value);
      props.onHeaderToggleClick(e)
  }
  return (
    <div className="accordion-item">
      <div className={classes.AccordianTitle} >
        <Feature {...props} accordionHeader="true" onToggleClick={(e) => onHeaderToggleHandler(e)}/>
        <div className='toggle' onClick={() => setIsActive(!isActive)}>{isActive ? <span className={classes.DownCaret}/> : <span className={classes.UpCaret}/>}</div>
      </div>
      {isActive && <React.Fragment><div className={classes.AccordionContent}>
                        {props.childFeatureList.map((feat, index) => <Feature  key={feat.featureId} accordionHeader="true" panel={props.panel} {...feat} onToggleClick={(e) => props.onFeatureChildToggleClick({
                            ...e,
                            childPanelId: props.featureId
                        })} onValueChange={(e) => props.onChildValueChange({
                            ...e,
                            childPanelId: props.featureId
                        })}/>)}  
                    </div></React.Fragment>}
    </div>
  );
};

export default Accordion;