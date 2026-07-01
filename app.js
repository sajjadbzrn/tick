/**
 * Tick - Modern Task Manager
 * A PWA task manager with i18n, dark mode, and localStorage persistence
 */

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  en: {
    appName: 'Tick',
    allTasks: 'All Tasks',
    today: 'Today',
    important: 'Important',
    planned: 'Planned',
    categories: 'Categories',
    addTask: 'Add Task',
    editTask: 'Edit Task',
    deleteTask: 'Delete Task',
    title: 'Title',
    description: 'Description',
    priority: 'Priority',
    dueDate: 'Due Date',
    category: 'Category',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    search: 'Search tasks...',
    noTasks: 'No tasks yet',
    noTasksDesc: 'Start by adding your first task',
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    todo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'English',
    tasksCompleted: 'tasks completed',
    clearCompleted: 'Clear completed',
    filters: 'Filters',
    all: 'All',
    active: 'Active',
    completed: 'Completed',
    total: 'Total',
    progress: 'Progress',
    overdue: 'Overdue',
    general: 'General',
    work: 'Work',
    personal: 'Personal',
    health: 'Health',
    finance: 'Finance',
    education: 'Education',
    newest: 'Newest',
    oldest: 'Oldest',
    deleteConfirm: 'Delete Task?',
    deleteWarning: 'This action cannot be undone.',
    taskAdded: 'Task added successfully',
    taskUpdated: 'Task updated successfully',
    taskDeleted: 'Task deleted successfully',
    taskCompleted: 'Task marked as done',
    taskUncompleted: 'Task marked as active',
    noTasksFound: 'No tasks found',
    noTasksFoundDesc: 'Try a different search or filter',
    emptyToday: 'Nothing due today',
    emptyTodayDesc: 'You have a free day!',
    emptyImportant: 'No important tasks',
    emptyImportantDesc: 'Mark tasks as high priority',
    emptyPlanned: 'No planned tasks',
    emptyPlannedDesc: 'Add due dates to your tasks',
    categories_empty: 'No categories yet',
    addCategory: 'Add category',
    edit: 'Edit',
    welcomeTitle: 'Welcome to Tick!',
    welcomeSubtitle: 'Your Smart Task Manager',
    welcomeDesc: 'Get organized and get things done. Here is how to start:',
    welcomeStep1: 'Click the + button to add your first task',
    welcomeStep2: 'Use the sidebar to filter by Today, Important, or Planned',
    welcomeStep3: 'Drag and drop tasks to reorder them',
    welcomeStep4: 'Toggle dark mode and switch between EN / FA',
    welcomeDontShow: "Don't show again",
    welcomeStart: 'Get Started',
    taskRestored: 'Task restored',
    notifications: 'Notifications',
    notificationsEnabled: 'Notifications enabled',
    notificationsOff: 'Notifications off',
    tasksDueToday: 'tasks due today',
    noDueToday: 'No tasks due today',
  },
  fa: {
    appName: 'تیک',
    allTasks: 'همه وظایف',
    today: 'امروز',
    important: 'مهم',
    planned: 'برنامه‌ریزی شده',
    categories: 'دسته‌بندی‌ها',
    addTask: 'افزودن وظیفه',
    editTask: 'ویرایش وظیفه',
    deleteTask: 'حذف وظیفه',
    title: 'عنوان',
    description: 'توضیحات',
    priority: 'اولویت',
    dueDate: 'تاریخ سررسید',
    category: 'دسته‌بندی',
    save: 'ذخیره',
    cancel: 'لغو',
    delete: 'حذف',
    search: 'جستجوی وظایف...',
    noTasks: 'هنوز وظیفه‌ای وجود ندارد',
    noTasksDesc: 'با افزودن اولین وظیفه شروع کنید',
    low: 'کم',
    medium: 'متوسط',
    high: 'زیاد',
    todo: 'انجام نشده',
    inProgress: 'در حال انجام',
    done: 'تکمیل شده',
    darkMode: 'حالت تاریک',
    lightMode: 'حالت روشن',
    language: 'فارسی',
    tasksCompleted: 'وظیفه کامل شد',
    clearCompleted: 'پاک کردن کامل شده‌ها',
    filters: 'فیلترها',
    all: 'همه',
    active: 'فعال',
    completed: 'تکمیل شده',
    total: 'مجموع',
    progress: 'پیشرفت',
    overdue: 'دیرکرد',
    general: 'عمومی',
    work: 'کار',
    personal: 'شخصی',
    health: 'سلامت',
    finance: 'مالی',
    education: 'آموزش',
    newest: 'جدیدترین',
    oldest: 'قدیمی‌ترین',
    deleteConfirm: 'حذف وظیفه؟',
    deleteWarning: 'این عمل قابل بازگشت نیست.',
    taskAdded: 'وظیفه با موفقیت اضافه شد',
    taskUpdated: 'وظیفه با موفقیت به‌روزرسانی شد',
    taskDeleted: 'وظیفه با موفقیت حذف شد',
    taskCompleted: 'وظیفه به عنوان انجام شده علامت خورد',
    taskUncompleted: 'وظیفه به عنوان فعال علامت خورد',
    noTasksFound: 'وظیفه‌ای یافت نشد',
    noTasksFoundDesc: 'جستجو یا فیلتر دیگری امتحان کنید',
    emptyToday: 'امروز وظیفه‌ای نیست',
    emptyTodayDesc: 'امروز روز آزادی دارید!',
    emptyImportant: 'وظیفه مهمی وجود ندارد',
    emptyImportantDesc: 'وظایف را با اولویت بالا علامت بزنید',
    emptyPlanned: 'وظیفه برنامه‌ریزی شده‌ای نیست',
    emptyPlannedDesc: 'به وظایف خود تاریخ سررسید اضافه کنید',
    categories_empty: 'دسته‌بندی وجود ندارد',
    addCategory: 'افزودن دسته‌بندی',
    edit: 'ویرایش',
    welcomeTitle: 'به تیک خوش آمدید!',
    welcomeSubtitle: 'مدیر وظایف هوشمند شما',
    welcomeDesc: 'سازماندهی کنید و کارها را انجام دهید. راهنمای شروع:',
    welcomeStep1: 'برای افزودن اولین وظیفه روی دکمه + کلیک کنید',
    welcomeStep2: 'از نوار کناری برای فیلتر بر اساس امروز، مهم یا برنامه‌ریزی شده استفاده کنید',
    welcomeStep3: 'برای مرتب‌سازی وظایف، آن‌ها را بکشید و رها کنید',
    welcomeStep4: 'حالت تاریک را تغییر دهید و بین EN/FA جابه‌جا شوید',
    welcomeDontShow: 'دوباره نمایش نده',
    welcomeStart: 'شروع کنید',
    taskRestored: 'وظیفه بازگردانی شد',
    notifications: 'اعلان‌ها',
    notificationsEnabled: 'اعلان‌ها فعال شد',
    notificationsOff: 'اعلان‌ها غیرفعال',
    tasksDueToday: 'وظیفه برای امروز',
    noDueToday: 'وظیفه‌ای برای امروز نیست',
  }
};

