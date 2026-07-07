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
const TASK_FORM_COLLAPSED_STORAGE_KEY = "daily-task-scheduler.task-form-collapsed";
const HOME_WIDGETS_STORAGE_KEY = "daily-task-scheduler.home-widgets";
const HOME_WIDGET_LAYOUT_STORAGE_KEY = "daily-task-scheduler.home-widget-layout";
const STARTUP_QUOTE_STORAGE_KEY = "daily-task-scheduler.startup-quote";
const FRIENDS_STORAGE_KEY = "daily-task-scheduler.friends";
const SHARE_SETTINGS_STORAGE_KEY = "daily-task-scheduler.share-settings";
const NOTES_STORAGE_KEY = "daily-task-scheduler.notes";
const GROUPS_STORAGE_KEY = "daily-task-scheduler.groups";
const SUPABASE_URL = "https://xaacjrtkzvphztifnywm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhYWNqcnRrenZwaHp0aWZueXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMDA4NzcsImV4cCI6MjA5NTg3Njg3N30.mTBCPN4JiVDWQVVxBXyFE67vJ3i8A4JoW8mpUO1wDfo";
const APP_PUBLIC_URL = "https://ejam1210.github.io/Shedulr/";
const APP_AUTH_REDIRECT_URL = APP_PUBLIC_URL;
const CLOUD_DATA_TABLE = "scheduler_app_data";
const TASK_INVITES_TABLE = "scheduler_task_invites";
const USER_DIRECTORY_TABLE = "scheduler_user_profiles";
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
  HOME_WIDGETS_STORAGE_KEY,
  HOME_WIDGET_LAYOUT_STORAGE_KEY,
  FRIENDS_STORAGE_KEY,
  SHARE_SETTINGS_STORAGE_KEY,
  NOTES_STORAGE_KEY,
  GROUPS_STORAGE_KEY,
];
const SCHEDULE_DAYS_TO_SHOW = 30;
const GRID_MINUTE_HEIGHT = 2.05;
const GRID_COLLAPSED_GAP_MINUTES = 24;
const GRID_MOVE_HOLD_MS = 600;
const GRID_MOVE_CANCEL_DISTANCE = 12;
const GRID_MOVE_SNAP_MINUTES = 5;
const TIMELINE_POINT_REMINDER_LANE_MIN_PX = 34;
const DEFAULT_TASK_DURATION_MINUTES = 30;
const MIN_TASK_DURATION_MINUTES = 1;
const MAX_TASK_DURATION_MINUTES = 300;
const STOPWATCH_VISUAL_DURATION_MINUTES = 30;
const HOME_GRID_MINUTE_HEIGHT = 1.6;
const TASK_DOUBLE_TAP_MS = 380;
const TASK_DOUBLE_TAP_DISTANCE = 28;
const TASK_SWIPE_ACTIVATE_DISTANCE = 12;
const TASK_SWIPE_DELETE_DISTANCE = 96;
const STREAK_MINUTES_TO_KEEP = 10;
const TASK_REMINDER_INTERVAL_MS = 30 * 1000;
const TASK_REMINDER_GRACE_MS = 2 * 60 * 1000;
const TASK_NOTIFICATION_WINDOW_MS = 10 * 60 * 1000;
const HOME_WIDGET_SNAP_SIZE = 24;
const HOME_WIDGET_ROW_HEIGHT = 168;
const HOME_WIDGET_DESKTOP_QUERY = "(min-width: 761px) and (pointer: fine)";
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const BUILT_IN_TASK_TYPES = ["Focus", "Personal", "Study", "Health", "Errand", "Event", "Meeting"];
const PRIORITY_LEVELS = ["Low", "Medium", "High"];
const PERSONAL_LEAGUE_LOOKBACK_DAYS = 14;
const PERSONAL_LEAGUES = [
  { id: "starter", name: "Starter", badge: "I", minAverageXp: 0, minActiveDays: 0, color: "#64748b", light: "#cbd5e1", dark: "#334155" },
  { id: "bronze", name: "Bronze", badge: "II", minAverageXp: 5, minActiveDays: 3, color: "#a16207", light: "#f0b66b", dark: "#713f12" },
  { id: "silver", name: "Silver", badge: "III", minAverageXp: 10, minActiveDays: 5, color: "#64748b", light: "#e2e8f0", dark: "#475569" },
  { id: "gold", name: "Gold", badge: "IV", minAverageXp: 18, minActiveDays: 6, color: "#b2832f", light: "#f7d77a", dark: "#7c4f16" },
  { id: "sapphire", name: "Sapphire", badge: "V", minAverageXp: 28, minActiveDays: 8, color: "#2563eb", light: "#91c4ff", dark: "#1e3a8a" },
  { id: "ruby", name: "Ruby", badge: "VI", minAverageXp: 38, minActiveDays: 9, color: "#be123c", light: "#fb7185", dark: "#881337" },
  { id: "emerald", name: "Emerald", badge: "VII", minAverageXp: 50, minActiveDays: 10, color: "#2e7d5b", light: "#86efac", dark: "#14532d" },
  { id: "diamond", name: "Diamond", badge: "VIII", minAverageXp: 65, minActiveDays: 11, color: "#0891b2", light: "#a5f3fc", dark: "#155e75" },
];
const GROUP_TYPES = ["friends", "family", "work", "other"];
const GROUP_TYPE_LABELS = {
  friends: "Friends",
  family: "Family",
  work: "Work",
  other: "Other",
};
const GROUP_ROLES = ["host", "leader", "member"];
const GROUP_ROLE_LABELS = {
  host: "Host",
  leader: "Leader",
  member: "Member",
};
const HOME_WIDGET_DEFINITIONS = [
  { id: "stats", label: "Stats" },
  { id: "streak", label: "Streak" },
  { id: "dayGrid", label: "Day grid" },
  { id: "week", label: "Week" },
  { id: "reminders", label: "Reminders" },
  { id: "upcoming", label: "Upcoming" },
  { id: "focus", label: "Focus" },
  { id: "typeMix", label: "Types" },
  { id: "xpGoal", label: "xp goal" },
];
const DEFAULT_HOME_WIDGETS = ["dayGrid", "stats", "streak"];
const HOME_WIDGET_RENDER_ORDER = ["dayGrid", "stats", "week", "streak", "xpGoal", "focus", "upcoming", "reminders", "typeMix"];
const STARTUP_QUOTES = [
  "Small plans. Big momentum.",
  "Win the day in pieces.",
  "One focused block at a time.",
  "Turn plans into progress.",
  "Keep the day moving.",
  "Start clean. Finish proud.",
  "Make time feel lighter.",
  "Build the streak quietly.",
  "Your day, lined up.",
  "Do the next right thing.",
  "A clear plan beats a busy mind.",
  "Stack the small wins.",
];

const startupScreen = document.querySelector("#startupScreen");
const startupQuote = document.querySelector("#startupQuote");
const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const scheduleListLayout = document.querySelector("#scheduleListLayout");
const scheduleListTimeline = document.querySelector("#scheduleListTimeline");
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
const todayProgressRing = document.querySelector("#todayProgressRing");
const todayProgressPercent = document.querySelector("#todayProgressPercent");
const todayStatusChip = document.querySelector("#todayStatusChip");
const todayDayparts = document.querySelector("#todayDayparts");
const todayNextTask = document.querySelector("#todayNextTask");
const daySummary = document.querySelector(".day-summary");
const homeAddTaskButton = document.querySelector("#homeAddTaskButton");
const globalAddButton = document.querySelector("#globalAddButton");
const homeRankCard = document.querySelector("#homeRankCard");
const homeWeekStrip = document.querySelector("#homeWeekStrip");
const homeDayGrid = document.querySelector("#homeDayGrid");
const homeGridRangeInput = document.querySelector("#homeGridRange");
const homeGridDatePicker = document.querySelector("#homeGridDatePicker");
const homeGridPrevDateButton = document.querySelector("#homeGridPrevDate");
const homeGridNextDateButton = document.querySelector("#homeGridNextDate");
const homeGridTodayButton = document.querySelector("#homeGridTodayButton");
const homeGridZoomInButton = document.querySelector("#homeGridZoomIn");
const homeGridZoomOutButton = document.querySelector("#homeGridZoomOut");
const homeGridZoomLevel = document.querySelector("#homeGridZoomLevel");
const todayLabel = document.querySelector("#todayLabel");
const todayXpValue = document.querySelector("#todayXpValue");
const topStreakPill = document.querySelector("#topStreakPill");
const topStreakValue = document.querySelector("#topStreakValue");
const scheduleGridRange = document.querySelector("#scheduleGridRange");
const schedulePanel = document.querySelector("#schedulePanel");
const scheduleHeader = document.querySelector("#schedulePanel .schedule-header");
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
const taskItemKindInput = document.querySelector("#taskItemKind");
const taskDateInput = document.querySelector("#taskDate");
const taskTimeInput = document.querySelector("#taskTime");
const taskTimeLabel = document.querySelector("#taskTimeLabel span");
const taskEndTimeInput = document.querySelector("#taskEndTime");
const taskEndTimeField = document.querySelector("#taskEndTimeField");
const taskDurationInput = document.querySelector("#taskDuration");
const taskDurationHoursInput = document.querySelector("#taskDurationHours");
const taskDurationMinutesInput = document.querySelector("#taskDurationMinutes");
const taskDurationField = document.querySelector("#taskDurationField");
const taskTimerModeInput = document.querySelector("#taskTimerMode");
const taskTimerModeField = document.querySelector("#taskTimerModeField");
const taskTypeInput = document.querySelector("#taskType");
const customTaskTypeInput = document.querySelector("#customTaskType");
const taskPriorityInput = document.querySelector("#taskPriority");
const priorityField = document.querySelector("#priorityField");
const taskNotesInput = document.querySelector("#taskNotes");
const taskInviteEmailsInput = document.querySelector("#taskInviteEmails");
const taskTemplateSelect = document.querySelector("#taskTemplate");
const saveTemplateButton = document.querySelector("#saveTemplateButton");
const taskFormHeader = document.querySelector("#taskFormHeader");
const taskRepeatsInput = document.querySelector("#taskRepeats");
const repeatToggleText = document.querySelector("#repeatToggleText");
const repeatModeField = document.querySelector("#repeatModeField");
const taskRepeatModeInput = document.querySelector("#taskRepeatMode");
const repeatIntervalField = document.querySelector("#repeatIntervalField");
const taskRepeatIntervalDaysInput = document.querySelector("#taskRepeatIntervalDays");
const repeatEndField = document.querySelector("#repeatEndField");
const taskRepeatEndDateInput = document.querySelector("#taskRepeatEndDate");
const weekdayPicker = document.querySelector("#weekdayPicker");
const specificDatePicker = document.querySelector("#specificDatePicker");
const specificRepeatDateInput = document.querySelector("#specificRepeatDate");
const addSpecificDateButton = document.querySelector("#addSpecificDateButton");
const taskRepeatSpecificDatesInput = document.querySelector("#taskRepeatSpecificDates");
const specificCalendarLabel = document.querySelector("#specificCalendarLabel");
const specificCalendarGrid = document.querySelector("#specificCalendarGrid");
const specificCalendar = document.querySelector("#specificCalendar");
const specificDateChips = document.querySelector("#specificDateChips");
const taskMeetingField = document.querySelector("#taskMeetingField");
const taskMeetingLinkInput = document.querySelector("#taskMeetingLink");
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
const shedulrNameForm = document.querySelector("#shedulrNameForm");
const shedulrNameInput = document.querySelector("#shedulrNameInput");
const shedulrNameStatus = document.querySelector("#shedulrNameStatus");
const friendsSection = document.querySelector("#friendsSection");
const friendAddForm = document.querySelector("#friendAddForm");
const friendLookupInput = document.querySelector("#friendLookupInput");
const refreshFriendsButton = document.querySelector("#refreshFriendsButton");
const publicGridToggle = document.querySelector("#publicGridToggle");
const publicActivityToggle = document.querySelector("#publicActivityToggle");
const publicLeagueToggle = document.querySelector("#publicLeagueToggle");
const friendsStatus = document.querySelector("#friendsStatus");
const friendsList = document.querySelector("#friendsList");
const friendShareCard = document.querySelector("#friendShareCard");
const friendShareLinkInput = document.querySelector("#friendShareLink");
const friendQrCode = document.querySelector("#friendQrCode");
const copyFriendLinkButton = document.querySelector("#copyFriendLinkButton");
const shareFriendLinkButton = document.querySelector("#shareFriendLinkButton");
const friendDetailPanel = document.querySelector("#friendDetailPanel");
const groupsSection = document.querySelector("#groupsSection");
const groupCreateForm = document.querySelector("#groupCreateForm");
const groupNameInput = document.querySelector("#groupNameInput");
const groupTypeSelect = document.querySelector("#groupTypeSelect");
const groupsStatus = document.querySelector("#groupsStatus");
const groupsList = document.querySelector("#groupsList");
const taskFriendInviteList = document.querySelector("#taskFriendInviteList");
const editFriendInviteList = document.querySelector("#editFriendInviteList");
const inviteInbox = document.querySelector("#inviteInbox");
const inviteList = document.querySelector("#inviteList");
const refreshInvitesButton = document.querySelector("#refreshInvitesButton");
const menuButton = document.querySelector("#menuButton");
const closeMenuButton = document.querySelector("#closeMenuButton");
const sideMenu = document.querySelector("#sideMenu");
const drawerOverlay = document.querySelector("#drawerOverlay");
const colourThemeButtons = document.querySelectorAll(".colour-button");
const focusOverlay = document.querySelector("#focusOverlay");
const streakCelebrationOverlay = document.querySelector("#streakCelebrationOverlay");
const weeklyReportOverlay = document.querySelector("#weeklyReportOverlay");
const appToast = document.querySelector("#appToast");
const deleteRepeatOverlay = document.querySelector("#deleteRepeatOverlay");
const deleteRepeatMessage = document.querySelector("#deleteRepeatMessage");
const deleteRepeatOnceButton = document.querySelector("#deleteRepeatOnceButton");
const deleteRepeatAllButton = document.querySelector("#deleteRepeatAllButton");
const cancelRepeatDeleteButton = document.querySelector("#cancelRepeatDeleteButton");
const assistantButton = document.querySelector("#assistantButton");
const assistantOverlay = document.querySelector("#assistantOverlay");
const closeAssistantButton = document.querySelector("#closeAssistantButton");
const assistantForm = document.querySelector("#assistantForm");
const assistantPromptInput = document.querySelector("#assistantPrompt");
const assistantResponse = document.querySelector("#assistantResponse");
const assistantVoiceButton = document.querySelector("#assistantVoiceButton");
const assistantPromptButtons = document.querySelectorAll("[data-assistant-prompt]");
const notificationButton = document.querySelector("#notificationButton");
const notificationBadge = document.querySelector("#notificationBadge");
const notificationPanel = document.querySelector("#notificationPanel");
const notificationList = document.querySelector("#notificationList");
const closeNotificationPanelButton = document.querySelector("#closeNotificationPanel");
const homeWidgetAddButton = document.querySelector("#homeWidgetAddButton");
const homeWidgetPicker = document.querySelector("#homeWidgetPicker");
const homeWidgetControls = document.querySelector("#homeWidgetControls");
const homeWidgetGrid = document.querySelector("#homeWidgetGrid");
const editTaskOverlay = document.querySelector("#editTaskOverlay");
const editTaskForm = document.querySelector("#editTaskForm");
const editTaskIdInput = document.querySelector("#editTaskId");
const editOccurrenceDateInput = document.querySelector("#editOccurrenceDate");
const editItemKindInput = document.querySelector("#editItemKind");
const editTaskNameInput = document.querySelector("#editTaskName");
const editTaskDateInput = document.querySelector("#editTaskDate");
const editTaskTimeInput = document.querySelector("#editTaskTime");
const editTaskTimeLabel = document.querySelector("#editTaskTimeLabel span");
const editTaskEndTimeInput = document.querySelector("#editTaskEndTime");
const editTaskEndTimeField = document.querySelector("#editTaskEndTimeField");
const editTaskDurationInput = document.querySelector("#editTaskDuration");
const editTaskDurationHoursInput = document.querySelector("#editTaskDurationHours");
const editTaskDurationMinutesInput = document.querySelector("#editTaskDurationMinutes");
const editTaskDurationField = document.querySelector("#editTaskDurationField");
const editTaskTimerModeInput = document.querySelector("#editTaskTimerMode");
const editTaskTimerModeField = document.querySelector("#editTaskTimerModeField");
const editTaskTypeInput = document.querySelector("#editTaskType");
const editTaskPriorityInput = document.querySelector("#editTaskPriority");
const editTaskNotesInput = document.querySelector("#editTaskNotes");
const editTaskMeetingLinkInput = document.querySelector("#editTaskMeetingLink");
const editTaskInviteEmailsInput = document.querySelector("#editTaskInviteEmails");
const editTaskRepeatsInput = document.querySelector("#editTaskRepeats");
const editRepeatToggleText = document.querySelector("#editRepeatToggleText");
const editRepeatModeField = document.querySelector("#editRepeatModeField");
const editRepeatModeInput = document.querySelector("#editRepeatMode");
const editRepeatIntervalField = document.querySelector("#editRepeatIntervalField");
const editRepeatIntervalDaysInput = document.querySelector("#editRepeatIntervalDays");
const editRepeatEndField = document.querySelector("#editRepeatEndField");
const editRepeatEndDateInput = document.querySelector("#editRepeatEndDate");
const editWeekdayPicker = document.querySelector("#editWeekdayPicker");
const editSpecificDatePicker = document.querySelector("#editSpecificDatePicker");
const editSpecificRepeatDateInput = document.querySelector("#editSpecificRepeatDate");
const editAddSpecificDateButton = document.querySelector("#editAddSpecificDateButton");
const editRepeatSpecificDatesInput = document.querySelector("#editRepeatSpecificDates");
const editSpecificCalendarLabel = document.querySelector("#editSpecificCalendarLabel");
const editSpecificCalendarGrid = document.querySelector("#editSpecificCalendarGrid");
const editSpecificCalendar = document.querySelector("#editSpecificCalendar");
const editSpecificDateChips = document.querySelector("#editSpecificDateChips");
const editTaskMeetingField = document.querySelector("#editTaskMeetingField");
const scheduleFilterButton = document.querySelector("#scheduleFilterButton");
const scheduleFilterBadge = document.querySelector("#scheduleFilterBadge");
const scheduleFilterOverlay = document.querySelector("#scheduleFilterOverlay");
const closeScheduleFilterButton = document.querySelector("#closeScheduleFilterButton");
const clearScheduleFiltersButton = document.querySelector("#clearScheduleFiltersButton");
const doneScheduleFiltersButton = document.querySelector("#doneScheduleFiltersButton");
const scheduleTypeFilterOptions = document.querySelector("#scheduleTypeFilterOptions");
const taskSelectionToolbar = document.querySelector("#taskSelectionToolbar");
const taskSelectionCount = document.querySelector("#taskSelectionCount");
const selectAllTasksButton = document.querySelector("#selectAllTasksButton");
const duplicateSelectedTasksButton = document.querySelector("#duplicateSelectedTasksButton");
const deleteSelectedTasksButton = document.querySelector("#deleteSelectedTasksButton");
const clearSelectedTasksButton = document.querySelector("#clearSelectedTasksButton");
const missedSelectionToolbar = document.querySelector("#missedSelectionToolbar");
const missedSelectionCount = document.querySelector("#missedSelectionCount");
const selectAllMissedButton = document.querySelector("#selectAllMissedButton");
const missedRescheduleDateInput = document.querySelector("#missedRescheduleDate");
const rescheduleSelectedMissedButton = document.querySelector("#rescheduleSelectedMissedButton");
const ignoreSelectedMissedButton = document.querySelector("#ignoreSelectedMissedButton");
const deleteSelectedMissedButton = document.querySelector("#deleteSelectedMissedButton");
const clearSelectedMissedButton = document.querySelector("#clearSelectedMissedButton");
const notesList = document.querySelector("#notesList");
const newNoteButton = document.querySelector("#newNoteButton");
const noteEditor = document.querySelector("#noteEditor");
const notesEmptyState = document.querySelector("#notesEmptyState");
const noteEditorFields = document.querySelector("#noteEditorFields");
const noteTitleInput = document.querySelector("#noteTitleInput");
const notePage = document.querySelector("#notePage");
const noteBodyEditor = document.querySelector("#noteBodyEditor");
const noteToolbar = document.querySelector(".note-toolbar");
const noteFontSelect = document.querySelector("#noteFontSelect");
const noteTextSizeSelect = document.querySelector("#noteTextSizeSelect");
const noteSpeechButton = document.querySelector("#noteSpeechButton");
const noteDrawingCanvas = document.querySelector("#noteDrawingCanvas");
const notePenColorInput = document.querySelector("#notePenColor");
const notePenSizeInput = document.querySelector("#notePenSize");
const noteTextModeButton = document.querySelector("#noteTextModeButton");
const notePenButton = document.querySelector("#notePenButton");
const notePenPalette = document.querySelector("#notePenPalette");
const notePenPresetButtons = document.querySelectorAll("[data-note-pen-preset]");
const noteEraserButton = document.querySelector("#noteEraserButton");
const noteEraserOptions = document.querySelector("#noteEraserOptions");
const noteEraserModeButtons = document.querySelectorAll("[data-note-eraser-mode]");
const noteClearDrawingButton = document.querySelector("#noteClearDrawingButton");
const noteSavedStatus = document.querySelector("#noteSavedStatus");
const deleteNoteButton = document.querySelector("#deleteNoteButton");
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) ?? null;
const cancelEditTaskButton = document.querySelector("#cancelEditTask");
const deleteEditedTaskButton = document.querySelector("#deleteEditedTaskButton");
const today = new Date();
const todayISO = toDateInputValue(today);

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
let homeWidgets = loadHomeWidgets();
let homeWidgetLayout = loadHomeWidgetLayout();
let notes = loadNotes();
let activeNoteId = notes[0]?.id ?? "";
let featureSettings;
let taskTemplates = loadTaskTemplates();
let currentTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? "light";
let currentAccentTheme = localStorage.getItem(ACCENT_STORAGE_KEY) ?? "sleek";
let scheduleView = "list";
let scheduleAnchorDate = "";
let homeGridAnchorDate = "";
let homeGridRange = "day";
let scheduleGridZoom = 1;
let homeGridZoom = 1;
let pinchStartDistance = 0;
let pinchStartZoom = 1;
let homePinchStartDistance = 0;
let homePinchStartZoom = 1;
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
let assistantRecognition = null;
let assistantIsListening = false;
let taskFormCollapsedPreference = localStorage.getItem(TASK_FORM_COLLAPSED_STORAGE_KEY) === "true";
let displayedTodayXp = null;
let pendingXpAnimation = null;
let homeWidgetDragState = null;
let taskInvites = [];
let isLoadingTaskInvites = false;
let cloudDirectoryProfile = null;
let isSavingShedulrName = false;
let pendingRepeatDelete = null;
let friends = [];
let shareSettings = { gridPublic: false, activityPublic: true };
let groups = [];
let isLoadingFriends = false;
let renderedFriendShareUrl = "";
let selectedTaskKeys = new Set();
let selectedMissedKeys = new Set();
let currentVisibleTaskKeys = [];
let currentVisibleMissedKeys = [];
let monthPointerState = null;
let taskSpecificRepeatDates = [];
let editSpecificRepeatDates = [];
let taskSpecificCalendarMonth = startOfMonth(parseISODate(todayISO));
let editSpecificCalendarMonth = startOfMonth(parseISODate(todayISO));
let scheduleTypeFilters = new Set();
let schedulePriorityFilters = new Set();
let noteSpeechRecognition = null;
let noteSpeechListening = false;
let noteDrawingState = null;
let noteDrawingMode = "text";
let notePenPreset = "pen";
let noteEraserMode = "pixel";

const NOTE_PEN_PRESETS = {
  pen: { color: "#2e7d5b", size: 5, alpha: 1 },
  highlighter: { color: "#ffd166", size: 16, alpha: 0.38 },
  crayon: { color: "#7f5af0", size: 9, alpha: 0.82 },
};

const TASK_TYPE_STYLES = {
  Focus: { color: "#2d6f9f", bg: "rgba(45, 111, 159, 0.14)" },
  Personal: { color: "#8a5fbf", bg: "rgba(138, 95, 191, 0.16)" },
  Study: { color: "#2e7d5b", bg: "rgba(46, 125, 91, 0.15)" },
  Health: { color: "#c95f4f", bg: "rgba(201, 95, 79, 0.14)" },
  Errand: { color: "#b2832f", bg: "rgba(178, 131, 47, 0.16)" },
  Event: { color: "#3c7f88", bg: "rgba(60, 127, 136, 0.16)" },
  Meeting: { color: "#5468b8", bg: "rgba(84, 104, 184, 0.16)" },
};

const MEETING_PRESET_LINKS = {
  teams: "https://teams.microsoft.com/",
  zoom: "https://zoom.us/join",
  webex: "https://signin.webex.com/join",
  meet: "https://meet.google.com/",
};

const DEFAULT_FEATURE_SETTINGS = {
  streaks: true,
  priorities: true,
  missedTasks: true,
  focusMode: false,
  taskReminders: false,
  personalLeagues: true,
};

const DEFAULT_SHARE_SETTINGS = {
  gridPublic: false,
  activityPublic: true,
  leaguePublic: false,
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
    light: { accent: "#f4f6f3", strong: "#172026", soft: "rgba(244, 246, 243, 0.74)", faint: "rgba(244, 246, 243, 0.52)", border: "rgba(220, 226, 218, 0.88)" },
    dark: { accent: "#e8ece7", strong: "#ffffff", soft: "rgba(232, 236, 231, 0.13)", faint: "rgba(232, 236, 231, 0.08)", border: "rgba(232, 236, 231, 0.22)" },
  },
};

scheduleAnchorDate = todayISO;
homeGridAnchorDate = todayISO;
taskDateInput.value = todayISO;
scheduleDatePicker.value = scheduleAnchorDate;
scheduleGridRange.value = "week";
if (homeGridDatePicker) homeGridDatePicker.value = homeGridAnchorDate;
friends = loadFriends();
shareSettings = loadShareSettings();
groups = loadGroups();
todayLabel.textContent = today.toLocaleDateString(undefined, {
  weekday: "long",
  month: "short",
  day: "numeric",
});
applyStartupQuote();
saveCustomTaskTypes();
renderProfileControls();
renderTaskTypeOptions();
renderScheduleFilterControls();
renderTaskTemplateOptions();
renderNotes();
setNotePenPreset("pen", { activatePen: false });
setNoteEraserMode("pixel", { activateEraser: false });
setNoteDrawingMode("text");
applyWeeklyGoalsToControls();
applyFeatureSettingsToControls();
applyTheme(currentTheme);
setupScheduleTaskForm();
setTaskFormCollapsed(taskFormCollapsedPreference);
toggleItemKindFields();
renderHomeWidgetControls();

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
    if (input.dataset.featureToggle === "personalLeagues") {
      renderFriendControls();
      void syncPublicProfileSnapshot({ silent: true });
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

scheduleGridRange.addEventListener("change", render);
scheduleFilterButton?.addEventListener("click", openScheduleFilterOverlay);
closeScheduleFilterButton?.addEventListener("click", closeScheduleFilterOverlay);
doneScheduleFiltersButton?.addEventListener("click", closeScheduleFilterOverlay);
clearScheduleFiltersButton?.addEventListener("click", clearScheduleFilters);
scheduleFilterOverlay?.addEventListener("click", (event) => {
  if (event.target === scheduleFilterOverlay) closeScheduleFilterOverlay();
});
scheduleFilterOverlay?.addEventListener("change", handleScheduleFilterChange);
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
homeAddTaskButton?.addEventListener("click", openScheduleTaskFormFromHome);
globalAddButton?.addEventListener("click", openScheduleTaskFormFromHome);
homeGridRangeInput?.addEventListener("change", () => {
  homeGridRange = homeGridRangeInput.value === "week" ? "week" : "day";
  render();
});
homeGridDatePicker?.addEventListener("change", () => setHomeGridAnchorDate(homeGridDatePicker.value));
homeGridPrevDateButton?.addEventListener("click", () => shiftHomeGridAnchorDate(-getHomeGridNavigationStep()));
homeGridNextDateButton?.addEventListener("click", () => shiftHomeGridAnchorDate(getHomeGridNavigationStep()));
homeGridTodayButton?.addEventListener("click", () => setHomeGridAnchorDate(todayISO));
homeGridZoomInButton?.addEventListener("click", () => setHomeGridZoom(homeGridZoom + 0.15));
homeGridZoomOutButton?.addEventListener("click", () => setHomeGridZoom(homeGridZoom - 0.15));
homeDayGrid?.addEventListener("wheel", handleHomeGridZoom, { passive: false });
homeDayGrid?.addEventListener("touchstart", handleHomeGridTouchStart, { passive: false });
homeDayGrid?.addEventListener("touchmove", handleHomeGridTouchMove, { passive: false });
homeDayGrid?.addEventListener("touchend", resetHomeGridPinch);
selectAllTasksButton?.addEventListener("click", selectAllVisibleTasks);
duplicateSelectedTasksButton?.addEventListener("click", duplicateSelectedTasks);
deleteSelectedTasksButton?.addEventListener("click", deleteSelectedTasks);
clearSelectedTasksButton?.addEventListener("click", () => {
  selectedTaskKeys = new Set();
  renderSelectionToolbars();
  renderTaskSelectionState();
});
selectAllMissedButton?.addEventListener("click", selectAllVisibleMissedTasks);
rescheduleSelectedMissedButton?.addEventListener("click", rescheduleSelectedMissedTasks);
ignoreSelectedMissedButton?.addEventListener("click", ignoreSelectedMissedTasks);
deleteSelectedMissedButton?.addEventListener("click", deleteSelectedMissedTasks);
clearSelectedMissedButton?.addEventListener("click", () => {
  selectedMissedKeys = new Set();
  renderSelectionToolbars();
  renderMissedSelectionState();
});
newNoteButton?.addEventListener("click", createNote);
notesList?.addEventListener("click", handleNotesListClick);
noteTitleInput?.addEventListener("input", saveActiveNoteFromEditor);
noteBodyEditor?.addEventListener("input", saveActiveNoteFromEditor);
noteBodyEditor?.addEventListener("paste", handleNotePaste);
noteToolbar?.addEventListener("click", handleNoteToolbarClick);
noteFontSelect?.addEventListener("change", applyNoteFont);
noteTextSizeSelect?.addEventListener("change", applyNoteTextSize);
noteSpeechButton?.addEventListener("click", toggleNoteSpeechToText);
noteTextModeButton?.addEventListener("click", () => setNoteDrawingMode("text"));
notePenButton?.addEventListener("click", () => setNoteDrawingMode("pen"));
notePenPresetButtons.forEach((button) => {
  button.addEventListener("click", () => setNotePenPreset(button.dataset.notePenPreset));
});
noteEraserButton?.addEventListener("click", () => setNoteDrawingMode("eraser"));
noteEraserModeButtons.forEach((button) => {
  button.addEventListener("click", () => setNoteEraserMode(button.dataset.noteEraserMode));
});
noteClearDrawingButton?.addEventListener("click", clearNoteDrawing);
noteDrawingCanvas?.addEventListener("pointerdown", startNoteDrawing);
noteDrawingCanvas?.addEventListener("pointermove", drawNoteStroke);
noteDrawingCanvas?.addEventListener("pointerup", finishNoteDrawing);
noteDrawingCanvas?.addEventListener("pointerleave", finishNoteDrawing);
noteDrawingCanvas?.addEventListener("pointercancel", finishNoteDrawing);
deleteNoteButton?.addEventListener("click", deleteActiveNote);
window.addEventListener("resize", () => requestAnimationFrame(renderActiveNoteDrawing));
taskItemKindInput.addEventListener("change", toggleItemKindFields);
taskTimerModeInput.addEventListener("change", toggleItemKindFields);
[taskDurationHoursInput, taskDurationMinutesInput].forEach((input) => {
  input?.addEventListener("input", () => syncDurationDialValue(taskDurationInput, taskDurationHoursInput, taskDurationMinutesInput));
  input?.addEventListener("change", () => syncDurationDialValue(taskDurationInput, taskDurationHoursInput, taskDurationMinutesInput, true));
});
taskRepeatModeInput.addEventListener("change", () => {
  toggleRepeatControls();
  if (taskRepeatsInput.checked && getTaskRepeatMode() === "weekly" && getSelectedRepeatDays().length === 0) {
    setRepeatDayForDate(taskDateInput.value);
  }
});
specificRepeatDateInput?.addEventListener("change", () => addTaskSpecificRepeatDate(specificRepeatDateInput.value));
addSpecificDateButton?.addEventListener("click", () => addTaskSpecificRepeatDate(specificRepeatDateInput?.value));
specificDateChips?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-specific-date]");
  if (!button) return;
  taskSpecificRepeatDates = taskSpecificRepeatDates.filter((date) => date !== button.dataset.removeSpecificDate);
  renderSpecificRepeatDates();
});
specificDatePicker?.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-specific-calendar]");
  if (navButton) {
    taskSpecificCalendarMonth = addMonths(taskSpecificCalendarMonth, navButton.dataset.specificCalendar === "prev" ? -1 : 1);
    renderSpecificRepeatDates();
    return;
  }

  const dateButton = event.target.closest("[data-specific-date]");
  if (!dateButton) return;
  toggleTaskSpecificRepeatDate(dateButton.dataset.specificDate);
});
taskTypeInput.addEventListener("change", handleTaskTypeChange);
customTaskTypeInput.addEventListener("input", updateMeetingLinkControls);
document.querySelectorAll("[data-meeting-preset]").forEach((button) => {
  button.addEventListener("click", applyMeetingPreset);
});
taskTemplateSelect.addEventListener("change", applySelectedTaskTemplate);
saveTemplateButton.addEventListener("click", saveCurrentTaskTemplate);
taskFormHeader?.addEventListener("click", toggleTaskFormFromHeader);
taskFormHeader?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  toggleTaskFormFromHeader();
});
function toggleTaskFormFromHeader() {
  taskFormCollapsedPreference = !taskFormCollapsedPreference;
  setTaskFormCollapsed(taskFormCollapsedPreference);
}

function openScheduleTaskFormFromHome() {
  switchTab("schedule");
  taskFormCollapsedPreference = false;
  setTaskFormCollapsed(false);

  requestAnimationFrame(() => {
    taskForm?.scrollIntoView({ behavior: "smooth", block: "start" });
    try {
      taskTitleInput?.focus({ preventScroll: true });
    } catch {
      taskTitleInput?.focus();
    }
  });
}

editItemKindInput.addEventListener("change", toggleEditItemKindFields);
editTaskTimerModeInput.addEventListener("change", toggleEditItemKindFields);
editTaskTypeInput.addEventListener("input", updateEditMeetingLinkControls);
[editTaskDurationHoursInput, editTaskDurationMinutesInput].forEach((input) => {
  input?.addEventListener("input", () => syncDurationDialValue(editTaskDurationInput, editTaskDurationHoursInput, editTaskDurationMinutesInput));
  input?.addEventListener("change", () => syncDurationDialValue(editTaskDurationInput, editTaskDurationHoursInput, editTaskDurationMinutesInput, true));
});
editTaskRepeatsInput.addEventListener("change", () => {
  toggleEditRepeatControls();
  if (editTaskRepeatsInput.checked && getEditRepeatMode() === "weekly" && getEditRepeatDays().length === 0) {
    setEditRepeatDayForDate(editTaskDateInput.value);
  }
});
editRepeatModeInput.addEventListener("change", () => {
  toggleEditRepeatControls();
  if (editTaskRepeatsInput.checked && getEditRepeatMode() === "weekly" && getEditRepeatDays().length === 0) {
    setEditRepeatDayForDate(editTaskDateInput.value);
  }
});
editSpecificRepeatDateInput?.addEventListener("change", () => addEditSpecificRepeatDate(editSpecificRepeatDateInput.value));
editAddSpecificDateButton?.addEventListener("click", () => addEditSpecificRepeatDate(editSpecificRepeatDateInput?.value));
editSpecificDateChips?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-specific-date]");
  if (!button) return;
  editSpecificRepeatDates = editSpecificRepeatDates.filter((date) => date !== button.dataset.removeSpecificDate);
  renderEditSpecificRepeatDates();
});
editSpecificDatePicker?.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-edit-specific-calendar]");
  if (navButton) {
    editSpecificCalendarMonth = addMonths(editSpecificCalendarMonth, navButton.dataset.editSpecificCalendar === "prev" ? -1 : 1);
    renderEditSpecificRepeatDates();
    return;
  }

  const dateButton = event.target.closest("[data-edit-specific-date]");
  if (!dateButton) return;
  toggleEditSpecificRepeatDate(dateButton.dataset.editSpecificDate);
});
editTaskDateInput.addEventListener("change", () => {
  if (editTaskRepeatsInput.checked && getEditRepeatMode() === "weekly" && getEditRepeatDays().length === 0) {
    setEditRepeatDayForDate(editTaskDateInput.value);
  }
  if (editSpecificRepeatDates.length === 0 && isISODateString(editTaskDateInput.value)) {
    editSpecificCalendarMonth = startOfMonth(parseISODate(editTaskDateInput.value));
  }
  renderEditSpecificRepeatDates();
});
homeWidgetAddButton?.addEventListener("click", toggleHomeWidgetPicker);
homeWidgetControls?.addEventListener("click", handleHomeWidgetToggle);
homeWidgetGrid?.addEventListener("click", handleHomeWidgetGridClick);
homeWidgetGrid?.addEventListener("pointerdown", startHomeWidgetDrag);
homeWidgetGrid?.addEventListener("pointermove", updateHomeWidgetDrag);
homeWidgetGrid?.addEventListener("pointerup", finishHomeWidgetDrag);
homeWidgetGrid?.addEventListener("pointercancel", cancelHomeWidgetDrag);
homeWidgetGrid?.addEventListener("lostpointercapture", cancelHomeWidgetDrag);
window.addEventListener("resize", applyHomeWidgetLayout);
document.addEventListener("click", handleHomeWidgetOutsideClick);
document.addEventListener("click", handlePickerFieldClick);
window.addEventListener("load", () => {
  window.setTimeout(() => startupScreen?.remove(), 2300);
});
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
shedulrNameForm?.addEventListener("submit", saveShedulrName);
refreshInvitesButton?.addEventListener("click", loadTaskInvites);
inviteList?.addEventListener("click", handleInviteAction);
friendAddForm?.addEventListener("submit", addFriend);
refreshFriendsButton?.addEventListener("click", refreshFriends);
friendsList?.addEventListener("click", handleFriendListAction);
friendDetailPanel?.addEventListener("click", handleFriendDetailAction);
groupCreateForm?.addEventListener("submit", createGroup);
groupsList?.addEventListener("submit", handleGroupListSubmit);
groupsList?.addEventListener("click", handleGroupListAction);
groupsList?.addEventListener("change", handleGroupListChange);
copyFriendLinkButton?.addEventListener("click", copyFriendShareLink);
shareFriendLinkButton?.addEventListener("click", shareFriendProfile);
friendShareLinkInput?.addEventListener("click", () => friendShareLinkInput.select());
publicGridToggle?.addEventListener("change", updatePublicGridSetting);
publicActivityToggle?.addEventListener("change", updatePublicActivitySetting);
publicLeagueToggle?.addEventListener("change", updatePublicLeagueSetting);
taskFriendInviteList?.addEventListener("click", (event) => handleFriendInviteClick(event, taskInviteEmailsInput));
editFriendInviteList?.addEventListener("click", (event) => handleFriendInviteClick(event, editTaskInviteEmailsInput));
menuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
drawerOverlay.addEventListener("click", closeAllMenus);
assistantButton?.addEventListener("click", openAssistant);
notificationButton?.addEventListener("click", toggleNotificationPanel);
closeNotificationPanelButton?.addEventListener("click", closeNotificationPanel);
notificationPanel?.addEventListener("click", handleNotificationAction);
document.addEventListener("click", closeNotificationPanelFromOutside);
closeAssistantButton?.addEventListener("click", closeAssistant);
assistantOverlay?.addEventListener("click", (event) => {
  if (event.target === assistantOverlay) closeAssistant();
});
assistantForm?.addEventListener("submit", handleAssistantSubmit);
assistantVoiceButton?.addEventListener("click", toggleAssistantVoice);
assistantPromptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    assistantPromptInput.value = button.dataset.assistantPrompt;
    answerAssistantPrompt(button.dataset.assistantPrompt);
  });
});

taskRepeatsInput.addEventListener("change", () => {
  toggleRepeatControls();
  if (taskRepeatsInput.checked && getTaskRepeatMode() === "weekly" && getSelectedRepeatDays().length === 0) {
    setRepeatDayForDate(taskDateInput.value);
  }
});

taskDateInput.addEventListener("change", () => {
  if (taskRepeatsInput.checked && getTaskRepeatMode() === "weekly" && getSelectedRepeatDays().length === 0) {
    setRepeatDayForDate(taskDateInput.value);
  }
  if (taskSpecificRepeatDates.length === 0 && isISODateString(taskDateInput.value)) {
    taskSpecificCalendarMonth = startOfMonth(parseISODate(taskDateInput.value));
  }
  renderSpecificRepeatDates();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  syncDurationDialValue(taskDurationInput, taskDurationHoursInput, taskDurationMinutesInput, true);

  const formData = new FormData(taskForm);
  const repeats = formData.get("repeats") === "on";
  const startDate = formData.get("date");
  const taskType = getSubmittedTaskType(formData);
  const itemKind = normalizeItemKind(formData.get("itemKind"));
  const timerMode = itemKind === "reminder" ? "countdown" : normalizeTimerMode(formData.get("timerMode"));
  const isAllDay = timerMode === "all-day";
  const inviteRecipients = parseInviteRecipients(formData.get("inviteEmails"));
  const inviteEmails = parseInviteEmails(inviteRecipients);
  const repeatMode = repeats ? getRepeatModeForItemKind(itemKind, formData.get("repeatMode")) : "weekly";
  const selectedRepeatDays = repeats ? getSelectedRepeatDays() : [];
  const selectedSpecificDates = repeats && repeatMode === "specific"
    ? normalizeSpecificRepeatDates(taskSpecificRepeatDates, startDate)
    : [];
  const repeatIntervalDays = repeats && repeatMode === "interval"
    ? normalizeRepeatIntervalDays(formData.get("repeatIntervalDays"))
    : 1;
  const repeatEndDate = repeats ? normalizeOptionalRepeatEndDate(formData.get("repeatEndDate"), startDate) : "";
  const task = {
    id: crypto.randomUUID(),
    itemKind,
    title: formData.get("title").trim(),
    date: startDate,
    time: isAllDay ? "00:00" : formData.get("time"),
    endTime: itemKind === "reminder" ? normalizeOptionalEndTime(formData.get("endTime")) : "",
    duration: itemKind === "reminder" || timerMode === "stopwatch" || isAllDay ? 0 : normalizeTaskDuration(formData.get("duration")),
    timerMode,
    type: taskType,
    priority: normalizePriority(formData.get("priority")),
    notes: formData.get("notes").trim(),
    meetingLink: isMeetingType(taskType) ? normalizeMeetingLink(formData.get("meetingLink")) : "",
    repeats,
    repeatMode,
    repeatIntervalDays,
    repeatEndDate,
    repeatDays: repeats ? selectedRepeatDays : [],
    repeatSpecificDates: repeats ? selectedSpecificDates : [],
    completedDates: [],
    inviteEmails,
    inviteLabels: inviteRecipients,
    sentInviteEmails: [],
    done: false,
    createdAt: new Date().toISOString(),
  };

  if (!task.title || !task.date || (!isAllDay && !task.time) || !task.type) {
    if (!task.type) customTaskTypeInput.focus();
    return;
  }

  if (task.repeats && task.repeatMode === "weekly" && task.repeatDays.length === 0) {
    task.repeatDays = [weekdayForISODate(task.date)];
  }
  if (task.repeats && task.repeatMode === "specific" && task.repeatSpecificDates.length === 0) {
    task.repeatSpecificDates = [task.date];
  }

  saveCustomTaskType(task.type);
  tasks.push(task);
  saveTasks();
  resetForm();
  switchTab("schedule");
  render();
  taskFormCollapsedPreference = true;
  setTaskFormCollapsed(true);
  void sendTaskInvites(task.id, inviteRecipients);
});

taskList.addEventListener("click", handleTaskAction);
scheduleGrid.addEventListener("click", handleTaskAction);
daySummary?.addEventListener("click", handleTaskAction);
completedTaskList.addEventListener("click", handleTaskAction);

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

  if (button.dataset.action === "complete-reminder") {
    const sourceTask = tasks.find((task) => task.id === taskId);
    if (!sourceTask || !isReminderItem(sourceTask)) return;
    tasks = tasks.map((task) => markTaskComplete(task, taskId, occurrenceDate, 0, 0));
    clearActiveTimerFor(taskId, occurrenceDate);
  }

  if (button.dataset.action === "start") {
    if (activeTimer && !isActiveTimerFor({ id: taskId, occurrenceDate })) return;

    const sourceTask = tasks.find((task) => task.id === taskId);
    if (!sourceTask || isReminderItem(sourceTask) || isAllDayTask(sourceTask)) return;
    const timerMode = getTaskTimerMode(sourceTask);
    activeTimer = {
      taskId,
      occurrenceDate,
      duration: timerMode === "stopwatch" ? 0 : normalizeTaskDuration(sourceTask?.duration),
      timerMode,
      startedAt: Date.now(),
    };
    saveActiveTimer();
  }

  if (button.dataset.action === "finish") {
    if (!finishActiveTask(taskId, occurrenceDate)) return;
  }

  if (button.dataset.action === "cancel-timer") {
    cancelActiveTaskTimer(taskId, occurrenceDate);
  }

  if (button.dataset.action === "delete") {
    if (!deleteTask(taskId, occurrenceDate)) return;
  }

  saveTasks();
  render();
}

taskList.addEventListener("pointerdown", startTaskSwipe);
taskList.addEventListener("pointermove", updateTaskSwipe);
taskList.addEventListener("pointerup", finishTaskSwipe);
taskList.addEventListener("lostpointercapture", cancelTaskSwipe);
window.addEventListener("pointermove", updateTaskSwipe, { passive: false });
window.addEventListener("pointerup", finishTaskSwipe);
window.addEventListener("pointercancel", cancelTaskSwipe);
taskList.addEventListener("click", handleTaskSelectionClick);
taskList.addEventListener("pointerup", handleTaskDoubleTap);
taskList.addEventListener("pointerleave", () => {
  cancelInactiveTaskSwipe();
});
taskList.addEventListener("pointercancel", () => {
  cancelTaskSwipe();
});

scheduleGrid.addEventListener("pointerdown", startGridTaskMove);
scheduleGrid.addEventListener("pointermove", updateGridTaskMove);
scheduleGrid.addEventListener("pointerup", finishGridTaskMove);
scheduleGrid.addEventListener("pointerdown", startMonthDayPointer);
scheduleGrid.addEventListener("pointerup", finishMonthDayPointer);
scheduleGrid.addEventListener("click", handleTaskSelectionClick);
scheduleGrid.addEventListener("pointerup", handleTaskDoubleTap);
scheduleGrid.addEventListener("pointercancel", cancelGridTaskMove);
scheduleGrid.addEventListener("pointercancel", cancelMonthDayPointer);
scheduleGrid.addEventListener("pointerleave", (event) => {
  cancelInactiveGridTaskMove(event);
  cancelMonthDayPointer(event);
});

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
missedTaskList.addEventListener("click", handleTaskSelectionClick);

editTaskForm.addEventListener("submit", saveEditedTask);
cancelEditTaskButton.addEventListener("click", closeEditTask);
deleteEditedTaskButton.addEventListener("click", deleteEditedTask);
editTaskOverlay.addEventListener("click", (event) => {
  if (event.target === editTaskOverlay) closeEditTask();
});
deleteRepeatOnceButton?.addEventListener("click", () => confirmRepeatDelete("single"));
deleteRepeatAllButton?.addEventListener("click", () => confirmRepeatDelete("all"));
cancelRepeatDeleteButton?.addEventListener("click", closeRepeatDeleteDialog);
deleteRepeatOverlay?.addEventListener("click", (event) => {
  if (event.target === deleteRepeatOverlay) closeRepeatDeleteDialog();
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

  if (button.dataset.focusAction === "cancel" && activeTimer) {
    cancelActiveTaskTimer(activeTimer.taskId, activeTimer.occurrenceDate);
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
setInterval(updateScheduleCurrentTimeIndicators, 60 * 1000);

function applyStartupQuote() {
  if (!startupQuote || STARTUP_QUOTES.length === 0) return;

  const previousQuote = localStorage.getItem(STARTUP_QUOTE_STORAGE_KEY);
  const quoteOptions = STARTUP_QUOTES.length > 1
    ? STARTUP_QUOTES.filter((quote) => quote !== previousQuote)
    : STARTUP_QUOTES;
  const nextQuote = quoteOptions[Math.floor(Math.random() * quoteOptions.length)];

  startupQuote.textContent = nextQuote;
  localStorage.setItem(STARTUP_QUOTE_STORAGE_KEY, nextQuote);
}

function switchTab(tabName) {
  closeNotificationPanel();
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  document.querySelector("#homePanel").classList.toggle("active", tabName === "home");
  document.querySelector("#schedulePanel").classList.toggle("active", tabName === "schedule");
  document.querySelector("#completedPanel").classList.toggle("active", tabName === "completed");
  document.querySelector("#notesPanel").classList.toggle("active", tabName === "notes");
  document.querySelector("#statsPanel").classList.toggle("active", tabName === "stats");
  if (tabName === "notes") {
    requestAnimationFrame(renderActiveNoteDrawing);
  }
}

function render() {
  syncActiveTimerWithTasks();
  const occurrences = buildScheduleOccurrences();
  const visibleOccurrences = occurrences.filter(matchesCurrentFilter);
  const gridOccurrences = getGridOccurrences(occurrences);
  const scheduleDisplayOccurrences = scheduleView === "month"
    ? getMonthOccurrences(occurrences)
    : gridOccurrences;
  const completedToday = occurrences.filter(
    (task) => task.occurrenceDate === todayISO && task.done,
  );
  const pointsToday = completedToday.reduce((total, task) => total + calculatePoints(task), 0);
  const completedHistory = buildCompletedHistory();
  currentTypeStreaks = buildTypeStreakMap(completedHistory);

  taskCount.textContent = tasks.length;
  completedCount.textContent = completedToday.length;
  completedPoints.textContent = formatPoints(pointsToday);
  updateTopXp(pointsToday);
  renderTopStreakStatus(completedHistory, getTopStreakDays(completedHistory));
  renderTodaySummary(occurrences);
  renderHomeDashboard(occurrences, completedHistory);
  renderMissedTasks();
  renderScheduleFilterControls();
  renderFocusOverlay(occurrences);
  applyFeatureVisibility();
  reminderOccurrences = occurrences;
  renderNotifications(occurrences);
  ensureTaskReminderInterval();
  checkTaskReminders(occurrences);

  scheduleViewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === scheduleView);
  });
  scheduleDatePicker.value = scheduleAnchorDate;
  scheduleControls.classList.toggle("grid-mode", scheduleView === "grid");
  scheduleControls.classList.toggle("month-mode", scheduleView === "month");
  updateScheduleGridZoomControls();
  ensureTimerInterval();

  taskList.innerHTML = visibleOccurrences.map(createTaskCard).join("");
  scheduleGrid.innerHTML = createScheduleDisplay(scheduleDisplayOccurrences);
  updateTimerDisplay();
  renderScheduleListTimeline(visibleOccurrences);
  const isListView = scheduleView === "list";
  scheduleListLayout?.classList.toggle("hidden", !isListView);
  taskList.classList.toggle("hidden", !isListView);
  scheduleGrid.classList.toggle("active", scheduleView !== "list");
  scheduleGrid.classList.toggle("month-mode", scheduleView === "month");
  emptyState.classList.toggle("visible", scheduleView === "list" && visibleOccurrences.length === 0);
  if (scheduleView === "month") selectedTaskKeys = new Set();
  updateVisibleTaskSelectionKeys(scheduleView === "list" ? visibleOccurrences : scheduleDisplayOccurrences);
  renderTaskSelectionState();
  renderSelectionToolbars();
  renderOverlapAlert(scheduleView === "month" ? [] : scheduleView === "grid" ? scheduleDisplayOccurrences : visibleOccurrences);
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
        if (doesTaskRepeatOnDate(task, day)) {
          occurrences.push(createOccurrence(task, isoDate));
        }
      }

      return occurrences;
    })
    .sort(compareScheduleOccurrences);
}

function compareScheduleOccurrences(first, second) {
  return first.occurrenceDate.localeCompare(second.occurrenceDate)
    || Number(isAllDayTask(second)) - Number(isAllDayTask(first))
    || timeToMinutes(first.time) - timeToMinutes(second.time)
    || String(first.title).localeCompare(String(second.title));
}

function getScheduleOccurrenceWindow() {
  const todayStart = startOfToday(today);
  const anchor = parseISODate(scheduleAnchorDate);
  const range = scheduleView === "grid" ? getGridDateRange() : { start: anchor, end: anchor };
  const monthRange = scheduleView === "month" ? getMonthDateRange(scheduleAnchorDate) : { start: anchor, end: anchor };
  const homeRange = getGridDateRange({ anchorDate: homeGridAnchorDate || todayISO, range: homeGridRange });
  const earliest = minDate(todayStart, range.start, monthRange.start, homeRange.start, addDays(anchor, -7));
  const latest = maxDate(addDays(todayStart, SCHEDULE_DAYS_TO_SHOW), range.end, monthRange.end, homeRange.end, addDays(anchor, SCHEDULE_DAYS_TO_SHOW));

  return { start: earliest, end: latest };
}

function buildMissedOccurrences() {
  const missedStart = addDays(startOfToday(today), -30);
  const missedEnd = addDays(startOfToday(today), -1);
  const missed = [];

  tasks.forEach((task) => {
    if (isAllDayTask(task)) return;

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
      if (!doesTaskRepeatOnDate(task, day)) continue;

      const isoDate = toDateInputValue(day);
      const occurrence = createOccurrence(task, isoDate);
      if (!occurrence.done && !occurrence.skipped) {
        missed.push(occurrence);
      }
    }
  });

  return missed.sort((a, b) => `${b.occurrenceDate}T${b.time}`.localeCompare(`${a.occurrenceDate}T${a.time}`));
}

function doesTaskRepeatOnDate(task, day) {
  const taskStart = parseISODate(task.date);
  if (day < taskStart) return false;
  const repeatEndDate = normalizeOptionalRepeatEndDate(task.repeatEndDate, task.date);
  if (repeatEndDate && day > parseISODate(repeatEndDate)) return false;
  const repeatMode = getTaskRepeatModeValue(task);

  if (repeatMode === "specific") {
    return normalizeSpecificRepeatDates(task.repeatSpecificDates, task.date).includes(toDateInputValue(day));
  }

  const repeatDays = normalizeRepeatDays(task.repeatDays);
  const matchesWeeklyDay = repeatDays.includes(day.getDay());

  if (repeatMode === "interval") {
    const daysSinceStart = getDaysBetween(taskStart, day);
    const matchesInterval = daysSinceStart % normalizeRepeatIntervalDays(task.repeatIntervalDays) === 0;
    return matchesInterval || matchesWeeklyDay;
  }

  return matchesWeeklyDay;
}

function getTaskRepeatModeValue(task) {
  if (task?.repeatMode === "interval") return "interval";
  if (task?.repeatMode === "specific") return "specific";
  return "weekly";
}

function getDaysBetween(startDate, endDate) {
  const start = startOfToday(startDate).getTime();
  const end = startOfToday(endDate).getTime();
  return Math.round((end - start) / 86400000);
}

function buildCompletedHistory() {
  return tasks
    .flatMap((task) => {
      if (isAllDayTask(task)) return [];

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
  const done = isAllDayTask(task) ? false : task.repeats ? completedDates.includes(date) : Boolean(task.done);
  const earnedPoints = task.repeats ? earnedPointsByDate[date] : task.earnedPoints;
  const actualMinutes = task.repeats ? actualMinutesByDate[date] : task.actualMinutes;

  return {
    ...task,
    itemKind: getItemKind(task),
    priority: normalizePriority(task.priority),
    occurrenceDate: date,
    done,
    skipped: task.repeats ? skippedDates.includes(date) : Boolean(task.skipped),
    earnedPoints: done && Number.isFinite(Number(earnedPoints)) ? Number(earnedPoints) : null,
    actualMinutes: done && Number.isFinite(Number(actualMinutes)) ? Number(actualMinutes) : null,
  };
}

function renderTodaySummary(occurrences) {
  const todaysTasks = occurrences
    .filter((task) => task.occurrenceDate === todayISO && !task.skipped)
    .sort((first, second) => timeToMinutes(first.time) - timeToMinutes(second.time));
  const actionableTasks = todaysTasks.filter((task) => !isAllDayTask(task));
  const allDayCount = todaysTasks.length - actionableTasks.length;
  const totalMinutes = actionableTasks.reduce((total, task) => total + getScheduleProgressWeight(task), 0);
  const completedMinutes = actionableTasks
    .filter((task) => task.done)
    .reduce((total, task) => total + getScheduleProgressWeight(task), 0);
  const progressPercent = totalMinutes > 0
    ? Math.round((completedMinutes / totalMinutes) * 100)
    : 0;

  todayCount.textContent = `${actionableTasks.length} task${actionableTasks.length === 1 ? "" : "s"}${allDayCount ? ` + ${allDayCount} all-day` : ""}`;
  todayProgressPercent.textContent = `${progressPercent}%`;
  todayStatusChip.textContent = `${progressPercent}%`;
  todayProgressRing.style.setProperty("--today-progress", `${progressPercent * 3.6}deg`);
  todayDayparts.innerHTML = createTodayDayparts(todaysTasks);
  todayNextTask.innerHTML = createTodayNextTask(todaysTasks);

  if (todaysTasks.length === 0) {
    todaySummary.textContent = "No tasks scheduled for today yet.";
    return;
  }

  if (actionableTasks.length === 0 && allDayCount > 0) {
    todaySummary.textContent = "Only all-day events are scheduled today.";
    return;
  }

  const remaining = actionableTasks.filter((task) => !task.done).length;
  todaySummary.textContent =
    remaining === 0
      ? "Everything planned for today is complete."
      : `${remaining} task${remaining === 1 ? "" : "s"} still planned for today.`;
}

function createTodayNextTask(todaysTasks) {
  const nextTask = getNextTodayTask(todaysTasks);

  if (!nextTask) {
    return `
      <article class="today-next-card empty">
        <span>Next</span>
        <strong>All clear</strong>
        <small>No unfinished tasks left today.</small>
      </article>
    `;
  }

  const isReminder = isReminderItem(nextTask);
  const isTimerActive = isActiveTimerFor(nextTask);
  const isBlocked = Boolean(activeTimer && !isTimerActive);
  const action = isReminder ? "complete-reminder" : isTimerActive ? "finish" : "start";
  const buttonLabel = isReminder ? "Done" : isTimerActive ? "Finish" : "Start";
  const typeStyle = createTypeStyleAttribute(nextTask.type);
  const timerMarkup = isTimerActive
    ? `<small data-timer-countdown>${formatTimerRemaining(activeTimer)}</small>`
    : `<small>${escapeHTML(nextTask.type)} &middot; ${formatTimeRange(nextTask)}</small>`;

  return `
    <article class="today-next-card" data-task-id="${nextTask.id}" data-occurrence-date="${nextTask.occurrenceDate}" ${typeStyle}>
      <div class="today-next-copy">
        <span>Next task</span>
        <strong>${escapeHTML(nextTask.title)}</strong>
        ${timerMarkup}
      </div>
      <button class="today-next-start" type="button" data-action="${action}" ${isBlocked ? "disabled" : ""}>
        ${buttonLabel}
      </button>
    </article>
  `;
}

function getNextTodayTask(todaysTasks) {
  const unfinished = todaysTasks
    .filter((task) => !task.done && !isAllDayTask(task))
    .sort((first, second) => timeToMinutes(first.time) - timeToMinutes(second.time));
  if (!unfinished.length) return null;

  if (activeTimer) {
    const runningTask = unfinished.find((task) => isActiveTimerFor(task));
    if (runningTask) return runningTask;
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return unfinished.find((task) => timeToMinutes(task.time) >= currentMinutes) ?? unfinished[0];
}

function updateTopXp(pointsToday) {
  const nextXp = Math.round(Number(pointsToday) || 0);

  if (displayedTodayXp === null) {
    displayedTodayXp = nextXp;
    todayXpValue.textContent = formatPoints(nextXp);
    return;
  }

  if (nextXp > displayedTodayXp) {
    animateTopXpIncrease(displayedTodayXp, nextXp, pendingXpAnimation ?? nextXp - displayedTodayXp);
  } else {
    todayXpValue.textContent = formatPoints(nextXp);
  }

  displayedTodayXp = nextXp;
  pendingXpAnimation = null;
}

function animateTopXpIncrease(fromXp, toXp, gainedXp) {
  const pill = todayXpValue.closest(".top-xp-pill");
  const start = performance.now();
  const duration = 780;

  pill?.classList.remove("xp-pulse");
  void pill?.offsetWidth;
  pill?.classList.add("xp-pulse");
  createXpLightning(gainedXp, pill);

  const step = (timestamp) => {
    const progress = clamp((timestamp - start) / duration, 0, 1);
    const eased = 1 - (1 - progress) ** 3;
    todayXpValue.textContent = formatPoints(Math.round(fromXp + (toXp - fromXp) * eased));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

function createXpLightning(gainedXp, target) {
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const targetX = rect.left + rect.width / 2;
  const targetY = rect.top + rect.height / 2;
  const startPositions = [
    { x: Math.max(16, targetX - 170), y: Math.max(72, targetY + 170), rotate: "-18deg" },
    { x: Math.min(window.innerWidth - 44, targetX + 150), y: Math.max(62, targetY + 126), rotate: "22deg" },
    { x: Math.max(18, targetX - 46), y: Math.max(48, targetY + 210), rotate: "4deg" },
  ];

  startPositions.forEach((start, index) => {
    const bolt = document.createElement("span");
    bolt.className = "xp-lightning-bolt";
    bolt.style.setProperty("--bolt-start-x", `${start.x}px`);
    bolt.style.setProperty("--bolt-start-y", `${start.y}px`);
    bolt.style.setProperty("--bolt-delta-x", `${targetX - start.x}px`);
    bolt.style.setProperty("--bolt-delta-y", `${targetY - start.y}px`);
    bolt.style.setProperty("--bolt-delay", `${index * 72}ms`);
    bolt.style.setProperty("--bolt-rotate", start.rotate);
    document.body.append(bolt);
    bolt.addEventListener("animationend", () => bolt.remove(), { once: true });
  });

  const ring = document.createElement("span");
  ring.className = "xp-impact-ring";
  ring.style.setProperty("--impact-x", `${targetX}px`);
  ring.style.setProperty("--impact-y", `${targetY}px`);
  document.body.append(ring);
  ring.addEventListener("animationend", () => ring.remove(), { once: true });

  const chip = document.createElement("span");
  chip.className = "xp-flyout";
  chip.textContent = `+${formatPoints(gainedXp)} xp`;
  chip.style.setProperty("--xp-start-x", `${targetX - 20}px`);
  chip.style.setProperty("--xp-start-y", `${targetY + 8}px`);
  chip.style.setProperty("--xp-delta-x", "0px");
  chip.style.setProperty("--xp-delta-y", "-46px");
  document.body.append(chip);
  chip.addEventListener("animationend", () => chip.remove(), { once: true });
}

function createTodayDayparts(todaysTasks) {
  const timedTasks = todaysTasks.filter((task) => !isAllDayTask(task));
  const periods = [
    { label: "Morning", start: 0, end: 12 * 60, tone: "morning" },
    { label: "Afternoon", start: 12 * 60, end: 18 * 60, tone: "afternoon" },
    { label: "Night", start: 18 * 60, end: 24 * 60, tone: "night" },
  ];

  return periods
    .map((period) => {
      const periodTasks = timedTasks.filter((task) => {
        const start = timeToMinutes(task.time);
        return start >= period.start && start < period.end;
      });
      const unfinishedTasks = periodTasks.filter((task) => !task.done);
      const previewTasks = (unfinishedTasks.length ? unfinishedTasks : periodTasks).slice(0, 2);
      const countLabel = periodTasks.length
        ? `${periodTasks.filter((task) => task.done).length}/${periodTasks.length} done`
        : "No tasks";
      const taskRows = previewTasks.length
        ? previewTasks
            .map((task) => `
              <span title="${escapeHTML(task.title)}">
                <i>${formatTimeFromMinutes(timeToMinutes(task.time))}</i>
                <b>${escapeHTML(task.title)}</b>
              </span>
            `)
            .join("")
        : "<em>Clear</em>";

      return `
        <article class="today-daypart ${period.tone}">
          <div>
            <strong>${escapeHTML(period.label)}</strong>
            <small>${escapeHTML(countLabel)}</small>
          </div>
          <div class="today-daypart-tasks">${taskRows}</div>
        </article>
      `;
    })
    .join("");
}

function renderHomeDashboard(occurrences, completedHistory) {
  renderHomeRankCard(completedHistory);

  if (homeWeekStrip) {
    homeWeekStrip.innerHTML = createHomeWeekStrip(occurrences);
  }

  if (homeDayGrid) {
    const gridOccurrences = getGridOccurrences(occurrences, {
      anchorDate: homeGridAnchorDate,
      range: homeGridRange,
    });
    homeDayGrid.className = "schedule-grid-view home-schedule-grid active";
    homeDayGrid.classList.toggle("compact-15", homeGridZoom <= 1.9);
    homeDayGrid.classList.toggle("compact-30", homeGridZoom <= 1.25);
    homeDayGrid.innerHTML = createScheduleGrid(gridOccurrences, {
      anchorDate: homeGridAnchorDate,
      context: "home",
      range: homeGridRange,
      zoom: homeGridZoom,
    });
    updateHomeGridControls();
  }
}

function renderHomeRankCard(completedHistory) {
  if (!homeRankCard) return;

  homeRankCard.classList.toggle("hidden", !featureSettings.personalLeagues);
  if (!featureSettings.personalLeagues) {
    homeRankCard.innerHTML = "";
    return;
  }

  const leagueState = buildPersonalLeagueState(completedHistory);
  const nextLabel = leagueState.next
    ? `${leagueState.nextProgress}% to ${leagueState.next.name}`
    : "Top league";

  homeRankCard.style.setProperty("--rank-logo-color", leagueState.current.color);
  homeRankCard.innerHTML = `
    ${createRankLogo(leagueState.current, { className: "home-rank-logo", label: `${leagueState.current.name} league` })}
    <div>
      <span>Personal league</span>
      <strong>${escapeHTML(leagueState.current.name)}</strong>
      <small>${formatPoints(leagueState.averageXp)} avg xp/day &middot; ${escapeHTML(nextLabel)}</small>
    </div>
  `;
}

function createHomeWeekStrip(occurrences) {
  return getCurrentWeekDates()
    .map((date) => {
      const dayTasks = occurrences.filter((task) => task.occurrenceDate === date && !task.skipped);
      const doneCount = dayTasks.filter((task) => task.done).length;
      const day = parseISODate(date);
      const letter = day.toLocaleDateString(undefined, { weekday: "short" }).slice(0, 1);
      const classes = [
        "home-week-letter",
        date === todayISO ? "today" : "",
        dayTasks.length > 0 ? "has-tasks" : "",
        dayTasks.length > 0 && doneCount === dayTasks.length ? "complete" : "",
      ].filter(Boolean).join(" ");

      return `
        <span class="${classes}" title="${escapeHTML(formatDateHeading(date))}: ${doneCount}/${dayTasks.length} done">
          <strong>${escapeHTML(letter)}</strong>
          <small>${dayTasks.length ? `${doneCount}/${dayTasks.length}` : "-"}</small>
        </span>
      `;
    })
    .join("");
}

function createHomeDayGrid(todaysTasks) {
  const bounds = getHomeGridBounds(todaysTasks);
  const range = Math.max(bounds.end - bounds.start, 60);
  const gridHeight = Math.round(range * HOME_GRID_MINUTE_HEIGHT);
  const labels = getHomeGridLabelMinutes(bounds)
    .map((minute) => {
      const top = clamp(((minute - bounds.start) / range) * 100, 0, 100);
      return `<span style="top: ${top}%">${formatTimeFromMinutes(minute)}</span>`;
    })
    .join("");
  const lines = getHomeGridLabelMinutes(bounds)
    .map((minute) => {
      const top = clamp(((minute - bounds.start) / range) * 100, 0, 100);
      return `<i class="home-grid-line" style="top: ${top}%"></i>`;
    })
    .join("");
  const taskLayouts = createHomeGridTaskLayouts(todaysTasks);
  const taskMarkup = taskLayouts.length
    ? taskLayouts.map((layout) => createHomeGridTask(layout, bounds, range)).join("")
    : '<p class="home-grid-empty">No tasks planned today.</p>';

  return `
    <div class="home-day-grid" style="--home-grid-height: ${gridHeight}px">
      <div class="home-grid-times">${labels}</div>
      <div class="home-grid-board">
        <div class="home-grid-track">
          ${lines}
          ${taskMarkup}
        </div>
      </div>
    </div>
  `;
}

function getHomeGridBounds(dayTasks) {
  if (!dayTasks.length) return { start: 8 * 60, end: 13 * 60 };

  const starts = dayTasks.map((task) => timeToMinutes(task.time));
  const ends = dayTasks.map((task) => timeToMinutes(task.time) + getVisualTaskDuration(task));
  const start = clamp(Math.floor((Math.min(...starts) - 45) / 30) * 30, 0, 23 * 60);
  const end = clamp(Math.ceil((Math.max(...ends) + 45) / 30) * 30, start + 3 * 60, 24 * 60);
  return { start, end };
}

function getHomeGridLabelMinutes(bounds) {
  const range = bounds.end - bounds.start;
  const step = range > 9 * 60 ? 120 : 60;
  const labels = [];

  for (let minute = bounds.start; minute <= bounds.end; minute += step) {
    labels.push(minute);
  }

  if (labels.at(-1) !== bounds.end) labels.push(bounds.end);
  return labels;
}

function createHomeGridTaskLayouts(dayTasks) {
  const items = dayTasks
    .map((task) => {
      const start = timeToMinutes(task.time);
      return {
        task,
        start,
        end: start + getVisualTaskDuration(task),
      };
    })
    .sort((first, second) => first.start - second.start || second.end - first.end);
  const groups = [];

  items.forEach((item) => {
    const currentGroup = groups.at(-1);
    if (!currentGroup || item.start >= currentGroup.end) {
      groups.push({ end: item.end, items: [item] });
      return;
    }

    currentGroup.items.push(item);
    currentGroup.end = Math.max(currentGroup.end, item.end);
  });

  return groups.flatMap(assignHomeGridLanes);
}

function assignHomeGridLanes(group) {
  const laneEnds = [];
  const placed = group.items.map((item) => {
    let lane = laneEnds.findIndex((end) => end <= item.start);
    if (lane === -1) lane = laneEnds.length;
    laneEnds[lane] = item.end;
    return { ...item, lane };
  });
  const laneCount = Math.max(laneEnds.length, 1);

  return placed.map((item) => ({ ...item, laneCount }));
}

function createHomeGridTask(layout, bounds, range) {
  const duration = Math.max(layout.end - layout.start, GRID_MOVE_SNAP_MINUTES);
  const top = clamp(((layout.start - bounds.start) / range) * 100, 0, 100);
  const height = clamp((duration / range) * 100, 0, 100);
  const laneGap = layout.laneCount > 1 ? 1.4 : 0;
  const width = (100 - laneGap * (layout.laneCount - 1)) / layout.laneCount;
  const left = layout.lane * (width + laneGap);
  const typeStyle = getTaskTypeStyle(layout.task.type);
  const classes = [
    "home-grid-task",
    layout.task.done ? "done" : "",
    isReminderItem(layout.task) ? "reminder" : "",
    duration <= 20 ? "short" : "",
  ].filter(Boolean).join(" ");

  return `
    <article class="${classes}" style="--home-top: ${top}%; --home-height: ${height}%; --home-left: ${left}%; --home-width: ${width}%; --type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg};">
      <span>${formatTimeFromMinutes(layout.start)}</span>
      <strong>${escapeHTML(layout.task.title)}</strong>
    </article>
  `;
}

function renderHomeWidgetControls() {
  if (!homeWidgetControls) return;

  homeWidgetControls.innerHTML = HOME_WIDGET_DEFINITIONS
    .map((widget) => `
      <button class="${homeWidgets.includes(widget.id) ? "active" : ""}" type="button" data-home-widget="${widget.id}">
        <span>${escapeHTML(widget.label)}</span>
      </button>
    `)
    .join("");
}

function toggleHomeWidgetPicker(event) {
  event.stopPropagation();
  const isOpen = homeWidgetPicker?.classList.contains("hidden");
  setHomeWidgetPickerOpen(Boolean(isOpen));
}

function setHomeWidgetPickerOpen(isOpen) {
  if (!homeWidgetPicker || !homeWidgetAddButton) return;

  homeWidgetPicker.classList.toggle("hidden", !isOpen);
  homeWidgetAddButton.setAttribute("aria-expanded", String(isOpen));
}

function handleHomeWidgetOutsideClick(event) {
  if (!homeWidgetPicker || homeWidgetPicker.classList.contains("hidden")) return;
  if (event.target.closest(".home-widget-actions")) return;
  setHomeWidgetPickerOpen(false);
}

function handleHomeWidgetToggle(event) {
  const button = event.target.closest("[data-home-widget]");
  if (!button) return;
  event.stopPropagation();

  const widgetId = button.dataset.homeWidget;
  homeWidgets = homeWidgets.includes(widgetId)
    ? homeWidgets.filter((id) => id !== widgetId)
    : [...homeWidgets, widgetId];
  saveHomeWidgets();
  renderHomeWidgetControls();
  render();
}

function handleHomeWidgetGridClick(event) {
  const removeButton = event.target.closest("[data-remove-home-widget]");
  if (!removeButton) return;

  homeWidgets = homeWidgets.filter((id) => id !== removeButton.dataset.removeHomeWidget);
  saveHomeWidgets();
  renderHomeWidgetControls();
  render();
}

function renderHomeWidgets(occurrences, completedHistory) {
  if (!homeWidgetGrid) return;

  const widgets = getOrderedHomeWidgets()
    .map((widgetId) => createHomeWidget(widgetId, occurrences, completedHistory))
    .filter(Boolean);
  homeWidgetGrid.closest(".home-widgets-card")?.classList.toggle("hidden", widgets.length === 0);
  homeWidgetGrid.innerHTML = widgets.join("");
  requestAnimationFrame(applyHomeWidgetLayout);
}

function applyHomeWidgetLayout() {
  if (!homeWidgetGrid) return;

  const cards = [...homeWidgetGrid.querySelectorAll(".home-widget[data-home-widget-card]")];
  if (!cards.length) {
    homeWidgetGrid.classList.remove("home-widget-grid-desktop");
    homeWidgetGrid.style.height = "";
    return;
  }

  if (!isDesktopHomeWidgetLayout()) {
    homeWidgetGrid.classList.remove("home-widget-grid-desktop", "is-dragging");
    homeWidgetGrid.style.height = "";
    cards.forEach((card) => {
      card.style.left = "";
      card.style.top = "";
      card.style.width = "";
    });
    return;
  }

  const metrics = getHomeWidgetLayoutMetrics();
  const defaultPlacements = getDefaultHomeWidgetPlacements(metrics);
  const occupancy = [];
  homeWidgetGrid.classList.add("home-widget-grid-desktop");
  cards.forEach((card, index) => {
    const widgetId = card.dataset.homeWidgetCard;
    const span = getHomeWidgetSpan(widgetId);
    const rows = getHomeWidgetRowSpan(widgetId);
    const fallback = defaultPlacements[widgetId] ?? getDefaultHomeWidgetPosition(index, span, metrics);
    const savedPosition = homeWidgetLayout[widgetId] ?? fallback;
    const width = getHomeWidgetWidth(span, metrics);
    const desiredSlot = getHomeWidgetSlotFromPosition(savedPosition, span, metrics);
    const fallbackSlot = getHomeWidgetSlotFromPosition(fallback, span, metrics);
    const openSlot = getOpenHomeWidgetSlot(occupancy, desiredSlot, fallbackSlot, span, rows, metrics.columns);
    const { x, y } = getHomeWidgetPositionFromSlot(openSlot, metrics);

    card.style.width = `${width}px`;
    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    occupyHomeWidgetSlot(occupancy, openSlot, span, rows);
  });
  updateHomeWidgetCanvasHeight();
}

function isDesktopHomeWidgetLayout() {
  return window.matchMedia?.(HOME_WIDGET_DESKTOP_QUERY).matches ?? false;
}

function getHomeWidgetLayoutMetrics() {
  const width = Math.max(homeWidgetGrid?.clientWidth ?? 0, 320);
  const gap = 12;
  const columns = 4;
  const columnWidth = Math.max(120, Math.floor((width - gap * (columns - 1)) / columns));
  return { width, gap, columns, columnWidth };
}

function getHomeWidgetWidth(span, metrics) {
  const safeSpan = clamp(Math.round(span), 1, metrics.columns);
  return Math.min(metrics.width, metrics.columnWidth * safeSpan + metrics.gap * (safeSpan - 1));
}

function getDefaultHomeWidgetPlacements(metrics) {
  const occupancy = [];
  const placements = {};
  const orderedWidgets = getOrderedHomeWidgets();

  orderedWidgets.forEach((widgetId) => {
    const span = getHomeWidgetSpan(widgetId);
    const rows = getHomeWidgetRowSpan(widgetId);
    const position = findHomeWidgetSlot(occupancy, span, rows, metrics.columns);
    placements[widgetId] = {
      x: position.column * (metrics.columnWidth + metrics.gap),
      y: position.row * HOME_WIDGET_ROW_HEIGHT,
    };
    occupyHomeWidgetSlot(occupancy, position, span, rows);
  });

  return placements;
}

function getOrderedHomeWidgets() {
  return [
    ...HOME_WIDGET_RENDER_ORDER.filter((widgetId) => homeWidgets.includes(widgetId)),
    ...homeWidgets.filter((widgetId) => !HOME_WIDGET_RENDER_ORDER.includes(widgetId)),
  ];
}

function findHomeWidgetSlot(occupancy, span, rows, columns) {
  for (let row = 0; row < 100; row += 1) {
    for (let column = 0; column <= columns - span; column += 1) {
      if (canFitHomeWidgetSlot(occupancy, row, column, span, rows)) {
        return { row, column };
      }
    }
  }

  return { row: occupancy.length, column: 0 };
}

function canFitHomeWidgetSlot(occupancy, row, column, span, rows) {
  for (let rowIndex = row; rowIndex < row + rows; rowIndex += 1) {
    for (let columnIndex = column; columnIndex < column + span; columnIndex += 1) {
      if (occupancy[rowIndex]?.[columnIndex]) return false;
    }
  }
  return true;
}

function occupyHomeWidgetSlot(occupancy, position, span, rows) {
  for (let rowIndex = position.row; rowIndex < position.row + rows; rowIndex += 1) {
    occupancy[rowIndex] ??= [];
    for (let columnIndex = position.column; columnIndex < position.column + span; columnIndex += 1) {
      occupancy[rowIndex][columnIndex] = true;
    }
  }
}

function getOpenHomeWidgetSlot(occupancy, desiredSlot, fallbackSlot, span, rows, columns) {
  if (canFitHomeWidgetSlot(occupancy, desiredSlot.row, desiredSlot.column, span, rows)) {
    return desiredSlot;
  }

  if (canFitHomeWidgetSlot(occupancy, fallbackSlot.row, fallbackSlot.column, span, rows)) {
    return fallbackSlot;
  }

  return findNearestHomeWidgetSlot(occupancy, desiredSlot, span, rows, columns);
}

function findNearestHomeWidgetSlot(occupancy, desiredSlot, span, rows, columns) {
  const maxRow = Math.max(80, occupancy.length + rows + 12, desiredSlot.row + rows + 12);
  let bestSlot = null;
  let bestScore = Infinity;

  for (let row = 0; row <= maxRow; row += 1) {
    for (let column = 0; column <= columns - span; column += 1) {
      if (!canFitHomeWidgetSlot(occupancy, row, column, span, rows)) continue;
      const rowDistance = Math.abs(row - desiredSlot.row);
      const columnDistance = Math.abs(column - desiredSlot.column);
      const score = rowDistance * 4 + columnDistance + (row < desiredSlot.row ? 0.35 : 0);
      if (score < bestScore) {
        bestScore = score;
        bestSlot = { row, column };
      }
    }
  }

  return bestSlot ?? findHomeWidgetSlot(occupancy, span, rows, columns);
}

function createHomeWidgetOccupancy(excludedWidgetId, metrics) {
  const occupancy = [];
  const cards = [...homeWidgetGrid.querySelectorAll(".home-widget[data-home-widget-card]")];

  cards.forEach((card) => {
    const widgetId = card.dataset.homeWidgetCard;
    if (widgetId === excludedWidgetId) return;

    const span = getHomeWidgetSpan(widgetId);
    const rows = getHomeWidgetRowSpan(widgetId);
    const slot = getHomeWidgetSlotFromPosition(
      {
        x: parseFloat(card.style.left) || 0,
        y: parseFloat(card.style.top) || 0,
      },
      span,
      metrics,
    );
    occupyHomeWidgetSlot(occupancy, slot, span, rows);
  });

  return occupancy;
}

function getHomeWidgetSlotFromPosition(position, span, metrics) {
  const column = getHomeWidgetColumnFromX(position?.x, span, metrics);
  const row = getHomeWidgetRowFromY(position?.y);
  return { row, column };
}

function getHomeWidgetPositionFromSlot(slot, metrics) {
  return {
    x: slot.column * (metrics.columnWidth + metrics.gap),
    y: slot.row * HOME_WIDGET_ROW_HEIGHT,
  };
}

function getHomeWidgetColumnFromX(value, span, metrics) {
  const columnStep = metrics.columnWidth + metrics.gap;
  const maxColumn = Math.max(metrics.columns - span, 0);
  return clamp(Math.round((Number(value) || 0) / columnStep), 0, maxColumn);
}

function getHomeWidgetRowFromY(value) {
  return Math.max(0, Math.round((Number(value) || 0) / HOME_WIDGET_ROW_HEIGHT));
}

function getDefaultHomeWidgetPosition(index, span, metrics) {
  const layoutCursor = homeWidgets
    .slice(0, index)
    .reduce((cursor, widgetId) => {
      const widgetSpan = getHomeWidgetSpan(widgetId);
      const widgetRows = getHomeWidgetRowSpan(widgetId);
      const nextCursor = { ...cursor };
      if (nextCursor.column + widgetSpan > metrics.columns) {
        nextCursor.column = 0;
        nextCursor.row += 1;
      }
      nextCursor.column += widgetSpan;
      if (nextCursor.column >= metrics.columns) {
        nextCursor.column = 0;
        nextCursor.row += widgetRows;
      }
      return nextCursor;
    }, { column: 0, row: 0 });

  const column = layoutCursor.column + span > metrics.columns ? 0 : layoutCursor.column;
  const row = layoutCursor.column + span > metrics.columns ? layoutCursor.row + 1 : layoutCursor.row;
  return {
    x: snapHomeWidgetValue(column * (metrics.columnWidth + metrics.gap)),
    y: snapHomeWidgetValue(row * HOME_WIDGET_ROW_HEIGHT),
  };
}

function getHomeWidgetSpan(widgetId) {
  if (widgetId === "dayGrid") return 4;
  if (widgetId === "stats" || widgetId === "week") return 2;
  return 1;
}

function getHomeWidgetRowSpan(widgetId) {
  if (widgetId === "dayGrid") return 5;
  if (widgetId === "stats") return 2;
  return 1;
}

function snapHomeWidgetValue(value) {
  return Math.round(value / HOME_WIDGET_SNAP_SIZE) * HOME_WIDGET_SNAP_SIZE;
}

function snapHomeWidgetX(value, width, metrics) {
  const maxX = Math.max(metrics.width - width, 0);
  const columnStep = metrics.columnWidth + metrics.gap;
  const column = clamp(Math.round((Number(value) || 0) / columnStep), 0, metrics.columns - 1);
  return clamp(column * columnStep, 0, maxX);
}

function snapHomeWidgetY(value) {
  return Math.max(0, Math.round((Number(value) || 0) / HOME_WIDGET_ROW_HEIGHT) * HOME_WIDGET_ROW_HEIGHT);
}

function updateHomeWidgetCanvasHeight() {
  if (!homeWidgetGrid?.classList.contains("home-widget-grid-desktop")) return;
  const cards = [...homeWidgetGrid.querySelectorAll(".home-widget[data-home-widget-card]")];
  const bottom = cards.reduce((maxBottom, card) => {
    const top = parseFloat(card.style.top) || 0;
    return Math.max(maxBottom, top + card.offsetHeight);
  }, 0);
  homeWidgetGrid.style.height = `${Math.max(bottom + HOME_WIDGET_SNAP_SIZE, 180)}px`;
}

function startHomeWidgetDrag(event) {
  if (!isDesktopHomeWidgetLayout() || event.button !== 0) return;
  if (event.target.closest("button, input, select, textarea, a")) return;

  const card = event.target.closest(".home-widget[data-home-widget-card]");
  if (!card || !homeWidgetGrid?.contains(card)) return;

  const gridRect = homeWidgetGrid.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  homeWidgetDragState = {
    pointerId: event.pointerId,
    card,
    widgetId: card.dataset.homeWidgetCard,
    offsetX: event.clientX - cardRect.left,
    offsetY: event.clientY - cardRect.top,
    width: cardRect.width,
    height: cardRect.height,
    gridStartX: gridRect.left,
    gridStartY: gridRect.top,
    moved: false,
  };

  card.classList.add("dragging");
  homeWidgetGrid.classList.add("is-dragging");
  card.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}

function updateHomeWidgetDrag(event) {
  if (!homeWidgetDragState || event.pointerId !== homeWidgetDragState.pointerId) return;

  const gridRect = homeWidgetGrid.getBoundingClientRect();
  const maxY = Math.max(homeWidgetGrid.clientHeight + 260 - homeWidgetDragState.height, 0);
  const metrics = getHomeWidgetLayoutMetrics();
  const rawX = event.clientX - gridRect.left - homeWidgetDragState.offsetX;
  const rawY = clamp(event.clientY - gridRect.top - homeWidgetDragState.offsetY, 0, maxY);
  const span = getHomeWidgetSpan(homeWidgetDragState.widgetId);
  const rows = getHomeWidgetRowSpan(homeWidgetDragState.widgetId);
  const desiredSlot = getHomeWidgetSlotFromPosition({ x: rawX, y: rawY }, span, metrics);
  const occupancy = createHomeWidgetOccupancy(homeWidgetDragState.widgetId, metrics);
  const openSlot = getOpenHomeWidgetSlot(occupancy, desiredSlot, desiredSlot, span, rows, metrics.columns);
  const { x, y } = getHomeWidgetPositionFromSlot(openSlot, metrics);

  homeWidgetDragState.moved = true;
  homeWidgetDragState.card.style.left = `${x}px`;
  homeWidgetDragState.card.style.top = `${y}px`;
  homeWidgetLayout = {
    ...homeWidgetLayout,
    [homeWidgetDragState.widgetId]: { x, y },
  };
  updateHomeWidgetCanvasHeight();
  event.preventDefault();
}

function finishHomeWidgetDrag(event) {
  if (!homeWidgetDragState || event.pointerId !== homeWidgetDragState.pointerId) return;

  if (homeWidgetDragState.moved) saveHomeWidgetLayout();
  cancelHomeWidgetDrag(event);
}

function cancelHomeWidgetDrag(event) {
  if (!homeWidgetDragState) return;
  if (event?.pointerId !== undefined && event.pointerId !== homeWidgetDragState.pointerId) return;

  homeWidgetDragState.card.classList.remove("dragging");
  if (homeWidgetDragState.card.hasPointerCapture?.(homeWidgetDragState.pointerId)) {
    homeWidgetDragState.card.releasePointerCapture(homeWidgetDragState.pointerId);
  }
  homeWidgetGrid?.classList.remove("is-dragging");
  homeWidgetDragState = null;
}

function createHomeWidget(widgetId, occurrences, completedHistory) {
  if (widgetId === "stats") return createStatsHomeWidget(occurrences, completedHistory);
  if (widgetId === "streak") return createStreakHomeWidget(completedHistory);
  if (widgetId === "dayGrid") return createDayGridHomeWidget(occurrences);
  if (widgetId === "week") return createWeekHomeWidget(occurrences);
  if (widgetId === "reminders") return createRemindersHomeWidget(occurrences);
  if (widgetId === "upcoming") return createUpcomingHomeWidget(occurrences);
  if (widgetId === "focus") return createFocusHomeWidget(occurrences);
  if (widgetId === "typeMix") return createTypeMixHomeWidget(occurrences);
  if (widgetId === "xpGoal") return createXpGoalHomeWidget(completedHistory);
  return "";
}

function createHomeWidgetShell(widgetId, label, headline, content, extraClass = "") {
  return `
    <article class="home-widget ${extraClass}" data-home-widget-card="${widgetId}">
      <button class="home-widget-remove" data-remove-home-widget="${widgetId}" type="button" aria-label="Remove ${escapeHTML(label)} widget" title="Remove">x</button>
      <span>${escapeHTML(label)}</span>
      <strong>${headline}</strong>
      ${content}
    </article>
  `;
}

function createStatsHomeWidget(occurrences, completedHistory) {
  const days = 7;
  const dailyStats = buildDailyStats(completedHistory, days);
  const summary = summarizeStatsRange(dailyStats);
  const completed = getCompletedTasksInStatsRange(completedHistory, days);
  const topType = buildCompletedTypeStats(completed)[0];
  const bars = dailyStats
    .map((day) => {
      const maxPoints = Math.max(...dailyStats.map((stat) => stat.points), 20);
      const height = day.points > 0 ? Math.max((day.points / maxPoints) * 100, 12) : 4;
      return `
        <span class="home-stats-bar" title="${escapeHTML(formatDateHeading(day.date))}: ${formatPoints(day.points)} xp">
          <i style="height: ${height}%"></i>
          <small>${DAY_NAMES[parseISODate(day.date).getDay()]}</small>
        </span>
      `;
    })
    .join("");
  const momentumClass = summary.momentumChange > 0 ? "up" : summary.momentumChange < 0 ? "down" : "flat";
  const topTypeText = topType
    ? `${topType.type} led with ${formatPoints(topType.points)} xp`
    : "Complete tasks to build your task mix.";

  return createHomeWidgetShell(
    "stats",
    "Stats",
    `${formatPoints(summary.totalPoints)} xp`,
    `
      <div class="home-stats-summary">
        <div class="home-stats-kpis">
          <article>
            <span>Time</span>
            <strong>${formatMinutesAsHours(summary.totalMinutes)}</strong>
          </article>
          <article>
            <span>Tasks</span>
            <strong>${summary.totalTasks}</strong>
          </article>
          <article>
            <span>Active</span>
            <strong>${summary.activeDays}/7</strong>
          </article>
        </div>
        <div class="home-stats-bars" aria-label="Last 7 days xp">
          ${bars}
        </div>
      </div>
      <div class="home-stats-footer ${momentumClass}">
        <span>Momentum</span>
        <strong>${formatPercentChange(summary.momentumChange)}</strong>
        <small>${escapeHTML(topTypeText)}</small>
      </div>
    `,
    "home-widget-wide home-widget-stats-card",
  );
}

function createStreakHomeWidget(completedHistory) {
  const streakDays = getTopStreakDays(completedHistory);
  const todayMinutes = getCompletedMinutesForDate(completedHistory, todayISO);
  const remaining = Math.max(STREAK_MINUTES_TO_KEEP - todayMinutes, 0);

  return createHomeWidgetShell(
    "streak",
    "Streak",
    `${streakDays} day${streakDays === 1 ? "" : "s"}`,
    `<p>${remaining === 0 ? "Secured today" : `${remaining}m left to secure today`}</p>`,
  );
}

function createDayGridHomeWidget(occurrences) {
  const dayTasks = occurrences
    .filter((task) => task.occurrenceDate === todayISO && !task.skipped)
    .sort((first, second) => timeToMinutes(first.time) - timeToMinutes(second.time))
    .slice(0, 12);
  const bounds = getMiniDayGridBounds(dayTasks);
  const range = Math.max(bounds.end - bounds.start, 60);
  const labels = getMiniDayGridLabelMinutes(bounds)
    .map((minute) => {
      const top = clamp(((minute - bounds.start) / range) * 100, 0, 100);
      return `<span style="top: ${top}%">${formatTimeFromMinutes(minute)}</span>`;
    })
    .join("");
  const lines = getMiniDayGridLabelMinutes(bounds)
    .map((minute) => {
      const top = clamp(((minute - bounds.start) / range) * 100, 0, 100);
      return `<i class="mini-grid-line" style="top: ${top}%"></i>`;
    })
    .join("");
  const tasksMarkup = dayTasks.length > 0
    ? dayTasks.map((task) => createMiniGridTask(task, bounds, range)).join("")
    : '<p class="mini-grid-empty">Nothing planned</p>';

  return createHomeWidgetShell(
    "dayGrid",
    "Today grid",
    "Full day schedule",
    `
      <div class="mini-day-grid">
        <div class="mini-time-column">${labels}</div>
        <div class="mini-grid-board">
          ${lines}
          ${tasksMarkup}
        </div>
      </div>
    `,
    "home-widget-wide home-widget-grid-card",
  );
}

function getMiniDayGridBounds(dayTasks) {
  if (dayTasks.length === 0) return { start: 7 * 60, end: 22 * 60 };

  const taskStarts = dayTasks.map((task) => timeToMinutes(task.time));
  const taskEnds = dayTasks.map((task) => timeToMinutes(task.time) + getVisualTaskDuration(task));
  const start = clamp(Math.floor((Math.min(...taskStarts) - 60) / 60) * 60, 0, 22 * 60);
  const end = clamp(Math.ceil((Math.max(...taskEnds) + 60) / 60) * 60, start + 6 * 60, 24 * 60);
  return { start, end };
}

function getMiniDayGridLabelMinutes(bounds) {
  const range = bounds.end - bounds.start;
  const step = range > 10 * 60 ? 120 : 60;
  const labels = [];
  for (let minute = bounds.start; minute <= bounds.end; minute += step) {
    labels.push(minute);
  }
  if (labels.at(-1) !== bounds.end) labels.push(bounds.end);
  return labels;
}

function createMiniGridTask(task, bounds, range) {
  const start = timeToMinutes(task.time);
  const duration = getVisualTaskDuration(task);
  const top = clamp(((start - bounds.start) / range) * 100, 0, 96);
  const height = clamp((duration / range) * 100, 12, 72);
  const typeStyle = getTaskTypeStyle(task.type);
  const classes = [
    "mini-grid-task",
    task.done ? "done" : "",
    isReminderItem(task) ? "reminder" : "",
  ].filter(Boolean).join(" ");

  return `
    <div class="${classes}" style="--mini-top: ${top}%; --mini-height: ${height}%; --type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg};">
      <span>${formatTimeFromMinutes(start)}</span>
      <strong>${escapeHTML(task.title)}</strong>
      <small>${escapeHTML(task.type)}</small>
    </div>
  `;
}

function createWeekHomeWidget(occurrences) {
  const weekDates = getCurrentWeekDates();
  const bars = weekDates
    .map((date) => {
      const dayTasks = occurrences.filter((task) => task.occurrenceDate === date && !task.skipped);
      const doneCount = dayTasks.filter((task) => task.done).length;
      const percent = dayTasks.length > 0 ? Math.round((doneCount / dayTasks.length) * 100) : 0;
      return `
        <span class="home-week-day" title="${escapeHTML(formatDateHeading(date))}: ${doneCount}/${dayTasks.length}">
          <i style="height: ${Math.max(percent, dayTasks.length ? 12 : 4)}%"></i>
          <small>${DAY_NAMES[parseISODate(date).getDay()]}</small>
        </span>
      `;
    })
    .join("");

  return createHomeWidgetShell(
    "week",
    "Week",
    "Progress by day",
    `<div class="home-week-bars">${bars}</div>`,
    "home-widget-wide",
  );
}

function createRemindersHomeWidget(occurrences) {
  const reminders = getUpcomingOccurrences(occurrences)
    .filter(isReminderItem)
    .slice(0, 3);
  const rows = reminders.length > 0
    ? reminders.map((task) => `<li><span>${formatDateHeading(task.occurrenceDate)}</span>${formatTimeFromMinutes(timeToMinutes(task.time))} - ${escapeHTML(task.title)}</li>`).join("")
    : "<li>No reminders coming up</li>";

  return createHomeWidgetShell(
    "reminders",
    "Reminders",
    `${reminders.length} next`,
    `<ul class="home-widget-list">${rows}</ul>`,
  );
}

function createUpcomingHomeWidget(occurrences) {
  const upcoming = getUpcomingOccurrences(occurrences).slice(0, 3);
  const rows = upcoming.length > 0
    ? upcoming.map((task) => `<li><span>${formatDateHeading(task.occurrenceDate)}</span>${formatTimeFromMinutes(timeToMinutes(task.time))} - ${escapeHTML(task.title)}</li>`).join("")
    : "<li>No upcoming tasks</li>";

  return createHomeWidgetShell(
    "upcoming",
    "Upcoming",
    `${upcoming.length} next`,
    `<ul class="home-widget-list">${rows}</ul>`,
  );
}

function createFocusHomeWidget(occurrences) {
  const focusTask = getUpcomingOccurrences(occurrences)
    .filter((task) => !isReminderItem(task))
    .sort((first, second) => getVisualTaskDuration(second) - getVisualTaskDuration(first))
    [0];

  if (!focusTask) {
    return createHomeWidgetShell("focus", "Focus", "No focus block", "<p>Add a longer task when you are ready.</p>");
  }

  return createHomeWidgetShell(
    "focus",
    "Focus",
    escapeHTML(focusTask.title),
    `<p>${formatDateHeading(focusTask.occurrenceDate)} &middot; ${formatTimeRange(focusTask)} &middot; ${escapeHTML(focusTask.type)}</p>`,
  );
}

function createTypeMixHomeWidget(occurrences) {
  const weekDates = new Set(getCurrentWeekDates());
  const typeStats = new Map();
  occurrences
    .filter((task) => weekDates.has(task.occurrenceDate) && !task.skipped)
    .forEach((task) => {
      const stats = typeStats.get(task.type) ?? { type: task.type, count: 0 };
      stats.count += 1;
      typeStats.set(task.type, stats);
    });
  const topTypes = [...typeStats.values()].sort((first, second) => second.count - first.count).slice(0, 3);
  const rows = topTypes.length > 0
    ? topTypes.map((type) => {
      const typeStyle = getTaskTypeStyle(type.type);
      return `<li style="--type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg};"><span class="home-type-dot"></span>${escapeHTML(type.type)} <small>${type.count}</small></li>`;
    }).join("")
    : "<li>No task types this week</li>";

  return createHomeWidgetShell(
    "typeMix",
    "Types",
    "This week",
    `<ul class="home-widget-list home-type-list">${rows}</ul>`,
  );
}

function createXpGoalHomeWidget(completedHistory) {
  const weekDates = new Set(getCurrentWeekDates());
  const points = completedHistory
    .filter((task) => weekDates.has(task.occurrenceDate))
    .reduce((total, task) => total + calculatePoints(task), 0);
  const goal = weeklyGoals.points ?? 0;
  const goalText = goal > 0 ? `Goal: improve weekly xp by ${goal}%` : "No weekly xp goal set";

  return createHomeWidgetShell(
    "xpGoal",
    "xp goal",
    `${formatPoints(points)} xp`,
    `<p>${goalText}</p>`,
  );
}

function getUpcomingOccurrences(occurrences) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return occurrences
    .filter((task) => {
      if (task.done || task.skipped || isAllDayTask(task)) return false;
      if (task.occurrenceDate > todayISO) return true;
      return task.occurrenceDate === todayISO && timeToMinutes(task.time) >= currentMinutes;
    })
    .sort((first, second) =>
      first.occurrenceDate.localeCompare(second.occurrenceDate)
      || timeToMinutes(first.time) - timeToMinutes(second.time)
    );
}

function setupScheduleTaskForm() {
  if (!taskForm || !scheduleHeader) return;
  taskForm.classList.add("schedule-task-form");
  taskForm.classList.remove("hidden");
  scheduleHeader.insertAdjacentElement("afterend", taskForm);
}

function setTaskFormCollapsed(isCollapsed) {
  taskForm.classList.toggle("collapsed", isCollapsed);
  if (taskFormHeader) {
    taskFormHeader.setAttribute("aria-expanded", String(!isCollapsed));
    taskFormHeader.setAttribute("title", isCollapsed ? "Open add task" : "Collapse add task");
  }
  localStorage.setItem(TASK_FORM_COLLAPSED_STORAGE_KEY, String(isCollapsed));
}

function toggleItemKindFields() {
  const isReminder = taskItemKindInput.value === "reminder";
  const timerMode = normalizeTimerMode(taskTimerModeInput.value);
  const isStopwatch = !isReminder && timerMode === "stopwatch";
  const isAllDay = !isReminder && timerMode === "all-day";
  if (!taskRepeatsInput.checked) {
    taskRepeatModeInput.value = isReminder ? "interval" : "weekly";
  }
  taskEndTimeField?.classList.toggle("hidden", !isReminder);
  if (!isReminder) taskEndTimeInput.value = "";
  taskTimeInput.closest("label")?.classList.toggle("hidden", isAllDay);
  taskTimeInput.toggleAttribute("required", !isAllDay);
  taskTimeInput.disabled = isAllDay;
  if (isAllDay) taskTimeInput.value = "";
  setDurationControlState(taskDurationInput, taskDurationField, {
    hidden: isReminder || isAllDay,
    disabled: isStopwatch || isAllDay,
    hoursInput: taskDurationHoursInput,
    minutesInput: taskDurationMinutesInput,
  });
  taskTimerModeField.classList.toggle("hidden", isReminder);
  taskDurationInput.removeAttribute("required");
  taskTimerModeInput.toggleAttribute("required", !isReminder);
  taskTimeLabel.textContent = isReminder ? "Set time" : "Estimated start";
  toggleRepeatControls();
}

function toggleEditItemKindFields() {
  const isReminder = editItemKindInput.value === "reminder";
  const timerMode = normalizeTimerMode(editTaskTimerModeInput.value);
  const isStopwatch = !isReminder && timerMode === "stopwatch";
  const isAllDay = !isReminder && timerMode === "all-day";
  if (!editTaskRepeatsInput.checked) {
    editRepeatModeInput.value = isReminder ? "interval" : "weekly";
  }
  editTaskEndTimeField?.classList.toggle("hidden", !isReminder);
  if (!isReminder) editTaskEndTimeInput.value = "";
  editTaskTimeInput.closest("label")?.classList.toggle("hidden", isAllDay);
  editTaskTimeInput.toggleAttribute("required", !isAllDay);
  editTaskTimeInput.disabled = isAllDay;
  if (isAllDay) editTaskTimeInput.value = "";
  setDurationControlState(editTaskDurationInput, editTaskDurationField, {
    hidden: isReminder || isAllDay,
    disabled: isStopwatch || isAllDay,
    hoursInput: editTaskDurationHoursInput,
    minutesInput: editTaskDurationMinutesInput,
  });
  editTaskTimerModeField.classList.toggle("hidden", isReminder);
  editTaskDurationInput.removeAttribute("required");
  editTaskTimerModeInput.toggleAttribute("required", !isReminder);
  editTaskTimeLabel.textContent = isReminder ? "Set time" : "Estimated start";
  toggleEditRepeatControls();
}

function setDurationControlState(input, field, { hidden, disabled, hoursInput, minutesInput }) {
  field.classList.toggle("hidden", hidden);
  field.classList.toggle("duration-disabled", disabled);
  input.disabled = false;
  [hoursInput, minutesInput].forEach((control) => {
    if (control) control.disabled = Boolean(disabled);
  });

  if (disabled) {
    if (input.value) input.dataset.lastDurationValue = input.value;
    input.value = "";
    return;
  }

  if (!input.value) {
    input.value = input.dataset.lastDurationValue || String(DEFAULT_TASK_DURATION_MINUTES);
  }

  setDurationDialValue(input, hoursInput, minutesInput, input.value);
}

function toggleRepeatControls() {
  const isReminder = taskItemKindInput.value === "reminder";
  const repeats = taskRepeatsInput.checked;
  const repeatMode = getTaskRepeatMode();

  repeatToggleText.textContent = isReminder ? "Repeat this reminder" : "Repeat this task";
  repeatModeField.classList.toggle("hidden", !repeats);
  weekdayPicker.classList.toggle("hidden", !repeats || repeatMode !== "weekly");
  repeatIntervalField.classList.toggle("hidden", !repeats || repeatMode !== "interval");
  specificDatePicker?.classList.toggle("hidden", !repeats || repeatMode !== "specific");
  repeatEndField?.classList.toggle("hidden", !repeats);
  taskRepeatIntervalDaysInput.toggleAttribute("required", repeats && repeatMode === "interval");
  renderSpecificRepeatDates();
}

function toggleEditRepeatControls() {
  const isReminder = editItemKindInput.value === "reminder";
  const repeats = editTaskRepeatsInput.checked;
  const repeatMode = getEditRepeatMode();

  editRepeatToggleText.textContent = isReminder ? "Repeat this reminder" : "Repeat this task";
  editRepeatModeField.classList.toggle("hidden", !repeats);
  editWeekdayPicker.classList.toggle("hidden", !repeats || repeatMode !== "weekly");
  editRepeatIntervalField.classList.toggle("hidden", !repeats || repeatMode !== "interval");
  editSpecificDatePicker?.classList.toggle("hidden", !repeats || repeatMode !== "specific");
  editRepeatEndField?.classList.toggle("hidden", !repeats);
  editRepeatIntervalDaysInput.toggleAttribute("required", repeats && repeatMode === "interval");
  renderEditSpecificRepeatDates();
}

function getTaskRepeatMode() {
  return getRepeatModeForItemKind(taskItemKindInput.value, taskRepeatModeInput.value);
}

function getEditRepeatMode() {
  return getRepeatModeForItemKind(editItemKindInput.value, editRepeatModeInput.value);
}

function getRepeatModeForItemKind(itemKind, repeatMode, fallback = "interval") {
  if (repeatMode === "weekly" || repeatMode === "interval" || repeatMode === "specific") return repeatMode;
  return fallback === "weekly" ? "weekly" : "interval";
}

function normalizeRepeatIntervalDays(value) {
  return clamp(Math.round(Number(value) || 2), 1, 365);
}

function normalizeRepeatDays(days) {
  return Array.isArray(days)
    ? [...new Set(days.map(Number).filter((day) => day >= 0 && day <= 6))].sort((a, b) => a - b)
    : [];
}

function normalizeSpecificRepeatDates(dates, startDate = "") {
  const start = isISODateString(startDate) ? parseISODate(startDate) : null;
  const normalizedDates = Array.isArray(dates)
    ? dates
    : String(dates ?? "").split(",");

  return [...new Set(normalizedDates.map((date) => String(date).trim()).filter(isISODateString))]
    .filter((date) => !start || parseISODate(date) >= start)
    .sort();
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

function deleteTask(taskId, occurrenceDate, scope = "ask") {
  const taskToDelete = tasks.find((task) => task.id === taskId);
  if (!taskToDelete) return false;

  if (taskToDelete.repeats && scope === "ask") {
    openRepeatDeleteDialog(taskToDelete, occurrenceDate);
    return false;
  }

  if (taskToDelete.repeats && scope === "single") {
    tasks = tasks.map((task) => deleteRepeatingOccurrence(task, taskId, occurrenceDate));
    clearActiveTimerFor(taskId, occurrenceDate);
    return true;
  }

  tasks = tasks.filter((task) => task.id !== taskId);
  if (activeTimer?.taskId === taskId) {
    clearActiveTimer();
  } else {
    clearActiveTimerFor(taskId, occurrenceDate);
  }
  return true;
}

function deleteRepeatingOccurrence(task, taskId, occurrenceDate) {
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

function openRepeatDeleteDialog(task, occurrenceDate) {
  pendingRepeatDelete = { taskId: task.id, occurrenceDate };
  if (deleteRepeatMessage) {
    deleteRepeatMessage.textContent = `Delete "${task.title}" only on ${formatDateHeading(occurrenceDate)}, or remove the whole repeating task?`;
  }
  deleteRepeatOverlay?.classList.remove("hidden");
  deleteRepeatOverlay?.setAttribute("aria-hidden", "false");
  deleteRepeatOnceButton?.focus();
}

function closeRepeatDeleteDialog() {
  pendingRepeatDelete = null;
  deleteRepeatOverlay?.classList.add("hidden");
  deleteRepeatOverlay?.setAttribute("aria-hidden", "true");
}

function confirmRepeatDelete(scope) {
  if (!pendingRepeatDelete) return;

  const { taskId, occurrenceDate } = pendingRepeatDelete;
  pendingRepeatDelete = null;
  deleteRepeatOverlay?.classList.add("hidden");
  deleteRepeatOverlay?.setAttribute("aria-hidden", "true");

  const didDelete = deleteTask(taskId, occurrenceDate, scope);
  if (!didDelete) return;

  saveTasks();
  render();
}

function cancelActiveTaskTimer(taskId, occurrenceDate) {
  if (!isActiveTimerFor({ id: taskId, occurrenceDate })) return false;

  clearActiveTimer();
  return true;
}

function finishActiveTask(taskId, occurrenceDate) {
  if (!isActiveTimerFor({ id: taskId, occurrenceDate })) return false;

  const previousStreakDays = getTopStreakDays(buildCompletedHistory());
  const earnedPoints = calculateTimerEarnedPoints(activeTimer);
  const actualMinutes = calculateTimerElapsedMinutes(activeTimer);

  tasks = tasks.map((task) => markTaskComplete(task, taskId, occurrenceDate, earnedPoints, actualMinutes));
  if (earnedPoints > 0) pendingXpAnimation = earnedPoints;
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
    pointerType: event.pointerType || "mouse",
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

    if (deltaX >= 0 || absY > absX * 1.25) {
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
    Math.abs(offset) >= getTaskSwipeDeleteDistance(taskSwipeState),
  );
}

function finishTaskSwipe(event) {
  if (!taskSwipeState || taskSwipeState.pointerId !== event.pointerId) return;

  const state = taskSwipeState;
  const deltaX = event.clientX - state.startX;
  const shouldDelete = state.active && deltaX <= -getTaskSwipeDeleteDistance(state);

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

  if (!deleteTask(state.taskId, state.occurrenceDate)) return;
  saveTasks();
  render();
}

function getTaskSwipeDeleteDistance(state) {
  return state?.pointerType === "touch" ? 72 : TASK_SWIPE_DELETE_DISTANCE;
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
  if (event.shiftKey) return;
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

function handleTaskSelectionClick(event) {
  if (!event.shiftKey) return;
  if (event.target.closest("button, input, select, textarea, a")) return;
  if (Date.now() < suppressTaskTapUntil) return;

  const taskCard = event.target.closest(".task-card[data-task-id][data-occurrence-date], .timeline-task[data-task-id][data-occurrence-date]");
  if (taskCard) {
    event.preventDefault();
    lastTaskTap = null;
    const key = createCardOccurrenceKey(taskCard);
    if (!key) return;
    selectedTaskKeys = toggleSelectionKey(selectedTaskKeys, key);
    renderTaskSelectionState();
    renderSelectionToolbars();
    return;
  }

  const missedCard = event.target.closest(".missed-task-card[data-task-id][data-occurrence-date]");
  if (missedCard) {
    event.preventDefault();
    lastTaskTap = null;
    const key = createCardOccurrenceKey(missedCard);
    if (!key) return;
    selectedMissedKeys = toggleSelectionKey(selectedMissedKeys, key);
    renderMissedSelectionState();
    renderSelectionToolbars();
  }
}

function isDesktopSelectionDevice() {
  return window.matchMedia?.("(pointer: fine)")?.matches ?? false;
}

function toggleSelectionKey(selection, key) {
  const nextSelection = new Set(selection);
  if (nextSelection.has(key)) {
    nextSelection.delete(key);
  } else {
    nextSelection.add(key);
  }
  return nextSelection;
}

function createCardOccurrenceKey(card) {
  return createTaskSelectionKey(card.dataset.taskId, card.dataset.occurrenceDate);
}

function createOccurrenceKey(task) {
  return createTaskSelectionKey(task.id, task.occurrenceDate);
}

function createTaskSelectionKey(taskId, occurrenceDate) {
  return taskId && occurrenceDate ? `${taskId}::${occurrenceDate}` : "";
}

function parseTaskSelectionKey(key) {
  const [taskId, occurrenceDate] = String(key).split("::");
  return { taskId, occurrenceDate };
}

function updateVisibleTaskSelectionKeys(occurrences) {
  currentVisibleTaskKeys = occurrences.map(createOccurrenceKey);
  selectedTaskKeys = pruneSelectionToVisible(selectedTaskKeys, currentVisibleTaskKeys);
}

function pruneSelectionToVisible(selection, visibleKeys) {
  const visibleKeySet = new Set(visibleKeys);
  return new Set([...selection].filter((key) => visibleKeySet.has(key)));
}

function renderTaskSelectionState() {
  document.querySelectorAll(".task-card[data-task-id][data-occurrence-date], .timeline-task[data-task-id][data-occurrence-date]").forEach((card) => {
    card.classList.toggle("selected", selectedTaskKeys.has(createCardOccurrenceKey(card)));
  });
}

function renderMissedSelectionState() {
  document.querySelectorAll(".missed-task-card[data-task-id][data-occurrence-date]").forEach((card) => {
    card.classList.toggle("selected", selectedMissedKeys.has(createCardOccurrenceKey(card)));
  });
}

function renderSelectionToolbars() {
  const taskCount = selectedTaskKeys.size;
  const missedCount = selectedMissedKeys.size;
  const showTaskToolbar = taskCount > 0 && scheduleView !== "month" && currentVisibleTaskKeys.length > 0;
  const showMissedToolbar = missedCount > 0 && currentVisibleMissedKeys.length > 0 && !missedTasksCollapsed;

  taskSelectionToolbar?.classList.toggle("hidden", !showTaskToolbar);
  if (taskSelectionCount) {
    taskSelectionCount.textContent = `${taskCount} selected`;
  }
  if (duplicateSelectedTasksButton) duplicateSelectedTasksButton.disabled = taskCount === 0;
  if (deleteSelectedTasksButton) deleteSelectedTasksButton.disabled = taskCount === 0;
  if (clearSelectedTasksButton) clearSelectedTasksButton.disabled = taskCount === 0;

  missedSelectionToolbar?.classList.toggle("hidden", !showMissedToolbar);
  if (missedSelectionCount) {
    missedSelectionCount.textContent = `${missedCount} selected`;
  }
  if (rescheduleSelectedMissedButton) rescheduleSelectedMissedButton.disabled = missedCount === 0;
  if (ignoreSelectedMissedButton) ignoreSelectedMissedButton.disabled = missedCount === 0;
  if (deleteSelectedMissedButton) deleteSelectedMissedButton.disabled = missedCount === 0;
  if (clearSelectedMissedButton) clearSelectedMissedButton.disabled = missedCount === 0;
  if (missedRescheduleDateInput && !missedRescheduleDateInput.value) {
    missedRescheduleDateInput.value = todayISO;
  }
}

function selectAllVisibleTasks() {
  selectedTaskKeys = new Set(currentVisibleTaskKeys);
  renderTaskSelectionState();
  renderSelectionToolbars();
}

function selectAllVisibleMissedTasks() {
  selectedMissedKeys = new Set(currentVisibleMissedKeys);
  renderMissedSelectionState();
  renderSelectionToolbars();
}

function duplicateSelectedTasks() {
  const selectedOccurrences = getSelectedTaskOccurrences(selectedTaskKeys);
  if (selectedOccurrences.length === 0) return;

  selectedOccurrences.forEach((occurrence) => {
    tasks.push(createSingleTaskFromOccurrence(occurrence, occurrence.occurrenceDate, occurrence.time));
  });
  selectedTaskKeys = new Set();
  saveTasks();
  render();
  showAppToast("Tasks duplicated", `${selectedOccurrences.length} task${selectedOccurrences.length === 1 ? "" : "s"} copied.`);
}

function deleteSelectedTasks() {
  const selectedOccurrences = getSelectedTaskOccurrences(selectedTaskKeys);
  if (selectedOccurrences.length === 0) return;

  selectedOccurrences.forEach((occurrence) => {
    deleteTask(occurrence.id, occurrence.occurrenceDate, occurrence.repeats ? "single" : "all");
  });
  selectedTaskKeys = new Set();
  saveTasks();
  render();
  showAppToast("Tasks deleted", `${selectedOccurrences.length} selected task${selectedOccurrences.length === 1 ? "" : "s"} removed.`);
}

function getSelectedTaskOccurrences(selection) {
  return [...selection]
    .map(parseTaskSelectionKey)
    .map(({ taskId, occurrenceDate }) => {
      const task = tasks.find((savedTask) => savedTask.id === taskId);
      return task ? createOccurrence(task, occurrenceDate) : null;
    })
    .filter(Boolean);
}

function rescheduleSelectedMissedTasks() {
  const targetDate = missedRescheduleDateInput?.value || todayISO;
  if (!isISODateString(targetDate)) return;

  const selectedItems = [...selectedMissedKeys].map(parseTaskSelectionKey);
  selectedItems.forEach(({ taskId, occurrenceDate }) => moveMissedTask(taskId, occurrenceDate, targetDate));
  selectedMissedKeys = new Set();
  saveTasks();
  render();
}

function ignoreSelectedMissedTasks() {
  const selectedItems = [...selectedMissedKeys].map(parseTaskSelectionKey);
  selectedItems.forEach(({ taskId, occurrenceDate }) => {
    tasks = tasks.map((task) => skipTaskOccurrence(task, taskId, occurrenceDate));
  });
  selectedMissedKeys = new Set();
  saveTasks();
  render();
}

function deleteSelectedMissedTasks() {
  const selectedItems = [...selectedMissedKeys].map(parseTaskSelectionKey);
  selectedItems.forEach(({ taskId, occurrenceDate }) => {
    tasks = deleteMissedTask(tasks, taskId, occurrenceDate);
    clearActiveTimerFor(taskId, occurrenceDate);
  });
  selectedMissedKeys = new Set();
  saveTasks();
  render();
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
  gridMoveState.duration = getVisualTaskDuration(occurrence);
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
  let didDelete = false;
  const didMove = !shouldDelete && drop
    ? moveGridTask(gridMoveState.taskId, gridMoveState.occurrenceDate, drop.date, drop.time)
    : false;

  if (shouldDelete) {
    didDelete = deleteTask(gridMoveState.taskId, gridMoveState.occurrenceDate);
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

function startMonthDayPointer(event) {
  if (scheduleView !== "month") return;
  if (event.button !== undefined && event.button !== 0) return;

  const dayCard = event.target.closest("[data-month-date]");
  if (!dayCard || !scheduleGrid.contains(dayCard)) return;

  monthPointerState = {
    pointerId: event.pointerId,
    date: dayCard.dataset.monthDate,
    startX: event.clientX,
    startY: event.clientY,
    startedAt: Date.now(),
  };
}

function finishMonthDayPointer(event) {
  if (!monthPointerState || monthPointerState.pointerId !== event.pointerId) return;

  const state = monthPointerState;
  monthPointerState = null;
  const moved = Math.hypot(event.clientX - state.startX, event.clientY - state.startY);
  const elapsed = Date.now() - state.startedAt;
  const dayCard = event.target.closest("[data-month-date]");

  if (!dayCard || dayCard.dataset.monthDate !== state.date || moved > 10 || elapsed > 650) return;

  event.preventDefault();
  scheduleView = "list";
  setScheduleAnchorDate(state.date);
}

function cancelMonthDayPointer(event) {
  if (!monthPointerState) return;
  if (event?.pointerId !== undefined && monthPointerState.pointerId !== event.pointerId) return;
  monthPointerState = null;
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
  editItemKindInput.value = getItemKind(occurrence);
  editTaskIdInput.value = taskId;
  editOccurrenceDateInput.value = occurrenceDate;
  editTaskNameInput.value = occurrence.title;
  editTaskDateInput.value = occurrence.occurrenceDate;
  editTaskTimeInput.value = occurrence.time;
  editTaskEndTimeInput.value = normalizeOptionalEndTime(occurrence.endTime);
  setDurationDialValue(editTaskDurationInput, editTaskDurationHoursInput, editTaskDurationMinutesInput, getTaskDurationForForm(occurrence));
  if (isStopwatchTask(occurrence)) editTaskDurationInput.value = "";
  editTaskTimerModeInput.value = getTaskTimerMode(occurrence);
  editTaskTypeInput.value = occurrence.type;
  editTaskPriorityInput.value = normalizePriority(occurrence.priority);
  editTaskNotesInput.value = occurrence.notes ?? "";
  editTaskMeetingLinkInput.value = normalizeMeetingLink(occurrence.meetingLink);
  editTaskInviteEmailsInput.value = getTaskInviteFieldValue(task);
  editTaskRepeatsInput.checked = Boolean(task.repeats);
  editRepeatModeInput.value = getTaskRepeatModeValue(task);
  editRepeatIntervalDaysInput.value = String(normalizeRepeatIntervalDays(task.repeatIntervalDays));
  editRepeatEndDateInput.value = normalizeOptionalRepeatEndDate(task.repeatEndDate, task.date);
  setEditRepeatDays(task.repeats ? task.repeatDays : []);
  setEditSpecificRepeatDates(task.repeats ? task.repeatSpecificDates : []);
  toggleEditItemKindFields();
  updateEditMeetingLinkControls();

  editTaskOverlay.classList.remove("hidden");
  editTaskOverlay.setAttribute("aria-hidden", "false");
  editTaskNameInput.focus();
}

function closeEditTask() {
  editTaskOverlay.classList.add("hidden");
  editTaskOverlay.setAttribute("aria-hidden", "true");
  editTaskForm.reset();
}

function deleteEditedTask() {
  const taskId = editTaskIdInput.value;
  const occurrenceDate = editOccurrenceDateInput.value;
  if (!taskId || !occurrenceDate) return;

  const didDelete = deleteTask(taskId, occurrenceDate);
  closeEditTask();
  if (!didDelete) return;

  saveTasks();
  render();
}

function saveEditedTask(event) {
  event.preventDefault();
  syncDurationDialValue(editTaskDurationInput, editTaskDurationHoursInput, editTaskDurationMinutesInput, true);

  const taskId = editTaskIdInput.value;
  const occurrenceDate = editOccurrenceDateInput.value;
  const title = editTaskNameInput.value.trim();
  const date = editTaskDateInput.value;
  const itemKind = normalizeItemKind(editItemKindInput.value);
  const endTime = itemKind === "reminder" ? normalizeOptionalEndTime(editTaskEndTimeInput.value) : "";
  const type = normalizeTaskTypeName(editTaskTypeInput.value);
  const timerMode = itemKind === "reminder" ? "countdown" : normalizeTimerMode(editTaskTimerModeInput.value);
  const isAllDay = timerMode === "all-day";
  const time = isAllDay ? "00:00" : editTaskTimeInput.value;
  const duration = itemKind === "reminder" || timerMode === "stopwatch" || isAllDay ? 0 : normalizeTaskDuration(editTaskDurationInput.value);
  const inviteRecipients = parseInviteRecipients(editTaskInviteEmailsInput.value);
  const inviteEmails = parseInviteEmails(inviteRecipients);
  const repeats = editTaskRepeatsInput.checked;
  const repeatMode = repeats ? getRepeatModeForItemKind(itemKind, editRepeatModeInput.value) : "weekly";
  const repeatDays = repeats ? getEditRepeatDays() : [];
  const repeatSpecificDates = repeats && repeatMode === "specific"
    ? getEditSpecificRepeatDates()
    : [];
  const repeatIntervalDays = repeats && repeatMode === "interval"
    ? normalizeRepeatIntervalDays(editRepeatIntervalDaysInput.value)
    : 1;
  const repeatEndDate = repeats ? normalizeOptionalRepeatEndDate(editRepeatEndDateInput.value, date) : "";
  const nextRepeatDays = repeats && repeatMode === "weekly" && repeatDays.length === 0 ? [weekdayForISODate(date)] : repeatDays;
  const nextSpecificDates = repeats && repeatMode === "specific" && repeatSpecificDates.length === 0 ? [date] : repeatSpecificDates;

  if (!title || !date || (!isAllDay && !time) || !type) return;

  tasks = tasks.map((task) => {
    if (task.id !== taskId) return task;

    return {
      ...task,
      itemKind,
      title,
      date,
      time,
      endTime,
      duration,
      timerMode,
      type,
      priority: normalizePriority(editTaskPriorityInput.value),
      notes: editTaskNotesInput.value.trim(),
      meetingLink: isMeetingType(type) ? normalizeMeetingLink(editTaskMeetingLinkInput.value) : "",
      inviteEmails,
      inviteLabels: inviteRecipients,
      sentInviteEmails: normalizeInviteEmails(task.sentInviteEmails),
      repeats,
      repeatMode,
      repeatIntervalDays,
      repeatEndDate,
      repeatDays: repeats ? nextRepeatDays : [],
      repeatSpecificDates: repeats ? nextSpecificDates : [],
      done: repeats ? false : task.repeats ? false : Boolean(task.done),
      skipped: repeats ? false : Boolean(task.skipped),
      completedDates: repeats ? (Array.isArray(task.completedDates) ? task.completedDates : []) : [],
      skippedDates: repeats ? (Array.isArray(task.skippedDates) ? task.skippedDates : []) : [],
      earnedPointsByDate: repeats ? (task.earnedPointsByDate ?? {}) : {},
      actualMinutesByDate: repeats ? (task.actualMinutesByDate ?? {}) : {},
    };
  });

  if (activeTimer?.taskId === taskId && activeTimer?.occurrenceDate === occurrenceDate) {
    if (itemKind === "reminder" || isAllDay) {
      clearActiveTimer();
    } else {
      activeTimer = {
        ...activeTimer,
        duration,
        timerMode,
      };
      saveActiveTimer();
    }
  }

  saveCustomTaskType(type);
  saveTasks();
  closeEditTask();
  render();
  void sendTaskInvites(taskId, inviteRecipients);
}

function getEditRepeatDays() {
  return [...document.querySelectorAll('input[name="editRepeatDays"]:checked')]
    .map((input) => Number(input.value))
    .sort((a, b) => a - b);
}

function setEditRepeatDays(days) {
  const selectedDays = new Set(normalizeRepeatDays(days));
  document.querySelectorAll('input[name="editRepeatDays"]').forEach((input) => {
    input.checked = selectedDays.has(Number(input.value));
  });
}

function renderMissedTasks() {
  if (!featureSettings.missedTasks) {
    missedTasksPanel.classList.add("hidden");
    missedTaskList.innerHTML = "";
    currentVisibleMissedKeys = [];
    selectedMissedKeys = new Set();
    renderSelectionToolbars();
    return;
  }

  const missedTasks = buildMissedOccurrences();
  currentVisibleMissedKeys = missedTasks.map(createOccurrenceKey);
  selectedMissedKeys = pruneSelectionToVisible(selectedMissedKeys, currentVisibleMissedKeys);
  missedTasksPanel.classList.toggle("hidden", missedTasks.length === 0);
  missedTasksPanel.classList.toggle("collapsed", missedTasksCollapsed);
  collapseMissedButton.textContent = missedTasksCollapsed ? `Show ${missedTasks.length}` : "Collapse";
  collapseMissedButton.setAttribute(
    "aria-expanded",
    missedTasksCollapsed ? "false" : "true",
  );
  missedTaskList.innerHTML = missedTasksCollapsed ? "" : missedTasks.slice(0, 8).map(createMissedTaskCard).join("");
  renderMissedSelectionState();
  renderSelectionToolbars();
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
  const isReminder = isReminderItem(task);
  const isAllDay = isAllDayTask(task);
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
  const repeatLabel = task.repeats ? createRepeatLabel(task) : "One-time";
  const priorityChip = createPriorityChip(task);
  const streakChip = createStreakChip(task.type);
  const typeStyle = createTypeStyleAttribute(task.type);
  const isTimerActive = isActiveTimerFor(task);
  const canStartTimer = !isReminder && !isAllDay && !task.done && (!activeTimer || isTimerActive);
  const timingLabel = getTaskTimingLabel(task);
  const endTimeChip = createEndTimeChip(task);
  const meetingLinkChip = createMeetingLinkChip(task);
  const timerPanel = isTimerActive
    ? `
      <div class="task-timer" data-timer-task>
        <span>${isStopwatchTimer(activeTimer) ? "Stopwatch running" : "Timer running"}</span>
        <strong data-timer-countdown>${formatTimerRemaining(activeTimer)}</strong>
      </div>
    `
    : "";
  const timerButton = isAllDay || task.done
    ? ""
    : isReminder
      ? `<button class="icon-button start" type="button" data-action="complete-reminder" title="Mark reminder done" aria-label="Mark reminder done">Done</button>`
      : isTimerActive
      ? `
        <button class="icon-button finish" type="button" data-action="finish" title="Finish now and earn xp for elapsed time" aria-label="Finish task" data-active-finish>Finish</button>
        <button class="icon-button cancel-timer" type="button" data-action="cancel-timer" title="Cancel timer without deleting task" aria-label="Cancel timer">Cancel</button>
      `
      : `<button class="icon-button start" type="button" data-action="start" title="${isStopwatchTask(task) ? "Start stopwatch" : "Start task"}" aria-label="Start task" ${canStartTimer ? "" : "disabled"}>Start</button>`;
  const undoButton = task.done
    ? `
      <button class="icon-button" type="button" data-action="toggle" title="Undo" aria-label="Undo">
        Undo
      </button>
    `
    : "";

  return `
    <article class="task-card ${isAllDay ? "all-day-card" : ""} ${task.done ? "done" : ""}" data-task-id="${task.id}" data-occurrence-date="${task.occurrenceDate}" ${typeStyle}>
      <div class="time-block">
        <strong>${isAllDay ? "All day" : timeLabel}</strong>
        <span>${isAllDay ? "Event" : isReminder ? "Set time" : "Estimate"} &middot; ${dayLabel}</span>
      </div>
      <div>
        <div class="task-title">${escapeHTML(task.title)}</div>
        ${notes}
        ${isAllDay ? `<p class="all-day-note">Runs across the whole day.</p>` : timerPanel}
        <div class="task-meta">
          <span class="chip">${escapeHTML(timingLabel)}</span>
          ${endTimeChip}
          <span class="chip type-chip">${escapeHTML(task.type)}</span>
          ${priorityChip}
          ${streakChip}
          <span class="chip">${escapeHTML(repeatLabel)}</span>
          ${meetingLinkChip}
        </div>
      </div>
      <div class="task-actions ${isAllDay ? "hidden" : ""}">
        ${timerButton}
        ${undoButton}
        <button class="icon-button delete" type="button" data-action="delete" title="Delete" aria-label="Delete">
          x
        </button>
      </div>
    </article>
  `;
}

function renderScheduleListTimeline(occurrences) {
  if (!scheduleListTimeline) return;

  const selectedDate = scheduleAnchorDate;
  const shouldShowTimeline = scheduleView === "list";
  scheduleListTimeline.classList.toggle("hidden", !shouldShowTimeline);
  scheduleListLayout?.classList.toggle("timeline-enabled", shouldShowTimeline);

  if (!shouldShowTimeline) {
    scheduleListTimeline.innerHTML = "";
    return;
  }

  const markers = occurrences
    .filter((task) => !task.skipped && !isAllDayTask(task) && task.occurrenceDate === selectedDate)
    .map((task) => {
      const typeStyle = getTaskTypeStyle(task.type);
      const top = clamp((timeToMinutes(task.time) / (24 * 60)) * 100, 1, 99);
      const taskKind = isReminderItem(task) ? "Reminder" : "Task";
      const priorityLabel = featureSettings.priorities ? ` &middot; ${escapeHTML(normalizePriority(task.priority))}` : "";
      const tooltipTitle = `${formatTimeRange(task)} ${task.title}`;

      return `
        <button
          class="list-timeline-task-marker ${isReminderItem(task) ? "reminder" : ""}"
          type="button"
          style="--marker-top: ${top.toFixed(2)}%; --type-color: ${typeStyle.color};"
          title="${escapeHTML(tooltipTitle)}"
          aria-label="${escapeHTML(`${task.title}, ${formatTimeRange(task)}, ${task.type}`)}"
        >
          <span class="list-timeline-task-tooltip" aria-hidden="true">
            <strong>${escapeHTML(task.title)}</strong>
            <small>${escapeHTML(taskKind)} &middot; ${escapeHTML(formatTimeRange(task))} &middot; ${escapeHTML(task.type)}${priorityLabel}</small>
          </span>
        </button>
      `;
    })
    .join("");

  const currentTimeDot = selectedDate === todayISO ? '<span class="list-current-time-dot"></span>' : "";
  const currentTimeLabel = selectedDate === todayISO ? '<span class="list-current-time-label" data-list-timeline-current-label></span>' : "";

  scheduleListTimeline.innerHTML = `
    <div class="list-timeline-rail">
      <span class="list-timeline-label start" aria-hidden="true">12a</span>
      <span class="list-timeline-label noon" aria-hidden="true">12p</span>
      <span class="list-timeline-label end" aria-hidden="true">12a</span>
      ${markers}
      ${currentTimeDot}
    </div>
    ${currentTimeLabel}
  `;
  updateScheduleListTimelineCurrentTime();
}

function updateScheduleCurrentTimeIndicators() {
  updateScheduleListTimelineCurrentTime();
  updateGridCurrentTimeDots(scheduleGrid);
  updateGridCurrentTimeDots(homeDayGrid);
}

function updateScheduleListTimelineCurrentTime() {
  if (!scheduleListTimeline || scheduleListTimeline.classList.contains("hidden")) return;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const top = clamp((currentMinutes / (24 * 60)) * 100, 1, 99);
  scheduleListTimeline.style.setProperty("--current-time-top", `${top.toFixed(2)}%`);

  const label = scheduleListTimeline.querySelector("[data-list-timeline-current-label]");
  if (label) label.textContent = formatTimeFromMinutes(currentMinutes);
}

function updateGridCurrentTimeDots(gridRoot) {
  gridRoot?.querySelectorAll(".grid-current-time-dot").forEach((dot) => {
    const timeline = dot.closest(".day-timeline");
    if (!timeline) return;

    const bounds = {
      start: Number(timeline.dataset.startMinute) || 0,
      end: Number(timeline.dataset.endMinute) || 24 * 60,
      totalMinutes: Number(timeline.dataset.totalMinutes) || 1,
    };
    bounds.segments = parseTimelineSegments(timeline.dataset.timelineSegments, bounds.totalMinutes, bounds.start, bounds.end);

    const currentMinutes = getCurrentDayMinute();
    const segments = getTimelineSegments(bounds);
    const isVisible = segments.some((segment) => currentMinutes >= segment.start && currentMinutes <= segment.end);
    dot.classList.toggle("hidden", !isVisible);
    if (isVisible) {
      dot.style.setProperty("--current-grid-time-top", `${getTimelineMinutePercent(currentMinutes, bounds).toFixed(2)}%`);
    }
  });
}

function createCompletedTaskCard(task) {
  const isReminder = isReminderItem(task);
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
  const repeatLabel = task.repeats ? createRepeatLabel(task) : "One-time";
  const points = calculatePoints(task);
  const completedMinutes = calculateCompletedMinutes(task);
  const priorityChip = createPriorityChip(task);
  const streakChip = createStreakChip(task.type);
  const endTimeChip = createEndTimeChip(task);
  const typeStyle = createTypeStyleAttribute(task.type);
  const meetingLinkChip = createMeetingLinkChip(task);

  return `
    <article class="task-card done" data-task-id="${task.id}" data-occurrence-date="${task.occurrenceDate}" ${typeStyle}>
      <div class="time-block">
        <strong>${timeLabel}</strong>
        <span>${isReminder ? "Set time" : "Estimate"} &middot; ${dayLabel}</span>
      </div>
      <div>
        <div class="task-title">${escapeHTML(task.title)}</div>
        ${notes}
        <div class="task-meta">
          <span class="chip">${isReminder ? "Reminder done" : `${formatMinutesAsHours(completedMinutes)} tracked`}</span>
          ${endTimeChip}
          <span class="chip type-chip">${escapeHTML(task.type)}</span>
          ${priorityChip}
          ${streakChip}
          <span class="chip">${escapeHTML(repeatLabel)}</span>
          ${meetingLinkChip}
        </div>
      </div>
      <div class="completed-task-actions">
        <div class="points-chip">${isReminder ? "Reminder" : `+${formatPoints(points)} xp`}</div>
        <button class="icon-button completed-undo-button" type="button" data-action="toggle" title="Move back to your schedule" aria-label="Undo completed task">
          Undo
        </button>
      </div>
    </article>
  `;
}

function createScheduleDisplay(occurrences, options = {}) {
  if (scheduleView === "month" && options.context !== "home") {
    return createMonthScheduleView(occurrences, options);
  }

  return createScheduleGrid(occurrences, options);
}

function createScheduleGrid(occurrences, options = {}) {
  const range = options.range ?? scheduleGridRange.value;
  return range === "day"
    ? createDayScheduleGrid(occurrences, options)
    : createWeekScheduleGrid(occurrences, options);
}

function createMonthScheduleView(occurrences, options = {}) {
  const monthRange = getMonthDateRange(options.anchorDate ?? scheduleAnchorDate);
  const calendarStart = getWeekStart(monthRange.start);
  const calendarEnd = addDays(getWeekStart(addDays(monthRange.end, 6)), 6);
  const tasksByDate = groupTasksByDate(occurrences);
  const days = [];

  for (let day = new Date(calendarStart); day <= calendarEnd; day = addDays(day, 1)) {
    const isoDate = toDateInputValue(day);
    const dayTasks = (tasksByDate.get(isoDate) ?? []).filter((task) => !task.skipped);
    days.push(createMonthDayCell(isoDate, dayTasks, monthRange.start.getMonth()));
  }

  return `
    <section class="month-view-card">
      <div class="day-grid-header">
        <h3>${formatMonthHeading(monthRange.start)}</h3>
        <span>${occurrences.length} task${occurrences.length === 1 ? "" : "s"}</span>
      </div>
      <div class="month-weekdays" aria-hidden="true">
        ${["M", "T", "W", "T", "F", "S", "S"].map((day) => `<span>${day}</span>`).join("")}
      </div>
      <div class="month-grid">
        ${days.join("")}
      </div>
    </section>
  `;
}

function createMonthDayCell(isoDate, dayTasks, visibleMonth) {
  const date = parseISODate(isoDate);
  const isOutsideMonth = date.getMonth() !== visibleMonth;
  const sortedTasks = [...dayTasks].sort((first, second) => timeToMinutes(first.time) - timeToMinutes(second.time));
  const previewTasks = sortedTasks.slice(0, 3);
  const typeDots = [...new Set(sortedTasks.map((task) => task.type))]
    .slice(0, 5)
    .map((type) => {
      const typeStyle = getTaskTypeStyle(type);
      return `<i style="--type-color: ${typeStyle.color};"></i>`;
    })
    .join("");
  const preview = previewTasks.length
    ? previewTasks
        .map((task) => `<small>${escapeHTML(isAllDayTask(task) ? "All day" : formatTimeFromMinutes(timeToMinutes(task.time)))} ${escapeHTML(task.title)}</small>`)
        .join("")
    : "<em>No tasks</em>";

  return `
    <button
      class="month-day-card ${isOutsideMonth ? "outside-month" : ""} ${isoDate === todayISO ? "today" : ""}"
      type="button"
      data-month-date="${isoDate}"
      aria-label="${formatDateHeading(isoDate)} with ${dayTasks.length} task${dayTasks.length === 1 ? "" : "s"}"
    >
      <span class="month-date-number">${date.getDate()}</span>
      <strong>${dayTasks.length} task${dayTasks.length === 1 ? "" : "s"}</strong>
      <span class="month-type-dots">${typeDots}</span>
      <span class="month-task-preview">${preview}</span>
    </button>
  `;
}

function createDayScheduleGrid(occurrences, options = {}) {
  const selectedDate = options.anchorDate ?? scheduleAnchorDate;
  const tasksByDate = groupTasksByDate(occurrences);
  const dayTasks = tasksByDate.get(selectedDate) ?? [];
  const timedTasks = dayTasks.filter((task) => !isAllDayTask(task));
  const bounds = getDayTimelineBounds(timedTasks, {
    expandForMove: options.context !== "home" && shouldExpandGridTimelineForMove(),
    currentMinute: getGridCurrentTimeMinuteForDate(selectedDate, options),
  });
  const zoom = options.zoom ?? scheduleGridZoom;
  const timelineItems = assignTimelineLanes(timedTasks, bounds, zoom);

  return `
    <section class="day-grid-card">
      <div class="day-grid-header">
        <h3>${formatDateHeading(selectedDate)}</h3>
        <span>${dayTasks.length} task${dayTasks.length === 1 ? "" : "s"}</span>
      </div>
      ${createAllDayGridStrip(dayTasks)}
      <div class="day-timeline" data-start-minute="${bounds.start}" data-end-minute="${bounds.end}" data-total-minutes="${bounds.totalMinutes}" data-timeline-segments="${serializeTimelineSegments(bounds)}" style="--timeline-height: ${getTimelineHeight(bounds.totalMinutes, zoom)}px;">
        <div class="time-labels">
          ${createTimelineLabels(bounds)}
          ${createGridCurrentTimeDot(selectedDate, bounds, options)}
        </div>
        <div class="timeline-board" data-grid-date="${selectedDate}">
          ${createTimelineLines(bounds)}
          ${timelineItems.map((item) => createTimelineTask(item, bounds)).join("")}
        </div>
      </div>
    </section>
  `;
}

function createWeekScheduleGrid(occurrences, options = {}) {
  const weekDates = getScheduleWeekDates(options.anchorDate ?? scheduleAnchorDate);
  const tasksByDate = groupTasksByDate(occurrences);
  const allWeekTasks = weekDates.flatMap((date) => tasksByDate.get(date) ?? []);
  const timedWeekTasks = allWeekTasks.filter((task) => !isAllDayTask(task));
  const bounds = getDayTimelineBounds(timedWeekTasks, {
    expandForMove: options.context !== "home" && shouldExpandGridTimelineForMove(),
    currentMinute: weekDates.includes(todayISO) ? getGridCurrentTimeMinuteForDate(todayISO, options) : null,
  });
  const zoom = options.zoom ?? scheduleGridZoom;
  const dateLabels = weekDates
    .map((date) => `<span class="${date === todayISO ? "today" : ""}">${formatWeekDayHeading(date)}</span>`)
    .join("");
  const dayColumns = weekDates
    .map((date) => {
      const dayTasks = tasksByDate.get(date) ?? [];
      const timelineItems = assignTimelineLanes(dayTasks.filter((task) => !isAllDayTask(task)), bounds, zoom);

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
      ${createAllDayWeekStrip(weekDates, tasksByDate)}
      <div class="day-timeline week-timeline" data-start-minute="${bounds.start}" data-end-minute="${bounds.end}" data-total-minutes="${bounds.totalMinutes}" data-timeline-segments="${serializeTimelineSegments(bounds)}" style="--timeline-height: ${getTimelineHeight(bounds.totalMinutes, zoom)}px;">
        <div class="time-labels">
          ${createTimelineLabels(bounds)}
          ${weekDates.includes(todayISO) ? createGridCurrentTimeDot(todayISO, bounds, options) : ""}
        </div>
        <div class="timeline-board week-board">
          ${createTimelineLines(bounds)}
          ${dayColumns}
        </div>
      </div>
    </section>
  `;
}

function createGridCurrentTimeDot(date, bounds, options = {}) {
  const currentMinute = getGridCurrentTimeMinuteForDate(date, options);
  if (!Number.isFinite(currentMinute)) return "";

  const segments = getTimelineSegments(bounds);
  const isVisible = segments.some((segment) => currentMinute >= segment.start && currentMinute <= segment.end);
  if (!isVisible) return "";

  const top = getTimelineMinutePercent(currentMinute, bounds);
  return `<span class="grid-current-time-dot" style="--current-grid-time-top: ${top.toFixed(2)}%;" aria-hidden="true"></span>`;
}

function getGridCurrentTimeMinuteForDate(date, options = {}) {
  if (date !== todayISO) return null;
  if (options.context !== "home" && scheduleView !== "grid") return null;
  return getCurrentDayMinute();
}

function createAllDayGridStrip(dayTasks) {
  const allDayTasks = dayTasks.filter((task) => isAllDayTask(task) && !task.skipped);
  if (allDayTasks.length === 0) return "";

  return `
    <div class="all-day-grid-strip">
      <span>All day</span>
      <div>${allDayTasks.map(createAllDayGridPill).join("")}</div>
    </div>
  `;
}

function createAllDayWeekStrip(weekDates, tasksByDate) {
  const hasAllDayTasks = weekDates.some((date) =>
    (tasksByDate.get(date) ?? []).some((task) => isAllDayTask(task) && !task.skipped),
  );
  if (!hasAllDayTasks) return "";

  const dayCells = weekDates
    .map((date) => {
      const allDayTasks = (tasksByDate.get(date) ?? []).filter((task) => isAllDayTask(task) && !task.skipped);
      return `<div class="all-day-week-cell ${date === todayISO ? "today" : ""}">${allDayTasks.map(createAllDayGridPill).join("")}</div>`;
    })
    .join("");

  return `
    <div class="all-day-week-strip">
      <span>All day</span>
      ${dayCells}
    </div>
  `;
}

function createAllDayGridPill(task) {
  const typeStyle = getTaskTypeStyle(task.type);
  return `
    <article
      class="all-day-grid-pill"
      data-task-id="${task.id}"
      data-occurrence-date="${task.occurrenceDate}"
      style="--type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg};"
      title="${escapeHTML(task.title)}"
    >
      ${escapeHTML(task.title)}
    </article>
  `;
}

function renderOverlapAlert(occurrences) {
  const overlaps = findOverlaps(occurrences.filter((task) => !task.done && !isAllDayTask(task)));

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
  return `${task.id}:${task.occurrenceDate}:${task.time}:${getOverlapTimeRange(task).end}`;
}

function getGridOccurrences(occurrences, options = {}) {
  const range = getGridDateRange(options);
  return occurrences.filter((task) => {
    const taskDate = parseISODate(task.occurrenceDate);
    return taskDate >= range.start && taskDate <= range.end && matchesGridStatusFilter(task) && matchesScheduleExtraFilters(task);
  });
}

function getMonthOccurrences(occurrences, options = {}) {
  const range = getMonthDateRange(options.anchorDate ?? scheduleAnchorDate);
  return occurrences.filter((task) => {
    const taskDate = parseISODate(task.occurrenceDate);
    return taskDate >= range.start && taskDate <= range.end && matchesGridStatusFilter(task) && matchesScheduleExtraFilters(task);
  });
}

function getGridDateRange(options = {}) {
  const rangeValue = options.range ?? scheduleGridRange.value;
  const anchorDate = options.anchorDate ?? scheduleAnchorDate;

  if (rangeValue === "day") {
    const day = parseISODate(anchorDate);
    return { start: day, end: day };
  }

  const weekStart = getWeekStart(parseISODate(anchorDate));
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
      .map((task) => ({ task, range: getOverlapTimeRange(task) }))
      .sort((a, b) => a.range.start - b.range.start);

    for (let firstIndex = 0; firstIndex < sortedTasks.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < sortedTasks.length; secondIndex += 1) {
        const first = sortedTasks[firstIndex];
        const second = sortedTasks[secondIndex];
        if (!doTaskRangesOverlap(first, second)) {
          if (!isPointReminder(first.task) && second.range.start >= first.range.end) break;
          continue;
        }

        overlaps.push({ first: first.task, second: second.task });
      }
    }
  });

  return overlaps;
}

function doTaskRangesOverlap(first, second) {
  if (isPointReminder(first.task) || isPointReminder(second.task)) {
    return first.task.occurrenceDate === second.task.occurrenceDate
      && first.range.start === second.range.start;
  }

  return second.range.start < first.range.end && first.range.start < second.range.end;
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

function assignTimelineLanes(dayTasks, bounds = null, zoom = scheduleGridZoom) {
  const laneEnds = [];
  let currentGroup = [];
  let currentGroupEnd = -Infinity;
  const items = dayTasks
    .map((task) => {
      const range = getTaskTimeRange(task);
      return {
        task,
        range,
        laneRange: getTimelineLaneRange(task, bounds, zoom),
        lane: 0,
        laneCount: 1,
      };
    })
    .sort((a, b) => a.laneRange.start - b.laneRange.start || a.laneRange.end - b.laneRange.end);

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
    const lane = laneEnds.findIndex((end) => end <= item.laneRange.start);
    item.lane = lane === -1 ? laneEnds.length : lane;
    laneEnds[item.lane] = item.laneRange.end;

    if (currentGroup.length > 0 && item.laneRange.start >= currentGroupEnd) {
      finishGroup();
    }

    currentGroup.push(item);
    currentGroupEnd = Math.max(currentGroupEnd, item.laneRange.end);
  });

  finishGroup();
  return items;
}

function getTimelineLaneRange(task, bounds = null, zoom = scheduleGridZoom) {
  const range = getTaskTimeRange(task);
  if (!isPointReminder(task)) return range;

  const visualMinutes = Math.max(
    getVisualTaskDuration(task),
    getMinimumTimelineVisualMinutes(TIMELINE_POINT_REMINDER_LANE_MIN_PX, zoom),
  );
  const maxEnd = bounds?.end ?? 24 * 60;
  return {
    start: range.start,
    end: Math.min(range.start + visualMinutes, maxEnd),
  };
}

function getMinimumTimelineVisualMinutes(pixelHeight, zoom = scheduleGridZoom) {
  const pixelsPerMinute = Math.max(GRID_MINUTE_HEIGHT * Number(zoom || 1), 0.1);
  return Math.ceil(Number(pixelHeight || 0) / pixelsPerMinute);
}

function createTimelineTask(item, bounds, extraClass = "") {
  const { task, range, lane, laneCount } = item;
  const isReminder = isReminderItem(task);
  const pointReminder = isPointReminder(task);
  const durationClass = getTimelineDurationClass(task);
  const top = getTimelineMinutePercent(range.start, bounds);
  const height = getTimelineRangeHeightPercent(range.start, range.end, bounds);
  const laneWidth = 100 / laneCount;
  const laneLeft = lane * laneWidth;
  const typeStyle = getTaskTypeStyle(task.type);
  const priorityLabel = featureSettings.priorities ? ` &middot; ${escapeHTML(normalizePriority(task.priority))}` : "";

  return `
    <article
      class="timeline-task ${extraClass} ${isReminder ? "reminder-task" : ""} ${pointReminder ? "point-reminder" : ""} ${durationClass} ${task.done ? "done" : ""}"
      data-task-id="${task.id}"
      data-occurrence-date="${task.occurrenceDate}"
      style="--task-top: ${top.toFixed(2)}%; --task-height: ${height.toFixed(2)}%; --task-left: ${laneLeft.toFixed(2)}%; --task-width: ${laneWidth.toFixed(2)}%; --type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg};"
    >
      <span class="timeline-time">${formatTimeRange(task)}</span>
      <strong class="timeline-title">${escapeHTML(task.title)}</strong>
      <small class="timeline-meta">${escapeHTML(task.type)}${priorityLabel} &middot; ${escapeHTML(getTaskTimingLabel(task))}</small>
    </article>
  `;
}

function getTimelineDurationClass(task) {
  const duration = getVisualTaskDuration(task);
  if (duration <= 15) return "duration-15";
  if (duration <= 30) return "duration-30";
  return `duration-${duration}`;
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

function getDayTimelineBounds(dayTasks, options = {}) {
  if (options.expandForMove) {
    return createTimelineBounds([{ start: 0, end: 24 * 60 }]);
  }

  const currentTimeSegment = createCurrentTimeTimelineSegment(options.currentMinute);

  if (dayTasks.length === 0) {
    return createTimelineBounds(currentTimeSegment ? [currentTimeSegment] : [{ start: 8 * 60, end: 12 * 60 }]);
  }

  return createTimelineBounds([
    ...createOccupiedTimelineSegments(dayTasks),
    ...(currentTimeSegment ? [currentTimeSegment] : []),
  ]);
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
  const normalizedSegments = normalizeTimelineSegments(rawSegments);
  const fallbackSegments = normalizedSegments.length > 0 ? normalizedSegments : [{ start: 8 * 60, end: 12 * 60 }];
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

function createCurrentTimeTimelineSegment(minute) {
  if (!Number.isFinite(minute)) return null;

  const start = clamp(Math.floor(minute / 60) * 60, 0, 23 * 60);
  const end = clamp(Math.ceil((minute + 1) / 60) * 60, start + GRID_MOVE_SNAP_MINUTES, 24 * 60);
  return { start, end };
}

function normalizeTimelineSegments(rawSegments) {
  return rawSegments
    .map((segment) => ({
      start: clamp(Number(segment.start), 0, 24 * 60),
      end: clamp(Number(segment.end), 0, 24 * 60),
    }))
    .filter((segment) => Number.isFinite(segment.start) && Number.isFinite(segment.end) && segment.end > segment.start)
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
  if (isAllDayTask(task)) {
    return { start: 0, end: 0 };
  }

  const start = timeToMinutes(task.time);
  return {
    start,
    end: start + getVisualTaskDuration(task),
  };
}

function getOverlapTimeRange(task) {
  const start = isAllDayTask(task) ? 0 : timeToMinutes(task.time);

  if (isPointReminder(task)) {
    return { start, end: start };
  }

  return getTaskTimeRange(task);
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getCurrentDayMinute() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function formatTimeRange(task) {
  if (isAllDayTask(task)) return "All day";

  const range = getTaskTimeRange(task);
  if (isReminderItem(task)) {
    const endTime = normalizeOptionalEndTime(task.endTime);
    return endTime
      ? `${formatTimeFromMinutes(range.start)}-${formatTimeFromMinutes(timeToMinutes(endTime))}`
      : formatTimeFromMinutes(range.start);
  }

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

function formatMonthHeading(date) {
  return date.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
}

function getScheduleWeekDates(anchorDate = scheduleAnchorDate) {
  const weekStart = getWeekStart(parseISODate(anchorDate));
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

function getMonthDateRange(anchorDate = scheduleAnchorDate) {
  const date = parseISODate(anchorDate);
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return { start, end };
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

function renderScheduleFilterControls() {
  renderScheduleTypeFilterOptions();
  syncScheduleFilterInputs();
  updateScheduleFilterBadge();
}

function renderScheduleTypeFilterOptions() {
  if (!scheduleTypeFilterOptions) return;

  const options = [...BUILT_IN_TASK_TYPES, ...customTaskTypes];
  scheduleTypeFilters = new Set([...scheduleTypeFilters].filter((type) => options.includes(type)));
  scheduleTypeFilterOptions.innerHTML = options.map((type) => `
    <label class="filter-toggle">
      <input type="checkbox" value="${escapeHTML(type)}" data-schedule-type-filter />
      <span>${escapeHTML(type)}</span>
    </label>
  `).join("");
}

function syncScheduleFilterInputs() {
  document.querySelectorAll("[data-schedule-type-filter]").forEach((input) => {
    input.checked = scheduleTypeFilters.has(input.value);
  });
  document.querySelectorAll("[data-schedule-priority-filter]").forEach((input) => {
    input.checked = schedulePriorityFilters.has(input.value);
  });
}

function updateScheduleFilterBadge() {
  if (!scheduleFilterBadge) return;

  const activeCount = scheduleTypeFilters.size + schedulePriorityFilters.size;
  scheduleFilterBadge.textContent = String(activeCount);
  scheduleFilterBadge.classList.toggle("hidden", activeCount === 0);
}

function openScheduleFilterOverlay() {
  renderScheduleFilterControls();
  scheduleFilterOverlay?.classList.remove("hidden");
  scheduleFilterOverlay?.setAttribute("aria-hidden", "false");
  scheduleFilterButton?.setAttribute("aria-expanded", "true");
}

function closeScheduleFilterOverlay() {
  scheduleFilterOverlay?.classList.add("hidden");
  scheduleFilterOverlay?.setAttribute("aria-hidden", "true");
  scheduleFilterButton?.setAttribute("aria-expanded", "false");
}

function clearScheduleFilters() {
  scheduleTypeFilters = new Set();
  schedulePriorityFilters = new Set();
  renderScheduleFilterControls();
  render();
}

function handleScheduleFilterChange(event) {
  const input = event.target.closest("input[type='checkbox']");
  if (!input) return;

  if (input.matches("[data-schedule-type-filter]")) {
    scheduleTypeFilters = updateFilterSet(scheduleTypeFilters, input.value, input.checked);
  }
  if (input.matches("[data-schedule-priority-filter]")) {
    schedulePriorityFilters = updateFilterSet(schedulePriorityFilters, input.value, input.checked);
  }
  updateScheduleFilterBadge();
  render();
}

function updateFilterSet(filterSet, value, isChecked) {
  const nextSet = new Set(filterSet);
  if (isChecked) {
    nextSet.add(value);
  } else {
    nextSet.delete(value);
  }
  return nextSet;
}

function toggleCustomTypeInput() {
  const isCustom = taskTypeInput.value === "custom";
  customTaskTypeInput.classList.toggle("hidden", !isCustom);
  customTaskTypeInput.toggleAttribute("required", isCustom);
  if (isCustom) customTaskTypeInput.focus();
  updateMeetingLinkControls();
}

function handleTaskTypeChange() {
  toggleCustomTypeInput();
  updateMeetingLinkControls();
}

function updateMeetingLinkControls() {
  const selectedType = taskTypeInput.value === "custom"
    ? normalizeTaskTypeName(customTaskTypeInput.value)
    : taskTypeInput.value;
  setMeetingFieldVisibility(taskMeetingField, taskMeetingLinkInput, isMeetingType(selectedType));
}

function updateEditMeetingLinkControls() {
  setMeetingFieldVisibility(editTaskMeetingField, editTaskMeetingLinkInput, isMeetingType(editTaskTypeInput.value));
}

function setMeetingFieldVisibility(field, input, isVisible) {
  field?.classList.toggle("hidden", !isVisible);
  if (!isVisible && input) input.value = "";
}

function isMeetingType(type) {
  return normalizeTaskTypeName(type).toLowerCase() === "meeting";
}

function applyMeetingPreset(event) {
  const button = event.currentTarget;
  const presetUrl = MEETING_PRESET_LINKS[button.dataset.meetingPreset];
  if (!presetUrl) return;

  const targetInput = button.dataset.meetingTarget === "edit"
    ? editTaskMeetingLinkInput
    : taskMeetingLinkInput;
  targetInput.value = presetUrl;
  targetInput.focus();
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

  taskItemKindInput.value = normalizeItemKind(template.itemKind);
  taskTitleInput.value = template.title;
  taskEndTimeInput.value = normalizeOptionalEndTime(template.endTime);
  setDurationDialValue(taskDurationInput, taskDurationHoursInput, taskDurationMinutesInput, getTaskDurationForForm(template));
  if (isStopwatchTask(template)) taskDurationInput.value = "";
  taskTimerModeInput.value = getTaskTimerMode(template);
  taskNotesInput.value = template.notes ?? "";
  taskPriorityInput.value = normalizePriority(template.priority);
  taskRepeatsInput.checked = Boolean(template.repeats);
  taskRepeatModeInput.value = getTaskRepeatModeValue(template);
  taskRepeatIntervalDaysInput.value = String(normalizeRepeatIntervalDays(template.repeatIntervalDays));
  taskRepeatEndDateInput.value = normalizeOptionalRepeatEndDate(template.repeatEndDate, taskDateInput.value);
  taskMeetingLinkInput.value = normalizeMeetingLink(template.meetingLink);
  setRepeatDays(template.repeats ? template.repeatDays : []);
  setSpecificRepeatDates(template.repeats ? template.repeatSpecificDates : []);

  if (template.type && !hasTaskType(BUILT_IN_TASK_TYPES, template.type) && !hasTaskType(customTaskTypes, template.type)) {
    saveCustomTaskType(template.type);
  }

  renderTaskTypeOptions(template.type);
  toggleItemKindFields();
}

function saveCurrentTaskTemplate() {
  syncDurationDialValue(taskDurationInput, taskDurationHoursInput, taskDurationMinutesInput, true);
  const formData = new FormData(taskForm);
  const type = getSubmittedTaskType(formData);
  const itemKind = normalizeItemKind(formData.get("itemKind"));
  const template = normalizeTaskTemplate({
    id: crypto.randomUUID(),
    itemKind,
    title: formData.get("title"),
    endTime: itemKind === "reminder" ? formData.get("endTime") : "",
    duration: formData.get("duration"),
    timerMode: formData.get("timerMode"),
    type,
    notes: formData.get("notes"),
    meetingLink: isMeetingType(type) ? formData.get("meetingLink") : "",
    priority: formData.get("priority"),
    repeats: formData.get("repeats") === "on",
    repeatMode: getRepeatModeForItemKind(formData.get("itemKind"), formData.get("repeatMode")),
    repeatIntervalDays: formData.get("repeatIntervalDays"),
    repeatEndDate: formData.get("repeatEndDate"),
    repeatDays: getSelectedRepeatDays(),
    repeatSpecificDates: getSelectedSpecificRepeatDates(),
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
  renderScheduleFilterControls();
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
  render();
}

function updateScheduleGridZoom() {
  scheduleGrid.querySelectorAll(".day-timeline").forEach((timeline) => {
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

function handleHomeGridZoom(event) {
  if (!event.ctrlKey) return;

  event.preventDefault();
  setHomeGridZoom(homeGridZoom + (event.deltaY < 0 ? 0.1 : -0.1));
}

function handleHomeGridTouchStart(event) {
  if (event.touches.length !== 2) return;

  homePinchStartDistance = getTouchDistance(event.touches);
  homePinchStartZoom = homeGridZoom;
}

function handleHomeGridTouchMove(event) {
  if (event.touches.length !== 2 || homePinchStartDistance === 0) return;

  event.preventDefault();
  setHomeGridZoom(homePinchStartZoom * (getTouchDistance(event.touches) / homePinchStartDistance));
}

function resetHomeGridPinch() {
  homePinchStartDistance = 0;
  homePinchStartZoom = homeGridZoom;
}

function setHomeGridZoom(value) {
  const nextZoom = clamp(value, 0.75, 2.2);
  if (nextZoom === homeGridZoom) return;

  homeGridZoom = nextZoom;
  render();
}

function updateHomeGridZoom() {
  homeDayGrid?.querySelectorAll(".day-timeline").forEach((timeline) => {
    timeline.style.setProperty("--timeline-height", `${getTimelineHeight(Number(timeline.dataset.totalMinutes), homeGridZoom)}px`);
  });
  updateHomeGridControls();
}

function updateHomeGridControls() {
  if (homeGridDatePicker) homeGridDatePicker.value = homeGridAnchorDate;
  if (homeGridRangeInput) homeGridRangeInput.value = homeGridRange;
  if (homeGridZoomLevel) homeGridZoomLevel.textContent = `${Math.round(homeGridZoom * 100)}%`;
  if (homeGridZoomOutButton) homeGridZoomOutButton.disabled = homeGridZoom <= 0.75;
  if (homeGridZoomInButton) homeGridZoomInButton.disabled = homeGridZoom >= 2.2;
  homeDayGrid?.classList.toggle("compact-15", homeGridZoom <= 1.9);
  homeDayGrid?.classList.toggle("compact-30", homeGridZoom <= 1.25);
}

function setHomeGridAnchorDate(value) {
  if (!value) return;

  const nextDate = parseISODate(value);
  if (Number.isNaN(nextDate.getTime())) {
    if (homeGridDatePicker) homeGridDatePicker.value = homeGridAnchorDate;
    return;
  }

  homeGridAnchorDate = toDateInputValue(nextDate);
  render();
}

function shiftHomeGridAnchorDate(amount) {
  setHomeGridAnchorDate(toDateInputValue(addDays(parseISODate(homeGridAnchorDate), amount)));
}

function getHomeGridNavigationStep() {
  return homeGridRange === "week" ? 7 : 1;
}

function getTimelineHeight(totalMinutes, zoom = scheduleGridZoom) {
  return Math.round(totalMinutes * GRID_MINUTE_HEIGHT * zoom);
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
  if (scheduleView === "month") {
    setScheduleAnchorDate(toDateInputValue(addMonths(parseISODate(scheduleAnchorDate), amount < 0 ? -1 : 1)));
    return;
  }

  setScheduleAnchorDate(toDateInputValue(addDays(parseISODate(scheduleAnchorDate), amount)));
}

function getScheduleNavigationStep() {
  if (scheduleView === "month") return 1;
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
      ${featureSettings.personalLeagues ? createPersonalLeaguePanel(completedHistory) : ""}
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
  return localStorage.getItem(getProfileStorageKey(WEEKLY_REPORT_SEEN_STORAGE_KEY)) !== reportKey;
}

function createWeeklyReportModal(completedHistory) {
  const report = buildWeeklyReport(completedHistory);
  const currentPeriod = `${formatDateHeading(report.current.startISO)} - ${formatDateHeading(report.current.endISO)}`;

  return `
    <section class="weekly-report-modal" role="dialog" aria-modal="true" aria-labelledby="weeklyReportModalTitle">
      <button class="close-button weekly-report-modal-close" data-weekly-report-action="close" type="button" aria-label="Close weekly report">x</button>
      <div class="weekly-report-modal-intro">
        <span class="report-kicker">New week report</span>
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
  if (weeklyReport) {
    weeklyReport.innerHTML = createWeeklyReport(buildCompletedHistory());
  }
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
  const reportKey = getCurrentWeeklyReportKey();
  const reportSeen = localStorage.getItem(getProfileStorageKey(WEEKLY_REPORT_SEEN_STORAGE_KEY)) === reportKey;
  const reportBadge = reportSeen ? "Latest weekly report" : "New week report ready";
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

function createRankLogo(league, options = {}) {
  const label = options.label || `${league.name} league logo`;
  const className = options.className ? ` ${options.className}` : "";
  const isSmall = options.small ? " small" : "";
  const assetSrc = `assets/ranks/simple-${league.id}.svg`;

  return `
    <span
      class="rank-logo rank-logo-${escapeHTML(league.id)}${className}${isSmall}"
      style="--rank-logo-color: ${league.color}; --rank-logo-light: ${league.light}; --rank-logo-dark: ${league.dark};"
      role="img"
      aria-label="${escapeHTML(label)}"
    >
      <span class="rank-logo-shadow" aria-hidden="true"></span>
      <img class="rank-logo-image" src="${escapeHTML(assetSrc)}" alt="" loading="lazy" decoding="async" draggable="false">
    </span>
  `;
}

function createPersonalLeaguePanel(completedHistory) {
  const leagueState = buildPersonalLeagueState(completedHistory);
  const statusClass = leagueState.isAtRisk ? "risk" : leagueState.currentIndex === 0 ? "building" : "steady";
  const statusLabel = leagueState.isAtRisk
    ? "At risk"
    : leagueState.currentIndex === 0
      ? "Building"
      : "Holding";
  const nextLabel = leagueState.next
    ? `${formatPoints(leagueState.next.minAverageXp)} avg xp/day + ${leagueState.next.minActiveDays}/${PERSONAL_LEAGUE_LOOKBACK_DAYS} active days`
    : "Top personal league reached";
  const keepLabel = leagueState.currentIndex > 0
    ? `${formatPoints(leagueState.current.minAverageXp)} avg xp/day + ${leagueState.current.minActiveDays}/${PERSONAL_LEAGUE_LOOKBACK_DAYS} active days`
    : "Start climbing by completing tasks across multiple days.";

  return `
    <article class="stat-card personal-league-card" style="--rank-color: ${leagueState.current.color}; --rank-progress: ${leagueState.nextProgress}%;">
      <div class="personal-league-hero">
        ${createRankLogo(leagueState.current, { className: "personal-league-logo", label: `${leagueState.current.name} personal league` })}
        <div class="personal-league-title">
          <span>Personal League</span>
          <h3>${escapeHTML(leagueState.current.name)}</h3>
          <p>Private rank based on your rolling ${PERSONAL_LEAGUE_LOOKBACK_DAYS}-day xp consistency. No leaderboard.</p>
        </div>
        <span class="personal-league-status ${statusClass}">${statusLabel}</span>
      </div>

      <div class="personal-league-progress">
        <div>
          <span>${leagueState.next ? `Next: ${escapeHTML(leagueState.next.name)}` : "Max league"}</span>
          <strong>${leagueState.nextProgress}%</strong>
        </div>
        <i aria-hidden="true"><span></span></i>
        <small>${escapeHTML(nextLabel)}</small>
      </div>

      <div class="personal-league-metrics">
        <article>
          <span>14-day avg</span>
          <strong>${formatPoints(leagueState.averageXp)}</strong>
          <small>xp/day</small>
        </article>
        <article>
          <span>Active days</span>
          <strong>${leagueState.activeDays}/${PERSONAL_LEAGUE_LOOKBACK_DAYS}</strong>
          <small>${formatPoints(leagueState.activityRate)}% consistency</small>
        </article>
        <article>
          <span>Steady days</span>
          <strong>${leagueState.steadyDays}</strong>
          <small>days near your average</small>
        </article>
        <article>
          <span>To keep rank</span>
          <strong>${escapeHTML(leagueState.current.name)}</strong>
          <small>${escapeHTML(keepLabel)}</small>
        </article>
      </div>

      <ol class="personal-league-ladder" aria-label="Personal league ladder">
        ${createPersonalLeagueSteps(leagueState)}
      </ol>
    </article>
  `;
}

function createPersonalLeagueSteps(leagueState) {
  return PERSONAL_LEAGUES.map((league, index) => {
    const stateClass = index < leagueState.currentIndex
      ? "complete"
      : index === leagueState.currentIndex
        ? "current"
        : "locked";

    return `
      <li class="${stateClass}" style="--league-color: ${league.color};">
        ${createRankLogo(league, { className: "ladder-rank-logo", label: `${league.name} league`, small: true })}
        <div>
          <strong>${escapeHTML(league.name)}</strong>
          <small>${formatPoints(league.minAverageXp)} avg xp/day &middot; ${league.minActiveDays}/${PERSONAL_LEAGUE_LOOKBACK_DAYS} active days</small>
        </div>
      </li>
    `;
  }).join("");
}

function buildPersonalLeagueState(completedHistory) {
  const dailyStats = buildDailyStats(completedHistory, PERSONAL_LEAGUE_LOOKBACK_DAYS);
  const totalPoints = dailyStats.reduce((total, day) => total + day.points, 0);
  const activeDays = dailyStats.filter((day) => day.points > 0).length;
  const averageXp = dailyStats.length ? totalPoints / dailyStats.length : 0;
  const steadyFloor = Math.max(10, averageXp * 0.5);
  const steadyDays = averageXp > 0
    ? dailyStats.filter((day) => day.points >= steadyFloor).length
    : 0;
  const currentIndex = PERSONAL_LEAGUES.reduce((bestIndex, league, index) =>
    averageXp >= league.minAverageXp && activeDays >= league.minActiveDays ? index : bestIndex,
  0);
  const current = PERSONAL_LEAGUES[currentIndex];
  const next = PERSONAL_LEAGUES[currentIndex + 1] ?? null;
  const nextAverageProgress = next?.minAverageXp
    ? clamp((averageXp / next.minAverageXp) * 100, 0, 100)
    : 100;
  const nextActiveProgress = next?.minActiveDays
    ? clamp((activeDays / next.minActiveDays) * 100, 0, 100)
    : 100;
  const nextProgress = next ? Math.round(Math.min(nextAverageProgress, nextActiveProgress)) : 100;
  const activityRate = dailyStats.length ? (activeDays / dailyStats.length) * 100 : 0;
  const isAtRisk = currentIndex > 0 && (
    averageXp < current.minAverageXp * 1.12
    || activeDays <= current.minActiveDays
  );

  return {
    dailyStats,
    totalPoints,
    activeDays,
    averageXp,
    steadyDays,
    activityRate,
    current,
    currentIndex,
    next,
    nextProgress,
    isAtRisk,
  };
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
  if (!matchesScheduleExtraFilters(task)) return false;

  return task.occurrenceDate === scheduleAnchorDate && !task.done;
}

function matchesScheduleExtraFilters(task) {
  if (scheduleTypeFilters.size > 0 && !scheduleTypeFilters.has(task.type)) return false;
  if (schedulePriorityFilters.size > 0 && !schedulePriorityFilters.has(normalizePriority(task.priority))) return false;
  return true;
}

function toggleTaskCompletion(task, taskId, occurrenceDate) {
  if (task.id !== taskId) return task;
  if (isAllDayTask(task)) return task;

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
  if (isAllDayTask(task)) return task;
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
  const itemKind = getItemKind(task);
  const timerMode = getTaskTimerMode(task);
  const isAllDay = timerMode === "all-day";

  return {
    id: crypto.randomUUID(),
    itemKind,
    title: task.title,
    date: targetDate,
    time: isAllDay ? "00:00" : targetTime,
    endTime: itemKind === "reminder" ? normalizeOptionalEndTime(task.endTime) : "",
    duration: itemKind === "reminder" || timerMode === "stopwatch" || isAllDay ? 0 : normalizeTaskDuration(task.duration),
    timerMode,
    type: task.type,
    priority: normalizePriority(task.priority),
    notes: task.notes ?? "",
    meetingLink: isMeetingType(task.type) ? normalizeMeetingLink(task.meetingLink) : "",
    repeats: false,
    repeatMode: "weekly",
    repeatIntervalDays: 1,
    repeatEndDate: "",
    repeatDays: [],
    repeatSpecificDates: [],
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

function isStopwatchTimer(timer) {
  return normalizeTimerMode(timer?.timerMode) === "stopwatch";
}

function isTimerComplete(timer) {
  return Boolean(timer) && !isStopwatchTimer(timer) && getTimerRemainingMs(timer) === 0;
}

function syncActiveTimerWithTasks() {
  if (!activeTimer) return;

  const matchingTask = tasks.find((task) => task.id === activeTimer.taskId);
  if (!matchingTask) {
    clearActiveTimer();
    return;
  }

  const occurrence = createOccurrence(matchingTask, activeTimer.occurrenceDate);
  if (occurrence.done || occurrence.skipped || isReminderItem(occurrence)) {
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

  const timerLabel = isStopwatchTimer(activeTimer) ? "Stopwatch" : "Focus mode";

  focusOverlay.classList.add("visible");
  focusOverlay.innerHTML = `
    <section class="focus-card" ${createTypeStyleAttribute(activeTask.type)}>
      <span class="report-kicker">${timerLabel}</span>
      <h2>${escapeHTML(activeTask.title)}</h2>
      <p>${escapeHTML(activeTask.type)} &middot; ${getTaskTimingLabel(activeTask)} &middot; ${formatTimeRange(activeTask)}</p>
      <strong class="focus-countdown" data-timer-countdown>${formatTimerRemaining(activeTimer)}</strong>
      <div class="focus-progress" aria-hidden="true">
        <span data-timer-progress style="width: ${calculateTimerProgress(activeTimer)}%"></span>
      </div>
      <div class="focus-actions">
        <button class="primary-button" data-focus-action="finish" data-active-finish type="button">
          Finish
        </button>
        <button class="secondary-button" data-focus-action="cancel" type="button">Cancel timer</button>
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
      timerMode: normalizeTimerMode(savedTimer.timerMode),
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
    button.title = timerComplete || isStopwatchTimer(activeTimer) ? "Finish task" : "Finish now and earn xp for elapsed time";
  });

  document.querySelectorAll("[data-timer-progress]").forEach((element) => {
    element.style.width = `${calculateTimerProgress(activeTimer)}%`;
  });
}

function getTimerRemainingMs(timer) {
  if (isStopwatchTimer(timer)) return 0;
  const totalMs = Number(timer.duration) * 60 * 1000;
  const elapsedMs = Date.now() - Number(timer.startedAt);
  return Math.max(totalMs - elapsedMs, 0);
}

function calculateTimerElapsedMinutes(timer) {
  if (!timer) return 0;

  const duration = Number(timer.duration) || 0;
  const elapsedMinutes = (Date.now() - Number(timer.startedAt)) / 60000;
  if (isStopwatchTimer(timer)) {
    return Math.max(elapsedMinutes, 0);
  }

  return clamp(elapsedMinutes, 0, duration);
}

function calculateTimerEarnedPoints(timer) {
  return Math.round((calculateTimerElapsedMinutes(timer) / 30) * 10);
}

function calculateTimerProgress(timer) {
  if (isStopwatchTimer(timer)) {
    const elapsedMinutes = calculateTimerElapsedMinutes(timer);
    return ((elapsedMinutes % 60) / 60) * 100;
  }

  const totalMs = Number(timer.duration) * 60 * 1000;
  if (!totalMs) return 0;

  return clamp((1 - getTimerRemainingMs(timer) / totalMs) * 100, 0, 100);
}

function formatTimerRemaining(timer) {
  if (isStopwatchTimer(timer)) {
    return formatTimerElapsed(timer);
  }

  const remainingSeconds = Math.ceil(getTimerRemainingMs(timer) / 1000);
  if (remainingSeconds <= 0) return "Time's up";

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;
  const minuteSecondLabel = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return hours > 0 ? `${hours}:${minuteSecondLabel}` : minuteSecondLabel;
}

function formatTimerElapsed(timer) {
  const elapsedSeconds = Math.max(Math.floor((Date.now() - Number(timer.startedAt)) / 1000), 0);
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;
  const minuteSecondLabel = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return hours > 0 ? `${hours}:${minuteSecondLabel}` : minuteSecondLabel;
}

function resetForm() {
  taskForm.reset();
  taskItemKindInput.value = "task";
  taskDateInput.value = todayISO;
  taskEndTimeInput.value = "";
  setDurationDialValue(taskDurationInput, taskDurationHoursInput, taskDurationMinutesInput, DEFAULT_TASK_DURATION_MINUTES);
  taskTimerModeInput.value = "countdown";
  taskTypeInput.value = BUILT_IN_TASK_TYPES[0];
  taskPriorityInput.value = "Medium";
  taskTemplateSelect.value = "";
  taskRepeatModeInput.value = "weekly";
  taskRepeatIntervalDaysInput.value = "2";
  taskRepeatEndDateInput.value = "";
  taskSpecificRepeatDates = [];
  taskSpecificCalendarMonth = startOfMonth(parseISODate(todayISO));
  renderSpecificRepeatDates();
  customTaskTypeInput.value = "";
  taskInviteEmailsInput.value = "";
  taskMeetingLinkInput.value = "";
  toggleCustomTypeInput();
  toggleItemKindFields();
}

function getSelectedRepeatDays() {
  return [...document.querySelectorAll('input[name="repeatDays"]:checked')]
    .map((input) => Number(input.value))
    .sort((a, b) => a - b);
}

function getSelectedSpecificRepeatDates() {
  return normalizeSpecificRepeatDates(taskSpecificRepeatDates, taskDateInput.value);
}

function getEditSpecificRepeatDates() {
  return normalizeSpecificRepeatDates(editSpecificRepeatDates, editTaskDateInput.value);
}

function addTaskSpecificRepeatDate(dateValue) {
  if (!isISODateString(dateValue)) return;
  taskSpecificRepeatDates = normalizeSpecificRepeatDates([...taskSpecificRepeatDates, dateValue], taskDateInput.value);
  taskSpecificCalendarMonth = startOfMonth(parseISODate(dateValue));
  if (specificRepeatDateInput) specificRepeatDateInput.value = "";
  renderSpecificRepeatDates();
}

function addEditSpecificRepeatDate(dateValue) {
  if (!isISODateString(dateValue)) return;
  editSpecificRepeatDates = normalizeSpecificRepeatDates([...editSpecificRepeatDates, dateValue], editTaskDateInput.value);
  editSpecificCalendarMonth = startOfMonth(parseISODate(dateValue));
  if (editSpecificRepeatDateInput) editSpecificRepeatDateInput.value = "";
  renderEditSpecificRepeatDates();
}

function toggleTaskSpecificRepeatDate(dateValue) {
  if (!isISODateString(dateValue)) return;
  taskSpecificRepeatDates = taskSpecificRepeatDates.includes(dateValue)
    ? taskSpecificRepeatDates.filter((date) => date !== dateValue)
    : normalizeSpecificRepeatDates([...taskSpecificRepeatDates, dateValue], taskDateInput.value);
  renderSpecificRepeatDates();
}

function toggleEditSpecificRepeatDate(dateValue) {
  if (!isISODateString(dateValue)) return;
  editSpecificRepeatDates = editSpecificRepeatDates.includes(dateValue)
    ? editSpecificRepeatDates.filter((date) => date !== dateValue)
    : normalizeSpecificRepeatDates([...editSpecificRepeatDates, dateValue], editTaskDateInput.value);
  renderEditSpecificRepeatDates();
}

function renderSpecificRepeatDates() {
  taskSpecificRepeatDates = normalizeSpecificRepeatDates(taskSpecificRepeatDates, taskDateInput.value);
  if (taskRepeatSpecificDatesInput) taskRepeatSpecificDatesInput.value = taskSpecificRepeatDates.join(",");
  renderSpecificCalendar({
    grid: specificCalendarGrid,
    label: specificCalendarLabel,
    monthDate: taskSpecificCalendarMonth,
    selectedDates: taskSpecificRepeatDates,
    startDate: taskDateInput.value,
    dateAttribute: "specific-date",
  });
  if (specificDateChips) specificDateChips.innerHTML = createSpecificDateChips(taskSpecificRepeatDates);
}

function renderEditSpecificRepeatDates() {
  editSpecificRepeatDates = normalizeSpecificRepeatDates(editSpecificRepeatDates, editTaskDateInput.value);
  if (editRepeatSpecificDatesInput) editRepeatSpecificDatesInput.value = editSpecificRepeatDates.join(",");
  renderSpecificCalendar({
    grid: editSpecificCalendarGrid,
    label: editSpecificCalendarLabel,
    monthDate: editSpecificCalendarMonth,
    selectedDates: editSpecificRepeatDates,
    startDate: editTaskDateInput.value,
    dateAttribute: "edit-specific-date",
  });
  if (editSpecificDateChips) editSpecificDateChips.innerHTML = createSpecificDateChips(editSpecificRepeatDates);
}

function renderSpecificCalendar({ grid, label, monthDate, selectedDates, startDate, dateAttribute }) {
  if (!grid || !label) return;

  const safeMonth = startOfMonth(monthDate instanceof Date && !Number.isNaN(monthDate.getTime())
    ? monthDate
    : parseISODate(todayISO));
  const selectedSet = new Set(normalizeSpecificRepeatDates(selectedDates, startDate));
  const start = isISODateString(startDate) ? parseISODate(startDate) : null;
  const calendarStart = getWeekStart(safeMonth);
  const currentMonth = safeMonth.getMonth();

  label.textContent = safeMonth.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  grid.innerHTML = Array.from({ length: 42 }, (_, index) => {
    const date = addDays(calendarStart, index);
    const isoDate = toDateInputValue(date);
    const isOutsideMonth = date.getMonth() !== currentMonth;
    const isBeforeStart = start && date < start;
    const isSelected = selectedSet.has(isoDate);
    const classes = [
      "specific-calendar-day",
      isOutsideMonth ? "outside-month" : "",
      isoDate === todayISO ? "today" : "",
      isSelected ? "selected" : "",
    ].filter(Boolean).join(" ");
    const disabled = isBeforeStart ? "disabled" : "";

    return `
      <button class="${classes}" type="button" data-${dateAttribute}="${isoDate}" ${disabled} aria-pressed="${isSelected ? "true" : "false"}">
        ${date.getDate()}
      </button>
    `;
  }).join("");
}

function createSpecificDateChips(dates) {
  return normalizeSpecificRepeatDates(dates)
    .map((date) => `
      <button class="specific-date-chip" type="button" data-remove-specific-date="${escapeHTML(date)}" title="Remove ${escapeHTML(formatDateHeading(date))}">
        ${escapeHTML(formatDateHeading(date))}
        <span aria-hidden="true">x</span>
      </button>
    `)
    .join("") || `<span class="specific-date-empty">No specific dates selected</span>`;
}

function setSpecificRepeatDates(dates) {
  taskSpecificRepeatDates = normalizeSpecificRepeatDates(dates, taskDateInput.value);
  taskSpecificCalendarMonth = startOfMonth(parseISODate(taskSpecificRepeatDates[0] || taskDateInput.value || todayISO));
  renderSpecificRepeatDates();
}

function setEditSpecificRepeatDates(dates) {
  editSpecificRepeatDates = normalizeSpecificRepeatDates(dates, editTaskDateInput.value);
  editSpecificCalendarMonth = startOfMonth(parseISODate(editSpecificRepeatDates[0] || editTaskDateInput.value || todayISO));
  renderEditSpecificRepeatDates();
}

function setRepeatDayForDate(dateValue) {
  const weekday = weekdayForISODate(dateValue);
  document.querySelectorAll('input[name="repeatDays"]').forEach((input) => {
    input.checked = Number(input.value) === weekday;
  });
}

function setEditRepeatDayForDate(dateValue) {
  const weekday = weekdayForISODate(dateValue);
  document.querySelectorAll('input[name="editRepeatDays"]').forEach((input) => {
    input.checked = Number(input.value) === weekday;
  });
}

function setRepeatDays(days) {
  const selectedDays = new Set(normalizeRepeatDays(days));
  document.querySelectorAll('input[name="repeatDays"]').forEach((input) => {
    input.checked = selectedDays.has(Number(input.value));
  });
}

function createRepeatLabel(taskOrRepeatDays) {
  const endLabel = !Array.isArray(taskOrRepeatDays) && normalizeOptionalRepeatEndDate(taskOrRepeatDays?.repeatEndDate, taskOrRepeatDays?.date)
    ? ` until ${formatDateHeading(taskOrRepeatDays.repeatEndDate)}`
    : "";

  if (!Array.isArray(taskOrRepeatDays) && getTaskRepeatModeValue(taskOrRepeatDays) === "interval") {
    const interval = normalizeRepeatIntervalDays(taskOrRepeatDays.repeatIntervalDays);
    const repeatDays = normalizeRepeatDays(taskOrRepeatDays.repeatDays);
    const intervalLabel = interval === 1 ? "Every day" : `Every ${interval} days`;
    const weeklyLabel = repeatDays.length > 0 && repeatDays.length < 7
      ? ` + ${repeatDays.map((day) => DAY_NAMES[day]).join(", ")}`
      : "";
    return `${repeatDays.length === 7 ? "Every day" : `${intervalLabel}${weeklyLabel}`}${endLabel}`;
  }

  if (!Array.isArray(taskOrRepeatDays) && getTaskRepeatModeValue(taskOrRepeatDays) === "specific") {
    const dates = normalizeSpecificRepeatDates(taskOrRepeatDays.repeatSpecificDates, taskOrRepeatDays.date);
    if (!dates.length) return `Specific dates${endLabel}`;
    const preview = dates.slice(0, 2).map(formatDateHeading).join(", ");
    const extra = dates.length > 2 ? ` + ${dates.length - 2} more` : "";
    return `${preview}${extra}${endLabel}`;
  }

  const repeatDays = Array.isArray(taskOrRepeatDays)
    ? taskOrRepeatDays
    : normalizeRepeatDays(taskOrRepeatDays?.repeatDays);
  if (!repeatDays.length) return `Weekly${endLabel}`;
  if (repeatDays.length === 7) return `Every day${endLabel}`;
  return `Weekly: ${repeatDays.map((day) => DAY_NAMES[day]).join(", ")}${endLabel}`;
}

function createPriorityChip(task) {
  if (!featureSettings.priorities) return "";

  const priority = normalizePriority(task.priority);
  return `<span class="chip priority-chip priority-${priority.toLowerCase()}">${priority}</span>`;
}

function createMeetingLinkChip(task) {
  if (!isMeetingType(task.type)) return "";
  const link = normalizeMeetingLink(task.meetingLink);
  if (!link) return "";

  return `<a class="chip meeting-link-chip" href="${escapeHTML(link)}" target="_blank" rel="noopener">Open meeting</a>`;
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

function normalizeItemKind(value) {
  return value === "reminder" ? "reminder" : "task";
}

function getItemKind(task) {
  return normalizeItemKind(task?.itemKind);
}

function isReminderItem(task) {
  return getItemKind(task) === "reminder";
}

function isPointReminder(task) {
  return isReminderItem(task) && !normalizeOptionalEndTime(task?.endTime);
}

function normalizeTimerMode(value) {
  if (value === "stopwatch") return "stopwatch";
  if (value === "all-day") return "all-day";
  return "countdown";
}

function getTaskTimerMode(task) {
  return isReminderItem(task) ? "countdown" : normalizeTimerMode(task?.timerMode);
}

function isStopwatchTask(task) {
  return getTaskTimerMode(task) === "stopwatch";
}

function isAllDayTask(task) {
  return !isReminderItem(task) && getTaskTimerMode(task) === "all-day";
}

function normalizeTaskDuration(value) {
  return clamp(parseDurationMinutes(value) || DEFAULT_TASK_DURATION_MINUTES, MIN_TASK_DURATION_MINUTES, MAX_TASK_DURATION_MINUTES);
}

function syncDurationDialValue(hiddenInput, hoursInput, minutesInput, shouldRender = false) {
  const duration = getDurationDialMinutes(hoursInput, minutesInput);
  if (hiddenInput) hiddenInput.value = String(duration);
  if (shouldRender) setDurationDialValue(hiddenInput, hoursInput, minutesInput, duration);
  return duration;
}

function getDurationDialMinutes(hoursInput, minutesInput) {
  const maxHours = Math.floor(MAX_TASK_DURATION_MINUTES / 60);
  const hours = clamp(Math.round(Number(hoursInput?.value) || 0), 0, maxHours);
  const minutes = clamp(Math.round(Number(minutesInput?.value) || 0), 0, 59);
  return normalizeTaskDuration(hours * 60 + minutes);
}

function setDurationDialValue(hiddenInput, hoursInput, minutesInput, value) {
  const duration = normalizeTaskDuration(value);
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (hiddenInput) hiddenInput.value = String(duration);
  if (hoursInput) hoursInput.value = String(hours);
  if (minutesInput) minutesInput.value = String(minutes);
}

function parseDurationMinutes(value) {
  if (typeof value === "string" && /^\d{1,2}:\d{2}$/.test(value.trim())) {
    const [hours, minutes] = value.trim().split(":").map(Number);
    return Math.round(hours * 60 + minutes);
  }

  return Number.isFinite(Number(value)) ? Math.round(Number(value)) : 0;
}

function getTaskDurationForForm(task) {
  if (isAllDayTask(task)) return DEFAULT_TASK_DURATION_MINUTES;
  return isReminderItem(task) ? DEFAULT_TASK_DURATION_MINUTES : normalizeTaskDuration(task.duration);
}

function getVisualTaskDuration(task) {
  if (isAllDayTask(task)) return 24 * 60;
  if (isReminderItem(task)) return getReminderVisualDuration(task);
  if (isStopwatchTask(task) && !Number(task.duration)) return STOPWATCH_VISUAL_DURATION_MINUTES;
  return normalizeTaskDuration(task.duration);
}

function getReminderVisualDuration(task) {
  const start = timeToMinutes(task?.time);
  const endTime = normalizeOptionalEndTime(task?.endTime);

  if (endTime) {
    const end = timeToMinutes(endTime);
    return clamp(end > start ? end - start : GRID_MOVE_SNAP_MINUTES, GRID_MOVE_SNAP_MINUTES, MAX_TASK_DURATION_MINUTES);
  }

  return GRID_MOVE_SNAP_MINUTES * 2;
}

function getScheduleProgressWeight(task) {
  if (isAllDayTask(task)) return 0;
  return isReminderItem(task) ? GRID_MOVE_SNAP_MINUTES : getVisualTaskDuration(task);
}

function getTaskTimingLabel(task) {
  if (isAllDayTask(task)) return "All day";
  if (isReminderItem(task)) return "Reminder";
  if (isStopwatchTask(task)) return "Stopwatch";

  const durationLabel = `${getVisualTaskDuration(task)} min`;
  return durationLabel;
}

function createEndTimeChip(task) {
  const endTime = normalizeOptionalEndTime(task?.endTime);
  return endTime && isReminderItem(task)
    ? `<span class="chip">Ends ${escapeHTML(formatTimeFromMinutes(timeToMinutes(endTime)))}</span>`
    : "";
}

function calculatePoints(task) {
  if (isReminderItem(task) || isAllDayTask(task)) return 0;

  if (task.done && Number.isFinite(Number(task.earnedPoints))) {
    return Math.round(Number(task.earnedPoints));
  }

  return Math.round((calculateCompletedMinutes(task) / 30) * 10);
}

function calculateCompletedMinutes(task) {
  if (isReminderItem(task) || isAllDayTask(task)) return 0;

  if (task.done && Number.isFinite(Number(task.actualMinutes))) {
    return Math.round(Number(task.actualMinutes));
  }

  return getVisualTaskDuration(task);
}

function normalizeEarnedPoints(value, task) {
  if (isReminderItem(task) || isAllDayTask(task)) return 0;
  return Number.isFinite(Number(value)) ? Math.max(Math.round(Number(value)), 0) : calculatePoints(task);
}

function normalizeActualMinutes(value, task) {
  if (isReminderItem(task) || isAllDayTask(task)) return 0;
  const fallback = getVisualTaskDuration(task);
  if (!Number.isFinite(Number(value))) return fallback;
  if (isStopwatchTask(task)) return Math.max(Math.round(Number(value)), 0);
  return Math.round(clamp(Number(value), 0, fallback));
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
    .filter((task) => (
      task.occurrenceDate === currentDate
      && !task.done
      && !task.skipped
      && !isAllDayTask(task)
      && !isActiveTimerFor(task)
    ))
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

function toggleNotificationPanel(event) {
  event?.stopPropagation();
  const shouldOpen = notificationPanel?.classList.contains("hidden");
  setNotificationPanelOpen(Boolean(shouldOpen));
}

function closeNotificationPanel() {
  setNotificationPanelOpen(false);
}

function closeNotificationPanelFromOutside(event) {
  if (notificationPanel?.classList.contains("hidden")) return;
  if (notificationPanel?.contains(event.target) || notificationButton?.contains(event.target)) return;
  closeNotificationPanel();
}

function setNotificationPanelOpen(isOpen) {
  if (!notificationPanel || !notificationButton) return;

  notificationPanel.classList.toggle("hidden", !isOpen);
  notificationButton.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) renderNotifications(reminderOccurrences);
}

function handleNotificationAction(event) {
  const button = event.target.closest("[data-notification-action]");
  if (!button) return;

  if (button.dataset.notificationAction === "profile") {
    closeNotificationPanel();
    openProfileMenu();
    void loadTaskInvites();
  }

  if (button.dataset.notificationAction === "schedule") {
    closeNotificationPanel();
    switchTab("schedule");
  }
}

function renderNotifications(occurrences = reminderOccurrences) {
  const dueTasks = getDueNotificationTasks(occurrences);
  const inviteCount = cloudUser ? taskInvites.length : 0;
  const notificationCount = inviteCount + dueTasks.length;

  if (notificationBadge) {
    notificationBadge.textContent = notificationCount > 9 ? "9+" : String(notificationCount);
    notificationBadge.classList.toggle("hidden", notificationCount === 0);
  }

  notificationButton?.classList.toggle("has-notifications", notificationCount > 0);

  if (!notificationList) return;

  const inviteRows = cloudUser && taskInvites.length > 0
    ? taskInvites.slice(0, 3).map(createInviteNotificationRow)
    : [];
  const taskRows = dueTasks.slice(0, 3).map(createTaskNotificationRow);

  if (inviteRows.length === 0 && taskRows.length === 0) {
    notificationList.innerHTML = `
      <div class="notification-empty">
        <strong>All clear</strong>
        <span>No invites or due tasks right now.</span>
      </div>
    `;
    return;
  }

  notificationList.innerHTML = [...inviteRows, ...taskRows].join("");
}

function createInviteNotificationRow(invite) {
  const preview = createInvitePreview(invite);
  return `
    <button class="notification-row" data-notification-action="profile" type="button">
      <span class="notification-dot"></span>
      <span>
        <strong>${escapeHTML(preview.title)}</strong>
        <small>Invite from ${escapeHTML(preview.inviterName || preview.inviterEmail || "someone")}</small>
      </span>
    </button>
  `;
}

function createTaskNotificationRow(task) {
  return `
    <button class="notification-row" data-notification-action="schedule" type="button">
      <span class="notification-dot task-dot"></span>
      <span>
        <strong>${escapeHTML(task.title)}</strong>
        <small>Due now: ${escapeHTML(formatTimeRange(task))}</small>
      </span>
    </button>
  `;
}

function getDueNotificationTasks(occurrences = reminderOccurrences) {
  const now = new Date();
  const currentDate = toDateInputValue(now);
  const tasksToCheck = occurrences.length > 0 ? occurrences : buildScheduleOccurrences();

  return tasksToCheck
    .filter((task) => task.occurrenceDate === currentDate && !task.done && !task.skipped)
    .filter((task) => {
      const taskDateTime = new Date(`${task.occurrenceDate}T${task.time}`);
      const msFromTaskTime = now - taskDateTime;
      return msFromTaskTime >= 0 && msFromTaskTime <= TASK_NOTIFICATION_WINDOW_MS;
    })
    .sort((first, second) => timeToMinutes(first.time) - timeToMinutes(second.time));
}

function openAssistant() {
  closeAllMenus();
  closeNotificationPanel();
  assistantOverlay?.classList.remove("hidden");
  assistantOverlay?.setAttribute("aria-hidden", "false");
  updateAssistantVoiceAvailability();
  setTimeout(() => assistantPromptInput?.focus(), 60);
}

function closeAssistant() {
  stopAssistantVoice();
  assistantOverlay?.classList.add("hidden");
  assistantOverlay?.setAttribute("aria-hidden", "true");
}

function handleAssistantSubmit(event) {
  event.preventDefault();
  answerAssistantPrompt(assistantPromptInput?.value ?? "");
}

function answerAssistantPrompt(prompt) {
  try {
    const normalizedPrompt = String(prompt ?? "").trim();
    if (!normalizedPrompt) {
      renderAssistantResponse({
        title: "Ask me anything about your schedule.",
        intro: "Try asking about overload, free time, study blocks, overlaps, xp, invites, or how to make today easier.",
        bullets: ["This assistant works locally from your schedule data; it is not connected to an online AI model yet."],
      });
      return;
    }

    if (assistantPromptInput) assistantPromptInput.value = normalizedPrompt;
    const advice = createAssistantAdvice(normalizedPrompt);
    renderAssistantResponse(advice);
  } catch (error) {
    console.error(error);
    renderAssistantResponse({
      title: "I hit a local assistant error.",
      intro: "The assistant is available, but this prompt caused a local schedule check to fail.",
      bullets: [
        "Try asking about today, this week, free time, overlaps, xp, or invites.",
        "This is an on-device helper right now, not a live ChatGPT connection.",
      ],
    });
  }
}

function renderAssistantResponse({ title, intro, bullets }) {
  if (!assistantResponse) return;

  const bulletList = Array.isArray(bullets) && bullets.length > 0
    ? `<ul>${bullets.map((bullet) => `<li>${escapeHTML(bullet)}</li>`).join("")}</ul>`
    : "";

  assistantResponse.innerHTML = `
    <strong>${escapeHTML(title)}</strong>
    <p>${escapeHTML(intro)}</p>
    ${bulletList}
  `;
}

function createAssistantAdvice(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  const scope = getAssistantScope(lowerPrompt);
  const occurrences = buildScheduleOccurrences();
  const scopedTasks = occurrences
    .filter((task) => !task.skipped && task.occurrenceDate >= scope.start && task.occurrenceDate <= scope.end)
    .sort((first, second) => `${first.occurrenceDate}T${first.time}`.localeCompare(`${second.occurrenceDate}T${second.time}`));
  const activeTasks = scopedTasks.filter((task) => !task.done);
  const completedTasks = scopedTasks.filter((task) => task.done);
  const overlaps = findOverlaps(activeTasks);
  const totalMinutes = activeTasks.reduce((total, task) => total + getScheduleProgressWeight(task), 0);
  const completedMinutes = completedTasks.reduce((total, task) => total + calculateCompletedMinutes(task), 0);
  const points = completedTasks.reduce((total, task) => total + calculatePoints(task), 0);

  if (lowerPrompt.includes("overlap") || lowerPrompt.includes("busy") || lowerPrompt.includes("clash")) {
    return createOverlapAdvice(scope, activeTasks, overlaps);
  }

  if (lowerPrompt.includes("study") || lowerPrompt.includes("focus") || lowerPrompt.includes("homework")) {
    return createStudyAdvice(scope, activeTasks);
  }

  if (lowerPrompt.includes("rank") || lowerPrompt.includes("league")) {
    return createLeagueAdvice();
  }

  if (lowerPrompt.includes("xp") || lowerPrompt.includes("point") || lowerPrompt.includes("streak")) {
    return createXpAdvice(scope, completedTasks, completedMinutes, points);
  }

  if (lowerPrompt.includes("invite") || lowerPrompt.includes("person") || lowerPrompt.includes("people") || lowerPrompt.includes("friend") || lowerPrompt.includes("name")) {
    return createInviteAdvice();
  }

  if (lowerPrompt.includes("ai") || lowerPrompt.includes("assistant") || lowerPrompt.includes("unavailable") || lowerPrompt.includes("not work")) {
    return createAssistantStatusAdvice();
  }

  if (lowerPrompt.includes("free") || lowerPrompt.includes("gap") || lowerPrompt.includes("when")) {
    return createFreeTimeAdvice(scope, activeTasks);
  }

  return createGeneralScheduleAdvice(scope, activeTasks, overlaps, totalMinutes, completedTasks, points);
}

function getAssistantScope(lowerPrompt) {
  if (lowerPrompt.includes("tomorrow")) {
    const date = toDateInputValue(addDays(startOfToday(new Date()), 1));
    return { label: "tomorrow", start: date, end: date, days: 1 };
  }

  if (lowerPrompt.includes("week")) {
    const weekStart = getWeekStart(parseISODate(scheduleAnchorDate || todayISO));
    const weekEnd = addDays(weekStart, 6);
    return {
      label: "this week",
      start: toDateInputValue(weekStart),
      end: toDateInputValue(weekEnd),
      days: 7,
    };
  }

  if (lowerPrompt.includes("month")) {
    return {
      label: "the next month",
      start: todayISO,
      end: toDateInputValue(addDays(startOfToday(new Date()), 30)),
      days: 31,
    };
  }

  const date = lowerPrompt.includes("selected") ? scheduleAnchorDate : todayISO;
  return { label: date === todayISO ? "today" : formatDateHeading(date), start: date, end: date, days: 1 };
}

function createOverlapAdvice(scope, activeTasks, overlaps) {
  if (activeTasks.length === 0) {
    return {
      title: `No active tasks for ${scope.label}.`,
      intro: "There is nothing to check yet.",
      bullets: ["Add a few tasks first, then I can spot clashes and busy patches."],
    };
  }

  if (overlaps.length === 0) {
    return {
      title: "No overlaps found.",
      intro: `Your active tasks for ${scope.label} are not clashing.`,
      bullets: createBusyDayBullets(activeTasks),
    };
  }

  return {
    title: `${overlaps.length} overlap${overlaps.length === 1 ? "" : "s"} found.`,
    intro: `These are the first clashes I noticed for ${scope.label}.`,
    bullets: overlaps.slice(0, 4).map((overlap) =>
      `${overlap.first.title} (${formatTimeRange(overlap.first)}) overlaps ${overlap.second.title} (${formatTimeRange(overlap.second)}) on ${formatDateHeading(overlap.first.occurrenceDate)}.`,
    ),
  };
}

function createStudyAdvice(scope, activeTasks) {
  const targetDate = scope.start;
  const dayTasks = activeTasks.filter((task) => task.occurrenceDate === targetDate);
  const freeWindows = findFreeTimeWindows(dayTasks, targetDate, 45);
  const bestWindow = freeWindows.find((window) => window.minutes >= 60) ?? freeWindows[0];

  if (!bestWindow) {
    return {
      title: "That day is pretty packed.",
      intro: `I could not find a clean study block on ${formatDateHeading(targetDate)}.`,
      bullets: [
        "Try moving one lower priority task earlier or later.",
        "A 30 minute study block is still useful if a full hour will not fit.",
      ],
    };
  }

  return {
    title: "Good study window found.",
    intro: `${formatTimeFromMinutes(bestWindow.start)} to ${formatTimeFromMinutes(bestWindow.end)} looks like your cleanest opening on ${formatDateHeading(targetDate)}.`,
    bullets: [
      `That gives you about ${formatMinutesAsHours(bestWindow.minutes)} free.`,
      "Put the hardest study task near the start of that block, then leave a short break after it.",
    ],
  };
}

function createXpAdvice(scope, completedTasks, completedMinutes, points) {
  const todayCompletedMinutes = getCompletedMinutesForDate(buildCompletedHistory(), todayISO);
  const minutesNeeded = Math.max(STREAK_MINUTES_TO_KEEP - todayCompletedMinutes, 0);
  const bullets = [
    `${completedTasks.length} completed task${completedTasks.length === 1 ? "" : "s"} in ${scope.label}.`,
    `${formatMinutesAsHours(completedMinutes)} completed and ${formatPoints(points)} xp earned in this view.`,
  ];

  bullets.push(minutesNeeded === 0
    ? "Your streak is safe for today."
    : `${minutesNeeded} more minute${minutesNeeded === 1 ? "" : "s"} will protect today's streak.`);

  return {
    title: "Here is your xp picture.",
    intro: "I checked completed work, xp, and streak progress.",
    bullets,
  };
}

function createLeagueAdvice() {
  if (!featureSettings.personalLeagues) {
    return {
      title: "Personal leagues are turned off.",
      intro: "You can turn them on from Settings when you want a private consistency rank again.",
      bullets: [
        "The rank is private by default.",
        "Friend visibility has its own toggle in your profile menu.",
      ],
    };
  }

  const leagueState = buildPersonalLeagueState(buildCompletedHistory());
  const nextBullet = leagueState.next
    ? `Next league: ${leagueState.next.name}, which needs ${formatPoints(leagueState.next.minAverageXp)} average xp/day and ${leagueState.next.minActiveDays}/${PERSONAL_LEAGUE_LOOKBACK_DAYS} active days.`
    : "You are at the top personal league right now. Keep your rolling average steady to hold it.";
  const riskBullet = leagueState.isAtRisk
    ? "Your league is close to dropping, so a few steady task days will protect it."
    : "Your league is currently stable based on the rolling 14-day window.";

  return {
    title: `You are in ${leagueState.current.name}.`,
    intro: "Your rank is private and based on consistency, not competing with other people.",
    bullets: [
      `${formatPoints(leagueState.averageXp)} average xp/day across the last ${PERSONAL_LEAGUE_LOOKBACK_DAYS} days.`,
      `${leagueState.activeDays}/${PERSONAL_LEAGUE_LOOKBACK_DAYS} active days, with ${leagueState.steadyDays} steady days near your average.`,
      nextBullet,
      riskBullet,
    ],
  };
}

function createFreeTimeAdvice(scope, activeTasks) {
  const targetDate = scope.start;
  const dayTasks = activeTasks.filter((task) => task.occurrenceDate === targetDate);
  const freeWindows = findFreeTimeWindows(dayTasks, targetDate, 30).slice(0, 4);

  if (freeWindows.length === 0) {
    return {
      title: "No clear free windows found.",
      intro: `Your schedule for ${formatDateHeading(targetDate)} is tight between morning and night.`,
      bullets: ["Try switching the grid to that day and moving a low priority task first."],
    };
  }

  return {
    title: "Best free windows.",
    intro: `These openings look useful on ${formatDateHeading(targetDate)}.`,
    bullets: freeWindows.map((window) =>
      `${formatTimeFromMinutes(window.start)} to ${formatTimeFromMinutes(window.end)} gives about ${formatMinutesAsHours(window.minutes)}.`,
    ),
  };
}

function createGeneralScheduleAdvice(scope, activeTasks, overlaps, totalMinutes, completedTasks, points) {
  if (activeTasks.length === 0 && completedTasks.length === 0) {
    return {
      title: `Nothing planned for ${scope.label} yet.`,
      intro: "A simple starter schedule would be one main task, one short admin task, and one break.",
      bullets: [
        "Add your most important task first so the day has a clear anchor.",
        "Keep the first version light, then fill gaps later.",
      ],
    };
  }

  const bullets = [
    `${activeTasks.length} active task${activeTasks.length === 1 ? "" : "s"} planned for ${scope.label}.`,
    `${formatMinutesAsHours(totalMinutes)} still scheduled, with ${formatPoints(points)} xp already earned.`,
  ];

  if (overlaps.length > 0) {
    bullets.push(`Fix ${overlaps.length} overlap${overlaps.length === 1 ? "" : "s"} first, because they will make the day feel messy.`);
  } else {
    bullets.push("No overlaps found, so the structure is looking clean.");
  }

  if (totalMinutes > 4 * 60 && scope.days === 1) {
    bullets.push("This is a heavy day. Move one low priority task or add a longer break after your longest block.");
  } else if (totalMinutes < 90 && scope.days === 1) {
    bullets.push("The day is light. You could add one focused task if you want more progress.");
  } else {
    bullets.push("The workload looks reasonable. Keep your hardest task near the time you usually have the most energy.");
  }

  return {
    title: "Here is how I would tune it.",
    intro: "I looked at workload, overlaps, completed xp, and task spacing.",
    bullets,
  };
}

function createInviteAdvice() {
  return {
    title: "Invites can use email or a Shedulr name.",
    intro: "Open your profile menu, log in, and save your public Shedulr name. Then friends can type that name in the invite field.",
    bullets: [
      "Names are checked through Supabase, so both people need Cloud Login set up.",
      "Use commas if you invite more than one person.",
      "If a name is not found, use their email or ask them to save their Shedulr name first.",
    ],
  };
}

function createAssistantStatusAdvice() {
  return {
    title: "The assistant is available as a local helper.",
    intro: "It reads your saved schedule and gives rule-based planning advice inside the app.",
    bullets: [
      "It can check overload, free time, study windows, overlaps, xp, streaks, and invites.",
      "It is not connected to an online AI model yet, so broad chat questions will be limited.",
      "Voice input depends on browser speech recognition and may not work in every browser.",
    ],
  };
}

function createBusyDayBullets(tasksToCheck) {
  if (tasksToCheck.length === 0) return ["No active tasks to review."];

  const longestTask = tasksToCheck.reduce((longest, task) =>
    getVisualTaskDuration(task) > getVisualTaskDuration(longest) ? task : longest,
  tasksToCheck[0]);

  return [
    `Longest block: ${longestTask.title} at ${formatTimeRange(longestTask)}.`,
    "If the day feels too full, move the longest low-pressure task first.",
  ];
}

function findFreeTimeWindows(dayTasks, date, minimumMinutes) {
  const dayStart = 7 * 60;
  const dayEnd = 22 * 60;
  const busyRanges = dayTasks
    .filter((task) => task.occurrenceDate === date)
    .map(getTaskTimeRange)
    .map((range) => ({
      start: clamp(range.start, dayStart, dayEnd),
      end: clamp(range.end, dayStart, dayEnd),
    }))
    .filter((range) => range.end > range.start)
    .sort((first, second) => first.start - second.start || first.end - second.end);
  const mergedRanges = busyRanges.reduce((ranges, range) => {
    const previous = ranges.at(-1);
    if (previous && range.start <= previous.end) {
      previous.end = Math.max(previous.end, range.end);
    } else {
      ranges.push({ ...range });
    }
    return ranges;
  }, []);
  const windows = [];
  let cursor = dayStart;

  mergedRanges.forEach((range) => {
    if (range.start - cursor >= minimumMinutes) {
      windows.push({ start: cursor, end: range.start, minutes: range.start - cursor });
    }
    cursor = Math.max(cursor, range.end);
  });

  if (dayEnd - cursor >= minimumMinutes) {
    windows.push({ start: cursor, end: dayEnd, minutes: dayEnd - cursor });
  }

  return windows.sort((first, second) => second.minutes - first.minutes);
}

function updateAssistantVoiceAvailability() {
  if (!assistantVoiceButton) return;

  const isSupported = Boolean(getSpeechRecognitionConstructor());
  assistantVoiceButton.disabled = false;
  assistantVoiceButton.setAttribute("aria-disabled", String(!isSupported));
  assistantVoiceButton.title = isSupported
    ? "Use voice command"
    : "Voice commands are not supported in this browser.";
}

function toggleAssistantVoice() {
  if (assistantIsListening) {
    stopAssistantVoice();
    return;
  }

  const SpeechRecognition = getSpeechRecognitionConstructor();
  if (!SpeechRecognition) {
    renderAssistantResponse({
      title: "Voice is not available here.",
      intro: "This browser does not support speech recognition for local web apps.",
      bullets: ["You can still type prompts into the assistant box."],
    });
    return;
  }

  assistantRecognition = new SpeechRecognition();
  assistantRecognition.lang = "en-AU";
  assistantRecognition.continuous = false;
  assistantRecognition.interimResults = false;
  assistantRecognition.onstart = () => setAssistantListening(true);
  assistantRecognition.onend = () => setAssistantListening(false);
  assistantRecognition.onerror = () => {
    setAssistantListening(false);
    renderAssistantResponse({
      title: "I could not hear that one.",
      intro: "Try the mic again, or type the prompt instead.",
      bullets: [],
    });
  };
  assistantRecognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .flatMap((result) => Array.from(result))
      .map((result) => result.transcript)
      .join(" ")
      .trim();

    if (!transcript) return;
    assistantPromptInput.value = transcript;
    answerAssistantPrompt(transcript);
  };

  try {
    assistantRecognition.start();
  } catch {
    setAssistantListening(false);
  }
}

function stopAssistantVoice() {
  if (assistantRecognition) {
    try {
      assistantRecognition.stop();
    } catch {
      // Ignore stop failures when the browser has already ended listening.
    }
  }
  setAssistantListening(false);
}

function setAssistantListening(isListening) {
  assistantIsListening = isListening;
  assistantVoiceButton?.classList.toggle("listening", isListening);
  if (assistantVoiceButton) {
    assistantVoiceButton.setAttribute("aria-label", isListening ? "Stop voice command" : "Use voice command");
  }
}

function getSpeechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition;
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

function handlePickerFieldClick(event) {
  const directPicker = event.target.closest("select, input[type='date'], input[type='time']");
  if (directPicker) {
    openNativePicker(directPicker);
    return;
  }

  const label = event.target.closest("label");
  if (!label || event.target.closest("input, textarea, button, a")) return;

  const picker = label.querySelector("select, input[type='date'], input[type='time']");
  if (!picker) return;

  if (openNativePicker(picker, { allowSyntheticClick: true })) {
    event.preventDefault();
  }
}

function openNativePicker(control, options = {}) {
  if (!control || control.disabled) return false;

  try {
    control.focus({ preventScroll: true });
  } catch {
    control.focus();
  }

  if (typeof control.showPicker === "function") {
    try {
      control.showPicker();
      return true;
    } catch {
      // Some browsers only allow showPicker during very specific user gestures.
    }
  }

  if (options.allowSyntheticClick && control.tagName === "SELECT") {
    try {
      control.click();
      return false;
    } catch {
      return false;
    }
  }

  return false;
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
  currentAccentTheme = ACCENT_THEMES[theme] ? theme : "sleek";
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
  homeRankCard?.classList.toggle("hidden", !featureSettings.personalLeagues);
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
  hideFriendDetail();
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
  closeNotificationPanel();
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
  const completedRedirect = await completeAuthRedirect();
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    setCloudStatus(error.message);
    return;
  }

  cloudUser = data.session?.user ?? null;
  updateAuthUI();
  if (cloudUser) {
    await loadShedulrDirectoryProfile();
    await loadCloudData();
    await loadTaskInvites();
    await refreshFriends({ silent: true });
  } else if (completedRedirect) {
    setCloudStatus("Email confirmed. You can log in with the password you used when signing up.");
  }
  handleIncomingFriendShareLink();

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    const nextUser = session?.user ?? null;
    const userChanged = nextUser?.id !== cloudUser?.id;
    cloudUser = nextUser;
    updateAuthUI();

    if (cloudUser && userChanged) {
      await loadShedulrDirectoryProfile();
      await loadCloudData();
      await loadTaskInvites();
      await refreshFriends({ silent: true });
    } else if (!cloudUser) {
      cloudDirectoryProfile = null;
      taskInvites = [];
      renderShedulrNameControls();
      renderTaskInvites();
    }
    handleIncomingFriendShareLink();
  });
}

async function completeAuthRedirect() {
  if (!supabaseClient) return false;

  const queryParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const authError = queryParams.get("error_description") || hashParams.get("error_description");

  if (authError) {
    setCloudStatus(authError.replace(/\+/g, " "));
    cleanAuthUrl();
    return true;
  }

  const code = queryParams.get("code");
  if (!code) return false;

  setCloudStatus("Finishing email confirmation...");
  const { data, error } = await supabaseClient.auth.exchangeCodeForSession(code);
  cleanAuthUrl();

  if (error) {
    setCloudStatus(error.message);
    console.error(error);
    return true;
  }

  if (data.session?.user) {
    cloudUser = data.session.user;
    updateAuthUI();
    setCloudStatus("Email confirmed. You are signed in.");
  }

  return true;
}

function cleanAuthUrl() {
  if (!window.history?.replaceState || !["http:", "https:"].includes(window.location.protocol)) return;
  window.history.replaceState({}, document.title, getAuthRedirectUrl());
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
  await loadShedulrDirectoryProfile();
  await loadCloudData();
  await loadTaskInvites();
  await refreshFriends({ silent: true });
  handleIncomingFriendShareLink();
}

async function signUpWithEmail() {
  if (!supabaseClient) return;

  const credentials = getAuthCredentials();
  if (!credentials) return;

  setCloudStatus("Creating account...");
  const emailRedirectTo = getAuthRedirectUrl();
  const { data, error } = await supabaseClient.auth.signUp({
    ...credentials,
    ...(emailRedirectTo ? { options: { emailRedirectTo } } : {}),
  });
  if (error) {
    setCloudStatus(error.message);
    return;
  }

  if (data.session?.user) {
    cloudUser = data.session.user;
    updateAuthUI();
    await loadShedulrDirectoryProfile();
    await saveCloudDataNow();
    await loadTaskInvites();
    await refreshFriends({ silent: true });
    handleIncomingFriendShareLink();
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
  cloudDirectoryProfile = null;
  taskInvites = [];
  hideFriendDetail();
  updateAuthUI();
  renderShedulrNameControls();
  renderTaskInvites();
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

function getAuthRedirectUrl() {
  return getAppPublicUrl();
}

function getAppPublicUrl() {
  return getAppBaseUrl().toString();
}

function getAppBaseUrl() {
  const isWebUrl = ["http:", "https:"].includes(window.location.protocol);
  const baseUrl = isWebUrl
    ? new URL(window.location.href)
    : new URL(APP_AUTH_REDIRECT_URL);

  baseUrl.hash = "";
  baseUrl.search = "";
  if (baseUrl.pathname.endsWith("/index.html")) {
    baseUrl.pathname = baseUrl.pathname.slice(0, -"index.html".length) || "/";
  }

  return baseUrl;
}

function handleIncomingFriendShareLink() {
  const label = getIncomingFriendShareLabel();
  if (!label || !friendLookupInput) return false;

  friendLookupInput.value = label;
  openProfileMenu();

  if (cloudUser) {
    setFriendsStatus(`${label} is ready. Tap Add to send the friend request.`);
    setTimeout(() => friendLookupInput.focus(), 80);
  } else {
    setCloudStatus(`Log in or create an account, then add ${label}.`);
  }

  return true;
}

function getIncomingFriendShareLabel() {
  if (!["http:", "https:"].includes(window.location.protocol)) return "";

  const rawValue = new URLSearchParams(window.location.search).get("friend");
  const handle = createShedulrHandle(String(rawValue ?? "").replace(/^@/, ""));
  return handle ? `@${handle}` : "";
}

function clearIncomingFriendShareLink() {
  if (!window.history?.replaceState || !["http:", "https:"].includes(window.location.protocol)) return;

  const url = new URL(window.location.href);
  url.searchParams.delete("friend");
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`);
}

function updateAuthUI() {
  const signedIn = Boolean(cloudUser);
  authForm.classList.toggle("hidden", signedIn);
  authSession.classList.toggle("hidden", !signedIn);
  shedulrNameForm?.classList.toggle("hidden", !signedIn);
  friendsSection?.classList.toggle("hidden", !signedIn);
  groupsSection?.classList.toggle("hidden", !signedIn);
  inviteInbox?.classList.toggle("hidden", !signedIn);
  authUserLabel.textContent = cloudUser?.email ?? "Signed in";
  renderFriendControls();
  renderGroupControls();

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
  await syncPublicProfileSnapshot({ silent: true });
  setCloudButtonsBusy(false);
  setCloudStatus("Uploaded just now. Log in with this same email on the other device, then tap Load cloud.");
}

function setCloudButtonsBusy(isBusy) {
  loadCloudButton.disabled = isBusy;
  syncNowButton.disabled = isBusy;
  if (shedulrNameForm) shedulrNameForm.querySelector("button")?.toggleAttribute("disabled", isBusy || isSavingShedulrName);
  if (refreshInvitesButton) refreshInvitesButton.disabled = isBusy || isLoadingTaskInvites;
  if (refreshFriendsButton) refreshFriendsButton.disabled = isBusy || isLoadingFriends;
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

async function loadShedulrDirectoryProfile() {
  if (!supabaseClient || !cloudUser) {
    cloudDirectoryProfile = null;
    renderShedulrNameControls();
    return;
  }

  const { data, error } = await supabaseClient
    .from(USER_DIRECTORY_TABLE)
    .select("user_id, display_name, handle, email, public_stats, grid_visibility, updated_at")
    .eq("user_id", cloudUser.id)
    .maybeSingle();

  if (error) {
    const message = getDirectoryErrorMessage(error, "load your Shedulr name");
    setShedulrNameStatus(message);
    return;
  }

  if (data) {
    cloudDirectoryProfile = normalizeDirectoryProfile(data);
    localStorage.setItem(getShedulrNameStorageKey(), cloudDirectoryProfile.displayName);
    renderShedulrNameControls();
    return;
  }

  const activeProfileName = normalizeProfileName(getActiveProfile()?.name);
  const emailName = String(cloudUser.email ?? "").split("@")[0];
  const fallbackName = normalizeShedulrDisplayName(
    localStorage.getItem(getShedulrNameStorageKey())
    || (activeProfileName && activeProfileName !== "My Profile" ? activeProfileName : "")
    || emailName,
  );
  await upsertShedulrDirectoryProfile(fallbackName, { silent: true });
}

async function saveShedulrName(event) {
  event.preventDefault();
  const name = normalizeShedulrDisplayName(shedulrNameInput?.value);

  if (name.length < 2) {
    setShedulrNameStatus("Use at least 2 characters for your Shedulr name.");
    shedulrNameInput?.focus();
    return;
  }

  await upsertShedulrDirectoryProfile(name);
}

async function upsertShedulrDirectoryProfile(name, options = {}) {
  if (!supabaseClient || !cloudUser) {
    setShedulrNameStatus("Log in first to save your Shedulr name.");
    return false;
  }

  const displayName = normalizeShedulrDisplayName(name);
  const handle = createShedulrHandle(displayName);
  if (!displayName || !handle) return false;

  isSavingShedulrName = true;
  setCloudButtonsBusy(true);
  setShedulrNameStatus("Saving Shedulr name...");

  const { error } = await supabaseClient
    .from(USER_DIRECTORY_TABLE)
    .upsert(
      createDirectoryProfilePayload(displayName),
      { onConflict: "user_id" },
    );

  isSavingShedulrName = false;
  setCloudButtonsBusy(false);

  if (error) {
    const message = getDirectoryErrorMessage(error, "save your Shedulr name");
    setShedulrNameStatus(message);
    if (!options.silent) showAppToast("Name not saved", message);
    console.error(error);
    return false;
  }

  cloudDirectoryProfile = { displayName, handle, email: normalizeEmail(cloudUser.email) };
  localStorage.setItem(getShedulrNameStorageKey(), displayName);
  renderShedulrNameControls();
  if (!options.silent) {
    showAppToast("Shedulr name saved", `People can invite you as ${displayName}.`);
  }
  return true;
}

function renderShedulrNameControls() {
  if (!shedulrNameInput) return;

  const fallbackName = normalizeShedulrDisplayName(
    cloudDirectoryProfile?.displayName
    || localStorage.getItem(getShedulrNameStorageKey())
    || getActiveProfile()?.name
    || "",
  );
  shedulrNameInput.value = fallbackName;

  if (!cloudUser) {
    setShedulrNameStatus("Log in to save a public Shedulr name.");
    renderFriendShareCard();
    return;
  }

  const handle = cloudDirectoryProfile?.handle || createShedulrHandle(fallbackName);
  setShedulrNameStatus(handle
    ? `People can invite you with "${fallbackName}" or @${handle}.`
    : "People can invite you with this name or your email.");
  renderFriendShareCard();
}

function renderFriendShareCard() {
  if (!friendShareCard || !friendShareLinkInput || !friendQrCode) return;

  const shareUrl = getFriendShareUrl();
  friendShareCard.classList.toggle("hidden", !shareUrl);
  friendShareLinkInput.value = shareUrl;
  copyFriendLinkButton?.toggleAttribute("disabled", !shareUrl);
  shareFriendLinkButton?.toggleAttribute("disabled", !shareUrl);

  if (!shareUrl || renderedFriendShareUrl === shareUrl) return;
  renderedFriendShareUrl = shareUrl;
  friendQrCode.innerHTML = "";

  if (typeof window.QRCode !== "function") {
    friendQrCode.innerHTML = '<span class="friend-qr-fallback">QR unavailable</span>';
    return;
  }

  new window.QRCode(friendQrCode, {
    text: shareUrl,
    width: 156,
    height: 156,
    colorDark: "#111111",
    colorLight: "#ffffff",
    correctLevel: window.QRCode.CorrectLevel.M,
  });
}

function getFriendShareUrl() {
  if (!cloudUser) return "";

  const fallbackName = normalizeShedulrDisplayName(shedulrNameInput?.value || getActiveProfile()?.name);
  const handle = cloudDirectoryProfile?.handle || createShedulrHandle(fallbackName);
  if (!handle) return "";

  const baseUrl = getAppBaseUrl();
  baseUrl.searchParams.set("friend", `@${handle}`);
  return baseUrl.toString();
}

async function copyFriendShareLink() {
  const shareUrl = getFriendShareUrl();
  if (!shareUrl) return;

  try {
    await navigator.clipboard.writeText(shareUrl);
  } catch {
    friendShareLinkInput.value = shareUrl;
    friendShareLinkInput.select();
    document.execCommand("copy");
  }

  showAppToast("Friend link copied", "Send it to someone so they can add you in Shedulr.");
}

async function shareFriendProfile() {
  const shareUrl = getFriendShareUrl();
  if (!shareUrl) return;

  if (typeof navigator.share !== "function") {
    await copyFriendShareLink();
    return;
  }

  try {
    await navigator.share({
      title: "Add me on Shedulr",
      text: `Add ${cloudDirectoryProfile?.displayName || getActiveProfile()?.name || "me"} on Shedulr.`,
      url: shareUrl,
    });
  } catch (error) {
    if (error?.name !== "AbortError") {
      showAppToast("Could not share", "Use Copy link instead.");
    }
  }
}

async function addFriend(event) {
  event.preventDefault();
  const query = String(friendLookupInput?.value ?? "").trim();

  if (!query) {
    friendLookupInput?.focus();
    return;
  }

  if (!supabaseClient || !cloudUser) {
    setFriendsStatus("Log in first to add friends.");
    return;
  }

  isLoadingFriends = true;
  setCloudButtonsBusy(true);
  setFriendsStatus("Finding friend...");

  try {
    const friendProfile = await lookupFriendDirectoryProfile(query);
    if (friendProfile?.ambiguous) {
      setFriendsStatus("More than one person matched. Use their exact @name or email.");
      showAppToast("Use exact friend name", "Ask for their @Shedulr name or use their email.");
      return;
    }

    if (!friendProfile?.email) {
      setFriendsStatus("No Shedulr profile found. Try their exact @name or email.");
      showAppToast("Friend not found", "Ask them to log in and save their Shedulr name first.");
      return;
    }

    if (friendProfile.email === normalizeEmail(cloudUser.email)) {
      setFriendsStatus("That is your own account.");
      return;
    }

    const friendId = getFriendId(friendProfile);
    if (friends.some((friend) => getFriendId(friend) === friendId)) {
      setFriendsStatus(`${friendProfile.displayName} is already in your friends.`);
      return;
    }

    friends = normalizeFriends([
      {
        ...friendProfile,
        addedAt: new Date().toISOString(),
      },
      ...friends,
    ]);
    saveFriends();
    friendLookupInput.value = "";
    clearIncomingFriendShareLink();
    renderFriendControls();
    showAppToast("Friend added", `${friendProfile.displayName} is ready for quick invites.`);
    setFriendsStatus("Friend added. Tap their card to see shared stats.");
  } catch (error) {
    const message = getDirectoryErrorMessage(error, "find that friend");
    setFriendsStatus(message);
    showAppToast("Friend not added", message);
    console.error(error);
  } finally {
    isLoadingFriends = false;
    setCloudButtonsBusy(false);
  }
}

async function refreshFriends(options = {}) {
  if (!supabaseClient || !cloudUser) {
    setFriendsStatus("Log in first to refresh friends.");
    return;
  }

  if (friends.length === 0) {
    renderFriendControls();
    return;
  }

  isLoadingFriends = true;
  setCloudButtonsBusy(true);
  if (!options.silent) setFriendsStatus("Refreshing friends...");

  const refreshedFriends = [];
  try {
    for (const friend of friends) {
      const lookupValue = friend.handle ? `@${friend.handle}` : friend.email;
      const freshProfile = await lookupFriendDirectoryProfile(lookupValue);
      refreshedFriends.push(freshProfile ? { ...friend, ...freshProfile } : friend);
    }

    friends = normalizeFriends(refreshedFriends);
    saveFriends();
    renderFriendControls();
    if (!options.silent) setFriendsStatus("Friends refreshed.");
  } catch (error) {
    const message = getDirectoryErrorMessage(error, "refresh friends");
    if (!options.silent) setFriendsStatus(message);
    console.error(error);
  } finally {
    isLoadingFriends = false;
    setCloudButtonsBusy(false);
  }
}

function handleFriendListAction(event) {
  const button = event.target.closest("button[data-friend-action]");
  if (!button) return;

  const friendId = button.dataset.friendId;
  const friend = friends.find((savedFriend) => getFriendId(savedFriend) === friendId);
  if (!friend) return;

  if (button.dataset.friendAction === "view") {
    openFriendDetail(friend);
  }

  if (button.dataset.friendAction === "invite") {
    appendFriendToInviteField(taskInviteEmailsInput, friend);
    setFriendsStatus(`${friend.displayName} added to the next task invite field.`);
  }

  if (button.dataset.friendAction === "remove") {
    friends = friends.filter((savedFriend) => getFriendId(savedFriend) !== friendId);
    saveFriends();
    renderFriendControls();
    hideFriendDetail();
    setFriendsStatus("Friend removed.");
  }
}

function handleFriendDetailAction(event) {
  const button = event.target.closest("button[data-friend-detail-action]");
  if (!button) return;

  if (button.dataset.friendDetailAction === "close") {
    hideFriendDetail();
    return;
  }

  const friend = friends.find((savedFriend) => getFriendId(savedFriend) === button.dataset.friendId);
  if (!friend) return;

  if (button.dataset.friendDetailAction === "invite") {
    appendFriendToInviteField(taskInviteEmailsInput, friend);
    hideFriendDetail();
  }
}

function handleFriendInviteClick(event, input) {
  const button = event.target.closest("button[data-friend-recipient]");
  if (!button || !input) return;

  const friend = friends.find((savedFriend) => getFriendId(savedFriend) === button.dataset.friendRecipient);
  if (!friend) return;

  appendFriendToInviteField(input, friend);
}

function appendFriendToInviteField(input, friend) {
  const recipient = friend.handle ? `@${friend.handle}` : friend.email;
  const existing = parseInviteRecipients(input.value);
  if (!existing.some((label) => label.toLowerCase() === recipient.toLowerCase())) {
    input.value = [...existing, recipient].join(", ");
  }
  input.focus();
}

function updatePublicGridSetting() {
  shareSettings = {
    ...shareSettings,
    gridPublic: Boolean(publicGridToggle?.checked),
  };
  saveShareSettings();
  renderFriendControls();
  void syncPublicProfileSnapshot({ silent: true });
}

function updatePublicActivitySetting() {
  shareSettings = {
    ...shareSettings,
    activityPublic: Boolean(publicActivityToggle?.checked),
  };
  saveShareSettings();
  renderFriendControls();
  void syncPublicProfileSnapshot({ silent: true });
}

function updatePublicLeagueSetting() {
  shareSettings = {
    ...shareSettings,
    leaguePublic: Boolean(publicLeagueToggle?.checked),
  };
  saveShareSettings();
  renderFriendControls();
  void syncPublicProfileSnapshot({ silent: true });
}

function renderFriendControls() {
  if (publicGridToggle) {
    publicGridToggle.checked = Boolean(shareSettings.gridPublic);
  }
  if (publicActivityToggle) {
    publicActivityToggle.checked = Boolean(shareSettings.activityPublic);
  }
  if (publicLeagueToggle) {
    publicLeagueToggle.checked = Boolean(shareSettings.leaguePublic);
    publicLeagueToggle.disabled = !featureSettings.personalLeagues;
  }

  renderFriendInviteChips();

  if (!friendsList) return;

  if (!cloudUser) {
    friendsList.innerHTML = "";
    setFriendsStatus("Log in to add friends and share public stats.");
    return;
  }

  if (friends.length === 0) {
    friendsList.innerHTML = '<p class="friends-empty">No friends yet. Add someone by Shedulr name, @name, or email.</p>';
    setFriendsStatus(createSharingStatusLabel());
    return;
  }

  friendsList.innerHTML = friends.map(createFriendCard).join("");
  setFriendsStatus(createSharingStatusLabel());
}

function createSharingStatusLabel() {
  const gridLabel = shareSettings.gridPublic ? "Grid public" : "Grid private";
  const activityLabel = shareSettings.activityPublic ? "recent activity public" : "recent activity private";
  const leagueLabel = !featureSettings.personalLeagues
    ? "league off"
    : shareSettings.leaguePublic ? "league public" : "league private";
  return `${gridLabel}; ${activityLabel}; ${leagueLabel}.`;
}

function renderFriendInviteChips() {
  const lists = [taskFriendInviteList, editFriendInviteList].filter(Boolean);
  lists.forEach((list) => {
    if (friends.length === 0) {
      list.innerHTML = "";
      list.classList.add("hidden");
      return;
    }

    list.classList.remove("hidden");
    list.innerHTML = friends
      .map((friend) => `
        <button class="friend-invite-chip" data-friend-recipient="${escapeHTML(getFriendId(friend))}" type="button">
          ${escapeHTML(friend.displayName)}
        </button>
      `)
      .join("");
  });
}

function createFriendCard(friend) {
  const friendId = getFriendId(friend);
  const stats = normalizePublicStats(friend.publicStats);
  const activityIsPublic = friend.activityPublic !== false && stats.recentPublic;
  const updatedLabel = activityIsPublic
    ? stats.updatedAt ? `Updated ${formatShortDate(stats.updatedAt)}` : "No shared stats yet"
    : "Recent activity private";
  const gridLabel = friend.gridVisibility === "public" ? "Grid public" : "Grid private";

  return `
    <article class="friend-card">
      <button class="friend-main" data-friend-action="view" data-friend-id="${escapeHTML(friendId)}" type="button">
        <span class="profile-avatar" aria-hidden="true">${createFriendAvatarContent(friend)}</span>
        <span>
          <strong>${escapeHTML(friend.displayName)}</strong>
          <small>${escapeHTML(friend.handle ? `@${friend.handle}` : friend.email)} &middot; ${escapeHTML(gridLabel)}</small>
          <em>${escapeHTML(updatedLabel)}</em>
        </span>
      </button>
      <div class="friend-actions">
        <button class="secondary-button" data-friend-action="invite" data-friend-id="${escapeHTML(friendId)}" type="button">Invite</button>
        <button class="secondary-button" data-friend-action="view" data-friend-id="${escapeHTML(friendId)}" type="button">View</button>
        <button class="danger-button delete-x-button" data-friend-action="remove" data-friend-id="${escapeHTML(friendId)}" type="button" title="Remove" aria-label="Remove">x</button>
      </div>
    </article>
  `;
}

function openFriendDetail(friend) {
  if (!friendDetailPanel) return;

  friendDetailPanel.innerHTML = createFriendDetailMarkup(friend);
  friendDetailPanel.classList.remove("hidden");
  profileMenu?.classList.add("friend-detail-open");
}

function hideFriendDetail() {
  if (!friendDetailPanel) return;

  friendDetailPanel.classList.add("hidden");
  friendDetailPanel.innerHTML = "";
  profileMenu?.classList.remove("friend-detail-open");
}

function createFriendDetailMarkup(friend) {
  const friendId = getFriendId(friend);
  const stats = normalizePublicStats(friend.publicStats);
  const summary = stats.summary;
  const recent = Array.isArray(stats.recent) ? stats.recent : [];
  const activityIsPublic = friend.activityPublic !== false && stats.recentPublic;
  const grid = stats.grid;
  const gridIsPublic = friend.gridVisibility === "public" && Array.isArray(grid?.days);
  const leagueMarkup = createFriendLeagueMarkup(stats.league);
  const recentMarkup = !activityIsPublic
    ? '<p class="friends-empty">Recent activity is private.</p>'
    : recent.length
      ? `<ul>${recent.map((item) => `
        <li>
          <strong>${escapeHTML(item.title)}</strong>
          <span>${escapeHTML(item.type)} &middot; ${escapeHTML(formatDateHeading(item.date))} &middot; +${formatPoints(Number(item.points) || 0)} xp</span>
        </li>
      `).join("")}</ul>`
      : '<p class="friends-empty">No recent activity shared yet.</p>';

  return `
    <div class="friend-detail-header">
      <button class="secondary-button" data-friend-detail-action="close" type="button">Back</button>
      <button class="primary-button" data-friend-detail-action="invite" data-friend-id="${escapeHTML(friendId)}" type="button">Invite to task</button>
    </div>
    <div class="friend-hero">
      <span class="profile-avatar profile-avatar-large" aria-hidden="true">${createFriendAvatarContent(friend)}</span>
      <div>
        <p class="eyebrow">Friend Profile</p>
        <h2>${escapeHTML(friend.displayName)}</h2>
        <small>${escapeHTML(friend.handle ? `@${friend.handle}` : friend.email)}</small>
      </div>
    </div>
    ${leagueMarkup}
    <div class="friend-stat-grid">
      ${createFriendStat("7 day xp", formatPoints(summary.weekXp))}
      ${createFriendStat("Tasks", String(summary.weekTasks))}
      ${createFriendStat("Hours", formatMinutesAsHours(summary.weekMinutes))}
      ${createFriendStat("Streak", `${summary.streakDays} day${summary.streakDays === 1 ? "" : "s"}`)}
    </div>
    <section class="friend-activity-card">
      <h3>Recent Activity</h3>
      ${recentMarkup}
    </section>
    <section class="friend-activity-card">
      <h3>Schedule Grid</h3>
      ${gridIsPublic ? createFriendPublicGrid(grid) : '<p class="friends-empty">Their schedule grid is private.</p>'}
    </section>
  `;
}

function createFriendLeagueMarkup(league) {
  if (!league) {
    return `
      <section class="friend-league-card">
        <span class="friends-empty">Personal league is private.</span>
      </section>
    `;
  }

  return `
    <section class="friend-league-card" style="--rank-color: ${league.color}; --rank-progress: ${league.progress}%;">
      ${createRankLogo(league, { className: "friend-rank-logo", label: `${league.name} league` })}
      <div>
        <span>Personal league</span>
        <strong>${escapeHTML(league.name)}</strong>
        <small>${formatPoints(league.averageXp)} avg xp/day &middot; ${league.activeDays}/${PERSONAL_LEAGUE_LOOKBACK_DAYS} active days</small>
      </div>
    </section>
  `;
}

function createFriendAvatarContent(friend) {
  const avatarDataUrl = normalizeAvatarDataUrl(friend?.avatarDataUrl || friend?.publicStats?.avatarDataUrl);
  if (avatarDataUrl) {
    return `<img src="${escapeHTML(avatarDataUrl)}" alt="" />`;
  }

  return escapeHTML(getProfileInitials(friend?.displayName));
}

function createFriendStat(label, value) {
  return `
    <article>
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </article>
  `;
}

function createFriendPublicGrid(grid) {
  const days = Array.isArray(grid.days) ? grid.days : [];
  if (days.length === 0) return '<p class="friends-empty">No public grid items shared yet.</p>';

  return `
    <div class="friend-public-grid">
      ${days.map((day) => `
        <article>
          <strong>${escapeHTML(formatShortWeekday(day.date))}</strong>
          ${(Array.isArray(day.items) && day.items.length > 0)
            ? day.items.map((item) => `
                <span style="--type-color: ${escapeHTML(getTaskTypeStyle(item.type).color)}">
                  ${escapeHTML(formatTimeFromMinutes(timeToMinutes(item.time)))} ${escapeHTML(item.title)}
                </span>
              `).join("")
            : "<small>Free</small>"}
        </article>
      `).join("")}
    </div>
  `;
}

function createGroup(event) {
  event.preventDefault();
  const name = normalizeGroupName(groupNameInput?.value);
  const type = normalizeGroupType(groupTypeSelect?.value);

  if (!name) {
    groupNameInput?.focus();
    return;
  }

  if (!cloudUser) {
    setGroupsStatus("Log in first to create shared groups.");
    return;
  }

  const hostProfile = getActiveProfile();
  const group = {
    id: createId("group"),
    name,
    type,
    hostProfileId: activeProfileId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    members: [
      {
        id: getCurrentGroupMemberId(),
        profileId: activeProfileId,
        displayName: hostProfile?.name || "Host",
        avatarDataUrl: normalizeAvatarDataUrl(hostProfile?.avatarDataUrl),
        role: "host",
        status: "approved",
        source: "profile",
        addedAt: new Date().toISOString(),
      },
    ],
    schedules: [],
    pendingChanges: [],
  };

  groups = normalizeGroups([group, ...groups]);
  saveGroups();
  groupCreateForm?.reset();
  renderGroupControls();
  setGroupsStatus(`${name} created. Add people and start a shared schedule.`);
}

function handleGroupListSubmit(event) {
  const form = event.target.closest("form[data-group-form]");
  if (!form) return;

  event.preventDefault();
  const group = getGroupById(form.dataset.groupId);
  if (!group) return;

  if (form.dataset.groupForm === "member") {
    addGroupMemberFromForm(group, form);
    return;
  }

  if (form.dataset.groupForm === "schedule") {
    addGroupScheduleFromForm(group, form);
  }
}

function handleGroupListAction(event) {
  const button = event.target.closest("button[data-group-action]");
  if (!button) return;

  const group = getGroupById(button.dataset.groupId);
  if (!group) return;

  const action = button.dataset.groupAction;

  if (action === "delete-group") {
    if (!canManageGroup(group)) return;
    groups = groups.filter((savedGroup) => savedGroup.id !== group.id);
    saveGroups();
    renderGroupControls();
    setGroupsStatus(`${group.name} deleted.`);
    return;
  }

  if (action === "remove-member") {
    if (!canManageGroup(group)) return;
    const memberId = button.dataset.memberId;
    const member = group.members.find((savedMember) => savedMember.id === memberId);
    if (!member || isOriginalGroupHost(group, member)) return;
    updateGroup(group.id, (draft) => ({
      ...draft,
      members: draft.members.filter((savedMember) => savedMember.id !== memberId),
      updatedAt: new Date().toISOString(),
    }));
    setGroupsStatus(`${member.displayName} removed from ${group.name}.`);
    return;
  }

  if (action === "delete-schedule") {
    if (!canEditGroupSchedules(group)) return;
    const scheduleId = button.dataset.scheduleId;
    updateGroup(group.id, (draft) => ({
      ...draft,
      schedules: draft.schedules.filter((schedule) => schedule.id !== scheduleId),
      updatedAt: new Date().toISOString(),
    }));
    setGroupsStatus("Shared schedule removed.");
    return;
  }

  if (action === "approve-request") {
    if (!canManageGroup(group)) return;
    approveGroupRequest(group, button.dataset.requestId);
    return;
  }

  if (action === "reject-request") {
    if (!canManageGroup(group)) return;
    rejectGroupRequest(group, button.dataset.requestId);
  }
}

function handleGroupListChange(event) {
  const select = event.target.closest("select[data-group-role-select]");
  if (!select) return;

  const group = getGroupById(select.dataset.groupId);
  if (!group || !canManageGroup(group)) {
    renderGroupControls();
    return;
  }

  const memberId = select.dataset.memberId;
  const role = normalizeGroupRole(select.value);
  const member = group.members.find((savedMember) => savedMember.id === memberId);
  if (!member || isOriginalGroupHost(group, member)) {
    renderGroupControls();
    return;
  }

  updateGroup(group.id, (draft) => ({
    ...draft,
    members: draft.members.map((savedMember) =>
      savedMember.id === memberId
        ? { ...savedMember, role, status: "approved" }
        : savedMember,
    ),
    updatedAt: new Date().toISOString(),
  }));
  setGroupsStatus(`${member.displayName} is now a ${GROUP_ROLE_LABELS[role].toLowerCase()}.`);
}

function addGroupMemberFromForm(group, form) {
  if (!canManageGroup(group)) {
    setGroupsStatus("Only hosts can add people or change roles.");
    return;
  }

  const formData = new FormData(form);
  const lookup = String(formData.get("groupMember") ?? "").trim();
  const role = normalizeGroupRole(formData.get("groupMemberRole"));
  const member = createGroupMemberFromLookup(lookup, role);

  if (!member) {
    form.querySelector("[name='groupMember']")?.focus();
    return;
  }

  if (group.members.some((savedMember) => savedMember.id.toLowerCase() === member.id.toLowerCase())) {
    setGroupsStatus(`${member.displayName} is already in ${group.name}.`);
    return;
  }

  updateGroup(group.id, (draft) => ({
    ...draft,
    members: normalizeGroupMembers([member, ...draft.members], draft.hostProfileId),
    updatedAt: new Date().toISOString(),
  }));
  form.reset();
  setGroupsStatus(`${member.displayName} added as ${GROUP_ROLE_LABELS[member.role].toLowerCase()}.`);
}

function addGroupScheduleFromForm(group, form) {
  const formData = new FormData(form);
  const title = normalizeSharedScheduleTitle(formData.get("sharedScheduleTitle"));
  if (!title) {
    form.querySelector("[name='sharedScheduleTitle']")?.focus();
    return;
  }

  if (canEditGroupSchedules(group)) {
    updateGroup(group.id, (draft) => ({
      ...draft,
      schedules: [createSharedSchedule(title, "", "", draft), ...draft.schedules],
      updatedAt: new Date().toISOString(),
    }));
    form.reset();
    setGroupsStatus(`Shared schedule added to ${group.name}.`);
    return;
  }

  const member = getCurrentGroupMember(group);
  updateGroup(group.id, (draft) => ({
    ...draft,
    pendingChanges: [
      {
        id: createId("group-request"),
        type: "schedule-create",
        title,
        requestedBy: member?.id || getCurrentGroupMemberId(),
        requestedByName: member?.displayName || getActiveProfile()?.name || "Member",
        createdAt: new Date().toISOString(),
      },
      ...draft.pendingChanges,
    ],
    updatedAt: new Date().toISOString(),
  }));
  form.reset();
  setGroupsStatus("Request sent to hosts for approval.");
}

function approveGroupRequest(group, requestId) {
  const request = group.pendingChanges.find((savedRequest) => savedRequest.id === requestId);
  if (!request) return;

  updateGroup(group.id, (draft) => ({
    ...draft,
    schedules: request.type === "schedule-create"
      ? [createSharedSchedule(request.title, request.requestedBy, request.requestedByName), ...draft.schedules]
      : draft.schedules,
    pendingChanges: draft.pendingChanges.filter((savedRequest) => savedRequest.id !== requestId),
    updatedAt: new Date().toISOString(),
  }));
  setGroupsStatus("Request approved.");
}

function rejectGroupRequest(group, requestId) {
  updateGroup(group.id, (draft) => ({
    ...draft,
    pendingChanges: draft.pendingChanges.filter((request) => request.id !== requestId),
    updatedAt: new Date().toISOString(),
  }));
  setGroupsStatus("Request dismissed.");
}

function renderGroupControls() {
  if (!groupsList) return;

  if (!cloudUser) {
    groupsList.innerHTML = "";
    setGroupsStatus("Log in to create groups and shared schedules.");
    return;
  }

  groups = normalizeGroups(groups);
  if (groups.length === 0) {
    groupsList.innerHTML = '<p class="friends-empty">No groups yet. Create one for friends, family, work, or anything else.</p>';
    setGroupsStatus("Hosts control everything. Leaders can edit schedules. Members request changes.");
    return;
  }

  groupsList.innerHTML = groups.map(createGroupCard).join("");
  setGroupsStatus("Hosts can promote roles and approve member requests.");
}

function createGroupCard(group) {
  const role = getCurrentGroupRole(group);
  const isHost = canManageGroup(group);
  const canEdit = canEditGroupSchedules(group);
  const pending = group.pendingChanges.length;
  const memberLabel = `${group.members.length} member${group.members.length === 1 ? "" : "s"}`;
  const scheduleLabel = `${group.schedules.length} schedule${group.schedules.length === 1 ? "" : "s"}`;
  const hostActions = isHost
    ? `<button class="danger-button delete-x-button" data-group-action="delete-group" data-group-id="${escapeHTML(group.id)}" type="button" title="Delete group" aria-label="Delete group">x</button>`
    : "";
  const memberForm = isHost
    ? `
      <form class="group-inline-form group-member-form" data-group-form="member" data-group-id="${escapeHTML(group.id)}">
        <label>
          Add person
          <input name="groupMember" type="text" autocomplete="off" placeholder="Friend, @name, or email" />
        </label>
        <label>
          Role
          <select name="groupMemberRole">
            ${createGroupRoleOptions("member", { includeHost: true })}
          </select>
        </label>
        <button class="secondary-button" type="submit">Add</button>
      </form>
    `
    : '<p class="group-note">Only hosts can add people or promote roles.</p>';
  const scheduleButtonLabel = canEdit ? "Add" : "Request";
  const requestMarkup = isHost && pending > 0
    ? `
      <div class="group-section">
        <div class="group-section-heading">
          <strong>Approval requests</strong>
          <span>${pending}</span>
        </div>
        <div class="group-request-list">
          ${group.pendingChanges.map((request) => createGroupRequestRow(request, group)).join("")}
        </div>
      </div>
    `
    : "";

  return `
    <article class="group-card">
      <div class="group-card-header">
        <div>
          <strong>${escapeHTML(group.name)}</strong>
          <small>${escapeHTML(GROUP_TYPE_LABELS[group.type])} &middot; ${escapeHTML(memberLabel)} &middot; ${escapeHTML(scheduleLabel)}</small>
        </div>
        <div class="group-card-actions">
          <span class="group-role-pill">${escapeHTML(GROUP_ROLE_LABELS[role])}</span>
          ${hostActions}
        </div>
      </div>

      ${memberForm}

      <div class="group-section">
        <div class="group-section-heading">
          <strong>People</strong>
          <span>${escapeHTML(memberLabel)}</span>
        </div>
        <div class="group-member-list">
          ${group.members.map((member) => createGroupMemberRow(member, group, isHost)).join("")}
        </div>
      </div>

      <div class="group-section">
        <div class="group-section-heading">
          <strong>Shared schedules</strong>
          <span>${escapeHTML(scheduleLabel)}</span>
        </div>
        <form class="group-inline-form group-schedule-form" data-group-form="schedule" data-group-id="${escapeHTML(group.id)}">
          <label>
            Schedule name
            <input name="sharedScheduleTitle" type="text" maxlength="72" placeholder="Exam plan, House chores..." />
          </label>
          <button class="${canEdit ? "primary-button" : "secondary-button"}" type="submit">${scheduleButtonLabel}</button>
        </form>
        <div class="shared-schedule-list">
          ${group.schedules.length
            ? group.schedules.map((schedule) => createSharedScheduleRow(schedule, group, canEdit)).join("")
            : '<p class="friends-empty">No shared schedules yet.</p>'}
        </div>
      </div>

      ${requestMarkup}
    </article>
  `;
}

function createGroupMemberRow(member, group, isHost) {
  const roleSelect = isHost
    ? `
      <select class="group-role-select" data-group-role-select data-group-id="${escapeHTML(group.id)}" data-member-id="${escapeHTML(member.id)}" ${isOriginalGroupHost(group, member) ? "disabled" : ""}>
        ${createGroupRoleOptions(member.role, { includeHost: true })}
      </select>
    `
    : `<span class="group-role-pill muted">${escapeHTML(GROUP_ROLE_LABELS[member.role])}</span>`;
  const removeButton = isHost && !isOriginalGroupHost(group, member)
    ? `<button class="danger-button delete-x-button" data-group-action="remove-member" data-group-id="${escapeHTML(group.id)}" data-member-id="${escapeHTML(member.id)}" type="button" title="Remove member" aria-label="Remove member">x</button>`
    : "";

  return `
    <article class="group-member-row">
      <span class="profile-avatar" aria-hidden="true">${createGroupMemberAvatarContent(member)}</span>
      <div class="group-member-main">
        <strong>${escapeHTML(member.displayName)}</strong>
        <small>${escapeHTML(getGroupMemberSubLabel(member))}</small>
      </div>
      ${roleSelect}
      ${removeButton}
    </article>
  `;
}

function createSharedScheduleRow(schedule, group, canEdit) {
  const deleteButton = canEdit
    ? `<button class="danger-button delete-x-button" data-group-action="delete-schedule" data-group-id="${escapeHTML(group.id)}" data-schedule-id="${escapeHTML(schedule.id)}" type="button" title="Delete schedule" aria-label="Delete schedule">x</button>`
    : "";

  return `
    <article class="shared-schedule-row">
      <div>
        <strong>${escapeHTML(schedule.title)}</strong>
        <small>${escapeHTML(schedule.createdByName)} &middot; ${escapeHTML(formatShortDate(schedule.createdAt))}</small>
      </div>
      ${deleteButton}
    </article>
  `;
}

function createGroupRequestRow(request, group) {
  return `
    <article class="group-request-row">
      <div>
        <strong>${escapeHTML(request.title)}</strong>
        <small>${escapeHTML(request.requestedByName)} requested a shared schedule</small>
      </div>
      <button class="secondary-button" data-group-action="reject-request" data-group-id="${escapeHTML(group.id)}" data-request-id="${escapeHTML(request.id)}" type="button">Reject</button>
      <button class="primary-button" data-group-action="approve-request" data-group-id="${escapeHTML(group.id)}" data-request-id="${escapeHTML(request.id)}" type="button">Approve</button>
    </article>
  `;
}

function createGroupRoleOptions(selectedRole, options = {}) {
  return GROUP_ROLES
    .filter((role) => options.includeHost || role !== "host")
    .map((role) => `<option value="${role}" ${role === selectedRole ? "selected" : ""}>${GROUP_ROLE_LABELS[role]}</option>`)
    .join("");
}

function createGroupMemberAvatarContent(member) {
  const avatarDataUrl = normalizeAvatarDataUrl(member?.avatarDataUrl);
  if (avatarDataUrl) {
    return `<img src="${escapeHTML(avatarDataUrl)}" alt="" />`;
  }

  return escapeHTML(getProfileInitials(member?.displayName));
}

function createSharedSchedule(title, createdBy = "", createdByName = "", group = null) {
  const member = group ? getCurrentGroupMember(group) : getCurrentGroupMember();
  return {
    id: createId("shared-schedule"),
    title: normalizeSharedScheduleTitle(title) || "Shared schedule",
    createdBy: createdBy || member?.id || getCurrentGroupMemberId(),
    createdByName: normalizeShedulrDisplayName(createdByName || member?.displayName || getActiveProfile()?.name) || "Host",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function createGroupMemberFromLookup(value, role = "member") {
  const label = String(value ?? "").trim();
  if (!label) return null;

  const friend = findFriendByLookup(label);
  if (friend) {
    return {
      id: `friend:${getFriendId(friend)}`,
      userId: friend.userId,
      email: friend.email,
      displayName: friend.displayName,
      handle: friend.handle,
      avatarDataUrl: friend.avatarDataUrl,
      role: normalizeGroupRole(role),
      status: "approved",
      source: "friend",
      addedAt: new Date().toISOString(),
    };
  }

  const email = isLikelyEmail(label) ? normalizeEmail(label) : "";
  const displayName = normalizeShedulrDisplayName(email ? label.split("@")[0] : label.replace(/^@/, "")) || "Member";
  const handle = email ? "" : createShedulrHandle(displayName);

  return {
    id: email ? `email:${email}` : `name:${handle || crypto.randomUUID()}`,
    email,
    displayName,
    handle,
    avatarDataUrl: "",
    role: normalizeGroupRole(role),
    status: "approved",
    source: "manual",
    addedAt: new Date().toISOString(),
  };
}

function findFriendByLookup(value) {
  const label = String(value ?? "").trim().toLowerCase();
  const handle = createShedulrHandle(label.replace(/^@/, ""));
  const email = normalizeEmail(label);
  return friends.find((friend) =>
    normalizeEmail(friend.email) === email
    || createShedulrHandle(friend.handle) === handle
    || createShedulrHandle(friend.displayName) === handle
    || getFriendId(friend).toLowerCase() === label,
  ) ?? null;
}

function updateGroup(groupId, updater) {
  groups = normalizeGroups(groups.map((group) => (
    group.id === groupId ? updater(group) : group
  )));
  saveGroups();
  renderGroupControls();
}

function getGroupById(groupId) {
  return groups.find((group) => group.id === groupId) ?? null;
}

function getCurrentGroupMemberId() {
  return `profile:${activeProfileId}`;
}

function getCurrentGroupMember(group = null) {
  if (!group) {
    const activeProfile = getActiveProfile();
    return {
      id: getCurrentGroupMemberId(),
      profileId: activeProfileId,
      displayName: activeProfile?.name || "Me",
      avatarDataUrl: normalizeAvatarDataUrl(activeProfile?.avatarDataUrl),
      role: "host",
      status: "approved",
    };
  }

  return group.members.find((member) => member.id === getCurrentGroupMemberId()) ?? null;
}

function getCurrentGroupRole(group) {
  if (group.hostProfileId === activeProfileId) return "host";
  const member = getCurrentGroupMember(group);
  if (!member || member.status !== "approved") return "member";
  return normalizeGroupRole(member.role);
}

function canManageGroup(group) {
  return getCurrentGroupRole(group) === "host";
}

function canEditGroupSchedules(group) {
  return ["host", "leader"].includes(getCurrentGroupRole(group));
}

function isOriginalGroupHost(group, member) {
  return member?.id === `profile:${group.hostProfileId}`;
}

function getGroupMemberSubLabel(member) {
  if (member.email) return member.email;
  if (member.handle) return `@${member.handle}`;
  return member.source === "profile" ? "This profile" : "Group member";
}

function setGroupsStatus(message) {
  if (groupsStatus) groupsStatus.textContent = message;
}

function normalizeGroupName(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ").slice(0, 48);
}

function normalizeGroupType(value) {
  const type = String(value ?? "").toLowerCase();
  return GROUP_TYPES.includes(type) ? type : "other";
}

function normalizeGroupRole(value) {
  const role = String(value ?? "").toLowerCase();
  return GROUP_ROLES.includes(role) ? role : "member";
}

function normalizeSharedScheduleTitle(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ").slice(0, 72);
}

function normalizeGroups(value, ownerProfileId = activeProfileId) {
  const seen = new Set();
  return (Array.isArray(value) ? value : [])
    .map((group) => {
      const id = String(group?.id || createId("group"));
      if (seen.has(id)) return null;
      seen.add(id);

      const hostProfileId = String(group?.hostProfileId || group?.host_profile_id || ownerProfileId);
      return {
        id,
        name: normalizeGroupName(group?.name) || "Shared group",
        type: normalizeGroupType(group?.type),
        hostProfileId,
        createdAt: isValidDateString(group?.createdAt) ? group.createdAt : new Date().toISOString(),
        updatedAt: isValidDateString(group?.updatedAt) ? group.updatedAt : new Date().toISOString(),
        members: normalizeGroupMembers(group?.members, hostProfileId),
        schedules: normalizeSharedSchedules(group?.schedules),
        pendingChanges: normalizeGroupPendingChanges(group?.pendingChanges),
      };
    })
    .filter(Boolean)
    .slice(0, 30);
}

function normalizeGroupMembers(value, hostProfileId = activeProfileId) {
  const seen = new Set();
  const members = (Array.isArray(value) ? value : [])
    .map((member) => {
      const profileId = String(member?.profileId || member?.profile_id || "");
      const email = normalizeEmail(member?.email);
      const handle = createShedulrHandle(member?.handle || member?.displayName || member?.display_name);
      const id = String(member?.id || (profileId ? `profile:${profileId}` : email ? `email:${email}` : handle ? `name:${handle}` : "")).trim();
      if (!id || seen.has(id.toLowerCase())) return null;
      seen.add(id.toLowerCase());

      return {
        id,
        profileId,
        userId: String(member?.userId || member?.user_id || ""),
        email,
        displayName: normalizeShedulrDisplayName(member?.displayName || member?.display_name) || email || "Member",
        handle,
        avatarDataUrl: normalizeAvatarDataUrl(member?.avatarDataUrl || member?.avatar_data_url),
        role: id === `profile:${hostProfileId}` ? "host" : normalizeGroupRole(member?.role),
        status: member?.status === "pending" ? "pending" : "approved",
        source: String(member?.source || (profileId ? "profile" : "manual")),
        addedAt: isValidDateString(member?.addedAt) ? member.addedAt : new Date().toISOString(),
      };
    })
    .filter(Boolean)
    .slice(0, 40);

  const hostMemberId = `profile:${hostProfileId}`;
  const hostProfile = profiles.find((profile) => profile.id === hostProfileId);
  const hostMember = members.find((member) => member.id === hostMemberId);
  if (hostMember) {
    hostMember.role = "host";
    hostMember.status = "approved";
  } else {
    members.unshift({
      id: hostMemberId,
      profileId: hostProfileId,
      userId: "",
      email: "",
      displayName: hostProfile?.name || "Group host",
      handle: "",
      avatarDataUrl: normalizeAvatarDataUrl(hostProfile?.avatarDataUrl),
      role: "host",
      status: "approved",
      source: "profile",
      addedAt: new Date().toISOString(),
    });
  }

  return members;
}

function normalizeSharedSchedules(value) {
  return (Array.isArray(value) ? value : [])
    .map((schedule) => ({
      id: String(schedule?.id || createId("shared-schedule")),
      title: normalizeSharedScheduleTitle(schedule?.title) || "Shared schedule",
      createdBy: String(schedule?.createdBy || schedule?.created_by || ""),
      createdByName: normalizeShedulrDisplayName(schedule?.createdByName || schedule?.created_by_name) || "Host",
      createdAt: isValidDateString(schedule?.createdAt) ? schedule.createdAt : new Date().toISOString(),
      updatedAt: isValidDateString(schedule?.updatedAt) ? schedule.updatedAt : new Date().toISOString(),
    }))
    .slice(0, 80);
}

function normalizeGroupPendingChanges(value) {
  return (Array.isArray(value) ? value : [])
    .map((request) => ({
      id: String(request?.id || createId("group-request")),
      type: request?.type === "schedule-create" ? "schedule-create" : "schedule-create",
      title: normalizeSharedScheduleTitle(request?.title) || "Shared schedule",
      requestedBy: String(request?.requestedBy || request?.requested_by || ""),
      requestedByName: normalizeShedulrDisplayName(request?.requestedByName || request?.requested_by_name) || "Member",
      createdAt: isValidDateString(request?.createdAt) ? request.createdAt : new Date().toISOString(),
    }))
    .slice(0, 80);
}

function setFriendsStatus(message) {
  if (friendsStatus) friendsStatus.textContent = message;
}

async function lookupFriendDirectoryProfile(query) {
  if (!supabaseClient || !cloudUser) return null;

  const label = String(query ?? "").trim();
  if (!label) return null;

  if (isLikelyEmail(label)) {
    const { data, error } = await supabaseClient
      .from(USER_DIRECTORY_TABLE)
      .select("user_id, email, display_name, handle, public_stats, grid_visibility, updated_at")
      .eq("email", normalizeEmail(label))
      .maybeSingle();

    if (error) throw error;
    return data ? normalizeFriendFromDirectory(data) : null;
  }

  const displayName = normalizeShedulrDisplayName(label).replace(/^@/, "");
  const handle = createShedulrHandle(displayName);
  if (!displayName || !handle) return null;

  const byHandle = await supabaseClient
    .from(USER_DIRECTORY_TABLE)
    .select("user_id, email, display_name, handle, public_stats, grid_visibility, updated_at")
    .eq("handle", handle)
    .limit(2);

  if (byHandle.error) throw byHandle.error;
  if (byHandle.data?.length === 1) return normalizeFriendFromDirectory(byHandle.data[0]);

  const byName = await supabaseClient
    .from(USER_DIRECTORY_TABLE)
    .select("user_id, email, display_name, handle, public_stats, grid_visibility, updated_at")
    .ilike("display_name", displayName)
    .limit(3);

  if (byName.error) throw byName.error;
  if ((byName.data ?? []).length === 1) return normalizeFriendFromDirectory(byName.data[0]);
  if ((byName.data ?? []).length > 1) return { ambiguous: true };
  return null;
}

function normalizeFriendFromDirectory(data) {
  const displayName = normalizeShedulrDisplayName(data?.display_name) || "Friend";
  const publicStats = normalizePublicStats(data?.public_stats);
  return {
    userId: String(data?.user_id ?? ""),
    email: normalizeEmail(data?.email),
    displayName,
    handle: createShedulrHandle(data?.handle || displayName),
    avatarDataUrl: publicStats.avatarDataUrl,
    activityPublic: publicStats.recentPublic,
    publicStats,
    gridVisibility: data?.grid_visibility === "public" ? "public" : "private",
    updatedAt: String(data?.updated_at ?? ""),
  };
}

function getFriendId(friend) {
  return String(friend?.userId || friend?.email || friend?.handle || "");
}

function normalizeFriends(value) {
  const seen = new Set();
  return (Array.isArray(value) ? value : [])
    .map((friend) => {
      const displayName = normalizeShedulrDisplayName(friend?.displayName || friend?.display_name) || "Friend";
      const publicStats = normalizePublicStats(friend?.publicStats || friend?.public_stats);
      const normalized = {
        userId: String(friend?.userId || friend?.user_id || ""),
        email: normalizeEmail(friend?.email),
        displayName,
        handle: createShedulrHandle(friend?.handle || displayName),
        avatarDataUrl: normalizeAvatarDataUrl(friend?.avatarDataUrl || friend?.avatar_data_url || publicStats.avatarDataUrl),
        activityPublic: friend?.activityPublic !== false && friend?.activity_public !== false && publicStats.recentPublic,
        publicStats,
        gridVisibility: friend?.gridVisibility === "public" || friend?.grid_visibility === "public" ? "public" : "private",
        addedAt: String(friend?.addedAt || friend?.added_at || new Date().toISOString()),
        updatedAt: String(friend?.updatedAt || friend?.updated_at || ""),
      };
      const id = getFriendId(normalized);
      if (!id || seen.has(id)) return null;
      seen.add(id);
      return normalized;
    })
    .filter(Boolean);
}

function normalizePublicStats(value) {
  const stats = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const summary = stats.summary && typeof stats.summary === "object" ? stats.summary : {};
  return {
    version: Number(stats.version) || 1,
    updatedAt: String(stats.updatedAt || stats.updated_at || ""),
    avatarDataUrl: normalizeAvatarDataUrl(stats.avatarDataUrl || stats.avatar_data_url),
    recentPublic: stats.recentPublic !== false && stats.recent_public !== false,
    summary: {
      todayXp: Math.max(Math.round(Number(summary.todayXp) || 0), 0),
      weekXp: Math.max(Math.round(Number(summary.weekXp) || 0), 0),
      weekTasks: Math.max(Math.round(Number(summary.weekTasks) || 0), 0),
      weekMinutes: Math.max(Math.round(Number(summary.weekMinutes) || 0), 0),
      streakDays: Math.max(Math.round(Number(summary.streakDays) || 0), 0),
      topType: normalizeTaskTypeName(summary.topType) || "None yet",
    },
    recent: (Array.isArray(stats.recent) ? stats.recent : []).slice(0, 8).map((item) => ({
      title: String(item?.title ?? "Task").slice(0, 80),
      type: normalizeTaskTypeName(item?.type) || "Personal",
      date: isISODateString(item?.date) ? item.date : todayISO,
      points: Math.max(Math.round(Number(item?.points) || 0), 0),
      minutes: Math.max(Math.round(Number(item?.minutes) || 0), 0),
    })),
    league: normalizePublicLeague(stats.league),
    grid: normalizePublicGrid(stats.grid),
  };
}

function normalizePublicLeague(value) {
  if (!value || typeof value !== "object" || Array.isArray(value) || value.public === false) return null;

  const matchedLeague = PERSONAL_LEAGUES.find((league) => league.id === value.id)
    ?? PERSONAL_LEAGUES.find((league) => league.name.toLowerCase() === String(value.name ?? "").toLowerCase())
    ?? PERSONAL_LEAGUES[0];

  return {
    public: true,
    id: matchedLeague.id,
    name: matchedLeague.name,
    badge: matchedLeague.badge,
    color: matchedLeague.color,
    light: matchedLeague.light,
    dark: matchedLeague.dark,
    averageXp: Math.max(Math.round(Number(value.averageXp) || 0), 0),
    activeDays: clamp(Math.round(Number(value.activeDays) || 0), 0, PERSONAL_LEAGUE_LOOKBACK_DAYS),
    progress: clamp(Math.round(Number(value.progress) || 0), 0, 100),
    nextName: String(value.nextName || "").slice(0, 32),
  };
}

function normalizePublicGrid(grid) {
  if (!grid || typeof grid !== "object" || !Array.isArray(grid.days)) {
    return { days: [] };
  }

  return {
    start: isISODateString(grid.start) ? grid.start : "",
    end: isISODateString(grid.end) ? grid.end : "",
    days: grid.days.slice(0, 7).map((day) => ({
      date: isISODateString(day?.date) ? day.date : todayISO,
      items: (Array.isArray(day?.items) ? day.items : []).slice(0, 10).map((item) => ({
        title: String(item?.title ?? "Task").slice(0, 80),
        type: normalizeTaskTypeName(item?.type) || "Personal",
        time: isTimeInputValue(item?.time) ? item.time : "09:00",
        endTime: normalizeOptionalEndTime(item?.endTime),
        duration: normalizeTaskDuration(item?.duration),
        done: Boolean(item?.done),
      })),
    })),
  };
}

function setShedulrNameStatus(message) {
  if (shedulrNameStatus) shedulrNameStatus.textContent = message;
}

function getShedulrNameStorageKey() {
  return `daily-task-scheduler.shedulr-name.${cloudUser?.id ?? "local"}`;
}

function normalizeDirectoryProfile(data) {
  const displayName = normalizeShedulrDisplayName(data?.display_name);
  return {
    userId: String(data?.user_id ?? ""),
    displayName,
    handle: createShedulrHandle(data?.handle || displayName),
    email: normalizeEmail(data?.email),
    publicStats: normalizePublicStats(data?.public_stats),
    gridVisibility: data?.grid_visibility === "public" ? "public" : "private",
  };
}

function normalizeShedulrDisplayName(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ").slice(0, 32);
}

function createShedulrHandle(value) {
  return normalizeShedulrDisplayName(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
}

function getDirectoryErrorMessage(error, action) {
  const message = String(error?.message ?? "");
  const lowerMessage = message.toLowerCase();

  if (
    lowerMessage.includes("relation")
    || lowerMessage.includes("does not exist")
    || lowerMessage.includes("column")
    || lowerMessage.includes("schema cache")
    || lowerMessage.includes("could not find the table")
  ) {
    return "Shedulr name lookup is missing. Run the updated supabase-setup.sql in Supabase SQL Editor.";
  }

  if (lowerMessage.includes("duplicate") || lowerMessage.includes("unique")) {
    return "That Shedulr name is already taken. Try adding a number or another word.";
  }

  if (lowerMessage.includes("row-level security") || lowerMessage.includes("permission")) {
    return "Supabase security rules are blocking names. Run the updated supabase-setup.sql again.";
  }

  return `Could not ${action}: ${message || "check your Supabase setup and internet connection."}`;
}

async function sendTaskInvites(taskId, rawRecipients) {
  const recipientLabels = parseInviteRecipients(rawRecipients);
  if (recipientLabels.length === 0) return;

  const task = tasks.find((savedTask) => savedTask.id === taskId);
  if (!task) return;

  if (!supabaseClient || !cloudUser) {
    showAppToast("Sign in to invite", "The task was saved, but invites need Cloud Login first.");
    setCloudStatus("Log in first, then edit the task to send invites.");
    return;
  }

  let resolvedRecipients;
  try {
    resolvedRecipients = await resolveInviteRecipients(recipientLabels);
  } catch (error) {
    const message = getDirectoryErrorMessage(error, "look up that Shedulr name");
    setCloudStatus(message);
    showAppToast("Invite not sent", message);
    console.error(error);
    return;
  }

  if (resolvedRecipients.missing.length > 0) {
    showAppToast("Name not found", `${resolvedRecipients.missing.join(", ")} could not be found. Try their email or ask them to save their Shedulr name.`);
  }

  if (resolvedRecipients.ambiguous.length > 0) {
    showAppToast("Name needs detail", `${resolvedRecipients.ambiguous.join(", ")} matches more than one person. Use their @name or email.`);
  }

  const emails = resolvedRecipients.emails;
  if (emails.length === 0) return;

  const selfEmail = normalizeEmail(cloudUser.email);
  const sentEmails = normalizeInviteEmails(task.sentInviteEmails);
  const inviteEmails = emails.filter((email) => email !== selfEmail && !sentEmails.includes(email));

  if (inviteEmails.length === 0) {
    if (emails.includes(selfEmail)) {
      showAppToast("Invite skipped", "You are already using this account.");
    }
    return;
  }

  const taskPayload = createTaskInvitePayload(task);
  const inviterEmail = selfEmail || String(cloudUser.email ?? "").trim();
  const inviterName = cloudDirectoryProfile?.displayName || getActiveProfile()?.name || inviterEmail;
  const rows = inviteEmails.map((email) => ({
    inviter_id: cloudUser.id,
    inviter_email: inviterEmail,
    inviter_name: inviterName,
    invitee_email: email,
    task_payload: taskPayload,
    status: "pending",
  }));

  const { error } = await supabaseClient
    .from(TASK_INVITES_TABLE)
    .insert(rows);

  if (error) {
    const message = getInviteErrorMessage(error, "send invites");
    setCloudStatus(message);
    showAppToast("Invite not sent", message);
    console.error(error);
    return;
  }

  tasks = tasks.map((savedTask) => {
    if (savedTask.id !== taskId) return savedTask;

    return {
      ...savedTask,
      inviteEmails: normalizeInviteEmails([...normalizeInviteEmails(savedTask.inviteEmails), ...emails]),
      inviteLabels: recipientLabels,
      sentInviteEmails: normalizeInviteEmails([...sentEmails, ...inviteEmails]),
    };
  });

  saveTasks();
  render();
  showAppToast("Invite sent", inviteEmails.length === 1 ? `Sent to ${inviteEmails[0]}.` : `Sent ${inviteEmails.length} invites.`);
  setCloudStatus("Invite sent. They can accept it after logging in with that email.");
}

async function resolveInviteRecipients(rawRecipients) {
  const labels = parseInviteRecipients(rawRecipients);
  const directEmails = [];
  const nameLabels = [];

  labels.forEach((label) => {
    if (isLikelyEmail(label)) {
      directEmails.push(label);
    } else {
      nameLabels.push(label);
    }
  });

  const resolvedEmails = [];
  const missing = [];
  const ambiguous = [];

  for (const name of nameLabels) {
    const match = await lookupShedulrDirectoryRecipient(name);
    if (match?.ambiguous) {
      ambiguous.push(name);
    } else if (match?.email) {
      resolvedEmails.push(match.email);
    } else {
      missing.push(name);
    }
  }

  return {
    emails: normalizeInviteEmails([...directEmails, ...resolvedEmails]),
    missing,
    ambiguous,
  };
}

async function lookupShedulrDirectoryRecipient(name) {
  if (!supabaseClient || !cloudUser) return null;

  const displayName = normalizeShedulrDisplayName(name).replace(/^@/, "");
  const handle = createShedulrHandle(displayName);
  if (!displayName || !handle) return null;

  const byHandle = await supabaseClient
    .from(USER_DIRECTORY_TABLE)
    .select("email, display_name, handle")
    .eq("handle", handle)
    .limit(2);

  if (byHandle.error) throw byHandle.error;
  if (byHandle.data?.length === 1) {
    return normalizeDirectoryProfile(byHandle.data[0]);
  }

  const byName = await supabaseClient
    .from(USER_DIRECTORY_TABLE)
    .select("email, display_name, handle")
    .ilike("display_name", displayName)
    .limit(3);

  if (byName.error) throw byName.error;
  if ((byName.data ?? []).length === 1) {
    return normalizeDirectoryProfile(byName.data[0]);
  }

  if ((byName.data ?? []).length > 1) {
    return { ambiguous: true };
  }

  return null;
}

async function loadTaskInvites() {
  if (!supabaseClient || !cloudUser) {
    taskInvites = [];
    renderTaskInvites();
    return;
  }

  if (isLoadingTaskInvites) return;

  isLoadingTaskInvites = true;
  setCloudButtonsBusy(true);
  renderTaskInvites();

  const inviteeEmail = normalizeEmail(cloudUser.email);
  const { data, error } = await supabaseClient
    .from(TASK_INVITES_TABLE)
    .select("id, inviter_email, inviter_name, invitee_email, task_payload, status, created_at")
    .eq("invitee_email", inviteeEmail)
    .eq("status", "pending")
    .order("created_at", { ascending: false });

  isLoadingTaskInvites = false;
  setCloudButtonsBusy(false);

  if (error) {
    const message = getInviteErrorMessage(error, "load invites");
    setCloudStatus(message);
    taskInvites = [];
    renderTaskInvites();
    console.error(error);
    return;
  }

  taskInvites = Array.isArray(data) ? data : [];
  renderTaskInvites();
}

function handleInviteAction(event) {
  const button = event.target.closest("[data-invite-action][data-invite-id]");
  if (!button) return;

  const inviteId = button.dataset.inviteId;
  if (button.dataset.inviteAction === "accept") {
    void acceptTaskInvite(inviteId);
  }

  if (button.dataset.inviteAction === "decline") {
    void declineTaskInvite(inviteId);
  }
}

async function acceptTaskInvite(inviteId) {
  if (!supabaseClient || !cloudUser) return;

  const invite = taskInvites.find((savedInvite) => String(savedInvite.id) === String(inviteId));
  if (!invite) return;

  const alreadyAccepted = tasks.some((task) => String(task.sharedInviteId ?? "") === String(invite.id));
  let acceptedTask = null;

  if (!alreadyAccepted) {
    acceptedTask = createTaskFromInvite(invite);
    tasks.push(acceptedTask);
    saveCustomTaskType(acceptedTask.type);
    saveTasks();
  }

  const { error } = await supabaseClient
    .from(TASK_INVITES_TABLE)
    .update({
      status: "accepted",
      responded_at: new Date().toISOString(),
      accepted_by: cloudUser.id,
    })
    .eq("id", invite.id);

  if (error) {
    const message = getInviteErrorMessage(error, "accept invite");
    setCloudStatus(message);
    showAppToast("Invite not updated", message);
    console.error(error);
    return;
  }

  taskInvites = taskInvites.filter((savedInvite) => String(savedInvite.id) !== String(invite.id));
  renderTaskTypeOptions();
  renderTaskInvites();
  render();
  showAppToast("Invite accepted", acceptedTask ? `${acceptedTask.title} was added to your schedule.` : "That task is already in your schedule.");
}

async function declineTaskInvite(inviteId) {
  if (!supabaseClient || !cloudUser) return;

  const invite = taskInvites.find((savedInvite) => String(savedInvite.id) === String(inviteId));
  if (!invite) return;

  const { error } = await supabaseClient
    .from(TASK_INVITES_TABLE)
    .update({
      status: "declined",
      responded_at: new Date().toISOString(),
    })
    .eq("id", invite.id);

  if (error) {
    const message = getInviteErrorMessage(error, "decline invite");
    setCloudStatus(message);
    showAppToast("Invite not updated", message);
    console.error(error);
    return;
  }

  taskInvites = taskInvites.filter((savedInvite) => String(savedInvite.id) !== String(invite.id));
  renderTaskInvites();
  showAppToast("Invite declined", "The request was removed from your inbox.");
}

function renderTaskInvites() {
  if (!inviteList) return;
  renderNotifications(reminderOccurrences);

  if (!cloudUser) {
    inviteList.innerHTML = "";
    return;
  }

  if (isLoadingTaskInvites) {
    inviteList.innerHTML = '<p class="invite-empty">Checking for invites...</p>';
    return;
  }

  if (taskInvites.length === 0) {
    inviteList.innerHTML = '<p class="invite-empty">No pending task invites.</p>';
    return;
  }

  inviteList.innerHTML = taskInvites.map(createInviteCard).join("");
}

function createInviteCard(invite) {
  const preview = createInvitePreview(invite);
  const sentLabel = invite.created_at ? formatDateHeading(toDateInputValue(new Date(invite.created_at))) : "Recently";
  const inviteId = String(invite.id ?? "");

  return `
    <article class="invite-card">
      <div class="invite-card-main">
        <strong>${escapeHTML(preview.title)}</strong>
        <small>${escapeHTML(preview.kindLabel)} from ${escapeHTML(preview.inviterName || preview.inviterEmail || "someone")}</small>
        <span>${escapeHTML(preview.dateLabel)} &middot; ${escapeHTML(preview.timeLabel)} &middot; ${escapeHTML(preview.type)}</span>
        <em>Sent ${escapeHTML(sentLabel)}</em>
      </div>
      <div class="invite-actions">
        <button class="secondary-button" data-invite-action="decline" data-invite-id="${escapeHTML(inviteId)}" type="button">Decline</button>
        <button class="primary-button" data-invite-action="accept" data-invite-id="${escapeHTML(inviteId)}" type="button">Accept</button>
      </div>
    </article>
  `;
}

function createInvitePreview(invite) {
  const payload = getInvitePayload(invite);
  const itemKind = normalizeItemKind(payload.itemKind);
  const date = isISODateString(payload.date) ? payload.date : todayISO;
  const time = isTimeInputValue(payload.time) ? payload.time : "09:00";
  const title = normalizeInviteTitle(payload.title);
  const type = normalizeTaskTypeName(payload.type) || "Personal";

  return {
    title,
    type,
    inviterName: normalizeShedulrDisplayName(invite.inviter_name),
    inviterEmail: normalizeEmail(invite.inviter_email),
    kindLabel: itemKind === "reminder" ? "Reminder" : "Task",
    dateLabel: formatDateHeading(date),
    timeLabel: formatTimeFromMinutes(timeToMinutes(time)),
  };
}

function createTaskInvitePayload(task) {
  const itemKind = getItemKind(task);
  const timerMode = getTaskTimerMode(task);
  const isAllDay = timerMode === "all-day";
  return {
    sourceTaskId: String(task.id ?? ""),
    itemKind,
    title: normalizeInviteTitle(task.title),
    date: isISODateString(task.date) ? task.date : todayISO,
    time: isAllDay ? "00:00" : isTimeInputValue(task.time) ? task.time : "09:00",
    endTime: itemKind === "reminder" ? normalizeOptionalEndTime(task.endTime) : "",
    duration: itemKind === "reminder" || timerMode === "stopwatch" || isAllDay ? 0 : normalizeTaskDuration(task.duration),
    timerMode,
    type: normalizeTaskTypeName(task.type) || "Personal",
    priority: normalizePriority(task.priority),
    notes: String(task.notes ?? "").trim().slice(0, 700),
    meetingLink: isMeetingType(task.type) ? normalizeMeetingLink(task.meetingLink) : "",
    repeats: Boolean(task.repeats),
    repeatMode: getTaskRepeatModeValue(task),
    repeatIntervalDays: normalizeRepeatIntervalDays(task.repeatIntervalDays),
    repeatEndDate: normalizeOptionalRepeatEndDate(task.repeatEndDate, task.date),
    repeatDays: normalizeRepeatDays(task.repeatDays),
    repeatSpecificDates: normalizeSpecificRepeatDates(task.repeatSpecificDates, task.date),
  };
}

function createTaskFromInvite(invite) {
  const payload = getInvitePayload(invite);
  const itemKind = normalizeItemKind(payload.itemKind);
  const date = isISODateString(payload.date) ? payload.date : todayISO;
  const repeatMode = getRepeatModeForItemKind(itemKind, payload.repeatMode, "weekly");
  const timerMode = itemKind === "reminder" ? "countdown" : normalizeTimerMode(payload.timerMode);
  const isAllDay = timerMode === "all-day";
  const time = isAllDay ? "00:00" : isTimeInputValue(payload.time) ? payload.time : "09:00";
  const repeatDays = normalizeRepeatDays(payload.repeatDays);
  const repeatSpecificDates = normalizeSpecificRepeatDates(payload.repeatSpecificDates, date);
  const task = {
    id: crypto.randomUUID(),
    itemKind,
    title: normalizeInviteTitle(payload.title),
    date,
    time,
    endTime: itemKind === "reminder" ? normalizeOptionalEndTime(payload.endTime) : "",
    duration: itemKind === "reminder" || timerMode === "stopwatch" || isAllDay ? 0 : normalizeTaskDuration(payload.duration),
    timerMode,
    type: normalizeTaskTypeName(payload.type) || "Personal",
    priority: normalizePriority(payload.priority),
    notes: String(payload.notes ?? "").trim().slice(0, 700),
    meetingLink: isMeetingType(payload.type) ? normalizeMeetingLink(payload.meetingLink) : "",
    repeats: Boolean(payload.repeats),
    repeatMode,
    repeatIntervalDays: normalizeRepeatIntervalDays(payload.repeatIntervalDays),
    repeatEndDate: normalizeOptionalRepeatEndDate(payload.repeatEndDate, date),
    repeatDays: Boolean(payload.repeats) ? repeatDays : [],
    repeatSpecificDates: Boolean(payload.repeats) ? repeatSpecificDates : [],
    completedDates: [],
    skippedDates: [],
    earnedPointsByDate: {},
    actualMinutesByDate: {},
    inviteEmails: [],
    inviteLabels: [],
    sentInviteEmails: [],
    sharedInviteId: String(invite.id),
    sharedByEmail: normalizeEmail(invite.inviter_email),
    sharedByName: normalizeShedulrDisplayName(invite.inviter_name),
    done: false,
    skipped: false,
    createdAt: new Date().toISOString(),
  };

  if (task.repeats && task.repeatMode === "weekly" && task.repeatDays.length === 0) {
    task.repeatDays = [weekdayForISODate(task.date)];
  }

  if (task.repeats && task.repeatMode === "specific" && task.repeatSpecificDates.length === 0) {
    task.repeatSpecificDates = [task.date];
  }

  return normalizeTasks([task])[0];
}

function getInvitePayload(invite) {
  return invite?.task_payload && typeof invite.task_payload === "object" && !Array.isArray(invite.task_payload)
    ? invite.task_payload
    : {};
}

function getInviteErrorMessage(error, action) {
  const message = String(error?.message ?? "");
  if (message.toLowerCase().includes("relation") || message.toLowerCase().includes("does not exist")) {
    return "Invite table is missing. Run the updated supabase-setup.sql in Supabase SQL Editor first.";
  }

  if (message.toLowerCase().includes("row-level security") || message.toLowerCase().includes("permission")) {
    return "Supabase invite security rules are blocking this. Run the updated supabase-setup.sql again.";
  }

  return getCloudErrorMessage(error, action);
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
    homeWidgets: readProfileJSON(HOME_WIDGETS_STORAGE_KEY, profileId, []),
    homeWidgetLayout: readProfileJSON(HOME_WIDGET_LAYOUT_STORAGE_KEY, profileId, {}),
    friends: readProfileJSON(FRIENDS_STORAGE_KEY, profileId, []),
    shareSettings: readProfileJSON(SHARE_SETTINGS_STORAGE_KEY, profileId, DEFAULT_SHARE_SETTINGS),
    notes: readProfileJSON(NOTES_STORAGE_KEY, profileId, []),
    groups: readProfileJSON(GROUPS_STORAGE_KEY, profileId, []),
    activeTimer: readProfileJSON(TIMER_STORAGE_KEY, profileId, null),
    weeklyReportSeenKey: localStorage.getItem(getProfileStorageKey(WEEKLY_REPORT_SEEN_STORAGE_KEY, profileId)) ?? "",
    dismissedOverlapSignature: localStorage.getItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY, profileId)) ?? "",
    missedTasksCollapsed: localStorage.getItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY, profileId)) === "true",
  };
}

function createPublicProfileSnapshot() {
  const completedHistory = buildCompletedHistory();
  const occurrences = buildScheduleOccurrences();
  const weekDates = new Set(getCurrentWeekDates());
  const weekCompleted = completedHistory.filter((task) => weekDates.has(task.occurrenceDate));
  const todayCompleted = completedHistory.filter((task) => task.occurrenceDate === todayISO);
  const weekMinutes = weekCompleted.reduce((total, task) => total + calculateCompletedMinutes(task), 0);
  const weekXp = weekCompleted.reduce((total, task) => total + calculatePoints(task), 0);
  const todayXp = todayCompleted.reduce((total, task) => total + calculatePoints(task), 0);
  const topType = getTopCompletedType(weekCompleted);

  return {
    version: 3,
    updatedAt: new Date().toISOString(),
    avatarDataUrl: normalizeAvatarDataUrl(getActiveProfile()?.avatarDataUrl),
    recentPublic: Boolean(shareSettings.activityPublic),
    summary: {
      todayXp,
      weekXp,
      weekTasks: weekCompleted.length,
      weekMinutes,
      streakDays: getTopStreakDays(completedHistory),
      topType: topType.type,
    },
    league: shareSettings.leaguePublic && featureSettings.personalLeagues
      ? createPublicLeagueSnapshot(completedHistory)
      : null,
    recent: shareSettings.activityPublic
      ? completedHistory.slice(0, 8).map((task) => ({
          title: task.title,
          type: task.type,
          date: task.occurrenceDate,
          points: calculatePoints(task),
          minutes: calculateCompletedMinutes(task),
        }))
      : [],
    grid: shareSettings.gridPublic ? createPublicGridSnapshot(occurrences) : { days: [] },
  };
}

function createPublicLeagueSnapshot(completedHistory) {
  const leagueState = buildPersonalLeagueState(completedHistory);
  return {
    public: true,
    id: leagueState.current.id,
    name: leagueState.current.name,
    badge: leagueState.current.badge,
    color: leagueState.current.color,
    light: leagueState.current.light,
    dark: leagueState.current.dark,
    averageXp: Math.round(leagueState.averageXp),
    activeDays: leagueState.activeDays,
    progress: leagueState.nextProgress,
    nextName: leagueState.next?.name ?? "",
  };
}

function createPublicGridSnapshot(occurrences) {
  const weekDates = getCurrentWeekDates();
  const weekDateSet = new Set(weekDates);
  const tasksByDate = groupTasksByDate(
    occurrences.filter((task) => weekDateSet.has(task.occurrenceDate) && !task.skipped),
  );

  return {
    start: weekDates[0],
    end: weekDates[6],
    days: weekDates.map((date) => ({
      date,
      items: (tasksByDate.get(date) ?? [])
        .sort((first, second) => timeToMinutes(first.time) - timeToMinutes(second.time))
        .slice(0, 10)
        .map((task) => ({
          title: task.title,
          type: task.type,
          time: task.time,
          endTime: isReminderItem(task) ? normalizeOptionalEndTime(task.endTime) : "",
          duration: getVisualTaskDuration(task),
          done: Boolean(task.done),
        })),
    })),
  };
}

function createDirectoryProfilePayload(displayName) {
  const normalizedDisplayName = normalizeShedulrDisplayName(displayName);
  return {
    user_id: cloudUser.id,
    email: normalizeEmail(cloudUser.email),
    display_name: normalizedDisplayName,
    handle: createShedulrHandle(normalizedDisplayName),
    public_stats: createPublicProfileSnapshot(),
    grid_visibility: shareSettings.gridPublic ? "public" : "private",
    updated_at: new Date().toISOString(),
  };
}

async function syncPublicProfileSnapshot(options = {}) {
  if (!supabaseClient || !cloudUser) return false;

  const displayName = normalizeShedulrDisplayName(
    cloudDirectoryProfile?.displayName
    || localStorage.getItem(getShedulrNameStorageKey())
    || getActiveProfile()?.name
    || String(cloudUser.email ?? "").split("@")[0],
  );
  if (!displayName) return false;

  const { error } = await supabaseClient
    .from(USER_DIRECTORY_TABLE)
    .upsert(createDirectoryProfilePayload(displayName), { onConflict: "user_id" });

  if (error) {
    if (!options.silent) {
      const message = getDirectoryErrorMessage(error, "update your public profile");
      setFriendsStatus(message);
      showAppToast("Public profile not updated", message);
    }
    console.error(error);
    return false;
  }

  cloudDirectoryProfile = {
    ...(cloudDirectoryProfile ?? {}),
    displayName,
    handle: createShedulrHandle(displayName),
    email: normalizeEmail(cloudUser.email),
  };
  return true;
}

function applyCloudSnapshot(snapshot) {
  isApplyingCloudData = true;

  try {
    profiles = normalizeCloudProfiles(snapshot.profiles);
    activeProfileId = profiles.some((profile) => profile.id === snapshot.activeProfileId)
      ? snapshot.activeProfileId
      : profiles[0].id;
    currentTheme = snapshot.theme === "dark" ? "dark" : "light";
    currentAccentTheme = ACCENT_THEMES[snapshot.accent] ? snapshot.accent : "sleek";
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
    homeWidgets = loadHomeWidgets();
    homeWidgetLayout = loadHomeWidgetLayout();
    taskTemplates = loadTaskTemplates();
    friends = loadFriends();
    shareSettings = loadShareSettings();
    groups = loadGroups();
    notes = loadNotes();
    activeNoteId = notes[0]?.id ?? "";
    dismissedOverlapSignature = localStorage.getItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY)) ?? "";
    missedTasksCollapsed = localStorage.getItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY)) === "true";
    activeTimer = loadActiveTimer();
    displayedTodayXp = null;

    saveCustomTaskTypes();
    renderProfileControls();
    renderFriendControls();
    renderGroupControls();
    renderTaskTypeOptions();
    renderScheduleFilterControls();
    renderTaskTemplateOptions();
    renderNotes();
    renderHomeWidgetControls();
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
  writeProfileJSON(
    HOME_WIDGETS_STORAGE_KEY,
    profileId,
    Object.prototype.hasOwnProperty.call(data, "homeWidgets")
      ? normalizeHomeWidgets(data.homeWidgets)
      : DEFAULT_HOME_WIDGETS,
  );
  writeProfileJSON(
    HOME_WIDGET_LAYOUT_STORAGE_KEY,
    profileId,
    normalizeHomeWidgetLayout(data.homeWidgetLayout ?? {}),
  );
  writeProfileJSON(FRIENDS_STORAGE_KEY, profileId, normalizeFriends(data.friends));
  writeProfileJSON(SHARE_SETTINGS_STORAGE_KEY, profileId, normalizeShareSettings(data.shareSettings ?? {}));
  writeProfileJSON(NOTES_STORAGE_KEY, profileId, normalizeNotes(data.notes));
  writeProfileJSON(GROUPS_STORAGE_KEY, profileId, normalizeGroups(data.groups, profileId));

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
    void syncPublicProfileSnapshot({ silent: true });
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
  void syncPublicProfileSnapshot({ silent: true });
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
  homeWidgets = loadHomeWidgets();
  homeWidgetLayout = loadHomeWidgetLayout();
  taskTemplates = loadTaskTemplates();
  friends = loadFriends();
  shareSettings = loadShareSettings();
  groups = loadGroups();
  notes = loadNotes();
  activeNoteId = notes[0]?.id ?? "";
  dismissedOverlapSignature = localStorage.getItem(getProfileStorageKey(OVERLAP_DISMISS_STORAGE_KEY)) ?? "";
  missedTasksCollapsed = localStorage.getItem(getProfileStorageKey(MISSED_COLLAPSE_STORAGE_KEY)) === "true";
  activeTimer = loadActiveTimer();
  displayedTodayXp = null;
  saveCustomTaskTypes();
  renderProfileControls();
  renderFriendControls();
  renderGroupControls();
  renderTaskTypeOptions();
  renderScheduleFilterControls();
  renderTaskTemplateOptions();
  renderNotes();
  renderHomeWidgetControls();
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
  renderFriendControls();
  renderGroupControls();
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

function renderNotes() {
  if (!notesList || !notesEmptyState || !noteEditorFields) return;

  const sortedNotes = [...notes].sort((first, second) =>
    String(second.updatedAt ?? "").localeCompare(String(first.updatedAt ?? "")),
  );
  if (!notes.some((note) => note.id === activeNoteId)) {
    activeNoteId = sortedNotes[0]?.id ?? "";
  }

  notesList.innerHTML = sortedNotes.length
    ? sortedNotes.map(createNoteListItem).join("")
    : `
      <div class="notes-sidebar-empty">
        <strong>No notes yet</strong>
        <span>Tap New note to start.</span>
      </div>
    `;

  const activeNote = getActiveNote();
  notesEmptyState.classList.toggle("hidden", Boolean(activeNote));
  noteEditorFields.classList.toggle("hidden", !activeNote);

  if (!activeNote) return;

  noteTitleInput.value = activeNote.title;
  noteBodyEditor.innerHTML = normalizeNoteHTML(activeNote.body);
  noteSavedStatus.textContent = `Saved ${formatShortDate(activeNote.updatedAt)}`;
  requestAnimationFrame(() => {
    syncNoteCanvasSize();
    renderActiveNoteDrawing();
  });
}

function createNoteListItem(note) {
  const title = note.title || "Untitled note";
  const preview = getNotePlainText(note.body) || "No extra text";

  return `
    <button class="note-list-item ${note.id === activeNoteId ? "active" : ""}" type="button" data-note-id="${escapeHTML(note.id)}">
      <strong>${escapeHTML(title)}</strong>
      <span>${escapeHTML(preview.slice(0, 90))}</span>
      <small>${escapeHTML(formatShortDate(note.updatedAt))}</small>
    </button>
  `;
}

function handleNotesListClick(event) {
  const noteButton = event.target.closest("[data-note-id]");
  if (!noteButton) return;

  activeNoteId = noteButton.dataset.noteId;
  renderNotes();
}

function createNote() {
  const now = new Date().toISOString();
  const note = {
    id: crypto.randomUUID(),
    title: "Untitled note",
    body: "",
    drawingBaseDataUrl: "",
    drawingDataUrl: "",
    drawingStrokes: [],
    createdAt: now,
    updatedAt: now,
  };

  notes = [note, ...notes];
  activeNoteId = note.id;
  saveNotes();
  renderNotes();
  requestAnimationFrame(() => {
    noteTitleInput?.focus();
    noteTitleInput?.select();
    renderActiveNoteDrawing();
  });
}

function saveActiveNoteFromEditor() {
  const activeNote = getActiveNote();
  if (!activeNote) return;

  const now = new Date().toISOString();
  notes = notes.map((note) =>
    note.id === activeNote.id
      ? {
          ...note,
          title: normalizeNoteTitle(noteTitleInput.value),
          body: normalizeNoteHTML(noteBodyEditor.innerHTML),
          updatedAt: now,
        }
      : note,
  );
  saveNotes();
  if (noteSavedStatus) noteSavedStatus.textContent = "Saved now";
  renderNoteListOnly();
}

function renderNoteListOnly() {
  if (!notesList) return;

  const sortedNotes = [...notes].sort((first, second) =>
    String(second.updatedAt ?? "").localeCompare(String(first.updatedAt ?? "")),
  );
  notesList.innerHTML = sortedNotes.map(createNoteListItem).join("");
}

function handleNoteToolbarClick(event) {
  const button = event.target.closest("[data-note-command]");
  if (!button) return;

  event.preventDefault();
  focusNoteEditor();
  document.execCommand(button.dataset.noteCommand, false, null);
  saveActiveNoteFromEditor();
}

function applyNoteFont() {
  const fontMap = {
    system: "var(--app-font)",
    serif: "Georgia, 'Times New Roman', serif",
    mono: "'SFMono-Regular', Consolas, monospace",
    rounded: "'Arial Rounded MT Bold', 'Avenir Next Rounded', var(--app-font)",
  };
  wrapNoteSelection("fontFamily", fontMap[noteFontSelect.value] || fontMap.system);
}

function applyNoteTextSize() {
  wrapNoteSelection("fontSize", noteTextSizeSelect.value || "16px");
}

function wrapNoteSelection(styleProperty, styleValue) {
  focusNoteEditor();
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.style[styleProperty] = styleValue;

  if (range.collapsed) {
    span.append(document.createTextNode("\u200b"));
    range.insertNode(span);
    range.setStart(span.firstChild, 1);
    range.collapse(true);
  } else {
    try {
      span.append(range.extractContents());
      range.insertNode(span);
      range.selectNodeContents(span);
      range.collapse(false);
    } catch {
      document.execCommand("fontSize", false, "4");
    }
  }

  selection.removeAllRanges();
  selection.addRange(range);
  saveActiveNoteFromEditor();
}

function focusNoteEditor() {
  try {
    noteBodyEditor?.focus({ preventScroll: true });
  } catch {
    noteBodyEditor?.focus();
  }
}

function handleNotePaste(event) {
  event.preventDefault();
  const text = event.clipboardData?.getData("text/plain") ?? "";
  document.execCommand("insertText", false, text);
}

function toggleNoteSpeechToText() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    if (noteSavedStatus) noteSavedStatus.textContent = "Speech not available in this browser";
    return;
  }

  if (noteSpeechListening && noteSpeechRecognition) {
    noteSpeechRecognition.stop();
    return;
  }

  noteSpeechRecognition = new SpeechRecognition();
  noteSpeechRecognition.continuous = true;
  noteSpeechRecognition.interimResults = true;
  noteSpeechRecognition.lang = navigator.language || "en-AU";
  noteSpeechListening = true;
  noteSpeechButton?.classList.add("active");
  if (noteSavedStatus) noteSavedStatus.textContent = "Listening...";

  noteSpeechRecognition.addEventListener("result", (event) => {
    let finalText = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      if (event.results[index].isFinal) {
        finalText += event.results[index][0].transcript;
      }
    }

    if (!finalText.trim()) return;
    focusNoteEditor();
    document.execCommand("insertText", false, `${finalText.trim()} `);
    saveActiveNoteFromEditor();
  });

  noteSpeechRecognition.addEventListener("end", () => {
    noteSpeechListening = false;
    noteSpeechButton?.classList.remove("active");
    if (noteSavedStatus) noteSavedStatus.textContent = "Saved";
  });

  try {
    noteSpeechRecognition.start();
  } catch {
    noteSpeechListening = false;
    noteSpeechButton?.classList.remove("active");
  }
}

function setNoteDrawingMode(mode) {
  noteDrawingMode = mode === "eraser" ? "eraser" : mode === "pen" ? "pen" : "text";
  noteTextModeButton?.classList.toggle("active", noteDrawingMode === "text");
  notePenButton?.classList.toggle("active", noteDrawingMode === "pen");
  noteEraserButton?.classList.toggle("active", noteDrawingMode === "eraser");
  notePenPalette?.classList.toggle("hidden", noteDrawingMode !== "pen");
  noteEraserOptions?.classList.toggle("hidden", noteDrawingMode !== "eraser");
  noteDrawingCanvas?.classList.toggle("drawing-enabled", noteDrawingMode !== "text");
  noteBodyEditor?.classList.toggle("drawing-disabled", noteDrawingMode !== "text");
}

function setNotePenPreset(preset, options = {}) {
  if (!NOTE_PEN_PRESETS[preset]) return;

  notePenPreset = preset;
  const settings = NOTE_PEN_PRESETS[notePenPreset];
  if (notePenColorInput) notePenColorInput.value = settings.color;
  if (notePenSizeInput) notePenSizeInput.value = String(settings.size);
  notePenPresetButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.notePenPreset === notePenPreset);
  });
  if (options.activatePen !== false) setNoteDrawingMode("pen");
}

function setNoteEraserMode(mode, options = {}) {
  noteEraserMode = mode === "stroke" ? "stroke" : "pixel";
  noteEraserModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.noteEraserMode === noteEraserMode);
  });
  if (options.activateEraser !== false) setNoteDrawingMode("eraser");
}

function startNoteDrawing(event) {
  if (!noteDrawingCanvas || !getActiveNote() || noteDrawingMode === "text") return;

  event.preventDefault();
  const point = getCanvasPoint(event);
  if (noteDrawingMode === "eraser" && noteEraserMode === "stroke") {
    noteDrawingState = {
      pointerId: event.pointerId,
      strokeEraser: true,
      dirty: eraseNoteStrokesAtPoint(point),
      lastX: point.x,
      lastY: point.y,
    };
    noteDrawingCanvas.setPointerCapture?.(event.pointerId);
    return;
  }

  noteDrawingState = {
    pointerId: event.pointerId,
    currentStroke: createNoteDrawingStroke(point),
    lastX: point.x,
    lastY: point.y,
  };
  noteDrawingCanvas.setPointerCapture?.(event.pointerId);
  drawNoteStroke(event);
}

function drawNoteStroke(event) {
  if (!noteDrawingState || event.pointerId !== noteDrawingState.pointerId || !noteDrawingCanvas) return;

  event.preventDefault();
  const point = getCanvasPoint(event);
  if (noteDrawingState.strokeEraser) {
    noteDrawingState.dirty = eraseNoteStrokesAtPoint(point) || noteDrawingState.dirty;
    noteDrawingState.lastX = point.x;
    noteDrawingState.lastY = point.y;
    return;
  }

  const context = noteDrawingCanvas.getContext("2d");
  const stroke = noteDrawingState.currentStroke;
  stroke.points.push(point);
  drawNoteSegment(context, { x: noteDrawingState.lastX, y: noteDrawingState.lastY }, point, stroke);
  noteDrawingState.lastX = point.x;
  noteDrawingState.lastY = point.y;
}

function finishNoteDrawing(event) {
  if (!noteDrawingState) return;
  if (event?.pointerId !== undefined && event.pointerId !== noteDrawingState.pointerId) return;

  try {
    noteDrawingCanvas?.releasePointerCapture?.(noteDrawingState.pointerId);
  } catch {
    // Pointer capture may already be released.
  }
  const finishedStroke = noteDrawingState.currentStroke;
  const shouldSave = Boolean(noteDrawingState.dirty || finishedStroke?.points?.length > 1);
  if (finishedStroke?.points?.length > 1) {
    appendNoteDrawingStroke(finishedStroke);
  }
  noteDrawingState = null;
  if (shouldSave) saveActiveNoteDrawing();
}

function createNoteDrawingStroke(startPoint) {
  const preset = NOTE_PEN_PRESETS[notePenPreset] ?? NOTE_PEN_PRESETS.pen;
  const isPixelEraser = noteDrawingMode === "eraser";

  return {
    id: crypto.randomUUID(),
    tool: isPixelEraser ? "eraser" : notePenPreset,
    color: isPixelEraser ? "#000000" : notePenColorInput?.value || preset.color,
    size: Math.max(Number(notePenSizeInput?.value) || preset.size, 1),
    alpha: isPixelEraser ? 1 : preset.alpha,
    canvasWidth: noteDrawingCanvas?.width || 1200,
    canvasHeight: noteDrawingCanvas?.height || 850,
    points: [startPoint],
  };
}

function appendNoteDrawingStroke(stroke) {
  const normalizedStroke = normalizeNoteDrawingStroke(stroke);
  if (!normalizedStroke) return;

  notes = notes.map((note) =>
    note.id === activeNoteId
      ? {
          ...note,
          drawingStrokes: [...(Array.isArray(note.drawingStrokes) ? note.drawingStrokes : []), normalizedStroke].slice(-600),
          updatedAt: new Date().toISOString(),
        }
      : note,
  );
}

function drawNoteSegment(context, fromPoint, toPoint, stroke) {
  const tool = stroke.tool === "eraser" ? "eraser" : stroke.tool;
  context.save();
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = Math.max(Number(stroke.size) || 5, 1);

  if (tool === "eraser") {
    context.globalCompositeOperation = "destination-out";
    context.strokeStyle = "rgba(0, 0, 0, 1)";
    context.globalAlpha = 1;
    drawBasicNoteLine(context, fromPoint, toPoint);
    context.restore();
    return;
  }

  context.globalCompositeOperation = "source-over";
  context.strokeStyle = stroke.color || NOTE_PEN_PRESETS.pen.color;
  context.globalAlpha = Math.min(Math.max(Number(stroke.alpha) || 1, 0.1), 1);
  drawBasicNoteLine(context, fromPoint, toPoint);

  if (tool === "crayon") {
    context.globalAlpha = 0.22;
    context.lineWidth = Math.max(context.lineWidth * 0.38, 1);
    drawBasicNoteLine(context, { x: fromPoint.x + 1.6, y: fromPoint.y - 1.2 }, { x: toPoint.x + 1.6, y: toPoint.y - 1.2 });
    drawBasicNoteLine(context, { x: fromPoint.x - 1.3, y: fromPoint.y + 1.1 }, { x: toPoint.x - 1.3, y: toPoint.y + 1.1 });
  }

  context.restore();
}

function drawBasicNoteLine(context, fromPoint, toPoint) {
  context.beginPath();
  context.moveTo(fromPoint.x, fromPoint.y);
  context.lineTo(toPoint.x, toPoint.y);
  context.stroke();
}

function drawStoredNoteStroke(context, stroke) {
  const points = getScaledNoteStrokePoints(stroke);
  if (points.length < 2) return;

  const scaleX = noteDrawingCanvas.width / (Number(stroke.canvasWidth) || noteDrawingCanvas.width);
  const scaleY = noteDrawingCanvas.height / (Number(stroke.canvasHeight) || noteDrawingCanvas.height);
  const scaledStroke = {
    ...stroke,
    size: (Number(stroke.size) || 5) * Math.max(scaleX, scaleY),
  };
  points.slice(1).forEach((point, index) => {
    drawNoteSegment(context, points[index], point, scaledStroke);
  });
}

function getScaledNoteStrokePoints(stroke) {
  const sourceWidth = Number(stroke.canvasWidth) || noteDrawingCanvas?.width || 1;
  const sourceHeight = Number(stroke.canvasHeight) || noteDrawingCanvas?.height || 1;
  const scaleX = (noteDrawingCanvas?.width || sourceWidth) / sourceWidth;
  const scaleY = (noteDrawingCanvas?.height || sourceHeight) / sourceHeight;

  return (Array.isArray(stroke.points) ? stroke.points : []).map((point) => ({
    x: Number(point.x) * scaleX,
    y: Number(point.y) * scaleY,
  }));
}

function eraseNoteStrokesAtPoint(point) {
  const activeNote = getActiveNote();
  if (!activeNote || !noteDrawingCanvas) return false;

  const strokes = normalizeNoteDrawingStrokes(activeNote.drawingStrokes);
  const radius = Math.max((Number(notePenSizeInput?.value) || 8) * 1.8, 14);
  const remainingStrokes = strokes.filter((stroke) =>
    stroke.tool === "eraser" || !isNoteStrokeNearPoint(stroke, point, radius),
  );
  if (remainingStrokes.length === strokes.length) return false;

  notes = notes.map((note) =>
    note.id === activeNote.id
      ? { ...note, drawingStrokes: remainingStrokes, updatedAt: new Date().toISOString() }
      : note,
  );
  renderActiveNoteDrawing();
  return true;
}

function isNoteStrokeNearPoint(stroke, point, radius) {
  const points = getScaledNoteStrokePoints(stroke);
  if (points.length < 2) return false;

  const strokeRadius = radius + (Number(stroke.size) || 5) / 2;
  return points.slice(1).some((nextPoint, index) =>
    distanceToNoteSegment(point, points[index], nextPoint) <= strokeRadius,
  );
}

function distanceToNoteSegment(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  if (dx === 0 && dy === 0) return Math.hypot(point.x - start.x, point.y - start.y);

  const t = Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / (dx * dx + dy * dy)));
  const closestX = start.x + t * dx;
  const closestY = start.y + t * dy;
  return Math.hypot(point.x - closestX, point.y - closestY);
}

function getCanvasPoint(event) {
  const rect = noteDrawingCanvas.getBoundingClientRect();
  const scaleX = noteDrawingCanvas.width / rect.width;
  const scaleY = noteDrawingCanvas.height / rect.height;
  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY,
  };
}

function syncNoteCanvasSize() {
  if (!noteDrawingCanvas) return;

  const rect = notePage?.getBoundingClientRect();
  const nextWidth = rect?.width > 20 ? Math.round(rect.width) : 1200;
  const nextHeight = rect?.height > 20 ? Math.round(rect.height) : 850;
  if (noteDrawingCanvas.width === nextWidth && noteDrawingCanvas.height === nextHeight) return;

  noteDrawingCanvas.width = nextWidth;
  noteDrawingCanvas.height = nextHeight;
}

function renderActiveNoteDrawing() {
  if (!noteDrawingCanvas) return;

  syncNoteCanvasSize();
  const context = noteDrawingCanvas.getContext("2d");
  context.clearRect(0, 0, noteDrawingCanvas.width, noteDrawingCanvas.height);
  const activeNote = getActiveNote();
  if (!activeNote) return;

  const drawingBaseDataUrl = activeNote.drawingBaseDataUrl || (!activeNote.drawingStrokes?.length ? activeNote.drawingDataUrl : "");
  const renderStrokes = () => {
    normalizeNoteDrawingStrokes(activeNote.drawingStrokes).forEach((stroke) => drawStoredNoteStroke(context, stroke));
  };

  if (!drawingBaseDataUrl) {
    renderStrokes();
    return;
  }

  const image = new Image();
  image.addEventListener("load", () => {
    context.clearRect(0, 0, noteDrawingCanvas.width, noteDrawingCanvas.height);
    context.drawImage(image, 0, 0, noteDrawingCanvas.width, noteDrawingCanvas.height);
    renderStrokes();
  });
  image.src = drawingBaseDataUrl;
}

function saveActiveNoteDrawing() {
  const activeNote = getActiveNote();
  if (!activeNote || !noteDrawingCanvas) return;

  const drawingDataUrl = noteDrawingCanvas.toDataURL("image/png");
  notes = notes.map((note) =>
    note.id === activeNote.id
      ? {
          ...note,
          drawingBaseDataUrl: note.drawingBaseDataUrl || "",
          drawingDataUrl,
          drawingStrokes: normalizeNoteDrawingStrokes(note.drawingStrokes),
          updatedAt: new Date().toISOString(),
        }
      : note,
  );
  saveNotes();
  renderNoteListOnly();
  if (noteSavedStatus) noteSavedStatus.textContent = "Saved drawing";
}

function clearNoteDrawing() {
  if (!noteDrawingCanvas || !getActiveNote()) return;

  const context = noteDrawingCanvas.getContext("2d");
  context.clearRect(0, 0, noteDrawingCanvas.width, noteDrawingCanvas.height);
  notes = notes.map((note) =>
    note.id === activeNoteId
      ? { ...note, drawingBaseDataUrl: "", drawingDataUrl: "", drawingStrokes: [], updatedAt: new Date().toISOString() }
      : note,
  );
  saveNotes();
  renderNoteListOnly();
}

function deleteActiveNote() {
  if (!activeNoteId) return;

  notes = notes.filter((note) => note.id !== activeNoteId);
  activeNoteId = notes[0]?.id ?? "";
  saveNotes();
  renderNotes();
}

function getActiveNote() {
  return notes.find((note) => note.id === activeNoteId) ?? null;
}

function saveNotes() {
  localStorage.setItem(getProfileStorageKey(NOTES_STORAGE_KEY), JSON.stringify(notes));
  queueCloudSave();
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

function saveHomeWidgets() {
  localStorage.setItem(getProfileStorageKey(HOME_WIDGETS_STORAGE_KEY), JSON.stringify(homeWidgets));
  queueCloudSave();
}

function saveHomeWidgetLayout() {
  localStorage.setItem(getProfileStorageKey(HOME_WIDGET_LAYOUT_STORAGE_KEY), JSON.stringify(homeWidgetLayout));
  queueCloudSave();
}

function saveFriends() {
  localStorage.setItem(getProfileStorageKey(FRIENDS_STORAGE_KEY), JSON.stringify(friends));
  queueCloudSave();
}

function saveShareSettings() {
  localStorage.setItem(getProfileStorageKey(SHARE_SETTINGS_STORAGE_KEY), JSON.stringify(shareSettings));
  queueCloudSave();
}

function saveGroups() {
  localStorage.setItem(getProfileStorageKey(GROUPS_STORAGE_KEY), JSON.stringify(groups));
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

function loadHomeWidgets() {
  try {
    const savedValue = localStorage.getItem(getProfileStorageKey(HOME_WIDGETS_STORAGE_KEY));
    return savedValue === null ? DEFAULT_HOME_WIDGETS : normalizeHomeWidgets(JSON.parse(savedValue));
  } catch {
    return DEFAULT_HOME_WIDGETS;
  }
}

function loadFriends() {
  try {
    return normalizeFriends(JSON.parse(localStorage.getItem(getProfileStorageKey(FRIENDS_STORAGE_KEY))) ?? []);
  } catch {
    return [];
  }
}

function loadShareSettings() {
  try {
    return normalizeShareSettings(JSON.parse(localStorage.getItem(getProfileStorageKey(SHARE_SETTINGS_STORAGE_KEY))) ?? {});
  } catch {
    return normalizeShareSettings({});
  }
}

function loadGroups() {
  try {
    return normalizeGroups(JSON.parse(localStorage.getItem(getProfileStorageKey(GROUPS_STORAGE_KEY))) ?? []);
  } catch {
    return [];
  }
}

function loadNotes() {
  try {
    return normalizeNotes(JSON.parse(localStorage.getItem(getProfileStorageKey(NOTES_STORAGE_KEY))) ?? []);
  } catch {
    return [];
  }
}

function normalizeShareSettings(value) {
  return {
    ...DEFAULT_SHARE_SETTINGS,
    ...(value && typeof value === "object" && !Array.isArray(value) ? value : {}),
    gridPublic: Boolean(value?.gridPublic),
    activityPublic: value?.activityPublic !== false,
    leaguePublic: Boolean(value?.leaguePublic),
  };
}

function normalizeNotes(value) {
  if (!Array.isArray(value)) return [];

  return value
    .map((note) => {
      const id = String(note?.id ?? "").trim() || crypto.randomUUID();
      const createdAt = isValidDateString(note?.createdAt) ? note.createdAt : new Date().toISOString();
      const updatedAt = isValidDateString(note?.updatedAt) ? note.updatedAt : createdAt;

      return {
        id,
        title: normalizeNoteTitle(note?.title),
        body: normalizeNoteHTML(note?.body),
        drawingBaseDataUrl: normalizeNoteDrawingDataUrl(note?.drawingBaseDataUrl || note?.drawingDataUrl),
        drawingDataUrl: normalizeNoteDrawingDataUrl(note?.drawingDataUrl),
        drawingStrokes: normalizeNoteDrawingStrokes(note?.drawingStrokes),
        createdAt,
        updatedAt,
      };
    })
    .slice(0, 100);
}

function normalizeNoteTitle(value) {
  const title = String(value ?? "").trim().replace(/\s+/g, " ").slice(0, 80);
  return title || "Untitled note";
}

function normalizeNoteHTML(value) {
  const rawHTML = String(value ?? "").slice(0, 40000);
  const looksLikeHTML = /<\/?[a-z][\s\S]*>/i.test(rawHTML);
  const template = document.createElement("template");
  template.innerHTML = looksLikeHTML ? rawHTML : plainTextToNoteHTML(rawHTML);
  sanitizeNoteNode(template.content);
  return template.innerHTML;
}

function sanitizeNoteNode(root) {
  const allowedTags = new Set(["B", "STRONG", "I", "EM", "U", "BR", "DIV", "P", "SPAN", "UL", "OL", "LI"]);
  [...root.querySelectorAll("*")].forEach((element) => {
    if (!allowedTags.has(element.tagName)) {
      element.replaceWith(document.createTextNode(element.textContent ?? ""));
      return;
    }

    [...element.attributes].forEach((attribute) => {
      if (attribute.name !== "style") {
        element.removeAttribute(attribute.name);
      }
    });

    const style = element.getAttribute("style");
    if (style) {
      element.setAttribute("style", sanitizeNoteStyle(style));
      if (!element.getAttribute("style")) element.removeAttribute("style");
    }
  });
}

function sanitizeNoteStyle(style) {
  return String(style)
    .split(";")
    .map((part) => part.trim())
    .filter((part) => /^(font-family|font-size|color|background-color|text-align)\s*:/i.test(part))
    .join("; ");
}

function plainTextToNoteHTML(value) {
  const lines = String(value ?? "").split(/\r?\n/);
  return lines.length
    ? lines.map((line) => `<div>${escapeHTML(line) || "<br>"}</div>`).join("")
    : "";
}

function getNotePlainText(value) {
  const template = document.createElement("template");
  template.innerHTML = normalizeNoteHTML(value);
  return (template.content.textContent ?? "").trim().replace(/\s+/g, " ");
}

function normalizeNoteDrawingDataUrl(value) {
  const dataUrl = String(value ?? "");
  return dataUrl.startsWith("data:image/png;base64,") && dataUrl.length < 3000000 ? dataUrl : "";
}

function normalizeNoteDrawingStrokes(value) {
  if (!Array.isArray(value)) return [];

  return value
    .map(normalizeNoteDrawingStroke)
    .filter(Boolean)
    .slice(-600);
}

function normalizeNoteDrawingStroke(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const tool = ["pen", "highlighter", "crayon", "eraser"].includes(value.tool) ? value.tool : "pen";
  const points = Array.isArray(value.points)
    ? value.points
        .map((point) => ({
          x: Number(point?.x),
          y: Number(point?.y),
        }))
        .filter((point) => Number.isFinite(point.x) && Number.isFinite(point.y))
        .slice(0, 2000)
    : [];
  if (points.length < 2) return null;

  const fallbackPreset = NOTE_PEN_PRESETS[tool] ?? NOTE_PEN_PRESETS.pen;
  const size = Number(value.size);
  const alpha = Number(value.alpha);
  const canvasWidth = Number(value.canvasWidth);
  const canvasHeight = Number(value.canvasHeight);

  return {
    id: String(value.id ?? "").trim() || crypto.randomUUID(),
    tool,
    color: /^#[0-9a-f]{6}$/i.test(String(value.color ?? "")) ? String(value.color) : fallbackPreset.color,
    size: Number.isFinite(size) ? Math.min(Math.max(size, 1), 48) : fallbackPreset.size,
    alpha: Number.isFinite(alpha) ? Math.min(Math.max(alpha, 0.1), 1) : fallbackPreset.alpha,
    canvasWidth: Number.isFinite(canvasWidth) && canvasWidth > 0 ? Math.min(canvasWidth, 4000) : 1200,
    canvasHeight: Number.isFinite(canvasHeight) && canvasHeight > 0 ? Math.min(canvasHeight, 4000) : 850,
    points,
  };
}

function isValidDateString(value) {
  return !Number.isNaN(new Date(value).getTime());
}

function normalizeHomeWidgets(value) {
  const validIds = new Set(HOME_WIDGET_DEFINITIONS.map((widget) => widget.id));
  const widgets = Array.isArray(value) ? value.filter((widgetId) => validIds.has(widgetId)) : [];
  return [...new Set(widgets)];
}

function loadHomeWidgetLayout() {
  try {
    return normalizeHomeWidgetLayout(JSON.parse(localStorage.getItem(getProfileStorageKey(HOME_WIDGET_LAYOUT_STORAGE_KEY))) ?? {});
  } catch {
    return {};
  }
}

function normalizeHomeWidgetLayout(value) {
  const validIds = new Set(HOME_WIDGET_DEFINITIONS.map((widget) => widget.id));
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .filter(([widgetId, position]) =>
        validIds.has(widgetId)
        && position
        && typeof position === "object"
        && Number.isFinite(Number(position.x))
        && Number.isFinite(Number(position.y))
      )
      .map(([widgetId, position]) => [
        widgetId,
        {
          x: snapHomeWidgetValue(clamp(Number(position.x), 0, 2400)),
          y: snapHomeWidgetValue(clamp(Number(position.y), 0, 2400)),
        },
      ]),
  );
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

function parseInviteEmails(value) {
  return normalizeInviteEmails(parseInviteRecipients(value));
}

function parseInviteRecipients(value) {
  const rawValues = Array.isArray(value) ? value : [value];
  const tokens = rawValues.flatMap((rawValue) =>
    String(rawValue ?? "")
      .split(/[,\n;]+/)
      .flatMap((chunk) => {
        const trimmed = chunk.trim();
        if (!trimmed) return [];
        if (!trimmed.includes("@") && /\s/.test(trimmed)) return [trimmed];
        return trimmed.split(/\s+/);
      }),
  );
  const seen = new Set();

  return tokens
    .map((token) => token.trim())
    .filter(Boolean)
    .filter((token) => {
      const key = token.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 12);
}

function normalizeInviteEmails(value) {
  const emails = Array.isArray(value) ? value : [value];
  const seen = new Set();

  return emails
    .map(normalizeEmail)
    .filter((email) => email && email.includes("@") && email.includes("."))
    .filter((email) => {
      if (seen.has(email)) return false;
      seen.add(email);
      return true;
    });
}

function normalizeInviteLabels(value) {
  return parseInviteRecipients(value).slice(0, 12);
}

function isLikelyEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? "").trim());
}

function normalizeEmail(value) {
  return String(value ?? "").trim().toLowerCase();
}

function getTaskInviteFieldValue(task) {
  const labels = normalizeInviteLabels(task.inviteLabels);
  return (labels.length > 0 ? labels : normalizeInviteEmails(task.inviteEmails)).join(", ");
}

function normalizeInviteTitle(value) {
  const title = String(value ?? "").trim().replace(/\s+/g, " ").slice(0, 80);
  return title || "Shared task";
}

function isISODateString(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value ?? ""));
}

function isTimeInputValue(value) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(String(value ?? ""));
}

function normalizeOptionalEndTime(value) {
  return isTimeInputValue(value) ? String(value) : "";
}

function normalizeOptionalRepeatEndDate(value, startDate = "") {
  const repeatEndDate = String(value ?? "").trim();
  if (!isISODateString(repeatEndDate)) return "";
  if (isISODateString(startDate) && parseISODate(repeatEndDate) < parseISODate(startDate)) return "";
  return repeatEndDate;
}

function normalizeMeetingLink(value) {
  const rawValue = String(value ?? "").trim();
  if (!rawValue) return "";

  const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(rawValue) ? rawValue : `https://${rawValue}`;
  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    return url.href.slice(0, 500);
  } catch {
    return "";
  }
}

function normalizeTasks(savedTasks) {
  return savedTasks.map((task) => {
    const itemKind = normalizeItemKind(task.itemKind);
    const timerMode = itemKind === "reminder" ? "countdown" : normalizeTimerMode(task.timerMode);
    const isAllDay = timerMode === "all-day";
    const type = normalizeTaskTypeName(task.type);

    return {
      ...task,
      itemKind,
      time: isAllDay ? "00:00" : isTimeInputValue(task.time) ? task.time : "09:00",
      endTime: itemKind === "reminder" ? normalizeOptionalEndTime(task.endTime) : "",
      duration: itemKind === "reminder" || timerMode === "stopwatch" || isAllDay ? 0 : normalizeTaskDuration(task.duration),
      timerMode,
      priority: normalizePriority(task.priority),
      type,
      repeats: Boolean(task.repeats),
      repeatMode: getRepeatModeForItemKind(task.itemKind, task.repeatMode, "weekly"),
      repeatIntervalDays: normalizeRepeatIntervalDays(task.repeatIntervalDays),
      repeatEndDate: normalizeOptionalRepeatEndDate(task.repeatEndDate, task.date),
      repeatDays: normalizeRepeatDays(task.repeatDays),
      repeatSpecificDates: normalizeSpecificRepeatDates(task.repeatSpecificDates, task.date),
      completedDates: isAllDay ? [] : Array.isArray(task.completedDates) ? task.completedDates : [],
      skippedDates: Array.isArray(task.skippedDates) ? task.skippedDates : [],
      earnedPoints: isAllDay ? null : Number.isFinite(Number(task.earnedPoints)) ? Math.round(Number(task.earnedPoints)) : null,
      actualMinutes: isAllDay ? null : Number.isFinite(Number(task.actualMinutes)) ? Math.round(Number(task.actualMinutes)) : null,
      earnedPointsByDate: isAllDay ? {} : normalizeNumberMap(task.earnedPointsByDate),
      actualMinutesByDate: isAllDay ? {} : normalizeNumberMap(task.actualMinutesByDate),
      inviteEmails: normalizeInviteEmails(task.inviteEmails),
      inviteLabels: normalizeInviteLabels(task.inviteLabels ?? task.inviteEmails),
      sentInviteEmails: normalizeInviteEmails(task.sentInviteEmails),
      meetingLink: isMeetingType(type) ? normalizeMeetingLink(task.meetingLink) : "",
      sharedInviteId: String(task.sharedInviteId ?? ""),
      sharedByEmail: normalizeEmail(task.sharedByEmail),
      sharedByName: normalizeShedulrDisplayName(task.sharedByName),
      done: isAllDay ? false : Boolean(task.done),
      skipped: Boolean(task.skipped),
    };
  });
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
  const itemKind = normalizeItemKind(template.itemKind);
  const timerMode = itemKind === "reminder" ? "countdown" : normalizeTimerMode(template.timerMode);
  const isAllDay = timerMode === "all-day";
  const type = normalizeTaskTypeName(template.type);
  return {
    id: template.id || crypto.randomUUID(),
    itemKind,
    title: String(template.title ?? "").trim().replace(/\s+/g, " ").slice(0, 60),
    endTime: itemKind === "reminder" ? normalizeOptionalEndTime(template.endTime) : "",
    duration: itemKind === "reminder" || timerMode === "stopwatch" || isAllDay ? 0 : normalizeTaskDuration(template.duration),
    timerMode,
    type,
    notes: String(template.notes ?? "").trim().slice(0, 400),
    meetingLink: isMeetingType(type) ? normalizeMeetingLink(template.meetingLink) : "",
    priority: normalizePriority(template.priority),
    repeats: Boolean(template.repeats),
    repeatMode: getRepeatModeForItemKind(itemKind, template.repeatMode, "weekly"),
    repeatIntervalDays: normalizeRepeatIntervalDays(template.repeatIntervalDays),
    repeatEndDate: normalizeOptionalRepeatEndDate(template.repeatEndDate, ""),
    repeatDays: normalizeRepeatDays(template.repeatDays),
    repeatSpecificDates: normalizeSpecificRepeatDates(template.repeatSpecificDates),
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

function addMonths(date, amount) {
  const nextDate = new Date(date);
  const targetDay = nextDate.getDate();
  nextDate.setDate(1);
  nextDate.setMonth(nextDate.getMonth() + amount);
  const daysInTargetMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
  nextDate.setDate(Math.min(targetDay, daysInTargetMonth));
  return nextDate;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
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
