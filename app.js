const colors = ["#ffd447", "#ff8ec3", "#76e2ff", "#86ef89", "#ffa45c", "#b69cff", "#ff7777", "#7ee4c7"];

const categories = [
  {
    id: "fruits",
    name: "Fruits",
    icon: "🥭",
    color: "#ffd447",
    items: [
      ["Mango", "🥭", "Hi! I am Mango. I am the king of fruits!"],
      ["Apple", "🍎", "Hi! I am Apple. I am red, sweet, and crunchy!"],
      ["Banana", "🍌", "Hi! I am Banana. I am yellow and full of energy!"],
      ["Orange", "🍊", "Hi! I am Orange. I am juicy and full of vitamin C!"],
      ["Grapes", "🍇", "Hi! We are Grapes. We are tiny, sweet, and juicy!"],
      ["Strawberry", "🍓", "Hi! I am Strawberry. I am red, cute, and sweet!"],
      ["Watermelon", "🍉", "Hi! I am Watermelon. I am big, green, and watery!"],
      ["Pineapple", "🍍", "Hi! I am Pineapple. I wear a spiky crown!"],
      ["Papaya", "🟠", "Hi! I am Papaya. I am soft, orange, and yummy!"],
      ["Cherry", "🍒", "Hi! I am Cherry. I am small, round, and red!"],
      ["Pear", "🍐", "Hi! I am Pear. I am sweet and shaped like a bell!"],
      ["Peach", "🍑", "Hi! I am Peach. I am soft, fuzzy, and juicy!"],
      ["Kiwi", "🥝", "Hi! I am Kiwi. I am brown outside and green inside!"],
      ["Coconut", "🥥", "Hi! I am Coconut. I have water inside me!"],
      ["Pomegranate", "🔴", "Hi! I am Pomegranate. I am full of shiny red seeds!"]
    ]
  },
  {
    id: "animals",
    name: "Animals",
    icon: "🦁",
    color: "#ffa45c",
    items: [
      ["Lion", "🦁", "Hi! I am Lion. I am the king of the jungle!"],
      ["Elephant", "🐘", "Hi! I am Elephant. I have a long trunk!"],
      ["Monkey", "🐵", "Hi! I am Monkey. I love to jump and play!"],
      ["Tiger", "🐯", "Hi! I am Tiger. I have orange fur and black stripes!"],
      ["Giraffe", "🦒", "Hi! I am Giraffe. I have a very long neck!"],
      ["Zebra", "🦓", "Hi! I am Zebra. I have black and white stripes!"],
      ["Bear", "🐻", "Hi! I am Bear. I am big, strong, and furry!"],
      ["Deer", "🦌", "Hi! I am Deer. I can run very fast!"],
      ["Rabbit", "🐰", "Hi! I am Rabbit. I have long ears and I hop!"],
      ["Dog", "🐶", "Hi! I am Dog. I am a loyal friend!"],
      ["Cat", "🐱", "Hi! I am Cat. I say meow and love to nap!"],
      ["Cow", "🐮", "Hi! I am Cow. I give milk!"],
      ["Horse", "🐴", "Hi! I am Horse. I can run and gallop!"],
      ["Sheep", "🐑", "Hi! I am Sheep. I have soft wool!"],
      ["Kangaroo", "🦘", "Hi! I am Kangaroo. I jump with my strong legs!"]
    ]
  },
  {
    id: "birds",
    name: "Birds",
    icon: "🦜",
    color: "#76e2ff",
    items: [
      ["Parrot", "🦜", "Hi! I am Parrot. I have colorful feathers!"],
      ["Peacock", "🦚", "Hi! I am Peacock. I have a beautiful tail!"],
      ["Crow", "🐦‍⬛", "Hi! I am Crow. I say caw caw!"],
      ["Sparrow", "🐦", "Hi! I am Sparrow. I am small and quick!"],
      ["Eagle", "🦅", "Hi! I am Eagle. I fly high in the sky!"],
      ["Owl", "🦉", "Hi! I am Owl. I can see well at night!"],
      ["Duck", "🦆", "Hi! I am Duck. I love to swim!"],
      ["Hen", "🐔", "Hi! I am Hen. I lay eggs!"],
      ["Pigeon", "🕊️", "Hi! I am Pigeon. I like to coo!"],
      ["Swan", "🦢", "Hi! I am Swan. I glide on water!"],
      ["Flamingo", "🦩", "Hi! I am Flamingo. I stand on one leg!"],
      ["Penguin", "🐧", "Hi! I am Penguin. I waddle and swim!"],
      ["Kingfisher", "🐦", "Hi! I am Kingfisher. I dive to catch fish!"],
      ["Woodpecker", "🐦", "Hi! I am Woodpecker. I tap on trees!"],
      ["Ostrich", "🐦", "Hi! I am Ostrich. I am a big bird that runs fast!"]
    ]
  },
  {
    id: "professions",
    name: "Professions",
    icon: "👩‍⚕️",
    color: "#ff8ec3",
    items: [
      ["Doctor", "👩‍⚕️", "Hi! I am a Doctor. I help people feel better!"],
      ["Teacher", "👩‍🏫", "Hi! I am a Teacher. I help children learn!"],
      ["Farmer", "👨‍🌾", "Hi! I am a Farmer. I grow food for everyone!"],
      ["Police Officer", "👮", "Hi! I am a Police Officer. I keep people safe!"],
      ["Firefighter", "👨‍🚒", "Hi! I am a Firefighter. I help put out fires!"],
      ["Chef", "👩‍🍳", "Hi! I am a Chef. I cook tasty food!"],
      ["Pilot", "👨‍✈️", "Hi! I am a Pilot. I fly airplanes!"],
      ["Driver", "🧑‍✈️", "Hi! I am a Driver. I drive people safely!"],
      ["Engineer", "👷", "Hi! I am an Engineer. I build amazing things!"],
      ["Nurse", "👩‍⚕️", "Hi! I am a Nurse. I care for sick people!"],
      ["Dentist", "🦷", "Hi! I am a Dentist. I help keep teeth healthy!"],
      ["Artist", "🎨", "Hi! I am an Artist. I paint colorful pictures!"],
      ["Musician", "🎸", "Hi! I am a Musician. I make beautiful music!"],
      ["Scientist", "🧑‍🔬", "Hi! I am a Scientist. I discover new things!"],
      ["Astronaut", "🧑‍🚀", "Hi! I am an Astronaut. I travel to space!"]
    ]
  },
  {
    id: "vegetables",
    name: "Vegetables",
    icon: "🥕",
    color: "#86ef89",
    items: [
      ["Carrot", "🥕", "Hi! I am Carrot. I am orange and crunchy!"],
      ["Potato", "🥔", "Hi! I am Potato. I can become yummy fries!"],
      ["Tomato", "🍅", "Hi! I am Tomato. I am red and juicy!"],
      ["Onion", "🧅", "Hi! I am Onion. I have many layers!"],
      ["Cucumber", "🥒", "Hi! I am Cucumber. I am cool and crunchy!"],
      ["Pumpkin", "🎃", "Hi! I am Pumpkin. I am big, round, and orange!"],
      ["Spinach", "🥬", "Hi! I am Spinach. I am green and healthy!"],
      ["Peas", "🟢", "Hi! We are Peas. We are small, round, and green!"],
      ["Corn", "🌽", "Hi! I am Corn. I have golden kernels!"],
      ["Broccoli", "🥦", "Hi! I am Broccoli. I look like a tiny tree!"],
      ["Cauliflower", "⚪", "Hi! I am Cauliflower. I am white and fluffy!"],
      ["Cabbage", "🥬", "Hi! I am Cabbage. I have many green leaves!"],
      ["Brinjal", "🍆", "Hi! I am Brinjal. I am purple and shiny!"],
      ["Capsicum", "🫑", "Hi! I am Capsicum. I come in many colors!"],
      ["Beetroot", "🔴", "Hi! I am Beetroot. I am deep red and healthy!"]
    ]
  },
  {
    id: "vehicles",
    name: "Vehicles",
    icon: "🚗",
    color: "#b69cff",
    items: [
      ["Car", "🚗", "Hi! I am Car. I take families on rides!"],
      ["Bus", "🚌", "Hi! I am Bus. I carry many people!"],
      ["Bicycle", "🚲", "Hi! I am Bicycle. You pedal me to move!"],
      ["Train", "🚆", "Hi! I am Train. I run on tracks!"],
      ["Airplane", "✈️", "Hi! I am Airplane. I fly in the sky!"],
      ["Helicopter", "🚁", "Hi! I am Helicopter. My blades spin fast!"],
      ["Boat", "⛵", "Hi! I am Boat. I float on water!"],
      ["Ship", "🚢", "Hi! I am Ship. I sail across the sea!"],
      ["Truck", "🚚", "Hi! I am Truck. I carry heavy things!"],
      ["Scooter", "🛵", "Hi! I am Scooter. I zoom on the road!"],
      ["Motorcycle", "🏍️", "Hi! I am Motorcycle. I have two wheels!"],
      ["Ambulance", "🚑", "Hi! I am Ambulance. I help sick people quickly!"],
      ["Fire Truck", "🚒", "Hi! I am Fire Truck. I help firefighters!"],
      ["Tractor", "🚜", "Hi! I am Tractor. I help farmers in fields!"],
      ["Rocket", "🚀", "Hi! I am Rocket. I blast off into space!"]
    ]
  },
  {
    id: "colors",
    name: "Colors",
    icon: "🌈",
    color: "#ff7777",
    items: [
      ["Red", "🔴", "Hi! I am Red. I am the color of apples and roses!"],
      ["Blue", "🔵", "Hi! I am Blue. I am the color of the sky!"],
      ["Yellow", "🟡", "Hi! I am Yellow. I am bright like the sun!"],
      ["Green", "🟢", "Hi! I am Green. I am the color of leaves!"],
      ["Orange", "🟠", "Hi! I am Orange. I am bright and cheerful!"],
      ["Purple", "🟣", "Hi! I am Purple. I am royal and magical!"],
      ["Pink", "🌸", "Hi! I am Pink. I am soft and pretty!"],
      ["Brown", "🟤", "Hi! I am Brown. I am the color of chocolate!"],
      ["Black", "⚫", "Hi! I am Black. I am dark like the night!"],
      ["White", "⚪", "Hi! I am White. I am clean like snow!"],
      ["Gray", "◽", "Hi! I am Gray. I am the color of clouds!"],
      ["Gold", "⭐", "Hi! I am Gold. I shine like treasure!"],
      ["Silver", "✨", "Hi! I am Silver. I sparkle like stars!"],
      ["Violet", "💜", "Hi! I am Violet. I am a beautiful flower color!"],
      ["Sky Blue", "💧", "Hi! I am Sky Blue. I am calm like the sky!"]
    ]
  },
  {
    id: "shapes",
    name: "Shapes",
    icon: "⭐",
    color: "#7ee4c7",
    items: [
      ["Circle", "⭕", "Hi! I am Circle. I am round with no corners!"],
      ["Square", "⬛", "Hi! I am Square. I have four equal sides!"],
      ["Triangle", "🔺", "Hi! I am Triangle. I have three sides!"],
      ["Rectangle", "▭", "Hi! I am Rectangle. I have four sides!"],
      ["Star", "⭐", "Hi! I am Star. I twinkle in the sky!"],
      ["Heart", "💖", "Hi! I am Heart. I show love!"],
      ["Oval", "🥚", "Hi! I am Oval. I look like an egg!"],
      ["Diamond", "🔷", "Hi! I am Diamond. I sparkle with four points!"],
      ["Pentagon", "⬟", "Hi! I am Pentagon. I have five sides!"],
      ["Hexagon", "⬢", "Hi! I am Hexagon. I have six sides!"],
      ["Crescent", "🌙", "Hi! I am Crescent. I look like the moon!"],
      ["Semicircle", "◖", "Hi! I am Semicircle. I am half of a circle!"],
      ["Cube", "🧊", "Hi! I am Cube. I have six square faces!"],
      ["Cone", "🍦", "Hi! I am Cone. I look like an ice cream cone!"],
      ["Cylinder", "🥫", "Hi! I am Cylinder. I look like a can!"]
    ]
  },
  {
    id: "numbers",
    name: "Numbers",
    icon: "🔢",
    color: "#ffe66d",
    items: [
      ["One", "1️⃣", "Hi! I am Number One. I mean a single thing!"],
      ["Two", "2️⃣", "Hi! I am Number Two. I mean a pair!"],
      ["Three", "3️⃣", "Hi! I am Number Three. Count one, two, three!"],
      ["Four", "4️⃣", "Hi! I am Number Four. I have four fun counts!"],
      ["Five", "5️⃣", "Hi! I am Number Five. Count five fingers on one hand!"],
      ["Six", "6️⃣", "Hi! I am Number Six. I come after five!"],
      ["Seven", "7️⃣", "Hi! I am Number Seven. I am lucky and fun!"],
      ["Eight", "8️⃣", "Hi! I am Number Eight. I look like two circles!"],
      ["Nine", "9️⃣", "Hi! I am Number Nine. I come before ten!"],
      ["Ten", "🔟", "Hi! I am Number Ten. Count all your fingers!"],
      ["Eleven", "11", "Hi! I am Number Eleven. I come after ten!"],
      ["Twelve", "12", "Hi! I am Number Twelve. There are twelve months in a year!"],
      ["Thirteen", "13", "Hi! I am Number Thirteen. I come after twelve!"],
      ["Fourteen", "14", "Hi! I am Number Fourteen. I am one more than thirteen!"],
      ["Fifteen", "15", "Hi! I am Number Fifteen. Let's count up to fifteen!"]
    ]
  },
  {
    id: "sea",
    name: "Sea Animals",
    icon: "🐬",
    color: "#55c7ff",
    items: [
      ["Fish", "🐟", "Hi! I am Fish. I swim in water!"],
      ["Dolphin", "🐬", "Hi! I am Dolphin. I am smart and playful!"],
      ["Whale", "🐋", "Hi! I am Whale. I am very big!"],
      ["Shark", "🦈", "Hi! I am Shark. I have strong fins!"],
      ["Octopus", "🐙", "Hi! I am Octopus. I have eight arms!"],
      ["Crab", "🦀", "Hi! I am Crab. I walk sideways!"],
      ["Starfish", "⭐", "Hi! I am Starfish. I look like a star!"],
      ["Seahorse", "🦭", "Hi! I am Seahorse. I look like a tiny horse!"],
      ["Jellyfish", "🪼", "Hi! I am Jellyfish. I float softly in the sea!"],
      ["Turtle", "🐢", "Hi! I am Turtle. I carry my shell!"],
      ["Lobster", "🦞", "Hi! I am Lobster. I have big claws!"],
      ["Seal", "🦭", "Hi! I am Seal. I clap and swim!"],
      ["Squid", "🦑", "Hi! I am Squid. I move quickly in water!"],
      ["Clownfish", "🐠", "Hi! I am Clownfish. I have orange and white stripes!"],
      ["Stingray", "🪁", "Hi! I am Stingray. I glide like a kite underwater!"]
    ]
  },
  {
    id: "music",
    name: "Music",
    icon: "🥁",
    color: "#d6a4ff",
    items: [
      ["Drum", "🥁", "Hi! I am Drum. Tap me to make a beat!"],
      ["Guitar", "🎸", "Hi! I am Guitar. Strum me to make music!"],
      ["Piano", "🎹", "Hi! I am Piano. Press my keys to play songs!"],
      ["Flute", "🪈", "Hi! I am Flute. Blow into me to make sweet sounds!"],
      ["Violin", "🎻", "Hi! I am Violin. I sing with strings!"],
      ["Trumpet", "🎺", "Hi! I am Trumpet. I make a bright sound!"],
      ["Tambourine", "🪇", "Hi! I am Tambourine. Shake me for jingles!"],
      ["Xylophone", "🎼", "Hi! I am Xylophone. Tap my bars for music!"],
      ["Saxophone", "🎷", "Hi! I am Saxophone. I make smooth sounds!"],
      ["Harmonica", "🎵", "Hi! I am Harmonica. Blow me to play music!"],
      ["Bell", "🔔", "Hi! I am Bell. I ring ding-dong!"],
      ["Maracas", "🪇", "Hi! We are Maracas. Shake us to make rhythm!"],
      ["Harp", "🎶", "Hi! I am Harp. My strings sound magical!"],
      ["Cymbals", "✨", "Hi! We are Cymbals. We crash together loudly!"],
      ["Accordion", "🪗", "Hi! I am Accordion. I stretch and play music!"]
    ]
  },
  {
    id: "household",
    name: "Household",
    icon: "🛏️",
    color: "#9ef0d2",
    items: [
      ["Chair", "🪑", "Hi! I am Chair. You sit on me!"],
      ["Table", "🍽️", "Hi! I am Table. You can keep things on me!"],
      ["Bed", "🛏️", "Hi! I am Bed. You sleep on me!"],
      ["Sofa", "🛋️", "Hi! I am Sofa. Families relax on me!"],
      ["Lamp", "💡", "Hi! I am Lamp. I give light!"],
      ["Clock", "🕒", "Hi! I am Clock. I tell time!"],
      ["Door", "🚪", "Hi! I am Door. I open and close!"],
      ["Window", "🪟", "Hi! I am Window. I let sunlight in!"],
      ["Fan", "🌀", "Hi! I am Fan. I keep you cool!"],
      ["Cup", "☕", "Hi! I am Cup. You drink from me!"],
      ["Plate", "🍽️", "Hi! I am Plate. Food sits on me!"],
      ["Spoon", "🥄", "Hi! I am Spoon. I help you eat!"],
      ["Pillow", "🛏️", "Hi! I am Pillow. I make sleep comfy!"],
      ["Mirror", "🪞", "Hi! I am Mirror. You can see yourself in me!"],
      ["Bookshelf", "📚", "Hi! I am Bookshelf. I hold books!"]
    ]
  }
].map((category) => ({
  ...category,
  items: category.items.map(([name, icon, intro]) => ({ name, icon, intro }))
}));

