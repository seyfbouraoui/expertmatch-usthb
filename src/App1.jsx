import { useState, useEffect } from "react";

// --- Sample Data ---
const initialTeachers = [
  {
    id: 1,
    nom: "Dr. Amina Belouizdad",
    departement: "Informatique",
    grade: "Maître de Conférences A",
    email: "a.belouizdad@usthb.dz",
    photo: null,
    competences: ["Intelligence Artificielle", "Machine Learning", "Python", "Data Science", "Deep Learning"],
    bio: "Spécialiste en IA avec 12 ans d'expérience. Auteure de 30+ publications dans des revues indexées.",
    projets: 8,
  },
  {
    id: 2,
    nom: "Pr. Karim Meziane",
    departement: "Génie Civil",
    grade: "Professeur",
    email: "k.meziane@usthb.dz",
    photo: null,
    competences: ["BTP", "Structures", "Calcul Parasismique", "BIM", "Matériaux de Construction"],
    bio: "Expert en structures parasismiques. Consultant pour plusieurs projets d'infrastructures en Algérie.",
    projets: 15,
  },
  {
    id: 3,
    nom: "Dr. Yasmine Ouali",
    departement: "Chimie",
    grade: "Maître de Conférences B",
    email: "y.ouali@usthb.dz",
    photo: null,
    competences: ["Chimie Analytique", "Environnement", "Traitement des Eaux", "Spectroscopie", "Nanomatériaux"],
    bio: "Chercheuse en chimie environnementale. Projets de dépollution et traitement des eaux usées.",
    projets: 6,
  },
  {
    id: 4,
    nom: "Dr. Sofiane Aït Amar",
    departement: "Électronique",
    grade: "Maître de Conférences A",
    email: "s.aitamar@usthb.dz",
    photo: null,
    competences: ["Systèmes Embarqués", "IoT", "FPGA", "Robotique", "Traitement du Signal"],
    bio: "Spécialiste IoT et systèmes embarqués. Co-fondateur d'une startup de robotique industrielle.",
    projets: 11,
  },
  {
    id: 5,
    nom: "Pr. Nadia Chérif",
    departement: "Mathématiques",
    grade: "Professeur",
    email: "n.cherif@usthb.dz",
    photo: null,
    competences: ["Modélisation Mathématique", "Optimisation", "Statistiques", "Cryptographie", "Recherche Opérationnelle"],
    bio: "Mathématicienne appliquée, experte en optimisation de systèmes complexes et cryptographie.",
    projets: 9,
  },
  {
    id: 6,
    nom: "Dr. Rachid Boukhalfa",
    departement: "Génie Mécanique",
    grade: "Maître de Conférences A",
    email: "r.boukhalfa@usthb.dz",
    photo: null,
    competences: ["CAO/FAO", "Mécanique des Fluides", "Énergie Renouvelable", "Simulation Numérique", "Turbomachines"],
    bio: "Expert en simulation numérique et énergies renouvelables. 20+ projets industriels réalisés.",
    projets: 12,
  },
];

// --- Utility ---
function initials(name) {
  return name.split(" ").filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function getGradeColor(grade) {
  if (grade.includes("Professeur")) return "#e8c15a";
  if (grade.includes("A")) return "#a78bfa";
  return "#6ee7b7";
}

// --- Components ---

function Avatar({ name, size = 56 }) {
  const colors = ["#1e3a5f", "#1a4731", "#4a1942", "#3d2b00", "#1a3548"];
  const idx = name.charCodeAt(0) % colors.length;
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: colors[idx],
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.32, fontWeight: 700, color: "#fff",
      border: "2px solid rgba(255,255,255,0.12)",
      flexShrink: 0,
      fontFamily: "'DM Sans', sans-serif",
      letterSpacing: 1,
    }}>
      {initials(name)}
    </div>
  );
}

function Badge({ label, accent }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 600,
      background: accent ? "rgba(99,220,180,0.15)" : "rgba(255,255,255,0.07)",
      color: accent ? "#63dcb4" : "#aab4c2",
      border: `1px solid ${accent ? "rgba(99,220,180,0.3)" : "rgba(255,255,255,0.1)"}`,
      letterSpacing: 0.3,
    }}>{label}</span>
  );
}

function ScoreMeter({ score }) {
  const pct = Math.round(score);
  const color = pct >= 75 ? "#63dcb4" : pct >= 50 ? "#f5c842" : "#f8816e";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 3, transition: "width 0.8s ease" }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 700, color, minWidth: 36, textAlign: "right" }}>{pct}%</span>
    </div>
  );
}

