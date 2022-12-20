import {mount} from "@vue/test-utils";
import PageTitle from '../../src/components/PageTitle/PageTitle'

describe('PageTitle.vue', () => {
    const wrapper = mount(PageTitle);

    it('checks the class ', () => {
        expect(wrapper.classes()).toContain('icon-hamburger');
    })
})