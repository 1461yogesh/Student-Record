# 🎓 Student Record Management System

A web-based **Student Record Management System** designed to organize student information using a simple interface and Supabase cloud database. This project demonstrates CRUD operations and database integration through a practical web application.

## ✨ Features

- 📝 **Student Management** — Add, view, update, and delete student records.
- ☁️ **Cloud Database** — Store and retrieve records using Supabase.
- 📊 **Record Display** — View saved student information through the interface.
- 📱 **Responsive Design** — Convenient access on supported desktop and mobile screens.
- 🔗 **Database Integration** — Connect the frontend with cloud-based data storage.

*Features depend on the functionality implemented in the current version.*

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Database:** Supabase / PostgreSQL
- **Tools:** Git and GitHub

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/1461yogesh/Student-Record.git
cd Student-Record
```

### 2. Configure Supabase

1. Create a project on [Supabase](https://supabase.com/).
2. Create the database tables required by the application.
3. Configure your Supabase project URL and public anon/publishable key in the frontend configuration.
4. Enable Row Level Security (RLS) and configure appropriate access policies.

**Security:** Never expose your Supabase `service_role` key or other privileged credentials in frontend code.

### 3. Run the Project

For a static HTML project, run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in your browser. Use your project's actual entry file and setup commands if they differ.

## ⚙️ How It Works

1. The user interacts with the student management interface.
2. The application sends permitted requests to Supabase.
3. Supabase processes the requests according to database permissions.
4. The interface displays the retrieved information and reflects successful changes.

## 🔐 Security

- Use appropriate database access policies.
- Enable RLS on tables containing student information.
- Keep private credentials out of public repositories.
- Avoid using real personal student data in public demonstrations.

## 🔮 Future Improvements

- Add search, filtering, and pagination.
- Improve form validation and error handling.
- Implement authentication and role-based access where required.
- Add automated testing and interface screenshots.
- Improve accessibility and mobile responsiveness.

## 👨‍💻 Author

**Yogesh Kumar**

GitHub: [@1461yogesh](https://github.com/1461yogesh)

## 📄 License

Add a suitable license file if you intend to permit others to reuse or modify this project.
