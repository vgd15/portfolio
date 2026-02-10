import React from "react";
import "./projects.css";
import lpMobileFirst from "../../../img/lb-mobile-firts.png";
import ApiLocal from "../../../img/ApiLocal.png";
import RequisicoesJS from "../../../img/RequisicoesJS.png";
import ApiRestExpressMongoDB from "../../../img/ApiRestExpressMongoDB.png";
import adaLovelace from "../../../img/adalovelace.png";
import mulheresTech from "../../../img/mulheresTech.png";
import curriculoSimples from "../../../img/curriculo-simples.png";
import BlogHectar from "../../../img/BlogHectar.png";
import BlogRipz from "../../../img/BlogRipz.png";
import BlogDafyStore from "../../../img/BlogDafyStore.png";
import VoltVitoria from "../../../img/VoltVitoria.png";
import LanSayDay from "../../../img/LanSanDay.png";
import VicioDiPrata from "../../../img/VicioDiPrata.png";
import ConstrutorURL from "../../../img/ContrutorURL.png";
import CalculadoraNutri from "../../../img/CalculadoraNutri.png";
import DomLocalStorage from "../../../img/DomLocalStorage.png";
import PaginaDinamica from "../../../img/PaginaDinamica.png";
import MetodosArray from "../../../img/MetodosArray.png";
import ValidandoFormularios from "../../../img/ValidandoFormularios.png";
import Valem from "../../../img/valem.png";
import SantaCruz from "../../../img/santa-cruz.png";
import VilaNova from "../../../img/vila-nova.png";
import TheBlushLab from "../../../img/the-blush-lab.png";
import ClinicaDosCapacetes from "../../../img/clinica-dos-capacetes.png";
import RDX from "../../../img/rdx.png";
import GHCI from "../../../img/GHCI.png";
import Stog from "../../../img/stog.png";
import NatusFarma from "../../../img/natus.png";
import AbcEmpilhadeiras from "../../../img/abc2.png";
import Celdom from "../../../img/celdom.png";
import Atlant from "../../../img/atlant.png";
import Paletrans from "../../../img/paletrans.png";

