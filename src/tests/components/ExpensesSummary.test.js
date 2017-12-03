import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary Correctly', () => {
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23234215} />);
  expect(wrapper).toMatchSnapshot();
});