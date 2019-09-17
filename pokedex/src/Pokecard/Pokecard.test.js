import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json"
import Pokecard from "./Pokecard";
// import { isMainThread } from "worker_threads";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it("renders without crashing", function(){
  shallow(<Pokecard pokemon={{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 }} />);
});

it("matches screenshot.", function(){
  let wrapper = shallow(<Pokecard pokemon={{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 }}/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
