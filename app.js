const STORAGE_KEY = "daily-task-scheduler.tasks";
const THEME_STORAGE_KEY = "daily-task-scheduler.theme";
const ACCENT_STORAGE_KEY = "daily-task-scheduler.accent";
const TYPE_STORAGE_KEY = "daily-task-scheduler.custom-types";
const GOAL_STORAGE_KEY = "daily-task-scheduler.weekly-goals";
const WEEKLY_REPORT_SEEN_STORAGE_KEY = "daily-task-scheduler.weekly-report-seen";
const OVERLAP_DISMISS_STORAGE_KEY = "daily-task-scheduler.dismissed-overlap";
const TIMER_STORAGE_KEY = "daily-task-scheduler.active-timer";
const FEATURE_STORAGE_KEY = "daily-task-scheduler.feature-settings";
const TEMPLATE_STORAGE_KEY = "daily-task-scheduler.task-templates";
const MISSED_COLLAPSE_STORAGE_KEY = "daily-task-scheduler.missed-collapsed";
const STREAK_CELEBRATION_STORAGE_KEY = "daily-task-scheduler.streak-celebrated-date";
const PROFILE_STORAGE_KEY = "daily-task-scheduler.profiles";
const ACTIVE_PROFILE_STORAGE_KEY = "daily-task-scheduler.active-profile";
const SUPABASE_URL = "https://xaacjrtkzvphztifnywm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhYWNqcnRrenZwaHp0aWZueXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMDA4NzcsImV4cCI6MjA5NTg3Njg3N30.mTBCPN4JiVDWQVVxBXyFE67vJ3i8A4JoW8mpUO1wDfo";
const CLOUD_DATA_TABLE = "scheduler_app_data";
const PROFILE_SCOPED_STORAGE_KEYS = [
  STORAGE_KEY,
  TYPE_STORAGE_KEY,
  GOAL_STORAGE_KEY,
  WEEKLY_REPORT_SEEN_STORAGE_KEY,
  OVERLAP_DISMISS_STORAGE_KEY,
  TIMER_STORAGE_KEY,
  TEMPLATE_STORAGE_KEY,
  MISSED_COLLAPSE_STORAGE_KEY,
  STREAK_CELEBRATION_STORAGE_KEY,
];
const SCHEDULE_DAYS_TO_SHOW = 30;
const GRID_MINUTE_HEIGHT = 2.05;
const GRID_COLLAPSED_GAP_MINUTES = 24;
const GRID_MOVE_HOLD_MS = 600;
const GRID_MOVE_CANCEL_DISTANCE = 12;
const GRID_MOVE_SNAP_MINUTES = 15;
const TASK_DOUBLE_TAP_MS = 380;
const TASK_DOUBLE_TAP_DISTANCE = 28;
const TASK_SWIPE_ACTIVATE_DISTANCE = 12;
const TASK_SWIPE_DELETE_DISTANCE = 96;
const STREAK_MINUTES_TO_KEEP = 10;
const TASK_REMINDER_INTERVAL_MS = 30 * 1000;
const TASK_REMINDER_GRACE_MS = 2 * 60 * 1000;
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const BUILT_IN_TASK_TYPES = ["Focus", "Personal", "Study", "Health", "Errand"];
const PRIORITY_LEVELS = ["Low", "Medium", "High"];

const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const scheduleGrid = document.querySelector("#scheduleGrid");
const emptyState = document.querySelector("#emptyState");
const overlapAlert = document.querySelector("#overlapAlert");
const completedTaskList = document.querySelector("#completedTaskList");
const completedEmptyState = document.querySelector("#completedEmptyState");
const taskCount = document.querySelector("#taskCount");
const completedCount = document.querySelector("#completedCount");
const completedPoints = document.querySelector("#completedPoints");
const missedTasksPanel = document.querySelector("#missedTasksPanel");
const missedTaskList = document.querySelector("#missedTaskList");
const collapseMissedButton = document.querySelector("#collapseMissedButton");
const weeklyReport = document.querySelector("#weeklyReport");
const statsGrid = document.querySelector("#statsGrid");
const statsRange = document.querySelector("#statsRange");
const weeklyGoalInputs = document.querySelectorAll(".weekly-goal-select");
const featureToggleInputs = document.querySelectorAll("[data-feature-toggle]");
const todayCount = document.querySelector("#todayCount");
const todaySummary = document.querySelector("#todaySummary");
const todayLabel = document.querySelector("#todayLabel");
const todayXpValue = document.querySelector("#todayXpValue");
const topStreakPill = document.querySelector("#topStreakPill");
const topStreakValue = document.querySelector("#topStreakValue");
const scheduleFilter = document.querySelector("#scheduleFilter");
const scheduleGridRange = document.querySelector("#scheduleGridRange");
const scheduleControls = document.querySelector(".schedule-controls");
const scheduleDatePicker = document.querySelector("#scheduleDatePicker");
const schedulePrevDateButton = document.querySelector("#schedulePrevDate");
const scheduleNextDateButton = document.querySelector("#scheduleNextDate");
const scheduleTodayButton = document.querySelector("#scheduleTodayButton");
const scheduleViewButtons = document.querySelectorAll(".view-button");
const gridZoomInButton = document.querySelector("#gridZoomIn");
const gridZoomOutButton = document.querySelector("#gridZoomOut");
const gridZoomLevel = document.querySelector("#gridZoomLevel");
const taskTitleInput = document.querySelector("#taskTitle");
const taskDateInput = document.querySelector("#taskDate");
const taskTimeInput = document.querySelector("#taskTime");
const taskDurationInput = document.querySelector("#taskDuration");
const taskTypeInput = document.querySelector("#taskType");
const customTaskTypeInput = document.querySelector("#customTaskType");
const taskPriorityInput = document.querySelector("#taskPriority");
const priorityField = document.querySelector("#priorityField");
const taskNotesInput = document.querySelector("#taskNotes");
const taskTemplateSelect = document.querySelector("#taskTemplate");
const saveTemplateButton = document.querySelector("#saveTemplateButton");
const taskRepeatsInput = document.querySelector("#taskRepeats");
const weekdayPicker = document.querySelector("#weekdayPicker");
const profileButton = document.querySelector("#profileButton");
const profileAvatar = document.querySelector("#profileAvatar");
const profileAvatarLarge = document.querySelector("#profileAvatarLarge");
const profileNameLabel = document.querySelector("#profileNameLabel");
const activeProfileName = document.querySelector("#activeProfileName");
const profileMenu = document.querySelector("#profileMenu");
const closeProfileButton = document.querySelector("#closeProfileButton");
const editProfileButton = document.querySelector("#editProfileButton");
const profileEditForm = document.querySelector("#profileEditForm");
const editProfileNameInput = document.querySelector("#editProfileName");
const cancelProfileEditButton = document.querySelector("#cancelProfileEditButton");
const profileForm = document.querySelector("#profileForm");
const newProfileNameInput = document.querySelector("#newProfileName");
const profileList = document.querySelector("#profileList");
const profilePhotoInput = document.querySelector("#profilePhotoInput");
const removeProfilePhotoButton = document.querySelector("#removeProfilePhotoButton");
const authForm = document.querySelector("#authForm");
const authEmailInput = document.querySelector("#authEmail");
const authPasswordInput = document.querySelector("#authPassword");
const signupButton = document.querySelector("#signupButton");
const authSession = document.querySelector("#authSession");
const authUserLabel = document.querySelector("#authUserLabel");
const cloudStatus = document.querySelector("#cloudStatus");
const loadCloudButton = document.querySelector("#loadCloudButton");
const syncNowButton = document.querySelector("#syncNowButton");
const logoutButton = document.querySelector("#logoutButton");
const menuButton = document.querySelector("#menuButton");
const closeMenuButton = document.querySelector("#closeMenuButton");
const sideMenu = document.querySelector("#sideMenu");
const drawerOverlay = document.querySelector("#drawerOverlay");
const colourThemeButtons = document.querySelectorAll(".colour-button");
const focusOverlay = document.querySelector("#focusOverlay");
const streakCelebrationOverlay = document.querySelector("#streakCelebrationOverlay");
const weeklyReportOverlay = document.querySelector("#weeklyReportOverlay");
const appToast = document.querySelector("#appToast");
const editTaskOverlay = document.querySelector("#editTaskOverlay");
const editTaskForm = document.querySelector("#editTaskForm");
const editTaskIdInput = document.querySelector("#editTaskId");
const editOccurrenceDateInput = document.querySelector("#editOccurrenceDate");
const editTaskNameInput = document.querySelector("#editTaskName");
const editTaskDateInput = document.querySelector("#editTaskDate");
const editTaskTimeInput = document.querySelector("#editTaskTime");
const editTaskDurationInput = document.querySelector("#editTaskDuration");
const editTaskTypeInput = document.querySelector("#editTaskType");
const editTaskPriorityInput = document.querySelector("#editTaskPriority");
const editTaskNotesInput = document.querySelector("#editTaskNotes");
const editTaskRepeatsInput = document.querySelector("#editTaskRepeats");
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) ?? null;
const cancelEditTaskButton = document.querySelector("#cancelEditTask");

let cloudUser = null;
let cloudSaveTimeout = null;
let lastCloudSaveSnapshot = "";
let isApplyingCloudData = false;
let isLoadingCloudData = false;
let profiles = loadProfiles();
let activeProfileId = getSavedActiveProfileId(profiles);
migrateLegacyProfileData();
let tasks = loadTasks();
let customTaskTypes = mergeCustomTaskTypes(loadCustomTaskTypes(), tasks.map((task) => task.type));
let weeklyGoals = loadWeeklyGoals();
let featureSettings;
let taskTemplates = loadTaskTemplates();
let currentTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? "light";
let currentAccentTheme = localStorage.getItem(ACCENT_STORAGE_KEY) ?? "green";
let scheduleView = "list";
let scheduleAnchorDate = "";
let scheduleGridZoom = 1;
let pinchStartDistance = 0;
let pinchStartZoom = 1;
let currentOverlapSignature = "";
let dismissedOverlapSignature = localStorage.getItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY)) ?? "";
let activeTimer = loadActiveTimer();
let timerInterval = null;
let currentTypeStreaks = new Map();
let missedTasksCollapsed = localStorage.getItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY)) === "true";
let holdToEditTimer = null;
let holdToEditTarget = null;
let gridMoveHoldTimer = null;
let gridMoveState = null;
let lastTaskTap = null;
let pendingGridEditTimer = null;
let suppressTaskTapUntil = 0;
let taskSwipeState = null;
let taskReminderInterval = null;
let reminderOccurrences = [];
let sentTaskReminderKeys = new Set();
let appToastTimer = null;
let streakCelebrationTimer = null;

const TASK_TYPE_STYLES = {
  Focus: { color: "#2d6f9f", bg: "rgba(45, 111, 159, 0.14)" },
  Personal: { color: "#8a5fbf", bg: "rgba(138, 95, 191, 0.16)" },
  Study: { color: "#2e7d5b", bg: "rgba(46, 125, 91, 0.15)" },
  Health: { color: "#c95f4f", bg: "rgba(201, 95, 79, 0.14)" },
  Errand: { color: "#b2832f", bg: "rgba(178, 131, 47, 0.16)" },
};

const DEFAULT_FEATURE_SETTINGS = {
  streaks: true,
  priorities: true,
  missedTasks: true,
  focusMode: false,
  taskReminders: false,
};

featureSettings = loadFeatureSettings();

const DEFAULT_TASK_TEMPLATES = [
  {
    id: "default-study",
    title: "Study",
    duration: 60,
    type: "Study",
    notes: "",
    priority: "High",
    repeats: false,
    repeatDays: [],
  },
  {
    id: "default-reading",
    title: "Reading",
    duration: 30,
    type: "Personal",
    notes: "",
    priority: "Medium",
    repeats: false,
    repeatDays: [],
  },
  {
    id: "default-workout",
    title: "Workout",
    duration: 45,
    type: "Health",
    notes: "",
    priority: "High",
    repeats: false,
    repeatDays: [],
  },
  {
    id: "default-clean-room",
    title: "Clean room",
    duration: 30,
    type: "Personal",
    notes: "",
    priority: "Low",
    repeats: false,
    repeatDays: [],
  },
];

const ACCENT_THEMES = {
  green: {
    light: { accent: "#2e7d5b", strong: "#235f47", soft: "rgba(46, 125, 91, 0.14)", faint: "rgba(46, 125, 91, 0.08)", border: "rgba(46, 125, 91, 0.35)" },
    dark: { accent: "#71c89c", strong: "#9bddb8", soft: "rgba(113, 200, 156, 0.16)", faint: "rgba(113, 200, 156, 0.08)", border: "rgba(113, 200, 156, 0.38)" },
  },
  blue: {
    light: { accent: "#2d6f9f", strong: "#215273", soft: "rgba(45, 111, 159, 0.14)", faint: "rgba(45, 111, 159, 0.08)", border: "rgba(45, 111, 159, 0.35)" },
    dark: { accent: "#87c7e8", strong: "#b4def2", soft: "rgba(135, 199, 232, 0.16)", faint: "rgba(135, 199, 232, 0.08)", border: "rgba(135, 199, 232, 0.38)" },
  },
  teal: {
    light: { accent: "#12806f", strong: "#0e6154", soft: "rgba(18, 128, 111, 0.14)", faint: "rgba(18, 128, 111, 0.08)", border: "rgba(18, 128, 111, 0.35)" },
    dark: { accent: "#65d2c3", strong: "#9ee7dd", soft: "rgba(101, 210, 195, 0.16)", faint: "rgba(101, 210, 195, 0.08)", border: "rgba(101, 210, 195, 0.38)" },
  },
  purple: {
    light: { accent: "#7a5bb8", strong: "#5b438a", soft: "rgba(122, 91, 184, 0.15)", faint: "rgba(122, 91, 184, 0.08)", border: "rgba(122, 91, 184, 0.36)" },
    dark: { accent: "#b99aea", strong: "#d2bdf2", soft: "rgba(185, 154, 234, 0.17)", faint: "rgba(185, 154, 234, 0.08)", border: "rgba(185, 154, 234, 0.4)" },
  },
  pink: {
    light: { accent: "#c05a8d", strong: "#914269", soft: "rgba(192, 90, 141, 0.14)", faint: "rgba(192, 90, 141, 0.08)", border: "rgba(192, 90, 141, 0.35)" },
    dark: { accent: "#ee9ac7", strong: "#f5bfdc", soft: "rgba(238, 154, 199, 0.16)", faint: "rgba(238, 154, 199, 0.08)", border: "rgba(238, 154, 199, 0.4)" },
  },
  red: {
    light: { accent: "#c95f4f", strong: "#974639", soft: "rgba(201, 95, 79, 0.14)", faint: "rgba(201, 95, 79, 0.08)", border: "rgba(201, 95, 79, 0.35)" },
    dark: { accent: "#f08a79", strong: "#f6b4aa", soft: "rgba(240, 138, 121, 0.16)", faint: "rgba(240, 138, 121, 0.08)", border: "rgba(240, 138, 121, 0.4)" },
  },
  orange: {
    light: { accent: "#c77724", strong: "#945918", soft: "rgba(199, 119, 36, 0.15)", faint: "rgba(199, 119, 36, 0.08)", border: "rgba(199, 119, 36, 0.36)" },
    dark: { accent: "#f3ac5a", strong: "#f8cc91", soft: "rgba(243, 172, 90, 0.17)", faint: "rgba(243, 172, 90, 0.08)", border: "rgba(243, 172, 90, 0.4)" },
  },
  gold: {
    light: { accent: "#b2832f", strong: "#7c5d20", soft: "rgba(178, 131, 47, 0.16)", faint: "rgba(178, 131, 47, 0.08)", border: "rgba(178, 131, 47, 0.36)" },
    dark: { accent: "#e4ba67", strong: "#f2d99c", soft: "rgba(228, 186, 103, 0.17)", faint: "rgba(228, 186, 103, 0.08)", border: "rgba(228, 186, 103, 0.4)" },
  },
  sleek: {
    light: { accent: "#6f777c", strong: "#3f474c", soft: "rgba(111, 119, 124, 0.14)", faint: "rgba(111, 119, 124, 0.08)", border: "rgba(111, 119, 124, 0.35)" },
    dark: { accent: "#aeb6ba", strong: "#d6dde0", soft: "rgba(174, 182, 186, 0.16)", faint: "rgba(174, 182, 186, 0.08)", border: "rgba(174, 182, 186, 0.38)" },
  },
};

const today = new Date();
const todayISO = toDateInputValue(today);
scheduleAnchorDate = todayISO;
taskDateInput.value = todayISO;
scheduleDatePicker.value = scheduleAnchorDate;
todayLabel.textContent = today.toLocaleDateString(undefined, {
  weekday: "long",
  month: "short",
  day: "numeric",
});
saveCustomTaskTypes();
renderProfileControls();
renderTaskTypeOptions();
renderTaskTemplateOptions();
applyWeeklyGoalsToControls();
applyFeatureSettingsToControls();
applyTheme(currentTheme);

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.tab);
    closeMenu();
  });
});

document.querySelectorAll(".theme-button").forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.theme));
});

colourThemeButtons.forEach((button) => {
  button.addEventListener("click", () => applyAccentTheme(button.dataset.colourTheme));
});

featureToggleInputs.forEach((input) => {
  input.addEventListener("change", async () => {
    featureSettings = {
      ...featureSettings,
      [input.dataset.featureToggle]: input.checked,
    };
    saveFeatureSettings();
    if (input.dataset.featureToggle === "taskReminders" && input.checked) {
      await requestTaskReminderPermission();
    }
    applyFeatureVisibility();
    render();
  });
});

weeklyGoalInputs.forEach((input) => {
  input.addEventListener("change", () => {
    weeklyGoals = {
      ...weeklyGoals,
      [input.dataset.goal]: normalizeGoalValue(input.value),
    };
    saveWeeklyGoals();
    render();
  });
});

scheduleViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scheduleView = button.dataset.view;
    render();
  });
});

scheduleFilter.addEventListener("change", render);
scheduleGridRange.addEventListener("change", render);
scheduleDatePicker.addEventListener("change", () => setScheduleAnchorDate(scheduleDatePicker.value));
schedulePrevDateButton.addEventListener("click", () => shiftScheduleAnchorDate(-getScheduleNavigationStep()));
scheduleNextDateButton.addEventListener("click", () => shiftScheduleAnchorDate(getScheduleNavigationStep()));
scheduleTodayButton.addEventListener("click", () => setScheduleAnchorDate(todayISO));
statsRange.addEventListener("change", render);
scheduleGrid.addEventListener("wheel", handleScheduleGridZoom, { passive: false });
scheduleGrid.addEventListener("touchstart", handleGridTouchStart, { passive: false });
scheduleGrid.addEventListener("touchmove", handleGridTouchMove, { passive: false });
scheduleGrid.addEventListener("touchend", resetGridPinch);
gridZoomInButton.addEventListener("click", () => setScheduleGridZoom(scheduleGridZoom + 0.15));
gridZoomOutButton.addEventListener("click", () => setScheduleGridZoom(scheduleGridZoom - 0.15));
taskTypeInput.addEventListener("change", toggleCustomTypeInput);
taskTemplateSelect.addEventListener("change", applySelectedTaskTemplate);
saveTemplateButton.addEventListener("click", saveCurrentTaskTemplate);
profileButton.addEventListener("click", openProfileMenu);
closeProfileButton.addEventListener("click", closeProfileMenu);
editProfileButton.addEventListener("click", openProfileEditor);
profileEditForm.addEventListener("submit", saveEditedProfile);
cancelProfileEditButton.addEventListener("click", closeProfileEditor);
profileForm.addEventListener("submit", createProfile);
profileList.addEventListener("click", handleProfileListClick);
profilePhotoInput.addEventListener("change", updateProfilePhoto);
removeProfilePhotoButton.addEventListener("click", removeProfilePhoto);
authForm.addEventListener("submit", signInWithEmail);
signupButton.addEventListener("click", signUpWithEmail);
loadCloudButton.addEventListener("click", loadCloudData);
syncNowButton.addEventListener("click", saveCloudDataNow);
logoutButton.addEventListener("click", signOut);
menuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
drawerOverlay.addEventListener("click", closeAllMenus);

taskRepeatsInput.addEventListener("change", () => {
  if (taskRepeatsInput.checked && getSelectedRepeatDays().length === 0) {
    setRepeatDayForDate(taskDateInput.value);
  }
});

