const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message.js');

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

describe('generateLocationMessage', ()=> {
    it('should generate correct location object', ()=> {
        let from = 'Admin';
        let latitude = 29.9668343;
        let longitude = 32.5498069;
        let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        let message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe('Admin');
        expect(message.url).toBe(url);
    });
});
