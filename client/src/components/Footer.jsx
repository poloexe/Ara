export default function Footer() {
  return (
    <footer className="bg-background dark:bg-background full-width border-t border-outline dark:border-outline-variant flat no shadows transition-colors duration-200 flex flex-col md:flex-row justify-between items-start md:items-center w-full px-margin-mobile md:px-margin-desktop py-section-gap gap-gutter md:gap-0">
      <div className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary dark:text-primary mb-8 md:mb-0">
        ARA
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <a
          className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors duration-200"
          href="#"
        >
          INSTAGRAM
        </a>
        <a
          className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors duration-200"
          href="#"
        >
          TWITTER
        </a>
        <a
          className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors duration-200"
          href="#"
        >
          TERMS
        </a>
        <a
          className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors duration-200"
          href="#"
        >
          PRIVACY
        </a>
      </div>

      <div className="font-label-caps text-label-caps text-secondary mt-8 md:mt-0">
        © 2024 ARA. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
