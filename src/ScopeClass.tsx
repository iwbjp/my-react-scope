import type { ComponentType } from 'react'

export function scopeClass<P extends object>(Component: ComponentType<P>, scopeName: string) {
  const scopeClassName = `Root${scopeName}`

  return function WrappedComponent(props: P) {
    return (
      <div className={scopeClassName}>
        <Component {...props} />
      </div>
    )
  }
}
