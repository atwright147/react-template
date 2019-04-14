export default (state = [], action) => {
    switch(action.type) {
        case 'listItems/GET':
            return action.listItems;

        default:
            return state;
    }
}
