import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const setupMockStore = (state) => {
    const mockStore = configureMockStore([thunk]);
    return state
        ? mockStore(state)
        : mockStore();
}

export default { setupMockStore };
