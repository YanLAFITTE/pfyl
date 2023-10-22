import React from 'react';
import Container from '../components/Container';
import FadeIn from '../components/Fadein';
import Link from 'next/link';

const AboutPage = () => {
   return (
      <Container>
         <FadeIn>
            <div className='flex flex-col gap-4 mb-12'>
               <p>
                  Hi, my name is Yan. With 2 years of hands-on experience in web
                  development, I am well-versed in a wide range of programming
                  languages, including HTML5, CSS3, and JavaScript. My expertise
                  extends to popular frameworks like React and Next.js, as well
                  as proficiency in back-end development with technologies like
                  Node.js and Express. I am not only a technical wizard but also
                  a collaborative team player, ready to tackle complex
                  challenges and deliver innovative solutions. My commitment to
                  continuous learning ensures me to stay at the forefront of
                  industry trends, making me an invaluable asset to any web
                  development project.
               </p>
               <Link
                  href='../../public/yanlafitte_cv.pdf'
                  className='text-xl underline'
               >
                  <span>Download my resume</span>
               </Link>
            </div>
         </FadeIn>
      </Container>
   );
};

export default AboutPage;
