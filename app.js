const STORAGE_KEY = "daily-task-scheduler.tasks";
const THEME_STORAGE_KEY = "daily-task-scheduler.theme";
const ACCENT_STORAGE_KEY = "daily-task-scheduler.accent";
const TYPE_STORAGE_KEY = "daily-task-scheduler.custom-types";
const GOAL_STORAGE_KEY = "daily-task-scheduler.weekly-goals";
const SCHEDULE_DAYS_TO_SHOW = 30;
const GRID_MINUTE_HEIGHT = 2.05;
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const BUILT_IN_TASK_TYPES = ["Focus", "Personal", "Study", "Health", "Errand"];

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
const weeklyReport = document.querySelector("#weeklyReport");
const statsGrid = document.querySelector("#statsGrid");
const statsRange = document.querySelector("#statsRange");
const weeklyGoalInputs = document.querySelectorAll(".weekly-goal-select");
const todayCount = document.querySelector("#todayCount");
const todaySummary = document.querySelector("#todaySummary");
const todayLabel = document.querySelector("#todayLabel");
const scheduleFilter = document.querySelector("#scheduleFilter");
const scheduleGridRange = document.querySelector("#scheduleGridRange");
const scheduleControls = document.querySelector(".schedule-controls");
const scheduleViewButtons = document.querySelectorAll(".view-button");
const gridZoomInButton = document.querySelector("#gridZoomIn");
const gridZoomOutButton = document.querySelector("#gridZoomOut");
const gridZoomLevel = document.querySelector("#gridZoomLevel");
const taskDateInput = document.querySelector("#taskDate");
const taskTypeInput = document.querySelector("#taskType");
const customTaskTypeInput = document.querySelector("#customTaskType");
const taskRepeatsInput = document.querySelector("#taskRepeats");
const weekdayPicker = document.querySelector("#weekdayPicker");
const menuButton = document.querySelector("#menuButton");
const closeMenuButton = document.querySelector("#closeMenuButton");
const sideMenu = document.querySelector("#sideMenu");
const drawerOverlay = document.querySelector("#drawerOverlay");
const colourThemeButtons = document.querySelectorAll(".colour-button");

let tasks = loadTasks();
let customTaskTypes = mergeCustomTaskTypes(loadCustomTaskTypes(), tasks.map((task) => task.type));
let weeklyGoals = loadWeeklyGoals();
let currentTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? "light";
let currentAccentTheme = localStorage.getItem(ACCENT_STORAGE_KEY) ?? "green";
let scheduleView = "list";
let scheduleGridZoom = 1;
let pinchStartDistance = 0;
let pinchStartZoom = 1;

const TASK_TYPE_STYLES = {
  Focus: { color: "#2d6f9f", bg: "rgba(45, 111, 159, 0.14)" },
  Personal: { color: "#8a5fbf", bg: "rgba(138, 95, 191, 0.16)" },
  Study: { color: "#2e7d5b", bg: "rgba(46, 125, 91, 0.15)" },
  Health: { color: "#c95f4f", bg: "rgba(201, 95, 79, 0.14)" },
  Errand: { color: "#b2832f", bg: "rgba(178, 131, 47, 0.16)" },
};

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
};

const today = new Date();
const todayISO = toDateInputValue(today);
taskDateInput.value = todayISO;
todayLabel.textContent = today.toLocaleDateString(undefined, {
  weekday: "long",
  month: "short",
  day: "numeric",
});
saveCustomTaskTypes();
renderTaskTypeOptions();
applyWeeklyGoalsToControls();
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
statsRange.addEventListener("change", render);
scheduleGrid.addEventListener("wheel", handleScheduleGridZoom, { passive: false });
scheduleGrid.addEventListener("touchstart", handleGridTouchStart, { passive: false });
scheduleGrid.addEventListener("touchmove", handleGridTouchMove, { passive: false });
scheduleGrid.addEventListener("touchend", resetGridPinch);
gridZoomInButton.addEventListener("click", () => setScheduleGridZoom(scheduleGridZoom + 0.15));
gridZoomOutButton.addEventListener("click", () => setScheduleGridZoom(scheduleGridZoom - 0.15));
taskTypeInput.addEventListener("change", toggleCustomTypeInput);
menuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
drawerOverlay.addEventListener("click", closeMenu);

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

