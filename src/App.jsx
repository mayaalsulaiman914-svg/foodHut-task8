 
import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container.jsx'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main.jsx'
import Section from './components/Section/Section.jsx'
import Title from './components/Title/Title.jsx'
import ContainerCards from './components/ContainerCards/ContainerCards.jsx'
import Card from './components/Card/Card.jsx'
import ChefImage from './components/ChefImage/ChefImage.jsx'
import ContentText from './components/ContentText/ContentText.jsx'
import ContainerDescLink from './components/ContainerDescLink/ContainerDescLink.jsx'
import DescripLinks from './components/DescripLinks/DescripLinks.jsx'
import Button from './components/Button/Button.jsx'
import SecondButton from './components/SecondButton/SecondButton.jsx'
import ContainerButtons from './components/ContainerButtons/ContainerButtons.jsx'
import Menu from './components/Menu/Menu.jsx'
import ContainerMeals from './components/ContainerMeals/ContainerMeals.jsx'
import Footer from './components/Footer/Footer.jsx'
import FooterLinks from './components/Footer/FooterLinks.jsx'
import FooterInfo from './components/Footer/FooterInfo.jsx'
import FooterSubscribe from './components/Footer/FooterSubscribe.jsx'
 
 
 

function App() {
const [darkMode , setDarkMode] = useState(false)
const navItems = [
  {
    content : "Today special offers"
  },
  {
    content : "Why FoodHut"
  },
  {
    content : "Our Menu"
  } ,
  {
    content : "Our Popular food"
  }
]

const people = [
  "/assets/img/person1.png",
  "/assets/img/person2.png",
  "/assets/img/person3.png",
]
const categories = ["Ramen" ,"Breakfast" ,"Lunch" ,"Dinner" ,"Maxican" ,"Italian" , "Desserts" ,"Drinks"]
const [selectedCategory , setSelectedCategory] = useState(null) 

 
  return (
  <div  className={darkMode ? "appDark"  : "app"}>
    
   
   <Header>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} items = {navItems}> 
    </Navbar>
      <div className='storm'><img src='/assets/img/image5.png' /></div>
       <Hero title= {
        <>
        We're <span className='red'> Serious</span> For <br /><span className='red'> Food</span> & <span className='yello'>Delivery <img src='../../assets/img/Decore.png' /> </span> .
        </>
       }
       text = {<>Best cooks and best delivery guys all at your <br /> service. Hot tasty food will reach you in 60 <br/> minutes.</>}  
       >
       </Hero>
     
   </Header>
   <Main>
    <Section className="special-offers" id="special-offers">
      <Container>
        <Title title = {<> Today <span className='red'>special</span> offers </>}  text={<>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</>} /> 
        <ContainerCards>
          <Card 
          image1 ='/assets/img/halfcircle.png' 
          image2='/assets/img/kebab.png'
          price = "10$"
          people={people}
          rate = "(4.5)"
          title = "Kebab"
          description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          textBtn = "Order Now"
          />
           <Card 
          image1 ='/assets/img/halfcircle.png' 
          image2='/assets/img/kebab.png'
          price = "10$"
          people={people}
          rate = "(4.5)"
          title = "2"
          description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          textBtn = "Order Now"
          />
           <Card 
          image1 ='/assets/img/halfcircle.png' 
          image2='/assets/img/kebab.png'
          price = "10$"
          people={people}
          rate = "(4.5)"
          title = "3"
          description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          textBtn = "Order Now"
          />
           <Card 
          image1 ='/assets/img/halfcircle.png' 
          image2='/assets/img/kebab.png'
          price = "10$"
          people={people}
          rate = "(4.5)"
          title = "4"
          description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          textBtn = "Order Now"
          />
         </ContainerCards>
      </Container>
    </Section>
    <Section className="why-section" id="why-section">
      <Container>
        <ChefImage 
         images ={[
    {
    className : "half-circle",
    src :"/assets/img/circleHalf.png"
  },
  {
    className : "chefone",
    src : "/assets/img/chefone.png"
  },
  {
    className : "backgroun-chefone",
    src : "/assets/img/background-chef.png"
  },
  {
    className : "points",
    src : "/assets/img/points.png"
  },
  {
    className : "line",
    src : "/assets/img/Decoreline.png"
  },
  {
    className : "seek",
    src : "/assets/img/SeekPng2.png"
  },
  
]}

        />
        <ContentText className='content-text'>

          <Title title={<>We are <span className='red'>more</span> than <span className='yello'> multiple</span> service</>} text={<>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</>} />


            <ContainerDescLink>

               <div className="one">
               <DescripLinks image="/assets/img/mobile.png" desc="Online Order" /> 
               <DescripLinks image="/assets/img/calender.png" desc="Pre-Reservation" />
               <DescripLinks image="/assets/img/calender.png" desc="Super Chef" /> 
               </div>

              <div className="two">
              <DescripLinks image="/assets/img/clock.png" desc="24/7 Service" /> 
              <DescripLinks image="/assets/img/calender.png" desc="Oragonized Foodhut Place" /> 
              <DescripLinks image="/assets/img/calender.png" desc="Clean Kitchen" /> 
              </div>
               
             </ContainerDescLink>
           
                <Button className='btn-about' textBtn = 'About Us'> </Button>
              
        </ContentText>

      </Container>
    </Section>
    
    <Section className="menu" id="menu" >
      <Container>
         <Title title={<><span className='red'>Menu</span> that <span className='yello'>always</span> make you fall in <span className='red'>love</span> </>} />
      <ContainerButtons categories={categories}>
          {categories.map((category) => (
            <SecondButton key={category} text={category} onClick={() => setSelectedCategory(category)} />
          ))}
      </ContainerButtons>
      <Menu selectedCategory={selectedCategory} /> 
      </Container>
     
    </Section>

    <Section className="download-app" id="download-app" >
    <Container>
         <ContentText className="content-text">
         <Title title={<>It’s Now <span className='red'>More Easy </span> to <span className='yello'>Order</span> by Our Mobile <span className='red'>App</span></>}
               text={"All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery"} 
               />
        <ContainerDescLink>
          <DescripLinks image={"/assets/img/Google.png"} desc={"Google Play"} smalltext={"Get it on"}/>
          <DescripLinks image={"/assets/img/Apple.png"} desc={"App Store"} smalltext={"Download on the"}/>
        </ContainerDescLink>

      </ContentText>

      <div className='container-image'  >
       
           <div className="cricle">
             <img src='assets/img/circleHalf.png'   />
           </div>
           <div className="chef-bg">
           <img className='background' src='assets/img/background2.png' />
           <img className='chef' src='assets/img/cheftwo.png'   />
           </div>
            <div className="palets">
        <img className='image1' src='/assets/img/image1.png' />
        <img className='image2' src='/assets/img/image2.png' />
        <img className='image3' src='/assets/img/image3.png' />
        <img className='image4' src='/assets/img/image4.png' />
      </div>
      <div className="pounts">
        <img src='/assets/img/points.png' />
      </div>
      <div className="seek">
        <img className='plants' src='/assets/img/SeekPng2.png' />
      </div>
      </div>
     
    </Container>
    </Section>
   </Main>
   <Footer> 
     <Container>
          <div className="one">
           <FooterInfo title={"Foodhut"} text={<>Lorem ipsum dolor sit amet,   consectetur adipiscing elit, sed do   eiusmod tempor</>} 
            icons ={[{
              href : "#" ,
              src :"/assets/img/Facebook.png"
            },
              {
              href : "#" ,
              src :"/assets/img/instagram.png"
            },
              {
              href : "#" ,
              src :"/assets/img/Twitter.png"
            }
            ]}
            
            />
     <div className="container-links">
          <FooterLinks title={"About Us"} 
    
    links = {[
  {
    text:"About Us",
    href:"#"
  },
  {
    text:"Service Us",
    href:"#"
  },
  {
    text:"Contact",
    href:"#"
  },
  {
    text:"Company",
    href:"#"
  },

          ]}
          />

<FooterLinks title={"Company"} 
   
    links = {[
  {
    href:"#" ,
    text:"Partnership",
    
  },
  {
    text:"Terms of Use",
    href:"#"
  },
  {
    text:"Privacy",
    href:"#"
  },
  {
    text:"Sitemap",
    href:"#"
  },

          ]}
          />
     </div>

 
 <FooterSubscribe title={"Get in touch"} text={<> Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor</>}
    /> 
     </div>
        <div className="two"><p>Copyright © 2022 Foodhut.</p></div>
     </Container>
   </Footer> 
  </div>
  )
}

export default App
