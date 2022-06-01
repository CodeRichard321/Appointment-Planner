import { TileList } from '../TileList';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("TileList component is rendered successfully", () => {
    render(<TileList list={[{name: 'Richard', phone: '431-279-1112' }]} />);
    const tileList = screen.getByTestId('tile-list');
    expect(tileList).toBeInTheDocument();
})