Bien sûr ! Voici la version mise à jour du projet **MEDNEAR**, incluant le lien vers le **JIRA** pour le suivi du projet :

---

## 👩‍⚕️👨‍⚕️ **MEDNEAR: Système de Commande Médicale en Ligne** 🏥

Un projet full-stack pour la gestion des services médicaux en ligne, permettant aux utilisateurs de réserver des consultations, acheter des médicaments, et aux administrateurs de gérer les utilisateurs et les services.

---

### 🌟 **Fonctionnalités**

#### **Fonctionnalités pour les utilisateurs (Patients)** 👩‍⚕️👨‍⚕️

- **🔑 Inscription et authentification utilisateur**  
  - Créez un compte, connectez-vous et gérez vos informations personnelles.

- ** 🏥 Consultation des services médicaux**  
  - Parcourez les services médicaux disponibles (consultations, tests, médicaments, etc.).

- **🔍 Recherche de services médicaux**  
  - Recherche par spécialité, médecin, ou type de service (ex. consultations en ligne, services de laboratoire).

- **🚚

- **👤 Gestion du profil utilisateur**  
  - Mettez à jour vos informations personnelles et antécédents médicaux.

- **📜 Historique des render-vous**  
  - Visualisez l’historique de vos render-vous passées .

---

#### **Fonctionnalités pour l'Admin (Professionnels de santé)** 🩺👨‍⚕️

- **📊 Tableau de bord sécurisé pour les administrateurs**  
  - Accédez au tableau de bord pour suivre les commandes, utilisateurs, et services médicaux.

- **📝 Gestion des services médicaux**  
  - Ajoutez, modifiez ou supprimez des services médicaux (consultations, tests, examens, etc.).

- **📦 Gestion des render vous**  
  - Gérez les render vous .

- **👥 Gestion des utilisateurs**  
  - Ajoutez, modifiez ou supprimez des comptes utilisateurs (patients, médecins, pharmaciens).

- **📩 Système de messagerie**  
  - Communiquez avec les patients concernant leurs feedback et rendez-vous médicaux.

---

### 🛠️ **Technologies utilisées**

