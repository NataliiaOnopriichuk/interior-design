import { Rating } from './Rating/Rating';
import { Contacts } from './Contacts/Contacts';
import { Hero } from './Hero/Hero';
import { Reviews } from './Reviews/Reviews';
import { Layout } from './Layout/Layout';
import { Story } from './Story/Story';

export const App = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <Rating />
      <Contacts />
      <Reviews />
    </Layout>
  );
};