taskDateInput.addEventListener("change", () => {
  if (taskRepeatsInput.checked && getSelectedRepeatDays().length === 0) {
    setRepeatDayForDate(taskDateInput.value);
  }
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(taskForm);
  const repeats = formData.get("repeats") === "on";
  const selectedRepeatDays = getSelectedRepeatDays();
  const startDate = formData.get("date");
  const taskType = getSubmittedTaskType(formData);
  const task = {
    id: crypto.randomUUID(),
    title: formData.get("title").trim(),
    date: startDate,
    time: formData.get("time"),
    duration: Number(formData.get("duration")),
    type: taskType,
    priority: normalizePriority(formData.get("priority")),
    notes: formData.get("notes").trim(),
    repeats,
    repeatDays: repeats ? selectedRepeatDays : [],
    completedDates: [],
    done: false,
    createdAt: new Date().toISOString(),
  };

  if (!task.title || !task.date || !task.time || !task.type) {
    if (!task.type) customTaskTypeInput.focus();
    return;
  }

  if (task.repeats && task.repeatDays.length === 0) {
    task.repeatDays = [weekdayForISODate(task.date)];
  }

  saveCustomTaskType(task.type);
  tasks.push(task);
  saveTasks();
  resetForm();
  switchTab("schedule");
  render();
});

taskList.addEventListener("click", handleTaskAction);
scheduleGrid.addEventListener("click", handleTaskAction);

function handleTaskAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest("[data-task-id][data-occurrence-date]");
  if (!card) return;

  const taskId = card.dataset.taskId;
  const occurrenceDate = card.dataset.occurrenceDate;

  if (button.dataset.action === "toggle") {
    const sourceTask = tasks.find((task) => task.id === taskId);
    const occurrence = sourceTask ? createOccurrence(sourceTask, occurrenceDate) : null;
    if (!occurrence?.done) return;

    tasks = tasks.map((task) => toggleTaskCompletion(task, taskId, occurrenceDate));
    clearActiveTimerFor(taskId, occurrenceDate);
  }

  if (button.dataset.action === "start") {
    if (activeTimer && !isActiveTimerFor({ id: taskId, occurrenceDate })) return;

    const sourceTask = tasks.find((task) => task.id === taskId);
    activeTimer = {
      taskId,
      occurrenceDate,
      duration: Number(sourceTask?.duration ?? 0),
      startedAt: Date.now(),
    };
    saveActiveTimer();
  }

  if (button.dataset.action === "finish") {
    if (!finishActiveTask(taskId, occurrenceDate)) return;
  }

  if (button.dataset.action === "delete") {
    deleteTask(taskId, occurrenceDate);
  }

  saveTasks();
  render();
}

taskList.addEventListener("pointerdown", startTaskSwipe);
taskList.addEventListener("pointermove", updateTaskSwipe);
taskList.addEventListener("pointerup", finishTaskSwipe);
taskList.addEventListener("lostpointercapture", cancelTaskSwipe);
taskList.addEventListener("pointerdown", startHoldToEdit);
taskList.addEventListener("pointerup", clearHoldToEdit);
taskList.addEventListener("pointerup", handleTaskDoubleTap);
taskList.addEventListener("pointerleave", () => {
  clearHoldToEdit();
  cancelInactiveTaskSwipe();
});
taskList.addEventListener("pointercancel", () => {
  clearHoldToEdit();
  cancelTaskSwipe();
});

scheduleGrid.addEventListener("pointerdown", startGridTaskMove);
scheduleGrid.addEventListener("pointermove", updateGridTaskMove);
scheduleGrid.addEventListener("pointerup", finishGridTaskMove);
scheduleGrid.addEventListener("pointerup", handleTaskDoubleTap);
scheduleGrid.addEventListener("pointercancel", cancelGridTaskMove);
scheduleGrid.addEventListener("pointerleave", cancelInactiveGridTaskMove);

[taskList, scheduleGrid].forEach((container) => {
  container.addEventListener("contextmenu", (event) => {
    if (event.target.closest("[data-task-id][data-occurrence-date]")) {
      event.preventDefault();
    }
  });
});

missedTaskList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-missed-action]");
  if (!button) return;

  const card = button.closest("[data-task-id]");
  const taskId = card.dataset.taskId;
  const occurrenceDate = card.dataset.occurrenceDate;
  const action = button.dataset.missedAction;

  if (action === "today") {
    moveMissedTask(taskId, occurrenceDate, todayISO);
  }

  if (action === "tomorrow") {
    moveMissedTask(taskId, occurrenceDate, toDateInputValue(addDays(today, 1)));
  }

  if (action === "skip") {
    tasks = tasks.map((task) => skipTaskOccurrence(task, taskId, occurrenceDate));
  }

  if (action === "delete") {
    tasks = deleteMissedTask(tasks, taskId, occurrenceDate);
    clearActiveTimerFor(taskId, occurrenceDate);
  }

  saveTasks();
  render();
});

editTaskForm.addEventListener("submit", saveEditedTask);
cancelEditTaskButton.addEventListener("click", closeEditTask);
editTaskOverlay.addEventListener("click", (event) => {
  if (event.target === editTaskOverlay) closeEditTask();
});

collapseMissedButton.addEventListener("click", () => {
  missedTasksCollapsed = !missedTasksCollapsed;
  localStorage.setItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY), String(missedTasksCollapsed));
  queueCloudSave();
  renderMissedTasks();
});

focusOverlay.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-focus-action]");
  if (!button) return;

  if (button.dataset.focusAction === "finish" && activeTimer) {
    finishActiveTask(activeTimer.taskId, activeTimer.occurrenceDate);
    saveTasks();
  }

  if (button.dataset.focusAction === "off") {
    featureSettings = {
      ...featureSettings,
      focusMode: false,
    };
    saveFeatureSettings();
    applyFeatureSettingsToControls();
  }

  render();
});

streakCelebrationOverlay?.addEventListener("click", (event) => {
  if (event.target.closest("[data-streak-action='close']") || event.target === streakCelebrationOverlay) {
    hideStreakCelebration();
  }
});

weeklyReportOverlay?.addEventListener("click", (event) => {
  if (event.target.closest("[data-weekly-report-action='close']") || event.target === weeklyReportOverlay) {
    dismissWeeklyReportOverlay();
  }
});

appToast?.addEventListener("click", (event) => {
  if (event.target.closest("[data-toast-action='close']")) {
    hideAppToast();
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    checkTaskReminders();
  }
});

overlapAlert.addEventListener("click", (event) => {
  const button = event.target.closest("[data-overlap-action]");
  if (!button) return;

  if (button.dataset.overlapAction === "dismiss") {
    dismissedOverlapSignature = currentOverlapSignature;
    localStorage.setItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY), dismissedOverlapSignature);
    queueCloudSave();
  }

  if (button.dataset.overlapAction === "expand") {
    dismissedOverlapSignature = "";
    localStorage.removeItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY));
    queueCloudSave();
  }

  render();
});

initializeCloudAuth();
render();
setInterval(refreshTopStreakStatus, 60 * 1000);

function switchTab(tabName) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  document.querySelector("#homePanel").classList.toggle("active", tabName === "home");
  document.querySelector("#schedulePanel").classList.toggle("active", tabName === "schedule");
  document.querySelector("#completedPanel").classList.toggle("active", tabName === "completed");
  document.querySelector("#statsPanel").classList.toggle("active", tabName === "stats");
}

function render() {
  syncActiveTimerWithTasks();
  const occurrences = buildScheduleOccurrences();
  const visibleOccurrences = occurrences.filter(matchesCurrentFilter);
  const gridOccurrences = getGridOccurrences(occurrences);
  const completedToday = occurrences.filter(
    (task) => task.occurrenceDate === todayISO && task.done,
  );
  const pointsToday = completedToday.reduce((total, task) => total + calculatePoints(task), 0);
  const completedHistory = buildCompletedHistory();
  currentTypeStreaks = buildTypeStreakMap(completedHistory);

  taskCount.textContent = tasks.length;
  completedCount.textContent = completedToday.length;
  completedPoints.textContent = formatPoints(pointsToday);
  todayXpValue.textContent = formatPoints(pointsToday);
  renderTopStreakStatus(completedHistory, getTopStreakDays(completedHistory));
  renderTodaySummary(occurrences);
  renderMissedTasks();
  renderFocusOverlay(occurrences);
  applyFeatureVisibility();
  reminderOccurrences = occurrences;
  ensureTaskReminderInterval();
  checkTaskReminders(occurrences);

  scheduleViewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === scheduleView);
  });
  scheduleDatePicker.value = scheduleAnchorDate;
  scheduleControls.classList.toggle("grid-mode", scheduleView === "grid");
  updateScheduleGridZoomControls();
  ensureTimerInterval();

  taskList.innerHTML = visibleOccurrences.map(createTaskCard).join("");
  scheduleGrid.innerHTML = createScheduleGrid(gridOccurrences);
  updateTimerDisplay();
  taskList.classList.toggle("hidden", scheduleView !== "list");
  scheduleGrid.classList.toggle("active", scheduleView === "grid");
  emptyState.classList.toggle("visible", scheduleView === "list" && visibleOccurrences.length === 0);
  renderOverlapAlert(scheduleView === "grid" ? gridOccurrences : visibleOccurrences);
  completedTaskList.innerHTML = completedToday.map(createCompletedTaskCard).join("");
  completedEmptyState.classList.toggle("visible", completedToday.length === 0);
  weeklyReport.innerHTML = createWeeklyReport(completedHistory);
  statsGrid.innerHTML = createStatsPanel(completedHistory);
  renderWeeklyReportOverlay(completedHistory);
}

function buildScheduleOccurrences() {
  const scheduleWindow = getScheduleOccurrenceWindow();
  const scheduleStart = scheduleWindow.start;
  const scheduleEnd = scheduleWindow.end;

  return tasks
    .flatMap((task) => {
      if (!task.repeats) {
        return [createOccurrence(task, task.date)];
      }

      const occurrences = [];
      const taskStart = parseISODate(task.date);
      const firstDay = taskStart > scheduleStart ? taskStart : scheduleStart;

      for (let day = new Date(firstDay); day <= scheduleEnd; day = addDays(day, 1)) {
        const isoDate = toDateInputValue(day);
        if (task.repeatDays.includes(day.getDay())) {
          occurrences.push(createOccurrence(task, isoDate));
        }
      }

      return occurrences;
    })
    .sort((a, b) => `${a.occurrenceDate}T${a.time}`.localeCompare(`${b.occurrenceDate}T${b.time}`));
}

function getScheduleOccurrenceWindow() {
  const todayStart = startOfToday(today);
  const anchor = parseISODate(scheduleAnchorDate);
  const range = scheduleView === "grid" ? getGridDateRange() : { start: anchor, end: anchor };
  const earliest = minDate(todayStart, range.start, addDays(anchor, -7));
  const latest = maxDate(addDays(todayStart, SCHEDULE_DAYS_TO_SHOW), range.end, addDays(anchor, SCHEDULE_DAYS_TO_SHOW));

  return { start: earliest, end: latest };
}

function buildMissedOccurrences() {
  const missedStart = addDays(startOfToday(today), -30);
  const missedEnd = addDays(startOfToday(today), -1);
  const missed = [];

  tasks.forEach((task) => {
    if (!task.repeats) {
      const taskDate = parseISODate(task.date);
      const occurrence = createOccurrence(task, task.date);
      if (taskDate <= missedEnd && !occurrence.done && !occurrence.skipped) {
        missed.push(occurrence);
      }
      return;
    }

    const taskStart = parseISODate(task.date);
    const firstDay = taskStart > missedStart ? taskStart : missedStart;

    for (let day = new Date(firstDay); day <= missedEnd; day = addDays(day, 1)) {
      if (!task.repeatDays.includes(day.getDay())) continue;

      const isoDate = toDateInputValue(day);
      const occurrence = createOccurrence(task, isoDate);
      if (!occurrence.done && !occurrence.skipped) {
        missed.push(occurrence);
      }
    }
  });

  return missed.sort((a, b) => `${b.occurrenceDate}T${b.time}`.localeCompare(`${a.occurrenceDate}T${a.time}`));
}

function buildCompletedHistory() {
  return tasks
    .flatMap((task) => {
      if (!task.repeats) {
        return task.done ? [createOccurrence(task, task.date)] : [];
      }

      const completedDates = Array.isArray(task.completedDates) ? task.completedDates : [];
      return completedDates.map((date) => createOccurrence(task, date));
    })
    .sort((a, b) => `${b.occurrenceDate}T${b.time}`.localeCompare(`${a.occurrenceDate}T${a.time}`));
}

function createOccurrence(task, date) {
  const completedDates = Array.isArray(task.completedDates) ? task.completedDates : [];
  const skippedDates = Array.isArray(task.skippedDates) ? task.skippedDates : [];
  const earnedPointsByDate = task.earnedPointsByDate ?? {};
  const actualMinutesByDate = task.actualMinutesByDate ?? {};
  const done = task.repeats ? completedDates.includes(date) : Boolean(task.done);
  const earnedPoints = task.repeats ? earnedPointsByDate[date] : task.earnedPoints;
  const actualMinutes = task.repeats ? actualMinutesByDate[date] : task.actualMinutes;

  return {
    ...task,
    priority: normalizePriority(task.priority),
    occurrenceDate: date,
    done,
    skipped: task.repeats ? skippedDates.includes(date) : Boolean(task.skipped),
    earnedPoints: done && Number.isFinite(Number(earnedPoints)) ? Number(earnedPoints) : null,
    actualMinutes: done && Number.isFinite(Number(actualMinutes)) ? Number(actualMinutes) : null,
  };
}

function renderTodaySummary(occurrences) {
  const todaysTasks = occurrences.filter((task) => task.occurrenceDate === todayISO);
  todayCount.textContent = todaysTasks.length;

  if (todaysTasks.length === 0) {
    todaySummary.textContent = "No tasks scheduled for today yet.";
    return;
  }

  const remaining = todaysTasks.filter((task) => !task.done).length;
  todaySummary.textContent =
    remaining === 0
      ? "Everything planned for today is complete."
      : `${remaining} task${remaining === 1 ? "" : "s"} still planned for today.`;
}

function refreshTopStreakStatus() {
  const completedHistory = buildCompletedHistory();
  renderTopStreakStatus(completedHistory, getTopStreakDays(completedHistory));
}

function getTopStreakDays(completedHistory) {
  if (!featureSettings.streaks) return 0;
  return calculateCurrentStreak(getQualifiedStreakDates(completedHistory));
}

function renderTopStreakStatus(completedHistory, streakDays) {
  if (!topStreakPill || !topStreakValue) return;

  topStreakPill.classList.toggle("hidden", !featureSettings.streaks);
  if (!featureSettings.streaks) {
    topStreakValue.textContent = "0";
    topStreakPill.title = "Task streaks are turned off.";
    topStreakPill.setAttribute("aria-label", "Task streaks are turned off");
    return;
  }

  const todayMinutes = getCompletedMinutesForDate(completedHistory, todayISO);
  const minutesNeeded = Math.max(STREAK_MINUTES_TO_KEEP - todayMinutes, 0);
  const streakState = getStreakState(minutesNeeded);
  const minuteLabel = minutesNeeded === 1 ? "minute" : "minutes";

  topStreakValue.textContent = String(streakDays);
  topStreakPill.classList.remove("streak-safe", "streak-watch", "streak-low", "streak-critical");
  topStreakPill.classList.add(streakState);

  if (minutesNeeded === 0) {
    topStreakPill.title = `Streak secured today with ${formatMinutesAsHours(todayMinutes)} completed.`;
    topStreakPill.setAttribute("aria-label", `${streakDays} day streak secured today`);
    return;
  }

  topStreakPill.title = `${minutesNeeded} ${minuteLabel} left today to keep your streak.`;
  topStreakPill.setAttribute(
    "aria-label",
    `${streakDays} day streak. ${minutesNeeded} ${minuteLabel} left today to keep it.`,
  );
}

function getStreakState(minutesNeeded) {
  if (minutesNeeded <= 0) return "streak-safe";

  const dayProgress = getDayProgress();
  if (dayProgress >= 0.92) return "streak-critical";
  if (dayProgress >= 0.8) return "streak-low";
  if (dayProgress >= 0.66) return "streak-watch";
  return "streak-safe";
}

function getDayProgress(now = new Date()) {
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  return clamp((now - start) / (end - start), 0, 1);
}

function getQualifiedStreakDates(completedHistory) {
  const minutesByDate = new Map();

  completedHistory.forEach((task) => {
    const minutes = minutesByDate.get(task.occurrenceDate) ?? 0;
    minutesByDate.set(task.occurrenceDate, minutes + calculateCompletedMinutes(task));
  });

  return new Set(
    [...minutesByDate.entries()]
      .filter(([, minutes]) => minutes >= STREAK_MINUTES_TO_KEEP)
      .map(([date]) => date),
  );
}

function getCompletedMinutesForDate(completedHistory, date) {
  return completedHistory
    .filter((task) => task.occurrenceDate === date)
    .reduce((total, task) => total + calculateCompletedMinutes(task), 0);
}

function deleteTask(taskId, occurrenceDate) {
  tasks = tasks.filter((task) => task.id !== taskId);
  clearActiveTimerFor(taskId, occurrenceDate);
}

function finishActiveTask(taskId, occurrenceDate) {
  if (!isActiveTimerFor({ id: taskId, occurrenceDate })) return false;

  const previousStreakDays = getTopStreakDays(buildCompletedHistory());
  const earnedPoints = calculateTimerEarnedPoints(activeTimer);
  const actualMinutes = calculateTimerElapsedMinutes(activeTimer);

  tasks = tasks.map((task) => markTaskComplete(task, taskId, occurrenceDate, earnedPoints, actualMinutes));
  clearActiveTimer();
  maybeShowStreakCelebration(previousStreakDays);
  return true;
}

function maybeShowStreakCelebration(previousStreakDays) {
  if (!featureSettings.streaks) return;

  const completedHistory = buildCompletedHistory();
  const nextStreakDays = getTopStreakDays(completedHistory);
  const todayMinutes = getCompletedMinutesForDate(completedHistory, todayISO);
  const alreadyCelebrated = localStorage.getItem(getProfileStorageKey(STREAK_CELEBRATION_STORAGE_KEY)) === todayISO;

  if (alreadyCelebrated || todayMinutes < STREAK_MINUTES_TO_KEEP || nextStreakDays <= previousStreakDays) return;

  localStorage.setItem(getProfileStorageKey(STREAK_CELEBRATION_STORAGE_KEY), todayISO);
  queueCloudSave();
  showStreakCelebration(nextStreakDays, todayMinutes);
}

function showStreakCelebration(streakDays, completedMinutes) {
  if (!streakCelebrationOverlay) return;

  clearTimeout(streakCelebrationTimer);
  streakCelebrationOverlay.classList.add("visible");
  streakCelebrationOverlay.innerHTML = `
    <section class="streak-celebration-card" role="dialog" aria-modal="false" aria-label="Streak increased">
      <div class="streak-burst" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="streak-hero" aria-hidden="true">
        <svg class="streak-ring" viewBox="0 0 140 140">
          <circle class="streak-ring-track" cx="70" cy="70" r="58"></circle>
          <circle class="streak-ring-progress" cx="70" cy="70" r="58"></circle>
        </svg>
        <div class="streak-flame">
          <span class="streak-flame-glow"></span>
          <span class="streak-flame-icon">&#128293;</span>
        </div>
      </div>
      <p class="report-kicker">Streak powered up</p>
      <h2><span>${streakDays}</span> day streak</h2>
      <p>You locked in today with ${formatMinutesAsHours(completedMinutes)} completed.</p>
      <div class="streak-mini-progress" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <button class="primary-button" data-streak-action="close" type="button">Keep going</button>
    </section>
  `;

  streakCelebrationTimer = setTimeout(hideStreakCelebration, 5600);
}

function hideStreakCelebration() {
  if (!streakCelebrationOverlay) return;

  clearTimeout(streakCelebrationTimer);
  streakCelebrationTimer = null;
  streakCelebrationOverlay.classList.remove("visible");
  streakCelebrationOverlay.innerHTML = "";
}

function startTaskSwipe(event) {
  if (scheduleView !== "list") return;
  if (event.button !== undefined && event.button !== 0) return;
  if (event.isPrimary === false) return;
  if (event.target.closest("button, input, select, textarea, a")) return;

  const taskCard = event.target.closest(".task-card[data-task-id][data-occurrence-date]");
  if (!taskCard || !taskList.contains(taskCard)) return;

  cancelTaskSwipe();
  taskSwipeState = {
    pointerId: event.pointerId,
    taskId: taskCard.dataset.taskId,
    occurrenceDate: taskCard.dataset.occurrenceDate,
    sourceElement: taskCard,
    startX: event.clientX,
    startY: event.clientY,
    active: false,
  };
}

