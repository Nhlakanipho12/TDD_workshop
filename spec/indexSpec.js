var  {JSDOM} = require('jsdom');

describe('index.html', function() {
    var browser;

    beforeEach(function(done) {
        JSDOM.fromFile('./src/index.html', {

        }).then(function(res) {
            browser = res;
            done();
        })
    })

    afterEach(function() {
        browser.window.close()
    })

    it('should have a div somewhere inside body', function() {
        var div = browser.window.document.querySelector('div');
        expect(div).not.toBe(null);
    })

    it('should  have a <h1/> element', function() {
        var h1 = browser.window.document.querySelector('h1');
        expect(h1).not.toBe(null);
    })

    it('should  have a button somewhere inside body', function() {
        var button = browser.window.document.querySelector('button');
        expect(button).not.toBe(null);
    })

    it('should increment by 1 when button is clicked', function() {
        browser.window.onModulesLoaded = function() {
            var h1 = browser.window.document.querySelector('h1');
            var button = browser.window.document.querySelector('button');
            expect(button).not.toBe(null);

            var event = new browser.window.MouseEvent('click');
            button.dispatchEvent(event);

            expect(h1.textContent).toBe('1');
        }
    })
})