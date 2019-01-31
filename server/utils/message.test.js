var {generateMessage, generateLocationMessage} = require('./message');
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

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {

        var returnedMessage = generateLocationMessage('Ozgun', 1, 1);

        var testUrl = 'https://www.google.com/maps?q=1,1';

        expect(returnedMessage.from).toBe('Ozgun');
        expect(typeof returnedMessage.createdAt).toBe('number');
        expect(returnedMessage.url).toBe(testUrl);

    });

});