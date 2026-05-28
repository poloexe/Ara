import ProductCard from "../components/ProductCard";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "STRUCTURED BLAZER",
      price: "NGN 145,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAOQpXpwHebT5Fh7l4uhRdRxlSdQ7ZzQVoRZoF8FCG_ajEc871OER5vY02X3I02Wmw8PeyUYqM8vqDQQEAjRgMIRbYEwKA6rab5LXaBXUsYQUHb-TxUFD3zFGuc_UN4U4odCiq3m_sHt3LiuqsHxe3JEymfCGMYVmJB8opbSxWocdI2Ako-u8HLx8SkfXpeVdIIexBIWvse3gf6aMPhCJEzbKqZLTyacQcnkaRQwknz3eq6hXrAs1mfUJS30Krb3wbiBoEZacx6ZK8",
    },
    {
      id: 2,
      name: "OVERSIZED SHIRT",
      price: "NGN 85,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBiMz3NUJ6JICEClZP2fOvQFMTMnoc3Ht3jBb0VArdhQqIDgfD5z9YRZ6o_zMyI8Ed7iRtWnHRHCHFa-oNf0hPuPY2qrpU7Ve-qn7iUOblEdsTqperKuBwHdln3N-6eX6Rxf-bVrUUmGuf2RPVyDzdK044ze-TduqP5IntHqVDVvX51pA5l6rTX0_gJrd9tw2IWujdPOB4xxyVElIw3IXQ_7S6ecw1dlAXNaaAmycfgGEi4fs5lEq5o-3zChdMuyYwgAqedAmxOgLg",
    },
    {
      id: 3,
      name: "PLEATED WIDE LEG",
      price: "NGN 110,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCbwKG1QiiXAHGnZKbRyKA2B7gjOX24dAqyALEHvfOep8k42oNjAJGAzxB3-iX_Kl4jE3HJvzLkGh2uknt146087lwSc9XXjz4eFkK83LKCsL_V09b25FlFerfhpW_J2vM0VQJejS_8AT6dFfcWVss8JbtXo-6jDMMnZyKEaAonqghIyLLs5UNqGYl5_KRDPpcwJRUC9zXJv2482fFjmdRc0czaast8yuIRByG0jJenwS55CqXvZfoNfi3HtkZPSMGYVy4fcBLdJw",
    },
    {
      id: 4,
      name: "HEAVY KNIT PULLOVER",
      price: "NGN 130,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDWZ0PD2tClWxyFIn6NjrQQ7f1Ojrv3EE_K7A_rylObnFZrUMUEYxthgR90VLZfFP1OkUdTxCv4x4d6Q3pLxE48pzvFgJnH6Nx_S7YVFBMFGAE0fVxr8HpcOw9WTbAh9xtJ1xhQ5fRQ5FdHDv3UFAc9phMizkYU4tex5EgjXoK5Aoy8cSV8FksoYpcjW-DDF_HF2_ISxj6VgCHPB2imZeUsJzrRTMl0_QPfOTNyWAmzA96yDmluvtCaj4T6EcKI9jSMz9-M9z88uUE",
    },
    {
      id: 5,
      name: "ARCHITECTURAL COAT",
      price: "NGN 210,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8ld5Gj-0rH0wEDc0FBsKmaCF06LdYtIkdat4ZlgsWmyNwZVnnUxt7-BGAI1zfkadgRb-bGod3PKigD1CDOpZBKFQ_QzLEK5DUDSw-wTkz7RZhj2Dzg42zy-w7UWpXMMdhPbkzkqfQrZ_In1LutGKm9LkIsh-m72bsDjDKN1CJnBRXNnNnENrMoLQe8paKf34b4vCEhofgoyms7vVH409ByWn_zbV8hBBrNu-cq69je5mhsVTFL68ePUPJctDADkkDbNTJBN08qdE",
    },
    {
      id: 6,
      name: "LAYERED TUNIC",
      price: "NGN 95,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABULg62N5w_exgPdS_bRL2tFktmZFwafWfWFpV6a2i70RJLtj9ZcbzcsNs9b8yuXWRwUoFRoBCG3dk01E9SnOc_MSM36jlPX85gxV7RFcBfSZAAx9g7-pD2vLnwjv5jvircWkE8KyYKVMuqObzjzmfNN96kl7BM6ORH6T_efUxWyd7PcjLHF6BwnXxTrorBU1ctypuaeHQAgtNPOzz1IdWpMpdHQfUD_pL-ookVeMdosC2AfphUsAjdnZOtdPLXBui7kGba3DBdzU",
    },
  ];

  return (
    <main className="w-full flex-grow">
      {/* Page Header */}
      <section className="w-full px-margin-mobile md:px-margin-desktop pt-16 pb-8 md:pt-32 md:pb-16 flex flex-col gap-4 border-b border-primary">
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary uppercase">
          Collection 01
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          A study in form and negative space. Drawing inspiration from
          traditional weaving techniques, translated into architectural
          silhouettes for the modern global uniform.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="w-full px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center border-b border-primary font-label-caps text-label-caps">
        <div className="flex gap-6">
          <button className="hover:underline text-primary underline">
            ALL
          </button>
          <button className="hover:underline text-secondary">OUTERWEAR</button>
          <button className="hover:underline text-secondary">SHIRTS</button>
          <button className="hover:underline text-secondary">TROUSERS</button>
        </div>
        <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          FILTER{" "}
          <span className="material-symbols-outlined text-[16px]">tune</span>
        </button>
      </div>

      {/* Product Grid */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      {/* Pagination / Load More */}
      <div className="w-full px-margin-mobile md:px-margin-desktop pb-section-gap flex justify-center">
        <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 hover:bg-surface hover:text-primary border border-primary transition-colors cursor-pointer">
          LOAD MORE
        </button>
      </div>
    </main>
  );
};

export default Shop;
