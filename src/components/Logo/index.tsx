import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <svg
          width="48"
          height="48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#fff" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0s0 24-24 24c23.578.171 24 24 24 24s0-24 24-24C24 24 24 0 24 0Z"
            fill="#0B0D17"
          />
        </svg>
      </a>
    </Link>
  )
}

export default Logo
