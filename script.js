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
  }, {id: 3,
    title: "What to expect",
    date: "2026-02-19",
    type: "text",
    topics: ["What is this?","thoughts","intro"],
    content: "This website is intended to be an extension of me and all my energy.The good,bad,smart,dumb,creative, destructive, etc,and how I choose to love it all as it comes."
  }, {
  id: 4,
  title: "GROWInG DUmMY",
  date: "2026-02-19",
  type: "text",
  topics: ["Current Energy","thoughts","acceptance","talk to myself"],
  content: `"Grown dummy". Two words that have been replaying in my head today and affecting my energy in a negative way. Even though I know I'm intelligent in many ways,and I've spent the last two days building my first website with the help of chat gpt(not your usual dummy activities),I still cant shake the cringey feeling I get when those two words skate through my mind every couple minutes. why tho?, is the question I ask my self, and myself gonna break it down so I can understand it accept it for what it is and get back to my best energy. "Grown Dummy", fist of all that's a very rare combination to be called, so off the rip it's like damn that's personal lol. it's the grown part fr like if they had said "young dummy", those two words are synonymous, Young and Dumb, you hear it all the time it's kinda accepted,almost expected where there's young there may also be dumb. but to be called a grown dummy says you're too old to be so dumb and that stings because it brings with it a sense of regret or failure, like I've some how missed the age threshold that it is ok to be dumb and I'm now grown and stuck on the dummy train😒🚆🤦🏾‍♀️. like I have no right to be a dummy at my age. So really that insult packed a double punch. Now how do I get over it ? well first I unpack it, do i think I'm a "grown dummy"?, ideally no, can I see why other people would call me a "grown dummy?", honestly yes. So there, a little honesty and acceptance does alot to take some of the cringe away. Yes I'm grown, yes I did and said dumb shit and could bet I'll say and do more more dumb shit before it's all over so if I look at it that way I'll always be a grown very intelligent dummy🤷🏾‍♀️,so it's no use felling embarrassed about it now. then I wonder what exactly caused this reaction. like what was it that I said or did that earned me the label "Grown dummy" because while whether or not I'm grown can be easily measured and agreed upon, whether or not I am, or what I said or did is dumb is subjective(not easily measured and could be argued). Unfortunately I can very quickly think of plenty of reasons why someone would call me a "grown dummy"😄 so I cant really pin point what caused them to come to that conclusion 😄.No matter which example I give the word "dumb" or the state of being a "dummy" in this context is subjective and even my own opinion of the things I say and do is ever changing. while today I may agree my way of thinking and actions in the past were "dumb", at the time I didn't feel that way it may have been the best/smartest POV,Option,solution at the time.so what's dumb today was smart yesterday that's okay it's apart of learning and growing. If I can live to see the errors of the day before then I can always spend the next day correcting them. So yes it hurts to be labeled a "Grown dummy" I'll take it as encouragement to do better. As long as there is a new day I'm fine with being a GROWInG DUmMY. I Love That Energy!`
}, { 
    id: 5,
    title: "I wanna be an open book..",
    date: "2026-02-20",
    type: "text",
    topics: ["Current Energy", "Good morning"],
    content: `I wanna be an open book, have my pages for ever turning and flowing in the wind.I wanna be an open book. I feel people trying read me from the back cover. I cant speak up and say the summary is misleading.  when I open up the tell my side it's like nobody's interested in reading.,
    not but for real I'm not the best at expressing myself verbally I don't know why when it's something deeper than just everyday conversation and more than one person listening I get nervous I hate the sound of my voice, I second guess my choice to speak. so I close my book under lock and key in fear of what a passing reader would think of me.,
    I attach my self to the reviews I hear. "this book seems good" "I heard it's funny" "yeah it's a good read" "I heard the authors a pretty cool person" ect. that's all true lol the problem is all that is on the surface( the cover) yes you'll get all that from with in the pages but, when I open up I read the truth that some say I should have left out. the truth that conflicts with the cover.,
    that truth is not what people would expect from just reading the back my story is different it's not a easy read some parts make me cringe,some parts make proud ,some parts make me happy, sad,good,bad. but no one can ever get the full story if I snatched the bookand run when it getto a certain part.I know the story gets better but I still be stuck on rvery letter from the chapters before. bottom line id love to be an open book ideally that would make feel free,
    but in reality it just puts a target on me. The reviews,people hear my title and think "damn thats a shame" If the story stopped there I would agree but since the shameful parts there has been many more installments of me.,
    this time I'll just keep the book open I read the worst part outloud to a tough crowd the story gets better for who ever wants to turn the page and read the real daj. Im just L.A.M.E loving all my energy.`
  },{ 
  id: 6,
  title: "Life is funny that way",
  date: "2026-02-20",
  type: "text",
  topics: ["Reflection"],
  content: `Why do I only wanna say and do smart shit when I'm feeling dumb😂 the universe searching for balance lol`
},{
  id: 7,
  title: "Bubble Buddies",
  date: "2026-02-20",
  type: "image",
  topics: ["art", "Vibes","photos"],
  image: "https://postimg.cc/k2f3ZLCb",
  content: "Interacting with the art around me🫧"
  }, 
{ 
  id: 8,
  title: "We Got It Bad (or is it just me lol)",
  date: "2026-02-21",
  type: "text",
  topics: ["Thoughts", "Good morning", "Political", "Trapped"],
  content: `Stockholm syndrome is a weird dangerous psychological defect that needs to be studied and destroyed lol. And since I'm thinking about it a certain way now I also can see how it could be one of the biggest secrets that keeps the world running the way it does through politics and religion. If your not at the top in one of those two like you're just a regular citizen or congregation member you basically just a hostage slave suffering from the usual manipulation but also a different form of mass Stockholm syndrome. You all love your leaders(oppressors), even the ones you "hate".`
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
document.getElementById("generate-post")?.addEventListener("click", () => {
  const title = document.getElementById("new-title").value.trim();
  const type = document.getElementById("new-type").value;
  const topicsRaw = document.getElementById("new-topics").value;
  const content = document.getElementById("new-content").value;

  const topics = topicsRaw
    .split(",")
    .map(t => t.trim())
    .filter(Boolean)
    .map(t => `"${t}"`)
    .join(", ");

  const safeContent = content.replace(/`/g, "\\`");

  const id = Date.now();

  const output = `
{ 
  id: ${id},
  title: "${title.replace(/"/g, '\\"')}",
  date: "${new Date().toISOString().split("T")[0]}",
  type: "${type}",
  topics: [${topics}],
  content: \`${safeContent}\`
},
`;

  document.getElementById("post-output").textContent = output;
});const ADMIN_PASSWORD = "bigdumbbaby"; // change this to whatever you want

const unlockBtn = document.getElementById("unlock-admin");
const passwordInput = document.getElementById("admin-password");
const adminForm = document.querySelector(".admin-form");
const lockMsg = document.getElementById("lock-msg");

unlockBtn?.addEventListener("click", () => {
  if (passwordInput.value === ADMIN_PASSWORD) {
    adminForm.classList.remove("hidden");
    document.querySelector(".admin-lock").classList.add("hidden");
    lockMsg.textContent = "";
  } else {
    lockMsg.textContent = "Wrong password 😅";
  }
});
