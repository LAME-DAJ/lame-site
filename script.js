const posts = [
  {
    id: 1,
    title: "Welcome to L.A.M.E",
    date: "2026-02-18",
    type: "text",
    topics: ["intro", "energy"],
    content: "This is the beginning of Loving.All.My.Energy — a space to share thoughts, media, and creative work."
  }, {
    id: 2,
    title: "My First Real Post",
    date: "2026-02-19",
    type: "text",
    topics: ["thoughts", "intro"],
    content: "This is my first real post on L.A.M.E. I’m exploring what Loving All My Energy means to me in real life."
  }, {id: 2,
    title: "What to expect",
    date: "2026-02-19",
    type: "text",
    topics: ["What is this?","thoughts","intro"],
    content: "This website is intended to be an extension of me and all my energy.The good,bad,smart,dumb,creative, destructive, etc,and how I choose to love it all as it comes."
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
const speedSlider = document.getElementById("speedSlider");
const glowSlider = document.getElementById("glowSlider");
const sizeSlider = document.getElementById("sizeSlider");
const countSlider = document.getElementById("countSlider");

function updateBubbles() {
  const bubbles = document.querySelectorAll(".bubble");

  bubbles.forEach(bubble => {
    const speed = speedSlider.value;
    const glow = glowSlider.value;
    const size = sizeSlider.value;

    bubble.style.animationDuration = speed + "s";
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.filter = `
      drop-shadow(0 0 ${glow}px rgba(255, 183, 3, 0.6))
      drop-shadow(0 0 ${glow * 2}px rgba(247, 127, 0, 0.35))
    `;
  });
}

speedSlider.addEventListener("input", updateBubbles);
glowSlider.addEventListener("input", updateBubbles);
sizeSlider.addEventListener("input", updateBubbles);

// Optional: dynamic bubble count
countSlider.addEventListener("input", () => {
  const container = document.querySelector(".ambient");
  const current = container.querySelectorAll(".bubble").length;
  const target = Number(countSlider.value);

  if (target > current) {
    for (let i = current; i < target; i++) createBubble();
  } else {
    for (let i = current; i > target; i--) {
      const b = container.querySelector(".bubble");
      if (b) b.remove();
    }
  }
});
