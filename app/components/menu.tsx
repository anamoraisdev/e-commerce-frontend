import { BiSearch } from "react-icons/bi";

const Menu = () => {
    const categories = [{ name: "adulto", id: 1 }, { name: "Infantil", id: 2 }, { name: "promocional", id: 3 },
    { name: "lançamento", id: 4 }, { name: "lançamento", id: 5 }, { name: "lançamento", id: 6 }]

    return (
        <main className="w-full bg-secondary px-2 py-3">

            <section className="flex justify-center flex-wrap gap-2">
                {categories && categories.map((category) =>
                    <button key={category.id} className="text-white border font-xs px-1 rounded-md hover:bg-complement hover:text-secondary">{category.name}</button>

                )}
            </section >

        </main>
    )
}
export default Menu;