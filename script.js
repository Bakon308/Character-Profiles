// ─────────────────────────────────────────────────────────────────────────────
// White Tiger Archives — Data Engine
// Pre-seeded with Grimoria character dossiers (story canon, Chapters 1–47)
// ─────────────────────────────────────────────────────────────────────────────

const SEED_KEY   = 'wta_seeded_v1';
const STORE_KEY  = 'wta_characters';

const SEED_DATA = [];

// ─── Storage helpers ──────────────────────────────────────────────────────────

function getAllCharacters() {
  const data = localStorage.getItem(STORE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAllCharacters(arr) {
  localStorage.setItem(STORE_KEY, JSON.stringify(arr));
}

function seedIfNeeded() {
  if (!localStorage.getItem(SEED_KEY)) {
    localStorage.setItem(STORE_KEY, JSON.stringify(SEED_DATA));
    localStorage.setItem(SEED_KEY, '1');
  }
}

function createCharacterProfile(obj) {
  const db = getAllCharacters();
  obj.id = Date.now().toString();
  db.push(obj);
  saveAllCharacters(db);
  return obj;
}

function getCharacterById(id) {
  return getAllCharacters().find(c => c.id === id);
}

function updateCharacterProfile(id, fields) {
  let db = getAllCharacters();
  db = db.map(c => c.id === id ? { ...c, ...fields, id } : c);
  saveAllCharacters(db);
}

function displayDirectory() {
  const grid = document.getElementById('directory-grid');
  if (!grid) return;

  seedIfNeeded();
  const db = getAllCharacters();
  grid.innerHTML = '';

  if (db.length === 0) {
    grid.innerHTML = '<p class="error-msg">// ACCESS DENIED: NO DOSSIERS FOUND IN LOCAL BLOCKS.</p>';
    return;
  }

  const statusOrder = { 'Active': 0, 'Under Surveillance': 1, 'MIA': 2, 'Deceased': 3 };
  const sorted = [...db].sort((a, b) =>
    (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99)
  );

  sorted.forEach(char => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.innerHTML = `
      <h3>${char.name || 'UNIDENTIFIED SUBJECT'}</h3>
      <p><strong>DESIGNATION:</strong> ${char.alias || 'None'}</p>
      <p><strong>STATUS:</strong> <span class="text-status">${char.status || 'Unknown'}</span></p>
      <p><strong>THREAT LEVEL:</strong> ${char.threatLevel || 'Unassigned'}</p>
      <a href="profile.html?id=${char.id}" class="btn-card">DECRYPT DOSSIER</a>
    `;
    grid.appendChild(card);
  });
}

function getBlankTemplate() {
  return {
    name: '', alias: '', age: '', birthday: '', placeOfBirth: '', currentResidence: '',
    status: 'Under Surveillance', threatLevel: 'Class-A', affiliation: '', tags: [],
    height: '', weight: '', bodyBuild: '', eyeColor: '', hairColor: '', skinColor: '',
    scars: '', distinguishingMarks: '',
    mbti: '', moralAlignment: '', fears: '', personalGoals: '', generalAttitude: '',
    personalityDesc: '',
    illnesses: '', allergies: '', mentalIllnesses: '', unhealthyHabits: '',
    familyHistory: '', relationshipNotes: '',
    powersName: '', powersOrigin: '', powersDrawbacks: '', combatCapabilities: '',
    weaponsParaphernalia: '',
    jobTitle: '', employer: '', income: '', netWorth: '',
    criminalRecordCrime: '', criminalRecordVerdict: '', criminalRecordStatus: '',
    caseFiles: ''
  };
}

function exportDatabase() {
  const data = localStorage.getItem(STORE_KEY);
  if (!data || data === '[]') {
    alert('SYSTEM CONFIRMATION: Active mainframe yields zero data blocks.');
    return;
  }
  const blob = new Blob([data], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'WTA_GRIMORIA_DATA.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importDatabase(inputElement) {
  const file = inputElement.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) {
        alert('INTEGRITY CRASH: Incompatible data packet array architecture.');
        return;
      }
      runDecryptionAnimation(imported);
    } catch {
      alert('SECURITY BLOCK: Hex corruption detected within imported packet.');
    }
  };
  reader.readAsText(file);
}

function runDecryptionAnimation(validDataArray) {
  const overlay  = document.getElementById('decryption-overlay');
  const logBox   = document.getElementById('matrix-log');
  const bar      = document.getElementById('matrix-progress');
  const heading  = document.getElementById('matrix-header');
  const subBar   = document.getElementById('matrix-sub');

  overlay.classList.remove('hidden');
  logBox.innerHTML = '';
  bar.style.width  = '0%';

  const steps = [
    { text: '>> Establishing handshake via White Tiger Core...', time: 200 },
    { text: '>> Injecting polymorphic decryption matrix keys...', time: 500 },
    { text: '>> Bypassing memory storage segmentation sectors...', time: 900 },
    { text: '>> Parsing structural character data object nodes...', time: 1300 },
    { text: `>> Verified [${validDataArray.length}] classified dossiers within package.`, time: 1600 },
    { text: '>> Rewriting local hardware storage blocks...', time: 2000 },
    { text: '>> Flushing system diagnostics pipeline...', time: 2300 },
    { text: '>> MAIN INFRASTRUCTURE RECONSTRUCTION COMPLETE.', time: 2600 },
  ];

  steps.forEach(s => setTimeout(() => {
    const p = document.createElement('div');
    p.textContent = s.text;
    logBox.appendChild(p);
    logBox.scrollTop = logBox.scrollHeight;
  }, s.time));

  let progress = 0;
  const iv = setInterval(() => {
    progress += 4;
    if (progress <= 100) bar.style.width = `${progress}%`;
    if (progress === 40) subBar.textContent = 'CONSTRUCTING COGNITIVE MATRIX PATTERNS';
    if (progress === 80) subBar.textContent = 'SYNCHRONIZING SECURE STORAGE ARRAYS';
  }, 100);

  setTimeout(() => {
    clearInterval(iv);
    heading.textContent = 'ACCESS GRANTED';
    heading.style.color = 'var(--status-active)';
    bar.style.backgroundColor = 'var(--status-active)';
    setTimeout(() => {
      localStorage.setItem(STORE_KEY, JSON.stringify(validDataArray));
      localStorage.setItem(SEED_KEY, '1');
      overlay.classList.add('hidden');
      heading.textContent = 'INITIALIZING DECRYPTION SEQUENCE...';
      heading.style.color = 'var(--neon-blue)';
      bar.style.backgroundColor = 'var(--neon-blue)';
      subBar.textContent = 'READING RAW INTERFERENCE PACKETS';
      displayDirectory();
    }, 1000);
  }, 2800);
}
