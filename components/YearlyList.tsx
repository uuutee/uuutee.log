import Link from 'next/link'
import { FC } from 'react'
import { Year } from '../types'

type Props = {
  years: Array<Year>
}

const YearlyList: FC<Props> = ({ years = [] }: Props) => {
  return (
    <div className="flex justify-center">
      <ul className="flex max-w-lg flex-wrap justify-center">
        {years.length > 0 &&
          years.map(year => (
            <li className="mt-2 mb-2 mr-5" key={year.id}>
              <span>
                <Link href={`/years/${year.id}`}>
                  <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    {year.text}
                  </a>
                </Link>
              </span>
              <span className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                ({year.count})
              </span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default YearlyList