function updateTaskSwipe(event) {
  if (!taskSwipeState || taskSwipeState.pointerId !== event.pointerId) return;

  const deltaX = event.clientX - taskSwipeState.startX;
  const deltaY = event.clientY - taskSwipeState.startY;
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  if (!taskSwipeState.active) {
    if (absX < TASK_SWIPE_ACTIVATE_DISTANCE && absY < TASK_SWIPE_ACTIVATE_DISTANCE) return;

    if (deltaX >= 0 || absY > absX) {
      cancelTaskSwipe();
      return;
    }

    taskSwipeState.active = true;
    clearHoldToEdit();
    taskSwipeState.sourceElement.classList.add("swiping");

    try {
      taskSwipeState.sourceElement.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture is optional; the swipe still works without it.
    }
  }

  event.preventDefault();
  const offset = clamp(deltaX, -132, 0);
  taskSwipeState.sourceElement.style.transform = `translateX(${offset}px)`;
  taskSwipeState.sourceElement.classList.toggle(
    "swipe-delete-ready",
    Math.abs(offset) >= TASK_SWIPE_DELETE_DISTANCE,
  );
}

function finishTaskSwipe(event) {
  if (!taskSwipeState || taskSwipeState.pointerId !== event.pointerId) return;

  const state = taskSwipeState;
  const deltaX = event.clientX - state.startX;
  const shouldDelete = state.active && deltaX <= -TASK_SWIPE_DELETE_DISTANCE;

  if (state.active) {
    event.preventDefault();
    suppressTaskTapUntil = Date.now() + 420;
    lastTaskTap = null;
    clearHoldToEdit();
  }

  resetTaskSwipeCard(state.sourceElement);
  releaseTaskSwipePointer(state);
  taskSwipeState = null;

  if (!shouldDelete) return;

  deleteTask(state.taskId, state.occurrenceDate);
  saveTasks();
  render();
}

function cancelInactiveTaskSwipe() {
  if (taskSwipeState?.active) return;
  cancelTaskSwipe();
}

function cancelTaskSwipe(event) {
  if (!taskSwipeState) return;
  if (event?.pointerId !== undefined && taskSwipeState.pointerId !== event.pointerId) return;

  const state = taskSwipeState;
  if (state.active) {
    suppressTaskTapUntil = Date.now() + 260;
    lastTaskTap = null;
  }

  resetTaskSwipeCard(state.sourceElement);
  releaseTaskSwipePointer(state);
  taskSwipeState = null;
}

function resetTaskSwipeCard(taskCard) {
  taskCard?.classList.remove("swiping", "swipe-delete-ready");
  if (taskCard) {
    taskCard.style.transform = "";
  }
}

function releaseTaskSwipePointer(state) {
  try {
    if (state.sourceElement?.hasPointerCapture?.(state.pointerId)) {
      state.sourceElement.releasePointerCapture(state.pointerId);
    }
  } catch {
    // The browser may already have released it.
  }
}

function startHoldToEdit(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest("button, input, select, textarea, a")) return;

  const taskCard = event.target.closest("[data-task-id][data-occurrence-date]");
  if (!taskCard) return;

  holdToEditTarget = taskCard;
  holdToEditTimer = setTimeout(() => {
    openEditTask(taskCard.dataset.taskId, taskCard.dataset.occurrenceDate);
    holdToEditTarget = null;
  }, 650);
}

function clearHoldToEdit() {
  if (holdToEditTimer) {
    clearTimeout(holdToEditTimer);
  }

  holdToEditTimer = null;
  holdToEditTarget = null;
}

function handleTaskDoubleTap(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest("button, input, select, textarea, a")) return;
  if (Date.now() < suppressTaskTapUntil) return;

  const taskCard = event.target.closest("[data-task-id][data-occurrence-date]");
  if (!taskCard) return;

  const isGridTask = scheduleView === "grid" && scheduleGrid.contains(taskCard);
  const tap = {
    key: `${taskCard.dataset.taskId}:${taskCard.dataset.occurrenceDate}`,
    time: Date.now(),
    x: event.clientX,
    y: event.clientY,
  };
  const isRepeatedTap = lastTaskTap
    && lastTaskTap.key === tap.key
    && tap.time - lastTaskTap.time <= TASK_DOUBLE_TAP_MS
    && Math.hypot(tap.x - lastTaskTap.x, tap.y - lastTaskTap.y) <= TASK_DOUBLE_TAP_DISTANCE;

  if (!isRepeatedTap) {
    cancelPendingGridEdit();
    lastTaskTap = { ...tap, count: 1 };
    return;
  }

  event.preventDefault();

  const tapCount = (lastTaskTap.count ?? 1) + 1;
  lastTaskTap = { ...tap, count: tapCount };

  if (isGridTask && tapCount >= 3) {
    cancelPendingGridEdit();
    duplicateGridTask(taskCard.dataset.taskId, taskCard.dataset.occurrenceDate);
    lastTaskTap = null;
    return;
  }

  if (tapCount !== 2) return;

  if (isGridTask) {
    schedulePendingGridEdit(taskCard.dataset.taskId, taskCard.dataset.occurrenceDate, tap.key);
    return;
  }

  lastTaskTap = null;
  openEditTask(taskCard.dataset.taskId, taskCard.dataset.occurrenceDate);
}

function schedulePendingGridEdit(taskId, occurrenceDate, tapKey) {
  cancelPendingGridEdit();
  pendingGridEditTimer = setTimeout(() => {
    pendingGridEditTimer = null;
    if (lastTaskTap?.key !== tapKey || (lastTaskTap.count ?? 0) !== 2) return;

    lastTaskTap = null;
    openEditTask(taskId, occurrenceDate);
  }, TASK_DOUBLE_TAP_MS + 40);
}

function cancelPendingGridEdit() {
  if (!pendingGridEditTimer) return;

  clearTimeout(pendingGridEditTimer);
  pendingGridEditTimer = null;
}

function duplicateGridTask(taskId, occurrenceDate) {
  if (scheduleView !== "grid") return;

  const sourceTask = tasks.find((task) => task.id === taskId);
  if (!sourceTask) return;

  const sourceOccurrence = createOccurrence(sourceTask, occurrenceDate);
  tasks.push(createSingleTaskFromOccurrence(sourceOccurrence, sourceOccurrence.occurrenceDate, sourceOccurrence.time));
  saveTasks();
  render();
  showAppToast("Task duplicated", `${sourceOccurrence.title} was copied in the grid.`);
}

function startGridTaskMove(event) {
  if (scheduleView !== "grid") return;
  if (event.button !== undefined && event.button !== 0) return;
  if (event.isPrimary === false) return;
  if (event.target.closest("button, input, select, textarea, a")) return;

  const taskCard = event.target.closest(".timeline-task[data-task-id][data-occurrence-date]");
  if (!taskCard || !scheduleGrid.contains(taskCard)) return;

  cancelGridTaskMove();
  gridMoveState = {
    pointerId: event.pointerId,
    taskId: taskCard.dataset.taskId,
    occurrenceDate: taskCard.dataset.occurrenceDate,
    sourceElement: taskCard,
    startX: event.clientX,
    startY: event.clientY,
    lastX: event.clientX,
    lastY: event.clientY,
    active: false,
    drop: null,
    preview: null,
    trashTarget: null,
  };

  gridMoveHoldTimer = setTimeout(activateGridTaskMove, GRID_MOVE_HOLD_MS);
}

function activateGridTaskMove() {
  if (!gridMoveState) return;

  const sourceTask = tasks.find((task) => task.id === gridMoveState.taskId);
  if (!sourceTask) {
    cancelGridTaskMove();
    return;
  }

  cancelPendingGridEdit();
  const occurrence = createOccurrence(sourceTask, gridMoveState.occurrenceDate);
  gridMoveState.active = true;
  gridMoveState.duration = Number(occurrence.duration);
  refreshScheduleGridForMove();
  gridMoveState.sourceElement?.classList.add("grid-task-moving");
  scheduleGrid.classList.add("grid-moving");
  showGridTrashTarget();

  try {
    scheduleGrid.setPointerCapture(gridMoveState.pointerId);
  } catch {
    // Pointer capture is not available in every embedded browser.
  }

  updateGridMovePreview(gridMoveState.lastX, gridMoveState.lastY);
}

function updateGridTaskMove(event) {
  if (!gridMoveState || event.pointerId !== gridMoveState.pointerId) return;

  gridMoveState.lastX = event.clientX;
  gridMoveState.lastY = event.clientY;

  if (!gridMoveState.active) {
    const movedDistance = Math.hypot(event.clientX - gridMoveState.startX, event.clientY - gridMoveState.startY);
    if (movedDistance > GRID_MOVE_CANCEL_DISTANCE) {
      cancelGridTaskMove();
    }
    return;
  }

  event.preventDefault();
  autoScrollScheduleGridDuringMove(event.clientY);
  updateGridMovePreview(event.clientX, event.clientY);
}

function finishGridTaskMove(event) {
  if (!gridMoveState || event.pointerId !== gridMoveState.pointerId) return;

  if (!gridMoveState.active) {
    cancelGridTaskMove();
    return;
  }

  event.preventDefault();
  const shouldDelete = isPointInsideGridTrash(event.clientX, event.clientY);
  const deletedTask = shouldDelete ? getGridMoveTaskLabel() : "";
  const drop = shouldDelete ? null : getGridMoveDropTarget(event.clientX, event.clientY, gridMoveState.duration);
  const didDelete = shouldDelete;
  const didMove = !shouldDelete && drop
    ? moveGridTask(gridMoveState.taskId, gridMoveState.occurrenceDate, drop.date, drop.time)
    : false;

  if (shouldDelete) {
    deleteTask(gridMoveState.taskId, gridMoveState.occurrenceDate);
  }

  suppressTaskTapUntil = Date.now() + TASK_DOUBLE_TAP_MS;
  cancelGridTaskMove({ refreshGrid: !didMove && !didDelete });

  if (!didMove && !didDelete) return;

  saveTasks();
  render();
  if (didDelete) {
    showAppToast("Task deleted", `${deletedTask} was moved to the trash.`);
  }
}

function cancelInactiveGridTaskMove(event) {
  if (gridMoveState && !gridMoveState.active && event.pointerId === gridMoveState.pointerId) {
    cancelGridTaskMove();
  }
}

function cancelGridTaskMove({ refreshGrid = true } = {}) {
  const shouldRefreshGrid = refreshGrid && scheduleView === "grid" && Boolean(gridMoveState?.active);

  if (gridMoveHoldTimer) {
    clearTimeout(gridMoveHoldTimer);
  }

  if (gridMoveState?.sourceElement) {
    gridMoveState.sourceElement.classList.remove("grid-task-moving");
  }

  if (gridMoveState?.preview) {
    gridMoveState.preview.remove();
  }

  if (gridMoveState?.trashTarget) {
    gridMoveState.trashTarget.remove();
  }

  if (gridMoveState?.pointerId !== undefined) {
    try {
      scheduleGrid.releasePointerCapture(gridMoveState.pointerId);
    } catch {
      // Ignore release failures when capture was never taken.
    }
  }

  scheduleGrid.classList.remove("grid-moving");
  gridMoveHoldTimer = null;
  gridMoveState = null;

  if (shouldRefreshGrid) {
    render();
  }
}

function refreshScheduleGridForMove() {
  if (!gridMoveState?.active) return;

  const previousTop = gridMoveState.sourceElement?.getBoundingClientRect().top ?? null;
  const gridOccurrences = getGridOccurrences(buildScheduleOccurrences());
  scheduleGrid.innerHTML = createScheduleGrid(gridOccurrences);
  scheduleGrid.classList.add("active", "grid-moving");
  updateScheduleGridZoomControls();

  gridMoveState.sourceElement = [...scheduleGrid.querySelectorAll(".timeline-task[data-task-id][data-occurrence-date]")]
    .find((taskCard) =>
      taskCard.dataset.taskId === gridMoveState.taskId &&
      taskCard.dataset.occurrenceDate === gridMoveState.occurrenceDate,
    ) ?? null;

  if (previousTop !== null && gridMoveState.sourceElement) {
    const nextTop = gridMoveState.sourceElement.getBoundingClientRect().top;
    scheduleGrid.scrollTop += nextTop - previousTop;
  }
}

function autoScrollScheduleGridDuringMove(clientY) {
  const rect = scheduleGrid.getBoundingClientRect();
  const edgeSize = 72;
  const maxStep = 24;

  if (clientY < rect.top + edgeSize) {
    const intensity = 1 - clamp((clientY - rect.top) / edgeSize, 0, 1);
    scheduleGrid.scrollTop -= Math.ceil(maxStep * intensity);
    return;
  }

  if (clientY > rect.bottom - edgeSize) {
    const intensity = 1 - clamp((rect.bottom - clientY) / edgeSize, 0, 1);
    scheduleGrid.scrollTop += Math.ceil(maxStep * intensity);
  }
}

function updateGridMovePreview(clientX, clientY) {
  if (!gridMoveState?.active) return;

  const overTrash = isPointInsideGridTrash(clientX, clientY);
  updateGridTrashTargetState(overTrash);

  if (overTrash) {
    gridMoveState.drop = null;
    if (gridMoveState.preview) gridMoveState.preview.remove();
    gridMoveState.preview = null;
    return;
  }

  const drop = getGridMoveDropTarget(clientX, clientY, gridMoveState.duration);
  gridMoveState.drop = drop;

  if (!drop) {
    if (gridMoveState.preview) gridMoveState.preview.remove();
    gridMoveState.preview = null;
    return;
  }

  const preview = getGridMovePreview();
  if (preview.parentElement !== drop.container) {
    drop.container.append(preview);
  }

  preview.style.top = `${drop.top.toFixed(2)}%`;
  preview.style.height = `${drop.height.toFixed(2)}%`;
  preview.textContent = `${formatDateHeading(drop.date)} - ${formatTimeFromMinutes(drop.minute)}`;
  preview.classList.toggle("week-preview", Boolean(drop.container.classList.contains("week-day-column")));
}

function getGridMovePreview() {
  if (!gridMoveState.preview) {
    gridMoveState.preview = document.createElement("div");
    gridMoveState.preview.className = "grid-drop-preview";
  }

  return gridMoveState.preview;
}

function showGridTrashTarget() {
  const trashTarget = getGridTrashTarget();
  trashTarget.classList.add("visible");
}

function getGridTrashTarget() {
  if (!gridMoveState.trashTarget) {
    const trashTarget = document.createElement("div");
    trashTarget.className = "grid-trash-target";
    trashTarget.setAttribute("aria-hidden", "true");
    trashTarget.innerHTML = `
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M4 7h16"></path>
        <path d="M9 7V5h6v2"></path>
        <path d="M7 7l1 13h8l1-13"></path>
        <path d="M10 11v5"></path>
        <path d="M14 11v5"></path>
      </svg>
      <span>Drop to delete</span>
    `;
    document.body.append(trashTarget);
    gridMoveState.trashTarget = trashTarget;
  }

  return gridMoveState.trashTarget;
}

function updateGridTrashTargetState(isReady) {
  const trashTarget = getGridTrashTarget();
  trashTarget.classList.toggle("ready", isReady);
}

