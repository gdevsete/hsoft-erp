import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import './App.css';

function App() {
  const [clients, setClients] = useState([
    {
      codigo: '10327',
      razaoSocial: 'TEC MAIS INFORMATICA E PAPELARIA',
      nomeFantasia: 'TEC MAIS INFORMATICA E PAPELARIA',
      cpfCnpj: '54.658.230/0001-64',
      rgIe: '',
      contribuinte: '1 - CONTRIBUINTE',
      regimeTributario: '2 - SIMPLES NACIONAL',
      status: 'ATIVO',
      estadoCidade: 'VILA BELA DA SANTÍSSIMA TRINDADE - TO',
      email: 'compras@supritec.com.br',
      celular: '(63) 98123 - 4455',
      grupo: 'VAREJO',
      rota: 'NORDESTE',
      tipo: 'Física',
      vendedor: '46 - SAULO CARVALHO NETO - 598.366.428-44',
      empresa: '3 - JALAPAO TECNOLOGIA E SISTEMAS LTDA - 89.564.159/0001-30'
    },
    {
      codigo: '28',
      razaoSocial: 'ALL NOTE - ASSISTENCIA TECNICA ESPECIALIZADA EIRELI',
      nomeFantasia: 'ALL NOTE ASSISTENCIA',
      cpfCnpj: '15.295.882/0001-30',
      rgIe: '',
      contribuinte: '1 - CONTRIBUINTE',
      regimeTributario: '2 - SIMPLES NACIONAL',
      status: 'ATIVO',
      estadoCidade: '',
      email: '',
      celular: '',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '115',
      razaoSocial: 'BOM NEGOCIO IMOBILIARIA LTDA',
      nomeFantasia: 'BOM NEGOCIO GESTÃO DE IMOVEIS',
      cpfCnpj: '85.902.105/0001-47',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: '',
      email: '',
      celular: '',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '89',
      razaoSocial: 'CENTRAL IMPRESSORAS E TINTAS LTDA',
      nomeFantasia: 'CENTRAL IMPRESSORAS E TINTAS',
      cpfCnpj: '55.248.638/0001-42',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'SÃO PAULO',
      email: '',
      celular: '',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '4',
      razaoSocial: 'NORTE SEGURANCA E MONITORAMENTO EIRELI',
      nomeFantasia: 'NORTE SEGURANÇA E MONITORAMENTO RESIDENCIAL',
      cpfCnpj: '23.457.255/0001-13',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: '',
      email: '',
      celular: '',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '756',
      razaoSocial: 'ZATTINI DISTRIBUIDORA DE IMPLEMENTOS AGRICOLAS',
      nomeFantasia: 'ZATTINI AGRO',
      cpfCnpj: '67.499.200/001-65',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'BELO HORIZONTE',
      email: 'vendas@cafepremium.com.br',
      celular: '(31) 2234 - 5678 | (31) 99876-5432',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '10568',
      razaoSocial: 'CONSULTORIA DIGITAL PLUS TECNOLOGIA E SERVICOS S.A.',
      nomeFantasia: 'CONSULTORIA DIGITAL PLUS',
      cpfCnpj: '34.567.890/0001-12',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'RIO DE JANEIRO',
      email: 'info@consultoriadigital.com.br',
      celular: '(21) 3456 - 7890 | (21) 98765-6543',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '659',
      razaoSocial: 'CARLOS MOURA SILVA',
      nomeFantasia: '',
      cpfCnpj: '795.500.123-78',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'CAMPINAS',
      email: 'carlos.m@hotmail.com',
      celular: '(19) 3567 - 8901 | (19) 99876-7654',
      grupo: '',
      rota: '',
      tipo: 'Física',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '2077',
      razaoSocial: 'FITNESS PREMIUM CLUB ACADEMIA E WELLNESS LTDA',
      nomeFantasia: 'FITNESS PREMIUM CLUB',
      cpfCnpj: '56.789.012/0001-34',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'BELO HORIZONTE',
      email: 'academia@fitnesspremium.com.br',
      celular: '(31) 3678 - 9012 | (31) 98765-8765',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '365',
      razaoSocial: 'JOAO RICARDO SOUTO',
      nomeFantasia: '',
      cpfCnpj: '335.854.620-00',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'CURITIBA',
      email: 'jricardosouto@gmail.com',
      celular: '(41) 3789 - 0123 | (41) 99876-9876',
      grupo: '',
      rota: '',
      tipo: 'Física',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '4690',
      razaoSocial: 'LOGISTICA INTEGRADAOGÍSTICA INTEGRADA BRASIL TRAI LOGISTICA INTEGRADA',
      nomeFantasia: '',
      cpfCnpj: '11.882.936/0001-00',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'SANTOS',
      email: 'logistica@integralogistica.com.br',
      celular: '(13) 3890 - 1234 | (13) 98765-0987',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '1670',
      razaoSocial: 'PHARMA SOLUTIONS INDÚSTRIA FARMACÊUTICA LTDA',
      nomeFantasia: 'PHARMA SOLUTIONS',
      cpfCnpj: '89.012.345/0001-67',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'SÃO BERNARDO DO CAMPO',
      email: 'compras@pharmasolutions.com.br',
      celular: '(11) 3901 - 2345 | (11) 99876-1098',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '891',
      razaoSocial: 'RESTAURANTE SABOR CASEIRO ALIMENTAÇÃO LTDA',
      nomeFantasia: 'RESTAURANTE SABOR CASEIRO',
      cpfCnpj: '90.123.456/0001-78',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'SALVADOR',
      email: '',
      celular: '(71) 3012 - 3456 | (71) 99876-2109',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '1502',
      razaoSocial: 'ACO E CONSTRUÇÃO MATERIAL DE PRIMEIRA S.A.',
      nomeFantasia: 'ACO E CONSTRUÇÃO LTDA',
      cpfCnpj: '12.345.678/0001-90',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'SÃO PAULO',
      email: 'contato@acoeconstrucao.com.br',
      celular: '(11) 3456-7890 | (11) 98520-0874',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    },
    {
      codigo: '805',
      razaoSocial: 'CAFÉ PREMIUM BRASIL IMPORTAÇÃO E EXPORTAÇÃO LTDA',
      nomeFantasia: 'CAFÉ PREMIUM BRASIL',
      cpfCnpj: '23.456.789/0001-01',
      rgIe: '',
      contribuinte: '',
      regimeTributario: '',
      status: 'ATIVO',
      estadoCidade: 'BELO HORIZONTE',
      email: 'vendas@cafepremium.com.br',
      celular: '(31) 2234 - 5678 | (31) 99876-5432',
      grupo: '',
      rota: '',
      tipo: 'Jurídica',
      vendedor: '',
      empresa: ''
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingClient, setEditingClient] = useState(null);

  const handleIncluir = () => {
    setEditingClient(null);
    setShowForm(true);
  };

  const handleEdit = (client) => {
    setEditingClient(client);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingClient(null);
  };

  const handleSave = (clientData) => {
    if (editingClient) {
      setClients(clients.map(c => 
        c.codigo === editingClient.codigo ? { ...clientData, codigo: editingClient.codigo } : c
      ));
    } else {
      const newCodigo = String(Math.max(...clients.map(c => parseInt(c.codigo) || 0)) + 1);
      setClients([...clients, { ...clientData, codigo: newCodigo }]);
    }
    setShowForm(false);
    setEditingClient(null);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              showForm ? (
                <ClientForm 
                  client={editingClient}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ) : (
                <ClientList 
                  clients={clients}
                  onIncluir={handleIncluir}
                  onEdit={handleEdit}
                />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