// ===================== PAGE: ACCUEIL =====================
function HomePage({ onNav }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", textAlign: "center" }}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 13, letterSpacing: 4, color: "#63dcb4", textTransform: "uppercase", fontWeight: 600 }}>Plateforme de Valorisation</span>
      </div>
      <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", fontFamily: "'Playfair Display', serif" }}>
        <span style={{ color: "#fff" }}>ExpertMatch</span>
        <br />
        <span style={{ background: "linear-gradient(90deg, #63dcb4, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>USTHB</span>
      </h1>
      <p style={{ maxWidth: 540, color: "#8a96a8", fontSize: 17, lineHeight: 1.7, marginBottom: 48 }}>
        Connectez les compétences académiques de l'USTHB aux besoins des entreprises partenaires via l'intelligence artificielle.
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={() => onNav("enseignants")} style={{
          padding: "14px 36px", borderRadius: 12, border: "none", cursor: "pointer",
          background: "linear-gradient(135deg, #1e6b52, #63dcb4)",
          color: "#0a1628", fontWeight: 700, fontSize: 15, letterSpacing: 0.5,
          boxShadow: "0 8px 32px rgba(99,220,180,0.25)",
        }}>
          👨‍🏫 Espace Enseignants
        </button>
        <button onClick={() => onNav("spa")} style={{
          padding: "14px 36px", borderRadius: 12, border: "2px solid rgba(167,139,250,0.4)", cursor: "pointer",
          background: "rgba(167,139,250,0.08)",
          color: "#a78bfa", fontWeight: 700, fontSize: 15, letterSpacing: 0.5,
        }}>
          🏢 Espace SPA / Entreprise
        </button>
      </div>
      <div style={{ marginTop: 80, display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
        {[["👩‍🔬", initialTeachers.length, "Enseignants inscrits"], ["🧠", "IA", "Matching intelligent"], ["🏆", "Top 5", "Profils recommandés"]].map(([icon, val, lbl]) => (
          <div key={lbl} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>{icon}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#63dcb4" }}>{val}</div>
            <div style={{ fontSize: 12, color: "#5a6370", letterSpacing: 1, textTransform: "uppercase" }}>{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===================== PAGE: ANNUAIRE ENSEIGNANTS =====================
function TeachersPage({ teachers, onAdd, onSelect }) {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("Tous");
  const depts = ["Tous", ...Array.from(new Set(teachers.map(t => t.departement)))];

  const filtered = teachers.filter(t => {
    const q = search.toLowerCase();
    const matchSearch = t.nom.toLowerCase().includes(q) || t.competences.some(c => c.toLowerCase().includes(q));
    const matchDept = dept === "Tous" || t.departement === dept;
    return matchSearch && matchDept;
  });

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>Annuaire des Enseignants</h2>
          <p style={{ margin: "6px 0 0", color: "#5a6370", fontSize: 14 }}>{filtered.length} profil(s) trouvé(s)</p>
        </div>
        <button onClick={onAdd} style={{
          padding: "11px 24px", borderRadius: 10, border: "none", cursor: "pointer",
          background: "linear-gradient(135deg, #1e6b52, #63dcb4)",
          color: "#0a1628", fontWeight: 700, fontSize: 14,
        }}>+ Ajouter un profil</button>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Rechercher par nom ou compétence…"
          style={{ flex: 1, minWidth: 220, padding: "10px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#e8edf3", fontSize: 14, outline: "none" }}
        />
        <select value={dept} onChange={e => setDept(e.target.value)} style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "#0f2540", color: "#e8edf3", fontSize: 14, cursor: "pointer" }}>
          {depts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {filtered.map(t => (
          <div key={t.id} onClick={() => onSelect(t)} style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16, padding: 24, cursor: "pointer",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,220,180,0.06)"; e.currentTarget.style.borderColor = "rgba(99,220,180,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
              <Avatar name={t.nom} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#e8edf3", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.nom}</div>
                <div style={{ fontSize: 12, color: "#5a6370" }}>{t.departement}</div>
                <span style={{ fontSize: 11, fontWeight: 600, color: getGradeColor(t.grade), background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 6, display: "inline-block", marginTop: 3 }}>{t.grade}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {t.competences.slice(0, 3).map(c => <Badge key={c} label={c} />)}
              {t.competences.length > 3 && <Badge label={`+${t.competences.length - 3}`} />}
            </div>
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#5a6370" }}>
              <span>✉ {t.email}</span>
              <span>🗂 {t.projets} projets</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===================== MODAL: AJOUTER ENSEIGNANT =====================
function AddTeacherModal({ onClose, onSave }) {
  const [form, setForm] = useState({ nom: "", departement: "", grade: "Maître de Conférences A", email: "", bio: "", competences: "" });
  const grades = ["Assistant", "Maître de Conférences B", "Maître de Conférences A", "Professeur"];

  function handleSave() {
    if (!form.nom || !form.departement || !form.email) return;
    onSave({
      ...form,
      id: Date.now(),
      projets: 0,
      competences: form.competences.split(",").map(c => c.trim()).filter(Boolean),
    });
  }

  const field = (label, key, type = "text", options = null) => (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, color: "#8a96a8", marginBottom: 6, letterSpacing: 0.5 }}>{label}</label>
      {options ? (
        <select value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "#0f2540", color: "#e8edf3", fontSize: 14 }}>
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} rows={3}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#e8edf3", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
      ) : (
        <input value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} type={type}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#e8edf3", fontSize: 14, boxSizing: "border-box" }} />
      )}
    </div>
  );

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#0d1f38", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 32, width: "100%", maxWidth: 520, maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h3 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 20 }}>Nouveau Profil Enseignant</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#8a96a8", fontSize: 20, cursor: "pointer" }}>✕</button>
        </div>
        {field("Nom complet", "nom")}
        {field("Département", "departement")}
        {field("Grade", "grade", "text", grades)}
        {field("Email institutionnel", "email", "email")}
        {field("Biographie courte", "bio", "textarea")}
        {field("Compétences (séparées par virgules)", "competences", "textarea")}
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <button onClick={onClose} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#8a96a8", cursor: "pointer", fontWeight: 600 }}>Annuler</button>
          <button onClick={handleSave} style={{ flex: 2, padding: "12px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #1e6b52, #63dcb4)", color: "#0a1628", cursor: "pointer", fontWeight: 700 }}>Enregistrer le Profil</button>
        </div>
      </div>
    </div>
  );
}

// ===================== PAGE: PROFIL ENSEIGNANT =====================
function TeacherProfile({ teacher, onBack }) {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "#63dcb4", cursor: "pointer", fontSize: 14, marginBottom: 24, display: "flex", alignItems: "center", gap: 6 }}>← Retour à l'annuaire</button>
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 32 }}>
        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 24 }}>
          <Avatar name={teacher.nom} size={72} />
          <div>
            <h2 style={{ margin: "0 0 4px", fontSize: 22, fontFamily: "'Playfair Display', serif" }}>{teacher.nom}</h2>
            <p style={{ margin: "0 0 6px", color: "#5a6370", fontSize: 14 }}>{teacher.departement} — USTHB</p>
            <span style={{ fontSize: 12, fontWeight: 700, color: getGradeColor(teacher.grade), background: "rgba(255,255,255,0.06)", padding: "3px 10px", borderRadius: 6 }}>{teacher.grade}</span>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, marginBottom: 20 }}>
          <h4 style={{ margin: "0 0 8px", fontSize: 12, letterSpacing: 2, color: "#5a6370", textTransform: "uppercase" }}>Biographie</h4>
          <p style={{ color: "#aab4c2", lineHeight: 1.7, margin: 0 }}>{teacher.bio}</p>
        </div>
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ margin: "0 0 12px", fontSize: 12, letterSpacing: 2, color: "#5a6370", textTransform: "uppercase" }}>Compétences</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {teacher.competences.map(c => <Badge key={c} label={c} accent />)}
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div><span style={{ fontSize: 20, fontWeight: 800, color: "#63dcb4" }}>{teacher.projets}</span><br /><span style={{ fontSize: 11, color: "#5a6370", letterSpacing: 1 }}>PROJETS RÉALISÉS</span></div>
          <div><span style={{ fontSize: 14, color: "#aab4c2" }}>✉ {teacher.email}</span></div>
        </div>
      </div>
    </div>
  );
}

