import * as Yup from "yup";

export const schemaValidation = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters"),

  summary: Yup.string()
    .required("Summary is required")
    .min(30, "Summary at least 30 characters"),

  description: Yup.string()
    .required("Description is required")
    .min(200, "Description must be at least 200 characters")
    .max(3000, "Description must not exceed 3000 characters"),

  hackathonName: Yup.string()
    .required("Hackathon name is required")
    .min(10, "Hackathon name must be at least 10 characters"),

  hackathonStartDate: Yup.date()
    .required("Start date is required")
    .min(new Date(), "Start date must be in the future"),

  hackathonEndDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("hackathonStartDate"), "End date must be after start date"),

  githubRepositoryLink: Yup.string()
    .required("GitHub repository link is required")
    .min(5, "GitHub repository link must be at least 5 characters")
    .matches(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[^\s]*$/,
      "Enter a correct URL format for GitHub repository link!"
    ),

  otherLinks: Yup.string()
    .min(5, "Other links must be at least 5 characters")
    .matches(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[^\s]*$/,
      "Enter a correct URL format for other links!"
    ),
});
