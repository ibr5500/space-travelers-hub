import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen,  } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Tests for the NavBar', () => {
  test('Should render the Missions', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText(/Missions/)).toBeInTheDocument();
  });

  test('Should render the Rockets', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText(/Rockets/)).toBeInTheDocument();
  });

  test('Should render the MyProfile', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText(/MyProfile/)).toBeInTheDocument();
  });

  test('When click on Missions sholud change the link to that page', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    fireEvent.click(screen.getByText(/Missions/));
    expect(window.location.href).toBe(screen.getByText(/Missions/).href);
  });

  it('Should render the Navbar', () => {
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });
});