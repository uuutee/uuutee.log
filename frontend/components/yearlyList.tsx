import Link from 'next/link'

export const YearlyList = ({years = []}) => {
  return (
      <ul>
        {years.length > 0 && years.map((year) => (
          <li key={year.id}>
              <span>
                <Link href={`/${year.id}`}>
                  <a>{year.text}</a>
                </Link>
              </span>
          </li>
        ))}
      </ul>
  )
}
