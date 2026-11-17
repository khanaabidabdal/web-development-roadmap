export function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = new Set();

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);

        listeners.forEach(listener => {
            listener(state);
        });

        return action;
    }

    function subscribe(listener) {
        listeners.add(listener);

        return function unsubscribe() {
            listeners.delete(listener);
        };
    }

    return {
        getState,
        dispatch,
        subscribe
    };
}