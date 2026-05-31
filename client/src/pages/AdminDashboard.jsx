import React, { useState } from "react";
import { useProductStore } from "../store/useProductStore.js";
import { useAuthStore } from "../store/useAuthStore.js";

const AdminDashboard = () => {
  const { createProduct, isLoading } = useProductStore();
  const { logout } = useAuthStore();
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    inStock: true,
  });


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await createProduct(formData);
    if (success) {
      setFormData({ name: "", description: "", price: "", category: "", image: "", inStock: true });
    }
  };

  return (
    <div className="flex w-full min-h-screen text-on-background bg-background font-body-lg">
      
      {/* Mobile Top Navigation */}
      <nav className="fixed top-0 z-40 flex items-center justify-between w-full border-b md:hidden px-margin-mobile py-unit border-outline bg-background">
        <div className="tracking-tighter font-display-lg-mobile text-display-lg-mobile text-primary">ARA</div>
        <button className="p-2 text-primary">
          <span className="text-3xl material-symbols-outlined">menu</span>
        </button>
      </nav>

      {/* SideNavBar (Desktop) */}
      <nav className="fixed top-0 left-0 z-50 flex-col justify-between hidden h-screen border-r w-64 md:flex border-outline dark:border-outline-variant bg-background py-section-gap">
        <div>
          <div className="px-6 mb-12">
            <h1 className="tracking-tighter font-display-lg text-headline-md text-primary">ADMIN</h1>
            <p className="mt-1 font-label-caps text-label-caps text-secondary">MANAGEMENT</p>
          </div>
          <ul className="flex flex-col w-full font-label-caps text-label-caps">
            <li className="w-full">
              <a href="#" className="flex items-center gap-4 px-6 py-4 transition-colors duration-200 border-b text-primary dark:text-on-background border-outline/10 hover:bg-surface-container">
                <span className="text-xl material-symbols-outlined">dashboard</span>
                <span>DASHBOARD</span>
              </a>
            </li>
            <li className="w-full">
              <a href="#" className="flex items-center gap-4 px-6 py-4 transition-colors duration-200 text-on-primary bg-primary">
                <span className="text-xl material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                <span>PRODUCTS</span>
              </a>
            </li>
            <li className="w-full">
              <a href="#" className="flex items-center gap-4 px-6 py-4 transition-colors duration-200 border-b text-primary dark:text-on-background border-outline/10 hover:bg-surface-container">
                <span className="text-xl material-symbols-outlined">shopping_bag</span>
                <span>ORDERS</span>
              </a>
            </li>
            <li className="w-full">
              <a href="#" className="flex items-center gap-4 px-6 py-4 transition-colors duration-200 border-b text-primary dark:text-on-background border-outline/10 hover:bg-surface-container">
                <span className="text-xl material-symbols-outlined">group</span>
                <span>CUSTOMERS</span>
              </a>
            </li>
            <li className="w-full">
              <a href="#" className="flex items-center gap-4 px-6 py-4 transition-colors duration-200 border-b text-primary dark:text-on-background border-outline/10 hover:bg-surface-container">
                <span className="text-xl material-symbols-outlined">settings</span>
                <span>SETTINGS</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="px-6">
          <button onClick={logout} className="flex items-center justify-center w-full gap-2 py-3 transition-colors duration-200 border rounded-none border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary">
            <span className="text-sm material-symbols-outlined">logout</span>
            <span>LOGOUT</span>
          </button>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex flex-col items-center w-full min-h-screen pt-24 md:pt-0 md:ml-64 px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex flex-col w-full max-w-4xl gap-16">
          
          <header className="w-full pb-8 border-b border-primary">
            <h2 className="tracking-tighter uppercase font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">UPLOAD PRODUCT</h2>
            <p className="max-w-xl mt-4 font-body-lg text-body-lg text-secondary">Enter the details below to add a new piece to the collection. Ensure all dimensions and materials are accurately described.</p>
          </header>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
            
            {/* Image Upload Zone */}
            <div className="flex flex-col gap-2 md:col-span-5">
              <label className="font-label-caps text-label-caps text-primary">PRODUCT IMAGES</label>
              
              <div className="relative flex flex-col items-center justify-center w-full overflow-hidden transition-colors duration-300 border cursor-pointer aspect-[3/4] border-primary bg-surface-lowest group hover:bg-surface-container">
                {formData.image ? (
                  <img src={formData.image} alt="Preview" className="object-cover w-full h-full z-20" />
                ) : (
                  <>
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-5 group-hover:opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                    <div className="flex flex-col items-center gap-4 p-8 text-center z-10">
                      <span className="font-light text-4xl material-symbols-outlined text-primary">add_photo_alternate</span>
                      <span className="leading-relaxed font-label-caps text-label-caps text-primary">
                        DRAG &amp; DROP<br/>
                        <span className="tracking-normal lowercase font-body-sm text-body-sm text-secondary">or click to browse</span>
                      </span>
                    </div>
                  </>
                )}
                {/* The input sits invisibly on top so you can click or drag anywhere in the box */}
                <input required={!formData.image} onChange={handleImageChange} accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30" type="file" />
              </div>
              <p className="mt-2 font-body-sm text-body-sm text-secondary">Recommended: High-res flat lays, minimum 2000px width.</p>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-10 pt-6 md:col-span-7 md:pt-0">
              
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-primary" htmlFor="product_name">PRODUCT NAME</label>
                <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-0 py-3 transition-all bg-transparent border-0 border-b rounded-none border-primary font-body-lg text-body-lg text-primary placeholder-outline focus:border-b-2 focus:border-primary focus:outline-none focus:ring-0" id="product_name" placeholder="e.g. Asymmetric Wool Tunic" type="text" />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-primary" htmlFor="price">PRICE (USD)</label>
                  <input required value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full px-0 py-3 transition-all bg-transparent border-0 border-b rounded-none border-primary font-body-lg text-body-lg text-primary placeholder-outline focus:border-b-2 focus:border-primary focus:outline-none focus:ring-0" id="price" placeholder="0.00" type="number" min="0" />
                </div>
                
                <div className="flex flex-col justify-between gap-2">
                  <label className="font-label-caps text-label-caps text-primary">INVENTORY STATUS</label>
                  <div className="flex items-center h-full gap-4 pb-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input checked={formData.inStock} onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })} className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 transition-all border rounded-none border-primary bg-surface-container peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:border-primary after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      <span className="ml-3 font-label-caps text-label-caps text-primary">IN STOCK</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-primary" htmlFor="category">COLLECTION CATEGORY</label>
                <div className="relative w-full border-b border-primary">
                  <select required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-0 py-3 pr-10 bg-transparent border-0 rounded-none cursor-pointer appearance-none font-body-lg text-body-lg text-primary focus:border-0 focus:ring-0 focus:outline-none" id="category">
                    <option value="" disabled className="text-outline">Select a category...</option>
                    <option value="outerwear">OUTERWEAR</option>
                    <option value="tops">TOPS &amp; TUNICS</option>
                    <option value="bottoms">BOTTOMS</option>
                    <option value="accessories">ACCESSORIES</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-primary">
                    <span className="text-xl material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-primary" htmlFor="description">NARRATIVE &amp; DESCRIPTION</label>
                <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-0 py-3 transition-all bg-transparent border-0 border-b rounded-none resize-none border-primary font-body-lg text-body-lg text-primary placeholder-outline focus:border-b-2 focus:border-primary focus:outline-none focus:ring-0" id="description" placeholder="Detail the materials, inspiration, and fit..." rows="5"></textarea>
              </div>

            </div>

            {/* Submit button */}
            <div className="flex justify-end pt-8 mt-8 border-t border-primary md:col-span-12">
              <button disabled={isLoading} className="w-full px-12 py-4 transition-colors duration-300 border rounded-none md:w-auto bg-primary text-on-primary font-label-caps text-label-caps hover:bg-surface-tint hover:text-on-primary border-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" type="submit">
                {isLoading ? "UPLOADING..." : "PUBLISH PRODUCT"}
              </button>
            </div>
            
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;