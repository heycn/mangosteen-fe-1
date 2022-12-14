import { defineComponent, ref } from 'vue'
import { Button } from '../shared/Button'
import s from './StartPage.module.scss'
import { FloatButton } from '../shared/FloatButton'
import { Center } from '../shared/Center'
import { Icon } from '../shared/Icon'
import { Overlay } from '../shared/Overlay'
import { useRouter } from 'vue-router'
import { MainLayout } from '../layouts/MainLayout'

export const StartPage = defineComponent({
  setup: (props, context) => {
    const overlayVisible = ref(false)
    const router = useRouter()
    const replace = (to: string) => router.replace(to)
    const onClick = () => {
      replace('/items/create')
    }
    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value
    }

    return () => (
      <MainLayout>
        {{
          title: () => '我的记账本',
          icon: () => <Icon name='menu' class={s.icon} onClick={onClickMenu} />,
          default: () => (
            <>
              <Center class={s.logo_wrapper}>
                <Icon name='logo' class={s.logo} />
              </Center>
              <div class={s.button_wrapper}>
                <Button class={s.button} onClick={onClick}>
                  开始记账
                </Button>
              </div>
              <FloatButton iconName='add' onClick={onClick} />
              {overlayVisible.value && <Overlay onClose={() => (overlayVisible.value = false)} />}
            </>
          )
        }}
      </MainLayout>
    )
  }
})
