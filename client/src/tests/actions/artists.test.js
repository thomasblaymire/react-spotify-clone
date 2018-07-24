import configureMockStore from 'redux-mock-store';
import thunk from 'redux=thunk';
import { loadArtistSuccess } from '../../store/actions/artists';

export const mockStore = configureMockStore([thunk]);

test('should handle loading an artist and returning an artist', () => {
  const store = mockStore();
  await store.dispatch(loadArtistSuccess("rylauNS2GG", "sent"));
  const actions = store.getActions();

  expect(actions[0]).toEqual({type: "LOAD_ARTIST_DATA_SUCCESS"});
  expect(actions[1]).toEqual({type: "CLOAD_ARTIST_DATA_FAIL" });

});