function isPointInsideGridTrash(clientX, clientY) {
  const trashTarget = gridMoveState?.trashTarget;
  if (!trashTarget) return false;

  const rect = trashTarget.getBoundingClientRect();
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

function getGridMoveTaskLabel() {
  const sourceTask = tasks.find((task) => task.id === gridMoveState?.taskId);
  if (!sourceTask) return "Task";

  return createOccurrence(sourceTask, gridMoveState.occurrenceDate).title;
}

function getGridMoveDropTarget(clientX, clientY, duration) {
  const board = scheduleGrid.querySelector(".timeline-board");
  const timeline = board?.closest(".day-timeline");
  if (!board || !timeline) return null;

  const boardRect = board.getBoundingClientRect();
  if (boardRect.width <= 0 || boardRect.height <= 0) return null;

  const bounds = {
    start: Number(timeline.dataset.startMinute) || 0,
    end: Number(timeline.dataset.endMinute) || 24 * 60,
    totalMinutes: Number(timeline.dataset.totalMinutes) || 1,
  };
  bounds.segments = parseTimelineSegments(timeline.dataset.timelineSegments, bounds.totalMinutes, bounds.start, bounds.end);
  const visualMinute = clamp((clientY - boardRect.top) / boardRect.height, 0, 1) * bounds.totalMinutes;
  const rawMinute = mapTimelineMinuteToActualMinute(visualMinute, bounds);
  const snappedMinute = snapGridMinute(
    rawMinute,
    bounds,
    duration,
  );
  const top = getTimelineMinutePercent(snappedMinute, bounds);
  const height = getTimelineRangeHeightPercent(snappedMinute, snappedMinute + Number(duration || 0), bounds);

  if (board.classList.contains("week-board")) {
    const columns = [...board.querySelectorAll(".week-day-column")];
    const column = getClosestWeekColumn(columns, clientX);
    if (!column) return null;

    return {
      container: column,
      date: column.dataset.gridDate,
      minute: snappedMinute,
      time: timeInputValueFromMinutes(snappedMinute),
      top,
      height,
    };
  }

  return {
    container: board,
    date: board.dataset.gridDate || todayISO,
    minute: snappedMinute,
    time: timeInputValueFromMinutes(snappedMinute),
    top,
    height,
  };
}

function getClosestWeekColumn(columns, clientX) {
  if (columns.length === 0) return null;

  return columns.reduce((closestColumn, column) => {
    const rect = column.getBoundingClientRect();
    const closestDistance = Math.abs(clientX - getElementCenterX(closestColumn));
    const columnDistance = Math.abs(clientX - (rect.left + rect.width / 2));
    return columnDistance < closestDistance ? column : closestColumn;
  }, columns[0]);
}

function getElementCenterX(element) {
  const rect = element.getBoundingClientRect();
  return rect.left + rect.width / 2;
}

function snapGridMinute(minute, bounds, duration) {
  const segment = getClosestTimelineSegmentForMinute(bounds, minute);
  const segmentLength = Math.max(segment.end - segment.start, GRID_MOVE_SNAP_MINUTES);
  const safeDuration = Math.min(Number(duration || 0), segmentLength);
  const maxStart = Math.max(segment.start, segment.end - safeDuration);
  const snapped = Math.round(minute / GRID_MOVE_SNAP_MINUTES) * GRID_MOVE_SNAP_MINUTES;
  return clamp(snapped, segment.start, maxStart);
}

function getClosestTimelineSegmentForMinute(bounds, minute) {
  const segments = getTimelineSegments(bounds);
  const directMatch = segments.find((segment) => minute >= segment.start && minute <= segment.end);
  if (directMatch) return directMatch;

  return segments.reduce((closestSegment, segment) => {
    const closestDistance = Math.min(Math.abs(minute - closestSegment.start), Math.abs(minute - closestSegment.end));
    const segmentDistance = Math.min(Math.abs(minute - segment.start), Math.abs(minute - segment.end));
    return segmentDistance < closestDistance ? segment : closestSegment;
  }, segments[0]);
}

function openEditTask(taskId, occurrenceDate) {
  clearHoldToEdit();
  cancelGridTaskMove();
  const task = tasks.find((savedTask) => savedTask.id === taskId);
  if (!task) return;

  const occurrence = createOccurrence(task, occurrenceDate);
  editTaskIdInput.value = taskId;
  editOccurrenceDateInput.value = occurrenceDate;
  editTaskNameInput.value = occurrence.title;
  editTaskDateInput.value = occurrence.occurrenceDate;
  editTaskTimeInput.value = occurrence.time;
  editTaskDurationInput.value = String(occurrence.duration);
  editTaskTypeInput.value = occurrence.type;
  editTaskPriorityInput.value = normalizePriority(occurrence.priority);
  editTaskNotesInput.value = occurrence.notes ?? "";
  editTaskRepeatsInput.checked = Boolean(task.repeats);
  setEditRepeatDays(task.repeats ? task.repeatDays : []);

  editTaskOverlay.classList.remove("hidden");
  editTaskOverlay.setAttribute("aria-hidden", "false");
  editTaskNameInput.focus();
}

function closeEditTask() {
  editTaskOverlay.classList.add("hidden");
  editTaskOverlay.setAttribute("aria-hidden", "true");
  editTaskForm.reset();
}

function saveEditedTask(event) {
  event.preventDefault();

  const taskId = editTaskIdInput.value;
  const occurrenceDate = editOccurrenceDateInput.value;
  const title = editTaskNameInput.value.trim();
  const date = editTaskDateInput.value;
  const time = editTaskTimeInput.value;
  const type = normalizeTaskTypeName(editTaskTypeInput.value);
  const duration = Number(editTaskDurationInput.value);
  const repeats = editTaskRepeatsInput.checked;
  const repeatDays = repeats ? getEditRepeatDays() : [];
  const nextRepeatDays = repeats && repeatDays.length === 0 ? [weekdayForISODate(date)] : repeatDays;

  if (!title || !date || !time || !type) return;

  tasks = tasks.map((task) => {
    if (task.id !== taskId) return task;

    return {
      ...task,
      title,
      date,
      time,
      duration,
      type,
      priority: normalizePriority(editTaskPriorityInput.value),
      notes: editTaskNotesInput.value.trim(),
      repeats,
      repeatDays: repeats ? nextRepeatDays : [],
      done: repeats ? false : task.repeats ? false : Boolean(task.done),
      skipped: repeats ? false : Boolean(task.skipped),
      completedDates: repeats ? (Array.isArray(task.completedDates) ? task.completedDates : []) : [],
      skippedDates: repeats ? (Array.isArray(task.skippedDates) ? task.skippedDates : []) : [],
      earnedPointsByDate: repeats ? (task.earnedPointsByDate ?? {}) : {},
      actualMinutesByDate: repeats ? (task.actualMinutesByDate ?? {}) : {},
    };
  });

  if (activeTimer?.taskId === taskId && activeTimer?.occurrenceDate === occurrenceDate) {
    activeTimer = {
      ...activeTimer,
      duration,
    };
    saveActiveTimer();
  }

  saveCustomTaskType(type);
  saveTasks();
  closeEditTask();
  render();
}

function getEditRepeatDays() {
  return [...document.querySelectorAll('input[name="editRepeatDays"]:checked')]
    .map((input) => Number(input.value))
    .sort((a, b) => a - b);
}

function setEditRepeatDays(days) {
  const selectedDays = new Set((Array.isArray(days) ? days : []).map(Number));
  document.querySelectorAll('input[name="editRepeatDays"]').forEach((input) => {
    input.checked = selectedDays.has(Number(input.value));
  });
}

function renderMissedTasks() {
  if (!featureSettings.missedTasks) {
    missedTasksPanel.classList.add("hidden");
    missedTaskList.innerHTML = "";
    return;
  }

  const missedTasks = buildMissedOccurrences();
  missedTasksPanel.classList.toggle("hidden", missedTasks.length === 0);
  missedTasksPanel.classList.toggle("collapsed", missedTasksCollapsed);
  collapseMissedButton.textContent = missedTasksCollapsed ? `Show ${missedTasks.length}` : "Collapse";
  collapseMissedButton.setAttribute(
    "aria-expanded",
    missedTasksCollapsed ? "false" : "true",
  );
  missedTaskList.innerHTML = missedTasksCollapsed ? "" : missedTasks.slice(0, 8).map(createMissedTaskCard).join("");
}

function createMissedTaskCard(task) {
  const typeStyle = createTypeStyleAttribute(task.type);
  const priorityChip = createPriorityChip(task);

  return `
    <article class="missed-task-card" data-task-id="${task.id}" data-occurrence-date="${task.occurrenceDate}" ${typeStyle}>
      <div>
        <strong>${escapeHTML(task.title)}</strong>
        <span>${formatDateHeading(task.occurrenceDate)} &middot; ${formatTimeRange(task)}</span>
        <div class="task-meta">
          <span class="chip type-chip">${escapeHTML(task.type)}</span>
          ${priorityChip}
        </div>
      </div>
      <div class="missed-actions">
        <button class="secondary-button" data-missed-action="today" type="button">Today</button>
        <button class="secondary-button" data-missed-action="tomorrow" type="button">Tomorrow</button>
        <button class="secondary-button danger-button" data-missed-action="skip" type="button">Skip</button>
        <button class="secondary-button ghost-button delete-x-button" data-missed-action="delete" type="button" title="Delete" aria-label="Delete">x</button>
      </div>
    </article>
  `;
}

function createTaskCard(task) {
  const date = new Date(`${task.occurrenceDate}T${task.time}`);
  const dayLabel = date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timeLabel = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  const notes = task.notes ? `<p>${escapeHTML(task.notes)}</p>` : "";
  const repeatLabel = task.repeats ? createRepeatLabel(task.repeatDays) : "One-time";
  const priorityChip = createPriorityChip(task);
  const streakChip = createStreakChip(task.type);
  const typeStyle = createTypeStyleAttribute(task.type);
  const isTimerActive = isActiveTimerFor(task);
  const canStartTimer = !task.done && (!activeTimer || isTimerActive);
  const timerPanel = isTimerActive
    ? `
      <div class="task-timer" data-timer-task>
        <span>Timer running</span>
        <strong data-timer-countdown>${formatTimerRemaining(activeTimer)}</strong>
      </div>
    `
    : "";
  const timerButton = task.done
    ? ""
    : isTimerActive
      ? `<button class="icon-button finish" type="button" data-action="finish" title="Finish now and earn xp for elapsed time" aria-label="Finish task" data-active-finish>Finish</button>`
      : `<button class="icon-button start" type="button" data-action="start" title="Start task" aria-label="Start task" ${canStartTimer ? "" : "disabled"}>Start</button>`;
  const undoButton = task.done
    ? `
      <button class="icon-button" type="button" data-action="toggle" title="Undo" aria-label="Undo">
        Undo
      </button>
    `
    : "";

  return `
    <article class="task-card ${task.done ? "done" : ""}" data-task-id="${task.id}" data-occurrence-date="${task.occurrenceDate}" ${typeStyle}>
      <div class="time-block">
        <strong>${timeLabel}</strong>
        <span>Estimate &middot; ${dayLabel}</span>
      </div>
      <div>
        <div class="task-title">${escapeHTML(task.title)}</div>
        ${notes}
        ${timerPanel}
        <div class="task-meta">
          <span class="chip">${task.duration} min</span>
          <span class="chip type-chip">${escapeHTML(task.type)}</span>
          ${priorityChip}
          ${streakChip}
          <span class="chip">${escapeHTML(repeatLabel)}</span>
        </div>
      </div>
      <div class="task-actions">
        ${timerButton}
        ${undoButton}
        <button class="icon-button delete" type="button" data-action="delete" title="Delete" aria-label="Delete">
          x
        </button>
      </div>
    </article>
  `;
}

function createCompletedTaskCard(task) {
  const date = new Date(`${task.occurrenceDate}T${task.time}`);
  const dayLabel = date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timeLabel = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  const notes = task.notes ? `<p>${escapeHTML(task.notes)}</p>` : "";
  const repeatLabel = task.repeats ? createRepeatLabel(task.repeatDays) : "One-time";
  const points = calculatePoints(task);
  const completedMinutes = calculateCompletedMinutes(task);
  const priorityChip = createPriorityChip(task);
  const streakChip = createStreakChip(task.type);
  const typeStyle = createTypeStyleAttribute(task.type);

  return `
    <article class="task-card done" ${typeStyle}>
      <div class="time-block">
        <strong>${timeLabel}</strong>
        <span>Estimate &middot; ${dayLabel}</span>
      </div>
      <div>
        <div class="task-title">${escapeHTML(task.title)}</div>
        ${notes}
        <div class="task-meta">
          <span class="chip">${formatMinutesAsHours(completedMinutes)} tracked</span>
          <span class="chip type-chip">${escapeHTML(task.type)}</span>
          ${priorityChip}
          ${streakChip}
          <span class="chip">${escapeHTML(repeatLabel)}</span>
        </div>
      </div>
      <div class="points-chip">+${formatPoints(points)} xp</div>
    </article>
  `;
}

function createScheduleGrid(occurrences) {
  return scheduleGridRange.value === "day"
    ? createDayScheduleGrid(occurrences)
    : createWeekScheduleGrid(occurrences);
}

function createDayScheduleGrid(occurrences) {
  const selectedDate = scheduleAnchorDate;
  const tasksByDate = groupTasksByDate(occurrences);
  const dayTasks = tasksByDate.get(selectedDate) ?? [];
  const bounds = getDayTimelineBounds(dayTasks);
  const timelineItems = assignTimelineLanes(dayTasks);

  return `
    <section class="day-grid-card">
      <div class="day-grid-header">
        <h3>${formatDateHeading(selectedDate)}</h3>
        <span>${dayTasks.length} task${dayTasks.length === 1 ? "" : "s"}</span>
      </div>
      <div class="day-timeline" data-start-minute="${bounds.start}" data-end-minute="${bounds.end}" data-total-minutes="${bounds.totalMinutes}" data-timeline-segments="${serializeTimelineSegments(bounds)}" style="--timeline-height: ${getTimelineHeight(bounds.totalMinutes)}px;">
        <div class="time-labels">${createTimelineLabels(bounds)}</div>
        <div class="timeline-board" data-grid-date="${selectedDate}">
          ${createTimelineLines(bounds)}
          ${timelineItems.map((item) => createTimelineTask(item, bounds)).join("")}
        </div>
      </div>
    </section>
  `;
}

function createWeekScheduleGrid(occurrences) {
  const weekDates = getScheduleWeekDates();
  const tasksByDate = groupTasksByDate(occurrences);
  const allWeekTasks = weekDates.flatMap((date) => tasksByDate.get(date) ?? []);
  const bounds = getDayTimelineBounds(allWeekTasks);
  const dateLabels = weekDates
    .map((date) => `<span class="${date === todayISO ? "today" : ""}">${formatWeekDayHeading(date)}</span>`)
    .join("");
  const dayColumns = weekDates
    .map((date) => {
      const dayTasks = tasksByDate.get(date) ?? [];
      const timelineItems = assignTimelineLanes(dayTasks);

      return `
        <div class="week-day-column ${date === todayISO ? "today" : ""}" data-grid-date="${date}">
          ${timelineItems.map((item) => createTimelineTask(item, bounds, "week-task")).join("")}
        </div>
      `;
    })
    .join("");

  return `
    <section class="day-grid-card week-grid-card">
      <div class="day-grid-header">
        <h3>${formatDateRangeHeading(weekDates[0], weekDates[6])}</h3>
        <span>${allWeekTasks.length} task${allWeekTasks.length === 1 ? "" : "s"}</span>
      </div>
      <div class="week-days-header">
        <span></span>
        ${dateLabels}
      </div>
      <div class="day-timeline week-timeline" data-start-minute="${bounds.start}" data-end-minute="${bounds.end}" data-total-minutes="${bounds.totalMinutes}" data-timeline-segments="${serializeTimelineSegments(bounds)}" style="--timeline-height: ${getTimelineHeight(bounds.totalMinutes)}px;">
        <div class="time-labels">${createTimelineLabels(bounds)}</div>
        <div class="timeline-board week-board">
          ${createTimelineLines(bounds)}
          ${dayColumns}
        </div>
      </div>
    </section>
  `;
}

function renderOverlapAlert(occurrences) {
  const overlaps = findOverlaps(occurrences.filter((task) => !task.done));

  if (overlaps.length === 0) {
    currentOverlapSignature = "";
    overlapAlert.classList.remove("visible", "collapsed");
    overlapAlert.innerHTML = "";
    return;
  }

  currentOverlapSignature = createOverlapSignature(overlaps);

  if (dismissedOverlapSignature === currentOverlapSignature) {
    overlapAlert.classList.add("visible", "collapsed");
    overlapAlert.innerHTML = `
      <button class="overlap-icon-button" data-overlap-action="expand" type="button" aria-label="Show overlap warning">
        !
      </button>
    `;
    return;
  }

  const previewItems = overlaps
    .slice(0, 3)
    .map(
      (overlap) => `
        <li>
          <strong>${escapeHTML(overlap.first.title)}</strong> overlaps with
          <strong>${escapeHTML(overlap.second.title)}</strong>
          on ${formatDateHeading(overlap.first.occurrenceDate)}
          (${formatTimeRange(overlap.first)} and ${formatTimeRange(overlap.second)})
        </li>
      `,
    )
    .join("");
  const extraCount = overlaps.length > 3 ? `<p>And ${overlaps.length - 3} more overlap${overlaps.length - 3 === 1 ? "" : "s"}.</p>` : "";

  overlapAlert.classList.add("visible");
  overlapAlert.classList.remove("collapsed");
  overlapAlert.innerHTML = `
    <div class="overlap-alert-header">
      <strong>Overlap warning</strong>
      <button class="overlap-dismiss-button" data-overlap-action="dismiss" type="button">Dismiss</button>
    </div>
    <p>${overlaps.length} overlap${overlaps.length === 1 ? "" : "s"} found in this schedule view.</p>
    <ul>${previewItems}</ul>
    ${extraCount}
  `;
}

function createOverlapSignature(overlaps) {
  return overlaps
    .map((overlap) => {
      const firstKey = createOverlapTaskKey(overlap.first);
      const secondKey = createOverlapTaskKey(overlap.second);
      return [firstKey, secondKey].sort().join("~");
    })
    .sort()
    .join("|");
}

function createOverlapTaskKey(task) {
  return `${task.id}:${task.occurrenceDate}:${task.time}:${task.duration}`;
}

function getGridOccurrences(occurrences) {
  const range = getGridDateRange();
  return occurrences.filter((task) => {
    const taskDate = parseISODate(task.occurrenceDate);
    return taskDate >= range.start && taskDate <= range.end && matchesGridStatusFilter(task);
  });
}

function getGridDateRange() {
  if (scheduleGridRange.value === "day") {
    const day = parseISODate(scheduleAnchorDate);
    return { start: day, end: day };
  }

  const weekStart = getWeekStart(parseISODate(scheduleAnchorDate));
  return { start: weekStart, end: addDays(weekStart, 6) };
}

function matchesGridStatusFilter(task) {
  if (task.skipped) return false;
  return true;
}

function findOverlaps(occurrences) {
  const tasksByDate = groupTasksByDate(occurrences);
  const overlaps = [];

  tasksByDate.forEach((dayTasks) => {
    const sortedTasks = dayTasks
      .map((task) => ({ task, range: getTaskTimeRange(task) }))
      .sort((a, b) => a.range.start - b.range.start);

    for (let firstIndex = 0; firstIndex < sortedTasks.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < sortedTasks.length; secondIndex += 1) {
        const first = sortedTasks[firstIndex];
        const second = sortedTasks[secondIndex];
        if (second.range.start >= first.range.end) break;

        overlaps.push({ first: first.task, second: second.task });
      }
    }
  });

  return overlaps;
}

function groupTasksByDate(occurrences) {
  const tasksByDate = new Map();

  occurrences.forEach((task) => {
    if (!tasksByDate.has(task.occurrenceDate)) {
      tasksByDate.set(task.occurrenceDate, []);
    }

    tasksByDate.get(task.occurrenceDate).push(task);
  });

  return tasksByDate;
}

function assignTimelineLanes(dayTasks) {
  const laneEnds = [];
  let currentGroup = [];
  let currentGroupEnd = -Infinity;
  const items = dayTasks
    .map((task) => ({ task, range: getTaskTimeRange(task), lane: 0, laneCount: 1 }))
    .sort((a, b) => a.range.start - b.range.start || a.range.end - b.range.end);

  const finishGroup = () => {
    if (currentGroup.length === 0) return;

    const laneCount = Math.max(...currentGroup.map((item) => item.lane)) + 1;
    currentGroup.forEach((item) => {
      item.laneCount = laneCount;
    });
    currentGroup = [];
    currentGroupEnd = -Infinity;
  };

  items.forEach((item) => {
    const lane = laneEnds.findIndex((end) => end <= item.range.start);
    item.lane = lane === -1 ? laneEnds.length : lane;
    laneEnds[item.lane] = item.range.end;

    if (currentGroup.length > 0 && item.range.start >= currentGroupEnd) {
      finishGroup();
    }

    currentGroup.push(item);
    currentGroupEnd = Math.max(currentGroupEnd, item.range.end);
  });

  finishGroup();
  return items;
}

function createTimelineTask(item, bounds, extraClass = "") {
  const { task, range, lane, laneCount } = item;
  const top = getTimelineMinutePercent(range.start, bounds);
  const height = getTimelineRangeHeightPercent(range.start, range.end, bounds);
  const laneWidth = 100 / laneCount;
  const laneLeft = lane * laneWidth;
  const typeStyle = getTaskTypeStyle(task.type);
  const priorityLabel = featureSettings.priorities ? ` &middot; ${escapeHTML(normalizePriority(task.priority))}` : "";

  return `
    <article
      class="timeline-task ${extraClass} duration-${task.duration} ${task.done ? "done" : ""}"
      data-task-id="${task.id}"
      data-occurrence-date="${task.occurrenceDate}"
      style="--task-top: ${top.toFixed(2)}%; --task-height: ${height.toFixed(2)}%; --task-left: ${laneLeft.toFixed(2)}%; --task-width: ${laneWidth.toFixed(2)}%; --type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg};"
    >
      <span class="timeline-time">${formatTimeRange(task)}</span>
      <strong class="timeline-title">${escapeHTML(task.title)}</strong>
      <small class="timeline-meta">${escapeHTML(task.type)}${priorityLabel} &middot; ${task.duration} min</small>
    </article>
  `;
}

function createTimelineLabels(bounds) {
  return getTimelineHours(bounds)
    .map((minute) => {
      const top = getTimelineMinutePercent(minute, bounds);
      return `<span style="top: ${top.toFixed(2)}%">${formatTimeFromMinutes(minute)}</span>`;
    })
    .join("");
}

function createTimelineLines(bounds) {
  return getTimelineHours(bounds)
    .map((minute) => {
      const top = getTimelineMinutePercent(minute, bounds);
      return `<span class="timeline-line" style="top: ${top.toFixed(2)}%"></span>`;
    })
    .join("");
}

function getTimelineHours(bounds) {
  const hours = [];
  getTimelineSegments(bounds).forEach((segment) => {
    for (let minute = segment.start; minute <= segment.end; minute += 60) {
      if (!hours.includes(minute)) hours.push(minute);
    }
  });
  return hours;
}

function getDayTimelineBounds(dayTasks) {
  if (shouldExpandGridTimelineForMove()) {
    return createTimelineBounds([{ start: 0, end: 24 * 60 }]);
  }

  if (dayTasks.length === 0) {
    return createTimelineBounds([{ start: 8 * 60, end: 12 * 60 }]);
  }

  return createTimelineBounds(createOccupiedTimelineSegments(dayTasks));
}

function shouldExpandGridTimelineForMove() {
  return scheduleView === "grid" && Boolean(gridMoveState?.active);
}

function createOccupiedTimelineSegments(dayTasks) {
  return dayTasks
    .map(getTaskTimeRange)
    .map((range) => ({
      start: Math.max(0, Math.floor(range.start / 60) * 60),
      end: Math.min(24 * 60, Math.ceil(range.end / 60) * 60),
    }))
    .filter((segment) => segment.end > segment.start)
    .sort((first, second) => first.start - second.start || first.end - second.end)
    .reduce((segments, segment) => {
      const previous = segments.at(-1);
      if (previous && segment.start <= previous.end) {
        previous.end = Math.max(previous.end, segment.end);
      } else {
        segments.push({ ...segment });
      }

      return segments;
    }, []);
}

function createTimelineBounds(rawSegments) {
  const fallbackSegments = rawSegments.length > 0 ? rawSegments : [{ start: 8 * 60, end: 12 * 60 }];
  let visualCursor = 0;
  const segments = fallbackSegments.map((segment, index) => {
    if (index > 0) visualCursor += GRID_COLLAPSED_GAP_MINUTES;

    const length = Math.max(segment.end - segment.start, GRID_MOVE_SNAP_MINUTES);
    const timelineSegment = {
      start: segment.start,
      end: segment.end,
      visualStart: visualCursor,
      visualEnd: visualCursor + length,
    };
    visualCursor += length;
    return timelineSegment;
  });

  return {
    start: segments[0].start,
    end: segments.at(-1).end,
    totalMinutes: Math.max(visualCursor, 60),
    segments,
  };
}

function getTimelineSegments(bounds) {
  if (Array.isArray(bounds.segments) && bounds.segments.length > 0) {
    return bounds.segments;
  }

  return [{ start: bounds.start, end: bounds.end, visualStart: 0, visualEnd: bounds.totalMinutes }];
}

function serializeTimelineSegments(bounds) {
  return getTimelineSegments(bounds)
    .map((segment) => `${segment.start}:${segment.end}:${segment.visualStart}:${segment.visualEnd}`)
    .join(",");
}

function parseTimelineSegments(value, totalMinutes, start, end) {
  const segments = String(value ?? "")
    .split(",")
    .map((segment) => segment.split(":").map(Number))
    .filter((parts) => parts.length === 4 && parts.every((part) => Number.isFinite(part)))
    .map(([segmentStart, segmentEnd, visualStart, visualEnd]) => ({
      start: segmentStart,
      end: segmentEnd,
      visualStart,
      visualEnd,
    }));

  return segments.length > 0
    ? segments
    : [{ start, end, visualStart: 0, visualEnd: totalMinutes }];
}

function getTimelineMinutePercent(minute, bounds) {
  return (mapActualMinuteToTimelineMinute(minute, bounds) / bounds.totalMinutes) * 100;
}

function getTimelineRangeHeightPercent(start, end, bounds) {
  const visualStart = mapActualMinuteToTimelineMinute(start, bounds);
  const visualEnd = mapActualMinuteToTimelineMinute(Math.min(end, bounds.end), bounds);
  return Math.max(((visualEnd - visualStart) / bounds.totalMinutes) * 100, 1.8);
}