taskList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest("[data-task-id]");
  const taskId = card.dataset.taskId;
  const occurrenceDate = card.dataset.occurrenceDate;

  if (button.dataset.action === "toggle") {
    tasks = tasks.map((task) => toggleTaskCompletion(task, taskId, occurrenceDate));
  }

  if (button.dataset.action === "delete") {
    tasks = tasks.filter((task) => task.id !== taskId);
  }

  saveTasks();
  render();
});

render();

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
  const occurrences = buildScheduleOccurrences();
  const visibleOccurrences = occurrences.filter(matchesCurrentFilter);
  const gridOccurrences = getGridOccurrences(occurrences);
  const completedToday = occurrences.filter(
    (task) => task.occurrenceDate === todayISO && task.done,
  );
  const pointsToday = completedToday.reduce((total, task) => total + calculatePoints(task), 0);

  taskCount.textContent = tasks.length;
  completedCount.textContent = completedToday.length;
  completedPoints.textContent = formatPoints(pointsToday);
  renderTodaySummary(occurrences);

  scheduleViewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === scheduleView);
  });
  scheduleControls.classList.toggle("grid-mode", scheduleView === "grid");
  updateScheduleGridZoomControls();

  taskList.innerHTML = visibleOccurrences.map(createTaskCard).join("");
  scheduleGrid.innerHTML = createScheduleGrid(gridOccurrences);
  taskList.classList.toggle("hidden", scheduleView !== "list");
  scheduleGrid.classList.toggle("active", scheduleView === "grid");
  emptyState.classList.toggle("visible", scheduleView === "list" && visibleOccurrences.length === 0);
  renderOverlapAlert(scheduleView === "grid" ? gridOccurrences : visibleOccurrences);
  completedTaskList.innerHTML = completedToday.map(createCompletedTaskCard).join("");
  completedEmptyState.classList.toggle("visible", completedToday.length === 0);
  const completedHistory = buildCompletedHistory();
  weeklyReport.innerHTML = createWeeklyReport(completedHistory);
  statsGrid.innerHTML = createStatsPanel(completedHistory);
}

