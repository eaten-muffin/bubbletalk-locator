import { expect } from 'chai';

import server from '../../src/index';

describe('server', function () {
    it('test', function () {
        const result = 5 + 2;
        expect(result).equal(8);
    });
})