const homeView = document.getElementById("homeView");
const learnView = document.getElementById("learnView");
const categoryGrid = document.getElementById("categoryGrid");
const categoryTitle = document.getElementById("categoryTitle");
const playArea = document.getElementById("playArea");
const spotlight = document.getElementById("spotlight");
const featuredItem = document.getElementById("featuredItem");
const speechBubble = document.getElementById("speechBubble");
const subtitleBar = document.getElementById("subtitleBar");
const sparkleField = document.getElementById("sparkleField");
const backButton = document.getElementById("backButton");
const soundButton = document.getElementById("soundButton");
const musicButton = document.getElementById("musicButton");

let activeCategory = categories[0];
let activeItem = null;
let audioContext = null;
let masterGain = null;
let musicTimer = null;
let musicPlaying = false;
let voicesReady = false;
let fallbackTapAudio = null;
let fallbackSparkleAudio = null;
let fallbackMusicAudio = null;
let currentSpeechUtterance = null;

function ensureAudio() {
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioEngine();
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.24;
    masterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function makeWaveUrl(events, totalDuration) {
  const sampleRate = 16000;
  const sampleCount = Math.floor(sampleRate * totalDuration);
  const headerSize = 44;
  const buffer = new ArrayBuffer(headerSize + sampleCount * 2);
  const view = new DataView(buffer);
  const writeString = (offset, value) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset + index, value.charCodeAt(index));
    }
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + sampleCount * 2, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, sampleCount * 2, true);

  for (let sample = 0; sample < sampleCount; sample += 1) {
    const time = sample / sampleRate;
    let value = 0;

    events.forEach((event) => {
      const localTime = time - event.start;
      if (localTime >= 0 && localTime <= event.duration) {
        const fadeIn = Math.min(1, localTime / 0.02);
        const fadeOut = Math.min(1, (event.duration - localTime) / 0.04);
        const envelope = Math.max(0, Math.min(fadeIn, fadeOut));
        value += Math.sin(2 * Math.PI * event.frequency * localTime) * envelope * event.volume;
      }
    });

    const clamped = Math.max(-1, Math.min(1, value));
    view.setInt16(headerSize + sample * 2, clamped * 32767, true);
  }

  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 8192;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return `data:audio/wav;base64,${btoa(binary)}`;
}

