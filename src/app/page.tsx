import Image from 'next/image';

import GithubIcon from '@components/icons/GithubIcon';
import LinkedInIcon from '@components/icons/LinkedInIcon';
import MailIcon from '@components/icons/MailIcon';

const Home = () => {
  const iconStyles = 'fill-white hover:fill-aquaGreen transition-colors duration-300';

  return (
    <div className="flex flex-col items-center gap-8 p-8 text-center">
      <Image className="rounded-full" src="/images/memoji.jpeg" alt="Photo placeholder" width={300} height={300} />
      <div>
        <h1>Manuel Esperon</h1>
        <h6 className="mt-2 text-right text-aquaGreen">Web engineer</h6>
      </div>
      <div className="max-w-3xl text-xl">
        Hey there! 👋 I&apos;m a full stack engineer with over 6 years of experience building websites and web
        applications. Let&apos;s work together!
      </div>
      {/* TODO: Add once about page has been implemented
      <Link href="/about">
        <Button>Get to know more about me!</Button>
      </Link> */}
      <div className="flex gap-4">
        <a href="https://github.com/manuesperon/manuesperon.github.io" target="_blank" title="Github">
          <GithubIcon width={40} height={40} className={iconStyles} />
        </a>
        <a href="https://www.linkedin.com/in/manuel-esperon-b9b301145/" target="_blank" title="LinkedIn">
          <LinkedInIcon width={40} height={40} className={iconStyles} />
        </a>
        <a href="mailto:hello@manuesperon.com" title="Email me!">
          <MailIcon width={40} height={40} className={iconStyles} />
        </a>
      </div>
    </div>
  );
};

export default Home;
