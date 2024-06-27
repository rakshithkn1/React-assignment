import Footer from './components/Footer'
import FAQ from './components/Faq';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Social from './components/Social';
import BlogPost from './components/Blogspot';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Header className />
      <MainContent/>
      <Social/> 
      <FAQ/>
      <ContactSection/>
      <BlogPost/>
      <Footer/>
    </div>
  );
}

export default App;
