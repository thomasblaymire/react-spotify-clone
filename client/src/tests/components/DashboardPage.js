import React from 'react';
import { shallow } from 'enzyme';
import { DashboardPage } from '../../components/Pages/DashboardPage';

test('should render the dashboard page component', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
