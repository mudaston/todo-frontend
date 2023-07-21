export const removeRedunantSpaces = (text: string) =>
    text.replace(/^\s+|\s+$|\s+(?=\s)/gm, ' ')
