export async function getBoard({ id }) {
  id = Number(id); // Convert id to a number
  switch (id) {
    case 1:
      return {
        id: 1,
        title: "Active Development",
        icon: "pyramid",
        columns: [
          {
            title: "To Do",
            tasks: [
              {
                position: 0,
                category: "bug fixes",
                title: "Fix the bugs found in log-in process",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
              {
                position: 1,
                category: "UX IMPROVEMENTS",
                title: "Improve scrolling performance in large boards",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
              {
                position: 2,
                category: "CARDS",
                title: "Custom fields in cards",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
            ],
          },
          {
            title: "In Progress",
            tasks: [
              {
                position: 0,
                category: "ONBOARDING",
                title: "Improve signup flow",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
              {
                position: 1,
                category: "DOCUMENTS",
                title: "Add initial version of documents to app",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
            ],
          },
          {
            title: "Done",
            tasks: [
              {
                position: 0,
                category: "COLOR",
                title: "Remove all color from the app",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
              {
                position: 1,
                category: "TAGS",
                title: "Follow up work on tags",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
              {
                position: 2,
                category: "CARD DESCRIPTIONS",
                title:
                  "Improve editing features in card descriptions so text can be richer than before",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
              {
                position: 3,
                category: "COLOR",
                title: "Found some more color, so remove that too",
                assignee: "Brad Simantel",
                tags: [],
                comments: [],
              },
            ],
          },
        ],
      };
    case 2:
      return {
        id: 2,
        title: "Active Development",
        icon: "pyramid",
        columns: [],
      };
    case 3:
      return {
        id: 3,
        title: "Active Development",
        icon: "pyramid",
        columns: [],
      };
    default:
      return null; // Handle cases where id doesn't match any case
  }
}
