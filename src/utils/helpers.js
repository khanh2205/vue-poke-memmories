export const splitArray = (list) => Array.from({ length: list / 2 }, (_, i) => i + 1);

export const shuffled = (list) => list.sort(() => Math.random() - 0.5);
