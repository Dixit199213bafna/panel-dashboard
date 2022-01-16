import generateChildFeatureList from '../utils/panel-list.util';
import PANEL_TYPE from '../const/panel.const';
const panelList = {
    General: {
        featureList: [
            {
                featureName: 'CASE MANAGEMENT',
                toggle: false,
                featureId: 11
            },
            {
                featureName: 'MAP TIMELINE',
                toggle: false,
                featureId: 12
            },
            {
                featureName: 'VIEWS AND BRIEFINGS',
                toggle: false,
                featureId: 13
            },
            {
                featureName: 'NOTIFICATIONS',
                toggle: false,
                featureId: 14
            },
            {
                featureName: 'MASS COMMUNICATION',
                toggle: false,
                featureId: 15
            },
            {
                featureName: 'TRAFIC CAMERAS',
                toggle: false,
                featureId: 16
            }
        ],
        type: PANEL_TYPE.INDIVIDUAL,
        panelId: 1
},
Settings: {
    featureList: [
        {
            featureName: 'AUDIT LOG',
            toggle: false,
            featureId: 21
        },
        {
            featureName: 'USERS',
            toggle: false,
            featureId: 22,
            childFeatureList: generateChildFeatureList('USERS', 22)
        }
    ],
    type: PANEL_TYPE.GROUP,
    panelId: 2
},
Alerts: {
    featureList: [
        {
            featureName: 'ALERTS MANAGER',
            toggle: false,
            featureId: 31
        },
        {
            featureName: 'ALERT RULES',
            toggle: false,
            valueList: [5,10,20,50],
            value: 10,
            featureId: 32
        }
    ],
    type: PANEL_TYPE.GROUP,
    panelId: 3
}
}

export default panelList;