function initFallbackAudio() {
  if (fallbackTapAudio || typeof Audio === "undefined") {
    return;
  }

  fallbackTapAudio = new Audio(makeWaveUrl([
    { frequency: 523.25, start: 0, duration: 0.1, volume: 0.36 },
    { frequency: 659.25, start: 0.08, duration: 0.1, volume: 0.3 },
    { frequency: 783.99, start: 0.16, duration: 0.14, volume: 0.26 }
  ], 0.36));

  fallbackSparkleAudio = new Audio(makeWaveUrl([
    { frequency: 987.77, start: 0, duration: 0.12, volume: 0.32 },
    { frequency: 1318.51, start: 0.1, duration: 0.12, volume: 0.26 },
    { frequency: 1567.98, start: 0.2, duration: 0.16, volume: 0.22 }
  ], 0.46));

  const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 783.99];
  const musicEvents = [];
  melody.forEach((note, index) => {
    const start = index * 0.34;
    musicEvents.push({ frequency: note, start, duration: 0.26, volume: 0.12 });
    if (index % 2 === 0) {
      musicEvents.push({ frequency: note / 2, start, duration: 0.22, volume: 0.07 });
    }
  });

  fallbackMusicAudio = new Audio(makeWaveUrl(musicEvents, 2.9));
  fallbackMusicAudio.loop = true;
  fallbackMusicAudio.volume = 0.28;
}

