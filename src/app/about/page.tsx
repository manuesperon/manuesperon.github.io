import BlenderIcon from '@components/icons/BlenderIcon';
import GraphQLIcon from '@components/icons/GraphQLIcon';
import NextIcon from '@components/icons/NextIcon';
import NodeIcon from '@components/icons/NodeIcon';
import ReactIcon from '@components/icons/ReactIcon';
import ShadcnIcon from '@components/icons/ShadcnIcon';
import ThreeIcon from '@components/icons/ThreeIcon';
import TypescriptIcon from '@components/icons/TypescriptIcon';
import Link from 'next/link';

const TechnologiesContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center sm:gap-6 gap-3 border-2 border-aquaGreen rounded-full p-4">{children}</div>;
};

const IconWithTooltip = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="relative group">
      {icon}
      <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-aquaGreen text-black px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {title}
      </span>
    </div>
  );
};

const AboutPage = () => {
  const paragraphStyles = 'lg:text-xl text-md  my-8 text-center';
  const iconStyles = 'lg:w-[80px] lg:h-[80px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] dark:fill-white fill-black';

  return (
    <div className="max-w-4xl flex flex-col items-center justify-around">
      <h1>About me</h1>
      <p className={paragraphStyles}>
        I&apos;m a full-stack engineer with a passion for <span className="text-aquaGreen">front-end</span> development.
        I like blending tech skills with <span className="text-aquaGreen">creativity</span> to craft beautiful
        user-friendly interfaces.&nbsp;
        <Link
          href="/#contact"
          className="underline decoration-aquaGreen underline-offset-[5px] hover:text-aquaGreen transition-colors duration-300"
        >
          Let&apos;s bring your ideas to life!
        </Link>
        &nbsp; 💪
      </p>
      <p className={paragraphStyles}>These are some of the tools that have helped me bring my projects to life</p>
      <TechnologiesContainer>
        <ReactIcon className={iconStyles} />
        <TypescriptIcon className={`${iconStyles}`} />
        <GraphQLIcon className={iconStyles} />
        <NextIcon className={iconStyles} />
        <NodeIcon className={iconStyles} />
      </TechnologiesContainer>
      <p className={paragraphStyles}>...and these are the ones I&apos;m currently experimenting with!</p>
      <TechnologiesContainer>
        <IconWithTooltip icon={<ThreeIcon className={iconStyles} />} title="Three.js" />
        <IconWithTooltip icon={<ShadcnIcon className={`${iconStyles}`} />} title="Shadcn" />
      </TechnologiesContainer>
    </div>
  );
};

export default AboutPage;
