```
--Tabla de usuarios
CREATE TABLE Users
(
	user_id SERIAL PRIMARY KEY,
	wallet_adress VARCHAR(42) UNIQUE NOT NULL,
	rol VARCHAR(20) CHECK (rol IN ('client','developer')) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Tabla de proyectos
CREATE TABLE Projects
(
	project_id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	description TEXT,
	amount NUMERIC(18,6) NOT NULL,
	status VARCHAR(20) CHECK (status IN ('created', 'in_progress', 'completed', 'paid')) 
	DEFAULT 'created',
	client_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    developer_id INTEGER REFERENCES Users(user_id) ON DELETE SET NULL,
	contract_address VARCHAR(66),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Tabla de tareas
CREATE TABLE Tasks
(
	task_id SERIAL PRIMARY KEY,
	project_id INTEGER REFERENCES Projects(project_id) ON DELETE CASCADE,
  	description TEXT NOT NULL,
  	completed_by_dev BOOLEAN DEFAULT FALSE,
  	confirmed_by_client BOOLEAN DEFAULT FALSE
);

--Tabla de logs
CREATE TABLE project_logs (
  project_log_id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES Projects(project_id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,	
  action TEXT NOT NULL,
  wallet_address VARCHAR(42),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
