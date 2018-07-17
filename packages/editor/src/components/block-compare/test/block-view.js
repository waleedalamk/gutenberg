/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import BlockView from '../block-view';

describe( 'BlockView', () => {
	const onAction = jest.fn();
	const wrapper = shallow( <BlockView title="title" rawContent="raw" renderedContent="render" action={ onAction } actionText="action" className="class" /> );

	afterEach( () => {
		onAction.mockClear();
	} );

	test( 'should match snapshot', () => {
		expect( wrapper ).toMatchSnapshot();
	} );
} );
