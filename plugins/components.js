import Vue from 'vue'

/* Templates */
import PageTemplate from '~/components/PageTemplate.vue'

/* Organisms */
import Benefits from '~/components/organisms/Benefits.vue'
import TechStack from '~/components/organisms/TechStack.vue'

/* Molecules */
import HeadingSection from '~/components/molecules/HeadingSection.vue'
import BenefitCard from '~/components/molecules/BenefitCard.vue'
import TechCard from '~/components/molecules/TechCard.vue'

Vue.component('PageTemplate', PageTemplate)
Vue.component('Benefits', Benefits)
Vue.component('TechStack', TechStack)
Vue.component('HeadingSection', HeadingSection)
Vue.component('BenefitCard', BenefitCard)
Vue.component('TechCard', TechCard)