// ============================================================
// STATE
// ============================================================
const state = {
  tasks: [],
  currentView: 'all',
  currentFilter: 'all',
  searchQuery: '',
  sortBy: 'newest',
  lang: 'en',
  theme: 'light',
  editingTaskId: null,
  deleteTaskId: null,
  currentCategory: null,
};

// ============================================================
// DOM REFS
// ============================================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {};

function cacheDom() {
  dom.appName = $('#appName');
  dom.langToggle = $('#langToggle');
  dom.langLabel = $('#langLabel');
  dom.themeToggle = $('#themeToggle');
  dom.sunIcon = $('#sunIcon');
  dom.moonIcon = $('#moonIcon');
  dom.menuBtn = $('#menuBtn');
  dom.sidebar = $('#sidebar');
  dom.sidebarOverlay = $('#sidebarOverlay');
  dom.searchInput = $('#searchInput');
  dom.searchInputMobile = $('#searchInputMobile');
  dom.addTaskBtn = $('#addTaskBtn');
  dom.addTaskBtnMobile = $('#addTaskBtnMobile');
  dom.addTaskLabel = $('#addTaskLabel');
  dom.taskList = $('#taskList');
  dom.taskModal = $('#taskModal');
  dom.deleteModal = $('#deleteModal');
  dom.modalTitle = $('#modalTitle');
  dom.taskTitleInput = $('#taskTitleInput');
  dom.taskDescInput = $('#taskDescInput');
  dom.taskPriorityInput = $('#taskPriorityInput');
  dom.taskCategoryInput = $('#taskCategoryInput');
  dom.taskDueDateInput = $('#taskDueDateInput');
  dom.saveTaskBtn = $('#saveTaskBtn');
  dom.cancelTaskBtn = $('#cancelTaskBtn');
  dom.closeModalBtn = $('#closeModalBtn');
  dom.confirmDeleteBtn = $('#confirmDeleteBtn');
  dom.cancelDeleteBtn = $('#cancelDeleteBtn');
  dom.toastContainer = $('#toastContainer');
  dom.categoriesList = $('#categoriesList');
  dom.sortSelect = $('#sortSelect');
  dom.statTotal = $('#statTotal');
  dom.statInProgress = $('#statInProgress');
  dom.statCompleted = $('#statCompleted');
  dom.statOverdue = $('#statOverdue');
  dom.progressBar = $('#progressBar');
  dom.progressText = $('#progressText');
  dom.countAll = $('#countAll');
  dom.countToday = $('#countToday');
  dom.countImportant = $('#countImportant');
  dom.countPlanned = $('#countPlanned');

  dom.notificationBtn = $('#notificationBtn');
  dom.bellIconActive = $('#bellIconActive');
  dom.bellIconMuted = $('#bellIconMuted');
  dom.mainContent = $('#mainContent');

  dom.sidebarLinks = $$('.sidebar-link');
  dom.bottomNavItems = $$('.bottom-nav-item');
  dom.statusTabs = $$('.status-tab');
  dom.welcomeModal = $('#welcomeModal');
  dom.welcomeCloseBtn = $('#welcomeCloseBtn');
  dom.welcomeStartBtn = $('#welcomeStartBtn');
  dom.welcomeDontShow = $('#welcomeDontShow');
}

