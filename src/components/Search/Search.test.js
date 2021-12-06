import { render, screen } from '@testing-library/react';
import Search from './Search';
const options = [
    "Name",
    "Location",
    "Email",
    "DOB",
    "Gender"
];
test('renders search', () => {
  render(<Search filterOptions={options} />);
});
