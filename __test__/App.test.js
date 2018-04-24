import React from 'react';
import App from '../client/src/components/app.jsx';
import Photo from '../client/src/components/photo.jsx';
import Photolist from '../client/src/components/photoList.jsx';
import Modal from 'react-modal';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<App />', () => {
    const component = enzyme.shallow(<App />);

    it('should render one <App /> component', () => {
        expect(component).toHaveLength(1);
    });

    it('should render children when passed in', () => {
        const wrapper = enzyme.mount((
            <div>
                <Modal />
            </div>
        ));
        expect(wrapper.contains(<Modal />)).toEqual(true);
    });

    it('should call handlePhotos when component mounts', () => {
        const spy = jest.spyOn(App.prototype, 'handlePhotos');
        const component = enzyme.mount(<App />);
        component.update();
        expect(spy).toHaveBeenCalled();
    });

    it('should change modal to open when picture is clicked', () => {
        component.instance().openModal();
        expect(component.instance().state.modalIsOpen).toBe(true);
    });

    it('should change picture when hoverPicture is invoked on mouseOver', () => {
        component.instance().hoverPicture();
        expect(component.instance().state.photo).toBe('src');
    });
});
