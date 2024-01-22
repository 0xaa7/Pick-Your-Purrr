import { useRef } from "react";
import { useInView } from "framer-motion";


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Section>
        <p>
          Our Humble Beginnings! Four years ago, I embarked on a journey that
          not only reshaped my life but also had a profound impact on numerous
          families in search of cherished furry companions. My journey into the
          Persian kitten world began with a deep-seated love for pets. However,
          it was disheartening to encounter breeders consistently manipulating
          both the quality and pricing of these feline companions. As I immersed
          myself deeper into this world, it became evident that a critical void
          existed, demanding the creation of a dependable bridge between
          aspiring pet parents and reputable breeders. Driven by my passion for
          Persian kittens and the desire to make a positive impact, I assumed
          the role of this essential bridge 3 years ago. Today, I take great
          pride in being this bridge, having connected more than 400 families
          with their dream Persian kittens and at the same time ensuring the
          highest quality at the most reasonable prices. My Mission - is to
          bring joy and fulfillment to those who yearn for the perfect feline
          companion. With my commitment to simplifying your search for the
          perfect pet, your journey to feline happiness begins right here
        </p>
      </Section>
    </>
  );
}
