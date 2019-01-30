var {generateMessage} = require('./message');
var expect = require('expect');

describe('generateMessage', () => {

    it('should generate the correct message object', () => {

        var req = {

            from: 'Ozgun',
            text: 'Naer'

        };

        var returnedMessage = generateMessage(req.from, req.text);

        expect(returnedMessage.from).toBe(req.from);
        expect(returnedMessage.text).toBe(req.text);
        expect(typeof returnedMessage.createdAt).toBe('number');

    });

});