// ============================================================
// LOCAL STORAGE
// ============================================================
function loadState() {
  try {
    const saved = localStorage.getItem('tick_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }

  // Clean up old keys from previous versions
  localStorage.removeItem('tick_visited');

  // Apply theme (also handles icons)
  applyTheme(state.theme);

  // Load language
  applyLanguage(state.lang);
}

function saveState() {
  try {
    localStorage.setItem('tick_state', JSON.stringify({
      tasks: state.tasks,
      lang: state.lang,
      theme: state.theme,
    }));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

// ============================================================
// INTERNATIONALIZATION (i18n)
// ============================================================
function t(key) {
  return translations[state.lang]?.[key] || translations.en[key] || key;
}

let _initialLang = true;

function applyLanguage(lang) {
  state.lang = lang;
  const html = document.documentElement;

  if (lang === 'fa') {
    html.setAttribute('lang', 'fa');
    html.setAttribute('dir', 'rtl');
    html.classList.add('rtl');
    document.body.classList.add('persian');
    dom.langLabel.textContent = 'EN';
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    html.classList.remove('rtl');
    document.body.classList.remove('persian');
    dom.langLabel.textContent = 'FA';
  }

  updateUI();
  // Only save after initial load to avoid redundant I/O
  if (!_initialLang) saveState();
  _initialLang = false;
}

function toggleLanguage() {
  const newLang = state.lang === 'en' ? 'fa' : 'en';
  applyLanguage(newLang);
  showToast(t('language') + ': ' + (newLang === 'fa' ? 'فارسی' : 'English'));
}

// ============================================================
// THEME
// ============================================================
function applyTheme(theme) {
  state.theme = theme;
  const themeColor = document.getElementById('themeColorMeta');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    dom.sunIcon.classList.remove('hidden');
    dom.moonIcon.classList.add('hidden');
    if (themeColor) themeColor.content = '#030712';
  } else {
    document.documentElement.classList.remove('dark');
    dom.sunIcon.classList.add('hidden');
    dom.moonIcon.classList.remove('hidden');
    if (themeColor) themeColor.content = '#ea580c';
  }
  saveState();
}

function toggleTheme() {
  const newTheme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  showToast(newTheme === 'dark' ? t('darkMode') : t('lightMode'));
}

// ============================================================
// TASK CRUD
// ============================================================
let taskIdCounter = Date.now();

function createTask(data) {
  const task = {
    id: 'task_' + (++taskIdCounter).toString(36),
    title: data.title.trim(),
    description: data.description?.trim() || '',
    priority: data.priority || 'medium',
    category: data.category || 'General',
    dueDate: data.dueDate || '',
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
  };
  return task;
}

function addTask(task) {
  state.tasks.unshift(task);
  saveState();
  render();
  showToast(t('taskAdded'));
}

function updateTask(id, data) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;

  if (data.title !== undefined) task.title = data.title.trim();
  if (data.description !== undefined) task.description = data.description.trim();
  if (data.priority !== undefined) task.priority = data.priority;
  if (data.category !== undefined) task.category = data.category;
  if (data.dueDate !== undefined) task.dueDate = data.dueDate;
  task.updatedAt = new Date().toISOString();

  saveState();
  render();
  showToast(t('taskUpdated'));
}

// ============================================================
// UNDO DELETE
// ============================================================
let _pendingDeleteId = 0;
let _pendingDeletion = null;
let _pendingDeleteTimer = null;

function restoreDeletedTask(deleteId) {
  // Guard: only restore if this toast matches the current pending deletion
  if (!_pendingDeletion || _pendingDeleteId !== deleteId) return;

  clearTimeout(_pendingDeleteTimer);
  _pendingDeleteTimer = null;

  state.tasks.unshift(_pendingDeletion);
  _pendingDeletion = null;
  saveState();
  render();
  showToast(t('taskRestored') || 'Task restored', 'info');
}

function deleteTask(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;

  // Remove from list immediately
  state.tasks = state.tasks.filter(t => t.id !== id);
  saveState();
  render();

  // Cancel any pending undo (old deletion is now permanent)
  if (_pendingDeleteTimer) {
    clearTimeout(_pendingDeleteTimer);
    _pendingDeleteTimer = null;
  }

  // Store for undo with a unique ID
  _pendingDeleteId++;
  _pendingDeletion = task;
  const currentId = _pendingDeleteId;

  // Show undo toast with the task title
  const undoText = state.lang === 'fa' ? 'بازگردانی' : 'Undo';
  showUndoToast(
    state.lang === 'fa'
      ? 'وظیفه حذف شد: ' + task.title
      : 'Task deleted: ' + task.title,
    undoText,
    () => restoreDeletedTask(currentId)
  );

  // Auto clean up after 5 seconds (task already removed from state)
  _pendingDeleteTimer = setTimeout(() => {
    if (_pendingDeletion && _pendingDeleteId === currentId) {
      _pendingDeletion = null;
      _pendingDeleteTimer = null;
    }
  }, 5000);
}

function toggleTaskStatus(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;

  if (task.status === 'done') {
    task.status = 'todo';
    task.completedAt = null;
    showToast(t('taskUncompleted'));
  } else {
    task.status = 'done';
    task.completedAt = new Date().toISOString();
    showToast(t('taskCompleted'));
  }
  task.updatedAt = new Date().toISOString();
  saveState();
  render();
}

// ============================================================
// FILTERING & SORTING
// ============================================================
function getFilteredTasks() {
  let tasks = [...state.tasks];

  // View filter
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  switch (state.currentView) {
    case 'today':
      tasks = tasks.filter(t => t.dueDate === todayStr);
      break;
    case 'important':
      tasks = tasks.filter(t => t.priority === 'high');
      break;
    case 'planned':
      tasks = tasks.filter(t => t.dueDate && t.dueDate.length > 0);
      break;
  }

  // Category filter
  if (state.currentCategory) {
    tasks = tasks.filter(t => t.category === state.currentCategory);
  }

  // Status filter
  if (state.currentFilter === 'todo') {
    tasks = tasks.filter(t => t.status !== 'done');
  } else if (state.currentFilter === 'done') {
    tasks = tasks.filter(t => t.status === 'done');
  }

  // Search
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    tasks = tasks.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (state.sortBy) {
    case 'newest':
      tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    case 'oldest':
      tasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      break;
    case 'priority':
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      break;
    case 'dueDate':
      tasks.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate.localeCompare(b.dueDate);
      });
      break;
  }

  return tasks;
}