// ===================== PAGE: SPA MATCHING =====================
function SPAPage({ teachers }) {
  const [projet, setProjet] = useState({ titre: "", description: "", domaine: "", competencesRequises: "" });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleMatch() {
    if (!projet.description || !projet.competencesRequises) { setError("Veuillez remplir la description et les compétences requises."); return; }
    setError(""); setLoading(true); setResults(null);

    const teacherList = teachers.map(t => ({
      id: t.id, nom: t.nom, departement: t.departement, grade: t.grade,
      competences: t.competences, bio: t.bio, projets: t.projets,
    }));

    const prompt = `Tu es un expert en matching académique pour la SPA (Société Par Actions) partenaire de l'USTHB.

Voici le projet soumis par la SPA :
- Titre : ${projet.titre || "Non précisé"}
- Domaine : ${projet.domaine || "Non précisé"}
- Description : ${projet.description}
- Compétences requises : ${projet.competencesRequises}

Voici la liste des enseignants disponibles (JSON) :
${JSON.stringify(teacherList, null, 2)}

Analyse chaque profil et sélectionne les 5 meilleurs. Pour chacun, fournis un score de pertinence (0-100), les raisons du choix, et les compétences clés qui correspondent.

Réponds UNIQUEMENT en JSON (sans balises markdown) avec ce format exact :
{
  "top5": [
    {
      "id": <number>,
      "score": <number 0-100>,
      "raisons": "<string, 2-3 phrases>",
      "competencesMatchees": [<string>, ...]
    }
  ],
  "synthese": "<string, 2-3 phrases d'analyse globale>"
}`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await response.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      const enriched = parsed.top5.map(r => ({ ...r, teacher: teachers.find(t => t.id === r.id) })).filter(r => r.teacher);
      setResults({ top5: enriched, synthese: parsed.synthese });
    } catch (e) {
      setError("Erreur lors de l'analyse IA. Veuillez réessayer.");
    }
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ marginBottom: 32 }}>
        <span style={{ fontSize: 12, letterSpacing: 3, color: "#a78bfa", textTransform: "uppercase", fontWeight: 600 }}>Espace Entreprise</span>
        <h2 style={{ margin: "8px 0 6px", fontSize: 28, fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>Matching Intelligent de Projets</h2>
        <p style={{ color: "#5a6370", fontSize: 14 }}>Décrivez votre projet et notre IA identifiera les 5 enseignants-chercheurs les plus qualifiés.</p>
      </div>

      {/* Formulaire projet */}
      <div style={{ background: "rgba(167,139,250,0.05)", border: "1px solid rgba(167,139,250,0.15)", borderRadius: 20, padding: 28, marginBottom: 28 }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 16, color: "#a78bfa", fontWeight: 700 }}>📋 Description du Projet</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 11, color: "#8a96a8", marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Titre du projet</label>
            <input value={projet.titre} onChange={e => setProjet(p => ({ ...p, titre: e.target.value }))}
              placeholder="ex: Développement d'une application IoT"
              style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#e8edf3", fontSize: 14, boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 11, color: "#8a96a8", marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Domaine principal</label>
            <input value={projet.domaine} onChange={e => setProjet(p => ({ ...p, domaine: e.target.value }))}
              placeholder="ex: Informatique, Génie Civil…"
              style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#e8edf3", fontSize: 14, boxSizing: "border-box" }} />
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <label style={{ display: "block", fontSize: 11, color: "#8a96a8", marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Description détaillée du projet *</label>
          <textarea value={projet.description} onChange={e => setProjet(p => ({ ...p, description: e.target.value }))} rows={4}
            placeholder="Décrivez les objectifs, la problématique, le contexte et les livrables attendus du projet…"
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#e8edf3", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
        </div>
        <div style={{ marginTop: 16 }}>
          <label style={{ display: "block", fontSize: 11, color: "#8a96a8", marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Compétences requises * (séparées par virgules)</label>
          <input value={projet.competencesRequises} onChange={e => setProjet(p => ({ ...p, competencesRequises: e.target.value }))}
            placeholder="ex: Machine Learning, Python, Data Science, Traitement du Signal…"
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#e8edf3", fontSize: 14, boxSizing: "border-box" }} />
        </div>
        {error && <p style={{ color: "#f8816e", fontSize: 13, marginTop: 12 }}>{error}</p>}
        <button onClick={handleMatch} disabled={loading} style={{
          marginTop: 20, padding: "13px 32px", borderRadius: 12, border: "none", cursor: loading ? "default" : "pointer",
          background: loading ? "rgba(167,139,250,0.3)" : "linear-gradient(135deg, #4c1d95, #a78bfa)",
          color: "#fff", fontWeight: 700, fontSize: 15, letterSpacing: 0.5,
          boxShadow: loading ? "none" : "0 8px 32px rgba(167,139,250,0.25)",
          transition: "all 0.2s",
        }}>
          {loading ? "⏳ Analyse en cours…" : "🔍 Lancer l'analyse IA"}
        </button>
      </div>

      {/* Résultats */}
      {results && (
        <div>
          {results.synthese && (
            <div style={{ background: "rgba(99,220,180,0.06)", border: "1px solid rgba(99,220,180,0.2)", borderRadius: 14, padding: 20, marginBottom: 24 }}>
              <span style={{ fontSize: 11, letterSpacing: 2, color: "#63dcb4", textTransform: "uppercase", fontWeight: 700 }}>🧠 Synthèse IA</span>
              <p style={{ margin: "8px 0 0", color: "#aab4c2", lineHeight: 1.7 }}>{results.synthese}</p>
            </div>
          )}
          <h3 style={{ margin: "0 0 20px", fontSize: 18, fontWeight: 700 }}>🏆 Top 5 Profils Recommandés</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {results.top5.map((r, i) => (
              <div key={r.id} style={{
                background: i === 0 ? "rgba(99,220,180,0.07)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${i === 0 ? "rgba(99,220,180,0.25)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 16, padding: "20px 24px",
              }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 14 }}>
                  <div style={{ fontSize: 28, minWidth: 36, textAlign: "center" }}>
                    {["🥇", "🥈", "🥉", "4️⃣", "5️⃣"][i]}
                  </div>
                  <Avatar name={r.teacher.nom} size={48} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{r.teacher.nom}</div>
                    <div style={{ fontSize: 12, color: "#5a6370" }}>{r.teacher.departement} — {r.teacher.grade}</div>
                  </div>
                  <div style={{ width: 160 }}>
                    <div style={{ fontSize: 11, color: "#8a96a8", marginBottom: 5 }}>Score de pertinence</div>
                    <ScoreMeter score={r.score} />
                  </div>
                </div>
                <p style={{ margin: "0 0 12px", color: "#aab4c2", fontSize: 13, lineHeight: 1.6, paddingLeft: 52 }}>{r.raisons}</p>
                {r.competencesMatchees?.length > 0 && (
                  <div style={{ paddingLeft: 52, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {r.competencesMatchees.map(c => <Badge key={c} label={`✓ ${c}`} accent />)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ===================== APP ROOT =====================
export default function App() {
  const [page, setPage] = useState("home");
  const [teachers, setTeachers] = useState(initialTeachers);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  function addTeacher(t) { setTeachers(ts => [...ts, t]); setShowAddModal(false); }

  function navTo(p) { setPage(p); setSelectedTeacher(null); }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#070f1d",
      color: "#e8edf3",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      backgroundImage: "radial-gradient(ellipse at 20% 20%, rgba(99,220,180,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(167,139,250,0.05) 0%, transparent 50%)",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        input::placeholder, textarea::placeholder { color: #3a4455 !important; }
        select option { background: #0d1f38; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(7,15,29,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 24px", display: "flex", alignItems: "center", gap: 8, height: 60 }}>
        <button onClick={() => navTo("home")} style={{ background: "none", border: "none", color: "#63dcb4", fontWeight: 800, fontSize: 17, cursor: "pointer", marginRight: 16, fontFamily: "'Playfair Display', serif" }}>ExpertMatch</button>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
        {[["enseignants", "👨‍🏫 Enseignants"], ["spa", "🏢 Espace SPA"]].map(([id, label]) => (
          <button key={id} onClick={() => navTo(id)} style={{ background: page === id ? "rgba(255,255,255,0.06)" : "none", border: "none", color: page === id ? "#e8edf3" : "#5a6370", fontWeight: page === id ? 700 : 500, fontSize: 13, padding: "6px 14px", borderRadius: 8, cursor: "pointer", transition: "all 0.15s" }}>{label}</button>
        ))}
        <div style={{ marginLeft: "auto", fontSize: 12, color: "#3a4455" }}>USTHB — Direction de la Valorisation</div>
      </nav>

      {/* CONTENT */}
      {page === "home" && <HomePage onNav={navTo} />}
      {page === "enseignants" && !selectedTeacher && (
        <TeachersPage teachers={teachers} onAdd={() => setShowAddModal(true)} onSelect={t => setSelectedTeacher(t)} />
      )}
      {page === "enseignants" && selectedTeacher && (
        <TeacherProfile teacher={selectedTeacher} onBack={() => setSelectedTeacher(null)} />
      )}
      {page === "spa" && <SPAPage teachers={teachers} />}

      {showAddModal && <AddTeacherModal onClose={() => setShowAddModal(false)} onSave={addTeacher} />}
    </div>
  );
}
