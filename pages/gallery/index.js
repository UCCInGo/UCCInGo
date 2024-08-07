import { useEffect, useState } from 'react';

import Head from 'next/head';
import GalleryCard from '../../components/card/Gallery';
import TopGradient from '../../components/TopGradient';
import { _Transition_Page } from '../../components/_Animations';
import { motion } from 'framer-motion';
import { usePrefetcer } from '../../components/Prefetcher';

const Gallery = (e) => {
  const { gallery } = usePrefetcer();
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    setGalleryList(gallery);
  }, [gallery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopGradient colorRight={'#0affff'} colorLeft={'#f0cd00'} />
      <Head>
        <title>Gallery | Ingo</title>
      </Head>

      <motion.main
        variants={_Transition_Page}
        initial="initial"
        animate="animate"
        exit="exit"
        className="py-36 z-10"
      >
        <div className="flex flex-col gap-2 justify-center mt-16">
          <p className="text-4xl font-semibold">Gallery</p>
          <p className="text-lg font-semibold">
            Complilation of projects made by our proud CS students
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center my-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {galleryList.length > 0 &&
              galleryList.map((gallery, index) => (
                <div key={index}>
                  <GalleryCard gallery={gallery} />
                </div>
              ))}

            {galleryList.length < 1 && (
              <div className="flex flex-col gap-2 justify-center">
                <p className="text-lg font-semibold">
                  No gallery was uploaded yet. Check back later!
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Gallery;
