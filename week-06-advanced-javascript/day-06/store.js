
export function createStore(reducer, initialState) {
    if (typeof reducer !== "function") {
        throw new TypeError("Reducer must be a function.");
    }

    let state = initialState;
    const listeners = new Set();

    function getState() {
        return state;
    }

    function dispatch(action) {
        const nextState = reducer(state, action);

        if (Object.is(nextState, state)) {
            return action;
        }

        state = nextState;

        for (const listener of [...listeners]) {
            listener(state);
        }

        return action;
    }

    function subscribe(listener) {
        if (typeof listener !== "function") {
            throw new TypeError("Listener must be a function.");
        }

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