function playFallback(audio) {
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function playTone(frequency, duration, type = "sine", delay = 0, volume = 0.08) {
  const context = ensureAudio();
  if (!context || !masterGain) {
    return false;
  }

  const startAt = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

  oscillator.connect(gain);
  gain.connect(masterGain);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.04);
  return true;
}

function playTapSound() {
  if (!ensureAudio()) {
    initFallbackAudio();
    playFallback(fallbackTapAudio);
    return;
  }

  playTone(523.25, 0.09, "triangle", 0, 0.08);
  playTone(659.25, 0.09, "triangle", 0.08, 0.07);
  playTone(783.99, 0.12, "triangle", 0.16, 0.06);
}

function playSparkleSound() {
  if (!ensureAudio()) {
    initFallbackAudio();
    playFallback(fallbackSparkleAudio);
    return;
  }

  playTone(987.77, 0.08, "sine", 0, 0.07);
  playTone(1318.51, 0.1, "sine", 0.08, 0.06);
  playTone(1567.98, 0.14, "sine", 0.17, 0.05);
}

function playPersonalitySound(item, category) {
  const name = item.name.toLowerCase();
  const id = category.id;

  if (["lion", "tiger", "bear"].includes(name)) {
    playTone(130, 0.28, "sawtooth", 0, 0.13);
    playTone(92, 0.38, "sawtooth", 0.12, 0.12);
    playTone(160, 0.16, "square", 0.26, 0.06);
    return;
  }

  if (["elephant"].includes(name)) {
    playTone(185, 0.2, "sawtooth", 0, 0.12);
    playTone(277, 0.22, "sawtooth", 0.12, 0.1);
    playTone(415, 0.26, "triangle", 0.25, 0.08);
    return;
  }

  if (["monkey", "rabbit", "kangaroo"].includes(name)) {
    playTone(720, 0.08, "square", 0, 0.08);
    playTone(900, 0.08, "square", 0.1, 0.07);
    playTone(760, 0.1, "square", 0.2, 0.07);
    return;
  }

  if (id === "birds") {
    playTone(1280, 0.08, "sine", 0, 0.08);
    playTone(1640, 0.08, "sine", 0.09, 0.07);
    playTone(1420, 0.1, "sine", 0.18, 0.06);
    return;
  }

  if (id === "vehicles") {
    if (name === "rocket") {
      playTone(120, 0.46, "sawtooth", 0, 0.11);
      playTone(240, 0.34, "sawtooth", 0.12, 0.08);
      playTone(520, 0.18, "triangle", 0.36, 0.06);
      return;
    }

    playTone(110, 0.22, "sawtooth", 0, 0.09);
    playTone(146, 0.22, "sawtooth", 0.12, 0.08);
    playTone(440, 0.1, "square", 0.28, 0.07);
    return;
  }

  if (id === "music") {
    playTone(523.25, 0.12, "triangle", 0, 0.08);
    playTone(659.25, 0.12, "triangle", 0.12, 0.08);
    playTone(783.99, 0.18, "triangle", 0.24, 0.07);
    return;
  }

  if (id === "sea") {
    playTone(330, 0.18, "sine", 0, 0.07);
    playTone(494, 0.2, "sine", 0.16, 0.06);
    playTone(660, 0.24, "sine", 0.32, 0.05);
    return;
  }

  if (id === "professions") {
    if (["doctor", "nurse", "ambulance"].includes(name)) {
      playTone(880, 0.11, "square", 0, 0.07);
      playTone(660, 0.11, "square", 0.12, 0.07);
      playTone(880, 0.11, "square", 0.24, 0.07);
      return;
    }

    playTone(440, 0.12, "triangle", 0, 0.06);
    playTone(554, 0.12, "triangle", 0.12, 0.06);
    return;
  }

  if (id === "fruits" || id === "vegetables" || id === "colors" || id === "shapes" || id === "numbers" || id === "household") {
    playSparkleSound();
  }
}

