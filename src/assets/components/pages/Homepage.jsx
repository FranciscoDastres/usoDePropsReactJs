import Footer from "../common/Footer";
import Header from "../common/Header";
import MyCard from "../common/MyCard";
import { Container, Row, Col } from 'react-bootstrap'
import "../../css/homepage.css"
import perro1 from "../../img/perrito1.jpg"
import perro2 from "../../img/perrito2.jpg"
import perro3 from "../../img/perrito3.jpg"
import perro4 from "../../img/perrito4.jpg"
import "../../css/tags.css"
const Homepage = () => {
  return (
    <>

      <main className="galeria">
        <Container>
          <Header titulo="Adopta Un perrito" />
          <Row className="g-3 justify-content-center">
            <Col xs={12} md={6} lg={3} className="mb-3">
              <MyCard
                image={perro1}
                name="Bartolo"
                desc="Perrito Bartolo muy bello y cariñoso"
                tag="perro fiel"
                colorTag="custom-tag-red"
              />
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3">
              <MyCard
                image={perro2}
                name="Bartolo"
                desc="Perrito Bartolo muy bello y cariñoso"
                tag="perro guardian"
                colorTag="custom-tag-blue"
              />
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3">
              <MyCard
                image={perro3}
                name="Bartolo"
                desc="Perrito Bartolo muy bello y cariñoso"
                tag="perro amoroso"
                colorTag="custom-tag-green"
              />
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3">
              <MyCard
                image={perro4}
                name="Bartolo"
                desc="Perrito Bartolo muy bello y cariñoso"
                tag="perro amistoso"
                colorTag="custom-tag-peru"
              />
            </Col>
          </Row>
          <footer>
            <Footer
              footer="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades
              y tamaños. todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Aporta un perro y brindale una segunda oportunidad.
              Encuentra a tu compañero peludo para siempre"/>
          </footer>
        </Container>
      </main>

    </>
  )
}
export default Homepage;