function getCategories() {
  const cats = new Set();
  state.tasks.forEach(t => cats.add(t.category));
  return Array.from(cats).sort();
}

function getStats() {
  const total = state.tasks.length;
  const inProgress = state.tasks.filter(t => t.status === 'todo').length;
  const completed = state.tasks.filter(t => t.status === 'done').length;
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const overdue = state.tasks.filter(t =>
    t.status !== 'done' && t.dueDate && t.dueDate < todayStr
  ).length;
  return { total, inProgress, completed, overdue, progress: total ? Math.round((completed / total) * 100) : 0 };
}

// ============================================================
// RENDER
// ============================================================
function updateUI() {
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  // Update placeholders
  dom.searchInput.placeholder = t('search');
  dom.searchInputMobile.placeholder = t('search');
  dom.taskTitleInput.placeholder = state.editingTaskId ? '' : t('title') + '...';
  dom.addTaskLabel.textContent = t('addTask');
}

function renderStats() {
  const stats = getStats();
  dom.statTotal.textContent = stats.total;
  dom.statInProgress.textContent = stats.inProgress;
  dom.statCompleted.textContent = stats.completed;
  dom.statOverdue.textContent = stats.overdue;
  dom.progressBar.style.width = stats.progress + '%';
  dom.progressText.textContent = stats.progress + '%';
}

function renderCounts() {
  const all = state.tasks.length;
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const today = state.tasks.filter(t => t.dueDate === todayStr).length;
  const important = state.tasks.filter(t => t.priority === 'high').length;
  const planned = state.tasks.filter(t => t.dueDate && t.dueDate.length > 0).length;

  dom.countAll.textContent = all;
  dom.countToday.textContent = today;
  dom.countImportant.textContent = important;
  dom.countPlanned.textContent = planned;
}

function renderCategories() {
  const categories = getCategories();
  if (categories.length === 0) {
    dom.categoriesList.innerHTML = `
      <p class="px-4 text-xs text-gray-400 dark:text-gray-500">${t('categories_empty')}</p>
    `;
    return;
  }

  dom.categoriesList.innerHTML = categories.map(cat => `
    <button class="sidebar-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${state.currentCategory === cat ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/30' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}" data-category="${cat}">
      <span class="w-2.5 h-2.5 rounded-full bg-brand-400"></span>
      <span>${cat}</span>
      ${state.currentCategory === cat ? '<svg class="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>' : ''}
      <span class="ml-auto text-xs text-gray-400">${state.tasks.filter(t => t.category === cat && t.status !== 'done').length}</span>
    </button>
  `).join('');
}