function Projects() {
  return (
    <section className="projects">
      <h2 className="title-projects">
        <i className="fa-solid fa-square"></i> Projects
      </h2>
      <p className="pb-5">
        Below I present some relevant projects developed professionally, through courses, or authored by me.
      </p>

      <div className="card-box d-flex justify-content-center align-items-center flex-column">
        <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4 ">
          <h3 className="text-center w-100">Professional Projects</h3>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Paletrans</h3>
                <p>
                  Project developed using WordPress CMS with HTML, CSS, PHP, jQuery, Bootstrap, a custom theme,
                  and custom plugins created exclusively for this project.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={Paletrans} alt="Paletrans project" className="img-projeto" />
                <a href="https://paletrans.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Celdom</h3>
                <p>
                  Project developed in pairs on the VTEX IO platform using React and Bootstrap, with custom components
                  created exclusively for this project.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={Celdom} alt="Celdom project" className="img-projeto" />
                <a href="https://www.celdom.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Atlant Store</h3>
                <p>Project developed on the Magento platform using XML markup language along with HTML, CSS, JS, and Bootstrap.</p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={Atlant} alt="Atlant Store project" className="img-projeto" />
                <a href="https://www.atlantstore.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">ABC Empilhadeiras</h3>
                <p>
                  Using technologies such as PHP, jQuery, and Bootstrap, we built a robust and functional solution on the WordPress platform.
                  Developed with a custom theme and clean code, with Ajax integration for dynamic filters, ensuring an efficient and modern experience.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={AbcEmpilhadeiras} alt="ABC Empilhadeiras project" className="img-projeto" />
                <a href="https://abcempilhadeiras.com.br" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Stog Website</h3>
                <p>
                  This project was developed for the company Stog using WordPress. With technologies such as PHP, JavaScript, and Bootstrap,
                  we created a robust and functional solution. I developed it with a custom theme and clean code, with Ajax integration for dynamic filters,
                  ensuring an efficient and modern experience.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={Stog} alt="Stog project" className="img-projeto" />
                <a href="https://stog.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Valem Website and Blog</h3>
                <p>
                  This project was developed for the company Tecfag using the WordPress platform. Several languages, libraries, and plugins were used,
                  including PHP, JavaScript, Bootstrap, Owl Carousel, and Flexbox, to create a robust and functional solution.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={Valem} alt="Valem project" className="img-projeto" />
                <a href="https://valempack.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Natus Farma Blog</h3>
                <p>
                  This project was developed for the company Natus Farma, specialized in the pharmacy sector, using the WordPress platform.
                  Several languages, libraries, and plugins were used, including PHP, JavaScript, Bootstrap, Swiper Carousel, and Flexbox,
                  to create a robust and functional solution.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={NatusFarma} alt="Natus Farma project" className="img-projeto" />
                <a href="https://blog.natusfarma.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Hectar Blog</h3>
                <p>
                  This project was developed for the company Hectar using a pre-existing template on the WordPress platform.
                  Several languages, libraries, and plugins were used, including PHP, JavaScript, Bootstrap, Owl Carousel, and Flexbox,
                  to create a robust and functional solution.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={BlogHectar} alt="Hectar project" className="img-projeto" />
                <a href="https://blog.hectar.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Ripz Blog</h3>
                <p>
                  This project was developed for the company Ripz using a pre-existing template on the WordPress platform.
                  Several languages, libraries, and plugins were used, including PHP, JavaScript, Bootstrap, Owl Carousel, and Flexbox,
                  to create a robust and functional solution.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={BlogRipz} alt="Ripz project" className="img-projeto" />
                <a href="https://blog.ripz.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">DafyStore Blog</h3>
                <p>
                  This project was developed for the company DafyStore using a pre-existing template on the WordPress platform.
                  Several languages, libraries, and plugins were used, including PHP, JavaScript, Bootstrap, Owl Carousel, and Flexbox,
                  to create a robust and functional solution.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={BlogDafyStore} alt="DafyStore project" className="img-projeto" />
                <a href="https://blog.dafystore.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">RDX</h3>
                <p>
                  This project is a landing page developed for the company RDX using the WordPress platform. Several languages, libraries, and plugins
                  were used, including PHP, JavaScript, Bootstrap, Owl Carousel, and Flexbox, to create a robust and functional solution.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={RDX} alt="RDX project" className="img-projeto" />
                <a href="https://rdxlog.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Esporte Clube Vitória Team</h3>
                <p>
                  This project was developed on the Linx platform based on an existing template. The Liquid language was used along with HTML, CSS, and JS.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={VoltVitoria} alt="Esporte Clube Vitória project" className="img-projeto" />
                <a href="https://www.lojasounego.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Santa Cruz Team</h3>
                <p>
                  This project was developed on the Linx platform based on an existing template. The Liquid language was used along with HTML, CSS, and JS.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={SantaCruz} alt="Santa Cruz project" className="img-projeto" />
                <a href="https://www.lojadosantacruz.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Vila Nova Team</h3>
                <p>
                  This project was developed on the Linx platform based on an existing template. The Liquid language was used along with HTML, CSS, and JS.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={VilaNova} alt="Vila Nova project" className="img-projeto" />
                <a href="https://www.lojadovila.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">GHC Imports</h3>
                <p>
                  This project was developed on the Linx platform based on an existing template, but with some customizations.
                  The Liquid language was used along with HTML, CSS, and JS.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={GHCI} alt="GHC Imports project" className="img-projeto" />
                <a href="https://www.ehomebrasil.com/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Clínica dos Capacetes</h3>
                <p>
                  This project was developed on the Linx platform based on an existing template. The Liquid language was used along with HTML, CSS, and JS.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={ClinicaDosCapacetes} alt="Clínica dos Capacetes project" className="img-projeto" />
                <a href="https://www.clinicadoscapacetes.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Lan San Day</h3>
                <p>
                  This project was developed in a group on the Linx platform based on an existing template. The Liquid language was used along with HTML, CSS, and JS.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={LanSayDay} alt="Lan San Day project" className="img-projeto" />
                <a href="https://www.lasanday.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Vício DiPrata</h3>
                <p>This project was developed on the Linx platform based on an existing template. The Liquid language was used along with HTML, CSS, JS, and Bootstrap.</p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={VicioDiPrata} alt="Vício DiPrata project" className="img-projeto" />
                <a href="https://www.viciodiprata.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">The Blush Lab</h3>
                <p>This project was developed on the Linx platform based on an existing template. The Liquid language was used along with HTML, CSS, JS, and Bootstrap.</p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={TheBlushLab} alt="The Blush Lab project" className="img-projeto" />
                <a href="https://www.theblushlab.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">URL Builder</h3>
                <p>
                  This project was built for the marketing team at Nairuz Marketing Digital e Tecnologia to standardize the URL creation process for campaigns.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={ConstrutorURL} alt="URL Builder project" className="img-projeto" />
                <a href="https://construtor-de-url.nztecnologia.com.br/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Course Projects */}
        <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4 ">
          <h3>Course Projects</h3>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">LP Mobile First</h3>
                <p>
                  This project was developed through a course in which we followed the premise of developing the mobile screen first.
                  In this project, the Swiper JS library was used to build carousels, as well as Flexbox and Media Queries to make it responsive.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={lpMobileFirst} alt="LP Mobile First project" className="img-projeto" />
                <a href="https://lp-mobile-first.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Ada Lovelace Biography</h3>
                <p>This one-page website was developed through the Programaria course, using basic skills such as HTML, CSS, and JS.</p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={adaLovelace} alt="Ada Lovelace project" className="img-projeto" />
                <a href="https://vgd15.github.io/Site-Ada-Lovelace//" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Women in Tech</h3>
                <p>
                  This is a back-end project using Node.js, Express, and MongoDB. The project also uses CORS for access control,
                  dotenv for environment variable management, and uuid for generating unique identifiers.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={mulheresTech} alt="Women in Tech project" className="img-projeto" />
                <a href="https://front-do-projeto-back-end.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Consuming a Local API</h3>
                <p>This is a simple project developed through an Alura course, where we learned how to create and consume a local API.</p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={ApiLocal} alt="Local API project" className="img-projeto" />
                <a href="https://github.com/vgd15/Consumindo-API-local" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Creating a REST API with Express and MongoDB</h3>
                <p>This project uses Node.js to create a REST API with Express and MongoDB.</p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={ApiRestExpressMongoDB} alt="Express and MongoDB API project" className="img-projeto" />
                <a href="https://github.com/vgd15/Criando-Api-Rest-com-Express-e-MongoDB" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Making Requests with JS</h3>
                <p>
                  In this project, requests are made using JavaScript to consume a local API, using asynchronous functions such as fetch,
                  and loops to process the returned data.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={RequisicoesJS} alt="JavaScript requests project" className="img-projeto" />
                <a href="https://github.com/vgd15/Criando-requisi-es-com-JS" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Manipulating the DOM and LocalStorage</h3>
                <p>
                  This project focuses on learning how to manipulate the DOM and use LocalStorage with JavaScript, creating dynamic and interactive pages
                  that store data in the browser.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={DomLocalStorage} alt="DOM and LocalStorage project" className="img-projeto" />
                <a href="https://manipulando-dom-e-local-storage.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Array Methods</h3>
                <p>
                  This project focuses on practicing JavaScript array methods such as filter, forEach, map, reduce, and sort, showing how to use them to
                  manipulate and transform data effectively.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={MetodosArray} alt="Array methods project" className="img-projeto" />
                <a href="https://metodos-de-array-zeta.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Form Validation</h3>
                <p>
                  Project focused on validating essential forms such as email, CPF, age, date of birth, RG, and name. The goal is to ensure correct
                  formatting and authenticity of the entered data, providing security and reliability when collecting user information.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={ValidandoFormularios} alt="Form validation project" className="img-projeto" />
                <a href="https://validando-formularios-seven.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Resume Template</h3>
                <p>This is a simple project developed through an Alura course, where we learned how to create a simple portfolio. In this course, I used HTML and CSS skills.</p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={curriculoSimples} alt="Resume template project" className="img-projeto" />
                <a href="https://treinando-css-e-html-com-responsividade.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Dynamic Page</h3>
                <p>
                  In this project, techniques are practiced to make the page more dynamic through JavaScript functions and sound interactions,
                  improving the user experience with interactive features.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={PaginaDinamica} alt="Dynamic page project" className="img-projeto" />
                <a href="https://criando-p-ginas-din-micas-em-js-jn6c.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4 ">
          <h3>Personal Projects</h3>

          <div className="card">
            <div className="d-flex flex-row row">
              <div className="col-md-5">
                <h3 className="card-title">Nutrition Calculator</h3>
                <p>
                  Project that consumes an API which returns the nutritional values of foods. It was developed in React using Hooks, desktop only.
                </p>
              </div>
              <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                <img src={CalculadoraNutri} alt="Nutrition calculator project" className="img-projeto" />
                <a href="https://projeto-final-bees-three.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="overlay-img"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
