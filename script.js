const posts = [
  {
    id: 1,
    title: "Welcome to L.A.M.E",
    date: "2026-02-18",
    type: "text",
    topics: ["intro", "energy"],
    content: "This is the beginning of Loving.All.My.Energy — a space to share thoughts, media, and creative work."
  } {
    id: 2,
    title: "My First Real Post",
    date: "2026-02-19",
    type: "text",
    topics: ["thoughts", "intro"],
    content: "This is my first real post on L.A.M.E. I’m exploring what Loving All My Energy means to me in real life."
  }
];

const postsEl = document.getElementById("posts");
const searchEl = document.getElementById("search");
const filterEl = document.getElementById("filter");
document.getElementById("year").textContent = new Date().getFullYear();

function renderPosts(list) {
  postsEl.innerHTML = "";
  list.forEach(p => {
    const el = document.createElement("article");
    el.className = "post";
    el.innerHTML = `
      <h3>${p.title}</h3>
      <div class="meta">${p.date} • ${p.type}</div>
      <p>${p.content}</p>
      <div class="reactions">
        <button>❤️</button>
        <button>🔥</button>
        <button>✨</button>
      </div>
    `;
    postsEl.appendChild(el);
  });
}

function filterPosts() {
  const q = searchEl.value.toLowerCase();
  const f = filterEl.value;

  const filtered = posts.filter(p => {
    const matchesText =
      p.title.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q) ||
      p.topics.join(" ").toLowerCase().includes(q) ||
      p.date.includes(q);

    const matchesFilter = f === "all" || p.type === f;
    return matchesText && matchesFilter;
  });

  renderPosts(filtered);
}

searchEl.addEventListener("input", filterPosts);
filterEl.addEventListener("change", filterPosts);

renderPosts(posts);
