import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json"
import Pokedex from "./Pokedex";
import App from "../App.js";
// import { isMainThread } from "worker_threads";
import {configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it("renders without crashing", function(){
  shallow(<Pokedex />);
  mount(<Pokedex />);
});

it("matches screenshot.", function(){
  let wrapper = shallow(<Pokedex />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});


