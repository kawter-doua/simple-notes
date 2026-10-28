const express = require('express');
const app = express();
app.use(express.json());

const notes = [];

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'text is required' });
  const note = { id: notes.length + 1, text };
  notes.push(note);
  res.status(201).json(note);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SimpleNotes API running on port ${PORT}`));