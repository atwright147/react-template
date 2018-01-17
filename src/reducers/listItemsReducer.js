export default (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_LIST_ITEMS':
            return Object.assign(
                {},
                state,
                { items: action.listItems }
            );

        default:
            return state;
    }
}
