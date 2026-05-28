import React from "react";

const About = () => {
  return (
    <main className="flex-grow w-full">
      {/* Typography Hero Section */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col items-center justify-center min-h-[614px] text-center border-b border-outline">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary max-w-4xl mx-auto uppercase tracking-tighter leading-tight">
          RootED IN TRADITION.
          <br />
          DEFINED BY TOMORROW.
        </h1>
      </section>

      {/* Asymmetric Editorial Grid Section */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter md:gap-x-gutter gap-y-[64px] md:gap-y-[128px]">
          {/* Left Image & Text Block */}
          <div className="col-span-4 md:col-span-5 md:col-start-2 flex flex-col gap-margin-mobile md:gap-margin-desktop">
            <div className="w-full aspect-[3/4] bg-surface-container-high border border-outline relative overflow-hidden group">
              <img
                className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                alt="Nigerian textiles minimalist fashion portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXiCPnLeOKRVIde_6jdNt1X_5uRGfM_-nanlbMkcBf9Z58hIiI_6lymMHADLQa6dMbZMcTTTS_QfUs4DPcHvFWmtz8BRPPoIu4MPE53kBwscF_vkwVxZ__kPaMh54gsWV6jgNwe6ixk19_h_BK1U5pKThbxVFDEmqHlKzb9F5Tvj5AObwfRA_h9zK8MNd1TaB_94_WZxk5BFURD_q4_hLcSHjxETUk1pFJAK4KuOmgh9mVRwzsxMWhF-H6KMjOpy7p_A9ZESD6YPo"
              />
              {/* Heritage accent line */}
              <div className="absolute inset-0 border-[1px] border-primary/10 m-4 pointer-events-none"></div>
            </div>
            <div className="pt-unit border-t border-outline">
              <p className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-primary max-w-md">
                We strip away the unnecessary, translating the geometric
                discipline of traditional Uli and Adire artistry into a stark,
                contemporary architectural language.
              </p>
            </div>
          </div>

          {/* Right Image Block (Offset) */}
          <div className="col-span-4 md:col-span-4 md:col-start-8 flex flex-col md:pt-[128px]">
            <div className="w-full aspect-[4/5] bg-surface-container-high border border-outline relative overflow-hidden group">
              <img
                className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                alt="Abstract minimalist architectural detail"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPwVnP_MMjQE1L41GhCp0wfV18yH4jZSN5jHuljV3c8MAnKHsQBzMjdzbaSLyjkVsfy3iDHdNJsFUSFDkpcYwjI60T5yNNpzTBTsBGGY8dSDOT15fIpY0BNRoMa9ILN4r575bv79vuaV8C4daoTuVvEAfgGxNp1ZlpaDwzBPfPV_odr9EUZD_z80b2lsx31rPwcAmVKgO-W2pqA-RmAHRgnZdoTesuOs4unSd4MwQUidGfiRu3YEwwcFPkfiiQAXnBnMa-9BOQdO4"
              />
            </div>
            <div className="mt-gutter flex justify-end">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] border border-outline px-4 py-2">
                Vol. 01 / FORM
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