function getSpeechProfile(item, category) {
  const name = item.name.toLowerCase();
  const id = category.id;
  const profile = {
    rate: 0.84,
    pitch: 1.25,
    volume: 1,
    voicePattern: /female|zira|samantha|google uk english female|google us english|natural/i
  };

  if (["lion", "tiger", "bear"].includes(name)) {
    return { ...profile, rate: 0.72, pitch: 0.62, voicePattern: /male|david|mark|daniel|google uk english male|natural/i };
  }

  if (["elephant", "whale"].includes(name)) {
    return { ...profile, rate: 0.68, pitch: 0.55, voicePattern: /male|david|mark|daniel|natural/i };
  }

  if (["rabbit", "monkey", "kangaroo"].includes(name) || id === "birds") {
    return { ...profile, rate: 0.95, pitch: 1.65 };
  }

  if (id === "vehicles") {
    return { ...profile, rate: 0.78, pitch: name === "rocket" ? 0.9 : 0.78, voicePattern: /male|david|mark|daniel|natural/i };
  }

  if (id === "professions") {
    return { ...profile, rate: 0.82, pitch: 1.08 };
  }

  if (id === "music") {
    return { ...profile, rate: 0.9, pitch: 1.45 };
  }

  if (id === "sea") {
    return { ...profile, rate: 0.76, pitch: 1.05 };
  }

  if (id === "numbers" || id === "shapes") {
    return { ...profile, rate: 0.78, pitch: 1.2 };
  }

  return profile;
}

