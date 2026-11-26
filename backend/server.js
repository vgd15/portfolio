const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configura o Multer para memória RAM
const upload = multer({ storage: multer.memoryStorage() });

// Conectando ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000 // Desiste após 5 segundos e mostra o erro
})
  .then(() => console.log('🔥 Conectado ao MongoDB com sucesso!'))
  .catch((err) => console.error('❌ Erro ao conectar no MongoDB:', err));

// O Modelo (com Buffer)
const Projeto = mongoose.model('Projeto', { 
    titulo: String, 
    descricao: String,
    imagem: { data: Buffer, contentType: String },
    link: String,
    categoria: String
});

// Rota de POST usando o Multer
app.post('/api/projetos', upload.single('imagem'), async (req, res) => {
    try {

        console.log("Corpo da requisição (textos):", req.body);
        console.log("Arquivo recebido:", req.file);
        
        const novoProjeto = new Projeto({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            link: req.body.link,
            categoria: req.body.categoria,
            imagem: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });
        await novoProjeto.save();
        res.status(201).json({ mensagem: 'Salvo!', projeto: novoProjeto });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao salvar' });
    }
});

// Rota para a imagem aparecer no front (passando o ID)
app.get('/api/projetos/:id/imagem', async (req, res) => {
    try {
        const projeto = await Projeto.findById(req.params.id);
        if (!projeto || !projeto.imagem || !projeto.imagem.data) {
            return res.status(404).send('Imagem não encontrada');
        }
        res.set('Content-Type', projeto.imagem.contentType);
        res.send(projeto.imagem.data);
    } catch (error) {
        res.status(500).send('Erro ao buscar imagem');
    }
});

// Rota que lista todos (lembre-se de omitir o buffer da imagem para não pesar)
app.get('/api/projetos', async (req, res) => {
    try {
        const projetos = await Projeto.find().select('-imagem.data');
        res.json(projetos);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Rodando na porta ${PORT}`));