function renderTaskList() {
  const tasks = getFilteredTasks();

  if (tasks.length === 0) {
    const emptyStates = {
      all: { title: t('noTasks'), desc: t('noTasksDesc') },
      today: { title: t('emptyToday'), desc: t('emptyTodayDesc') },
      important: { title: t('emptyImportant'), desc: t('emptyImportantDesc') },
      planned: { title: t('emptyPlanned'), desc: t('emptyPlannedDesc') },
    };
    const empty = emptyStates[state.currentView] || emptyStates.all;

    dom.taskList.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16 sm:py-24 text-center animate-fade-in">
        <div class="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-3xl bg-gradient-to-br from-brand-50 to-orange-100 dark:from-brand-950 dark:to-brand-900/50 flex items-center justify-center">
          <svg class="w-10 h-10 sm:w-12 sm:h-12 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
          </svg>
        </div>
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">${empty.title}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-xs">${empty.desc}</p>
        <button class="mt-6 flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-brand-500/25 hover:shadow-xl active:scale-95 add-first-task-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
          </svg>
          ${t('addTask')}
        </button>
      </div>
    `;

    const addFirstBtn = dom.taskList.querySelector('.add-first-task-btn');
    if (addFirstBtn) {
      addFirstBtn.addEventListener('click', () => openAddModal());
    }
    return;
  }

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  dom.taskList.innerHTML = tasks.map(task => {
    const isOverdue = task.status !== 'done' && task.dueDate && task.dueDate < todayStr;
    const isToday = task.dueDate === todayStr;
    const dueLabel = task.dueDate ? formatDate(task.dueDate) : '';

    const priorityColors = {
      high: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
      medium: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400',
      low: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    };

    return `
      <div class="task-card priority-${task.priority} ${task.status === 'done' ? 'completed' : ''} bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-gray-800 shadow-sm animate-slide-up" data-task-id="${task.id}" draggable="true">
        <div class="flex items-start gap-3 sm:gap-4">
          <!-- Checkbox -->
          <button class="task-checkbox custom-checkbox mt-0.5 flex-shrink-0 ${task.status === 'done' ? 'checked' : ''}" data-task-id="${task.id}">
            ${task.status === 'done' ? '<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>' : ''}
          </button>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-2">
              <h3 class="task-title text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">${escapeHtml(task.title)}</h3>
              <div class="flex items-center gap-1 flex-shrink-0">
                <button class="edit-task-btn p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" data-task-id="${task.id}" title="${t('edit')}">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </button>
                <button class="delete-task-btn p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" data-task-id="${task.id}" title="${t('delete')}">
                  <svg class="w-4 h-4 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>

            ${task.description ? `<p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2">${escapeHtml(task.description)}</p>` : ''}

            <div class="flex flex-wrap items-center gap-2 mt-3">
              <span class="priority-badge ${priorityColors[task.priority]}">${t(task.priority)}</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">${escapeHtml(task.category)}</span>
              ${task.dueDate ? `
                <span class="text-xs flex items-center gap-1 ${isOverdue ? 'text-red-500 font-semibold' : isToday ? 'text-brand-500 font-semibold' : 'text-gray-400 dark:text-gray-500'}">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  ${dueLabel}
                  ${isOverdue ? '• ' + t('overdue') : ''}
                </span>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners to task cards
  dom.taskList.querySelectorAll('.task-checkbox').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.taskId;
      toggleTaskStatus(id);
    });
  });

  dom.taskList.querySelectorAll('.edit-task-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.taskId;
      openEditModal(id);
    });
  });

  dom.taskList.querySelectorAll('.delete-task-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.taskId;
      openDeleteModal(id);
    });
  });

  // Drag and drop
  setupDragAndDrop();
}

function render() {
  updateUI();
  renderStats();
  renderCounts();
  renderCategories();
  renderTaskList();
}

// ============================================================
// DRAG AND DROP
// ============================================================
function setupDragAndDrop() {
  const cards = dom.taskList.querySelectorAll('.task-card');
  let dragSrcId = null;

  cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
      dragSrcId = card.dataset.taskId;
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      dom.taskList.querySelectorAll('.task-card').forEach(c => c.classList.remove('drag-over'));
    });

    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      card.classList.add('drag-over');
    });

    card.addEventListener('dragleave', () => {
      card.classList.remove('drag-over');
    });

    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      if (dragSrcId && dragSrcId !== card.dataset.taskId) {
        const dragIndex = state.tasks.findIndex(t => t.id === dragSrcId);
        const dropIndex = state.tasks.findIndex(t => t.id === card.dataset.taskId);
        if (dragIndex !== -1 && dropIndex !== -1) {
          const [removed] = state.tasks.splice(dragIndex, 1);
          state.tasks.splice(dropIndex, 0, removed);
          saveState();
          renderTaskList();
        }
      }
    });
  });
}

// ============================================================
// MODALS
// ============================================================
function openAddModal() {
  state.editingTaskId = null;
  dom.modalTitle.textContent = t('addTask');
  dom.taskTitleInput.value = '';
  dom.taskDescInput.value = '';
  dom.taskPriorityInput.value = 'medium';
  dom.taskCategoryInput.value = 'General';
  dom.taskDueDateInput.value = '';
  dom.saveTaskBtn.querySelector('span').textContent = t('save');
  dom.taskModal.classList.remove('hidden');
  dom.taskModal.classList.add('flex');
  setTimeout(() => dom.taskTitleInput.focus(), 100);
}

function openEditModal(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;

  state.editingTaskId = id;
  dom.modalTitle.textContent = t('editTask');
  dom.taskTitleInput.value = task.title;
  dom.taskDescInput.value = task.description;
  dom.taskPriorityInput.value = task.priority;
  dom.taskCategoryInput.value = task.category;
  dom.taskDueDateInput.value = task.dueDate;
  dom.saveTaskBtn.querySelector('span').textContent = t('save');
  dom.taskModal.classList.remove('hidden');
  dom.taskModal.classList.add('flex');
  setTimeout(() => dom.taskTitleInput.focus(), 100);
}

function closeModal() {
  dom.taskModal.classList.add('hidden');
  dom.taskModal.classList.remove('flex');
  state.editingTaskId = null;
}

function openDeleteModal(id) {
  state.deleteTaskId = id;
  dom.deleteModal.classList.remove('hidden');
  dom.deleteModal.classList.add('flex');
}

function closeDeleteModal() {
  dom.deleteModal.classList.add('hidden');
  dom.deleteModal.classList.remove('flex');
  state.deleteTaskId = null;
}

// ============================================================
// WELCOME MODAL
// ============================================================
function showWelcomeModal() {
  const dismissed = localStorage.getItem('tick_welcome_dismissed');
  if (dismissed === 'true') return;

  dom.welcomeModal.classList.remove('hidden');
  dom.welcomeModal.classList.add('flex');
}

function closeWelcomeModal() {
  dom.welcomeModal.classList.add('hidden');
  dom.welcomeModal.classList.remove('flex');
  if (dom.welcomeDontShow.checked) {
    localStorage.setItem('tick_welcome_dismissed', 'true');
  }
}

// ============================================================
// TOAST
// ============================================================
let toastIdCounter = 0;

function showToast(message, type) {
  type = type || 'success';
  const id = ++toastIdCounter;

  const icons = {
    success: `<svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`,
    info: `<svg class="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    error: `<svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  };

  const borders = {
    success: 'border-l-green-500',
    info: 'border-l-brand-500',
    error: 'border-l-red-500',
  };

  const toast = document.createElement('div');
  toast.className = `toast pointer-events-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white pl-4 pr-5 py-3.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 border-l-4 ${borders[type] || borders.success} text-sm font-medium flex items-center gap-3 animate-slide-up`;
  toast.innerHTML = `
    ${icons[type] || icons.success}
    <span class="flex-1">${escapeHtml(message)}</span>
    <button class="toast-close p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0" data-toast="${id}">
      <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  `;
  dom.toastContainer.appendChild(toast);

  // Close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    if (toast.parentNode) toast.remove();
  });

  // Auto dismiss after 3.5s
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 300);
    }
  }, 3500);
}

