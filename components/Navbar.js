import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Navbar = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between  border-1 border-gray-50">
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <img className='w-12 h-12 mr-12' src='https://res.cloudinary.com/yosuam19/image/upload/v1634461666/portfolio/Apple_Messages_icon_bpmsxk.png'/>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <strong className="hidden h-6 text-lg font-bold sm:block">
                    {siteMetadata.headerTitle}
                  </strong>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-bold text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
      </div>
    </SectionContainer>
  )
}

export default Navbar
