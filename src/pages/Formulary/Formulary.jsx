import React, { useState } from 'react';

const OPCOES_CONTATO = [
  'Doação',
  'Voluntariado',
  'Parceria',
  'Dúvidas'
];

// Estilos básicos (sem simulação de hover)
const baseStyles = {
  container: { padding: '20px', maxWidth: '500px', margin: '30px auto', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  campo: { display: 'flex', flexDirection: 'column' },
  label: { marginBottom: '5px', fontWeight: 'bold', color: '#333' },
  input: { padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' },
  textarea: { padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', resize: 'vertical' },
  botao: { padding: '12px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' },
  sucesso: { color: 'green', backgroundColor: '#e6ffe6', padding: '10px', borderRadius: '4px', border: '1px solid green' },
  erro: { color: 'red', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '4px', border: '1px solid red' },
  dropdownWrapper: { position: 'relative' },
  dropdownDisplay: { padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', backgroundColor: '#f9f9f9', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  dropdownArrow: { marginLeft: '10px', fontWeight: 'bold', transition: 'transform 0.2s' },
  dropdownOptions: {
    position: 'absolute', top: '100%', left: '0', right: '0', zIndex: 100, border: '1px solid #ddd', borderTop: 'none', backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0 0 4px 4px', maxHeight: '200px', overflowY: 'auto'
  },
  dropdownOptionItem: {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
    // O estilo base para o item
    backgroundColor: 'white', 
    transition: 'background-color 0.2s'
  },
};

// Componente principal
const FormularioInscricao = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    tipoContato: 'Selecione uma opção',
    mensagem: '',
  });

  const [submetido, setSubmetido] = useState(false);
  const [erro, setErro] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null); // Novo estado para simular o hover

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    if (erro) setErro(false);
  };

  const handleSelectContato = (opcao) => {
    setFormData(prevData => ({ ...prevData, tipoContato: opcao }));
    setDropdownAberto(false);
    setErro(false); // Limpa erro se a opção for selecionada
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação
    if (!formData.nomeCompleto || !formData.email || formData.tipoContato === 'Selecione uma opção') {
      setErro(true);
      setSubmetido(false);
      return;
    }

    console.log('Dados do Formulário para Inscrição:', formData);

    // Simula sucesso
    setSubmetido(true);
    setErro(false);
  };

  return (
    <div style={baseStyles.container}>
      <h2>Formulário de Inscrição</h2>

      {submetido && !erro && (
        <p style={baseStyles.sucesso}>
          ✅ Inscrição enviada com sucesso!
        </p>
      )}

      {erro && (
        <p style={baseStyles.erro}>
          ⚠️ Por favor, preencha todos os campos obrigatórios.
        </p>
      )}

      <form onSubmit={handleSubmit} style={baseStyles.form}>
        {/* Nome Completo */}
        <div style={baseStyles.campo}>
          <label htmlFor="nomeCompleto" style={baseStyles.label}>Nome Completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
            style={baseStyles.input}
            placeholder='Nome Completo'
          />
        </div>

        {/* Email */}
        <div style={baseStyles.campo}>
          <label htmlFor="email" style={baseStyles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={baseStyles.input}
          />
        </div>

        {/* --- Campo: Tipo de Contato (Customizado) --- */}
        <div style={baseStyles.campo}>
          <label style={baseStyles.label}>Tipo de Contato:</label>
          <div style={baseStyles.dropdownWrapper}>
            {/* Input/Display do Dropdown */}
            <div
              style={baseStyles.dropdownDisplay}
              onClick={() => setDropdownAberto(!dropdownAberto)}
            >
              <span style={{ flexGrow: 1 }}>{formData.tipoContato}</span>
              {/* O "v" como seta para baixo */}
              <span style={baseStyles.dropdownArrow}>
                {dropdownAberto ? 'ʌ' : 'v'}
              </span>
            </div>

            {/* Lista de Opções (Dropdown) */}
            {dropdownAberto && (
              <div style={baseStyles.dropdownOptions}>
                {OPCOES_CONTATO.map((opcao) => (
                  <div
                    key={opcao}
                    style={{
                      ...baseStyles.dropdownOptionItem,
                      // Aplica o estilo de hover se a opção estiver sendo sobreposta
                      backgroundColor: hoveredOption === opcao ? '#f0f0f0' : 'white',
                    }}
                    onClick={() => handleSelectContato(opcao)}
                    // Simulação do :hover
                    onMouseEnter={() => setHoveredOption(opcao)}
                    onMouseLeave={() => setHoveredOption(null)}
                  >
                    {opcao}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Campo: Mensagem */}
        <div style={baseStyles.campo}>
          <label htmlFor="mensagem" style={baseStyles.label}>Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="4"
            style={baseStyles.textarea}
          />
        </div>

        {/* Botão de Envio */}
        <button type="submit" style={baseStyles.botao}>
          Enviar Inscrição
        </button>
      </form>
    </div>
  );
};

export default FormularioInscricao;