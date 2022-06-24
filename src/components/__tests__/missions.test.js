import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../missions';

describe('Tests for the Missions page', () => {
  it('Should render the Missions page', () => {
    const tree = renderer.create(<Provider store={store}><Missions /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('The Missions page should render mission', () => {
    render(<Provider store={store}><Missions /></Provider>);
    const mission = screen.getByText('Status');
    expect(mission).toBeInTheDocument();
  });
});