// ============================================================
// UNDO TOAST
// ============================================================
let _undoToastId = 0;

function showUndoToast(message, actionLabel, onAction) {
  const id = ++_undoToastId;

  const toast = document.createElement('div');
  toast.className = `toast pointer-events-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white pl-4 pr-2 py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 border-l-4 border-l-brand-500 text-sm font-medium flex items-center gap-3 animate-slide-up max-w-sm`;
  toast.innerHTML = `
    <svg class="w-4 h-4 flex-shrink-0 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span class="flex-1 truncate">${escapeHtml(message)}</span>
    <button class="undo-action-btn px-3 py-1.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap flex-shrink-0">${escapeHtml(actionLabel)}</button>
    <button class="toast-close p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0" data-toast="${id}">
      <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  `;
  dom.toastContainer.appendChild(toast);

  // Action button
  toast.querySelector('.undo-action-btn').addEventListener('click', () => {
    if (toast.parentNode) toast.remove();
    onAction();
  });

  // Close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    if (toast.parentNode) toast.remove();
  });

  // Auto dismiss in sync with the 5s deletion timer
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 300);
    }
  }, 5000);
}

// ============================================================
// NOTIFICATIONS
// ============================================================
let _notifInterval = null;

function getNotifiedTaskIds() {
  try {
    const data = localStorage.getItem('tick_notified');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.warn('Failed to load notified IDs:', e);
    return [];
  }
}

function saveNotifiedTaskIds(ids) {
  localStorage.setItem('tick_notified', JSON.stringify(ids));
}

function markTaskNotified(id) {
  const ids = getNotifiedTaskIds();
  if (!ids.includes(id)) {
    ids.push(id);
    saveNotifiedTaskIds(ids);
  }
}

function updateNotificationBell() {
  if (!('Notification' in window)) {
    dom.notificationBtn.classList.add('hidden');
    return;
  }
  dom.notificationBtn.classList.remove('hidden');

  if (Notification.permission === 'granted') {
    dom.bellIconActive.classList.remove('hidden');
    dom.bellIconMuted.classList.add('hidden');
  } else {
    dom.bellIconActive.classList.add('hidden');
    dom.bellIconMuted.classList.remove('hidden');
  }
}

