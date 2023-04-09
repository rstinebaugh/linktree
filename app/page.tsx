import Image from 'next/image';
import { get } from '@vercel/edge-config';
import { redirect } from 'next/navigation';
import data from '../data.json';

export const dynamic = 'force-dynamic',
  runtime = 'edge';

function TwitterIcon() {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="30" 
    height="30"
    fill="currentColor" 
    viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PhoneIcon() {
return (
   <svg 
    xmlns="http://www.w3.org/2000/svg" 
    data-name="1" 
    viewBox="0 0 128 128" 
    id="phone"><path 
    fill="currentColor" d="M98 63V9.75A7.9 7.9 0 0 0 90 2H38a7.9 7.9 0 0 0-8 7.75v108.5a7.9 7.9 0 0 0 8 7.75h52a7.9 7.9 0 0 0 8-7.75Z"></path><path fill="#757575" d="M90 0H38a9.89 9.89 0 0 0-10 9.75v108.5A9.89 9.89 0 0 0 38 128h52a9.89 9.89 0 0 0 10-9.75V9.75A9.89 9.89 0 0 0 90 0Zm6 118.25a5.89 5.89 0 0 1-6 5.75H38a5.89 5.89 0 0 1-6-5.75V9.75A5.89 5.89 0 0 1 38 4h10a4.16 4.16 0 0 0 4 4h24a4.3 4.3 0 0 0 4-4h10a5.89 5.89 0 0 1 6 5.75Z"></path></svg>
  )
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all mb-3 max-w-3xl"
    >
      <div className="flex bg-white rounded-xl text-center w-full ">
        <div className="ml-3 flex w-10 h-10">
          {/*{image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}*/}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

export default async function HomePage() {
  // const data: Data | undefined = await get('linktree');

  if (!data) {
    // not working yet https://github.com/vercel/next.js/issues/44232
    redirect('https://www.ryanstinebaugh.com');
  }

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={'/static/images/Headshot_Ryan.jpeg'}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white ">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 ">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            {social.title.includes('LinkedIn') ? (
              <LinkedInIcon />
            ) : social.title.includes('Github') ? (
              <GitHubIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
