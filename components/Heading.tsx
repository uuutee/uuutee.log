import { FC } from 'react'

type Props = {
  title: string
  beforeTitle?: React.ReactNode
  afterTitle?: React.ReactNode
  children?: React.ReactNode
}

const Heading: FC<Props> = ({
  title,
  beforeTitle,
  afterTitle,
  children,
}: Props) => {
  return (
    <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
      {beforeTitle}
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
        <span>{title}</span>
        {children}
      </h1>
      {afterTitle}
    </div>
  )
}

export default Heading
