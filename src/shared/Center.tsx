import { defineComponent, PropType } from 'vue'
import s from './Center.module.scss'

type DirectionType = '-' | '|' | 'horizontal' | 'vertical'

const directionMap = {
	'-': 'horizontal',
	'|': 'vertical',
	'horizontal': 'horizontal',
	'vertical': 'vertical'
}

export const Center = defineComponent({
	props: {
		direction: {
			type: String as PropType<DirectionType>,
			default: 'horizontal'
		}
	},

	setup: (props, context) => {
		const extraClass = directionMap[props.direction]

		return () => (
			<div class={[s.center, extraClass]}>
				{context.slots.default?.()}
			</div>
		)
	}
})
