import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import AddReview from './Components/addReview'
import {shallow } from 'enzyme';

let wrapper
describe('counter testing', () => {
  beforeEach(() =>{
    wrapper = shallow(<AddReview />);
  })
  test('check Add review heading text', () => {
    expect(wrapper.find('h4').text()).toContain("Add Your Review");
  });
  test('submit button text', () => {
    expect(wrapper.find('#submitReview').text()).toBe("Submit");
  });  
  test('Review form field name ', () => {
    expect(wrapper.find('#formName').text()).toBe("");
  });  
});





