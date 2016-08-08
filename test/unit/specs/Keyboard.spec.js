import Vue from 'vue'
import Keyboard from 'src/components/Keyboard'

const vm = new Vue({
	template: '<div><keyboard v-ref:test-component></keyboard></div>',
	components: { 
		Keyboard 
	}
}).$mount();

const toTestComponent = vm.$refs.testComponent;

describe('Keyboard.vue', () => {

	it('keyList should be normalKeyList when ready', () => {

		vm.$appendTo(document.body);

		toTestComponent.$nextTick(() => {
			assert.notEqual(toTestComponent.keyList, toTestComponent.capsedKeyList);
	    	assert.equal(toTestComponent.keyList, toTestComponent.normalKeyList);
	    	assert.notEqual(toTestComponent.keyList, toTestComponent.shiftedKeyList);
		});

	});

  	it('should act correctly when Caps clicked', () => {

  		assert.equal(toTestComponent.hasCapsed, false);

    	toTestComponent.clickKey("Caps");
    	assert.equal(toTestComponent.hasCapsed, true);
    	assert.equal(toTestComponent.keyList, toTestComponent.capsedKeyList);
    	assert.notEqual(toTestComponent.keyList, toTestComponent.normalKeyList);
    	assert.notEqual(toTestComponent.keyList, toTestComponent.shiftedKeyList);

    	toTestComponent.clickKey("Caps");
    	assert.equal(toTestComponent.hasCapsed, false);
    	assert.notEqual(toTestComponent.keyList, toTestComponent.capsedKeyList);
    	assert.equal(toTestComponent.keyList, toTestComponent.normalKeyList);
    	assert.notEqual(toTestComponent.keyList, toTestComponent.shiftedKeyList);


  	});

  	it('should act correctly when Shift clicked', () => {

  		assert.equal(toTestComponent.hasShifted, false);

    	toTestComponent.clickKey("Shift");
    	assert.equal(toTestComponent.hasShifted, true);
    	assert.notEqual(toTestComponent.keyList, toTestComponent.capsedKeyList);
    	assert.notEqual(toTestComponent.keyList, toTestComponent.normalKeyList);
    	assert.equal(toTestComponent.keyList, toTestComponent.shiftedKeyList);

    	toTestComponent.clickKey("Shift");
    	assert.equal(toTestComponent.hasShifted, false);
    	assert.notEqual(toTestComponent.keyList, toTestComponent.capsedKeyList);
    	assert.equal(toTestComponent.keyList, toTestComponent.normalKeyList);
    	assert.notEqual(toTestComponent.keyList, toTestComponent.shiftedKeyList);

  	});

  	it('should act correctly when Tab clicked', () => {

  		let oldText = toTestComponent.keyboardText;

    	toTestComponent.clickKey("Tab");

    	assert.equal(toTestComponent.keyboardText, oldText + '\t');

  	});

  	it('should act correctly when Enter clicked', () => {

  		let oldText = toTestComponent.keyboardText;

    	toTestComponent.clickKey("Enter");

    	assert.equal(toTestComponent.keyboardText, oldText + '\n');

  	});

  	it('should act correctly when Space clicked', () => {

  		let oldText = toTestComponent.keyboardText;

    	toTestComponent.clickKey("Space");

    	assert.equal(toTestComponent.keyboardText, oldText + ' ');

  	});

  	it('should act correctly when Delete and other key clicked', () => {

  		let oldText = toTestComponent.keyboardText = "";

    	toTestComponent.clickKey("Delete");

    	assert.equal(toTestComponent.keyboardText, oldText);

    	toTestComponent.clickKey("a");

    	assert.equal(toTestComponent.keyboardText, "a");

    	toTestComponent.clickKey("Delete");

    	assert.equal(toTestComponent.keyboardText, oldText);

  	});

});