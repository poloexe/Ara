import React from "react";

const NewArrivals = () => {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-section-gap relative border-t border-outline">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
            NEW ARRIVALS
          </h2>
          <a
            className="font-label-caps text-label-caps text-secondary uppercase tracking-widest hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
            href="#"
          >
            VIEW ALL
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter md:gap-8">
          {/* Product 1 */}
          <a className="group block col-span-1 md:col-start-2" href="#">
            <div className="aspect-square w-full mb-4 overflow-hidden relative">
              <img
                alt="Product 1"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn4SCZ1dlovXJNCQXaZQKMrwUv5_TBQV-MJtAe4Ry9EuDZJ_LHnLAcvgfOraB_ogh1ZcUdLI5K8A-1a1YXWNgqG8ngKttAfjHaK33xTHS5LiWmwERRuLqU6L334YJhQqhKuljDL4nUH8gg_3rZGXKiGKGUfgJL2lkaSrLqSJXl0qIiZl_hQTHYav8yyTUMn1a8U4-9R8jtXCYxgUH-xg6Im7BDrT8OwsF36uC6ixNtpW_KyS1i-QTs-w7Z8wUI7UyVnwTGglC6tr0"
              />
            </div>
            <div className="flex justify-between items-start">
              <h3 className="font-body-sm text-body-sm text-primary uppercase">
                STRUCTURED TOTE
              </h3>
              <span className="font-label-caps text-label-caps text-secondary">
                01
              </span>
            </div>
          </a>

          {/* Product 2 */}
          <a className="group block col-span-1 md:col-start-4" href="#">
            <div className="aspect-square w-full mb-4 overflow-hidden relative">
              <img
                alt="Product 2"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Dgv2TFXn63C5diq3pyXXCXgScRmv5M6KhwZZM3DTadRh5Slf16HIXUDfjt3q1YRV7176zmSKIAtvgrzS8EVuPZJk4GeAL-Bwx2S4XHI3g8lCzs_jhRSTGX_0-avvMlE49PxbVWdCANsFlV8XuxtpXRf4pD7L7jy5BRqbPTZroHNggqY2ShGE5GWOQUsy20OgmkZ7tUMbAPUykRBtRj93ICA6j0liXeXWV1--45CBAkVAMsk_nrrgKgrbNWExqje8-NaQs61A-2g"
              />
            </div>
            <div className="flex justify-between items-start">
              <h3 className="font-body-sm text-body-sm text-primary uppercase">
                PLEATED TUNIC
              </h3>
              <span className="font-label-caps text-label-caps text-secondary">
                02
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
