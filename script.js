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