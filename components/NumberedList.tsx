import Link from 'next/link'

interface Item {
  id: string
  text: string
  count: number
}

interface Props<T extends Item> {
  items: Array<T>
}

const NumberedList = <T extends Item>({
  items = [],
}: Props<T>): JSX.Element => {
  return (
    <div className="flex justify-center">
      <ul className="flex max-w-lg flex-wrap justify-center">
        {items.length > 0 &&
          items.map(item => (
            <li className="mt-2 mb-2 mr-5" key={item.id}>
              <span>
                <Link href={`/items/${item.id}`}>
                  <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    {item.text}
                  </a>
                </Link>
              </span>
              <span className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                ({item.count})
              </span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default NumberedList
