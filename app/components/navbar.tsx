import { BiHeart, BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";


const Navbar = () => {
    return (
        <main className="bg-secondary w-screen p-2 flex justify-between text-white items-center">

            <section>
                <h1 className="text-white font-bold text-white">LOGO</h1>
            </section>

            <section className="flex gap-2 font-bold">
                <BiShoppingBag color="white" size={20} />
                <BiHeart color="white" size={20} />
                <BiUser color="white" size={20} />
            </section>
        </main>
    )
}
export default Navbar;