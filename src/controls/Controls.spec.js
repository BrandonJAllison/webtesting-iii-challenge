import React from 'react';
import { toBeDisabled } from 'jest-dom';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';

expect.extend({ toBeDisabled });

describe('<Controls/>', () => {
	it('should render button to toggle closed and locked states', () => {
		const { getByText } = render(<Controls />);

		getByText(/close gate/i);
		getByText(/lock gate/i);
    });
    
    it('should disable lock/unlock button when gate is open', () => {
		const { getByText } = render(<Controls closed={false} />);

		const button = getByText(/lock gate/i);

		expect(button).toBeDisabled();
	});

	it('should disable open/close button when gate is locked', () => {
		const { getByText } = render(<Controls locked />);

		const button = getByText(/close gate/i);

		expect(button).toBeDisabled();
    });
    
    it('should toggleClosed to change on button click', () => {
		const toggleClosed = jest.fn();
		const { getByText } = render(
			<Controls toggleClosed={toggleClosed} />
		);
		const button = getByText(/close gate/i);
		fireEvent.click(button);

		expect(toggleClosed).toBeCalledTimes(1);
	});

});
