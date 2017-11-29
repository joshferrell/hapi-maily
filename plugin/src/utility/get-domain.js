import { pipe, split, last } from 'ramda';

const getDomain = pipe(
    split('@'),
    last
);

export default getDomain;
