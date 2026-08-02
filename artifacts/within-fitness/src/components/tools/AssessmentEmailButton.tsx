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
  const href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(REPORT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Open Gmail with your results ready to send"
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary/15 hover:bg-primary/25 border border-primary/30 hover:border-primary/60 text-white text-sm font-semibold transition-all"
    >
      <Mail className="w-4 h-4 text-primary" />
      Open Gmail to Send
    </a>
  );
}