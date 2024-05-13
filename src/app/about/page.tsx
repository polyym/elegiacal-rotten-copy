// Import necessary modules and components
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex flex-col">
      {/* Section 1 */}
      <div className="md:h-[850px]  w-full relative">
        <div className="flex flex-col md:flex-row mx-7 md:mx-[70px] justify-center">
          {/* <div
            className="w-full md:hidden md:w-1/2  max-md:justify-center max-md:items-center relative"
            style={{
              backgroundImage: "url('/images/about_1_ellegiacally_rotten.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "990px", // Set a suitable height for mobile
            }}
          ></div> */}
          <div className="hidden   md:w-1/2 h-auto md:flex">
            <Image
              src="/images/about_1_ellegiacally_rotten.jpg"
              alt="about"
              width={1450}
              height={1600}
              className="h-[104%]"
            />
          </div>

          <div
            className="flex flex-col    text-center bg-cover font-medium justify-center items-center max-md:text-center max-md:pb-[240px] md:py-16 w-full md:w-1/2"
            style={{
              fontFamily: "courier new",
              backgroundImage: "url('/images/about_2_ellegiacally_rotten.jpg')",
              backgroundSize: "cover",
            }}
          >
            <span className="flex text-[#dee5e3] justify-center items-cente md:mt-[90px]  text-3xl md:text-5xl tracking-[0.6rem] leading-relaxed">
              elegiacal
            </span>
            <span className="text-[#dee5e3] justify-center items-center  text-3xl md:text-5xl tracking-[0.6rem]">
              &amp; rotten
            </span>
            <p
              className="text-[#dee5e3] my-4 md:my-8  text-lg md:text-2xl"
              style={{ fontFamily: "Raleway" }}
            >
              Expression through words.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1.5 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              className="text-[#dee5e3] hidden md:block relative justify-center items-center leading-6 md:leading-8 mx-2 md:mx-10 text-sm md:text-[17px] text-center"
              style={{ whiteSpace: "pre-line", fontFamily: "Raleway" }}
            >
              Living in this world has been difficult and brilliant at times.
              This is a <br /> platform where poets and all kinds of writers can
              come together <br />
              and poetically express themselves. Hence, the existence of the{" "}
              <br /> forum for all people. <br />
              Join the forum to post your own words. If you would like your
              <br /> words to be on the home page you can trigger a vote in the
              forum.
            </motion.div>
            <div
              className="text-[#7d8180c8] md:hidden block relative  justify-center items-center text-center w-[300px] "
              style={{ whiteSpace: "pre-line", fontFamily: "Raleway" }}
            >
              Living in this world has been difficult and brilliant at times.
              This is a platform where poets and all kinds of writers can come
              together and poetically express themselves. Hence, the existence
              of the forum for all people. Join the forum to post your own
              words. If you would like your words to be on the home page you can
              trigger a vote in the forum.
            </div>
            <div className="bg-transparent py-10 h-[120px] w-full"></div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="flex bg-cover bg-right-top md:h-[1800px] w-full relative"
        style={{
          backgroundImage: "url('/images/about_3_ellegiacally_rotten.jpg')",
        }}
      >
        <div className="flex flex-col w-full my-8 px-4 md:w-[900px] md:my-32 md:mx-auto gap-2">
          <h2
            className="text-[#dee5e3]  text-3xl md:text-5xl tracking-[0.2rem] line-height-[1.5rem] leading-relaxed"
            style={{ fontFamily: "Raleway" }}
          >
            Who am I?
          </h2>
          <span
            className="text-[#dee5e3] pt-3  text-lg md:text-2xl font-bold"
            style={{ fontFamily: "courier new" }}
          >
            Un transit nocturne
          </span>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            className="text-[#dee5e3]  my-4 md:my-7  sm:tracking-[0.1rem]  leading-6 md:leading-7 text-[24px] md:text-lg"
          >
            <span
              className="flex justify-center text-center"
              style={{ fontFamily: "Raleway" }}
            >
              Le vol de 20h au départ de Marbella partira vers Barcelone. Une
              mère et son enfant se préparent pour le vol. Une fois qu&apos;ils
              ont atteint l&apos;aéroport et pris l&apos;avion, l&apos;enfant
              ressent une énergie qui n&apos;est pas vraiment joyeuse, mais
              plutôt noire. L&apos;avion était vide, ils ont donc pu
              s&apos;asseoir n&apos;importe où. La mère s&apos;est mise à
              pleurer, l&apos;enfant concerné a conquis la mère. Elle explique
              qu&apos;ils vont avoir un transit quand ils arriveront à
              Barcelone. L&apos;enfant, innocent, sourit et explique à la mère
              qu&apos;elle ne devrait pas être triste, car Marbella n&apos;a pas
              de vol direct vers sa destination finale. La mère sourit et serre
              l&apos;enfant dans ses bras. Elle ne peut pas révéler la vérité.
              Les mots sont tirés de sa bouche et enfoncés dans ses poumons, son
              souffle est étouffé comme si un ventilateur s&apos;était éteint.
              La ténacité, une qualité merveilleuse chez une mère, supprime le
              blocage du tuyau. La mère explique à l&apos;enfant que le transit
              l&apos;achemine vers un autre avion. L&apos;enfant sourit et dit
              que ce n&apos;est pas un problème. ​car la destination est la
              même.
            </span>

            <span
              className="flex pt-4 justify-center text-center"
              style={{ fontFamily: "Raleway" }}
            >
              La mère se noie dans ses propres larmes, l&apos;enfant prend une
              serviette et retire les larmes de ses joues. L&apos;enfant lui
              tend la crème pour les lèvres et dit : « voilà maman, tes lèvres
              sont gercées et je détesterais te voir saigner ». La mère regarde
              son enfant droit dans les yeux, sa pupille aussi petite qu&apos;un
              grain de sable. La concentration n&apos;a jamais été aussi claire,
              elle explique que la destination est différente, qu&apos;elle est
              très malade et qu&apos;elle a besoin d&apos;une clinique
              spécialisée pour la soigner. La mère qui flotte dans ses propres
              larmes dit « Je suis une si mauvaise mère et je suis vraiment
              désolée, j&apos;espère qu&apos;un jour tu pourras me pardonner. ».
              L&apos;enfant sourit et dit : « Pardonne-toi? Pourquoi ? Je ne
              voudrais pas
            </span>
            <span
              className="text-center flex justify-center"
              style={{ fontFamily: "Raleway" }}
            >
              te voir saigner. »
            </span>
          </motion.div>
          <span
            className="flex justify-center italic  text-center  sm:tracking-[0.1rem]  leading-6 md:leading-7 text-[24px] md:text-lg"
            style={{ fontFamily: "Raleway" }}
          >
            Rien n&apos;est pire que de réaliser combien de pertes existent dans
            ce monde. Le bonheur n&apos;existe pas que par la façon dont nous
            percevons la réalité. La vérité est que la réalité est
            incroyablement sombre, la seule différence entre les personnes
            heureuses et les personnes tristes est la façon dont on raisonne la
            vérité.
          </span>
          <span
            className="flex pt-4 justify-center text-center  sm:tracking-[0.1rem]  leading-6 md:leading-7 text-[24px] md:text-lg"
            style={{ fontFamily: "Raleway" }}
          >
            Une fois dans l&apos;avion, l&apos;agent de bord rencontre la mère
            et, après la paperasse, explique le processus à l&apos;enfant.
            L&apos;enfant serre dans ses bras la mère, exprime tout l&apos;amour
            qu&apos;il peut, sourit et fait des signes comme elle pleure.
            L&apos;agent de bord assiste l&apos;enfant jusqu&apos;à ce
            qu&apos;il atteigne l&apos;avion où un autre agent de bord est
            désormais responsable de l&apos;enfant. Une fois seul l&apos;enfant
            pleure et ne s&apos;arrête jamais. Le vol approche de la destination
            et l&apos;enfant n&apos;a plus de larmes à pleurer. L&apos;enfant
            récupère les sacs à l&apos;aide d&apos;un dispositif jusqu&apos;à
            l&apos;arrivée du père.
          </span>

          <span
            className="flex pt-4 justify-center text-center  sm:tracking-[0.1rem]  leading-6 md:leading-7 text-[24px] md:text-lg"
            style={{ fontFamily: "Raleway" }}
          >
            Sur le chemin du retour, le père ignore l&apos;enfant, il
            n&apos;explique pas et n&apos;éclate pas, rien. Il est évident que
            le père est blessé, mais l&apos;enfant l&apos;est aussi, mais ce
            n&apos;est pas quelque chose que le père apprend jusqu&apos;à ce
            qu&apos;il soit trop tard.
          </span>
          <span
            className="flex justify-center italic  text-center  sm:tracking-[0.1rem]  leading-6 md:leading-7 text-[24px] md:text-lg"
            style={{ fontFamily: "Raleway" }}
          >
            Aucune approche poétique, rien, car pourquoi glamouriser le mode de
            livraison. Livraison pour ce que vous pouvez demander ? Livraison
            pour destruction. À qui l&apos;enfant peut-il s&apos;en prendre ?
          </span>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            className="my-[70px]"
          >
            <Link
              className="rounded-none p-4 px-6 border-white bg-white text-black hover:bg-[#adaeae]"
              href={"/"}
              style={{ fontFamily: "Raleway", fontSize: "16px" }}
            >
              words?
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Page;
