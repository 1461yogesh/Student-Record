-- Create the students table
CREATE TABLE students (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  roll_number TEXT UNIQUE NOT NULL,
  year INTEGER NOT NULL,
  email TEXT UNIQUE NOT NULL,
  department TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert and read (for development)
CREATE POLICY "Allow public access" ON students FOR ALL USING (true) WITH CHECK (true);
