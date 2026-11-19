import { FC, PropsWithChildren } from 'react'

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-10">
        {children}
      </div>
    </main>
  )
}

export default Main