function requestNotificationPermission() {
  if (!('Notification' in window)) {
    showToast('Notifications not supported in this browser', 'error');
    return;
  }

  if (Notification.permission === 'granted') {
    const count = checkDueTasksAndNotify();
    if (count > 0) {
      showToast('🔔 ' + count + ' ' + (t('tasksDueToday') || 'tasks due today'), 'info');
    } else {
      showToast(t('noDueToday') || 'No tasks due today', 'info');
    }
    return;
  }

  if (Notification.permission === 'denied') {
    showToast('Notifications are blocked. Enable them in browser settings.', 'error');
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      checkDueTasksAndNotify();
      showToast(t('notificationsEnabled'), 'success');
      updateNotificationBell();
    } else {
      showToast('Notification permission denied', 'error');
      updateNotificationBell();
    }
  });
}

function checkDueTasksAndNotify() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  const todayStr = new Date().toISOString().split('T')[0];
  const notifiedIds = getNotifiedTaskIds();

  const dueToday = state.tasks.filter(t =>
    t.status !== 'done' &&
    t.dueDate === todayStr &&
    !notifiedIds.includes(t.id)
  );

  if (dueToday.length === 0) return 0;

  // Use PNG icon for notification
  const iconUri = 'public/tick-icon.png';

  if (dueToday.length === 1) {
    const task = dueToday[0];
    const notif = new Notification('Tick - ' + t('today'), {
      body: task.title + (task.description ? ': ' + task.description : ''),
      icon: iconUri,
      tag: 'tick-today',
    });
    notif.addEventListener('click', () => {
      window.focus();
      if (dom.taskList) {
        const card = dom.taskList.querySelector(`[data-task-id="${task.id}"]`);
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    markTaskNotified(task.id);
  } else {
    const body = dueToday.length + ' ' + (t('tasksDueToday') || 'tasks due today');
    const notif = new Notification('Tick - ' + t('today'), {
      body: body,
      icon: iconUri,
      tag: 'tick-today',
    });
    notif.addEventListener('click', () => {
      window.focus();
    });
    dueToday.forEach(t => markTaskNotified(t.id));
  }

  return dueToday.length;
}

function initNotifications() {
  if (!('Notification' in window)) return;

  updateNotificationBell();

  // If permission already granted, check for due tasks
  if (Notification.permission === 'granted') {
    checkDueTasksAndNotify();
  }

  // Listen for permission changes from browser settings
  if (navigator.permissions && navigator.permissions.query) {
    navigator.permissions.query({ name: 'notifications' }).then(result => {
      result.onchange = () => {
        updateNotificationBell();
        if (Notification.permission === 'granted') {
          checkDueTasksAndNotify();
        }
      };
    }).catch(() => {});
  }

  // Set up periodic check every 60 seconds
  if (_notifInterval) clearInterval(_notifInterval);
  _notifInterval = setInterval(() => {
    if (Notification.permission === 'granted') {
      checkDueTasksAndNotify();
    }
  }, 60000);
}

// ============================================================
// HELPERS
// ============================================================
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.round((target - today) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return t('today');
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';

  if (state.lang === 'fa') {
    return date.toLocaleDateString('fa-IR', { month: 'short', day: 'numeric' });
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ============================================================
// SIDEBAR / NAVIGATION
// ============================================================
function setView(view) {
  state.currentView = view;
  state.currentCategory = null;

  // Update sidebar links
  dom.sidebarLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.view === view);
  });

  // Update bottom nav
  dom.bottomNavItems.forEach(item => {
    item.classList.toggle('active', item.dataset.view === view);
  });

  // Close sidebar on mobile
  closeSidebar();

  render();
}

function setFilter(filter) {
  state.currentFilter = filter;

  dom.statusTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === filter);
  });

  render();
}

function isDesktop() {
  return window.innerWidth >= 1024;
}

function updateMainContentMargin() {
  if (!dom.mainContent) return;
  if (isDesktop()) {
    const sidebarOpen = dom.sidebar.classList.contains('translate-x-0');
    dom.mainContent.classList.toggle('lg:ml-72', sidebarOpen);
  }
}

function closeSidebar() {
  dom.sidebar.classList.remove('translate-x-0');
  if (!isDesktop()) {
    dom.sidebarOverlay.classList.add('hidden');
  }
  updateMainContentMargin();
}

