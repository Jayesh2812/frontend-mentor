export const ACTIONS = {
    ADD: "add",
    SET: "set",
};

export const recentLinks = "old-links";
export const initialState = [];

export function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            const { actualLink, shortenedLink } = action.payload;

            const value = localStorage.getItem(recentLinks);
            const newArray = value
                ? [{ actualLink, shortenedLink }, ...JSON.parse(value)]
                : [{ actualLink, shortenedLink }];

            localStorage.setItem(recentLinks, JSON.stringify(newArray));

            return newArray;
        case ACTIONS.SET:
            return JSON.parse(action.payload)
    

        default:
            console.error("Incorrect Action Type")
            return state;
    }
}
