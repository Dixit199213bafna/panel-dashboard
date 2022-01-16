const generateChildFeatureList = (feature, id) => {
    return [
        {
            featureName: `${feature} - Add`,
            toggle: false,
            featureId: parseInt(`${id}1`)
        },
        {
           featureName: `${feature} - Edit`,
           toggle: false,
           featureId: parseInt(`${id}2`)
        },
        {
           featureName: `${feature} - Delete`,
           toggle: false,
           featureId: parseInt(`${id}3`)
        },
        {
           featureName: `Max ${feature}`,
           toggle: false,
           featureId: parseInt(`${id}4`),
           valueList: [5,10,20,50],
           value: 5
        }
    ]
   }

export default generateChildFeatureList;