import boom from 'boom';

export const handleCheckServer = (request, reply) => reply({ status: 'OK' });

/**
 * check dependencies for services
 * @param  {[promise functions]} promiseFunctions functions that when execute return promises
 * @return {reply}               replies result of promise functions
 */
export const makeHandleCheckDependency = promiseFunctions => (request, reply) =>
    Promise
        .all(promiseFunctions.map(x => x()))
        .then((dependencies) => {
            dependencies
                .filter(({ up }) => !up)
                .forEach(({ name }) => request.log('error', `dependency ${name} is down`));

            return reply(dependencies);
        })
        .catch((err) => {
            request.log('fatal', { err, msg: 'unable to test dependency status' });
            return reply(boom.badImplementation());
        });
