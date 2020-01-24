import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItem';
import NavigationItem from './NavigationItem';


configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
   let wrapper;

    beforeEach(() =>{
        wrapper = shallow(<NavigationItems />);
    });
    it('should render two Navigationitem elements if not authenticated', () =>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render 3 Navigationitem elements if authenticated', () =>{
        wrapper.setProps({ isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render 3 Navigationitem elements if authenticated', () =>{
        wrapper.setProps({ isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout"></NavigationItem>)).toEqual(true);
    });

    
});