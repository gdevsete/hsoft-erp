import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import DatePicker from './DatePicker';
import './ClientForm.css';

const ClientForm = ({ client, onSave, onCancel }) => {
  const [activeTab, setActiveTab] = useState('telefone');
  const [formData, setFormData] = useState(client || {
    codigo: '96128',
    cpfCnpj: '11.882.936/0001-00',
    rgIe: '1233215648-8',
    isento: false,
    contribuinte: '1 - CONTRIBUINTE',
    regimeTributario: '2 - SIMPLES NACIONAL',
    status: 'INATIVO',
    razaoSocial: 'ALL NOTE - ASSISTENCIA TECNICA ESPECIALIZADA EIRELI',
    nomeFantasia: 'ALL NOTE ASSISTENCIA',
    vendedor: '8 - JOÃO GUIMARÃES - 507.528.990-10',
    tabelaPreco: '1 - VAREJO',
    grupo: '1 - VAREJO - TO',
    prospectador: '18 - CECILA MEIRELES - 788.320.567-03',
    transportadora: '151 - ATUAL CARGAS - 42.937.321/0004-15',
    rota: '4 - BRASIL NORTE / NORDESTE',
    cadastro: '01/10/2025',
    nascimentoCriacao: '10/10/2010',
    inscricaoMunicipal: '898496541894015',
    inscricaoSuframa: '123456789'
  });

  const [telefones, setTelefones] = useState([
    { telefone: '(63) 98765-4321', ramal: '06', tipo: 'WHATSAPP', departamento: 'FINANCEIRO', contato: 'JOÃO MARIA PEREIRA SILVA', observacao: 'LINHA DESATIVADA MOMENTANEAMENTE' },
    { telefone: '(11) 98877-6655', ramal: '06', tipo: 'WHATSAPP', departamento: 'FINANCEIRO', contato: 'JOÃO MARIA PEREIRA SILVA', observacao: 'LINHA DESATIVADA MOMENTANEAMENTE' },
    { telefone: '(11) 98877-6655', ramal: '06', tipo: 'WHATSAPP', departamento: 'FINANCEIRO', contato: 'JOÃO MARIA PEREIRA SILVA', observacao: 'LINHA DESATIVADA MOMENTANEAMENTE' }
  ]);

  const [enderecos, setEnderecos] = useState([
    { tipo: 'COMERCIAL', cep: '77006-070', endereco: 'QUADRA 106 NORTE, ALAMEDA 17', bairro: 'PLANO DIRETOR NORTE', numero: '09', complemento: 'ATRÁS DA JK, NO FUNDO DA LOTÉRICA', cidade: 'PALMAS - TO' },
    { tipo: 'COMERCIAL', cep: '77021033', endereco: '410 SUL, ALAMEDA 12 LT. 10 QD.8', bairro: 'PLANO DIRETOR SUL', numero: '1012', complemento: 'AO LADO DO SUPERMERCADO', cidade: 'PALMAS - TO' },
    { tipo: 'COMERCIAL', cep: '77021033', endereco: '410 SUL, ALAMEDA 12 LT. 10 QD.8', bairro: 'PLANO DIRETOR SUL', numero: '1012', complemento: 'AO LADO DO SUPERMERCADO', cidade: 'PALMAS - TO' }
  ]);

  const [emails, setEmails] = useState([
    { email: 'palmastec@palmastec.com', descricao: 'Email principal do setor administrativo', nota: true, boleto: false, venda: true, orcamento: true },
    { email: 'palmastec@palmastec.com', descricao: 'Email principal do setor administrativo', nota: true, boleto: true, venda: true, orcamento: true },
    { email: 'palmastec@palmastec.com', descricao: 'Email principal do setor administrativo', nota: true, boleto: true, venda: true, orcamento: true },
    { email: 'palmastec@palmastec.com', descricao: 'Email principal do setor administrativo', nota: false, boleto: false, venda: true, orcamento: true }
  ]);

  const [anexos] = useState([
    { nome: 'FICHA TÉCNICA MR60X V4.1.3', tipo: 'PDF', tamanho: '527 KB' },
    { nome: 'FICHA TÉCNICA MR60X V4.1.3', tipo: 'PDF', tamanho: '527 KB' },
    { nome: 'FICHA TÉCNICA MR60X V4.1.3', tipo: 'PDF', tamanho: '527 KB' },
    { nome: 'FICHA TÉCNICA MR60X V4.1.3', tipo: 'PDF', tamanho: '527 KB' }
  ]);

  const [newTelefone, setNewTelefone] = useState({
    telefone: '',
    ramal: '',
    tipo: 'WHATSAPP',
    departamento: 'FINANCEIRO',
    contato: '',
    observacao: ''
  });

  const [newEndereco, setNewEndereco] = useState({
    tipo: '1 - COMERCIAL',
    cep: '',
    endereco: '',
    bairro: '',
    numero: '',
    complemento: '',
    cidade: 'PALMAS - TO'
  });

  const [newEmail, setNewEmail] = useState({
    email: '',
    descricao: 'E-MAIL PRINCIPAL',
    nota: false,
    boleto: false,
    venda: false,
    orcamento: false,
    ordemServico: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddTelefone = () => {
    if (newTelefone.telefone) {
      setTelefones([...telefones, newTelefone]);
      setNewTelefone({
        telefone: '',
        ramal: '',
        tipo: 'WHATSAPP',
        departamento: 'FINANCEIRO',
        contato: '',
        observacao: ''
      });
    }
  };

  const handleAddEndereco = () => {
    if (newEndereco.cep && newEndereco.endereco) {
      setEnderecos([...enderecos, newEndereco]);
      setNewEndereco({
        tipo: '1 - COMERCIAL',
        cep: '',
        endereco: '',
        bairro: '',
        numero: '',
        complemento: '',
        cidade: 'PALMAS - TO'
      });
    }
  };

  const handleAddEmail = () => {
    if (newEmail.email) {
      setEmails([...emails, newEmail]);
      setNewEmail({
        email: '',
        descricao: 'E-MAIL PRINCIPAL',
        nota: false,
        boleto: false,
        venda: false,
        orcamento: false,
        ordemServico: false
      });
    }
  };

  const handleSubmit = () => {
    onSave({ ...formData, telefones, enderecos, emails });
  };

  return (
    <div className="client-form-container">
      <div className="form-header">
        <h1 className="form-title">CADASTRAR CLIENTE</h1>
        <div className="form-actions">
          <button className="btn-cancel" onClick={onCancel}>✕ Cancelar</button>
          <button className="btn-save" onClick={handleSubmit}>✓ Salvar</button>
        </div>
      </div>

      <div className="form-content">
        <div className="form-section">
          <div className="form-row">
            <div className="form-field">
              <label>Código</label>
              <input 
                type="text" 
                name="codigo"
                value={formData.codigo}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>CPF / CNPJ</label>
              <InputMask 
                mask="99.999.999/9999-99"
                name="cpfCnpj"
                value={formData.cpfCnpj}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>RG / IE</label>
              <input 
                type="text" 
                name="rgIe"
                value={formData.rgIe}
                onChange={handleChange}
              />
            </div>
            <div className="form-field checkbox-field">
              <label>
                <input 
                  type="checkbox" 
                  name="isento"
                  checked={formData.isento}
                  onChange={handleChange}
                />
                Isento
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Contribuinte</label>
              <select name="contribuinte" value={formData.contribuinte} onChange={handleChange}>
                <option>1 - CONTRIBUINTE</option>
                <option>2 - NÃO CONTRIBUINTE</option>
              </select>
            </div>
            <div className="form-field">
              <label>Regime Tributário</label>
              <select name="regimeTributario" value={formData.regimeTributario} onChange={handleChange}>
                <option>2 - SIMPLES NACIONAL</option>
                <option>1 - MEI</option>
                <option>3 - LUCRO PRESUMIDO</option>
              </select>
            </div>
            <div className="form-field">
              <label>Status</label>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option>INATIVO</option>
                <option>ATIVO</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field full-width">
              <label>Nome / Razão Social</label>
              <input 
                type="text" 
                name="razaoSocial"
                value={formData.razaoSocial}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field full-width">
              <label>Nome Social / Nome Fantasia</label>
              <input 
                type="text" 
                name="nomeFantasia"
                value={formData.nomeFantasia}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <button 
              className={`tab ${activeTab === 'endereco' ? 'active' : ''}`}
              onClick={() => setActiveTab('endereco')}
            >
              Endereço
            </button>
            <button 
              className={`tab ${activeTab === 'telefone' ? 'active' : ''}`}
              onClick={() => setActiveTab('telefone')}
            >
              Telefone
            </button>
            <button 
              className={`tab ${activeTab === 'email' ? 'active' : ''}`}
              onClick={() => setActiveTab('email')}
            >
              E-mail
            </button>
            <button 
              className={`tab ${activeTab === 'complemento' ? 'active' : ''}`}
              onClick={() => setActiveTab('complemento')}
            >
              Complemento
            </button>
            <button 
              className={`tab ${activeTab === 'financeiro' ? 'active' : ''}`}
              onClick={() => setActiveTab('financeiro')}
            >
              Financeiro
            </button>
            <button 
              className={`tab ${activeTab === 'anexos' ? 'active' : ''}`}
              onClick={() => setActiveTab('anexos')}
            >
              Anexos
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'telefone' && (
              <div className="telefone-tab">
                <div className="add-section">
                  <div className="form-row">
                    <div className="form-field">
                      <label>Telefone</label>
                      <InputMask
                        mask="(99) 99999-9999"
                        value={newTelefone.telefone}
                        onChange={(e) => setNewTelefone({...newTelefone, telefone: e.target.value})}
                      />
                    </div>
                    <div className="form-field small">
                      <label>Ramal</label>
                      <input
                        type="text"
                        value={newTelefone.ramal}
                        onChange={(e) => setNewTelefone({...newTelefone, ramal: e.target.value})}
                      />
                    </div>
                    <div className="form-field">
                      <label>Tipo</label>
                      <select value={newTelefone.tipo} onChange={(e) => setNewTelefone({...newTelefone, tipo: e.target.value})}>
                        <option>WHATSAPP</option>
                        <option>CELULAR</option>
                        <option>FIXO</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>Departamento</label>
                      <select value={newTelefone.departamento} onChange={(e) => setNewTelefone({...newTelefone, departamento: e.target.value})}>
                        <option>FINANCEIRO</option>
                        <option>VENDAS</option>
                        <option>COMPRAS</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Contato</label>
                      <input
                        type="text"
                        value={newTelefone.contato}
                        onChange={(e) => setNewTelefone({...newTelefone, contato: e.target.value})}
                      />
                    </div>
                    <div className="form-field">
                      <label>Observação</label>
                      <input
                        type="text"
                        value={newTelefone.observacao}
                        onChange={(e) => setNewTelefone({...newTelefone, observacao: e.target.value})}
                      />
                    </div>
                  </div>
                  <button className="btn-adicionar" onClick={handleAddTelefone}>Adicionar</button>
                </div>

                <div className="table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Telefone</th>
                        <th>Ramal</th>
                        <th>Tipo</th>
                        <th>Departamento</th>
                        <th>Contato</th>
                        <th>Observação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {telefones.map((tel, index) => (
                        <tr key={index}>
                          <td>{tel.telefone}</td>
                          <td>{tel.ramal}</td>
                          <td>{tel.tipo}</td>
                          <td>{tel.departamento}</td>
                          <td>{tel.contato}</td>
                          <td>
                            <div className="table-actions">
                              {tel.observacao}
                              <div className="action-icons">
                                <button className="icon-btn" title="Editar">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                                  </svg>
                                </button>
                                <button className="icon-btn" title="Excluir">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'endereco' && (
              <div className="endereco-tab">
                <div className="add-section">
                  <div className="form-row">
                    <div className="form-field small">
                      <label>CEP</label>
                      <InputMask
                        mask="99999-999"
                        value={newEndereco.cep}
                        onChange={(e) => setNewEndereco({...newEndereco, cep: e.target.value})}
                      />
                    </div>
                    <div className="form-field flex-2">
                      <label>Endereço</label>
                      <input
                        type="text"
                        value={newEndereco.endereco}
                        onChange={(e) => setNewEndereco({...newEndereco, endereco: e.target.value})}
                      />
                    </div>
                    <div className="form-field">
                      <label>Bairro</label>
                      <input
                        type="text"
                        value={newEndereco.bairro}
                        onChange={(e) => setNewEndereco({...newEndereco, bairro: e.target.value})}
                      />
                    </div>
                    <div className="form-field small">
                      <label>Número</label>
                      <input
                        type="text"
                        value={newEndereco.numero}
                        onChange={(e) => setNewEndereco({...newEndereco, numero: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field flex-2">
                      <label>Complemento</label>
                      <input
                        type="text"
                        value={newEndereco.complemento}
                        onChange={(e) => setNewEndereco({...newEndereco, complemento: e.target.value})}
                      />
                    </div>
                    <div className="form-field">
                      <label>Cidade - UF</label>
                      <select value={newEndereco.cidade} onChange={(e) => setNewEndereco({...newEndereco, cidade: e.target.value})}>
                        <option>PALMAS - TO</option>
                        <option>SÃO PAULO - SP</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>Tipo</label>
                      <select value={newEndereco.tipo} onChange={(e) => setNewEndereco({...newEndereco, tipo: e.target.value})}>
                        <option>1 - COMERCIAL</option>
                        <option>2 - RESIDENCIAL</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn-adicionar" onClick={handleAddEndereco}>Adicionar</button>
                </div>

                <div className="table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Tipo</th>
                        <th>CEP</th>
                        <th>Endereço</th>
                        <th>Bairro</th>
                        <th>Número</th>
                        <th>Complemento</th>
                        <th>Cidade - UF</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enderecos.map((end, index) => (
                        <tr key={index}>
                          <td>{end.tipo}</td>
                          <td>{end.cep}</td>
                          <td>{end.endereco}</td>
                          <td>{end.bairro}</td>
                          <td>{end.numero}</td>
                          <td>
                            <div className="table-actions">
                              {end.complemento}
                              <div className="action-icons">
                                <button className="icon-btn" title="Editar">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                                  </svg>
                                </button>
                                <button className="icon-btn" title="Excluir">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>{end.cidade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'email' && (
              <div className="email-tab">
                <div className="add-section">
                  <div className="form-row">
                    <div className="form-field flex-2">
                      <label>E-mail</label>
                      <input
                        type="email"
                        value={newEmail.email}
                        onChange={(e) => setNewEmail({...newEmail, email: e.target.value})}
                      />
                    </div>
                    <div className="form-field flex-2">
                      <label>Descrição</label>
                      <input
                        type="text"
                        value={newEmail.descricao}
                        onChange={(e) => setNewEmail({...newEmail, descricao: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="form-row checkbox-row">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={newEmail.nota}
                        onChange={(e) => setNewEmail({...newEmail, nota: e.target.checked})}
                      />
                      Nota
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={newEmail.boleto}
                        onChange={(e) => setNewEmail({...newEmail, boleto: e.target.checked})}
                      />
                      Boleto
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={newEmail.venda}
                        onChange={(e) => setNewEmail({...newEmail, venda: e.target.checked})}
                      />
                      Venda
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={newEmail.orcamento}
                        onChange={(e) => setNewEmail({...newEmail, orcamento: e.target.checked})}
                      />
                      Orçamento
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={newEmail.ordemServico}
                        onChange={(e) => setNewEmail({...newEmail, ordemServico: e.target.checked})}
                      />
                      Ordem de Serviço
                    </label>
                  </div>
                  <button className="btn-adicionar" onClick={handleAddEmail}>Adicionar</button>
                </div>

                <div className="table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Descrição</th>
                        <th>Nota</th>
                        <th>Boleto</th>
                        <th>Venda</th>
                        <th>Orçamento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emails.map((email, index) => (
                        <tr key={index}>
                          <td>{email.email}</td>
                          <td>{email.descricao}</td>
                          <td className={`checkbox-cell ${email.nota ? 'checked' : 'unchecked'}`}>
                            {email.nota ? '✓' : '✗'}
                          </td>
                          <td className={`checkbox-cell ${email.boleto ? 'checked' : 'unchecked'}`}>
                            {email.boleto ? '✓' : '✗'}
                          </td>
                          <td className={`checkbox-cell ${email.venda ? 'checked' : 'unchecked'}`}>
                            {email.venda ? '✓' : '✗'}
                          </td>
                          <td>
                            <div className="table-actions">
                              <span className={`checkbox-cell ${email.orcamento ? 'checked' : 'unchecked'}`}>
                                {email.orcamento ? '✓' : '✗'}
                              </span>
                              <div className="action-icons">
                                <button className="icon-btn" title="Editar">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                                  </svg>
                                </button>
                                <button className="icon-btn" title="Excluir">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'complemento' && (
              <div className="complemento-tab">
                <div className="form-row">
                  <div className="form-field">
                    <label>Vendedor</label>
                    <select name="vendedor" value={formData.vendedor} onChange={handleChange}>
                      <option>8 - JOÃO GUIMARÃES - 507.528.990-10</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Tabela de Preço</label>
                    <select name="tabelaPreco" value={formData.tabelaPreco} onChange={handleChange}>
                      <option>1 - VAREJO</option>
                      <option>2 - ATACADO</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Grupo</label>
                    <select name="grupo" value={formData.grupo} onChange={handleChange}>
                      <option>1 - VAREJO - TO</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Prospectador</label>
                    <select name="prospectador" value={formData.prospectador} onChange={handleChange}>
                      <option>18 - CECILA MEIRELES - 788.320.567-03</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Transportadora</label>
                    <select name="transportadora" value={formData.transportadora} onChange={handleChange}>
                      <option>151 - ATUAL CARGAS - 42.937.321/0004-15</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Rota</label>
                    <select name="rota" value={formData.rota} onChange={handleChange}>
                      <option>4 - BRASIL NORTE / NORDESTE</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Cadastro</label>
                    <DatePicker
                      value={formData.cadastro}
                      onChange={(value) => setFormData({...formData, cadastro: value})}
                      placeholder="DD/MM/AAAA"
                    />
                  </div>
                  <div className="form-field">
                    <label>Nascimento / Criação</label>
                    <DatePicker
                      value={formData.nascimentoCriacao}
                      onChange={(value) => setFormData({...formData, nascimentoCriacao: value})}
                      placeholder="DD/MM/AAAA"
                    />
                  </div>
                  <div className="form-field">
                    <label>Inscrição Municipal</label>
                    <input 
                      type="text" 
                      name="inscricaoMunicipal"
                      value={formData.inscricaoMunicipal}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Inscrição Suframa</label>
                    <input 
                      type="text" 
                      name="inscricaoSuframa"
                      value={formData.inscricaoSuframa}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'financeiro' && (
              <div className="financeiro-tab">
                <p>Conteúdo da aba Financeiro</p>
              </div>
            )}

            {activeTab === 'anexos' && (
              <div className="anexos-tab">
                <button className="btn-adicionar-arquivo">
                  <span>➕</span> ADICIONAR ARQUIVOS
                </button>
                
                <div className="table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Tamanho</th>
                      </tr>
                    </thead>
                    <tbody>
                      {anexos.map((anexo, index) => (
                        <tr key={index}>
                          <td className="pdf-cell">
                            <svg className={`pdf-icon ${index === 0 ? 'red' : index === 2 ? 'purple' : index === 3 ? 'blue' : 'red'}`} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                            </svg>
                            {anexo.nome}
                          </td>
                          <td>{anexo.tipo}</td>
                          <td>
                            <div className="table-actions">
                              {anexo.tamanho}
                              <div className="action-icons">
                                <button className="icon-btn" title="Visualizar">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                                  </svg>
                                </button>
                                <button className="icon-btn" title="Editar">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                                  </svg>
                                </button>
                                <button className="icon-btn" title="Excluir">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