function toggleSidebar() {
  dom.sidebar.classList.toggle('translate-x-0');
  dom.sidebarOverlay.classList.toggle('hidden');
  updateMainContentMargin();
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function setupEventListeners() {
  // Notification toggle
  dom.notificationBtn.addEventListener('click', requestNotificationPermission);

  // Language toggle
  dom.langToggle.addEventListener('click', toggleLanguage);

  // Theme toggle
  dom.themeToggle.addEventListener('click', toggleTheme);

  // Menu toggle (mobile)
  dom.menuBtn.addEventListener('click', toggleSidebar);
  dom.sidebarOverlay.addEventListener('click', closeSidebar);

  // Sidebar navigation
  dom.sidebarLinks.forEach(link => {
    link.addEventListener('click', () => setView(link.dataset.view));
  });

  // Bottom nav
  dom.bottomNavItems.forEach(item => {
    item.addEventListener('click', () => setView(item.dataset.view));
  });

  // Category clicks in sidebar
  dom.categoriesList.addEventListener('click', (e) => {
    const catBtn = e.target.closest('[data-category]');
    if (catBtn) {
      const category = catBtn.dataset.category;
      state.currentCategory = state.currentCategory === category ? null : category;
      state.currentView = 'all';
      dom.sidebarLinks.forEach(l => l.classList.remove('active'));
      dom.sidebarLinks[0]?.classList.add('active');
      dom.bottomNavItems.forEach(l => l.classList.remove('active'));
      dom.bottomNavItems[0]?.classList.add('active');
      closeSidebar();
      render();
    }
  });

  // Status tabs
  dom.statusTabs.forEach(tab => {
    tab.addEventListener('click', () => setFilter(tab.dataset.filter));
  });

  // Sort select
  dom.sortSelect.addEventListener('change', () => {
    state.sortBy = dom.sortSelect.value;
    renderTaskList();
  });

  // Search
  function onSearch(e) {
    state.searchQuery = e.target.value;
    renderTaskList();
  }
  dom.searchInput.addEventListener('input', onSearch);
  dom.searchInputMobile.addEventListener('input', (e) => {
    dom.searchInput.value = e.target.value;
    onSearch(e);
  });

  // Add task buttons
  dom.addTaskBtn.addEventListener('click', openAddModal);
  dom.addTaskBtnMobile.addEventListener('click', openAddModal);

  // Modal - Save
  dom.saveTaskBtn.addEventListener('click', handleSaveTask);

  // Modal - Close/Cancel
  dom.closeModalBtn.addEventListener('click', closeModal);
  dom.cancelTaskBtn.addEventListener('click', closeModal);

  // Close modal on overlay click
  dom.taskModal.addEventListener('click', (e) => {
    if (e.target === dom.taskModal) closeModal();
  });

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeDeleteModal();
    }
  });

  // Enter key to save in modal
  dom.taskTitleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveTask();
    }
  });

  // Welcome modal
  dom.welcomeCloseBtn.addEventListener('click', closeWelcomeModal);
  dom.welcomeStartBtn.addEventListener('click', closeWelcomeModal);
  dom.welcomeModal.addEventListener('click', (e) => {
    if (e.target === dom.welcomeModal) closeWelcomeModal();
  });

  // Delete modal
  dom.confirmDeleteBtn.addEventListener('click', () => {
    if (state.deleteTaskId) {
      deleteTask(state.deleteTaskId);
      closeDeleteModal();
    }
  });
  dom.cancelDeleteBtn.addEventListener('click', closeDeleteModal);
  dom.deleteModal.addEventListener('click', (e) => {
    if (e.target === dom.deleteModal) closeDeleteModal();
  });
}

function handleSaveTask() {
  const title = dom.taskTitleInput.value.trim();
  const errorEl = document.getElementById('titleError');
  if (!title) {
    if (!errorEl) {
      const err = document.createElement('p');
      err.id = 'titleError';
      err.className = 'text-xs text-red-500 mt-1.5 animate-slide-up';
      err.textContent = state.lang === 'fa' ? 'عنوان الزامی است' : 'Title is required';
      dom.taskTitleInput.parentNode.appendChild(err);
    }
    dom.taskTitleInput.classList.add('ring-2', 'ring-red-500', 'border-red-300');
    dom.taskTitleInput.focus();
    return;
  }

  // Clear error
  if (errorEl) errorEl.remove();
  dom.taskTitleInput.classList.remove('ring-2', 'ring-red-500', 'border-red-300');

  const data = {
    title,
    description: dom.taskDescInput.value.trim(),
    priority: dom.taskPriorityInput.value,
    category: dom.taskCategoryInput.value,
    dueDate: dom.taskDueDateInput.value,
  };

  if (state.editingTaskId) {
    updateTask(state.editingTaskId, data);
  } else {
    const task = createTask(data);
    addTask(task);
  }

  closeModal();
}

// ============================================================
// SIDEBAR
// ============================================================
function initSidebar() {
  // Open sidebar by default on desktop
  if (isDesktop()) {
    dom.sidebar.classList.add('translate-x-0');
    dom.mainContent.classList.add('lg:ml-72');
  }

  // Adjust margin on window resize (e.g. going from mobile to desktop)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateMainContentMargin();
    }, 150);
  });
}

// ============================================================
// PWA SERVICE WORKER
// ============================================================
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('Service Worker registered'))
      .catch(() => console.log('Service Worker registration failed'));
  }
}

// ============================================================
// INIT
// ============================================================
function init() {
  cacheDom();
  loadState();
  setupEventListeners();
  render();
  registerServiceWorker();

  // Set default date input to today
  if (dom.taskDueDateInput) {
    const today = new Date().toISOString().split('T')[0];
    dom.taskDueDateInput.setAttribute('min', '2020-01-01');
  }

  // Initialize sidebar (open by default on desktop)
  initSidebar();

  // Initialize notifications
  initNotifications();

  // Show welcome modal after everything is rendered
  setTimeout(() => showWelcomeModal(), 600);

  console.log('Tick v1.0.0 initialized 🚀');
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
