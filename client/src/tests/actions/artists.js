import configureMockStore from 'redux-mock-store';
import thunk from 'redux=thunk';
import { loadTopArtistsSuccess } from '../../store/actions/artists';
import artists from '../fixtures/artists';

const createMockStore = configureMockStore([thunk]);
