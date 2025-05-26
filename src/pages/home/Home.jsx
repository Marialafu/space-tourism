import { StyledBackground } from './home.styled';

const Home = () => {
  return (
    <>
      <StyledBackground>
        <source
          srcset='/assets/images/home/background-home-desktop.jpg'
          media='(min-width: 1400px)'
        />
        <source
          srcset='/assets/images/home/background-home-tablet.jpg'
          media='(min-width: 768px)'
        />
        <source
          srcset='/assets/images/home/background-home-mobile.jpg'
          media='(min-width: 375px)'
        />

        <img
          src='/assets/images/home/background-home-mobile.jpg'
          alt=''
        />
      </StyledBackground>
      <h1>Home</h1>
    </>
  );
};

export default Home;
