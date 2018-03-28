const expect = require('expect');
const {generateMessage} = require('./message.js');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let from = 'jen';
        let text = 'Some message';
        let message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
    });
});
