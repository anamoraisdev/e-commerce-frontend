import { BiSearch } from "react-icons/bi";

const Menu = () => {
    const categories = [{ name: "adulto", id: 1 }, { name: "Infantil", id: 2 }, { name: "promocional", id: 3 },
    { name: "lançamento", id: 4 }, { name: "lançamento", id: 5 }, { name: "lançamento", id: 6 },
    { name: "lançamento", id: 7 }]

    return (
        <main className="w-screen p-2 flex flex-col gap-2 items-center xl:flex-row 2xl:flex-row">
            <section className="flex items-center gap-2 justify-center">
                <input placeholder="nome do produto" className="rounded-md w-[80%] px-6 text-sm border border-primary"></input>
                <button><BiSearch color="gray" size={20} /></button>
            </section>

            <section className="flex justify-center flex-wrap gap-2">
                {categories && categories.map((category) =>
                    <button key={category.id} className="text-primary border font-xs px-1 rounded-md hover:bg-complement hover:text-white">{category.name}</button>

                )}
            </section >

        </main>
    )
}
export default Menu;