function buildScheduleOccurrences() {
  const scheduleStart = startOfToday(new Date());
  const scheduleEnd = addDays(scheduleStart, SCHEDULE_DAYS_TO_SHOW);

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
  return {
    ...task,
    occurrenceDate: date,
    done: task.repeats ? completedDates.includes(date) : Boolean(task.done),
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
  const doneLabel = task.done ? "Undo" : "Done";
  const typeStyle = createTypeStyleAttribute(task.type);

  return `
    <article class="task-card ${task.done ? "done" : ""}" data-task-id="${task.id}" data-occurrence-date="${task.occurrenceDate}" ${typeStyle}>
      <div class="time-block">
        <strong>${timeLabel}</strong>
        <span>${dayLabel}</span>
      </div>
      <div>
        <div class="task-title">${escapeHTML(task.title)}</div>
        ${notes}
        <div class="task-meta">
          <span class="chip">${task.duration} min</span>
          <span class="chip type-chip">${escapeHTML(task.type)}</span>
          <span class="chip">${escapeHTML(repeatLabel)}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="icon-button" type="button" data-action="toggle" title="${doneLabel}" aria-label="${doneLabel}">
          ${doneLabel}
        </button>
        <button class="icon-button delete" type="button" data-action="delete" title="Delete" aria-label="Delete">
          Del
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
  const typeStyle = createTypeStyleAttribute(task.type);

  return `
    <article class="task-card done" ${typeStyle}>
      <div class="time-block">
        <strong>${timeLabel}</strong>
        <span>${dayLabel}</span>
      </div>
      <div>
        <div class="task-title">${escapeHTML(task.title)}</div>
        ${notes}
        <div class="task-meta">
          <span class="chip">${task.duration} min</span>
          <span class="chip type-chip">${escapeHTML(task.type)}</span>
          <span class="chip">${escapeHTML(repeatLabel)}</span>
        </div>
      </div>
      <div class="points-chip">+${formatPoints(points)} pts</div>
    </article>
  `;
}

function createScheduleGrid(occurrences) {
  return scheduleGridRange.value === "day"
    ? createDayScheduleGrid(occurrences)
    : createWeekScheduleGrid(occurrences);
}

function createDayScheduleGrid(occurrences) {
  const tasksByDate = groupTasksByDate(occurrences);
  const dayTasks = tasksByDate.get(todayISO) ?? [];
  const bounds = getDayTimelineBounds(dayTasks);
  const timelineItems = assignTimelineLanes(dayTasks);

  return `
    <section class="day-grid-card">
      <div class="day-grid-header">
        <h3>${formatDateHeading(todayISO)}</h3>
        <span>${dayTasks.length} task${dayTasks.length === 1 ? "" : "s"}</span>
      </div>
      <div class="day-timeline" data-total-minutes="${bounds.totalMinutes}" style="--timeline-height: ${getTimelineHeight(bounds.totalMinutes)}px;">
        <div class="time-labels">${createTimelineLabels(bounds)}</div>
        <div class="timeline-board">
          ${createTimelineLines(bounds)}
          ${timelineItems.map((item) => createTimelineTask(item, bounds)).join("")}
        </div>
      </div>
    </section>
  `;
}

function createWeekScheduleGrid(occurrences) {
  const weekDates = getCurrentWeekDates();
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
        <div class="week-day-column ${date === todayISO ? "today" : ""}">
          ${timelineItems.map((item) => createTimelineTask(item, bounds, "week-task")).join("")}
        </div>
      `;
    })
    .join("");

  return `
    <section class="day-grid-card week-grid-card">
      <div class="day-grid-header">
        <h3>This week</h3>
        <span>${allWeekTasks.length} task${allWeekTasks.length === 1 ? "" : "s"}</span>
      </div>
      <div class="week-days-header">
        <span></span>
        ${dateLabels}
      </div>
      <div class="day-timeline week-timeline" data-total-minutes="${bounds.totalMinutes}" style="--timeline-height: ${getTimelineHeight(bounds.totalMinutes)}px;">
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
    overlapAlert.classList.remove("visible");
    overlapAlert.innerHTML = "";
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
  overlapAlert.innerHTML = `
    <strong>Overlap warning</strong>
    <p>${overlaps.length} overlap${overlaps.length === 1 ? "" : "s"} found in this schedule view.</p>
    <ul>${previewItems}</ul>
    ${extraCount}
  `;
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
    const day = parseISODate(todayISO);
    return { start: day, end: day };
  }

  const weekStart = getCurrentWeekStart();
  return { start: weekStart, end: addDays(weekStart, 6) };
}

function matchesGridStatusFilter(task) {
  const filter = scheduleFilter.value;
  const taskDateTime = new Date(`${task.occurrenceDate}T${task.time}`);
  const now = new Date();

  if (filter === "upcoming") return !task.done && taskDateTime >= startOfToday(now);
  if (filter === "done") return task.done;
  if (filter === "today") return !task.done;
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
  const items = dayTasks
    .map((task) => ({ task, range: getTaskTimeRange(task), lane: 0, laneCount: 1 }))
    .sort((a, b) => a.range.start - b.range.start || a.range.end - b.range.end);

  items.forEach((item) => {
    const lane = laneEnds.findIndex((end) => end <= item.range.start);
    item.lane = lane === -1 ? laneEnds.length : lane;
    laneEnds[item.lane] = item.range.end;
  });

  const laneCount = Math.max(laneEnds.length, 1);
  return items.map((item) => ({ ...item, laneCount }));
}

function createTimelineTask(item, bounds, extraClass = "") {
  const { task, range, lane, laneCount } = item;
  const top = ((range.start - bounds.start) / bounds.totalMinutes) * 100;
  const height = Math.max((Math.min(range.end, bounds.end) - range.start) / bounds.totalMinutes * 100, 1.8);
  const laneWidth = 100 / laneCount;
  const laneLeft = lane * laneWidth;
  const typeStyle = getTaskTypeStyle(task.type);

  return `
    <article
      class="timeline-task ${extraClass} ${task.done ? "done" : ""}"
      style="--task-top: ${top.toFixed(2)}%; --task-height: ${height.toFixed(2)}%; --task-left: ${laneLeft.toFixed(2)}%; --task-width: ${laneWidth.toFixed(2)}%; --type-color: ${typeStyle.color}; --type-bg: ${typeStyle.bg};"
    >
      <span class="timeline-time">${formatTimeRange(task)}</span>
      <strong class="timeline-title">${escapeHTML(task.title)}</strong>
      <small class="timeline-meta">${escapeHTML(task.type)} &middot; ${task.duration} min</small>
    </article>
  `;
}

function createTimelineLabels(bounds) {
  return getTimelineHours(bounds)
    .map((minute) => {
      const top = ((minute - bounds.start) / bounds.totalMinutes) * 100;
      return `<span style="top: ${top.toFixed(2)}%">${formatTimeFromMinutes(minute)}</span>`;
    })
    .join("");
}

function createTimelineLines(bounds) {
  return getTimelineHours(bounds)
    .map((minute) => {
      const top = ((minute - bounds.start) / bounds.totalMinutes) * 100;
      return `<span class="timeline-line" style="top: ${top.toFixed(2)}%"></span>`;
    })
    .join("");
}

function getTimelineHours(bounds) {
  const hours = [];
  for (let minute = bounds.start; minute <= bounds.end; minute += 60) {
    hours.push(minute);
  }
  return hours;
}

function getDayTimelineBounds(dayTasks) {
  if (dayTasks.length === 0) {
    return {
      start: 6 * 60,
      end: 22 * 60,
      totalMinutes: 16 * 60,
    };
  }

  const ranges = dayTasks.map(getTaskTimeRange);
  const earliest = Math.min(...ranges.map((range) => range.start), 6 * 60);
  const latest = Math.max(...ranges.map((range) => range.end), 22 * 60);
  const start = Math.max(0, Math.floor(earliest / 60) * 60);
  const end = Math.min(24 * 60, Math.ceil(latest / 60) * 60);

  return {
    start,
    end,
    totalMinutes: Math.max(end - start, 60),
  };
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

function formatDateHeading(isoDate) {
  return parseISODate(isoDate).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatWeekDayHeading(isoDate) {
  return parseISODate(isoDate).toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
  });
}

function getCurrentWeekDates() {
  const weekStart = getCurrentWeekStart();
  return Array.from({ length: 7 }, (_, index) => toDateInputValue(addDays(weekStart, index)));
}

function getCurrentWeekStart() {
  const day = today.getDay();
  const daysSinceMonday = (day + 6) % 7;
  return addDays(startOfToday(today), -daysSinceMonday);
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
}

function getTimelineHeight(totalMinutes) {
  return Math.round(totalMinutes * GRID_MINUTE_HEIGHT * scheduleGridZoom);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function createStatsPanel(completedHistory) {
  const days = Number(statsRange.value);
  const dailyStats = buildDailyStats(completedHistory, days);
  const totalTasks = dailyStats.reduce((total, day) => total + day.tasks, 0);
  const totalPoints = dailyStats.reduce((total, day) => total + day.points, 0);

  return `
    <article class="stat-card stat-card-wide">
      <div class="stats-overview">
        <div>
          <h3>${getStatsRangeLabel(days)}</h3>
          <p>Points earned from completed tasks in this time period.</p>
        </div>
        <div class="stat-summary-row">
          <div>
            <span>Points</span>
            <strong>${formatPoints(totalPoints)}</strong>
          </div>
          <div>
            <span>Tasks</span>
            <strong>${totalTasks}</strong>
          </div>
        </div>
      </div>
      ${createPointsChart(dailyStats, days)}
    </article>
  `;
}

function createWeeklyReport(completedHistory) {
  const report = buildWeeklyReport(completedHistory);
  const bonusPoints = calculateWeeklyBonusPoints(report);
  const reportBadge = today.getDay() === 1 ? "Monday report ready" : "Updates every Monday";
  const currentPeriod = `${formatDateHeading(report.current.startISO)} - ${formatDateHeading(report.current.endISO)}`;
  const previousPeriod = `${formatDateHeading(report.previous.startISO)} - ${formatDateHeading(report.previous.endISO)}`;

  return `
    <section class="weekly-report-card">
      <div class="weekly-report-header">
        <div>
          <span class="report-kicker">${reportBadge}</span>
          <h3>Weekly Report</h3>
          <p>${currentPeriod} compared with ${previousPeriod}.</p>
        </div>
        <div class="report-score-stack">
          <div class="report-score">
            <strong>${formatPoints(report.current.points)}</strong>
            <span>points last week</span>
          </div>
          <div class="report-score bonus-score">
            <strong>+${formatPoints(bonusPoints)}</strong>
            <span>bonus points</span>
          </div>
        </div>
      </div>
      <div class="weekly-metrics">
        ${createWeeklyMetric("Points", "points", report.current.points, report.previous.points, formatPoints)}
        ${createWeeklyMetric("Hours", "hours", report.current.hours, report.previous.hours, formatHours)}
        ${createWeeklyMetric("Tasks", "tasks", report.current.tasks, report.previous.tasks, String)}
      </div>
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
  const minutes = completed.reduce((total, task) => total + Number(task.duration), 0);
  const points = completed.reduce((total, task) => total + calculatePoints(task), 0);

  return {
    startISO: toDateInputValue(start),
    endISO: toDateInputValue(end),
    tasks: completed.length,
    hours: minutes / 60,
    points,
  };
}