function startMusic() {
  if (musicPlaying) {
    return;
  }

  musicPlaying = true;
  musicButton.classList.add("is-playing");
  musicButton.setAttribute("aria-label", "Turn music off");

  if (!ensureAudio()) {
    initFallbackAudio();
    if (fallbackMusicAudio) {
      fallbackMusicAudio.play().catch(() => {});
    }
    return;
  }

  const melody = [
    [523.25, 0.22],
    [659.25, 0.22],
    [783.99, 0.28],
    [659.25, 0.22],
    [587.33, 0.22],
    [698.46, 0.22],
    [880.0, 0.32],
    [783.99, 0.28]
  ];
  let step = 0;

  const loop = () => {
    if (!musicPlaying) {
      return;
    }

    const [note, duration] = melody[step % melody.length];
    playTone(note, duration, "triangle", 0, 0.026);
    if (step % 2 === 0) {
      playTone(note / 2, 0.18, "sine", 0, 0.018);
    }
    step += 1;
    musicTimer = window.setTimeout(loop, duration * 1000 + 90);
  };

  loop();
}

function stopMusic() {
  musicPlaying = false;
  window.clearTimeout(musicTimer);
  if (fallbackMusicAudio) {
    fallbackMusicAudio.pause();
    fallbackMusicAudio.currentTime = 0;
  }
  musicButton.classList.remove("is-playing");
  musicButton.setAttribute("aria-label", "Turn music on");
}

