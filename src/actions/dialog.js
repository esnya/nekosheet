export const OPEN = 'DIALOG_OPEN';
export const open = (id) => ({
    type: OPEN,
    id,
});

export const CLOSE = 'DIALOG_CLOSE';
export const close = (id) => ({
    type: CLOSE,
    id,
});
