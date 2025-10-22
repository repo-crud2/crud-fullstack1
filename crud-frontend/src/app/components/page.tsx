"use client";
import { useState } from "react";

export default function SimpleCrud() {
  const [items, setItems] = useState<{ id: string; name: string }[]>([]);
  const [name, setName] = useState("");

  function addItem(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    const newItem = { id: Date.now().toString(), name: trimmed };
    setItems(prev => [newItem, ...prev]);
    setName("");
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 p-8">
      <h1 className="text-2xl font-semibold mb-4">Frontend Only CRUD</h1>

      <form onSubmit={addItem} className="flex gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama item..."
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
        <button type="submit" className="rounded-lg bg-zinc-900 px-4 py-2 text-white">
          Create
        </button>
      </form>

      <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
        {items.length === 0 ? (
          <li className="p-4 text-sm text-zinc-500">Belum ada data.</li>
        ) : (
          items.map((it) => (
            <li key={it.id} className="flex items-center justify-between p-4">
              <span className="font-medium">{it.name}</span>
              <span className="text-xs text-zinc-500">{it.id}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
