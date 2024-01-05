import exampleResume from "./components/exampleResume";
import { ResumeSchema } from "./components/resumeTypes";

const bruh = Object.keys(exampleResume);
console.log(bruh);

type bruh = keyof ResumeSchema;
