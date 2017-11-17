const reqFormatter = (req) => {
    const tag = '[request]';
    const { data, tags, ...payload } = req;
    let ret = { req: payload };

    if (!data) return [ret, tag];

    if (data instanceof Error) ret.err = data;
    else if (typeof data === 'object') {
        ret = Object.entries(data).reduce(
            (agg, [key, value]) =>
                (value instanceof Error
                    ? { ...agg, err: value }
                    : { ...agg, other: { ...agg.other, [key]: value } }),
            ret
        );
    } else ret.req.data = data;
    return [ret, tag];
};

export default reqFormatter;
