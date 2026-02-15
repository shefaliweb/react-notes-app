import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ToastProvider, useToast } from './context/ToastContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import Navbar from './components/Navbar';
import Search from './components/Search';
import NotesListSkeleton from './components/NotesListSkeleton';
import ProtectedRoute from './components/ProtectedRoute';
import { useLocalStorage } from './hooks/useLocalStorage';

const NotesList = lazy(() => import('./components/NotesList'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

const NOTES_STORAGE_KEY = 'react-notes-app-data';

const defaultNotes = [
  { id: nanoid(), text: 'This is my first note!', date: new Date().toLocaleDateString() },
  { id: nanoid(), text: 'This is my second note!', date: new Date().toLocaleDateString() },
  { id: nanoid(), text: 'This is my third note!', date: new Date().toLocaleDateString() },
  { id: nanoid(), text: 'This is my new note!', date: new Date().toLocaleDateString() },
];

function NotesApp() {
  const [notes, setNotes] = useLocalStorage(NOTES_STORAGE_KEY, defaultNotes);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('notes-app-dark-mode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const { addToast } = useToast();
  const { user, logout } = useAuth();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('notes-app-dark-mode', String(darkMode));
  }, [darkMode]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text,
      date: new Date().toLocaleDateString(),
    };
    setNotes((prev) => [...prev, newNote]);
    addToast('Note added', 'success');
  };

  const updateNote = (id, text) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, text, date: new Date().toLocaleDateString() }
          : note
      )
    );
    addToast('Note updated', 'success');
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    addToast('Note deleted', 'info');
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );
  const hasSearchQuery = searchText.trim().length > 0;

  return (
    <MainLayout>
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={setDarkMode}
        user={user}
        onLogout={logout}
      />
      <Search value={searchText} onChange={setSearchText} />
      <Suspense fallback={<NotesListSkeleton />}>
        <NotesList
          notes={filteredNotes}
          onAddNote={addNote}
          onEditNote={updateNote}
          onDeleteNote={deleteNote}
          hasSearchQuery={hasSearchQuery}
        />
      </Suspense>
    </MainLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <Routes>
            <Route path="/login" element={<Suspense fallback={<div className="app-shell app-content flex items-center justify-center min-h-screen">Loading…</div>}><Login /></Suspense>} />
            <Route path="/signup" element={<Suspense fallback={<div className="app-shell app-content flex items-center justify-center min-h-screen">Loading…</div>}><Signup /></Suspense>} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <NotesApp />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
