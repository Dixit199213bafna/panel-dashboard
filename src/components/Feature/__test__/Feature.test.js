import React from 'react';
import renderer from 'react-test-renderer';
import Feature from '../Feature';

describe('FeatureList', () => {
  let tree;
  const props = {
    featureName: 'ALERT RULES',
    toggle: false,
    valueList: [5,10,20,50],
    value: 10,
    featureId: 32
}
  const component = renderer.create(
    <Feature {...props}/>,
  );
  const instance = component.getInstance();

  it('Feature Initialized', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

});