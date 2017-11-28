import React from 'react';
import createEmailInterface, { interfaceOptions, routeOptions } from '../create-interface';

describe('email interface', () => {
    const Component = () => <p>test</p>;
    const validOptions = {
        component: Component,
        subject: 'this is a test'
    };
    const emailSettings = {
        env: 'production',
        transport: jest.fn(),
        fromAddress: 'example@gmail.com'
    };
    const route = {
        method: 'POST',
        path: '/'
    };

    it('should create an interface of functions to do email stuff with', () => {
        const handleMail = createEmailInterface(emailSettings)(route, validOptions);

        expect(typeof handleMail).toEqual('function');
    });

    it('should throw an error if given bad route options', () => {
        const badOptions = { };
        expect(() => {
            createEmailInterface(emailSettings)(route, badOptions);
        }).toThrow();
    });

    it('should throw an error if route is not post method', () => {
        const badRoute = {
            method: 'GET',
            path: '/'
        };

        expect(() => {
            createEmailInterface(emailSettings)(badRoute, validOptions);
        }).toThrow();
    });

    it('should have defined interface options', () => {
        expect(interfaceOptions).toMatchSnapshot();
    });

    it('should have defined route options', () => {
        expect(routeOptions).toMatchSnapshot();
    });
});
