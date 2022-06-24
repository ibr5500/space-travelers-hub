import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Myprofile from '../Myprofile';

describe('Test for Myprofile page', () => {
  
  test('The page should renders My Missions', () => {
    render(<Provider store={store}><Myprofile /></Provider>);
    const element = screen.getByText(/My Missions/i);
    expect(element).toBeInTheDocument();
  });

  test('The page should renders My Rockets', () => {
    render(<Provider store={store}><Myprofile /></Provider>);
    const element = screen.getByText(/My Rockets/i);
    expect(element).toBeInTheDocument();
  });

  it('Should render the Myprofile page', () => {
    const tree = renderer.create(<Provider store={store}><Myprofile /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
