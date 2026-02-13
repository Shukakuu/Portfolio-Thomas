"use client";
import { useState } from "react";
import StarMessage from "../star-message/StarMessage";
import { X } from "lucide-react";
import { Sparkle, Check } from "lucide-react";

type Props = { onClose: () => void };

// Composant côté client uniquement : utilise un lien mailto:
// pour ouvrir le client mail de l'utilisateur avec les données.
export default function ContactModal({ onClose }: Props) {
  // champs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // états d'interface (indicateurs)
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  // Gère l'envoi du formulaire : construit une URL mailto: et l'ouvre.
  // On garde la modale ouverte brièvement pour afficher l'état de succès,
  // puis on la ferme automatiquement.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const subject = `Contact from ${name || "Website"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:t.culminique@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // ouvre le client mail par défaut
    window.open(mailto);
    setSent(true);
    setSubmitting(false);

    // ferme la modale après un court délai pour que l'utilisateur voie le succès
    setTimeout(() => {
      onClose();
    }, 900);
  };

  return (
    // Overlay : bloque la page et centre la modale
    <div style={overlayStyle} role="dialog" aria-modal="true">
      {/* Conteneur de la modale */}
      <div style={modalStyle}>
        {/* En-tête avec titre et bouton de fermeture */}
        <div style={headerStyle}>
            <StarMessage Icon={Sparkle} iconProps={{ className: "svg" }} text="Contactez-moi" />
          <button onClick={onClose} aria-label="Close" style={closeBtnStyle}>
            <X size={16} />
          </button>
        </div>

        {/* Formulaire : disposition en deux colonnes pour correspondre au design */}
        <form onSubmit={submit} style={formGridStyle as React.CSSProperties}>
          {/* Colonne gauche : nom + email + bouton */}
          <div style={leftColumnStyle}>
            <label style={{ fontSize: 13 }}>Nom et prénom</label>
            <input
              placeholder="Nom et prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />

            <label style={{ fontSize: 13 }}>Email</label>
            <input
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              style={inputStyle}
            />

            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
              <button type="submit" disabled={submitting} style={submitBtnStyle}>
                {submitting ? "Envoi..." : "Envoyer"}
              </button>

              {sent && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#16a34a" }}>
                  <Check size={16} /> <span>Mail ouvert</span>
                </div>
              )}
            </div>
          </div>

          {/* Colonne droite : message (grande zone) */}
          <div style={rightColumnStyle}>
            <label style={{ fontSize: 13 }}>Message</label>
            <textarea
              placeholder="écrire votre message ici.."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={textareaStyleFull}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

// Styles inline utilisés pour la modale. Simples et conservés ici
// par commodité — vous pouvez les déplacer dans un fichier CSS/module plus tard.
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  width: "min(720px, 94%)",
  background: "#0b0b0b",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 10px 30px rgba(2,6,23,0.6)",
  color: "white",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 10,
};

const closeBtnStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
};

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "transparent",
  color: "white",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 120,
  resize: "vertical",
};

// Styles for the two-column layout
const formGridStyle: React.CSSProperties = {
  display: "flex",
  gap: 20,
  alignItems: "flex-start",
};

const leftColumnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flex: 1,
};

const rightColumnStyle: React.CSSProperties = {
  flex: 1.6,
  display: "flex",
  flexDirection: "column",
};

const textareaStyleFull: React.CSSProperties = {
  ...inputStyle,
  height: 320,
  minHeight: 240,
  resize: "vertical",
  width: "100%",
};

const submitBtnStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 8,
  border: "none",
  background: "#7c3aed",
  color: "white",
  cursor: "pointer",
};
