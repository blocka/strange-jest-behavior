import Component from './component.vue';
import Component2 from './component2.vue';

describe("issue with Vue export from VPD", () => {
	it('component is not a constructor', () => {
		expect(typeof Component).toBe('object')
	})

	it('component2 is a constructor', () => {
		expect(typeof Component2).toBe('function')
	})
})
