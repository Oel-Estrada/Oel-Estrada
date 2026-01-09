import './ComingSoon.css'

function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div className="bg-gradient" />
      <header className="coming-soon-header">
        <h1>Oel Estrada</h1>
        <h2>Frontend Engineer</h2>
      </header>
      <main className="coming-soon-content">
        <p>Estoy trabajando en nuevas experiencias digitales.</p>
        <p>Mi portafolio estará disponible pronto. ¡Gracias por tu paciencia!</p>
      </main>
      <footer className="coming-soon-footer">
        <p>&copy; {new Date().getFullYear()} - Próximamente</p>
      </footer>
    </div>
  )
}

export default ComingSoon
