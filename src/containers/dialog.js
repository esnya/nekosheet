export const open = (state, id) =>
    Boolean(state.dialogs.length && state.dialogs[0].id === id);
