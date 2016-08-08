// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    	.url('http://localhost:8080')
      	.waitForElementVisible('#app', 1000)
      	.assert.containsText('h1', 'Just Enter Text:')
      	.assert.elementPresent('ul.keyboard')
      	.assert.elementCount('li', 54)
      	.expect.element('textarea').to.be.present

    browser.end()
  }
}
