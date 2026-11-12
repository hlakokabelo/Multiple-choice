type Status = "idle" | "correct" | "wrong";

const statusClasses: Record<Status, string> = {
  idle: "border-slate-700 bg-slate-900 enabled:hover:border-sky-400 enabled:hover:bg-slate-800",
  correct: "border-green-500 bg-green-500/10",
  wrong: "border-red-500 bg-red-500/10",
};

const keyClasses: Record<Status, string> = {
  idle: "bg-slate-700 text-slate-200",
  correct: "bg-green-500 text-green-950",
  wrong: "bg-red-500 text-red-950",
};

interface OptionButtonProps {
  letter: string;
  text: string;
  status: Status;
  disabled: boolean;
  onClick: () => void;
}

export default function OptionButton({
  letter,
  text,
  status,
  disabled,
  onClick,
}: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] transition-colors ${statusClasses[status]} ${
        disabled ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <span
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[13px] font-semibold ${keyClasses[status]}`}
      >
        {letter}
      </span>
      <span>{text}</span>
    </button>
  );
}
