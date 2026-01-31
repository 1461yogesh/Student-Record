const SUPABASE_URL = 'https://jmrwmeebfjgdwddrvkdb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptcndtZWViZmpnZHdkZHJ2a2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NzgwNjYsImV4cCI6MjA4NTM1NDA2Nn0.YhFzelno7w737iish1ibmc8FfAykDfXBFwuwwzASVPU';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const status = document.getElementById('status');
    
    btn.disabled = true;
    btn.innerText = "Saving to Database...";

    const { data, error } = await _supabase.from('students').insert([{
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        roll_number: document.getElementById('roll').value,
        department: document.getElementById('dept').value,
        year: parseInt(document.getElementById('year').value)
    }]);

    status.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
    
    if (error) {
        status.innerText = "⚠️ Error: " + error.message;
        status.classList.add('bg-red-100', 'text-red-700');
    } else {
        status.innerText = "✅ Student Registered Successfully!";
        status.classList.add('bg-green-100', 'text-green-700');
        document.getElementById('studentForm').reset();
    }
    
    btn.disabled = false;
    btn.innerText = "Register Student";
});