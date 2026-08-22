import { NextResponse } from "next/server";

const LEETCODE_USERNAME = "XuwoembeVc";

// ---- LeetCode GraphQL (primary) ----
async function fetchLeetCodeGraphQL() {
  const query = `
    query getUserProfile($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
        userCalendar {
          submissionCalendar
          totalActiveDays
          streak
        }
        profile {
          ranking
        }
      }
    }
  `;

  const res = await fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
      Origin: "https://leetcode.com",
    },
    body: JSON.stringify({
      query,
      variables: { username: LEETCODE_USERNAME },
    }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`LeetCode GraphQL returned ${res.status}`);

  const json = await res.json();

  if (json.errors || !json.data?.matchedUser) {
    throw new Error(json.errors?.[0]?.message || "No user data found");
  }

  const user = json.data.matchedUser;
  const allQ = json.data.allQuestionsCount;
  const ac = user.submitStatsGlobal.acSubmissionNum;

  const find = (arr: { difficulty: string; count: number }[], d: string) =>
    arr.find((x) => x.difficulty === d)?.count || 0;

  return {
    totalSolved: find(ac, "All"),
    easySolved: find(ac, "Easy"),
    mediumSolved: find(ac, "Medium"),
    hardSolved: find(ac, "Hard"),
    totalEasy: find(allQ, "Easy"),
    totalMedium: find(allQ, "Medium"),
    totalHard: find(allQ, "Hard"),
    ranking: user.profile.ranking,
    streak: user.userCalendar.streak,
    totalActiveDays: user.userCalendar.totalActiveDays,
    submissionCalendar: JSON.parse(
      user.userCalendar.submissionCalendar || "{}"
    ),
  };
}

// ---- alfa-leetcode-api (fallback) ----
async function fetchAlfaAPI() {
  const res = await fetch(
    `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error(`Alfa API returned ${res.status}`);

  const data = await res.json();

  const calendar =
    typeof data.submissionCalendar === "string"
      ? JSON.parse(data.submissionCalendar || "{}")
      : data.submissionCalendar || {};

  return {
    totalSolved: data.totalSolved ?? 0,
    easySolved: data.easySolved ?? 0,
    mediumSolved: data.mediumSolved ?? 0,
    hardSolved: data.hardSolved ?? 0,
    totalEasy: data.totalEasy ?? 800,
    totalMedium: data.totalMedium ?? 1700,
    totalHard: data.totalHard ?? 700,
    ranking: data.ranking ?? 0,
    streak: 0,
    totalActiveDays: 0,
    submissionCalendar: calendar,
  };
}

// ---- Route Handler ----
export async function GET() {
  // Try LeetCode GraphQL first, fallback to alfa-leetcode-api
  try {
    const data = await fetchLeetCodeGraphQL();
    return NextResponse.json(data);
  } catch (e) {
    console.error("LeetCode GraphQL failed:", e);
  }

  try {
    const data = await fetchAlfaAPI();
    return NextResponse.json(data);
  } catch (e) {
    console.error("Alfa LeetCode API failed:", e);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    );
  }
}
