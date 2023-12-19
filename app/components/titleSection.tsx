export interface titleSection  {
    title: string,
    description: string,
}
const TitleSection = (item: titleSection) => {
    return (
        <main className="">
            <h1 className="text-secondary text-md font-bold">{item.title}</h1>
            <p className="text-complement text-xs">{item.description}</p>
        </main>
    )
}
export default TitleSection;