function toggleMusic() {
  ensureAudio();
  if (musicPlaying) {
    stopMusic();
  } else {
    startMusic();
    playTapSound();
  }
}

function prepareVoices() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    voicesReady = true;
  };
}

function renderCategories() {
  categoryGrid.innerHTML = "";
  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.className = "category-card";
    button.type = "button";
    button.style.setProperty("--card-color", category.color);
    button.style.setProperty("--tilt", `${index % 2 === 0 ? -1.5 : 1.5}deg`);
    button.innerHTML = `<span class="category-icon">${category.icon}</span><span class="category-name">${category.name}</span>`;
    button.setAttribute("aria-label", `Open ${category.name}`);
    button.addEventListener("click", () => {
      ensureAudio();
      startMusic();
      playTapSound();
      openCategory(category);
    });
    categoryGrid.appendChild(button);
  });
}

function openCategory(category) {
  activeCategory = category;
  activeItem = null;
  categoryTitle.textContent = category.name;
  homeView.classList.remove("active");
  learnView.classList.add("active");
  spotlight.classList.remove("show");
  subtitleBar.classList.remove("show");
  renderItems(category);
}

function renderItems(category) {
  playArea.innerHTML = "";
  const positions = makePositions(category.items.length);
  category.items.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = `item-button ${getCharacterClass(item, category)}`;
    button.type = "button";
    button.style.setProperty("--x", `${positions[index].x}%`);
    button.style.setProperty("--y", `${positions[index].y}%`);
    button.style.setProperty("--bubble", colors[index % colors.length]);
    button.style.setProperty("--speed", `${2.8 + (index % 5) * 0.35}s`);
    button.innerHTML = `${buildCharacterMarkup(item, category)}<span class="item-label">${item.name}</span>`;
    button.setAttribute("aria-label", item.name);
    button.addEventListener("click", () => {
      ensureAudio();
      startMusic();
      playTapSound();
      introduceItem(item, category);
    });
    playArea.appendChild(button);
  });
}

