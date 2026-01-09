// Comprueba que la instalación se está ejecutando con pnpm
const ua = process.env.npm_config_user_agent || '';
const execPath = (process.env.npm_execpath || '').toLowerCase();

function isPnpm() {
  return ua.includes('pnpm') || execPath.includes('pnpm') || execPath.endsWith('pnpm-cli.js');
}

if (!isPnpm()) {
  console.error('\nERROR: Este proyecto requiere pnpm para instalar dependencias.');
  console.error('Por favor instala pnpm (https://pnpm.io) y ejecuta: pnpm install\n');
  process.exit(1);
}

process.exit(0);
