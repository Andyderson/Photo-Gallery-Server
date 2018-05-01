import React from 'react';
import App from '../client/src/components/app.jsx';
import Photo from '../client/src/components/photo.jsx';
import Photolist from '../client/src/components/photoList.jsx';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<Photolist />', () => {
  it('should render photos when props are received', () => {
    const photos = [{
      id: 7,
      photoArray: ['imageUrls'],
      photo: ['imageUrl'],
      name: 'Test',
      description: 'Testing',
    }];
    const wrapper = enzyme.shallow(<Photolist photos={photos} />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });
});
