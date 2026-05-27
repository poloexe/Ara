export default function HeroSection() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col items-center justify-center min-h-[819px] relative">
      {/* Architectural Line Motif */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary opacity-10 -translate-x-1/2 pointer-events-none hidden md:block"></div>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter w-full max-w-7xl mx-auto items-center">
        {/* Typography Column */}
        <div className="col-span-4 md:col-span-5 md:col-start-2 flex flex-col justify-center order-2 md:order-1 mt-12 md:mt-0 z-10 relative">
          <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-primary pointer-events-none hidden md:block h-32 my-auto"></div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary uppercase mb-6 leading-tight">
            CONTEMPORARY
            <br />
            HERITAGE
          </h1>
          <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-md">
            Exploring the intersection of architectural minimalism and
            traditional Nigerian silhouettes. A study in black, white, and pure
            form.
          </p>
          <div>
            <a
              className="inline-block bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-surface hover:text-primary hover:outline hover:outline-1 hover:outline-primary transition-colors duration-300"
              href="#"
            >
              SHOP NOW
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-span-4 md:col-span-4 md:col-start-8 flex justify-center order-1 md:order-2">
          <div className="relative w-full max-w-xs md:max-w-sm aspect-[3/4]">
            <img
              alt="Contemporary garment"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_PUs0Wt1Paps7f8PCD2ZlFXKXE8zIrB_qum8NybgznoAYV9u4-PmL5Hyp-eRpzQwcqjX1hbvWqNbT5zxFqPw8HpGvS31G-3CdwjMDow3HeSr2Ye0KcW-M53cbX0Rw4-RszcXjXr6iLl5lNf8glRuosRuGE75hRxMP7XMjM7r7wzY0hoPk6zDU3ggiw3m9hEzTfMY3WrNtt9vj1gyy1B7iEM8qblTtgRVGo9s10h92GBxw1XH3xcbsY925Uup5QPyi1OvgtjoDl1s"
            />
            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 bottom-4 left-4 border border-primary pointer-events-none z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
