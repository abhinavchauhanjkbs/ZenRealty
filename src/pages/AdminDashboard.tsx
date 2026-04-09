import { useEffect, useMemo, useState } from "react";
import { Eye, EyeOff, Lock, Search, User } from "lucide-react";
import { getStoredSubmissions, type ContactSubmission } from "@/lib/utils";
import logo from "@/assets/logo.png";

const ADMIN_SESSION_KEY = "zen-realty-admin-session";
const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setIsAuthenticated(window.localStorage.getItem(ADMIN_SESSION_KEY) === "true");
    setSubmissions(getStoredSubmissions());
  }, []);

  const filteredSubmissions = useMemo(() => {
    const search = searchValue.trim().toLowerCase();
    if (!search) return submissions;

    return submissions.filter((item) =>
      [
        item.fullName,
        item.email,
        item.phone,
        item.propertyType,
        item.budgetRange,
        item.purpose,
        item.message,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }, [searchValue, submissions]);

  const todayCount = useMemo(() => {
    const today = new Date().toDateString();
    return submissions.filter((item) => new Date(item.createdAt).toDateString() === today).length;
  }, [submissions]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Temporary frontend-only access until backend authentication is wired in.
    if (username.trim() && password.trim()) {
      window.localStorage.setItem(ADMIN_SESSION_KEY, "true");
      setIsAuthenticated(true);
      setLoginError("");
      return;
    }

    setLoginError("Enter both username and password.");
  };

  const handleLogout = () => {
    window.localStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
    setPassword("");
    setSearchInput("");
    setSearchValue("");
  };

  const handleSearch = () => {
    setSearchValue(searchInput.trim());
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchValue("");
  };

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen bg-white">
        <div className="fixed inset-x-0 top-10 bottom-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)] md:grid md:bg-sky-100 md:grid-cols-[1.05fr_0.95fr]">
            <div className="hidden flex-col justify-center bg-sky-500 px-8 py-12 text-white md:flex md:px-12 lg:px-16">
              <img src={logo} alt="Zen Realty" className="mx-auto h-auto w-[180px] object-contain" />
              <h1 className="mt-8 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-left">
                Admin Dashboard
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                Manage your real estate enquiries in one place. Review submissions, track incoming leads,
                and keep access restricted to admins only.
              </p>
              <ul className="mx-auto mt-8 w-fit space-y-4 text-lg text-white">
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  Real-time submission tracking
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  Contact management overview
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  Secure admin access
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center bg-white px-6 py-10 sm:px-8 sm:py-12 md:bg-white/70 md:px-12 lg:px-14">
              <div className="w-full max-w-md">
                <p className="text-center text-5xl font-semibold tracking-tight text-slate-950">Welcome Back!</p>
                <p className="mt-3 text-center text-xl text-slate-600">Please sign in to your account</p>

                <form className="mt-10 space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Username</label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-100 py-4 pl-12 pr-4 text-base text-slate-900 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
                        placeholder="admin"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-100 py-4 pl-12 pr-12 text-base text-slate-900 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
                        placeholder="Enter password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {loginError ? <p className="text-sm font-medium text-red-600">{loginError}</p> : null}

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-sky-500 py-4 text-base font-semibold text-white transition hover:bg-sky-600"
                  >
                    Sign In
                  </button>

                  <div className="flex items-center justify-between gap-3 whitespace-nowrap text-xs sm:text-sm">
                    <label className="flex items-center gap-2 text-slate-600">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(event) => setRememberMe(event.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-200"
                      />
                      Remember me
                    </label>
                    <button
                      type="button"
                      className="shrink-0 font-medium text-sky-600 transition hover:text-sky-700"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <p className="text-center text-sm text-slate-500">Secure admin access to the dashboard.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-16">
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="flex w-full items-start justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="text-2xl font-semibold tracking-tight text-slate-950">Zen Realty Admin</p>
            <p className="text-sm text-slate-500">Contact submissions management</p>
          </div>

          <div className="ml-auto flex shrink-0 items-center">
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mb-8 rounded-[28px] border border-slate-300 bg-slate-200 px-6 py-6 shadow-sm sm:px-10 sm:py-7">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Admin Dashboard</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.7rem]">
            Contact Submissions
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Live view of messages submitted by customers.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">Submissions Dashboard</h2>
          <p className="mt-1 text-sm text-slate-600 sm:text-base">View contact form details submitted by users.</p>
        </div>

        <div className="grid gap-3 xl:grid-cols-2 xl:gap-4">
          <div className="rounded-[22px] border border-slate-300 bg-slate-200 px-5 py-4 shadow-sm">
            <p className="text-sm text-slate-600">Total submissions</p>
            <p className="mt-2 text-[2.2rem] font-semibold leading-none text-slate-950">{submissions.length}</p>
          </div>
          <div className="rounded-[22px] border border-slate-300 bg-slate-200 px-5 py-4 shadow-sm">
            <p className="text-sm text-slate-600">Today</p>
            <p className="mt-2 text-[2.2rem] font-semibold leading-none text-slate-950">{todayCount}</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchInput}
                onChange={(event) => {
                  const value = event.target.value;
                  setSearchInput(value);
                  setSearchValue(value.trim());
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSearch();
                  }
                }}
                placeholder="Search by full name, email, phone number, property type, purpose or message..."
                className="w-full rounded-2xl border border-slate-300 bg-slate-200 py-4 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
              />
            </div>
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                type="button"
                onClick={handleSearch}
                className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-[24px] border border-slate-300 bg-slate-200">
            <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
              <thead className="bg-slate-200 text-slate-600">
                <tr>
                  <th className="border-b border-slate-300 px-5 py-4 font-semibold">Submitted At</th>
                  <th className="border-b border-slate-300 px-5 py-4 font-semibold">Full Name</th>
                  <th className="border-b border-slate-300 px-5 py-4 font-semibold">Email</th>
                  <th className="border-b border-slate-300 px-5 py-4 font-semibold">Phone Number</th>
                  <th className="border-b border-slate-300 px-5 py-4 font-semibold">Property Type</th>
                  <th className="border-b border-slate-300 px-5 py-4 font-semibold">Budget Range</th>
                  <th className="border-b border-slate-300 px-5 py-4 font-semibold">Purpose</th>
                  <th className="border-b border-slate-300 px-5 py-4 font-semibold">Message</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.length > 0 ? (
                  filteredSubmissions.map((item) => (
                    <tr key={item.id} className="border-t border-slate-200 even:bg-slate-50">
                      <td className="whitespace-nowrap px-5 py-4 text-slate-600">{new Date(item.createdAt).toLocaleString()}</td>
                      <td className="px-5 py-4 text-slate-900 font-medium">{item.fullName}</td>
                      <td className="px-5 py-4 text-slate-700">{item.email}</td>
                      <td className="px-5 py-4 text-slate-700">{item.phone || "—"}</td>
                      <td className="px-5 py-4 text-slate-700">{item.propertyType}</td>
                      <td className="px-5 py-4 text-slate-700">{item.budgetRange || "—"}</td>
                      <td className="px-5 py-4 text-slate-700">{item.purpose}</td>
                      <td className="max-w-[280px] break-words px-5 py-4 text-slate-700">{item.message}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-5 py-10 text-center text-sm text-slate-500">
                      No submissions found. Fill out the contact form and return here to see entries.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
