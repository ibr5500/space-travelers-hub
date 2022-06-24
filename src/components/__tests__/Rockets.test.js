import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rockets from '../Rockets';

describe('Tests for the Rockets page', () => {

  it('Should render the Rockets page', () => {
    const tree = renderer.create(<Provider store={store}><Rockets /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});