function mapActualMinuteToTimelineMinute(minute, bounds) {
  const segments = getTimelineSegments(bounds);
  const safeMinute = clamp(minute, segments[0].start, segments.at(-1).end);
  const segment = segments.find((timelineSegment) => safeMinute >= timelineSegment.start && safeMinute <= timelineSegment.end);

  if (segment) {
    return segment.visualStart + clamp(safeMinute, segment.start, segment.end) - segment.start;
  }

  let closestVisualMinute = segments[0].visualStart;
  let closestDistance = Infinity;
  segments.forEach((timelineSegment) => {
    const distanceToStart = Math.abs(safeMinute - timelineSegment.start);
    const distanceToEnd = Math.abs(safeMinute - timelineSegment.end);

    if (distanceToStart < closestDistance) {
      closestDistance = distanceToStart;
      closestVisualMinute = timelineSegment.visualStart;
    }

    if (distanceToEnd < closestDistance) {
      closestDistance = distanceToEnd;
      closestVisualMinute = timelineSegment.visualEnd;
    }
  });

  return closestVisualMinute;
}

function mapTimelineMinuteToActualMinute(visualMinute, bounds) {
  const segments = getTimelineSegments(bounds);
  const safeMinute = clamp(visualMinute, 0, bounds.totalMinutes);

  for (let index = 0; index < segments.length; index += 1) {
    const segment = segments[index];
    if (safeMinute >= segment.visualStart && safeMinute <= segment.visualEnd) {
      return segment.start + safeMinute - segment.visualStart;
    }

    const nextSegment = segments[index + 1];
    if (nextSegment && safeMinute > segment.visualEnd && safeMinute < nextSegment.visualStart) {
      const distanceToPrevious = safeMinute - segment.visualEnd;
      const distanceToNext = nextSegment.visualStart - safeMinute;
      return distanceToPrevious <= distanceToNext ? segment.end : nextSegment.start;
    }
  }

  return segments.at(-1).end;
}

function getTaskTimeRange(task) {
  const start = timeToMinutes(task.time);
  return {
    start,
    end: start + Number(task.duration),
  };
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatTimeRange(task) {
  const range = getTaskTimeRange(task);
  return `${formatTimeFromMinutes(range.start)}-${formatTimeFromMinutes(range.end)}`;
}

function formatTimeFromMinutes(minutes) {
  const date = new Date(2000, 0, 1, Math.floor(minutes / 60) % 24, minutes % 60);
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}

function timeInputValueFromMinutes(minutes) {
  const normalizedMinutes = clamp(Math.round(minutes), 0, 23 * 60 + 59);
  const hours = Math.floor(normalizedMinutes / 60);
  const remainingMinutes = normalizedMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}`;
}

function formatDateHeading(isoDate) {
  return parseISODate(isoDate).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatDateRangeHeading(startISO, endISO) {
  const start = parseISODate(startISO);
  const end = parseISODate(endISO);
  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  const startLabel = start.toLocaleDateString(undefined, sameMonth
    ? { month: "short", day: "numeric" }
    : { month: "short", day: "numeric" });
  const endLabel = end.toLocaleDateString(undefined, {
    month: sameMonth ? undefined : "short",
    day: "numeric",
  });

  return `${startLabel} - ${endLabel}`;
}

function formatWeekDayHeading(isoDate) {
  return parseISODate(isoDate).toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
  });
}

function getScheduleWeekDates() {
  const weekStart = getWeekStart(parseISODate(scheduleAnchorDate));
  return Array.from({ length: 7 }, (_, index) => toDateInputValue(addDays(weekStart, index)));
}

function getCurrentWeekDates() {
  const weekStart = getCurrentWeekStart();
  return Array.from({ length: 7 }, (_, index) => toDateInputValue(addDays(weekStart, index)));
}

function getCurrentWeekStart() {
  return getWeekStart(today);
}

function getWeekStart(date) {
  const day = date.getDay();
  const daysSinceMonday = (day + 6) % 7;
  return addDays(startOfToday(date), -daysSinceMonday);
}

function createTypeStyleAttribute(type) {
  const typeStyle = getTaskTypeStyle(type);
  return `style="--type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg};"`;
}

function getTaskTypeStyle(type) {
  return TASK_TYPE_STYLES[type] ?? createCustomTaskTypeStyle(type);
}

function createCustomTaskTypeStyle(type) {
  const hue = getStringHue(type);
  return {
    color: `hsl(${hue} 62% 44%)`,
    bg: `hsla(${hue}, 78%, 58%, 0.16)`,
  };
}

function getStringHue(value) {
  return [...value].reduce((hash, char) => hash + char.charCodeAt(0) * 17, 0) % 360;
}

function renderTaskTypeOptions(selectedType = taskTypeInput.value || BUILT_IN_TASK_TYPES[0]) {
  const options = [...BUILT_IN_TASK_TYPES, ...customTaskTypes];
  taskTypeInput.innerHTML = `
    ${options.map((type) => `<option value="${escapeHTML(type)}">${escapeHTML(type)}</option>`).join("")}
    <option value="custom">Custom type...</option>
  `;

  taskTypeInput.value = options.includes(selectedType) ? selectedType : BUILT_IN_TASK_TYPES[0];
  toggleCustomTypeInput();
}

function toggleCustomTypeInput() {
  const isCustom = taskTypeInput.value === "custom";
  customTaskTypeInput.classList.toggle("hidden", !isCustom);
  customTaskTypeInput.toggleAttribute("required", isCustom);
  if (isCustom) customTaskTypeInput.focus();
}

function getSubmittedTaskType(formData) {
  const selectedType = formData.get("type");
  if (selectedType !== "custom") return selectedType;
  return normalizeTaskTypeName(formData.get("customType"));
}

function renderTaskTemplateOptions(selectedValue = "") {
  const savedOptions = taskTemplates
    .map((template) => `<option value="saved:${template.id}">${escapeHTML(template.title)}</option>`)
    .join("");
  const defaultOptions = DEFAULT_TASK_TEMPLATES
    .map((template) => `<option value="default:${template.id}">${escapeHTML(template.title)}</option>`)
    .join("");

  taskTemplateSelect.innerHTML = `
    <option value="">Choose a template...</option>
    <optgroup label="Quick starts">
      ${defaultOptions}
    </optgroup>
    <optgroup label="Saved">
      ${savedOptions || '<option value="" disabled>No saved templates yet</option>'}
    </optgroup>
  `;
  taskTemplateSelect.value = selectedValue;
}

function applySelectedTaskTemplate() {
  const template = findTaskTemplate(taskTemplateSelect.value);
  if (!template) return;

  taskTitleInput.value = template.title;
  taskDurationInput.value = String(template.duration);
  taskNotesInput.value = template.notes ?? "";
  taskPriorityInput.value = normalizePriority(template.priority);
  taskRepeatsInput.checked = Boolean(template.repeats);
  setRepeatDays(template.repeats ? template.repeatDays : []);

  if (template.type && !hasTaskType(BUILT_IN_TASK_TYPES, template.type) && !hasTaskType(customTaskTypes, template.type)) {
    saveCustomTaskType(template.type);
  }

  renderTaskTypeOptions(template.type);
}

function saveCurrentTaskTemplate() {
  const formData = new FormData(taskForm);
  const type = getSubmittedTaskType(formData);
  const template = normalizeTaskTemplate({
    id: crypto.randomUUID(),
    title: formData.get("title"),
    duration: formData.get("duration"),
    type,
    notes: formData.get("notes"),
    priority: formData.get("priority"),
    repeats: formData.get("repeats") === "on",
    repeatDays: getSelectedRepeatDays(),
  });

  if (!template.title) {
    taskTitleInput.focus();
    return;
  }

  if (!template.type) {
    customTaskTypeInput.focus();
    return;
  }

  saveCustomTaskType(template.type);
  taskTemplates = [
    template,
    ...taskTemplates.filter((savedTemplate) => savedTemplate.title.toLowerCase() !== template.title.toLowerCase()),
  ].slice(0, 20);
  saveTaskTemplates();
  renderTaskTemplateOptions(`saved:${template.id}`);
}

function findTaskTemplate(value) {
  const [source, id] = String(value).split(":");
  if (source === "default") return DEFAULT_TASK_TEMPLATES.find((template) => template.id === id);
  if (source === "saved") return taskTemplates.find((template) => template.id === id);
  return null;
}

function saveCustomTaskType(type) {
  const taskType = normalizeTaskTypeName(type);
  if (!taskType || hasTaskType(BUILT_IN_TASK_TYPES, taskType) || hasTaskType(customTaskTypes, taskType)) return;

  customTaskTypes = mergeCustomTaskTypes(customTaskTypes, [taskType]);
  saveCustomTaskTypes();
  renderTaskTypeOptions(taskType);
}

function mergeCustomTaskTypes(currentTypes, newTypes) {
  const mergedTypes = [...currentTypes, ...newTypes]
    .map(normalizeTaskTypeName)
    .filter(Boolean)
    .filter((type) => !hasTaskType(BUILT_IN_TASK_TYPES, type));

  return [...new Map(mergedTypes.map((type) => [type.toLowerCase(), type])).values()].sort((a, b) =>
    a.localeCompare(b),
  );
}

function normalizeTaskTypeName(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ").slice(0, 24);
}

function hasTaskType(types, type) {
  return types.some((savedType) => savedType.toLowerCase() === type.toLowerCase());
}

function handleScheduleGridZoom(event) {
  if (scheduleView !== "grid" || !event.ctrlKey) return;

  event.preventDefault();
  setScheduleGridZoom(scheduleGridZoom + (event.deltaY < 0 ? 0.1 : -0.1));
}

function handleGridTouchStart(event) {
  if (event.touches.length !== 2) return;

  cancelGridTaskMove();
  pinchStartDistance = getTouchDistance(event.touches);
  pinchStartZoom = scheduleGridZoom;
}

function handleGridTouchMove(event) {
  if (scheduleView !== "grid" || event.touches.length !== 2 || pinchStartDistance === 0) return;

  event.preventDefault();
  setScheduleGridZoom(pinchStartZoom * (getTouchDistance(event.touches) / pinchStartDistance));
}

function resetGridPinch() {
  pinchStartDistance = 0;
  pinchStartZoom = scheduleGridZoom;
}

function getTouchDistance(touches) {
  const [firstTouch, secondTouch] = touches;
  return Math.hypot(firstTouch.clientX - secondTouch.clientX, firstTouch.clientY - secondTouch.clientY);
}

function setScheduleGridZoom(value) {
  const nextZoom = clamp(value, 0.75, 2.2);
  if (nextZoom === scheduleGridZoom) return;

  scheduleGridZoom = nextZoom;
  updateScheduleGridZoom();
}

function updateScheduleGridZoom() {
  document.querySelectorAll(".day-timeline").forEach((timeline) => {
    timeline.style.setProperty("--timeline-height", `${getTimelineHeight(Number(timeline.dataset.totalMinutes))}px`);
  });
  updateScheduleGridZoomControls();
}

function updateScheduleGridZoomControls() {
  gridZoomLevel.textContent = `${Math.round(scheduleGridZoom * 100)}%`;
  gridZoomOutButton.disabled = scheduleGridZoom <= 0.75;
  gridZoomInButton.disabled = scheduleGridZoom >= 2.2;
  scheduleGrid.classList.toggle("compact-15", scheduleGridZoom <= 1.9);
  scheduleGrid.classList.toggle("compact-30", scheduleGridZoom <= 1.25);
}

function getTimelineHeight(totalMinutes) {
  return Math.round(totalMinutes * GRID_MINUTE_HEIGHT * scheduleGridZoom);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setScheduleAnchorDate(value) {
  if (!value) return;

  const nextDate = parseISODate(value);
  if (Number.isNaN(nextDate.getTime())) {
    scheduleDatePicker.value = scheduleAnchorDate;
    return;
  }

  scheduleAnchorDate = toDateInputValue(nextDate);
  render();
}

function shiftScheduleAnchorDate(amount) {
  setScheduleAnchorDate(toDateInputValue(addDays(parseISODate(scheduleAnchorDate), amount)));
}

function getScheduleNavigationStep() {
  return scheduleView === "grid" && scheduleGridRange.value === "week" ? 7 : 1;
}

function createStatsPanel(completedHistory) {
  const days = Number(statsRange.value);
  const dailyStats = buildDailyStats(completedHistory, days);
  const rangeCompleted = getCompletedTasksInStatsRange(completedHistory, days);
  const summary = summarizeStatsRange(dailyStats);
  const typeStats = buildCompletedTypeStats(rangeCompleted);

  return `
    <section class="stats-dashboard">
      ${createStatsKpiGrid(summary)}
      <article class="stat-card stat-card-wide stats-trend-card">
        <div class="stats-overview stats-overview-detailed">
          <div>
            <h3>${getStatsRangeLabel(days)}</h3>
            <p>xp trend, momentum, and daily consistency from completed tasks.</p>
          </div>
          <div class="stat-summary-row compact">
            <div>
              <span>Daily avg</span>
              <strong>${formatPoints(summary.averagePoints)}</strong>
            </div>
            <div>
              <span>Best day</span>
              <strong>${formatStatsDate(summary.bestDay.date, days)}</strong>
            </div>
          </div>
        </div>
        ${createStatsInsightStrip(summary, days)}
        ${createPointsChart(dailyStats, days)}
      </article>
      <div class="stats-detail-grid">
        ${createTaskTypeBreakdown(typeStats, summary.totalPoints)}
        ${createConsistencyPanel(dailyStats, summary)}
      </div>
    </section>
  `;
}

function renderWeeklyReportOverlay(completedHistory) {
  if (!weeklyReportOverlay) return;

  const reportKey = getCurrentWeeklyReportKey();
  if (!shouldShowWeeklyReportOverlay(reportKey)) {
    hideWeeklyReportOverlay();
    return;
  }

  weeklyReportOverlay.classList.add("visible");
  weeklyReportOverlay.innerHTML = createWeeklyReportModal(completedHistory);
}

function shouldShowWeeklyReportOverlay(reportKey) {
  if (today.getDay() !== 1) return false;

  return localStorage.getItem(getProfileStorageKey(WEEKLY_REPORT_SEEN_STORAGE_KEY)) !== reportKey;
}

function createWeeklyReportModal(completedHistory) {
  const report = buildWeeklyReport(completedHistory);
  const currentPeriod = `${formatDateHeading(report.current.startISO)} - ${formatDateHeading(report.current.endISO)}`;

  return `
    <section class="weekly-report-modal" role="dialog" aria-modal="true" aria-labelledby="weeklyReportModalTitle">
      <button class="close-button weekly-report-modal-close" data-weekly-report-action="close" type="button" aria-label="Close weekly report">x</button>
      <div class="weekly-report-modal-intro">
        <span class="report-kicker">Monday report</span>
        <h2 id="weeklyReportModalTitle">Your Weekly Report</h2>
        <p>${currentPeriod}. See how your xp, hours, and completed tasks changed compared with the week before.</p>
      </div>
      ${createWeeklyReport(completedHistory, { isModal: true })}
      <button class="primary-button weekly-report-modal-action" data-weekly-report-action="close" type="button">Keep going</button>
    </section>
  `;
}

function dismissWeeklyReportOverlay() {
  localStorage.setItem(getProfileStorageKey(WEEKLY_REPORT_SEEN_STORAGE_KEY), getCurrentWeeklyReportKey());
  queueCloudSave();
  hideWeeklyReportOverlay();
}

function hideWeeklyReportOverlay() {
  if (!weeklyReportOverlay) return;

  weeklyReportOverlay.classList.remove("visible");
  weeklyReportOverlay.innerHTML = "";
}

function getCurrentWeeklyReportKey() {
  const thisWeekStart = getCurrentWeekStart();
  const currentStart = addDays(thisWeekStart, -7);
  const currentEnd = addDays(thisWeekStart, -1);
  return `${toDateInputValue(currentStart)}:${toDateInputValue(currentEnd)}`;
}

function createWeeklyReport(completedHistory, options = {}) {
  const report = buildWeeklyReport(completedHistory);
  const bonusPoints = calculateWeeklyBonusPoints(report);
  const reportBadge = today.getDay() === 1 ? "Monday report ready" : "Updates every Monday";
  const currentPeriod = `${formatDateHeading(report.current.startISO)} - ${formatDateHeading(report.current.endISO)}`;
  const previousPeriod = `${formatDateHeading(report.previous.startISO)} - ${formatDateHeading(report.previous.endISO)}`;

  return `
    <section class="weekly-report-card ${options.isModal ? "weekly-report-card-modal" : "weekly-report-card-docked"}">
      <div class="weekly-report-header">
        <div>
          <span class="report-kicker">${reportBadge}</span>
          <h3>Weekly Report</h3>
          <p>${currentPeriod} compared with ${previousPeriod}.</p>
        </div>
        <div class="report-score-stack">
          <div class="report-score">
            <strong>${formatPoints(report.current.points)}</strong>
            <span>xp last week</span>
          </div>
          <div class="report-score bonus-score">
            <strong>+${formatPoints(bonusPoints)}</strong>
            <span>bonus xp</span>
          </div>
        </div>
      </div>
      <div class="weekly-metrics">
        ${createWeeklyMetric("xp", "points", report.current.points, report.previous.points, formatPoints)}
        ${createWeeklyMetric("Hours", null, report.current.hours, report.previous.hours, formatHours)}
        ${createWeeklyMetric("Tasks", null, report.current.tasks, report.previous.tasks, String)}
      </div>
      ${createWeeklyHighlights(report.current)}
      <p class="weekly-report-summary">${createWeeklyReportSummary(report)}</p>
    </section>
  `;
}

function buildWeeklyReport(completedHistory) {
  const thisWeekStart = getCurrentWeekStart();
  const currentStart = addDays(thisWeekStart, -7);
  const currentEnd = addDays(thisWeekStart, -1);
  const previousStart = addDays(thisWeekStart, -14);
  const previousEnd = addDays(thisWeekStart, -8);

  return {
    current: buildWeekMetrics(completedHistory, currentStart, currentEnd),
    previous: buildWeekMetrics(completedHistory, previousStart, previousEnd),
  };
}

function buildWeekMetrics(completedHistory, start, end) {
  const completed = completedHistory.filter((task) => {
    const taskDate = parseISODate(task.occurrenceDate);
    return taskDate >= start && taskDate <= end;
  });
  const minutes = completed.reduce((total, task) => total + calculateCompletedMinutes(task), 0);
  const points = completed.reduce((total, task) => total + calculatePoints(task), 0);

  return {
    startISO: toDateInputValue(start),
    endISO: toDateInputValue(end),
    tasks: completed.length,
    hours: minutes / 60,
    points,
    dailyStats: buildWeekDailyStats(completed, start),
    topType: getTopCompletedType(completed),
  };
}

function createWeeklyHighlights(metrics) {
  const bestDay = getBestReportDay(metrics.dailyStats);
  const quietDay = getQuietReportDay(metrics.dailyStats);
  const topType = metrics.topType;

  return `
    <div class="report-highlights">
      <article>
        <span>Best day</span>
        <strong>${formatShortWeekday(bestDay.date)}</strong>
        <small>${formatPoints(bestDay.points)} xp &middot; ${bestDay.tasks} tasks</small>
      </article>
      <article>
        <span>Quiet day</span>
        <strong>${formatShortWeekday(quietDay.date)}</strong>
        <small>${formatPoints(quietDay.points)} xp &middot; ${quietDay.tasks} tasks</small>
      </article>
      <article>
        <span>Average</span>
        <strong>${formatPoints(metrics.points / 7)}</strong>
        <small>xp per day</small>
      </article>
      <article>
        <span>Top type</span>
        <strong>${escapeHTML(topType.type)}</strong>
        <small>${formatPoints(topType.points)} xp from ${topType.tasks} tasks</small>
      </article>
    </div>
  `;
}

function buildWeekDailyStats(completed, start) {
  const stats = Array.from({ length: 7 }, (_, index) => ({
    date: toDateInputValue(addDays(start, index)),
    tasks: 0,
    points: 0,
  }));
  const statsByDate = new Map(stats.map((day) => [day.date, day]));

  completed.forEach((task) => {
    const day = statsByDate.get(task.occurrenceDate);
    if (!day) return;

    day.tasks += 1;
    day.points += calculatePoints(task);
  });

  return stats;
}

function getBestReportDay(dailyStats) {
  return dailyStats.reduce((best, day) =>
    day.points > best.points || (day.points === best.points && day.tasks > best.tasks) ? day : best,
  );
}

function getQuietReportDay(dailyStats) {
  return dailyStats.reduce((quiet, day) =>
    day.points < quiet.points || (day.points === quiet.points && day.tasks < quiet.tasks) ? day : quiet,
  );
}

function getTopCompletedType(completed) {
  const typeStats = new Map();

  completed.forEach((task) => {
    const stats = typeStats.get(task.type) ?? { type: task.type, tasks: 0, points: 0 };
    stats.tasks += 1;
    stats.points += calculatePoints(task);
    typeStats.set(task.type, stats);
  });

  return [...typeStats.values()].sort((first, second) => second.points - first.points || second.tasks - first.tasks)[0] ?? {
    type: "None yet",
    tasks: 0,
    points: 0,
  };
}

function formatShortWeekday(isoDate) {
  return parseISODate(isoDate).toLocaleDateString(undefined, { weekday: "short" });
}

function createWeeklyMetric(label, goalKey, current, previous, formatter) {
  const change = calculatePercentChange(current, previous);
  const goal = goalKey ? weeklyGoals[goalKey] : 0;
  const bonusPoints = calculateMetricBonusPoints(change, goal);
  const direction = current > previous ? "up" : current < previous ? "down" : "flat";
  const directionLabel = direction === "up" ? "increase" : direction === "down" ? "decrease" : "no change";
  const goalMarkup = goalKey
    ? `<div class="goal-result ${bonusPoints > 0 ? "met" : ""}">${createGoalResultText(goal, change, bonusPoints)}</div>`
    : "";

  return `
    <article class="weekly-metric ${direction}">
      <span>${label}</span>
      <strong>${formatter(current)}</strong>
      <div class="metric-change">${formatPercentChange(change)} ${directionLabel}</div>
      ${goalMarkup}
      <small>Previous: ${formatter(previous)}</small>
    </article>
  `;
}

function createGoalResultText(goal, change, bonusPoints) {
  if (goal === 0) return "No goal set";
  if (bonusPoints > 0) return `Goal +${goal}% met &middot; +${formatPoints(bonusPoints)} bonus xp`;

  const remaining = Math.max(goal - change, 0);
  return `Goal +${goal}% &middot; ${formatPoints(remaining)}% to go`;
}

function calculateWeeklyBonusPoints(report) {
  return calculateMetricBonusPoints(
    calculatePercentChange(report.current.points, report.previous.points),
    weeklyGoals.points,
  );
}

function calculateMetricBonusPoints(change, goal) {
  return goal > 0 && change >= goal ? goal : 0;
}

function createWeeklyReportSummary(report) {
  const trackedMetrics = ["points", "hours", "tasks"];
  const improvedCount = trackedMetrics.filter((metric) => report.current[metric] > report.previous[metric]).length;
  const decreasedCount = trackedMetrics.filter((metric) => report.current[metric] < report.previous[metric]).length;

  if (improvedCount === trackedMetrics.length) {
    return "Great week. xp, hours, and completed tasks all increased compared with the week before.";
  }

  if (decreasedCount === trackedMetrics.length) {
    return "This week was lighter across xp, hours, and tasks. The report gives you a clean reset for the next week.";
  }

  if (improvedCount === 0 && decreasedCount === 0) {
    return "Your completed work matched the previous week across all tracked areas.";
  }

  return `You improved in ${improvedCount} of 3 tracked areas compared with the week before.`;
}

function calculatePercentChange(current, previous) {
  if (previous === 0) return current === 0 ? 0 : 100;
  return ((current - previous) / previous) * 100;
}

function formatPercentChange(value) {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${formatPoints(Math.abs(value))}%`;
}

