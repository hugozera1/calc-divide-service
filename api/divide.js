export default function handler(req, res) {
  const { a, b } = req.query;
      res.setHeader('Access-Control-Allow-Origin', 'https://calc-frontend-woad.vercel.app/');
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }
  if (parseFloat(b) === 0) {
    return res.status(400).json({ error: 'Divisão por zero' });
  }
  const resultado = parseFloat(a) / parseFloat(b);
  res.status(200).json({ resultado });
}