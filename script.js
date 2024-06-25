// script.js
let streak = 0;

function incrementStreak() {
    streak++;
    updateStreakCount();
}

function resetStreak() {
    streak = 0;
    updateStreakCount();
}

function updateStreakCount() {
    const streakCount = document.querySelector('.streak-count');
    streakCount.textContent = streak;
    streakCount.style.animation = 'none';
    setTimeout(() => streakCount.style.animation = '', 10);
}
