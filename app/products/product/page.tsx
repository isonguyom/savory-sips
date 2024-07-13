import Image from "next/image";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import IconRatingStar from "../../components/icons/IconRatingStar";

export default function ProductPage() {
  const products = [
    { id: 1, name: "Cabernet Sauvignon", price: 10000, description: "Red Wine | 12% | 75cl", quantity: 1 },
    { id: 2, name: "Chardonnay", price: 8000, description: "White Wine | 11% | 75cl", quantity: 1 },
    { id: 3, name: "Merlot", price: 7500, description: "Red Wine | 13% | 75cl", quantity: 1 },
    { id: 4, name: "Pinot Grigio", price: 6500, description: "White Wine | 10% | 75cl", quantity: 1 },
    { id: 5, name: "Rosé", price: 7000, description: "Rose Wine | 11.5% | 75cl", quantity: 1 },
    { id: 6, name: "Prosecco", price: 9000, description: "Sparkling Wine | 11% | 75cl", quantity: 1 },
    // Add more products as needed
  ];

  return (
    <main className="w-full">
      <section className="Header-bg w-full min-h-[300px] pt-28 px-4 sm:px-9 flex justify-center">
        <h1 className="font-bold text-xl lg:4xl">Product/Product details</h1>
      </section>
      <div className="w-full px-4 sm:px-9 mt-6">
        <section className="w-full flex flex-wrap lg:flex-nowrap gap-y-4 gap-x-6 mb-6 lg:items-center">
          <div className="w-[208px] lg:w-[350px] h-fit mx-auto bg-[#FFE8EA] bg-opacity-60 border border-[#F4EDED] shadow-lg rounded-[6px] px-1 py-6">
            <div className="w-fit mx-auto">
              <Image src="/martini.png" alt="Logo" width={208} height={208} />
            </div>
          </div>
          <div className="w-full px-3 py-5 text-[#180A0B] rounded-[4px] mt-3 flex flex-col gap-y-6">
            <div className="flex flex-col gap-x-5">
              <h3 className="font-bold text-2xl lg:text-4xl mb-5">
                <Link href="/products/product"> Cabernet Sauvignon</Link> | Red
                Wine | 12% | 75cl
              </h3>
              <h5 className="lg:text-xl font-bold flex gap-4">
                4.5
                <div>
                  <span className="inline-block w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                    <IconRatingStar />
                  </span>
                  <span className="inline-block w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                    <IconRatingStar />
                  </span>
                  <span className="inline-block w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                    <IconRatingStar />
                  </span>
                  <span className="inline-block w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                    <IconRatingStar />
                  </span>
                  <span className="inline-block w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                    <IconRatingStar />
                  </span>
                </div>
              </h5>
              <div className="flex flex-col lg:flex-row gap-y-6 lg:items-center gap-x-24 mt-5">
                <div className="w-fit bg-[#FFE8EA] bg-opacity-60 text-[#180A0B] font-bold border border-[#F4EDED] shadow-lg rounded-[6px] px-6 py-6">

                  75cl * 12 Bottles

                </div>
                <div className="flex lg:flex-col gap-x-6 gap-y-4">
                  <button className="bg-[#501B1F] px-5 py-1 text-white rounded-[17px]">Shop</button>
                  <button className="border border-[#501B1F] px-5 py-1 text-[#501B1F] rounded-[17px]">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-[#501B1F] mt-20">
          <div className="flex gap-x-6 mb-10">
            <button className="bg-[#501B1F] px-5 py-1 text-white rounded-[17px]">Description</button>
            <button className="border border-[#501B1F] px-5 py-1 text-[#501B1F] rounded-[17px] hidden lg:inline-block">Product review</button>
            <button className="border border-[#501B1F] px-5 py-1 text-[#501B1F] rounded-[17px] hidden lg:inline-block">Shipping</button>
          </div>
          <p className="font-bold mb-5">Product Description</p>
          <p>
            Experience the harmonious blend of tradition and modern winemaking
            with Four Cousins Red Wine. Crafted with care and passion in the
            picturesque vineyards of South Africa, this wine represents a
            perfect fusion of quality, heritage, and innovation.
          </p>
          <ul className="my-5 flex flex-col gap-y-3 list-disc pl-5">
            <li>
              <b>Flavor Profile:</b> A delightful blend of ripe red berries,
              dark plums, and subtle hints of spice. Aromas of fresh cherries,
              raspberries, and vanilla. Medium-bodied with smooth tannins and a
              lingering, velvety finish. 
            </li>
            <li>
              <b>Pairing Suggestions:</b> Pairs beautifully with grilled meats,
              hearty pastas, aged cheeses, and rich chocolate desserts.
            </li>
            <li>
              <b>Vineyard and Winemaking:</b> Produced in Robertson Valley,
              South Africa. Hand-harvested grapes, sustainable winemaking
              practices, and careful fermentation for balanced complexity.
            </li>
            <li>
              <b>Versatility:</b> Perfect for dinner parties, special
              celebrations, or casual relaxation. Approachable style suitable
              for both wine enthusiasts and
            </li>
            <li>
              <b>Bottle Size:</b> 750ml
            </li>
            <li>
              <b>Country of Origin:</b> South Africa
            </li>
          </ul>
          <p>
            Discover the charm and elegance of Four Cousins Red Wine and
            celebrate memorable moments with every sip. Order now from Savory
            Sips and elevate any occasion with a touch of sophistication.
            Here&apos;s to good times and exceptional wine!
          </p>

          <p className="mt-5">
            <b>Category:</b> Wine, Red wine
          </p>
        </section>

        <section className="w-full mt-10 pb-8">
          <div className="flex justify-between items-center gap-x-4 w-full mb-6">
            <h4 className="text-[#180A0B] md:text-lg font-bold">
              Similiar Products Like This
            </h4>
            <div className="flex items-center gap-x-3">
              <button className="w-[14px] h-[14px] lg:w-[30px] lg:h-[30px] rounded-full border border-[#441F1D] flex justify-center items-center text-xs lg:text-base font-medium">
                &lt;
              </button>
              <button className="w-[14px] h-[14px] lg:w-[30px] lg:h-[30px] rounded-full border border-[#441F1D] flex justify-center items-center text-xs lg:text-base font-medium">
                &gt;
              </button>
            </div>
          </div>
          <ul className="w-full overflow-x-auto flex gap-6 justify-center sm:justify-between items-center">
            {products.map((item) => (
              <li key={item.id}>
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
