// Data Engine for White Tiger Archives (WTA)

function getAllCharacters() {
  const data = localStorage.getItem('wta_characters');
  return data ? JSON.parse(data) : [];
}

function saveAllCharacters(charactersArr) {
  localStorage.setItem('wta_characters', JSON.stringify(charactersArr));
}

function createCharacterProfile(characterObj) {
  const database = getAllCharacters();
  characterObj.id = Date.now().toString(); // System Timestamp ID
  database.push(characterObj);
  saveAllCharacters(database);
  return characterObj;
}

function getCharacterById(id) {
  const database = getAllCharacters();
  return database.find(char => char.id === id);
}

function updateCharacterProfile(id, updatedFields) {
  let database = getAllCharacters();
  database = database.map(char => {
    if (char.id === id) {
      return { ...char, ...updatedFields, id }; 
    }
    return char;
  });
  saveAllCharacters(database);
}

function displayDirectory() {
  const grid = document.getElementById('directory-grid');
  if (!grid) return;
  
  const database = getAllCharacters();
  grid.innerHTML = '';

  if (database.length === 0) {
    grid.innerHTML = '<p class="error-msg">// ACCESS DENIED: NO DOSSIERS FOUND IN LOCAL BLOCKS.</p>';
    return;
  }

  database.forEach(char => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.innerHTML = `
      <h3>${char.name || "UNIDENTIFIED SUBJECT"}</h3>
      <p><strong>DESIGNATION:</strong> ${char.alias || "None"}</p>
      <p><strong>STATUS:</strong> <span class="text-status">${char.status || "Unknown"}</span></p>
      <p><strong>THREAT LEVEL:</strong> ${char.threatLevel || "Unassigned"}</p>
      <a href="profile.html?id=${char.id}" class="btn-card">DECRYPT DOSSIER</a>
    `;
    grid.appendChild(card);
  });
}

// Global factory defaults to feed the "Add New" action with empty structures matching template fields
function getBlankTemplate() {
  return {
    name: "", alias: "", age: "", birthday: "", placeOfBirth: "", currentResidence: "",
    status: "Under Surveillance", threatLevel: "Class-A", affiliation: "", tags: [],
    height: "", weight: "", bodyBuild: "", eyeColor: "", hairColor: "", scars: "", distinguishingMarks: "",
    mbti: "", moralAlignment: "", fears: "", personalGoals: "", generalAttitude: "", personalityDesc: "",
    illnesses: "", allergies: "", mentalIllnesses: "", unhealthyHabits: "",
    familyHistory: "", relationshipNotes: "",
    powersName: "", powersOrigin: "", powersDrawbacks: "", combatCapabilities: "", weaponsParaphernalia: "",
    jobTitle: "", employer: "", income: "", netWorth: "",
    criminalRecordCrime: "", criminalRecordVerdict: "", criminalRecordStatus: "",
    caseFiles: ""
  };
}

// Export current state context
function exportDatabase() {
  const data = localStorage.getItem('wta_characters');
  if (!data || data === "[]") {
    alert("SYSTEM CONFIRMATION: Active mainframe yields zero data blocks.");
    return;
  }
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `WTA_CORE_DATA.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Advanced Animated Import Decoder
function importDatabase(inputElement) {
  const file = inputElement.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      
      if (!Array.isArray(importedData)) {
        alert("INTEGRITY CRASH: Incompatible data packet array architecture.");
        return;
      }

      // Engage the visual sequence!
      runDecryptionAnimation(importedData);
      
    } catch (err) {
      alert("SECURITY BLOCK: Hex corruption detected within imported packet.");
    }
  };
  reader.readAsText(file);
}

function runDecryptionAnimation(validDataArray) {
  const overlay = document.getElementById('decryption-overlay');
  const logBox = document.getElementById('matrix-log');
  const progressBar = document.getElementById('matrix-progress');
  const heading = document.getElementById('matrix-header');
  const subBar = document.getElementById('matrix-sub');

  // Reveal full-screen decryption mainframe matrix
  overlay.classList.remove('hidden');
  logBox.innerHTML = '';
  progressBar.style.width = '0%';
  
  // Tactical logging output feeds for the puzzle solver
  const steps = [
    { text: ">> Establishing handshake via White Tiger Core...", time: 200 },
    { text: ">> Injecting polymorphic decryption matrix keys...", time: 500 },
    { text: ">> Bypassing memory storage segmentation sectors...", time: 900 },
    { text: ">> Parsing structural character data object nodes...", time: 1300 },
    { text: `>> Verified [${validDataArray.length}] classified dossiers within package.`, time: 1600 },
    { text: ">> Rewriting local hardware storage blocks...", time: 2000 },
    { text: ">> Flushing system diagnostics pipeline...", time: 2300 },
    { text: ">> MAIN INFRASTRUCTURE RECONSTRUCTION COMPLETE.", time: 2600 }
  ];

  // Animate text lines printing to simulate a terminal decrypting
  steps.forEach(step => {
    setTimeout(() => {
      const p = document.createElement('div');
      p.textContent = step.text;
      logBox.appendChild(p);
      logBox.scrollTop = logBox.scrollHeight; // Force scroll tracking
    }, step.time);
  });

  // Animate the progress status loading line bar smoothly
  let progress = 0;
  const interval = setInterval(() => {
    progress += 4;
    if (progress <= 100) {
      progressBar.style.width = `${progress}%`;
    }
    if (progress === 40) subBar.textContent = "CONSTRUCTING COGNITIVE MATRIX PATTERNS";
    if (progress === 80) subBar.textContent = "SYNCHRONIZING SECURE STORAGE ARRAYS";
  }, 100);

  // Seal storage arrays execution step and dismiss overlay screen
  setTimeout(() => {
    clearInterval(interval);
    heading.textContent = "ACCESS GRANTED";
    heading.style.color = "var(--status-active)";
    progressBar.style.backgroundColor = "var(--status-active)";
    
    setTimeout(() => {
      // Save data array to machine state memory space
      localStorage.setItem('wta_characters', JSON.stringify(validDataArray));
      
      // Clear elements, hide overlay, update screen interface counters
      overlay.classList.add('hidden');
      heading.textContent = "INITIALIZING DECRYPTION SEQUENCE...";
      heading.style.color = "var(--neon-blue)";
      progressBar.style.backgroundColor = "var(--neon-blue)";
      subBar.textContent = "READING RAW INTERFERENCE PACKETS";
      
      displayDirectory(); // Instantly show characters on directory panel grid
    }, 1000);

  }, 2800);
}