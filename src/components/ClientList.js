import React, { useState } from 'react';
import './ClientList.css';

const ClientList = ({ clients, onIncluir, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('');
  const [filterSituacao, setFilterSituacao] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterCelular, setFilterCelular] = useState('');
  const [filterGrupo, setFilterGrupo] = useState('');
  const [filterRota, setFilterRota] = useState('');
  const [filterTipo, setFilterTipo] = useState('');
  const [filterVendedor, setFilterVendedor] = useState('');
  const [filterEmpresa, setFilterEmpresa] = useState('');

  const filteredClients = clients.filter(client => {
    const matchesSearch = !searchTerm || 
                         client.codigo === searchTerm ||
                         client.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (client.nomeFantasia && client.nomeFantasia.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         client.cpfCnpj.includes(searchTerm);
    const matchesEstado = !filterEstado || (client.estadoCidade && client.estadoCidade.includes(filterEstado));
    const matchesSituacao = !filterSituacao || client.status === filterSituacao;
    const matchesEmail = !filterEmail || (client.email && client.email.toLowerCase().includes(filterEmail.toLowerCase()));
    const matchesCelular = !filterCelular || (client.celular && client.celular.includes(filterCelular));
    const matchesGrupo = !filterGrupo || (client.grupo && client.grupo === filterGrupo);
    const matchesRota = !filterRota || (client.rota && client.rota === filterRota);
    const matchesTipo = !filterTipo || client.tipo === filterTipo;
    const matchesVendedor = !filterVendedor || (client.vendedor && client.vendedor.includes(filterVendedor));
    const matchesEmpresa = !filterEmpresa || (client.empresa && client.empresa.toLowerCase().includes(filterEmpresa.toLowerCase()));
    
    return matchesSearch && matchesEstado && matchesSituacao && matchesEmail && matchesCelular && matchesGrupo && matchesRota && matchesTipo && matchesVendedor && matchesEmpresa;
  });

  return (
    <div className="client-list-container">
      <div className="client-list-header">
        <h1 className="page-title">CLIENTES</h1>
        <div className="header-actions">
          <button className="btn-incluir" onClick={onIncluir}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Incluir
          </button>
          <button className="btn-imprimir">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Imprimir
          </button>
        </div>
      </div>

      <div className="filters-section">
        <div className="filter-row">
          <div className="filter-group">
            <label>Cliente</label>
            <div className="search-input-wrapper">
              <select 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-select"
              >
                <option value="">Selecione um cliente...</option>
                {clients.map((client, index) => (
                  <option key={index} value={client.codigo}>
                    {client.codigo} - {client.razaoSocial} - {client.cpfCnpj}
                  </option>
                ))}
              </select>
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="filter-group">
            <label>Estado / Cidade</label>
            <select value={filterEstado} onChange={(e) => setFilterEstado(e.target.value)}>
              <option value="">Todos os estados</option>
              <option value="TO">TOCANTINS</option>
              <option value="SP">SÃO PAULO</option>
              <option value="RJ">RIO DE JANEIRO</option>
              <option value="MG">MINAS GERAIS</option>
              <option value="BA">BAHIA</option>
              <option value="PR">PARANÁ</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Situação</label>
            <select value={filterSituacao} onChange={(e) => setFilterSituacao(e.target.value)}>
              <option value="">Todas as situações</option>
              <option value="ATIVO">ATIVO</option>
              <option value="INATIVO">INATIVO</option>
            </select>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label>Vendedor</label>
            <select value={filterVendedor} onChange={(e) => setFilterVendedor(e.target.value)}>
              <option value="">Todos os vendedores</option>
              <option value="8 - JOÃO">8 - JOÃO GUIMARÃES - 507.528.990-10</option>
              <option value="46 - SAULO">46 - SAULO CARVALHO NETO - 598.366.428-44</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Empresa</label>
            <select value={filterEmpresa} onChange={(e) => setFilterEmpresa(e.target.value)}>
              <option value="">Todas as empresas</option>
              <option value="1 - HSOFT">1 - HSOFT SISTEMAS LTDA - 12.345.678/0001-90</option>
              <option value="3 - JALAPAO">3 - JALAPAO TECNOLOGIA E SISTEMAS LTDA - 89.564.159/0001-30</option>
            </select>
          </div>

          <div className="filter-group">
            <label>E-mail</label>
            <input
              type="text"
              placeholder="compras@supritec.com.br"
              value={filterEmail}
              onChange={(e) => setFilterEmail(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Celular</label>
            <input
              type="text"
              placeholder="(63) 98123 - 4455"
              value={filterCelular}
              onChange={(e) => setFilterCelular(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label>Grupo</label>
            <select value={filterGrupo} onChange={(e) => setFilterGrupo(e.target.value)}>
              <option value="">Todos os grupos</option>
              <option value="VAREJO">VAREJO</option>
              <option value="ATACADO">ATACADO</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Rota</label>
            <select value={filterRota} onChange={(e) => setFilterRota(e.target.value)}>
              <option value="">Todas as rotas</option>
              <option value="NORDESTE">NORDESTE</option>
              <option value="SUL">SUL</option>
              <option value="NORTE">NORTE</option>
            </select>
          </div>

          <div className="filter-group filter-tipo">
            <label>Tipo</label>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="tipo" 
                  value="Física"
                  checked={filterTipo === 'Física'}
                  onChange={(e) => setFilterTipo(e.target.value)}
                />
                Física
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="tipo" 
                  value="Jurídica"
                  checked={filterTipo === 'Jurídica'}
                  onChange={(e) => setFilterTipo(e.target.value)}
                />
                Jurídica
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="tipo" 
                  value=""
                  checked={filterTipo === ''}
                  onChange={(e) => setFilterTipo(e.target.value)}
                />
                Todos
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="clients-table">
          <thead>
            <tr>
              <th>Razão Social / Código</th>
              <th>Nome Fantasia / CPF ou CNPJ</th>
              <th>Cidade / Estado</th>
              <th>Telefone / E-mail</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, index) => (
              <tr key={index} className="client-row">
                <td>
                  <div className="cell-main">{client.razaoSocial}</div>
                  <div className="cell-sub">CÓD: {client.codigo}</div>
                </td>
                <td>
                  <div className="cell-main">{client.nomeFantasia || client.razaoSocial}</div>
                  <div className="cell-sub">CNPJ: {client.cpfCnpj}</div>
                </td>
                <td>
                  <div className="cell-main">{client.estadoCidade || '-'}</div>
                </td>
                <td>
                  <div className="cell-main">{client.celular || '-'}</div>
                  <div className="cell-sub">{client.email || '-'}</div>
                  <div className="row-actions">
                    <button className="action-btn view-btn" title="Visualizar">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                      </svg>
                    </button>
                    <button className="action-btn edit-btn" title="Editar" onClick={() => onEdit(client)}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                      </svg>
                    </button>
                    <button className="action-btn delete-btn" title="Excluir">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientList;