- **Frontend**: React, **Bootstrap 5**, CSS3, JavaScript (Utilisation de composants React pour l'interface)
- **Backend**: **JSON Server** (utilisé pour simuler une API RESTful)
- **Base de données**: JSON (Stockage des données au format JSON)
- **Autres**: Fetch API pour l’interaction avec le backend

---

### 📋 **Prérequis**

- **Node.js** >= 14 (ou supérieur)
- **JSON Server**
- Navigateur web moderne

---

### ⚙️ **Installation**

1. **Clonez le repository** :
   ```bash
   git clone https://github.com/Boghtat-spop/MEDNEAR1.git
   ```

2. **Installez les dépendances** :
   ```bash
   cd mednear
   npm install
   ```

3. **Lancez le serveur JSON** :
   ```bash
   npm run server
   ```
   Cela démarre le **JSON Server** sur le port 3000 par défaut.

4. **Démarrez votre application** :
   - Lancez l’application React avec :
     ```bash
     npm start
     ```
   - Accédez à l’application via :  
     **Panneau utilisateur** : `http://localhost:3000`  
     **Panneau admin** : `http://localhost:3000/admin`

---

### 👤 **Identifiants Admin par défaut**

- **Nom d'utilisateur**: `admin`
- **Mot de passe**: `admin123`
--- 
### 📱 Screenshots ***
🏠 Home Page
![image](https://github.com/user-attachments/assets/d05405e2-9fc3-4b29-8fe0-e12885c2881a)

🎯 Specialty : 
![image](https://github.com/user-attachments/assets/4b7e42c2-7a57-4de8-8d38-496985794dae)

💬 Feedback : 
![image](https://github.com/user-attachments/assets/8c683199-ec9c-4c9e-8e8a-0e7dd7f0ef10)

ℹ️ About Us :
![image](https://github.com/user-attachments/assets/e0782d35-e16d-4151-af28-149f71e393c2)

⚓ Footer :
![image](https://github.com/user-attachments/assets/74b97c76-86a3-4c49-add6-4ec5f30b68ff)

🔐 Login : 
![image](https://github.com/user-attachments/assets/55ff02e1-65bd-4be3-9c7d-ce95b7a1f30a)


📝 Register : 
![image](https://github.com/user-attachments/assets/95abe282-0280-43f7-9a21-212a95f3d0b7)

🔑 Forget Password: 
![image](https://github.com/user-attachments/assets/768f1926-b46e-459d-bba2-4a51ce893595)

![image](https://github.com/user-attachments/assets/dc1a80c8-f4aa-43d1-a779-4242ae421e2c)










---

### 🔒 **Sécurité**

- **🔐 Hachage de mot de passe** : Bien que JSON Server ne gère pas directement le hachage des mots de passe, il est possible de l'ajouter côté frontend si nécessaire.
- **💻 Validation et assainissement des entrées** : Assurez-vous de valider les données avant envoi vers le serveur (ex. vérifier les emails, éviter les injections malveillantes).
- **🛡️ Contrôle d'accès pour le panneau admin** : Seuls les utilisateurs authentifiés peuvent accéder au panneau administrateur.

---

### 🗂️ **Structure du projet**

```
mednear/
├── public/                      # Fichiers publics comme index.html
│   ├── index.html               # Page d'accueil principale
├── src/                         # Code source principal
│   ├── assets/                  # Images et autres fichiers statiques
│   │   └── logo.png             # Exemple d'image pour le logo
│   ├── components/              # Composants React réutilisables
│   │   ├── AboutUs.jsx          # Composant pour "À propos"
│   │   ├── FeedbackSection.jsx  # Composant pour les retours d'utilisateurs
│   │   ├── Footer.jsx           # Pied de page
│   │   ├── Header.jsx           # En-tête
│   │   ├── Login.jsx            # Page de connexion
│   │   ├── MapPreview.jsx       # Prévisualisation de la carte
│   │   ├── SearchBar.jsx        # Barre de recherche
│   │   ├── SpecialtyCards.jsx   # Cartes des spécialités médicales
│   │   └── TenCardsPage.jsx     # Page affichant plusieurs cartes
│   ├── styles/                  # Feuilles de styles CSS
│   │   ├── cards.css            # Styles pour les cartes
│   │   ├── footer.css           # Styles pour le pied de page
│   │   ├── Login.css            # Styles pour la page de connexion
│   │   ├── main.css             # Styles globaux
│   │   └── navbar.css           # Styles pour la barre de navigation
│   ├── App.js                   # Composant principal
│   └── index.js                 # Point d'entrée de l'application
├── .gitignore                   # Fichier pour ignorer des dossiers/fichiers
├── package.json                 # Dépendances et scripts du projet
└── README.md                    # Documentation du projet
```

---

### 💡 **Fonctionnalités clés détaillées**

#### **Gestion des utilisateurs** 🧑‍💻
- **🔑 Inscription sécurisée et système de connexion** : Les utilisateurs peuvent s’inscrire et se connecter avec des identifiants.
- **👤 Mise à jour du profil utilisateur** : Les patients peuvent mettre à jour leurs informations personnelles.

#### **Gestion des services médicaux** 🏥
- **🏷️ Organisation par spécialité ou type de service** : Classement des services médicaux par catégories (médecine générale, tests de laboratoire, etc.).
- **📸 Upload d'images pour les services et médicaments** : Possibilité d'ajouter des images pour chaque service ou médicament.

#### **Système de commandes et de réservations** 🛍️
- **🤝Réservation de consultations** : Réservez des consultations en ligne avec des médecins.
- **🔄 Suivi des rendez-vous** : Visualisez l’état de rendez vous et des consultations réservées.
---

### 🎨 **Bootstrap pour un design responsive**

Avec **Bootstrap 5**, l'interface de **MEDNEAR** est responsive et professionnelle. Le projet utilise les classes Bootstrap pour faciliter la mise en page et garantir une bonne expérience utilisateur sur toutes les tailles d'écran.

---

### 🤝 **Contributions**

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ou corriger ce projet, n’hésitez pas à soumettre une **Pull Request**.

---

### 👨‍💻 **Auteur**

 Abdelali Baali  | Zakariae Ferrouhi | Mehdi Azou | Anas Bayaqour 

---

### 📋 **Suivi du projet sur JIRA**

Pour suivre l'avancement du projet, consulter les sprints, et voir les tâches à faire, vous pouvez accéder au tableau de bord JIRA via ce [

lien](https://enddorphins.atlassian.net/jira/software/projects/SCRUM/boards/1).

---