function getCharacterClass(item, category) {
  const name = item.name.toLowerCase();
  if (["lion", "tiger", "bear", "elephant", "whale", "shark"].includes(name)) {
    return "character-bold";
  }
  if (["rabbit", "monkey", "kangaroo"].includes(name) || category.id === "birds") {
    return "character-bouncy";
  }
  if (category.id === "vehicles" || item.name.toLowerCase() === "rocket") {
    return "character-zoom";
  }
  if (category.id === "music") {
    return "character-musical";
  }
  if (category.id === "sea") {
    return "character-wavy";
  }
  return "character-sweet";
}

function buildCharacterMarkup(item, category, size = "small") {
  const characterClass = getCharacterClass(item, category);
  return `
    <span class="cartoon-character ${characterClass} ${size === "large" ? "cartoon-large" : ""}" aria-hidden="true">
      <span class="character-shine"></span>
      <span class="character-cheek character-cheek-left"></span>
      <span class="character-cheek character-cheek-right"></span>
      <span class="character-eye character-eye-left"></span>
      <span class="character-eye character-eye-right"></span>
      <span class="character-mouth"></span>
      <span class="character-icon">${item.icon}</span>
      <span class="character-spark character-spark-one"></span>
      <span class="character-spark character-spark-two"></span>
    </span>
  `;
}

function makePositions(count) {
  const positions = [];
  const cols = window.innerWidth < 680 ? 3 : 5;
  const rows = Math.ceil(count / cols);
  for (let index = 0; index < count; index += 1) {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = 4 + col * (92 / cols) + ((row % 2) * 3);
    const y = 3 + row * (82 / rows) + ((col % 2) * 5);
    positions.push({ x, y });
  }
  return positions.sort(() => Math.random() - 0.5);
}

function introduceItem(item, category) {
  activeItem = { item, category };
  featuredItem.className = `featured-item ${getCharacterClass(item, category)}`;
  featuredItem.innerHTML = buildCharacterMarkup(item, category, "large");
  featuredItem.style.setProperty("--feature-color", category.color);
  speechBubble.textContent = item.intro;
  spotlight.classList.add("show");
  renderSubtitles(item.intro);
  renderSparkles();
  playPersonalitySound(item, category);
  window.setTimeout(() => speak(item.intro, item, category), 420);
}

function renderSubtitles(text) {
  subtitleBar.innerHTML = "";
  text.split(" ").forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "subtitle-word";
    span.textContent = word;
    span.style.animationDelay = `${index * 55}ms`;
    subtitleBar.appendChild(span);
  });
  subtitleBar.classList.add("show");
}

function renderSparkles() {
  sparkleField.innerHTML = "";
  const icons = ["⭐", "✨", "💫", "🌟", "🎉", "💖"];
  for (let index = 0; index < 26; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.textContent = icons[index % icons.length];
    sparkle.style.setProperty("--sx", `${18 + Math.random() * 64}%`);
    sparkle.style.setProperty("--sy", `${24 + Math.random() * 52}%`);
    sparkle.style.setProperty("--delay", `${Math.random() * 0.5}s`);
    sparkleField.appendChild(sparkle);
  }
}

function speak(text, item = activeItem?.item, category = activeItem?.category) {
  if (!("speechSynthesis" in window)) {
    playSparkleSound();
    return;
  }

  window.speechSynthesis.cancel();
  const profile = getSpeechProfile(item || { name: "" }, category || activeCategory);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = profile.rate;
  utterance.pitch = profile.pitch;
  utterance.volume = profile.volume;
  const voices = window.speechSynthesis.getVoices();
  const friendlyVoice = voices.find((voice) => profile.voicePattern.test(voice.name)) || voices.find((voice) => /english|en-/i.test(`${voice.name} ${voice.lang}`));
  if (friendlyVoice) {
    utterance.voice = friendlyVoice;
  }

  utterance.onerror = () => {
    playSparkleSound();
  };

  if (!voices.length && !voicesReady) {
    window.setTimeout(() => speak(text), 180);
    voicesReady = true;
    return;
  }

  currentSpeechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

backButton.addEventListener("click", () => {
  ensureAudio();
  playTapSound();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  learnView.classList.remove("active");
  homeView.classList.add("active");
});

soundButton.addEventListener("click", () => {
  ensureAudio();
  startMusic();
  playTapSound();
  if (activeItem) {
    introduceItem(activeItem.item, activeItem.category);
  }
});

musicButton.addEventListener("click", toggleMusic);

window.addEventListener("resize", () => renderItems(activeCategory));

prepareVoices();
renderCategories();