function formatHours(hours) {
  return Number.isInteger(hours) ? `${hours}h` : `${hours.toFixed(1)}h`;
}

function getCompletedTasksInStatsRange(completedHistory, days) {
  const start = addDays(startOfToday(new Date()), -(days - 1));
  const end = startOfToday(new Date());

  return completedHistory.filter((task) => {
    const taskDate = parseISODate(task.occurrenceDate);
    return taskDate >= start && taskDate <= end;
  });
}

function summarizeStatsRange(dailyStats) {
  const totalTasks = dailyStats.reduce((total, day) => total + day.tasks, 0);
  const totalPoints = dailyStats.reduce((total, day) => total + day.points, 0);
  const totalMinutes = dailyStats.reduce((total, day) => total + day.minutes, 0);
  const activeDays = dailyStats.filter((day) => day.tasks > 0).length;
  const activeStats = dailyStats.filter((day) => day.tasks > 0);
  const fallbackDay = { date: "", tasks: 0, points: 0, minutes: 0 };
  const bestDay = activeStats.length
    ? activeStats.reduce((best, day) =>
        day.points > best.points || (day.points === best.points && day.tasks > best.tasks) ? day : best,
      )
    : fallbackDay;
  const quietDay = activeStats.length
    ? activeStats.reduce((quiet, day) =>
        day.points < quiet.points || (day.points === quiet.points && day.tasks < quiet.tasks) ? day : quiet,
      )
    : fallbackDay;
  const splitIndex = Math.max(1, Math.floor(dailyStats.length / 2));
  const previousPoints = dailyStats.slice(0, splitIndex).reduce((total, day) => total + day.points, 0);
  const recentPoints = dailyStats.slice(splitIndex).reduce((total, day) => total + day.points, 0);

  return {
    totalTasks,
    totalPoints,
    totalMinutes,
    activeDays,
    bestDay,
    quietDay,
    previousPoints,
    recentPoints,
    averagePoints: dailyStats.length ? totalPoints / dailyStats.length : 0,
    averageMinutes: dailyStats.length ? totalMinutes / dailyStats.length : 0,
    consistency: dailyStats.length ? (activeDays / dailyStats.length) * 100 : 0,
    momentumChange: calculatePercentChange(recentPoints, previousPoints),
  };
}

function buildCompletedTypeStats(completed) {
  const typeStats = new Map();

  completed.forEach((task) => {
    const stats = typeStats.get(task.type) ?? { type: task.type, tasks: 0, points: 0, minutes: 0 };
    stats.tasks += 1;
    stats.points += calculatePoints(task);
    stats.minutes += calculateCompletedMinutes(task);
    typeStats.set(task.type, stats);
  });

  return [...typeStats.values()].sort(
    (first, second) => second.points - first.points || second.tasks - first.tasks || second.minutes - first.minutes,
  );
}

function createStatsKpiGrid(summary) {
  return `
    <div class="stats-kpi-grid">
      ${createStatsKpiCard("Total xp", formatPoints(summary.totalPoints), `${formatPoints(summary.averagePoints)} avg / day`, "xp")}
      ${createStatsKpiCard("Tracked time", formatMinutesAsHours(summary.totalMinutes), `${formatMinutesAsHours(Math.round(summary.averageMinutes))} avg / day`, "time")}
      ${createStatsKpiCard("Tasks done", summary.totalTasks, `${formatPoints(summary.totalTasks / Math.max(summary.activeDays, 1))} avg / active day`, "tasks")}
      ${createStatsKpiCard("Active days", `${summary.activeDays}`, `${formatPoints(summary.consistency)}% consistency`, "days")}
    </div>
  `;
}

function createStatsKpiCard(label, value, detail, modifier) {
  return `
    <article class="stats-kpi-card ${modifier}">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
    </article>
  `;
}

function createStatsInsightStrip(summary, days) {
  const momentumClass = summary.momentumChange > 0 ? "up" : summary.momentumChange < 0 ? "down" : "flat";
  const momentumLabel =
    summary.momentumChange > 0 ? "Recent xp is up" : summary.momentumChange < 0 ? "Recent xp is down" : "Recent xp is steady";

  return `
    <div class="stats-insight-strip">
      <article>
        <span>Best day</span>
        <strong>${formatStatsDate(summary.bestDay.date, days)}</strong>
        <small>${formatPoints(summary.bestDay.points)} xp &middot; ${summary.bestDay.tasks} tasks</small>
      </article>
      <article>
        <span>Quiet day</span>
        <strong>${formatStatsDate(summary.quietDay.date, days)}</strong>
        <small>${formatPoints(summary.quietDay.points)} xp &middot; ${summary.quietDay.tasks} tasks</small>
      </article>
      <article class="${momentumClass}">
        <span>Momentum</span>
        <strong>${formatPercentChange(summary.momentumChange)}</strong>
        <small>${momentumLabel}</small>
      </article>
    </div>
  `;
}

function createTaskTypeBreakdown(typeStats, totalPoints) {
  const rows = typeStats.slice(0, 6);

  if (!rows.length) {
    return `
      <article class="stat-card stats-detail-card">
        <h3>Task Mix</h3>
        <p class="stats-empty-note">Complete a task and Shedulr will show which types are earning the most xp.</p>
      </article>
    `;
  }

  return `
    <article class="stat-card stats-detail-card">
      <div class="detail-card-heading">
        <div>
          <h3>Task Mix</h3>
          <p>Top task types by xp in this range.</p>
        </div>
        <span>${rows.length} shown</span>
      </div>
      <div class="type-breakdown">
        ${rows.map((stats) => createTaskTypeBreakdownRow(stats, totalPoints)).join("")}
      </div>
    </article>
  `;
}

function createTaskTypeBreakdownRow(stats, totalPoints) {
  const typeStyle = getTaskTypeStyle(stats.type);
  const width = totalPoints > 0 ? Math.max((stats.points / totalPoints) * 100, 5) : 0;

  return `
    <article class="type-breakdown-row" style="--type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg}; --bar-width: ${width.toFixed(1)}%;">
      <div class="type-breakdown-topline">
        <strong>${escapeHTML(stats.type)}</strong>
        <span>${formatPoints(stats.points)} xp</span>
      </div>
      <div class="type-breakdown-bar" aria-hidden="true"><span></span></div>
      <small>${stats.tasks} tasks &middot; ${formatMinutesAsHours(stats.minutes)}</small>
    </article>
  `;
}

function createConsistencyPanel(dailyStats, summary) {
  return `
    <article class="stat-card stats-detail-card">
      <div class="detail-card-heading">
        <div>
          <h3>Consistency</h3>
          <p>Each square is one day in the selected range.</p>
        </div>
        <span>${formatPoints(summary.consistency)}%</span>
      </div>
      <div class="consistency-score">
        <strong>${summary.activeDays}</strong>
        <span>active days from ${dailyStats.length}</span>
      </div>
      <div class="consistency-grid" style="--consistency-days: ${Math.min(dailyStats.length, 30)};">
        ${dailyStats.map((day) => createConsistencyDay(day)).join("")}
      </div>
    </article>
  `;
}

function createConsistencyDay(day) {
  const dayOpacity = day.points > 0 ? clamp(0.28 + day.points / 160, 0.36, 0.9) : 0;
  const label = `${formatDateHeading(day.date)}: ${formatPoints(day.points)} xp, ${day.tasks} tasks`;

  return `
    <span
      class="consistency-day ${day.tasks > 0 ? "active" : ""}"
      style="--day-opacity: ${dayOpacity.toFixed(2)};"
      title="${escapeHTML(label)}"
      aria-label="${escapeHTML(label)}"
    ></span>
  `;
}

function formatStatsDate(isoDate, days) {
  if (!isoDate) return "No data";

  return parseISODate(isoDate).toLocaleDateString(undefined, {
    weekday: days <= 7 ? "short" : undefined,
    month: days > 7 ? "short" : undefined,
    day: days > 7 ? "numeric" : undefined,
  });
}

function buildDailyStats(completedHistory, days) {
  const start = addDays(startOfToday(new Date()), -(days - 1));
  const statsByDate = new Map();

  for (let index = 0; index < days; index += 1) {
    const date = toDateInputValue(addDays(start, index));
    statsByDate.set(date, { date, tasks: 0, points: 0, minutes: 0 });
  }

  completedHistory.forEach((task) => {
    const day = statsByDate.get(task.occurrenceDate);
    if (!day) return;

    day.tasks += 1;
    day.points += calculatePoints(task);
    day.minutes += calculateCompletedMinutes(task);
  });

  return [...statsByDate.values()];
}

function createPointsChart(dailyStats, days) {
  const width = 760;
  const height = 330;
  const chartLeft = 68;
  const chartRight = 26;
  const chartTop = 28;
  const chartBottom = 68;
  const chartWidth = width - chartLeft - chartRight;
  const chartHeight = height - chartTop - chartBottom;
  const values = dailyStats.map((day) => day.points);
  const maxValue = roundChartMax(Math.max(...values, 20));
  const points = values.map((value, index) => {
    const x =
      values.length === 1
        ? chartLeft + chartWidth / 2
        : chartLeft + (index / (values.length - 1)) * chartWidth;
    const y = chartTop + chartHeight - (value / maxValue) * chartHeight;
    return { x, y };
  });
  const linePoints = points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  const areaPoints = `${chartLeft},${chartTop + chartHeight} ${linePoints} ${width - chartRight},${chartTop + chartHeight}`;
  const yTicks = [0, maxValue * 0.25, maxValue * 0.5, maxValue * 0.75, maxValue];
  const yAxis = yTicks
    .map((tick) => {
      const y = chartTop + chartHeight - (tick / maxValue) * chartHeight;
      return `
        <line class="chart-grid" x1="${chartLeft}" y1="${y.toFixed(1)}" x2="${width - chartRight}" y2="${y.toFixed(1)}"></line>
        <text class="chart-axis-label chart-axis-y" x="${chartLeft - 12}" y="${(y + 4).toFixed(1)}">${formatPoints(tick)}</text>
      `;
    })
    .join("");
  const xAxis = getChartXTicks(dailyStats, days)
    .map((tick) => {
      const point = points[tick.index];
      return `
        <line class="chart-axis-tick" x1="${point.x.toFixed(1)}" y1="${chartTop + chartHeight}" x2="${point.x.toFixed(1)}" y2="${chartTop + chartHeight + 7}"></line>
        <text class="chart-axis-label chart-axis-x" x="${point.x.toFixed(1)}" y="${height - 30}">${escapeHTML(tick.label)}</text>
      `;
    })
    .join("");
  const dots = points
    .filter((_, index) => days <= 7 || index === values.length - 1)
    .map((point) => `<circle class="chart-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4"></circle>`)
    .join("");

  return `
    <svg class="line-chart detailed-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="xp earned over ${days} days">
      ${yAxis}
      <line class="chart-axis" x1="${chartLeft}" y1="${chartTop}" x2="${chartLeft}" y2="${chartTop + chartHeight}"></line>
      <line class="chart-axis" x1="${chartLeft}" y1="${chartTop + chartHeight}" x2="${width - chartRight}" y2="${chartTop + chartHeight}"></line>
      <text class="chart-axis-title chart-axis-title-y" x="18" y="${chartTop + chartHeight / 2}" transform="rotate(-90 18 ${chartTop + chartHeight / 2})">xp</text>
      <text class="chart-axis-title" x="${chartLeft + chartWidth / 2}" y="${height - 6}">Time</text>
      ${xAxis}
      <polygon class="chart-area" points="${areaPoints}"></polygon>
      <polyline class="chart-line" points="${linePoints}"></polyline>
      ${dots}
    </svg>
  `;
}

function roundChartMax(value) {
  const scale = value <= 40 ? 20 : value <= 200 ? 40 : 100;
  return Math.ceil(value / scale) * scale;
}

function getStatsRangeLabel(days) {
  if (days === 7) return "Last 7 days";
  if (days === 30) return "Last 30 days";
  return "Last 3 months";
}

function getChartXTicks(dailyStats, days) {
  if (days === 7) {
    return dailyStats.map((day, index) => ({
      index,
      label: parseISODate(day.date).toLocaleDateString(undefined, { weekday: "short" }),
    }));
  }

  const tickCount = days === 30 ? 6 : 7;
  const indexes = Array.from({ length: tickCount }, (_, index) =>
    Math.round((index / (tickCount - 1)) * (dailyStats.length - 1)),
  );

  return [...new Set(indexes)].map((index) => ({
    index,
    label: parseISODate(dailyStats[index].date).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    }),
  }));
}

function matchesCurrentFilter(task) {
  if (task.skipped) return false;

  const filter = scheduleFilter.value;
  const taskDateTime = new Date(`${task.occurrenceDate}T${task.time}`);
  const selectedDateStart = parseISODate(scheduleAnchorDate);

  if (filter === "today") return task.occurrenceDate === scheduleAnchorDate && !task.done;
  if (filter === "upcoming") return !task.done && taskDateTime >= selectedDateStart;
  if (filter === "done") return task.done;
  return true;
}

function toggleTaskCompletion(task, taskId, occurrenceDate) {
  if (task.id !== taskId) return task;

  if (!task.repeats) {
    if (!task.done) return { ...task, done: true };

    const { earnedPoints, actualMinutes, ...remainingTask } = task;
    return { ...remainingTask, done: false };
  }

  const completedDates = Array.isArray(task.completedDates) ? task.completedDates : [];
  const alreadyDone = completedDates.includes(occurrenceDate);
  const earnedPointsByDate = { ...(task.earnedPointsByDate ?? {}) };
  const actualMinutesByDate = { ...(task.actualMinutesByDate ?? {}) };

  if (alreadyDone) {
    delete earnedPointsByDate[occurrenceDate];
    delete actualMinutesByDate[occurrenceDate];
  }

  return {
    ...task,
    completedDates: alreadyDone
      ? completedDates.filter((date) => date !== occurrenceDate)
      : [...completedDates, occurrenceDate],
    earnedPointsByDate,
    actualMinutesByDate,
  };
}

function markTaskComplete(task, taskId, occurrenceDate, earnedPoints = null, actualMinutes = null) {
  if (task.id !== taskId) return task;
  const normalizedPoints = normalizeEarnedPoints(earnedPoints, task);
  const normalizedMinutes = normalizeActualMinutes(actualMinutes, task);

  if (!task.repeats) {
    return {
      ...task,
      done: true,
      earnedPoints: normalizedPoints,
      actualMinutes: normalizedMinutes,
    };
  }

  const completedDates = Array.isArray(task.completedDates) ? task.completedDates : [];
  const earnedPointsByDate = {
    ...(task.earnedPointsByDate ?? {}),
    [occurrenceDate]: normalizedPoints,
  };
  const actualMinutesByDate = {
    ...(task.actualMinutesByDate ?? {}),
    [occurrenceDate]: normalizedMinutes,
  };

  return {
    ...task,
    completedDates: completedDates.includes(occurrenceDate)
      ? completedDates
      : [...completedDates, occurrenceDate],
    earnedPointsByDate,
    actualMinutesByDate,
  };
}

function moveGridTask(taskId, occurrenceDate, targetDate, targetTime) {
  const sourceTask = tasks.find((task) => task.id === taskId);
  if (!sourceTask || !targetDate || !targetTime) return false;

  const sourceOccurrence = createOccurrence(sourceTask, occurrenceDate);
  if (sourceOccurrence.occurrenceDate === targetDate && sourceOccurrence.time === targetTime) return false;

  clearActiveTimerFor(taskId, occurrenceDate);

  if (!sourceTask.repeats) {
    tasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            date: targetDate,
            time: targetTime,
            skipped: false,
          }
        : task,
    );
    return true;
  }

  tasks = tasks.map((task) => detachRepeatingOccurrenceForMove(task, taskId, occurrenceDate));
  tasks.push(createSingleTaskFromOccurrence(sourceOccurrence, targetDate, targetTime, sourceOccurrence.done));
  return true;
}

function detachRepeatingOccurrenceForMove(task, taskId, occurrenceDate) {
  if (task.id !== taskId) return task;

  const skippedTask = skipTaskOccurrence(task, taskId, occurrenceDate);
  const earnedPointsByDate = { ...(skippedTask.earnedPointsByDate ?? {}) };
  const actualMinutesByDate = { ...(skippedTask.actualMinutesByDate ?? {}) };
  delete earnedPointsByDate[occurrenceDate];
  delete actualMinutesByDate[occurrenceDate];

  return {
    ...skippedTask,
    completedDates: (Array.isArray(skippedTask.completedDates) ? skippedTask.completedDates : [])
      .filter((date) => date !== occurrenceDate),
    earnedPointsByDate,
    actualMinutesByDate,
  };
}

function moveMissedTask(taskId, occurrenceDate, targetDate) {
  const sourceTask = tasks.find((task) => task.id === taskId);
  if (!sourceTask) return;

  if (!sourceTask.repeats) {
    tasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            date: targetDate,
            done: false,
            skipped: false,
          }
        : task,
    );
    return;
  }

  tasks = tasks.map((task) => skipTaskOccurrence(task, taskId, occurrenceDate));
  tasks.push(createSingleTaskFromOccurrence(createOccurrence(sourceTask, occurrenceDate), targetDate));
}

function createSingleTaskFromOccurrence(task, targetDate, targetTime = task.time, keepCompletion = false) {
  const isDone = keepCompletion && Boolean(task.done);

  return {
    id: crypto.randomUUID(),
    title: task.title,
    date: targetDate,
    time: targetTime,
    duration: Number(task.duration),
    type: task.type,
    priority: normalizePriority(task.priority),
    notes: task.notes ?? "",
    repeats: false,
    repeatDays: [],
    completedDates: [],
    skippedDates: [],
    done: isDone,
    skipped: false,
    earnedPoints: isDone ? task.earnedPoints : null,
    actualMinutes: isDone ? task.actualMinutes : null,
    createdAt: new Date().toISOString(),
  };
}

