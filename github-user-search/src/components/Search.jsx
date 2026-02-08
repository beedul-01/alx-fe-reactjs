import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1);
    setUsers([]);
    fetchResults(1);
  };

  const fetchResults = async (pageNumber) => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await searchUsers({
        query,
        location,
        minRepos,
        page: pageNumber,
      });

      setUsers((prev) =>
        pageNumber === 1 ? data.items : [...prev, ...data.items]
      );

      setHasMore(data.total_count > pageNumber * 10);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchResults(nextPage);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* SEARCH FORM */}
      <form
        onSubmit={handleSearch}
        className="grid gap-4 sm:grid-cols-3 bg-white p-4 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Username or keyword"
          className="border p-2 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search query"
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="User location"
        />

        <input
          type="number"
          placeholder="Min repositories"
          className="border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          aria-label="Minimum repositories"
        />

        <button
          type="submit"
          className="sm:col-span-3 bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {/* STATES */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {/* RESULTS */}
      <ul className="grid gap-4 mt-6 sm:grid-cols-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="border rounded-lg p-4 flex gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <p className="text-sm text-gray-600">
                Repos: {user.public_repos ?? "N/A"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline text-sm"
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>

      {/* LOAD MORE */}
      {hasMore && !loading && (
        <button
          onClick={loadMore}
          className="mt-6 block mx-auto bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
