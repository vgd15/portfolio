import React, { useState } from "react";
import "./admin.css";

function Admin() {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    imagem: null, // Agora guardamos o arquivo real
    link: "",
    categoria: "profissional",
  });

  const [mensagem, setMensagem] = useState("");

  // Atualiza campos de texto
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Atualiza o campo de arquivo (imagem)
  const handleImageChange = (e) => {
    setFormData({ ...formData, imagem: e.target.files[0] });
  };

  // Envia os dados para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Usamos FormData para enviar texto e arquivo juntos
    const data = new FormData();
    data.append("titulo", formData.titulo);
    data.append("descricao", formData.descricao);
    data.append("link", formData.link);
    data.append("categoria", formData.categoria);
    
    if (formData.imagem) {
      data.append("imagem", formData.imagem);
    }

    try {
      // Usando a variável de ambiente
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/projetos`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setMensagem("✅ Projeto cadastrado com sucesso!");
        setFormData({
          titulo: "",
          descricao: "",
          imagem: null,
          link: "",
          categoria: "profissional",
        });
        e.target.reset(); // Limpa o input file visualmente
      } else {
        setMensagem("❌ Erro ao cadastrar o projeto.");
      }
    } catch (error) {
      setMensagem("❌ Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Cadastrar Novo Projeto</h2>

      {mensagem && <p className="mensagem">{mensagem}</p>}

      <form onSubmit={handleSubmit} className="admin-form">
        <label>Título do Projeto:</label>
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          required
        />

        <label>Descrição:</label>
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          required
        />

        <label>Imagem do Projeto:</label>
        <input
          type="file"
          name="imagem"
          accept="image/png, image/jpeg, image/webp"
          onChange={handleImageChange}
          required
        />

        <label>Link do Projeto:</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
        />

        <label>Categoria:</label>
        <select name="categoria" value={formData.categoria} onChange={handleChange}>
          <option value="profissional">Profissional</option>
          <option value="curso">Curso</option>
          <option value="pessoal">Pessoal</option>
        </select>

        <button type="submit">Cadastrar Projeto</button>
      </form>
    </div>
  );
}

export default Admin;