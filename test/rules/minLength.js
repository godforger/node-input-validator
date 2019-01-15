const assert = require('assert');

const Validator = require('../../index');


let r = {};


describe('minLength', function () {

    it('validation should pass', async () => {

        const v = new Validator(
            { attribute: 'uname' },
            { attribute: 'minLength:5' }
        );

        const matched = await v.check();

        assert.equal(matched, true);

    });


    it('validation should fail: invalida value', async () => {

        const v = new Validator(
            { attribute: 'uname' },
            { attribute: 'minLength:6' }
        );

        const matched = await v.check();

        assert.equal(matched, false);

        //console.log(v.errors);

    });

});