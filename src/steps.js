import { TourProvider } from "@reactour/tour";

export const steps = [
  {
    selector: "#step1",
    content: "This is the first step!",
  },
  {
    selector: "#step2",
    content: "And this is the second one!",
  },
  {
    selector: ".open-modal-button",
    content: "We will now open the modal.",
  },
  {
    selector: ".modal-text",
    content: "This is modal text.",
  },
  // ... more steps
];

export default steps;
