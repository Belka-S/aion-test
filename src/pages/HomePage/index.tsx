import Section from '@/components/ui/Section';
import H1 from '@/components/ui/Typography/H1';

import s from './index.module.scss';

const HomePage = () => {
  return (
    <Section className={s.home}>
      <H1>Home Page</H1>
    </Section>
  );
};

export default HomePage;
