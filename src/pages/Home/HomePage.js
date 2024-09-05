import { useTitle } from '../../hooks/useTitle';
import { Hero } from './components/Hero';
import { FeatureProducts } from './components/FeatureProduct';
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'

const HomePage = () => {
  useTitle('Access Latest CS E-Books');

  return (
    <main  >
        <Hero />
        <FeatureProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}

export  {HomePage}
