import Image from 'next/image';
import Container from './components/Container'

export default function Home() {
   return (
      <Container >
         <div className='text-5xl underline font-bold'>Hello World!</div>
      </Container>
   );
}
