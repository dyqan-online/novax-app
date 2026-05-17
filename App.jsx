import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NovaXApp() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('AI ready...');

  useEffect(() => {
    const saved = localStorage.getItem('novax_notes');

    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'novax_notes',
      JSON.stringify(notes)
    );
  }, [notes]);

  const saveNote = () => {

    if (!title || !content) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    setNotes([newNote, ...notes]);

    setTitle('');
    setContent('');
  };

  const deleteNote = (id) => {

    setNotes(
      notes.filter((note) => note.id !== id)
    );
  };

  const askAI = () => {

    if (!question) return;

    const answers = [
      'Technology rewards consistency.',
      'AI tools increase productivity.',
      'Automation saves time.',
      'Focus on scalable skills.',
      'Modern AI workflows are powerful.'
    ];

    const random =
      answers[
        Math.floor(Math.random() * answers.length)
      ];

    setResponse(
      `> ${question}\n\n${random}`
    );

    setQuestion('');
  };

  return (

    <div className="min-h-screen bg-black text-white p-6">

      <div className="max-w-6xl mx-auto">

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >

          <div>
            <h1 className="text-5xl font-bold">
              NovaX
            </h1>

            <p className="text-zinc-400 mt-2">
              AI Productivity Platform
            </p>
          </div>

          <div className="text-5xl">
            🚀
          </div>

        </motion.header>

        <div className="
