# ⚽ Choose Your Squad

**Choose Your Squad** is a responsive React web app that lets users build their dream team by selecting players and managing a virtual coin system. Designed with modern React practices and styled using Tailwind CSS, the app showcases component-based architecture, persistent state management with `localStorage`, and real-time user feedback with toast notifications.

---

## 🚀 Features

- 🔢 **Player Selection** – Browse a list of players and add your favorites to your squad.
- 💰 **Virtual Coin System** – Users receive coins to spend on players. Coin data is saved in `localStorage` for persistence.
- ♻️ **Persistent State** – Your coin balance and selected players stay saved across page reloads.
- 🎁 **Add Credit Once Per Session** – Claim free coins once per session with toast feedback.
- 📱 **Responsive Design** – Built with Tailwind CSS to look great on all screen sizes.
- 🧱 **Component-Based Structure** – Modular and reusable React components ensure clean, maintainable code.
- 🔄 **State Management** – Utilizes React hooks (`useState`, `useEffect`) for seamless state updates and data flow.
- 🔔 **Toast Notifications** – Smooth user feedback for actions like claiming coins or encountering errors using `React Toastify`.

---

## 🛠️ Tech Stack

| Technology            | Purpose                          |
| --------------------- | -------------------------------- |
| **React**             | Frontend library for UI & logic  |
| **Tailwind CSS**      | Utility-first CSS framework      |
| **localStorage**      | Persistent browser storage       |
| **React Toastify**    | Toast notifications              |
| **JavaScript (ES6+)** | Core language with modern syntax |

---

## 🧩 How It Works

### 🪙 Coin Management
- On first visit, users can claim a free coin balance.
- Coin balance is saved in `localStorage` and shown in the navbar.
- Users can only claim free coins once per session to avoid abuse.

### 🧍 Player Selection
- All available players are displayed in a clean UI.
- Players can be selected and added to a custom squad, deducting coins with each purchase.

### 🔁 State & Data Flow
- The main app state (coin balance and squad) is handled in `App.jsx`.
- Props are passed down to child components for unidirectional and predictable data flow.

### 🎨 Styling
- Tailwind CSS ensures a mobile-first, modern, and responsive interface.
- Minimalistic and clean layout for a seamless user experience.

---


📜 License
This project is for educational and personal practice purposes only.

🙌 Author
Mehedi Hasan
🐙 GitHub: github.com/mehedihasan101101

