import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({
  adapter: new Adapter(),
});

// <<<<<<<<<<<<< Package JSON addons >>>>>>>>>>>>>>>>>
// "snapshotSerializers": [
//     "enzyme-to-json/serializer"
//   ],
//   "setupTestFrameworkScriptFile": "./node_modules/jest-enzyme/lib/index.js",
// "testEnvironment": "enzyme",
// "testEnvironmentOptions": {
//   "enzymeAdapter": "react16"
// }