function createWeeklyMetric(label, goalKey, current, previous, formatter) {
  const change = calculatePercentChange(current, previous);
  const goal = weeklyGoals[goalKey];
  const bonusPoints = calculateMetricBonusPoints(change, goal);
  const direction = current > previous ? "up" : current < previous ? "down" : "flat";
  const directionLabel = direction === "up" ? "increase" : direction === "down" ? "decrease" : "no change";

  return `
    <article class="weekly-metric ${direction}">
      <span>${label}</span>
      <strong>${formatter(current)}</strong>
      <div class="metric-change">${formatPercentChange(change)} ${directionLabel}</div>
      <div class="goal-result ${bonusPoints > 0 ? "met" : ""}">${createGoalResultText(goal, change, bonusPoints)}</div>
      <small>Previous: ${formatter(previous)}</small>
    </article>
  `;
}

function createGoalResultText(goal, change, bonusPoints) {
  if (goal === 0) return "No goal set";
  if (bonusPoints > 0) return `Goal +${goal}% met &middot; +${formatPoints(bonusPoints)} bonus`;

  const remaining = Math.max(goal - change, 0);
  return `Goal +${goal}% · ${formatPoints(remaining)}% to go`;
}

function calculateWeeklyBonusPoints(report) {
  return (
    calculateMetricBonusPoints(calculatePercentChange(report.current.points, report.previous.points), weeklyGoals.points) +
    calculateMetricBonusPoints(calculatePercentChange(report.current.hours, report.previous.hours), weeklyGoals.hours) +
    calculateMetricBonusPoints(calculatePercentChange(report.current.tasks, report.previous.tasks), weeklyGoals.tasks)
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
    return "Great week. Points, hours, and completed tasks all increased compared with the week before.";
  }

  if (decreasedCount === trackedMetrics.length) {
    return "This week was lighter across points, hours, and tasks. The report gives you a clean reset for the next week.";
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

function buildDailyStats(completedHistory, days) {
  const start = addDays(startOfToday(new Date()), -(days - 1));
  const statsByDate = new Map();

  for (let index = 0; index < days; index += 1) {
    const date = toDateInputValue(addDays(start, index));
    statsByDate.set(date, { date, tasks: 0, points: 0 });
  }

  completedHistory.forEach((task) => {
    const day = statsByDate.get(task.occurrenceDate);
    if (!day) return;

    day.tasks += 1;
    day.points += calculatePoints(task);
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
    <svg class="line-chart detailed-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Points earned over ${days} days">
      ${yAxis}
      <line class="chart-axis" x1="${chartLeft}" y1="${chartTop}" x2="${chartLeft}" y2="${chartTop + chartHeight}"></line>
      <line class="chart-axis" x1="${chartLeft}" y1="${chartTop + chartHeight}" x2="${width - chartRight}" y2="${chartTop + chartHeight}"></line>
      <text class="chart-axis-title chart-axis-title-y" x="18" y="${chartTop + chartHeight / 2}" transform="rotate(-90 18 ${chartTop + chartHeight / 2})">Points</text>
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
  const filter = scheduleFilter.value;
  const taskDateTime = new Date(`${task.occurrenceDate}T${task.time}`);
  const now = new Date();

  if (filter === "today") return task.occurrenceDate === todayISO && !task.done;
  if (filter === "upcoming") return !task.done && taskDateTime >= startOfToday(now);
  if (filter === "done") return task.done;
  return true;
}

function toggleTaskCompletion(task, taskId, occurrenceDate) {
  if (task.id !== taskId) return task;

  if (!task.repeats) {
    return { ...task, done: !task.done };
  }

  const completedDates = Array.isArray(task.completedDates) ? task.completedDates : [];
  const alreadyDone = completedDates.includes(occurrenceDate);
  return {
    ...task,
    completedDates: alreadyDone
      ? completedDates.filter((date) => date !== occurrenceDate)
      : [...completedDates, occurrenceDate],
  };
}

function resetForm() {
  taskForm.reset();
  taskDateInput.value = todayISO;
  document.querySelector("#taskDuration").value = "30";
  taskTypeInput.value = BUILT_IN_TASK_TYPES[0];
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

function createRepeatLabel(repeatDays) {
  if (!repeatDays.length) return "Weekly";
  if (repeatDays.length === 7) return "Every day";
  return `Weekly: ${repeatDays.map((day) => DAY_NAMES[day]).join(", ")}`;
}

function calculatePoints(task) {
  return (Number(task.duration) / 30) * 10;
}

function formatPoints(points) {
  return Number.isInteger(points) ? String(points) : points.toFixed(1);
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = currentTheme;
  localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  applyAccentTheme(currentAccentTheme, false);

  document.querySelectorAll(".theme-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === currentTheme);
  });
}

function applyAccentTheme(theme, shouldSave = true) {
  currentAccentTheme = ACCENT_THEMES[theme] ? theme : "green";
  const accent = ACCENT_THEMES[currentAccentTheme][currentTheme];

  [document.documentElement, document.body].forEach((element) => {
    element.style.setProperty("--green", accent.accent);
    element.style.setProperty("--green-dark", accent.strong);
    element.style.setProperty("--accent-soft", accent.soft);
    element.style.setProperty("--accent-faint", accent.faint);
    element.style.setProperty("--accent-border", accent.border);
  });

  if (shouldSave) {
    localStorage.setItem(ACCENT_STORAGE_KEY, currentAccentTheme);
  }

  colourThemeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.colourTheme === currentAccentTheme);
  });
}

function openMenu() {
  sideMenu.classList.add("open");
  drawerOverlay.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  sideMenu.classList.remove("open");
  drawerOverlay.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function saveCustomTaskTypes() {
  localStorage.setItem(TYPE_STORAGE_KEY, JSON.stringify(customTaskTypes));
}

function saveWeeklyGoals() {
  localStorage.setItem(GOAL_STORAGE_KEY, JSON.stringify(weeklyGoals));
}

function loadTasks() {
  try {
    return normalizeTasks(JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []);
  } catch {
    return [];
  }
}

function loadCustomTaskTypes() {
  try {
    return mergeCustomTaskTypes(JSON.parse(localStorage.getItem(TYPE_STORAGE_KEY)) ?? [], []);
  } catch {
    return [];
  }
}

function loadWeeklyGoals() {
  try {
    return normalizeWeeklyGoals(JSON.parse(localStorage.getItem(GOAL_STORAGE_KEY)) ?? {});
  } catch {
    return normalizeWeeklyGoals({});
  }
}

function normalizeWeeklyGoals(savedGoals) {
  return {
    points: normalizeGoalValue(savedGoals.points),
    hours: normalizeGoalValue(savedGoals.hours),
    tasks: normalizeGoalValue(savedGoals.tasks),
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
    repeats: Boolean(task.repeats),
    repeatDays: Array.isArray(task.repeatDays) ? task.repeatDays.map(Number) : [],
    completedDates: Array.isArray(task.completedDates) ? task.completedDates : [],
  }));
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
