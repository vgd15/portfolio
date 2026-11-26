import React, { useEffect, useState } from "react";
import "./projects.css";

function ProjectsNew() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/projetos`)
      .then((res) => res.json())
      .then((dados) => {
        // 🚀 AQUI ESTÁ A ORDENAÇÃO
        // O .sort() ordena o array. O b._id > a._id inverte a ordem (maior para o menor)
        const dadosOrdenados = dados.sort((a, b) => b._id.localeCompare(a._id));
        
        setProjetos(dadosOrdenados);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
        setLoading(false);
      });
  }, []);

  // Função para filtrar por categoria
  const filtrarPorCategoria = (categoria) => {
    return projetos.filter((p) => p.categoria === categoria);
  };

  if (loading) return <p>Carregando projetos...</p>;

  return (
    <section className="projects">
      <h2 className="title-projects">
        <i className="fa-solid fa-square"></i> Projects
      </h2>
      <p className="pb-5">
        Below I present some relevant projects developed professionally by me.
      </p>

      <div className="card-box d-flex justify-content-center align-items-center flex-column">
        
        {/* Professional Projects */}
        <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4">
          <h3 className="text-center w-100">Professional Projects</h3>
          {filtrarPorCategoria("profissional").map((proj) => (
            <div className="card" key={proj._id}>
              <div className="d-flex flex-row row">
                <div className="col-md-5">
                  <h3 className="card-title">{proj.titulo}</h3>
                  <p>{proj.descricao}</p>
                </div>
                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                  {/* A imagem agora é buscada direto do banco via ID */}
                  <img 
                    src={`${process.env.REACT_APP_API_URL}/api/projetos/${proj._id}/imagem`} 
                    alt={proj.titulo} 
                    className="img-projeto" 
                  />
                  <a href={proj.link} target="_blank" rel="noreferrer">
                    <div className="overlay-img"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Projects
        <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4">
          <h3>Course Projects</h3>
          {filtrarPorCategoria("curso").map((proj) => (
            <div className="card" key={proj._id}>
              <div className="d-flex flex-row row">
                <div className="col-md-5">
                  <h3 className="card-title">{proj.titulo}</h3>
                  <p>{proj.descricao}</p>
                </div>
                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                  <img 
                    src={`${process.env.REACT_APP_API_URL}/api/projetos/${proj._id}/imagem`} 
                    alt={proj.titulo} 
                    className="img-projeto" 
                  />
                  <a href={proj.link} target="_blank" rel="noreferrer">
                    <div className="overlay-img"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
*/}
        {/* Personal Projects 
        <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4">
          <h3>Personal Projects</h3>
          {filtrarPorCategoria("pessoal").map((proj) => (
            <div className="card" key={proj._id}>
              <div className="d-flex flex-row row">
                <div className="col-md-5">
                  <h3 className="card-title">{proj.titulo}</h3>
                  <p>{proj.descricao}</p>
                </div>
                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                  <img 
                    src={`${process.env.REACT_APP_API_URL}/api/projetos/${proj._id}/imagem`} 
                    alt={proj.titulo} 
                    className="img-projeto" 
                  />
                  <a href={proj.link} target="_blank" rel="noreferrer">
                    <div className="overlay-img"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
*/}
      </div>
    </section>
  );
}

export default ProjectsNew;