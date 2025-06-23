import { Breadcrumb } from "../Breadcrumb";

export const Introduction = () => {
  return (
    <section className="flex flex-col">
      <Breadcrumb links={["Docs", "Introduction"]} />
      <div className="my-8 space-y-2">
        <h2 className="text-4xl font-semibold tracking-tighter">
          Introduction
        </h2>
        <p className="text-base text-neutral-600 max-w-2xl">
          Verse UI is a collection of minimal and aesthetic components made for
          developers who loves to design or designers who loves to build and
          want their apps to look beautiful and clean.
        </p>
      </div>

      <div className="my-2 space-y-2">
        <h2 className="text-xl font-semibold tracking-tighter">
          Why I Built this
        </h2>
        <p className="text-base text-neutral-600 max-w-2xl">
          I personally think users judge your entire product in the first 3
          seconds. Think about it. When you visit a website, you immediately
          know if it's trustworthy or not, right? That's the power of good
          design.
        </p>
        <p className="text-base text-neutral-600 max-w-2xl">
          I've seen this happen so many times. A developer builds an amazing
          feature but puts it in an ugly interface. Users don't even try it
          because it doesn't feel professional.
        </p>
        <p className="text-base text-neutral-600 max-w-2xl">
          A great example is{" "}
          <a
            className="text-neutral-900 font-medium"
            href="https://linear.app"
            target="_blank"
          >
            https://linear.app
          </a>{" "}
          - the moment I saw their website, I knew their product would be
          amazing. And it is!
        </p>
      </div>

      <div className="my-8 space-y-2">
        <h2 className="text-xl font-semibold tracking-tighter">Inspired by</h2>
        <p className="text-base text-neutral-600 max-w-2xl">
          This library is inspired by{" "}
          <a
            className="text-neutral-900 font-medium"
            href="https://ui.shadcn.com "
            target="_blank"
          >
            https://ui.shadcn.com
          </a>{" "}
          but with my own style of clean, aesthetic design that focuses on
          making things look beautifully unique and work smoothly.
        </p>
      </div>
    </section>
  );
};
