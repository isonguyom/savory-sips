import Image from "next/image";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import IconCart from "../../components/icons/IconCart";
import IconCartDark from "../../components/icons/IconCartDark";
import IconRatingStar from "../../components/icons/IconRatingStar";

export default function ProductPage() {
  const drinks = [
    "Robert Mondavi",
    "Hugel & Fils",
    "Hugel & Fils",
    "Hugel & Fils",
    "Hugel & Fils",
    "Hugel & Fils",
    "Beringer",
    "Veuve Clicquot",
    "Cantine Florio",
    "Frey Vineyards",
  ];

  return (
    <main className="w-full">
      <section className="Header-bg w-full min-h-[300px] pt-28 px-4 sm:px-9 flex justify-center">
        <h1 className="lg:text-xl">Product/Product details</h1>
      </section>
      <div className="w-full px-4 sm:px-9 mt-6">
        <section className="w-full flex flex-wrap lg:flex-nowrap gap-6 mb-6">
          <div className="w-[174px] lg:w-[280px] bg-[#FFE8EA] bg-opacity-60 border border-[#F4EDED] shadow-lg rounded-[6px] px-1 py-6">
            <div className="w-fit mx-auto">
              <Image src="/martini.png" alt="Logo" width={208} height={208} />
            </div>
          </div>
          <div className="w-full px-3 py-5 text-[#180A0B] rounded-[4px] mt-3 flex flex-col gap-y-6">
            <div className="flex flex-col gap-x-5">
              <h3 className="font-bold text-sm lg:text-lg">
                <Link href="/products/product"> Cabernet Sauvignon</Link> | Red
                Wine | 12% | 75cl
              </h3>
              <h5 className="text-xs font-bold">
                4.5
                <span className="inline-block w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                  <IconRatingStar />
                </span>
              </h5>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-8">
              <h4 className="text-sm md:text-base lg:text-lg">10,0000 NGN</h4>
              <div className="w-[16px] h-[16px] md:w-[30px] md:h-[30px] border border-[#501B1F] rounded-full flex items-center justify-center">
                <div className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] flex items-center justify-center">
                  <IconCartDark />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-[#501B1F]">
          <p className="font-bold mb-5">Product Description</p>
          <p>
            Experience the harmonious blend of tradition and modern winemaking
            with Four Cousins Red Wine. Crafted with care and passion in the
            picturesque vineyards of South Africa, this wine represents a
            perfect fusion of quality, heritage, and innovation.
          </p>
          <ul className="my-5 flex flex-col gap-y-3">
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
              <b>Bottle Size:</b>750ml
            </li>
            <li>
              <b>Country of Origin:</b>South Africa
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

        <section className="w-full mt-7">
          <div className="flex justify-between items-center gap-x-4 w-full mb-6">
            <h4 className="text-[#180A0B] md:text-lg">
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
          <ul className="w-full overflow-x-auto flex gap-10 justify-center sm:justify-between items-center">
            {drinks.map((item) => (
              <div key={item} className="w-[280px]">
              <ProductCard />
              </div>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
