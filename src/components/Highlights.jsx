import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { watchImg } from "../utils";
import { rightImg } from "../utils";

import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link' ,{ opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  })

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Olhe os Destaques.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Assista o Destaque
              <img src={watchImg} alt="Assista" className="ml-2" />
            </p>
            <p className="link">
              Assista o evento
              <img src={rightImg} alt="Assista" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights