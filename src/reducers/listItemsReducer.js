export default (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_LIST_ITEMS':
            return Object.assign(
                {},
                state,
                { listItems: action.listItems }
            );

        default:
            return state;
    }
}
