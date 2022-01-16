import React from 'react';
import renderer from 'react-test-renderer';
import panelList from '../../../mock/panel-list.mock';
import Accordion from '../Accordion';
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;

describe('Accordion', () => {
  let tree;
  const props = panelList['Settings'].featureList[1];
  const component = renderer.create(
    <Accordion {...props}/>,
  );

  const instance = component.getInstance();

  it('Accordion Initialized', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Accordion Toggle', async () => {
    act(() => {
        component.root.findByProps({ className: "toggle" }).props.onClick();
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })


});