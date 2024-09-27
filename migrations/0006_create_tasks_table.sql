CREATE_TABLE tasks (
  id SERIAL PRIMARY KEY,
  column_id INT NOT NULL REFERENCES columns(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  position INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);