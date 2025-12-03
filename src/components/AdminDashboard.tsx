import { useState, useEffect } from 'react';
import { X, Download, Lock, Loader2, RefreshCcw } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner@2.0.3';

interface Signup {
  id: string;
  email: string;
  name?: string;
  skill_set?: string;
  reason?: string;
  source: string;
  created_at: string;
}

export function AdminDashboard({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [signups, setSignups] = useState<Signup[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") { // Simple password
      setIsAuthenticated(true);
      fetchSignups();
    } else {
      toast.error("Incorrect password");
    }
  };

  const fetchSignups = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1e676e04/signups`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setSignups(data);
    } catch (error) {
      toast.error("Failed to load signups");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCSV = () => {
    if (!signups.length) return;
    
    const headers = ["Date", "Email", "Name", "Source", "Skill Set", "Reason"];
    const csvContent = [
      headers.join(","),
      ...signups.map(s => [
        new Date(s.created_at).toLocaleString(),
        s.email,
        s.name || "",
        s.source,
        s.skill_set || "",
        `"${(s.reason || "").replace(/"/g, '""')}"` // Escape quotes
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `bioxverse_signups_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-gray-500" />
            Admin Dashboard
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6">
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="max-w-sm mx-auto flex flex-col gap-4 mt-10">
              <div className="text-center mb-4">
                <p className="text-gray-600">Enter admin password to view signups.</p>
                <p className="text-xs text-gray-400 mt-1">(Hint: it's "admin")</p>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Access Data
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">Total Signups: {signups.length}</h3>
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin text-blue-500" />}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={fetchSignups} 
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm font-medium"
                  >
                    <RefreshCcw className="w-4 h-4" /> Refresh
                  </button>
                  <button 
                    onClick={downloadCSV} 
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm font-medium"
                  >
                    <Download className="w-4 h-4" /> Download CSV
                  </button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                      <tr>
                        <th className="px-4 py-3 whitespace-nowrap">Date</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Role/Skill</th>
                        <th className="px-4 py-3">Source</th>
                        <th className="px-4 py-3">Reason</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {signups.map((signup) => (
                        <tr key={signup.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                            {new Date(signup.created_at).toLocaleDateString()}
                            <div className="text-xs">{new Date(signup.created_at).toLocaleTimeString()}</div>
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-900">{signup.email}</td>
                          <td className="px-4 py-3 text-gray-700">{signup.name || "-"}</td>
                          <td className="px-4 py-3">
                            {signup.skill_set && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                                {signup.skill_set}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-xs uppercase">{signup.source}</td>
                          <td className="px-4 py-3 text-gray-600 max-w-xs truncate" title={signup.reason || ""}>
                            {signup.reason || "-"}
                          </td>
                        </tr>
                      ))}
                      {signups.length === 0 && !isLoading && (
                        <tr>
                          <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                            No signups yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
