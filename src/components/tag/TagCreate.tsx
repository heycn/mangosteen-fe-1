import { defineComponent, reactive, toRaw } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Button } from '../../shared/Button'
import { EmojiSelect } from '../../shared/EmojiSelect'
import { Icon } from '../../shared/Icon'
import s from './TagCreate.module.scss'
import { Rules, validate } from '../../shared/validate'

export const TagCreate = defineComponent({
  setup: () => {
    const formData = reactive({
      name: '',
      sign: ''
    })

    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})

    const onSubmit = (e: Event) => {
      const rules: Rules<typeof formData> = [
        { key: 'name', type: 'required', message: '必须填写标签名！' },
        { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
        { key: 'sign', type: 'required', message: '必须选择一个emoji！' }
      ]
      Object.assign(errors, {
        name: undefined,
        sign: undefined
      })
      Object.assign(errors, validate(formData, rules))
      console.log(toRaw(errors))
      e.preventDefault()
    }

    return () => (
      <MainLayout>
        {{
          title: () => '我的记账本',
          icon: () => <Icon name='menu' class={s.icon} />,
          default: () => (
            <>
              <div class={s.navBar}>
                <Icon name='menu' class={s.back} />
                创建标签
              </div>
              <form class={s.form} onSubmit={onSubmit}>
                <div class={s.formRow}>
                  <label class={s.formLabel}>
                    <div class={s.nameWrapper}>
                      <span class={s.formItem_name}>标签名:</span>
                      <div class={s.formItem_value}>
                        <input v-model={formData.name} class={[s.formItem, s.input, s.error]}></input>
                      </div>
                    </div>
                    <div class={s.formItem_errorHint}>
                      <span>{errors['name'] ? errors['name'][0] : '　'}</span>
                    </div>
                  </label>
                </div>
                <div class={s.formRow}>
                  <label class={s.formLabel}>
                    <span class={s.formItem_name}>选择的emoji: {formData.sign || '待选择'}</span>
                    <div class={s.formItem_value}>
                      <EmojiSelect
                        v-model={formData.sign}
                        class={[s.formItem, s.emojiList, s.error]}
                      />
                    </div>
                    <div class={s.formItem_errorHint}>
                      <span>{errors['sign'] ? errors['sign'][0] : '　'}</span>
                    </div>
                  </label>
                </div>
                <p class={s.tips}>记账时长按标签即可进行编辑</p>
                <div class={s.formRow}>
                  <div class={s.buttonWrapper}>
                    <Button class={s.confirm} onClick={() => {}}>
                      确定
                    </Button>
                  </div>
                </div>
              </form>
            </>
          )
        }}
      </MainLayout>
    )
  }
})
