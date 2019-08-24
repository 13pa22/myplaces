import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
function App() {
  
 


  return (
    <div className="big-content">
       <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}} to='/home'> start here!</Link>} scroll>
            <Navigation>
                    <Link to="/addplace">Add Places</Link>
                    <Link to="/places">Places</Link>

            </Navigation>
        </Header>
       
        <Content>
            <div className="page-content">
            <Main />



            </div>
        </Content>


        <Footer size="mini">

    <FooterSection type="left" logo="My Places">
       

        <FooterLinkList>
            <a href="#">Linkedin Link</a>
            <a href="#">Github Link</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
    </Layout>



    </div>
  );


}

export default App;
