import React, { Component } from 'react';
import classes from './FeatureList.module.css';
import { Accordian, Feature } from "../../components";
import panelList from "../../mock/panel-list.mock";
import PANEL_TYPE from '../../const/panel.const';

class FeatureList extends Component {
    constructor() {
        super();
        this.state = {
            panelList
        }
    }

    onValueChange(event) {
        this.setState({
            panelList: {
                ...this.state.panelList,
                [event.panel]: {
                    ...this.state.panelList[event.panel],
                    featureList: this.state.panelList[event.panel].featureList.map((feature) => {
                        if (event.childPanelId && feature.featureId === event.childPanelId) {
                            feature = {
                                ...feature,
                                childFeatureList: feature.childFeatureList.map((childFeat) => {
                                    if (childFeat.featureId === event.featureId) {
                                        childFeat.value = parseInt(event.value)
                                    }
                                    return childFeat;
                                })
                            }
                        }
                        if (feature.featureId === event.featureId) {
                            feature.value = parseInt(event.value);
                        }
                        return feature;
                    })
                }
            }
        })
    }

    onToggleClick(event) {
        this.setState({
            panelList: {
                ...this.state.panelList,
                [event.panel]: {
                    ...this.state.panelList[event.panel],
                    featureList: this.state.panelList[event.panel].featureList.map((feature) => {
                        if (event.childPanelId && feature.featureId === event.childPanelId) {
                            feature = {
                                ...feature,
                                childFeatureList: feature.childFeatureList.map((childFeat) => {
                                    if (childFeat.featureId === event.featureId) {
                                        childFeat.toggle = event.value
                                    }
                                    return childFeat;
                                })
                            }
                        }
                        if (feature.featureId === event.featureId) {
                            feature.toggle = event.value;
                        }
                        if (feature.featureId === event.featureId && feature.childFeatureList) {
                            feature.childFeatureList = feature.childFeatureList.map(feat => ({ ...feat, toggle: event.value }))
                        }
                        return feature;
                    })
                }
            }
        })
    }
    render() {
        const htmlContent = Object.keys(this.state.panelList).map((panel, index) => {
            return (
                <React.Fragment key={this.state.panelList[panel].panelId}>
                    <p>{panel}</p>
                    <div className={this.state.panelList[panel].type === PANEL_TYPE.INDIVIDUAL ? classes.Grid : null}>
                        {this.state.panelList[panel].featureList.map((feature) => feature.childFeatureList ? <Accordian panel={panel} onHeaderToggleClick={(e) => this.onToggleClick(e)} onChildValueChange={(e) => this.onValueChange(e)} onFeatureChildToggleClick={(e) => this.onToggleClick(e)} key={feature.featureId} {...feature} /> : <Feature onValueChange={(e) => this.onValueChange(e)} onToggleClick={(e) => this.onToggleClick(e)} key={feature.featureId} {...feature} panel={panel} />)}
                    </div>
                </React.Fragment>
            )
        });
        return htmlContent
    }
}

export default FeatureList