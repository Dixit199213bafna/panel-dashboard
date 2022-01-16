import React from 'react';
import renderer from 'react-test-renderer';
import FeatureList from '../FeatureList';
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;

describe('FeatureList', () => {
  let tree;
  const component = renderer.create(
    <FeatureList/>,
  );
  const instance = component.getInstance();

  it('FeaureList Initialized', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
  
  it('FeaureList:Individual:On Toggle Click', () => {
    instance.onToggleClick({
        panel: 'General',
        featureId: 11,
        value: true
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('FeaureList: Value Change', () => {
    instance.onValueChange({
        panel: 'Alerts',
        featureId: 32,
        value: 5
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('FeatureList::Group:On Toggle Click', async () => {
    act(() => {
        component.root.findByProps({ className: "toggle" }).props.onClick();
    });
    instance.onToggleClick({
        panel: 'Settings',
        featureId: 22,
        value: true
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});