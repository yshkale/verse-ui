export const Header = () => {
  return (
    <header className="px-4 lg:px-0 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img src="/favicon.svg" alt="logo" />
        <p className="font-semibold">verse ui</p>
      </div>

      <a
        className="cursor-pointer"
        href="https://github.com/yshkale/verse-ui"
        target="_blank"
      >
        <img src="/custom-icons/github.svg" alt="github icon" />
      </a>
    </header>
  );
};
