import s from './welcome.module.scss'
import { useRouter } from 'vue-router'
import { FunctionalComponent } from 'vue'

export const ThirdActions: FunctionalComponent = () => {
  const router = useRouter()
  const replace = (to: string) => router.replace(to)

  return (
    <div class={s.actions}>
      <button class={s.fake}>跳过</button>
      <button onClick={() => replace('/welcome/4')}>下一页</button>
      <button onClick={() => replace('/start')}>跳过</button>
    </div>
  )
}

ThirdActions.displayName = 'ThirdActions'