function skipTaskOccurrence(task, taskId, occurrenceDate) {
  if (task.id !== taskId) return task;

  if (!task.repeats) {
    return { ...task, skipped: true };
  }

  const skippedDates = Array.isArray(task.skippedDates) ? task.skippedDates : [];
  return {
    ...task,
    skippedDates: skippedDates.includes(occurrenceDate)
      ? skippedDates
      : [...skippedDates, occurrenceDate],
  };
}

function deleteMissedTask(currentTasks, taskId, occurrenceDate) {
  const taskToDelete = currentTasks.find((task) => task.id === taskId);
  if (!taskToDelete) return currentTasks;

  if (!taskToDelete.repeats) {
    return currentTasks.filter((task) => task.id !== taskId);
  }

  return currentTasks.map((task) => skipTaskOccurrence(task, taskId, occurrenceDate));
}

function isActiveTimerFor(task) {
  return (
    activeTimer?.taskId === task.id &&
    activeTimer?.occurrenceDate === task.occurrenceDate
  );
}

function isTimerComplete(timer) {
  return Boolean(timer) && getTimerRemainingMs(timer) === 0;
}

function syncActiveTimerWithTasks() {
  if (!activeTimer) return;

  const matchingTask = tasks.find((task) => task.id === activeTimer.taskId);
  if (!matchingTask) {
    clearActiveTimer();
    return;
  }

  const occurrence = createOccurrence(matchingTask, activeTimer.occurrenceDate);
  if (occurrence.done || occurrence.skipped) {
    clearActiveTimer();
  }
}

function renderFocusOverlay(occurrences) {
  if (!featureSettings.focusMode || !activeTimer) {
    focusOverlay.classList.remove("visible");
    focusOverlay.innerHTML = "";
    return;
  }

  const activeTask = occurrences.find((task) => isActiveTimerFor(task));
  if (!activeTask) {
    focusOverlay.classList.remove("visible");
    focusOverlay.innerHTML = "";
    return;
  }

  focusOverlay.classList.add("visible");
  focusOverlay.innerHTML = `
    <section class="focus-card" ${createTypeStyleAttribute(activeTask.type)}>
      <span class="report-kicker">Focus mode</span>
      <h2>${escapeHTML(activeTask.title)}</h2>
      <p>${escapeHTML(activeTask.type)} &middot; ${activeTask.duration} min &middot; ${formatTimeRange(activeTask)}</p>
      <strong class="focus-countdown" data-timer-countdown>${formatTimerRemaining(activeTimer)}</strong>
      <div class="focus-progress" aria-hidden="true">
        <span data-timer-progress style="width: ${calculateTimerProgress(activeTimer)}%"></span>
      </div>
      <div class="focus-actions">
        <button class="primary-button" data-focus-action="finish" data-active-finish type="button">
          Finish
        </button>
        <button class="secondary-button" data-focus-action="off" type="button">Turn off focus</button>
      </div>
    </section>
  `;
}

function clearActiveTimerFor(taskId, occurrenceDate) {
  if (activeTimer?.taskId === taskId && activeTimer?.occurrenceDate === occurrenceDate) {
    clearActiveTimer();
  }
}

function clearActiveTimer() {
  activeTimer = null;
  localStorage.removeItem(getProfileStorageKey(TIMER_STORAGE_KEY));
  stopTimerInterval();
  queueCloudSave();
}

function saveActiveTimer() {
  if (!activeTimer) return;
  localStorage.setItem(getProfileStorageKey(TIMER_STORAGE_KEY), JSON.stringify(activeTimer));
  queueCloudSave();
}

function loadActiveTimer() {
  try {
    const savedTimer = JSON.parse(localStorage.getItem(getProfileStorageKey(TIMER_STORAGE_KEY)));
    if (!savedTimer?.taskId || !savedTimer?.occurrenceDate || !savedTimer?.startedAt) return null;

    return {
      taskId: savedTimer.taskId,
      occurrenceDate: savedTimer.occurrenceDate,
      duration: Number(savedTimer.duration),
      startedAt: Number(savedTimer.startedAt),
    };
  } catch {
    return null;
  }
}

function ensureTimerInterval() {
  if (!activeTimer || timerInterval) return;
  timerInterval = setInterval(updateTimerDisplay, 1000);
}

function stopTimerInterval() {
  if (!timerInterval) return;
  clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimerDisplay() {
  if (!activeTimer) return;
  const timerComplete = isTimerComplete(activeTimer);

  document.querySelectorAll("[data-timer-countdown]").forEach((element) => {
    element.textContent = formatTimerRemaining(activeTimer);
    element.classList.toggle("time-up", timerComplete);
  });

  document.querySelectorAll("[data-active-finish]").forEach((button) => {
    button.disabled = false;
    button.title = timerComplete ? "Finish task" : "Finish now and earn xp for elapsed time";
  });

  document.querySelectorAll("[data-timer-progress]").forEach((element) => {
    element.style.width = `${calculateTimerProgress(activeTimer)}%`;
  });
}

function getTimerRemainingMs(timer) {
  const totalMs = Number(timer.duration) * 60 * 1000;
  const elapsedMs = Date.now() - Number(timer.startedAt);
  return Math.max(totalMs - elapsedMs, 0);
}

function calculateTimerElapsedMinutes(timer) {
  if (!timer) return 0;

  const duration = Number(timer.duration) || 0;
  const elapsedMinutes = (Date.now() - Number(timer.startedAt)) / 60000;
  return clamp(elapsedMinutes, 0, duration);
}

function calculateTimerEarnedPoints(timer) {
  return Math.round((calculateTimerElapsedMinutes(timer) / 30) * 10);
}

function calculateTimerProgress(timer) {
  const totalMs = Number(timer.duration) * 60 * 1000;
  if (!totalMs) return 0;

  return clamp((1 - getTimerRemainingMs(timer) / totalMs) * 100, 0, 100);
}

function formatTimerRemaining(timer) {
  const remainingSeconds = Math.ceil(getTimerRemainingMs(timer) / 1000);
  if (remainingSeconds <= 0) return "Time's up";

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;
  const minuteSecondLabel = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return hours > 0 ? `${hours}:${minuteSecondLabel}` : minuteSecondLabel;
}

function resetForm() {
  taskForm.reset();
  taskDateInput.value = todayISO;
  taskDurationInput.value = "30";
  taskTypeInput.value = BUILT_IN_TASK_TYPES[0];
  taskPriorityInput.value = "Medium";
  taskTemplateSelect.value = "";
  customTaskTypeInput.value = "";
  toggleCustomTypeInput();
}

function getSelectedRepeatDays() {
  return [...document.querySelectorAll('input[name="repeatDays"]:checked')]
    .map((input) => Number(input.value))
    .sort((a, b) => a - b);
}

function setRepeatDayForDate(dateValue) {
  const weekday = weekdayForISODate(dateValue);
  document.querySelectorAll('input[name="repeatDays"]').forEach((input) => {
    input.checked = Number(input.value) === weekday;
  });
}

function setRepeatDays(days) {
  const selectedDays = new Set((Array.isArray(days) ? days : []).map(Number));
  document.querySelectorAll('input[name="repeatDays"]').forEach((input) => {
    input.checked = selectedDays.has(Number(input.value));
  });
}

function createRepeatLabel(repeatDays) {
  if (!repeatDays.length) return "Weekly";
  if (repeatDays.length === 7) return "Every day";
  return `Weekly: ${repeatDays.map((day) => DAY_NAMES[day]).join(", ")}`;
}

function createPriorityChip(task) {
  if (!featureSettings.priorities) return "";

  const priority = normalizePriority(task.priority);
  return `<span class="chip priority-chip priority-${priority.toLowerCase()}">${priority}</span>`;
}

function createStreakChip(type) {
  if (!featureSettings.streaks) return "";

  const streak = currentTypeStreaks.get(type) ?? 0;
  return streak > 0 ? `<span class="chip streak-chip">${streak} day streak</span>` : "";
}

function buildTypeStreakMap(completedHistory) {
  const minutesByType = new Map();

  completedHistory.forEach((task) => {
    if (!minutesByType.has(task.type)) {
      minutesByType.set(task.type, new Map());
    }

    const minutesByDate = minutesByType.get(task.type);
    const minutes = minutesByDate.get(task.occurrenceDate) ?? 0;
    minutesByDate.set(task.occurrenceDate, minutes + calculateCompletedMinutes(task));
  });

  return new Map(
    [...minutesByType.entries()].map(([type, minutesByDate]) => {
      const qualifiedDates = new Set(
        [...minutesByDate.entries()]
          .filter(([, minutes]) => minutes >= STREAK_MINUTES_TO_KEEP)
          .map(([date]) => date),
      );
      return [type, calculateCurrentStreak(qualifiedDates)];
    }),
  );
}

function calculateCurrentStreak(dateSet) {
  let cursor = startOfToday(today);
  let streak = 0;

  if (!dateSet.has(todayISO)) {
    cursor = addDays(cursor, -1);
  }

  while (dateSet.has(toDateInputValue(cursor))) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }

  return streak;
}

function normalizePriority(value) {
  const priority = String(value ?? "Medium");
  return PRIORITY_LEVELS.includes(priority) ? priority : "Medium";
}

function calculatePoints(task) {
  if (task.done && Number.isFinite(Number(task.earnedPoints))) {
    return Math.round(Number(task.earnedPoints));
  }

  return Math.round((Number(task.duration) / 30) * 10);
}

function calculateCompletedMinutes(task) {
  if (task.done && Number.isFinite(Number(task.actualMinutes))) {
    return Math.round(Number(task.actualMinutes));
  }

  return Number(task.duration) || 0;
}

function normalizeEarnedPoints(value, task) {
  return Number.isFinite(Number(value)) ? Math.max(Math.round(Number(value)), 0) : calculatePoints(task);
}

function normalizeActualMinutes(value, task) {
  const fallback = Number(task.duration) || 0;
  return Number.isFinite(Number(value)) ? Math.round(clamp(Number(value), 0, fallback)) : fallback;
}

function formatPoints(points) {
  return Number.isInteger(points) ? String(points) : points.toFixed(1);
}

function formatMinutesAsHours(minutes) {
  if (minutes === 0) return "0h";
  if (minutes < 60) return `${minutes}m`;

  const hours = minutes / 60;
  return Number.isInteger(hours) ? `${hours}h` : `${hours.toFixed(1)}h`;
}

async function requestTaskReminderPermission() {
  if (!supportsBrowserNotifications()) {
    showAppToast("Task reminders on", "Shedulr will show reminders inside the app on this device.");
    return false;
  }

  try {
    if (Notification.permission === "default") {
      await Notification.requestPermission();
    }
  } catch {
    showAppToast("Task reminders on", "Browser notifications could not be requested, so Shedulr will use in-app reminders.");
    return false;
  }

  if (Notification.permission === "granted") {
    showAppToast("Notifications on", "Shedulr can now remind you when tasks are due.");
    return true;
  }

  showAppToast("Task reminders on", "Browser notifications are blocked, so Shedulr will use in-app reminders.");
  return false;
}

function supportsBrowserNotifications() {
  return "Notification" in window;
}

function ensureTaskReminderInterval() {
  if (!featureSettings.taskReminders) {
    stopTaskReminderInterval();
    return;
  }

  if (taskReminderInterval) return;
  taskReminderInterval = setInterval(checkTaskReminders, TASK_REMINDER_INTERVAL_MS);
}

function stopTaskReminderInterval() {
  if (!taskReminderInterval) return;
  clearInterval(taskReminderInterval);
  taskReminderInterval = null;
}

function checkTaskReminders(occurrences = reminderOccurrences) {
  if (!featureSettings.taskReminders) return;

  const now = new Date();
  const currentDate = toDateInputValue(now);
  const tasksToCheck = occurrences.length > 0 ? occurrences : buildScheduleOccurrences();

  tasksToCheck
    .filter((task) => task.occurrenceDate === currentDate && !task.done && !task.skipped && !isActiveTimerFor(task))
    .forEach((task) => {
      const reminderKey = createTaskReminderKey(task);
      if (sentTaskReminderKeys.has(reminderKey)) return;

      const taskDateTime = new Date(`${task.occurrenceDate}T${task.time}`);
      const msSinceTaskTime = now - taskDateTime;

      if (msSinceTaskTime < 0 || msSinceTaskTime > TASK_REMINDER_GRACE_MS) return;

      sentTaskReminderKeys.add(reminderKey);
      sendTaskReminder(task);
    });
}

function createTaskReminderKey(task) {
  return `${activeProfileId}:${task.id}:${task.occurrenceDate}:${task.time}`;
}

function sendTaskReminder(task) {
  const title = "Task time";
  const body = `${task.title} is scheduled now (${formatTimeRange(task)}).`;

  if (supportsBrowserNotifications() && Notification.permission === "granted") {
    try {
      new Notification("Shedulr", {
        body,
        tag: createTaskReminderKey(task),
        renotify: false,
      });
    } catch {
      // Some browsers block notifications for file-based apps; the in-app toast still appears.
    }
  }

  showAppToast(title, body);
}

function showAppToast(title, message) {
  if (!appToast) return;

  clearTimeout(appToastTimer);
  appToast.classList.add("visible");
  appToast.innerHTML = `
    <div>
      <strong>${escapeHTML(title)}</strong>
      <p>${escapeHTML(message)}</p>
    </div>
    <button class="delete-x-button" data-toast-action="close" type="button" aria-label="Dismiss">x</button>
  `;

  appToastTimer = setTimeout(hideAppToast, 6200);
}

function hideAppToast() {
  if (!appToast) return;

  clearTimeout(appToastTimer);
  appToastTimer = null;
  appToast.classList.remove("visible");
  appToast.innerHTML = "";
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = currentTheme;
  localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  applyAccentTheme(currentAccentTheme, false);

  document.querySelectorAll(".theme-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === currentTheme);
  });
  queueCloudSave();
}

function applyAccentTheme(theme, shouldSave = true) {
  currentAccentTheme = ACCENT_THEMES[theme] ? theme : "green";
  const accent = ACCENT_THEMES[currentAccentTheme][currentTheme];

  [document.documentElement, document.body].forEach((element) => {
    element.dataset.accentTheme = currentAccentTheme;
    element.style.setProperty("--green", accent.accent);
    element.style.setProperty("--green-dark", accent.strong);
    element.style.setProperty("--accent-soft", accent.soft);
    element.style.setProperty("--accent-faint", accent.faint);
    element.style.setProperty("--accent-border", accent.border);
  });

  if (shouldSave) {
    localStorage.setItem(ACCENT_STORAGE_KEY, currentAccentTheme);
    queueCloudSave();
  }

  colourThemeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.colourTheme === currentAccentTheme);
  });
}

function applyFeatureSettingsToControls() {
  featureToggleInputs.forEach((input) => {
    input.checked = Boolean(featureSettings[input.dataset.featureToggle]);
  });
  applyFeatureVisibility();
}

function applyFeatureVisibility() {
  priorityField.classList.toggle("hidden", !featureSettings.priorities);
  topStreakPill?.classList.toggle("hidden", !featureSettings.streaks);
  ensureTaskReminderInterval();
}

function openProfileMenu() {
  closeMenu(false);
  closeProfileEditor();
  renderProfileControls();
  profileMenu.classList.add("open");
  drawerOverlay.classList.add("open");
  profileButton.setAttribute("aria-expanded", "true");
}

function closeProfileMenu(shouldCloseOverlay = true) {
  profileMenu.classList.remove("open");
  profileButton.setAttribute("aria-expanded", "false");
  if (shouldCloseOverlay && !sideMenu.classList.contains("open")) {
    drawerOverlay.classList.remove("open");
  }
}

function openMenu() {
  closeProfileMenu(false);
  sideMenu.classList.add("open");
  drawerOverlay.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu(shouldCloseOverlay = true) {
  sideMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  if (shouldCloseOverlay && !profileMenu.classList.contains("open")) {
    drawerOverlay.classList.remove("open");
  }
}

function closeAllMenus() {
  closeMenu(false);
  closeProfileMenu(false);
  drawerOverlay.classList.remove("open");
}

async function initializeCloudAuth() {
  if (!supabaseClient) {
    setCloudStatus("Cloud login could not load. Check your internet connection and refresh the app.");
    authForm.classList.add("hidden");
    authSession.classList.add("hidden");
    return;
  }

  setCloudStatus("Checking cloud login...");
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    setCloudStatus(error.message);
    return;
  }

  cloudUser = data.session?.user ?? null;
  updateAuthUI();
  if (cloudUser) {
    await loadCloudData();
  }

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    const nextUser = session?.user ?? null;
    const userChanged = nextUser?.id !== cloudUser?.id;
    cloudUser = nextUser;
    updateAuthUI();

    if (cloudUser && userChanged) {
      await loadCloudData();
    }
  });
}

async function signInWithEmail(event) {
  event.preventDefault();
  if (!supabaseClient) return;

  const credentials = getAuthCredentials();
  if (!credentials) return;

  setCloudStatus("Logging in...");
  const { data, error } = await supabaseClient.auth.signInWithPassword(credentials);
  if (error) {
    setCloudStatus(error.message);
    return;
  }

  cloudUser = data.user;
  updateAuthUI();
  await loadCloudData();
}

async function signUpWithEmail() {
  if (!supabaseClient) return;

  const credentials = getAuthCredentials();
  if (!credentials) return;

  setCloudStatus("Creating account...");
  const { data, error } = await supabaseClient.auth.signUp(credentials);
  if (error) {
    setCloudStatus(error.message);
    return;
  }

  if (data.session?.user) {
    cloudUser = data.session.user;
    updateAuthUI();
    await saveCloudDataNow();
    return;
  }

  setCloudStatus("Account created. Check your email to confirm it, then log in.");
}

async function signOut() {
  if (!supabaseClient) return;

  setCloudStatus("Logging out...");
  await supabaseClient.auth.signOut();
  cloudUser = null;
  lastCloudSaveSnapshot = "";
  updateAuthUI();
}

function getAuthCredentials() {
  const email = authEmailInput.value.trim();
  const password = authPasswordInput.value;

  if (!email) {
    authEmailInput.focus();
    return null;
  }

  if (password.length < 6) {
    authPasswordInput.focus();
    setCloudStatus("Password must be at least 6 characters.");
    return null;
  }

  return { email, password };
}

function updateAuthUI() {
  const signedIn = Boolean(cloudUser);
  authForm.classList.toggle("hidden", signedIn);
  authSession.classList.toggle("hidden", !signedIn);
  authUserLabel.textContent = cloudUser?.email ?? "Signed in";

  if (signedIn) {
    authPasswordInput.value = "";
    setCloudStatus("Signed in. Changes will sync to your cloud account.");
  } else {
    setCloudStatus("Sign in to sync this schedule across your devices.");
  }
}

function setCloudStatus(message) {
  cloudStatus.textContent = message;
}

async function loadCloudData() {
  if (!supabaseClient) {
    setCloudStatus("Cloud login is not loaded. Check your internet connection and refresh.");
    return;
  }

  if (!cloudUser) {
    setCloudStatus("Log in first, then load your cloud schedule.");
    return;
  }

  if (isLoadingCloudData) return;

  isLoadingCloudData = true;
  setCloudButtonsBusy(true);
  setCloudStatus("Loading cloud schedule...");

  const { data, error } = await supabaseClient
    .from(CLOUD_DATA_TABLE)
    .select("data")
    .eq("user_id", cloudUser.id)
    .maybeSingle();

  isLoadingCloudData = false;
  setCloudButtonsBusy(false);

  if (error) {
    setCloudStatus(getCloudErrorMessage(error, "load"));
    console.error(error);
    return;
  }

  if (data?.data?.version) {
    applyCloudSnapshot(data.data);
    setCloudStatus("Cloud schedule loaded. Make sure every device uses this same login email.");
    return;
  }

  setCloudStatus("No cloud schedule found yet. Upload this device to create one.");
}

function queueCloudSave() {
  if (!supabaseClient || !cloudUser || isApplyingCloudData) return;

  clearTimeout(cloudSaveTimeout);
  cloudSaveTimeout = setTimeout(saveCloudDataNow, 700);
}

