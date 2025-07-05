// script.js

// ===== Modify Completed Courses =====
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true // ✅ Marked as completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: true // ✅ Marked as completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true // ✅ Marked as completed
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// ===== DOM Elements =====
const yearSpan = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
const hamBtn = document.getElementById("ham");
const navMenu = document.getElementById("navMenu");
const courseList = document.getElementById("course-list");
const totalCredits = document.getElementById("total-credits");

// ===== Set year and last modified date =====
yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// ===== Toggle Navigation Menu =====
hamBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  hamBtn.innerHTML = navMenu.classList.contains("show") ? "&times;" : "&#9776;";
});

// ===== Render Courses =====
function renderCourses(filteredCourses) {
  courseList.innerHTML = "";
  let total = 0;

  filteredCourses.forEach(course => {
    const div = document.createElement("div");
    div.className = `course ${course.completed ? "completed" : "incomplete"}`;
    div.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title} 
  <span style="font-size: 0.8rem; color: ${course.completed ? 'green' : 'red'};">
    ${course.completed ? "✓ Completed" : "✗ Incomplete"}
  </span>
</h3>

      <p>${course.description}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
    `;
    courseList.appendChild(div);
    total += course.credits;
  });

  totalCredits.textContent = `Total Credits: ${total}`;
}

// ===== Filter Courses =====
function filterCourses(category) {
  if (category === "All") renderCourses(courses);
  else renderCourses(courses.filter(c => c.subject === category));
}

// ===== Event Listeners =====
document.getElementById("all").addEventListener("click", () => filterCourses("All"));
document.getElementById("wdd").addEventListener("click", () => filterCourses("WDD"));
document.getElementById("cse").addEventListener("click", () => filterCourses("CSE"));

// ===== Initial Render =====
renderCourses(courses);
