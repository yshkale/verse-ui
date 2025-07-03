export const Header = () => {
  return (
    <header className="px-4 lg:px-0 py-4 flex items-center justify-between sticky top-0 z-40 bg-neutral-50 shadow-sm lg:shadow-none">
      <div className="flex items-center space-x-1">
        <img src="/favicon.svg" alt="logo" />
        <a className="font-semibold" href="/">
          verse ui
        </a>
      </div>

      <a
        className="cursor-pointer hidden md:block"
        href="https://github.com/yshkale/verse-ui"
        target="_blank"
      >
        <img src="/custom-icons/github.svg" alt="github icon" />
      </a>
    </header>
  );
};
