import Image from "next/image";
import banner from '../../public/banner1.png'

import banner2 from '../../public/banner2.png'
import banner1 from '../../public/banner.png'
import { useEffect, useRef } from "react";

const Banner = () => {
    const images = [banner, banner1, banner2]
    const ref = useRef(null)
  

    const previusImage = () => {
        requestAnimationFrame(() => {
            const scrollLeft = ref?.current?.scrollLeft;
            const itemWidth = parseInt(
              getComputedStyle(ref?.current?.children[0]).width
            );
            ref.current.scrollLeft = scrollLeft - itemWidth;
        });
    }
    const nextImage = () => {
        requestAnimationFrame(() => {
            const scrollLeft = ref.current.scrollLeft;
            const itemWidth = parseInt(
              getComputedStyle(ref.current.children[0]).width
            );
            ref.current.scrollLeft = scrollLeft + itemWidth;
          });
    }


    return (
        <main >
            <section className="w-full overflow-x-hidden scroll-smooth flex" ref={ref}>
                {
                    images && images.map((image, index) =>
                    
                        <Image key={index} src={image}
                            alt="dhfdhbf"
                            sizes='(max-width:100% min-width:100%)'
                            height={500}
                        />
                    )
                }
            </section>

            <section className="flex justify-center gap-2 items-center">
                <button onClick={() => previusImage()}>previus</button>
                <button className="bg-primary rounded-full w-2 h-2"></button>
                <button className="bg-primary  rounded-full w-2 h-2"></button>
                <button className="bg-primary rounded-full w-2 h-2"></button>
                <button onClick={() => nextImage()}>next</button>
            </section>

            <section>
            </section>
        </main>
    )
}

export default Banner;