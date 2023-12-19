import { BiHeart, BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";


const Navbar = () => {
    return (
        <main className="bg-secondary w-full flex justify-between text-white items-center p-2">

            <section>
                <h1 className="text-white font-bold ">LOGO</h1>
            </section>
            <section className="flex items-center gap-2 justify-between w-[50%]">
                <input placeholder="nome do produto" className="relative rounded-md w-full px-6 text-sm border border-primary bg-transparent"></input>
                <button className="absolute mx-1"><BiSearch color="gray" size={20} /></button>
            </section>
            <section className="flex gap-2 font-bold">
                <BiShoppingBag color="white" size={15} />
                <BiHeart color="white" size={15} />
                <BiUser color="white" size={15} />
            </section>
        </main>
    )
}
export default Navbar;