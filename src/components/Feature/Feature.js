import React from 'react';
import classes from './Feature.module.css';
import Form from 'react-bootstrap/Form'
const feature = (props) => {
    return (
        <div className={props.accordionHeader ? classes.FeatureAccordionHeader : classes.Feature}>
            <label>
                <span className={classes.GreyBox}></span>
                <span>{props.featureName}</span>
            </label>
            <div className={classes.ToggleWithMax}>
            {props.valueList ? <select aria-label={props.name} className={classes.Select}  value={props.value} onChange={(e) => props.onValueChange({
                panel: props.panel,
                featureId: props.featureId,
                value: e.currentTarget.value
            })}>
                {props.valueList.map((val) => <option key={val} value={val}>{val}</option>)}
            </select> : null
            }
            <Form.Check
                type="switch"
                id={props.featureId}  
                checked={props.toggle}
                onChange={(e) => props.onToggleClick({
                    panel: props.panel,
                    featureId: props.featureId,
                    value: e.currentTarget.checked
                })}
            />
            </div>
        </div>
    )
}

export default feature;