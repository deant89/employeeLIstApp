import { render, screen } from '@testing-library/react';
import EmployeeListContainer from './EmployeeListContainer';

test('renders employee list', () => {
  render(<EmployeeListContainer />);
});
