'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const headerItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    // {
    //   title: 'Blog',
    //   url: '/blog',
    // },
  ];

  const pathname = usePathname();

  const activeLinkStyles = 'dark:bg-black bg-white dark:text-white text-black';

  return (
    <div className="w-fit mt-4 mx-auto rounded-3xl flex gap-x-1 justify-center dark:bg-white bg-black dark:text-black text-white">
      {headerItems.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className={`transition-colors ease-in duration-300 m-1 py-2 px-4 rounded-3xl ${
            pathname === item.url ? activeLinkStyles : ''
          } `}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
