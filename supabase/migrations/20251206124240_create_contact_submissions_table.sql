/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Sender's name
      - `email` (text) - Sender's email address
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Submission timestamp
      - `status` (text) - Status of the submission (new, reviewed, resolved)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anyone to insert contact submissions (public form)
    - Add policy for authenticated admin users to read submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);