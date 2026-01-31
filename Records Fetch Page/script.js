const SUPABASE_URL = 'https://jmrwmeebfjgdwddrvkdb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptcndtZWViZmpnZHdkZHJ2a2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NzgwNjYsImV4cCI6MjA4NTM1NDA2Nn0.YhFzelno7w737iish1ibmc8FfAykDfXBFwuwwzASVPU';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
let allStudents = [];

async function fetchStudents() {
    const { data, error } = await _supabase
        .from('students')
        .select('*')
        .order('created_at', { ascending: false });

    document.getElementById('loading').classList.add('hidden');
    
    if (data) {
        allStudents = data;
        renderStudents(allStudents);
    }
}

function renderStudents(students) {
    const grid = document.getElementById('studentGrid');
    const empty = document.getElementById('emptyState');
    grid.innerHTML = '';
    
    if (students.length === 0) {
        empty.classList.remove('hidden');
        return;
    }
    
    empty.classList.add('hidden');
    students.forEach(s => {
        grid.innerHTML += `
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div class="flex justify-between items-start mb-6">
                    <div class="h-14 w-14 bg-gradient-to-tr from-indigo-500 to-purple-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner">
                        ${s.name[0]}
                    </div>
                    <span class="text-[10px] font-black tracking-widest uppercase px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">YEAR ${s.year}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-800 truncate">${s.name}</h3>
                <p class="text-sm text-slate-400 mb-6 truncate">${s.email}</p>
                
                <div class="space-y-3 pt-4 border-t border-slate-50">
                    <div class="flex justify-between text-xs">
                        <span class="text-slate-400 uppercase font-bold">Roll Number</span>
                        <span class="text-slate-800 font-mono font-bold">${s.roll_number}</span>
                    </div>
                    <div class="flex justify-between text-xs">
                        <span class="text-slate-400 uppercase font-bold">Department</span>
                        <span class="text-indigo-600 font-bold">${s.department}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allStudents.filter(s => 
        s.name.toLowerCase().includes(term) || 
        s.roll_number.toLowerCase().includes(term)
    );
    renderStudents(filtered);
});

fetchStudents();