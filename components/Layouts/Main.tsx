import { FC } from 'react'

const Main: FC = ({ children }) => {
  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-10">
        {children}
      </div>
    </main>
  )
}

export default Main
