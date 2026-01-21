import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(() => {
        setSuccess(true);
        setTitle("");
        setBody("");
      })
      .catch(() => {
        setError("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>

      {success && <p>Post created successfully 🎉</p>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default CreatePost;
