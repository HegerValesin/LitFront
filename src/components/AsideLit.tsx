export function AsideLit() {
  return (
    <aside className="w-15 min-h-screen bg-blue-500">
      <h1>AsideLit</h1>
      <nav className="w-30 h-screen bg-blue-500">
        <ul className="p-4">
          <li className="mb-2">
            <a className="text-gray-500">Cadastro</a>
            <ul className="ml-4">
              <li>
                <a className="text-gray-500">Funcionário</a>
              </li>
              <li>
                <a className="text-gray-500">Produtos</a>
              </li>
              <li>
                <a className="text-gray-500">Cliente</a>
              </li>
              <li>
                <a className="text-gray-500">Fornecedor</a>
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <a className="text-gray-500">Movimentação</a>
          </li>
          <li className="mb-2">
            <a className="text-gray-500">Relatório</a>
          </li>
          <li className="mb-2">
            <a className="text-gray-500">Login</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