async function saveCloudDataNow() {
  if (!supabaseClient) {
    setCloudStatus("Cloud login is not loaded. Check your internet connection and refresh.");
    return;
  }

  if (!cloudUser) {
    setCloudStatus("Log in first, then upload this device.");
    return;
  }

  if (isApplyingCloudData) return;

  clearTimeout(cloudSaveTimeout);
  setCloudButtonsBusy(true);
  const snapshot = createCloudSnapshot();
  const serializedSnapshot = JSON.stringify(snapshot);

  if (serializedSnapshot === lastCloudSaveSnapshot) {
    setCloudStatus("Already synced.");
    setCloudButtonsBusy(false);
    return;
  }

  setCloudStatus("Syncing schedule...");
  const { error } = await supabaseClient
    .from(CLOUD_DATA_TABLE)
    .upsert(
      {
        user_id: cloudUser.id,
        data: snapshot,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );

  if (error) {
    setCloudStatus(getCloudErrorMessage(error, "upload"));
    setCloudButtonsBusy(false);
    console.error(error);
    return;
  }

  lastCloudSaveSnapshot = serializedSnapshot;
  setCloudButtonsBusy(false);
  setCloudStatus("Uploaded just now. Log in with this same email on the other device, then tap Load cloud.");
}

function setCloudButtonsBusy(isBusy) {
  loadCloudButton.disabled = isBusy;
  syncNowButton.disabled = isBusy;
}

function getCloudErrorMessage(error, action) {
  const message = String(error?.message ?? "");
  if (message.toLowerCase().includes("relation") || message.toLowerCase().includes("does not exist")) {
    return "Cloud table is missing. Run supabase-setup.sql in Supabase SQL Editor first.";
  }

  if (message.toLowerCase().includes("row-level security") || message.toLowerCase().includes("permission")) {
    return "Supabase security rules are blocking sync. Run supabase-setup.sql again in SQL Editor.";
  }

  if (message.toLowerCase().includes("jwt") || message.toLowerCase().includes("auth")) {
    return "Login expired. Log out, log back in, then try again.";
  }

  return `Could not ${action} yet: ${message || "check your Supabase setup and internet connection."}`;
}

function createCloudSnapshot() {
  return {
    version: 1,
    profiles,
    activeProfileId,
    theme: currentTheme,
    accent: currentAccentTheme,
    featureSettings: normalizeFeatureSettings(featureSettings),
    profileData: Object.fromEntries(profiles.map((profile) => [profile.id, createProfileCloudData(profile.id)])),
  };
}

function createProfileCloudData(profileId) {
  return {
    tasks: readProfileJSON(STORAGE_KEY, profileId, []),
    customTaskTypes: readProfileJSON(TYPE_STORAGE_KEY, profileId, []),
    weeklyGoals: readProfileJSON(GOAL_STORAGE_KEY, profileId, {}),
    taskTemplates: readProfileJSON(TEMPLATE_STORAGE_KEY, profileId, []),
    activeTimer: readProfileJSON(TIMER_STORAGE_KEY, profileId, null),
    weeklyReportSeenKey: localStorage.getItem(getProfileStorageKey(WEEKLY_REPORT_SEEN_STORAGE_KEY, profileId)) ?? "",
    dismissedOverlapSignature: localStorage.getItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY, profileId)) ?? "",
    missedTasksCollapsed: localStorage.getItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY, profileId)) === "true",
  };
}

function applyCloudSnapshot(snapshot) {
  isApplyingCloudData = true;

  try {
    profiles = normalizeCloudProfiles(snapshot.profiles);
    activeProfileId = profiles.some((profile) => profile.id === snapshot.activeProfileId)
      ? snapshot.activeProfileId
      : profiles[0].id;
    currentTheme = snapshot.theme === "dark" ? "dark" : "light";
    currentAccentTheme = ACCENT_THEMES[snapshot.accent] ? snapshot.accent : "green";
    featureSettings = normalizeFeatureSettings(snapshot.featureSettings ?? {});

    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profiles));
    localStorage.setItem(ACTIVE_PROFILE_STORAGE_KEY, activeProfileId);
    localStorage.setItem(FEATURE_STORAGE_KEY, JSON.stringify(featureSettings));

    const profileData = snapshot.profileData && typeof snapshot.profileData === "object" ? snapshot.profileData : {};
    profiles.forEach((profile) => writeProfileCloudData(profile.id, profileData[profile.id] ?? {}));

    stopTimerInterval();
    tasks = loadTasks();
    customTaskTypes = mergeCustomTaskTypes(loadCustomTaskTypes(), tasks.map((task) => task.type));
    weeklyGoals = loadWeeklyGoals();
    taskTemplates = loadTaskTemplates();
    dismissedOverlapSignature = localStorage.getItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY)) ?? "";
    missedTasksCollapsed = localStorage.getItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY)) === "true";
    activeTimer = loadActiveTimer();

    saveCustomTaskTypes();
    renderProfileControls();
    renderTaskTypeOptions();
    renderTaskTemplateOptions();
    applyWeeklyGoalsToControls();
    applyFeatureSettingsToControls();
    applyTheme(currentTheme);
    applyAccentTheme(currentAccentTheme);
    resetForm();
    render();
  } finally {
    isApplyingCloudData = false;
    lastCloudSaveSnapshot = JSON.stringify(createCloudSnapshot());
  }
}

function normalizeCloudProfiles(savedProfiles) {
  const normalizedProfiles = Array.isArray(savedProfiles)
    ? savedProfiles.map(normalizeProfile).filter(Boolean)
    : [];

  return normalizedProfiles.length > 0 ? normalizedProfiles : [createDefaultProfile()];
}

function writeProfileCloudData(profileId, data) {
  writeProfileJSON(STORAGE_KEY, profileId, normalizeTasks(Array.isArray(data.tasks) ? data.tasks : []));
  writeProfileJSON(TYPE_STORAGE_KEY, profileId, mergeCustomTaskTypes(Array.isArray(data.customTaskTypes) ? data.customTaskTypes : [], []));
  writeProfileJSON(GOAL_STORAGE_KEY, profileId, normalizeWeeklyGoals(data.weeklyGoals ?? {}));
  writeProfileJSON(
    TEMPLATE_STORAGE_KEY,
    profileId,
    Array.isArray(data.taskTemplates)
      ? data.taskTemplates.map(normalizeTaskTemplate).filter((template) => template.title && template.type)
      : [],
  );

  if (data.activeTimer) {
    writeProfileJSON(TIMER_STORAGE_KEY, profileId, data.activeTimer);
  } else {
    localStorage.removeItem(getProfileStorageKey(TIMER_STORAGE_KEY, profileId));
  }

  const weeklyReportSeenKey = String(data.weeklyReportSeenKey ?? "");
  if (weeklyReportSeenKey) {
    localStorage.setItem(getProfileStorageKey(WEEKLY_REPORT_SEEN_STORAGE_KEY, profileId), weeklyReportSeenKey);
  } else {
    localStorage.removeItem(getProfileStorageKey(WEEKLY_REPORT_SEEN_STORAGE_KEY, profileId));
  }

  const overlapSignature = String(data.dismissedOverlapSignature ?? "");
  if (overlapSignature) {
    localStorage.setItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY, profileId), overlapSignature);
  } else {
    localStorage.removeItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY, profileId));
  }

  localStorage.setItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY, profileId), String(Boolean(data.missedTasksCollapsed)));
}

function readProfileJSON(key, profileId, fallback) {
  try {
    const value = localStorage.getItem(getProfileStorageKey(key, profileId));
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeProfileJSON(key, profileId, value) {
  localStorage.setItem(getProfileStorageKey(key, profileId), JSON.stringify(value));
}

function createProfile(event) {
  event.preventDefault();
  const name = normalizeProfileName(newProfileNameInput.value);
  if (!name) {
    newProfileNameInput.focus();
    return;
  }

  const profile = {
    id: createId("profile"),
    name,
    avatarDataUrl: "",
    createdAt: new Date().toISOString(),
  };

  profiles = [...profiles, profile];
  saveProfiles();
  newProfileNameInput.value = "";
  switchProfile(profile.id);
}

function handleProfileListClick(event) {
  const button = event.target.closest("button[data-profile-action]");
  if (!button) return;

  const profileId = button.dataset.profileId;
  if (button.dataset.profileAction === "switch") {
    switchProfile(profileId);
  }

  if (button.dataset.profileAction === "delete") {
    deleteProfile(profileId);
  }
}

function openProfileEditor() {
  const activeProfile = getActiveProfile();
  editProfileNameInput.value = activeProfile.name;
  profileEditForm.classList.remove("hidden");
  editProfileNameInput.focus();
  editProfileNameInput.select();
}

function closeProfileEditor() {
  profileEditForm.classList.add("hidden");
  editProfileNameInput.value = "";
}

function saveEditedProfile(event) {
  event.preventDefault();
  const name = normalizeProfileName(editProfileNameInput.value);
  if (!name) {
    editProfileNameInput.focus();
    return;
  }

  updateActiveProfile({ name });
  closeProfileEditor();
  setCloudStatus("Profile updated.");
}

async function updateProfilePhoto(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setCloudStatus("Choose an image file for your profile photo.");
    profilePhotoInput.value = "";
    return;
  }

  try {
    const avatarDataUrl = await createProfilePhotoDataUrl(file);
    updateActiveProfile({ avatarDataUrl });
    setCloudStatus("Profile photo saved.");
  } catch (error) {
    console.error(error);
    setCloudStatus("Could not use that photo. Try a different image.");
  } finally {
    profilePhotoInput.value = "";
  }
}

function removeProfilePhoto() {
  updateActiveProfile({ avatarDataUrl: "" });
  setCloudStatus("Profile photo removed.");
}

function updateActiveProfile(changes) {
  profiles = profiles.map((profile) =>
    profile.id === activeProfileId
      ? {
          ...profile,
          ...changes,
        }
      : profile,
  );
  saveProfiles();
  renderProfileControls();
}

function createProfilePhotoDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resizeProfilePhoto(String(reader.result)).then(resolve).catch(reject));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function resizeProfilePhoto(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      const size = 256;
      const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
      const sourceX = Math.max((image.naturalWidth - sourceSize) / 2, 0);
      const sourceY = Math.max((image.naturalHeight - sourceSize) / 2, 0);

      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d");
      context.drawImage(image, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    });
    image.addEventListener("error", reject);
    image.src = source;
  });
}

function switchProfile(profileId) {
  if (!profiles.some((profile) => profile.id === profileId)) return;
  closeProfileEditor();
  if (profileId === activeProfileId) {
    closeProfileMenu();
    return;
  }

  activeProfileId = profileId;
  localStorage.setItem(ACTIVE_PROFILE_STORAGE_KEY, activeProfileId);
  queueCloudSave();
  stopTimerInterval();
  tasks = loadTasks();
  customTaskTypes = mergeCustomTaskTypes(loadCustomTaskTypes(), tasks.map((task) => task.type));
  weeklyGoals = loadWeeklyGoals();
  taskTemplates = loadTaskTemplates();
  dismissedOverlapSignature = localStorage.getItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY)) ?? "";
  missedTasksCollapsed = localStorage.getItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY)) === "true";
  activeTimer = loadActiveTimer();
  saveCustomTaskTypes();
  renderProfileControls();
  renderTaskTypeOptions();
  renderTaskTemplateOptions();
  applyWeeklyGoalsToControls();
  resetForm();
  render();
  closeProfileMenu();
}

function deleteProfile(profileId) {
  if (profiles.length <= 1) return;

  const deletingActiveProfile = profileId === activeProfileId;
  profiles = profiles.filter((profile) => profile.id !== profileId);
  PROFILE_SCOPED_STORAGE_KEYS.forEach((key) => {
    localStorage.removeItem(getProfileStorageKey(key, profileId));
  });
  saveProfiles();

  if (deletingActiveProfile) {
    switchProfile(profiles[0].id);
    return;
  }

  renderProfileControls();
}

function renderProfileControls() {
  const activeProfile = getActiveProfile();
  renderProfileAvatar(profileAvatar, activeProfile);
  renderProfileAvatar(profileAvatarLarge, activeProfile);
  profileNameLabel.textContent = activeProfile.name;
  activeProfileName.textContent = activeProfile.name;
  removeProfilePhotoButton.disabled = !activeProfile.avatarDataUrl;

  profileList.innerHTML = profiles.map((profile) => createProfileRow(profile, activeProfile.id)).join("");
}

function createProfileRow(profile, selectedProfileId) {
  const isActive = profile.id === selectedProfileId;
  const createdLabel = profile.createdAt ? `Created ${formatShortDate(profile.createdAt)}` : "Saved profile";
  return `
    <div class="profile-row ${isActive ? "active" : ""}">
      ${createProfileAvatarMarkup(profile)}
      <div>
        <strong>${escapeHTML(profile.name)}</strong>
        <small>${escapeHTML(createdLabel)}</small>
      </div>
      <button class="secondary-button" type="button" data-profile-action="switch" data-profile-id="${escapeHTML(profile.id)}" ${isActive ? "disabled" : ""}>
        ${isActive ? "Active" : "Switch"}
      </button>
      <button class="danger-button delete-x-button" type="button" data-profile-action="delete" data-profile-id="${escapeHTML(profile.id)}" title="Delete" aria-label="Delete" ${profiles.length <= 1 ? "disabled" : ""}>
        x
      </button>
    </div>
  `;
}

function renderProfileAvatar(element, profile) {
  element.innerHTML = createProfileAvatarContent(profile);
}

function createProfileAvatarMarkup(profile) {
  return `<span class="profile-avatar" aria-hidden="true">${createProfileAvatarContent(profile)}</span>`;
}

function createProfileAvatarContent(profile) {
  const avatarDataUrl = normalizeAvatarDataUrl(profile?.avatarDataUrl);
  if (avatarDataUrl) {
    return `<img src="${avatarDataUrl}" alt="" />`;
  }

  return escapeHTML(getProfileInitials(profile?.name));
}

function getActiveProfile() {
  return profiles.find((profile) => profile.id === activeProfileId) ?? profiles[0];
}

function saveProfiles() {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profiles));
  queueCloudSave();
}

function loadProfiles() {
  try {
    const savedProfiles = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY)) ?? [];
    const normalizedProfiles = savedProfiles.map(normalizeProfile).filter(Boolean);
    return normalizedProfiles.length > 0 ? normalizedProfiles : [createDefaultProfile()];
  } catch {
    return [createDefaultProfile()];
  }
}

function normalizeProfile(profile) {
  const name = normalizeProfileName(profile?.name);
  if (!name) return null;

  return {
    id: String(profile.id || createId("profile")),
    name,
    avatarDataUrl: normalizeAvatarDataUrl(profile.avatarDataUrl),
    createdAt: profile.createdAt || new Date().toISOString(),
  };
}

function createDefaultProfile() {
  return {
    id: "default",
    name: "My Profile",
    avatarDataUrl: "",
    createdAt: new Date().toISOString(),
  };
}

function getSavedActiveProfileId(savedProfiles) {
  const savedProfileId = localStorage.getItem(ACTIVE_PROFILE_STORAGE_KEY);
  return savedProfiles.some((profile) => profile.id === savedProfileId)
    ? savedProfileId
    : savedProfiles[0].id;
}

function migrateLegacyProfileData() {
  PROFILE_SCOPED_STORAGE_KEYS.forEach((key) => {
    const legacyValue = localStorage.getItem(key);
    const scopedKey = getProfileStorageKey(key);
    if (legacyValue !== null && localStorage.getItem(scopedKey) === null) {
      localStorage.setItem(scopedKey, legacyValue);
    }
  });
  saveProfiles();
  localStorage.setItem(ACTIVE_PROFILE_STORAGE_KEY, activeProfileId);
}

function getProfileStorageKey(key, profileId = activeProfileId) {
  return `${key}.${profileId}`;
}

function normalizeProfileName(name) {
  return String(name ?? "").trim().replace(/\s+/g, " ").slice(0, 32);
}

function getProfileInitials(name) {
  const words = normalizeProfileName(name).split(" ").filter(Boolean);
  const initials = words.length > 1
    ? `${words[0][0]}${words[1][0]}`
    : words[0]?.slice(0, 2);

  return (initials || "ME").toUpperCase();
}

function normalizeAvatarDataUrl(value) {
  const avatar = String(value ?? "");
  return avatar.startsWith("data:image/") && avatar.length < 250000 ? avatar : "";
}

function createId(prefix) {
  return `${prefix}-${crypto.randomUUID()}`;
}

function formatShortDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "recently";

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

function saveTasks() {
  localStorage.setItem(getProfileStorageKey(STORAGE_KEY), JSON.stringify(tasks));
  queueCloudSave();
}

function saveCustomTaskTypes() {
  localStorage.setItem(getProfileStorageKey(TYPE_STORAGE_KEY), JSON.stringify(customTaskTypes));
  queueCloudSave();
}

function saveWeeklyGoals() {
  localStorage.setItem(getProfileStorageKey(GOAL_STORAGE_KEY), JSON.stringify(weeklyGoals));
  queueCloudSave();
}

function saveFeatureSettings() {
  localStorage.setItem(FEATURE_STORAGE_KEY, JSON.stringify(featureSettings));
  queueCloudSave();
}

function saveTaskTemplates() {
  localStorage.setItem(getProfileStorageKey(TEMPLATE_STORAGE_KEY), JSON.stringify(taskTemplates));
  queueCloudSave();
}

function loadTasks() {
  try {
    return normalizeTasks(JSON.parse(localStorage.getItem(getProfileStorageKey(STORAGE_KEY))) ?? []);
  } catch {
    return [];
  }
}

function loadCustomTaskTypes() {
  try {
    return mergeCustomTaskTypes(JSON.parse(localStorage.getItem(getProfileStorageKey(TYPE_STORAGE_KEY))) ?? [], []);
  } catch {
    return [];
  }
}

function loadWeeklyGoals() {
  try {
    return normalizeWeeklyGoals(JSON.parse(localStorage.getItem(getProfileStorageKey(GOAL_STORAGE_KEY))) ?? {});
  } catch {
    return normalizeWeeklyGoals({});
  }
}

function loadFeatureSettings() {
  try {
    return normalizeFeatureSettings(JSON.parse(localStorage.getItem(FEATURE_STORAGE_KEY)) ?? {});
  } catch {
    return normalizeFeatureSettings({});
  }
}

function loadTaskTemplates() {
  try {
    const savedTemplates = JSON.parse(localStorage.getItem(getProfileStorageKey(TEMPLATE_STORAGE_KEY))) ?? [];
    return savedTemplates.map(normalizeTaskTemplate).filter((template) => template.title && template.type);
  } catch {
    return [];
  }
}

function normalizeFeatureSettings(savedSettings) {
  return {
    ...Object.fromEntries(
      Object.keys(DEFAULT_FEATURE_SETTINGS).map((key) => [
        key,
        Object.prototype.hasOwnProperty.call(savedSettings, key)
          ? Boolean(savedSettings[key])
          : DEFAULT_FEATURE_SETTINGS[key],
      ]),
    ),
  };
}

function normalizeWeeklyGoals(savedGoals) {
  return {
    points: normalizeGoalValue(savedGoals.points),
  };
}

function normalizeGoalValue(value) {
  const goal = Number(value);
  return [0, 10, 20, 30, 40, 50, 75, 100].includes(goal) ? goal : 0;
}

function applyWeeklyGoalsToControls() {
  weeklyGoalInputs.forEach((input) => {
    input.value = String(weeklyGoals[input.dataset.goal] ?? 0);
  });
}

function normalizeTasks(savedTasks) {
  return savedTasks.map((task) => ({
    ...task,
    priority: normalizePriority(task.priority),
    repeats: Boolean(task.repeats),
    repeatDays: Array.isArray(task.repeatDays) ? task.repeatDays.map(Number) : [],
    completedDates: Array.isArray(task.completedDates) ? task.completedDates : [],
    skippedDates: Array.isArray(task.skippedDates) ? task.skippedDates : [],
    earnedPoints: Number.isFinite(Number(task.earnedPoints)) ? Math.round(Number(task.earnedPoints)) : null,
    actualMinutes: Number.isFinite(Number(task.actualMinutes)) ? Math.round(Number(task.actualMinutes)) : null,
    earnedPointsByDate: normalizeNumberMap(task.earnedPointsByDate),
    actualMinutesByDate: normalizeNumberMap(task.actualMinutesByDate),
    skipped: Boolean(task.skipped),
  }));
}

function normalizeNumberMap(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, mapValue]) => Number.isFinite(Number(mapValue)))
      .map(([key, mapValue]) => [key, Math.round(Number(mapValue))]),
  );
}

function normalizeTaskTemplate(template) {
  return {
    id: template.id || crypto.randomUUID(),
    title: String(template.title ?? "").trim().replace(/\s+/g, " ").slice(0, 60),
    duration: clamp(Number(template.duration) || 30, 15, 300),
    type: normalizeTaskTypeName(template.type),
    notes: String(template.notes ?? "").trim().slice(0, 400),
    priority: normalizePriority(template.priority),
    repeats: Boolean(template.repeats),
    repeatDays: Array.isArray(template.repeatDays) ? template.repeatDays.map(Number).filter((day) => day >= 0 && day <= 6) : [],
  };
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseISODate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function weekdayForISODate(value) {
  return parseISODate(value).getDay();
}

function addDays(date, amount) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + amount);
  return nextDate;
}

function minDate(...dates) {
  return new Date(Math.min(...dates.map((date) => date.getTime())));
}

function maxDate(...dates) {
  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

function startOfToday(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[char];
  });
}
