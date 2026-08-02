import { Mail } from "lucide-react";

const REPORT_EMAIL = "veog526@gmail.com";

type AssessmentEmailButtonProps = {
  subject: string;
  body: string;
};

export function AssessmentEmailButton({
  subject,
  body,
}: AssessmentEmailButtonProps) {
  const href = `mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary/15 hover:bg-primary/25 border border-primary/30 hover:border-primary/60 text-white text-sm font-semibold transition-all"
    >
      <Mail className="w-4 h-4 text-primary" />
      Email Results
    </a>
  );
}