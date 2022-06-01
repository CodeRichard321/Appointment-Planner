import { Tile } from '../Tile';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("Tile component is rendered successfully", () => {
    render(<Tile obj={{ name: 'Richard', phone: '431-279-1112' }} />);
    const tile = screen.getByText('Richard');
    expect(tile).toBeInTheDocument();
});