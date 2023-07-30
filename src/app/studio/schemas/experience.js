const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "job",
      title: "Job",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
  ],
};

export default experience;
