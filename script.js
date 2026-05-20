// ─────────────────────────────────────────────────────────────────────────────
// White Tiger Archives — Data Engine
// Pre-seeded with Grimoria character dossiers (story canon, Chapters 1–47)
// ─────────────────────────────────────────────────────────────────────────────

const SEED_KEY   = 'wta_seeded_v1';
const STORE_KEY  = 'wta_characters';

const SEED_DATA = [
  {
    id: "1000000001",
    name: "Lincoln Grey",
    alias: "Chief (former) / Professor Grey",
    age: "Late 20s",
    birthday: "Unknown",
    placeOfBirth: "Hurst Empire",
    currentResidence: "Black Tortoise Dormitory, Grimoria, Atellian Empire",
    status: "Active",
    threatLevel: "Gold Ring — Extreme",
    affiliation: "Black Tortoise Academy (Magic Instructor) / Former unnamed elite squad",
    tags: ["Gold Ring", "Magic Researcher", "Former Squad Chief", "Teacher"],

    height: "Average-tall (exact unspecified)",
    weight: "Unknown",
    bodyBuild: "Lean; built for agility rather than raw power",
    eyeColor: "Hazel",
    hairColor: "Ragged / unkempt dark hair",
    skinColor: "Pale, tired complexion",
    scars: "Residual pain in the stomach area from a magic-bullet impact sustained on the Grimoria-bound train. Historical deep stab wound to the left chest (two years prior, Monster Catastrophe mission).",
    distinguishingMarks: "Often seen in a long coat treated with fire-resistant magic. Wears silver-lined glasses when teaching. Gold ring on finger.",

    mbti: "INTJ (inferred)",
    moralAlignment: "Neutral Good",
    fears: "Losing people he cares about due to his own decisions. Repeating the mistake he made when he sent Cyrene Grace to the north front.",
    personalGoals: "Warn and protect surviving squad members. Uncover and neutralise the organisation targeting them. Find meaning beyond hunting.",
    generalAttitude: "Quiet, self-contained, and perpetually observant. Appears detached but acts with deep conviction. Dry humour surfaces rarely. Profoundly self-critical in private.",
    personalityDesc: "Lincoln carries the weight of a strategist who has been wrong exactly once, and that once cost him everything. He defaults to silence and observation, preferring to understand a situation entirely before acting. He isn't cold, but careful. His love for Cyrene, and the guilt that followed her death, quietly shapes every choice he makes. He teaches because Pan sent him, but he stays because something in the work matters to him. He is most himself when he is moving, flying, fighting, running, as though stillness lets the grief catch up.",

    illnesses: "None recorded",
    allergies: "None recorded",
    mentalIllnesses: "Unresolved grief and survivor's guilt following the death of Cyrene Grace. Recurring intrusive memories of the Monster Catastrophe.",
    unhealthyHabits: "Sleeps poorly (5 hours or less). Eats quickly — a habit from years of field work. Keeps emotional distance as a default.",
    familyHistory: "Unknown. No family members mentioned in any record.",
    relationshipNotes: "Cyrene Grace (deceased) — former squadmate and the person he loved. Her death defines his current psychological state.\nHina Kang — trusted colleague and old friend. Mutual care, though neither is openly sentimental.\nAlan Ernst — former squad member; Lincoln views him with protective warmth disguised as exasperation.\nVincent Hinge — student he is cautiously watching; sensed pain and fear beneath the boy's enthusiasm.",

    powersName: "Multi-element direct casting; Mana Stacking (Combination); Fire-resistant coat enchantment",
    powersOrigin: "Self-developed through years of global research and study. Not born with strong natural talent — built his capability from scratch. Supplemented by a portion of Pan Hollow's magic received via signal.",
    powersDrawbacks: "Mana Stacking (Combination) is physically and mentally exhausting (absorbing 7 high-level spells simultaneously caused him to pass out). High mana expenditure across a single day visibly strains him. Holding multiple barriers simultaneously while fighting depletes reserves rapidly.",
    combatCapabilities: "Exceptional. Fluent in wind, fire, ice, earth, and shield magic. Can multi-cast and negate opposing spells. Uses enhancement magic on his legs and perception for combat agility. Can sense mana density and identify magic types at range. Took down a Bronze Army mercenary, a red demon (jointly), and a dark-magic user (Clement Hinge) in rapid succession within 48 hours.",
    weaponsParaphernalia: "Fire-resistant enchanted coat. Silver crystal (communication device, given by Hina). Briefcase (contains personal effects and a copy of A Guide to Magic by Pan Hollow). No conventional weapons.",

    jobTitle: "Magic Instructor, Magic Training Unit",
    employer: "Black Tortoise Academy, Grimoria",
    income: "Teacher's salary (newly commenced)",
    netWorth: "Implied comfortable savings from prior career; exact figure unknown",
    criminalRecordCrime: "None on official record",
    criminalRecordVerdict: "N/A",
    criminalRecordStatus: "Clean",

    caseFiles: "Subject arrived in Grimoria via train from Hurst Empire on June 24, 1628. Neutralised a Bronze-Ring-level mercenary on board before an explosion forced him into the lake. Made contact with Captain Hina Kang the same evening.\n\nSubsequently: intervened in a street burning (Ch.16), assisted in repelling a red demon at Black Tortoise (Ch.31–33), survived an attack on the White Tiger alongside Ernst (Ch.38–39), engaged and drove off a dark-magic user in the greenhouse (Ch.42).\n\nSubject passed the Black Tortoise interview by absorbing all high-level spells from the interview panel simultaneously — rendering himself unconscious. Hired anyway.\n\nNote from field: Subject has a partial reserve of Pan Hollow's magic stored. Full implications unknown. — Officer I. Fyroah"
  },

  {
    id: "1000000002",
    name: "Hina Kang",
    alias: "Captain Kang",
    age: "24 (15 during the incident nine years ago)",
    birthday: "Unknown",
    placeOfBirth: "Atellian Empire",
    currentResidence: "White Tiger Headquarters, Grimoria",
    status: "Active",
    threatLevel: "Silver Ring — High (daughter of Chief Officer)",
    affiliation: "White Tiger (Captain, Force 1) / Former unnamed elite squad",
    tags: ["Silver Ring", "White Tiger Captain", "Psychic Magic", "Former Squad Member"],

    height: "Average (Kyria described as similar height or slightly shorter)",
    weight: "Unknown",
    bodyBuild: "Trim and athletic",
    eyeColor: "Fierce, piercing black",
    hairColor: "Long silver hair",
    skinColor: "Fair",
    scars: "No physical scars noted. Psychological scarring from a traumatic incident at age 15 involving black mist, a floating figure, and the sound of bones cracking — likely connected to her mother's death.",
    distinguishingMarks: "Silver ring. White suit (on duty). Purple Grimoire. Known to favour high heels on duty; switches to leather boots or black sneakers off-duty.",

    mbti: "ESTJ (inferred)",
    moralAlignment: "Lawful Good",
    fears: "Fire — has a documented bad history with it; passed out during the White Tiger attack due to smoke and flames. Losing more people under her watch. Being the reason someone else suffers.",
    personalGoals: "Keep Grimoria safe. Close the Firebird case. Reconnect with her father, even if she cannot say it aloud. Spend real time with her squad again when this is over.",
    generalAttitude: "Decisive, authoritative, and sharply intelligent in the field. Privately warmer — laughs easily with people she trusts, teases Lincoln, worries about Alan. Struggles to reconcile her institutional role with the personal cost it extracts.",
    personalityDesc: "Hina is the most overtly functional member of the old squad — she holds rank, she commands, she delivers results. Underneath that is a woman who has carried grief for her mother for nine years and has never properly forgiven her father for it, even though she does not want to hate him. She joined the White Tiger because of her father's words about doing the right thing when no one else will. She keeps plants in her office — rare ones, some sustained by ancient magic — because they are quiet and they stay. She does not like fire.",

    illnesses: "None recorded",
    allergies: "None recorded",
    mentalIllnesses: "Unresolved grief and complicated anger toward her father following her mother's death. Trauma response to fire (faints or loses consciousness in heavy smoke).",
    unhealthyHabits: "Overworks consistently. Drinks alone at her regular bar after difficult shifts. Delays rest in favour of more paperwork.",
    familyHistory: "Father: Frank Kang, Chief Officer of the White Tiger. Described as a large, bear-like man with deep sorrow behind his eyes. He blames himself for his wife Mel's death, believing his cowardice caused it. Has never apologised to Hina for this.\nMother: Mel Kang (deceased). Circumstances of death linked to Frank Kang's failure to act.",
    relationshipNotes: "Frank Kang (father) — fraught and painful. She does not hate him but cannot forgive him easily. They work together without resolving anything.\nLincoln Grey — old friend, deep mutual trust. She punched Alan in the stomach as a greeting. That tells you what you need to know about how she shows she cares.\nAlan Ernst — protective of him even while scolding him. Covered for him with hospital staff about his curse marks.\nDemi Sanchez (Demiah) — close friend since childhood; Hina instantly saw through Demi's interest in Alan and chose not to embarrass her.",

    powersName: "Psychic / Telekinetic magic; Flight; Grimoire-based Sigilum casting",
    powersOrigin: "Atellian Empire magical tradition (Grimoire and Sigila). Supported by the Kang family's wealth and resources from a young age.",
    powersDrawbacks: "Mana depletes quickly in sustained use — she ran out during the chase at the docks and the rain started falling on her immediately. Uses a Grimoire, which requires active writing — slower than Lincoln's direct-cast method.",
    combatCapabilities: "Highly capable. Levitates and flies under her own power. Controls and accelerates debris as projectile weapons. Can manipulate the ground under opponents. Telekinetically pulled and slammed a target during the dock chase. Fired a large fountain fragment at the red demon with precision. Used the last of her strength while semi-conscious to hurl a door at Gret, saving Alan's life.",
    weaponsParaphernalia: "Purple Grimoire. White crystal (communication device). Standard White Tiger officer equipment. Black heels (surprisingly relevant — she has kicked in doors).",

    jobTitle: "Captain, Force 1 — White Tiger",
    employer: "White Tiger, Grimoria (Atellian Empire law enforcement)",
    income: "Officer's salary",
    netWorth: "Kang family wealth in background; her personal finances modest by family standards",
    criminalRecordCrime: "None",
    criminalRecordVerdict: "N/A",
    criminalRecordStatus: "Clean",

    caseFiles: "Captain Kang led the initial response to the train bombing on June 24, 1628. Coordinated scene security, eyewitness interviews, and the pursuit of subjects in the lake. Identified Lincoln Grey and Alan Ernst independently.\n\nSubsequently managed the demon response at Black Tortoise, coordinated White Tiger deployment, and was hospitalised after the Firebird's attack on White Tiger HQ (smoke inhalation / fire trauma). Discharged and returned to active duty within hours.\n\nNote: Captain Kang demonstrates exceptional situational awareness and leadership but is advised by this office to take leave when the case resolves. — Chief F. Kang\n\n(Note appended by Officer Fyroah: The Chief wrote that himself. She does not know.)"
  },

  {
    id: "1000000003",
    name: "Alan Ernst",
    alias: "Dream Killer (classified alias, do not circulate)",
    age: "Late 20s",
    birthday: "Unknown",
    placeOfBirth: "Gynos Empire",
    currentResidence: "In transit / Vermillion Bird hospital (temporary) / Grimoria (current)",
    status: "Under Surveillance",
    threatLevel: "Unclassified — Extreme (see field notes)",
    affiliation: "Formerly: unnamed elite squad. Currently: unaffiliated. Wanted escapee, Svarga Prison (Bronze Guard).",
    tags: ["Future Sight", "Curse Bearer", "Tinkerer", "Former Squad Member", "Escapee"],

    height: "Average",
    weight: "Unknown",
    bodyBuild: "Slim but enduring — capable of sustained physical exertion",
    eyeColor: "Stormy grey",
    hairColor: "Brown, longer and slightly messy",
    skinColor: "Unknown",
    scars: "Black curse marks from the Book of Kygrios covering most of his stomach, spreading to his chest. Rate of spread has accelerated recently. At last observation, marks had reached the bottom of his neck.",
    distinguishingMarks: "Bronze sparrow (Dusty) almost always perched on his shoulder or head. Wears a brown silk shirt (replacement, procured by Dusty). Dark prisoner overalls underneath (tattered). Curse marks visible if shirt is removed.",

    mbti: "ENTP (inferred)",
    moralAlignment: "Chaotic Good",
    fears: "The dream that recurs since the curse worsened — drowning in an infinite library, books closing in until he cannot move. Losing his future sight and dream-sending permanently. The curse marks reaching his heart.",
    personalGoals: "Reach Lincoln and Hina. Help neutralise whatever is targeting the squad. Patent Dusty and present at the Festival of Innovation. Not die from the curse.",
    generalAttitude: "Cheerful, irreverent, and almost aggressively optimistic on the surface. Genuinely inventive and curious. Quietly brave in ways he would never call bravery. Hides the seriousness of his deteriorating curse from his squadmates.",
    personalityDesc: "Alan is the kind of person who greets a friend he has not seen in weeks by announcing he chose them specifically when he could have warned anyone — because that is Alan's version of sentiment. He is the squad's chaos agent and its most surprisingly reliable member. He built Dusty from scratch. He broke out of prison not because he was suffering but because the squad needed him. He is also dying, slowly, and he has decided not to mention it more than necessary. His laugh is real. So is the fear behind it.",

    illnesses: "Kygrios Curse (progressive dark-magic affliction from contact with the Book of Kygrios). Spreading black marks. Loss of future sight and dream-communication in recent days. Terminal if untreated.",
    allergies: "None recorded",
    mentalIllnesses: "Recurring nightmare (library / drowning in books). Possible dissociative episodes when the curse flares.",
    unhealthyHabits: "Conceals the severity of his illness from people he cares about. Sleeps in the open (by choice, apparently). Eats at establishments that will admit a metal bird.",
    familyHistory: "No family records available. Gynos Empire origin only.",
    relationshipNotes: "Lincoln Grey — calls him 'Chief' even now. Deep mutual loyalty, expressed through banter.\nHina Kang — she punched him in the stomach, then hugged him. He considers this entirely normal.\nDusty — the bronze falcon / sparrow he built himself. Their relationship is functionally that of a person and their most trusted companion.\nDemi Sanchez — met once at the White Tiger desk. She made him coffee unprompted. He has not stopped thinking about her office. (Observation by Captain Kang, filed informally.)",

    powersName: "Future Sight; Dream Communication; Fire-willing (can redirect and control flames cast by others); Illusion Magic (Book of Kygrios, restricted use)",
    powersOrigin: "Future sight and dream communication are natural abilities. Fire-willing developed during forge training in the Gynos Empire. Book of Kygrios power is a curse — acquired unintentionally during a squad mission to recover the relic.",
    powersDrawbacks: "Future sight and dream-sending have been non-functional for several days (curse progression). Fire-willing only works on fire cast by others — he cannot generate his own. Book of Kygrios illusion power (used to kill Sel Gretsel) causes significant physical toll and psychological distress; he swore not to use it again. Curse marks spreading faster than anticipated.",
    combatCapabilities: "Competent but not primary. Strong in situations involving fire (willing). Carries a metal hammer as a primary weapon. Relies on surprise, misdirection, and Dusty for tactical advantage. Capable of sleeping spells. In the fight with the Gretsel twins: took two hits, broke a nose, and still won — but barely.",
    weaponsParaphernalia: "Metal hammer. Rucksack (contains Dusty, iron nails, ogre horns, spider silk, and miscellaneous forge/tinkering materials). Dusty (bronze falcon, transforms between large falcon and sparrow; projects holograms, shoots sharp feathers, provides navigation and scouting). Archean string (near-unbreakable, used for rucksack strap).",

    jobTitle: "None (officially)",
    employer: "None",
    income: "Guild trading (monster materials)",
    netWorth: "Unknown; travels light",
    criminalRecordCrime: "Failure to register a caravan with the guild (Gynos Empire). Subsequent escape from Svarga Prison (Bronze Guard).",
    criminalRecordVerdict: "3–4 month sentence (original). Escape adds additional charges.",
    criminalRecordStatus: "Escaped. Warrant active. High Council declaration as enemy of the four empires expected within hours of this filing.",

    caseFiles: "Subject arrived in Grimoria by train on a later service than Lincoln Grey, having crossed the mountain range on foot with Dusty and boarded from the roof. Presented himself at White Tiger HQ requesting Captain Kang.\n\nDefended White Tiger HQ alone against the Gretsel twins while Captain Kang was incapacitated. Killed Sel Gretsel using Book of Kygrios illusion magic (classified method). Sustained injuries; hospitalised.\n\nNote: Subject's curse marks were observed by nursing staff. Captain Kang provided cover story. This officer recommends this file be sealed at Gold-Ring clearance. Subject has more than earned that much. — Officer I. Fyroah"
  },

  {
    id: "1000000004",
    name: "Cyrene Grace",
    alias: "None on record",
    age: "Deceased at approximately mid-20s",
    birthday: "Unknown",
    placeOfBirth: "Killian Empire",
    currentResidence: "Deceased. North front, Monster Catastrophe battlefield (June 1626).",
    status: "Deceased",
    threatLevel: "Classification withheld (posthumous record)",
    affiliation: "Killian Empire / Former unnamed elite squad",
    tags: ["Deceased", "Fire Magic", "Squad Member", "North Front"],

    height: "Short — Hina described as towering over her",
    weight: "Unknown",
    bodyBuild: "Small frame; did not falter under pressure despite stature",
    eyeColor: "Black; described as reflecting light beautifully",
    hairColor: "Black, fell smoothly on her shoulders",
    skinColor: "Unknown",
    scars: "None recorded ante-mortem.",
    distinguishingMarks: "Hair smelled of lavender. Described as beautiful in formal dress (slim grey dress, black heels at the party). Stood with an awkward but firm stance that Lincoln found disarming.",

    mbti: "ISFP or INFP (inferred — independent, quietly brave, emotionally present)",
    moralAlignment: "Neutral Good",
    fears: "Being seen as a liability. Failing to prove herself after a prior mission went wrong.",
    personalGoals: "To prove herself worthy of the squad's trust. To be assigned missions that matched what she believed she could do.",
    generalAttitude: "Determined, quietly self-assured, and emotionally perceptive. Did not back down from Hina when Hina outranked and outweighed her. Winked at Lincoln across a crowded party. Said 'I'll be okay' like she meant it.",
    personalityDesc: "Cyrene was the fourth member of the squad — the one Lincoln trusted most, the one Alan respected even when he disapproved of her plans, the one Hina tried to protect because she saw too much of herself in the girl's stubbornness. She wanted to fight the north front not for glory but because she was sent for a reason and she needed to know it. She promised she would not be taken away. She was. Lincoln has not stopped asking himself why he let her go.",

    illnesses: "None recorded",
    allergies: "None recorded",
    mentalIllnesses: "None recorded. History of pressure to prove herself following a prior mission failure.",
    unhealthyHabits: "Accepted dangerous assignments rather than admitting uncertainty.",
    familyHistory: "Killian Empire origin. No further family records available.",
    relationshipNotes: "Lincoln Grey — mutual love, confessed by Lincoln in the tent before she deployed. She said 'took you long enough.' Her last words to him were a promise.\nHina Kang — protective relationship; Hina tried to redirect her to the safer front. They ate together at the victory party.\nAlan Ernst — Alan rarely approved of her more reckless ideas, which says something given Alan's own threshold for recklessness.",

    powersName: "Fire magic (primary). Exact capabilities unspecified in available records.",
    powersOrigin: "Killian Empire training.",
    powersDrawbacks: "Red ogres — her assigned target — were weak to fire magic, but the engagement required her to push beyond her current limits. She knew this.",
    combatCapabilities: "Sufficient for her rank and assignment. Believed capable of the north front mission. Did not return from it.",
    weaponsParaphernalia: "No specific weapons on record.",

    jobTitle: "Squad operative (Killian Empire assignment)",
    employer: "Killian Empire (seconded to multi-empire squad)",
    income: "Military stipend",
    netWorth: "Unknown",
    criminalRecordCrime: "None",
    criminalRecordVerdict: "N/A",
    criminalRecordStatus: "N/A",

    caseFiles: "Cyrene Grace died during the Monster Catastrophe, approximately two years before this filing. She was deployed to the north front at her own insistence and with Lincoln Grey's authorisation — a decision Grey has never forgiven himself for.\n\nHer body was recovered at the clearing. Hina and Alan were still fighting their own engagements when Grey found her.\n\nThis record exists because she deserves one.\n\nShe promised she would be okay. That is the last field note this office has for her. — Compiled by H. Kang"
  },

  {
    id: "1000000005",
    name: "Clement Hinge",
    alias: "None confirmed; referred to as 'dear brother' by Vincent's voice",
    age: "Early-to-mid 20s (twin of Vincent)",
    birthday: "Unknown",
    placeOfBirth: "Grimoria, Atellian Empire",
    currentResidence: "Underground Firebird base, Grimoria (mobile — exact location shifting)",
    status: "Under Surveillance",
    threatLevel: "Class-S — Extreme (dark magic, demon summoning, active terrorism)",
    affiliation: "Firebird (Leader) / Hinge family (estranged)",
    tags: ["Firebird Leader", "Dark Magic", "Demon Summoning", "Red Ring Adjacent", "Twin"],

    height: "Similar to Vincent — exact unspecified",
    weight: "Unknown",
    bodyBuild: "Described as having once been elegant-faced; now thin and bony. Worn by his use of dark magic.",
    eyeColor: "Yellow (glowing, similar to Vincent's but described as eerily different on closer inspection)",
    hairColor: "Long red hair (tattered, unkempt)",
    skinColor: "Pale, bloodshot complexion",
    scars: "No physical scars recorded. Sustained injuries in greenhouse fight with Lincoln Grey — degree unknown.",
    distinguishingMarks: "Red coat (Firebird standard, lined with gold as leader). Dark combat gear when on assassination operations. Black mask covering lower face during covert ops. Yellow eyes glow faintly. Visually indistinguishable from Vincent at distance.",

    mbti: "INTJ or INFJ (under corruption — original type obscured)",
    moralAlignment: "Chaotic Evil (active); possibly Neutral at origin — see field notes",
    fears: "Losing control of his own mind to Vincent's voice. The clearness that comes between instructions — the question of who he actually is.",
    personalGoals: "Complete Operation Nyx. Capture Professor Kyria (secretly — against Vincent's orders). Survive long enough to understand the question forming in the back of his mind.",
    generalAttitude: "Cold, tactical, and increasingly hollow. Follows Vincent's voice even while resisting it. Moments of genuine human impulse — moving to catch Kyria when she fell, showing mercy — are immediately suppressed or rationalised. Something in him is still fighting.",
    personalityDesc: "Clement is the sharp edge of a plan he may not have originally chosen. He left home with his father's blessing, chasing the outdoors and some unnamed freedom, and came back (or never left) as the head of an organisation that unleashes disease and summons demons. There is a voice in his head he calls Vincent — and that voice is sometimes his twin brother and sometimes something older and stranger. He is aware enough to ask who he is. He is not yet free enough to answer.",

    illnesses: "Dark magic use symptoms: physical deterioration, visual disturbances (ghosted double vision), severe pain episodes. Possible demonic influence or possession — voice of 'Vincent' may be more than psychological.",
    allergies: "None recorded",
    mentalIllnesses: "Auditory hallucination or external influence — a voice he identifies as his twin brother Vincent, which gives orders, jeers, and occasionally screams in his head. Episodes of dissociation and double vision. Identity confusion increasing.",
    unhealthyHabits: "Uses dark magic liberally despite its physical cost. Suppresses instincts toward mercy in favour of the voice's directives.",
    familyHistory: "Father: Gastro Hinge, owner of the Vermillion Bird. Twin brother: Vincent Hinge (third-year student, Black Tortoise). Mother: currently on expedition in another kingdom. Gastro describes Clement as a dreamer who loved medicine and alchemy for 'the wrong reasons' — specifically, alchemy as a means of perfection.",
    relationshipNotes: "Vincent Hinge (twin) — the voice in his head. Real Vincent and 'Vincent-voice' may not be the same entity. Real Vincent appeared genuinely shocked by Clement's actions.\nGastro Hinge (father) — estranged. Gastro says he hates Clement in the same breath as saying he does not want his son to die.\nLeo — most loyal Firebird lieutenant. Assigned to swallow the demonstration pill and dissolve with the mission's first phase.",

    powersName: "Dark magic (primary and growing); Scarlet Grimoire casting; Earth magic; Teleportation",
    powersOrigin: "Dark magic originates from intense desire — the stronger the conviction, the stronger the output. Clement's conviction is assessed as very strong. Standard Grimoire casting from Atellian training.",
    powersDrawbacks: "Dark magic causes physical deterioration with sustained use. Leaves detectable magical residue on users — except in Clement's case, where the residue disappears abnormally after use (possibly due to 'Vincent' absorbing or concealing it). Teleportation appears limited in precision.",
    combatCapabilities: "Highly dangerous. Fought Lincoln Grey to a near-draw in the greenhouse — Lincoln was forced to use a high-density fireball to end the engagement, and Clement still escaped. Physical capability above average. Can multi-cast. Can use dark magic to augment power mid-fight.",
    weaponsParaphernalia: "Scarlet Grimoire. Dark combat gear. Stolen White Tiger officer coat and radio (used as cover). Access to vials of Firebird bioweapon compounds.",

    jobTitle: "Leader, the Firebird",
    employer: "Self / the voice",
    income: "Firebird organisation funds (source unknown)",
    netWorth: "Unknown",
    criminalRecordCrime: "Terrorism (train bombing, demon summoning at Black Tortoise, attack on White Tiger HQ, bioweapon deployment in city water supply, multiple homicides via Firebird agents). Attempted murder of Professor Kyria Rein.",
    criminalRecordVerdict: "At large — no tribunal yet",
    criminalRecordStatus: "Active fugitive — highest priority",

    caseFiles: "Subject is the twin brother of Vincent Hinge and the estranged son of Gastro Hinge. Left Grimoria with family's blessing and a communication crystal. Crystal has not been used. No contact in months.\n\nSubject is responsible for or has directed: the train bombing (June 24), the mercenary attack on Lincoln Grey, the water supply contamination (red demon vector), the assault on White Tiger HQ (Gretsel twins), and the attempted assassination of Professor Kyria Rein.\n\nSubject fought Lincoln Grey hand-to-hand in the Black Tortoise greenhouse and escaped using unknown means — no dark magic residue left at scene despite confirmed use. Anomaly under investigation.\n\nNote: Subject was observed moving to catch Kyria when she fell before catching himself. File this. — Officer I. Fyroah"
  },

  {
    id: "1000000006",
    name: "Vincent Hinge",
    alias: "Unknown — possibly 'the voice' (see Clement file)",
    age: "Early 20s (twin of Clement)",
    birthday: "Unknown",
    placeOfBirth: "Grimoria, Atellian Empire",
    currentResidence: "Hinge family estate, Grimoria",
    status: "Under Surveillance",
    threatLevel: "Class-B (elevated — possible co-conspirator or unwitting host)",
    affiliation: "Black Tortoise Academy (Third-Year Student) / Hinge family",
    tags: ["Student", "Ancient Magic Interest", "Twin", "Person of Interest", "Yellow Eyes"],

    height: "Similar to Lincoln — a few centimetres shorter",
    weight: "Unknown",
    bodyBuild: "Marathon runner's build — lean and enduring",
    eyeColor: "Bright yellow (glowing) — distinguishing feature",
    hairColor: "Short, dark red hair",
    skinColor: "Unknown",
    scars: "None visible",
    distinguishingMarks: "Yellow glowing eyes are his most striking feature. Physically identical to Clement at distance. In childhood photos, differentiated from Clement by red vs. yellow caps.",

    mbti: "INTP (inferred — intellectual, enthusiastic about obscure knowledge, socially uncertain)",
    moralAlignment: "Unknown — possibly True Neutral with Good leanings, or unwitting participant in something worse",
    fears: "Being alone with his interest in ancient magic — no one else seems to care about it. His brother. Something Lincoln glimpsed behind his enthusiasm that reads as pain and fear.",
    personalGoals: "Learn the Language of the Ages. Understand ancient magic. Maintain the appearance of a normal student life despite whatever is actually happening around him.",
    generalAttitude: "Genuinely warm and enthusiastic one-on-one. Socially awkward in groups — his friends expect him to socialise; he prefers books. Evasive when pressed. His smile fades slightly when he sees Lincoln.",
    personalityDesc: "Vincent Hinge is either the most innocent person in this case or the most dangerous. He knows something. He told Clement's greenhouse-attacker that Lincoln was a danger to their plans — which means he is connected to Clement's operation in some way. But the shock on his face when Lincoln described the greenhouse attack looked real. He is either a very good actor or he is not entirely in control of what his name is doing in the world. Lincoln is watching him. Lincoln has not decided what he sees yet.",

    illnesses: "None recorded",
    allergies: "None recorded",
    mentalIllnesses: "Possible dissociative link to Clement — the nature of the 'Vincent voice' in Clement's head is unresolved. If Vincent is the source of that voice, his psychological profile requires urgent reassessment.",
    unhealthyHabits: "Loses track of time while reading. Father's assistant has to physically retrieve him.",
    familyHistory: "Father: Gastro Hinge (Vermillion Bird). Twin brother: Clement Hinge (Firebird leader). Mother: on expedition abroad. Family photos show a close four-person unit that no longer exists in that form.",
    relationshipNotes: "Clement Hinge (twin) — present in some form inside Clement's head. Real-world relationship appears fractured; Vincent looked genuinely stunned by the greenhouse incident report.\nGastro Hinge (father) — lives with him; relationship functional but strained by Gastro's workload since his wife left.\nLincoln Grey — met briefly in the Grand Grimorium. Spoke for an hour about ancient magic. Lincoln felt warmth and pain behind the boy's eyes. Both are wary of the other now.",

    powersName: "Standard Atellian Grimoire casting (unspecified level). Possible advanced or ancient magic capability — unverified.",
    powersOrigin: "Atellian training. Self-directed study of ancient magic texts in the Grand Grimorium.",
    powersDrawbacks: "Unknown",
    combatCapabilities: "Unknown — no combat record. Third-year student; presumably standard training level.",
    weaponsParaphernalia: "Red glowing crystal (communication device — used by Gastro's assistant to contact him). Bag of study materials. Notebook.",

    jobTitle: "Student",
    employer: "N/A",
    income: "Hinge family allowance",
    netWorth: "Hinge family wealth (significant)",
    criminalRecordCrime: "None confirmed. Possible involvement in Firebird operations — under investigation.",
    criminalRecordVerdict: "No charges filed",
    criminalRecordStatus: "Person of interest — not detained",

    caseFiles: "Subject came to our attention when the greenhouse attacker stated that 'Vincent told him Lincoln Grey was a danger to their plans.' Subject's reaction to this information during our visit to the Hinge estate appeared genuinely surprised — but he avoided Lincoln's eyes throughout.\n\nSubject has extensive self-directed knowledge of ancient magic, the Language of the Ages, and the Grand Grimorium's seventh-floor collection. This is noted as operationally relevant given the Book of Kygrios connection.\n\nLincoln Grey's assessment: 'He either doesn't know or he knows everything. Either way, I don't think Vincent is the enemy.' Filed for reference. — Officer I. Fyroah"
  },

  {
    id: "1000000007",
    name: "Kyria Rein",
    alias: "Professor Kyria",
    age: "26",
    birthday: "Unknown",
    placeOfBirth: "Another city in the Atellian Empire",
    currentResidence: "Black Tortoise Academy (staff quarters), Grimoria",
    status: "Under Surveillance",
    threatLevel: "Silver Ring — Low (civilian) / Person of Interest (elevated)",
    affiliation: "Black Tortoise Academy (Alchemy Unit, Professor) / Vermillion Bird (indirect — father treated there)",
    tags: ["Silver Ring", "Alchemy", "Person of Interest", "Assassination Target"],

    height: "Around the same height as Hina or slightly shorter",
    weight: "Unknown",
    bodyBuild: "Slight; moves with scattered energy",
    eyeColor: "Striking purple",
    hairColor: "Long purple hair (worn falling over her face when goggles are pushed up)",
    skinColor: "Unknown",
    scars: "None on record. Nearly fell from a ladder in the greenhouse; saved by Lincoln Grey.",
    distinguishingMarks: "Purple hair and eyes are immediately distinctive. Almost always wearing a white lab coat and goggles (pushed to forehead). Green leather case. Gloves frequently coated in acid-adjacent alchemy substances.",

    mbti: "ENFP (inferred — scattered, enthusiastic, warm, forgets things mid-sentence)",
    moralAlignment: "Neutral Good",
    fears: "Pan Hollow finding out about her lab accidents. Getting someone hurt by her experiments. Something she is not telling anyone.",
    personalGoals: "Continue her research. Repay the city for what it did for her father. Keep her head down.",
    generalAttitude: "Flustered, warm, and genuinely kind. Apologises before she's finished the sentence. Her cheerful personality has a seam — it shifts completely when the topic of dark magic arises or when she thinks no one is watching her be serious.",
    personalityDesc: "Kyria presents as charming chaos — a teacher who forgets to turn off her fire, who knows more than she should about dark magic 'from a few books,' who moved to Grimoria at 21 to be a librarian apprentice and stayed because she felt she owed the city something. She is being hunted by the Firebird. She was specifically ordered not to be harmed by Clement himself, overriding Vincent's instructions. She knows something, or is something, and she is not saying what. Lincoln has noticed. So has Clement.",

    illnesses: "None recorded",
    allergies: "Unknown — given her profession, multiple chemical sensitivities are possible",
    mentalIllnesses: "None recorded",
    unhealthyHabits: "Leaves experiments running unattended. Forgets ladders are involved before climbing them. Works late.",
    familyHistory: "Father: treated and cared for by Grimoria's community (likely the Vermillion Bird). This is the stated reason for her move to Grimoria and her current work. Mother: mentioned but no details. No other family noted.",
    relationshipNotes: "Lincoln Grey — met in the corridor outside her smoking lab. He trusts her less than he lets on; she senses it.\nPan Hollow — her employer and the person whose disapproval she most fears. Has not seen him in weeks.\nZyneas Belzac / Jude Farce — colleagues. She shares the dormitory greenhouse with them informally.",

    powersName: "Alchemy (primary). Unusual knowledge of dark magic theory — source undisclosed.",
    powersOrigin: "Atellian training; apprentice librarian background. Self-directed study.",
    powersDrawbacks: "Her experiments fail regularly and often loudly. She is aware of dark magic's effects on plant life in a way that suggests direct observation, not just reading.",
    combatCapabilities: "Not assessed. Alchemy is her domain; combat capability unknown.",
    weaponsParaphernalia: "Green leather case (alchemy materials). Various vials and compounds. Goggles. Gloves (acid-rated).",

    jobTitle: "Professor, Alchemy Unit",
    employer: "Black Tortoise Academy",
    income: "Teacher's salary",
    netWorth: "Unknown; modest",
    criminalRecordCrime: "None. Neighbour complaints on file for noise and odour during experiments.",
    criminalRecordVerdict: "N/A",
    criminalRecordStatus: "Clean",

    caseFiles: "Professor Rein came to our attention as an assassination target of the Firebird. Clement Hinge explicitly overrode Vincent's instruction to disregard her, ordering she be taken alive and unharmed.\n\nSubject demonstrated unusual knowledge of dark magic's effect on plant life during the greenhouse scene — specifically identifying that dark magic had been fully cleansed, which should have been impossible to detect without prior exposure.\n\nWhen Lincoln Grey asked her full name, she paused before answering. This is filed.\n\nLincoln Grey's request: full record on Kyria Rein. Delivered. Nothing in file explains why the Firebird wants her alive. — Captain H. Kang"
  },

  {
    id: "1000000008",
    name: "Frank Kang",
    alias: "Chief Kang / Chief Officer",
    age: "Late 40s to early 50s (approximate)",
    birthday: "Unknown",
    placeOfBirth: "Atellian Empire",
    currentResidence: "Grimoria (presumed senior officer's quarters or private residence)",
    status: "Active",
    threatLevel: "Silver Ring — Command Level",
    affiliation: "White Tiger (Chief Officer)",
    tags: ["White Tiger Chief", "Silver Ring", "Hina's Father", "Kang Family"],

    height: "Approximately two metres — large, bear-like frame",
    weight: "Heavy and solid",
    bodyBuild: "Wide-shouldered, large build; looks like a brown bear in formal wear",
    eyeColor: "Piercing black — same as Hina's",
    hairColor: "Slick brown with grey streaks appearing",
    skinColor: "Unknown",
    scars: "None recorded. Grizzly beard. Visibly aged more than expected since the squad last saw him — grey streaks in beard and hair, deeper wrinkles.",
    distinguishingMarks: "Steel handshake. Infectious, jolly laugh that makes people look over — and then look sad once they understand it. Wears combat boots even in formal dress.",

    mbti: "ESFJ (inferred — communal, duty-driven, emotionally avoidant about his own failures)",
    moralAlignment: "Lawful Good",
    fears: "Having failed Mel. Never being able to say sorry to Hina. Losing Hina the way he lost her mother.",
    personalGoals: "Keep Grimoria safe. Keep Hina safe. Find a way to tell her he is sorry. Not die before he does.",
    generalAttitude: "Warm and booming in public — the kind of man who commands a room by making everyone feel included. Privately sorrowful. Told Lincoln his deepest regret at a party they had just met at, because Lincoln was the only person there who wasn't performing.",
    personalityDesc: "Frank Kang is a man who knows exactly what he did wrong and has spent nine years unable to say it to the person who most needs to hear it. He joined the party in his office clothes. He wrote on Hina's file that she should take leave. He asked Lincoln how Hina was doing in the squad before he asked anything else. He is a good father who has been a coward exactly once, and that once was the one that mattered.",

    illnesses: "None recorded",
    allergies: "None recorded",
    mentalIllnesses: "Unresolved grief and guilt following wife Mel's death.",
    unhealthyHabits: "Buries emotional conversations under professional ones. Tries to make up for lost ground with ice cream and dinner invitations.",
    familyHistory: "Wife: Mel Kang (deceased). Her death was caused, in Frank's own words, by his cowardice. He has never apologised.\nDaughter: Hina Kang. Relationship strained but not broken; they love each other badly and well.",
    relationshipNotes: "Hina Kang — his daughter. The person he most wants to protect and cannot reach. She does not hate him; she cannot forgive him. He has accepted this without accepting it.\nLincoln Grey — met briefly two years ago. Immediately recognised him. Treats him as someone who can be trusted with honest conversation.",

    powersName: "White Tiger command-level Grimoire (unspecified). Senior officer-grade combat capability.",
    powersOrigin: "Atellian Empire / White Tiger institutional training.",
    powersDrawbacks: "Unknown",
    combatCapabilities: "Senior command level — precise capability not demonstrated in current record. Assessed as high.",
    weaponsParaphernalia: "White crystal (command-grade communication device). Notepad. Standard chief officer equipment.",

    jobTitle: "Chief Officer",
    employer: "White Tiger, Grimoria",
    income: "Senior officer's salary",
    netWorth: "Kang family wealth",
    criminalRecordCrime: "None",
    criminalRecordVerdict: "N/A",
    criminalRecordStatus: "Clean",

    caseFiles: "Chief Officer Kang led the secondary response to the Black Tortoise demon incident, arriving after Captain Kang had already contained the scene. Identified the demon-to-man transfiguration vector from Lincoln Grey's assessment. Coordinated vehicle search at the academy gates.\n\nKang's first question upon arriving was whether Hina had been hurt.\n\nHe called Lincoln by his first name at a party two years ago and then told him the real reason Hina doesn't forgive him. This is not operationally relevant. It is filed anyway. — I. Fyroah"
  },

  {
    id: "1000000009",
    name: "Ino Fyroah",
    alias: "Assistant Captain Fyroah",
    age: "Appears 30s",
    birthday: "Unknown",
    placeOfBirth: "Unknown",
    currentResidence: "White Tiger HQ, Grimoria",
    status: "Active",
    threatLevel: "Silver Ring — High",
    affiliation: "White Tiger (Assistant Captain, Force 1)",
    tags: ["White Tiger", "Silver Ring", "Water Magic", "Hina's Subordinate"],

    height: "A few centimetres taller than Hina",
    weight: "Unknown",
    bodyBuild: "Slim but well-built",
    eyeColor: "Brown with dark circles underneath",
    hairColor: "Thin black hair with streaks of silver",
    skinColor: "Unknown",
    scars: "None recorded",
    distinguishingMarks: "Dark circles under his eyes — habitual, not situational. Wears a dark coat over his navy blue uniform. Confident bearing. Tends to lead with a question and then answer it himself.",

    mbti: "ISTJ (inferred)",
    moralAlignment: "Lawful Good",
    fears: "Unknown",
    personalGoals: "Support Captain Kang. Close the case. Do not let anyone else die on his watch.",
    generalAttitude: "Professional, efficient, and slightly drily funny when he is not trying to be. Called Lincoln 'Captain Hina's boyfriend' on first meeting. Recovered quickly.",
    personalityDesc: "Ino Fyroah is the person who actually gets things done when Captain Kang is in the field. He interviews witnesses, coordinates teams, executes orders ahead of them being given, and writes the report before being asked. He is not spectacular. He is reliable, which in this situation is worth more.",

    illnesses: "None recorded",
    allergies: "None recorded",
    mentalIllnesses: "None recorded",
    unhealthyHabits: "Appears sleep-deprived chronically.",
    familyHistory: "None on record",
    relationshipNotes: "Hina Kang — superior officer; clear mutual respect. He updates her before she asks.\nLincoln Grey — met at the street-burning scene. Began by asking if Lincoln was Hina's boyfriend. Moved on professionally.",

    powersName: "Water magic (high mana density — used to extinguish a mana-infused fire that civilian mages could not touch)",
    powersOrigin: "Atellian training / White Tiger.",
    powersDrawbacks: "High-mana casting depletes reserves significantly — used most of his mana on the street-burning response.",
    combatCapabilities: "High. His water spell against the street-burning victim carried sufficient mana density to match the Firebird's fire. Assessed as among the stronger officers in Force 1.",
    weaponsParaphernalia: "Standard White Tiger officer equipment. Grimoire.",

    jobTitle: "Assistant Captain, Force 1",
    employer: "White Tiger, Grimoria",
    income: "Officer's salary",
    netWorth: "Unknown",
    criminalRecordCrime: "None",
    criminalRecordVerdict: "N/A",
    criminalRecordStatus: "Clean",

    caseFiles: "Officer Fyroah managed the train bombing response, the demon scene at Black Tortoise, the White Tiger HQ attack aftermath, and the Hinge estate visit — all within 72 hours. He has submitted seven separate reports in this period without being asked for any of them.\n\nHe is writing this case file. He is aware of the irony. — I. Fyroah"
  },

  {
    id: "1000000010",
    name: "Pan Hollow",
    alias: "Sir Hollow / Headmaster",
    age: "Elderly (exact age unknown)",
    birthday: "Unknown",
    placeOfBirth: "Unknown",
    currentResidence: "His office, Black Tortoise Academy — self-imposed sealed isolation",
    status: "MIA",
    threatLevel: "Gold Ring — Extreme (greatest mage of the empire; possibly dying)",
    affiliation: "Black Tortoise Academy (Headmaster) / Descendant of the creators of Sigila",
    tags: ["Gold Ring", "Headmaster", "Sigila Creator's Lineage", "Sealed Office", "Dying"],

    height: "Unknown",
    weight: "Unknown",
    bodyBuild: "Unknown (has not been seen in two weeks)",
    eyeColor: "Unknown",
    hairColor: "Unknown",
    skinColor: "Unknown",
    scars: "Unknown — contains dark magic within his office. The effort appears to be killing him.",
    distinguishingMarks: "Author of A Guide to Magic — a book Lincoln Grey has read over a thousand times and carries with him. Only remaining descendant of the family that created Sigila. His magic library can predict futures, but denies access to certain information (the library has autonomy).",

    mbti: "INFJ (inferred — wise, isolated, acting for the long good at personal cost)",
    moralAlignment: "Lawful Good",
    fears: "Dying without passing on what he knows. The city being destroyed because he could not warn it in time.",
    personalGoals: "Minimise damage. Find a receiver for the magic signal he is preparing. Trust in the individual the library identified — Lincoln Grey.",
    generalAttitude: "Calm and deliberate, even in extremis. Reads as gently amused by Lincoln's arrival — 'I wonder what brought you to Grimoria.' Trusts the process even when the process is killing him.",
    personalityDesc: "Pan Hollow is the wisest man in the empire and he is trapped in a room of his own making, slowly dying, having made a sacrifice no one else knows about yet. He has known Lincoln was coming. His library told him, and then slammed shut when he tried to find out why. He found this fitting. He has been sending magic through signal — choosing Lincoln as his receiver — because the book said Lincoln was the variable. He is right. He is hoping he lives long enough to find out if he was right.",

    illnesses: "Unknown internal condition causing progressive weakness. Self-isolating in a sealed office ringed with dark magic (contained by his own power — the effort drains him). Assessed as terminal without intervention.",
    allergies: "Unknown",
    mentalIllnesses: "None — his isolation is purposeful, not symptomatic.",
    unhealthyHabits: "Sealed himself in a room and stopped eating, sleeping normally, or communicating.",
    familyHistory: "Only remaining descendant of the family that created Sigila — the symbolic language through which Grimoria's magic operates. No other family listed.",
    relationshipNotes: "Lincoln Grey — chose him as the signal receiver. Has read his book. Pan finds this appropriate.\nKyria Rein — colleague; she fears his disapproval more than anyone else's. He presumably knows something about her that the file does not contain.\nBlack Tortoise staff — they are terrified to approach his office. The ones who tried were variously injured by the spells protecting the door.",

    powersName: "Grimoire-based Sigila mastery (unparalleled); Precognitive library; Magic signal transmission; Protective barrier (high-tier, blocks Silver Ring officers entirely); Psychic magic (indirect — can send magic as frequency)",
    powersOrigin: "Descendant of Sigila's creators. Lifetime of study and accumulation. The library that predicts futures is his — it has its own rules and refuses certain queries.",
    powersDrawbacks: "His current protective barrier is killing him slowly. He cannot leave the room without dismantling it, and dismantling it would expose whatever he is containing to the rest of the academy. He has chosen to stay.",
    combatCapabilities: "Theoretical maximum — Gold Ring, greatest mage of the empire. Practically, currently immobilised.",
    weaponsParaphernalia: "A transparent book that flickers in the wind (from his precognitive library). His Grimoire (standard Atellian, but his capabilities with it are unmatched). Magic signal (currently being used to send power to Lincoln Grey).",

    jobTitle: "Headmaster, Black Tortoise Academy",
    employer: "Black Tortoise Academy / Atellian Empire",
    income: "Headmaster's salary",
    netWorth: "Unknown; significant",
    criminalRecordCrime: "None. Rumours of dark magic in office — assessed as misidentification of the dark magic he is containing, not producing.",
    criminalRecordVerdict: "N/A",
    criminalRecordStatus: "Clean — but office is legally inaccessible and occupant unresponsive for two weeks",

    caseFiles: "Last confirmed public appearance: Black Tortoise opening ceremony, two weeks prior to this filing.\n\nSubsequently sealed his office with high-tier protection magic. At least one Silver Ring professor (Jude Farce) was severely injured attempting to approach. A dozen White Tiger officers were repelled.\n\nNote: Lincoln Grey has received a portion of Pan Hollow's magic via signal. He describes it as erratic, unpredictable, and reactive. This matches every known description of Hollow's personal style.\n\nAssessment: Pan Hollow is not a threat. Pan Hollow is what stands between this city and whatever he sealed himself in with. We need to get him out. — H. Kang"
  }
];

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
